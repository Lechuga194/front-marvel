<template>
  <div class="home">
    <Detalle v-if="showDetails" :hero="selectedHero" :key="selectedHero.id"/>
    <span v-for="(hero, index) in heros" v-bind:key="index">
      <Tarjeta 
        :hero="hero"
        v-bind:class="{selected: hero == selectedHero}"
        @heroDetails="sethero(hero)"
        @listUpdate="this.heros.splice(index, 1)"/>
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
      heros: [],
      showDetails: false,
      selectedHero: Object,
    };
  },
  created(){
    this.getheros();
  },
  methods: {
    async getheros(){
      await axios
        .get("/getheros") //TODO cambiar a ingles
        .then((res) => {
          this.heros = res.data;
        })
        .catch((error) => console.log("Error al obtener listado: " + error))
    },
    sethero(hero){
        if(this.selectedHero != hero){
          this.selectedHero = hero;
          this.showDetails = true;
        }else{
          this.selectedHero = null;
          this.showDetails = false; //Escodemos los detalles si se hace click en el mismo hero
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