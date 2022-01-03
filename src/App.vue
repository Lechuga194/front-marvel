<template>
  <div class="body">
    <div class="nav-container">
      <h1>Marvel's Heroes</h1>
      <span class="button-add">
        <fa icon="plus" />
      </span>
    </div>
  </div>
  <router-view/>
</template>

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

.button-add {
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius:50px; /* half of width + borders */ 
  line-height: 50px; /* vertical center */
  color: white;
  cursor: pointer;
  box-shadow: 0 3px 5px rgb(196, 196, 196);
  background: linear-gradient(75deg, rgba(250,228,99,1) 0%, rgba(255,221,20,1) 8%, rgba(255,59,0,1) 100%);
  justify-self: end;
}

</style>
