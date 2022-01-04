<template>
  <div class="update-container">
      <Form :fromUpdate="true"/> 
  </div>
</template>

<script>
import Form from '@/components/Form.vue'

export default {
  name: 'Update',
  components: {
    Form,
  },
}
</script>

<style>

  .update-container{
    display: grid;
    grid-template-rows: auto auto;
    row-gap: 15px;
  }

</style>