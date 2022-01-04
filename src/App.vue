<template>
  <div class="body">
    <div class="app-container">
      <router-link
        style="text-decoration: none; color: inherit;"
        to="/">
        <h1>Marvel's Heroes</h1>
      </router-link>
      <router-link v-if="!onCreateHero" to="/create" class="app-button" id="addbtn">
        <fa icon="plus" />
      </router-link>
      <router-link v-if="onCreateHero" to="/" class="app-button" id="cancelbtn">
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
    onCreateHero(){
      return this.$route.name === 'Create';
    }
  },
  created(){
    document.title = "Marvel's Heroes";
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

.app-container{
    display: grid;
    grid-template-columns: 50% 50%;
    width: 600px;
    justify-items: start;
    align-items: center;
    margin-bottom: 30px;
}   

.app-button{
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius:50px;
  line-height: 52px;
  cursor: pointer;
  box-shadow: 0 3px 5px rgb(196, 196, 196);
  justify-self: end;
} 

#addbtn {
  color: white;
  background: linear-gradient(75deg, rgba(250,228,99,1) 0%, rgba(255,221,20,1) 8%, rgba(255,59,0,1) 100%);
}

#cancelbtn {
  background: #e6e6e6;
  color: black;
}

  .image-cropper-100 {
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
