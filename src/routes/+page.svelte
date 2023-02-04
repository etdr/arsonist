<script lang="ts">
import { goto } from '$app/navigation'
import {page} from '$app/stores'
import { Button, Column, Grid, Row, ClickableTile, TileGroup,
    Truncate } from 'carbon-components-svelte'
import type { Prisma } from '@prisma/client'

export let data: { pods: Prisma.PodcastSelect[] }



</script>

<Grid class="mb2r">
  <Row>
    <Column><h1>Podcasts</h1></Column>
    <Column as>
      <Button on:click={() => goto('/p/new')}>New Podcast</Button>
    </Column>
  </Row>
</Grid>



<TileGroup>
{#each data.pods as pod}
  <ClickableTile href={`/p/${pod.id}`}>
    <h4>{pod.id}</h4>
    <h2>{pod.title}</h2>
    <h3>{pod.description}</h3>
  </ClickableTile>
{/each}
</TileGroup>



<style>
:global(.mb2r) {
  margin-bottom: 2rem;
}
</style>