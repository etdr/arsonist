import db from '$lib/server/db.js'
import type * as Pt from './$types'


export const load: Pt.PageServerLoad = async function ({ params }) {

  const pod = await db.podcast.findUnique({
    where: {
      id: parseInt(params.podcast, 10)
    },
    include: {
      episodes: true
    }
  })

  return {
    pod
  }
}
