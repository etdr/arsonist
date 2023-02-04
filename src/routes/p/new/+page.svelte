<script lang="ts">
import { Form, FormGroup, Checkbox, TextInput, TextArea,
    MultiSelect, Button, ButtonSet, FileUploader,
    Column, Row } from 'carbon-components-svelte'

let name = ''
let author = ''
let ownerEmail = ''
let description = ''
let imgFiles: File[] = []
$: img = imgFiles[0] || null
let explicit = true
</script>


<h1>New Podcast</h1>

<Form style="padding: 1rem;" method="POST" action="?/create">
  <TextInput class="mb1r" labelText="Podcast Name" bind:value={name} />

  <Row class="mb1r">
    <Column><TextInput labelText="Author" bind:value={author} inline /></Column>
    <Column><TextInput labelText="Email" bind:value={ownerEmail} inline /></Column>
  </Row>
  
  <TextArea class="mb1r" labelText="Description" bind:value={description} />

  <TextInput class="mb1r" labelText="Site URL" />

  <TextInput class="mb1r" labelText="Category" />

  <FileUploader labelTitle="Cover Image" buttonLabel="Upload file" bind:files={imgFiles} />

  <Checkbox labelText="Explicit?" bind:checked={explicit} />

  <Button type="submit">Create</Button>
</Form>




<style>
:global(.mb1r) {
  margin-bottom: 1rem;
}
</style>
