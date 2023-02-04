
import db from '$lib/server/db'
import type * as Pt from './$types'

export const load: Pt.PageServerLoad = async function ({ params }) {
  const pods = await db.podcast.findMany()
  return {
    pods
  }
}



