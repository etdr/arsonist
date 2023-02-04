<script lang="ts">
import { ClickableTile, TileGroup } from 'carbon-components-svelte'
import type { Episode } from '@prisma/client'
export let episodes: Episode[]

</script>


{#if !episodes.length}
  <p>No episodes to display</p>
{/if}
<TileGroup>
  {#each episodes as ep}
    <ClickableTile href={`/p/${ep.podcastId}/ep/${ep.guid}`}>
      <h4>{ep.guid}</h4>
      <h2>{ep.title}</h2>
    </ClickableTile>
  {/each}
</TileGroup>