<template>
  <div class="home">
    <span v-for="heroe in heroes" :key="heroe.id" style="margin-bottom: 10px;">
      <Tarjeta :heroe="heroe"/>
    </span>
  </div>
</template>

<script>

import Tarjeta from '@/components/Tarjeta.vue'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    Tarjeta
  },
  data() {
    return {
      heroes: [1,2,3],
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
    }
  }
}
</script>