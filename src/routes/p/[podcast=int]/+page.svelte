<script lang="ts">
import type * as Pt from './$types'
import { Tabs, Tab, TabContent, Button } from 'carbon-components-svelte'
import EpisodeList from './EpisodeList.svelte'

export let data

const { pod }: Pt.PageData = data
const episodes = pod?.episodes || []
</script>

<h1>{pod?.title}</h1>
<h3>{pod?.author}</h3>


<Tabs>
  <Tab label="Episodes" />
  <Tab label="Info" />
  <svelte:fragment slot="content">
    <TabContent>
      <Button class="mb2r" href={`/p/${pod?.id}/ep/new`}>New Episode</Button>
      <EpisodeList {episodes} />
    </TabContent>
    <TabContent>Hi</TabContent>
  </svelte:fragment>
</Tabs>



<style>
:global(.mb2r) {
  margin-bottom: 2rem;
}
</style>