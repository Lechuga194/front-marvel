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

  .update-image-cropper {
      width: 100px;
      height: 100px;
      position: relative;
      overflow: hidden;
      border-radius: 50%;
      justify-self: center;
      align-self: center;
  }

  img {
      display: inline;
      margin: 0 auto;
      height: 100%;
      width: auto;
  }
</style>