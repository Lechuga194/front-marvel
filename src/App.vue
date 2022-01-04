<template>
  <div class="body">
    <div class="nav-container">
      <router-link
        style="text-decoration: none; color: inherit;"
        to="/">
        <h1>Marvel's Heroes</h1>
      </router-link>
      <router-link v-if="!onCreateHeroe" to="/create" class="abutton" id="add">
        <fa icon="plus" />
      </router-link>
      <router-link v-if="onCreateHeroe" to="/" class="abutton" id="cancel">
        <fa icon="times" />
      </router-link>
    </div>
  </div>
  <router-view/>
</template>

<script>
  export default {
  name: 'App',
  computed:{
    onCreateHeroe(){
      return this.$route.name === 'Create';
    }
  }
}
</script>


<style lang="scss">
#app {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}

.body{
    display: flex;
    justify-content: center;
}

.nav-container{
    display: grid;
    grid-template-columns: 50% 50%;
    width: 600px;
    justify-items: start;
    align-items: center;
    margin-bottom: 30px;
}   

.abutton{
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius:50px;
  line-height: 52px;
  cursor: pointer;
  box-shadow: 0 3px 5px rgb(196, 196, 196);
  justify-self: end;
} 

#add {
  color: white;
  background: linear-gradient(75deg, rgba(250,228,99,1) 0%, rgba(255,221,20,1) 8%, rgba(255,59,0,1) 100%);
}

#cancel {
  background: #e6e6e6;
  color: black;
}

</style>
