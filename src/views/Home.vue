<template>
  <div class="home">
    <HeroDetails v-if="showDetails" :hero="selectedHero" :key="selectedHero.id"/>
    <span v-for="(hero, index) in heros" v-bind:key="index">
      <HeroCard 
        :hero="hero"
        v-bind:class="{selected: hero == selectedHero}"
        @heroDetails="sethero(hero)"
        @listUpdate="this.heros.splice(index, 1)"/>
    </span>
  </div>
</template>

<script>

import HeroCard from '@/components/HeroCard.vue'
import HeroDetails from '@/components/HeroDetails.vue'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HeroCard,
    HeroDetails
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
        .get("/getheros")
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