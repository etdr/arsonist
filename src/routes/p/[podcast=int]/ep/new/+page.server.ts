
import db from '$lib/server/db'
import type { RequestEvent } from '@sveltejs/kit'
import { redirect } from '@sveltejs/kit'


interface EncFile {
  enclosureUrl: string
  enclosureLen: number
  enclosureType: string
}

interface EpisodeForm {
  podcastId: number
  title: string
  description: string
  explicit?: boolean
  duration: number
}



export const actions = {
  async create (e: RequestEvent) {
    const podcastId = parseInt(e.params.podcast!, 10)
    const fd = await e.request.formData()


    const encData = {
      enclosureUrl: '',
      enclosureLen: 0,
      enclosureType: ''
    }
    // console.log(fd)
    const enclosureFile = fd.get('enclosure')
    
    if (enclosureFile) {

      const f = enclosureFile as File
      encData.enclosureLen = f.size
      encData.enclosureType = f.type

      // upload image file
      encData.enclosureUrl = ''
    } else {
      throw 'no enclosure'
    }
    encData.enclosureUrl = ''

    const episode: EpisodeForm = {
      podcastId,
      title: fd.get('title') as string,
      description: fd.get('description') as string,
      duration: 0
    }

    // upload enclosure and get url



    const result = await db.episode.create({
      data: {
        ...episode,
        ...encData
      }
    })
    
  }
}