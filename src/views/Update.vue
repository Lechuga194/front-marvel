<template>
  <div class="update-container">
      <Datos :fromUpdate="true"/> 
  </div>
</template>

<script>
import Datos from '@/components/Datos.vue'

export default {
  name: 'Update',
  components: {
    Datos,
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