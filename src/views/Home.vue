<template>
  <div class="home">
    <Detalle v-if="showDetails" :heroe="selectedHeroe" :key="selectedHeroe.id"/>
    <span v-for="(heroe, index) in heroes" v-bind:key="index">
      <Tarjeta 
        :heroe="heroe"
        v-bind:class="{selected: heroe == selectedHeroe}"
        @heroDetails="setHeroe(heroe)"
        @listUpdate="this.heroes.splice(index, 1)"/>
    </span>
  </div>
</template>

<script>

import Tarjeta from '@/components/Tarjeta.vue'
import Detalle from '@/components/Detalle.vue'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    Tarjeta,
    Detalle
  },
  data() {
    return {
      heroes: [],
      showDetails: false,
      selectedHeroe: Object,
    };
  },
  created(){
    this.getHeroes();
  },
  methods: {
    async getHeroes(){
      await axios
        .get("/getHeroes")
        .then((res) => {
          this.heroes = res.data;
          console.log(res.data)
        })
        .catch((error) => console.log("Error al obtener listado: " + error))
    },
    setHeroe(heroe){
        if(this.selectedHeroe != heroe){
          this.selectedHeroe = heroe;
          this.showDetails = true;
        }else{
          this.selectedHeroe = null;
          this.showDetails = false; //Escodemos los detalles si se hace click en el mismo heroe
        }
    },
  }
}
</script>

<style>
  .selected{
    border-color: rgb(45,156,219);
  }
</style>