<script lang="ts">
import { enhance } from '$app/forms'
import { page } from '$app/stores'
import { Form, FormGroup, Checkbox, TextInput, TextArea,
    MultiSelect, Button, ButtonSet, FileUploaderButton,
    Column, Row, TimePicker, DatePicker, DatePickerInput, TimePickerSelect } from 'carbon-components-svelte'


</script>

<h1>New Episode</h1>

<Form style="padding: 1rem;" method="POST" action="?/create" enctype="multipart/form-data">
  <TextInput class="mb1r" labelText="Episode Title" name="title"/>
  <TextArea class="mb1r" labelText="Description" name="description" />
  <FileUploaderButton
      class="mb1r"
      labelText="Choose audio file"
      name="enclosure"
       />
  <DatePicker class="mb1r" datePickerType="single" dateFormat="Y-m-d">
    <DatePickerInput labelText="Episode Date Override" placeholder="yyyy-mm-dd" />
  </DatePicker>
  
  <FileUploaderButton class="mb1r" labelText="Choose image file" />
  <Button type="submit">Create Episode</Button>
</Form>


<style>
:global(.mb1r) {
  margin-bottom: 1rem;
}

</style>