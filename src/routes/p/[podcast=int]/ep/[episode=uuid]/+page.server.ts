
import db from '$lib/server/db'
import type * as Pt from './$types'



export const load: Pt.PageServerLoad = async ({ params }) => {

  const ep = await db.episode.findUnique({
    where: {
      guid: params.episode
    },
    include: {
      podcast: true
    }
  })

  return {
    ep    
  }
}