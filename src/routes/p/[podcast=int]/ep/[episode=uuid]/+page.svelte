<script lang="ts">
import type * as Pt from './$types'

import { ExpandableTile } from 'carbon-components-svelte'

export let data: Pt.PageData
const { ep } = data

  
</script>

<h3>{ep?.podcast.title}</h3>
<h1>{ep?.title}</h1>

<p>{ep?.description}</p>





