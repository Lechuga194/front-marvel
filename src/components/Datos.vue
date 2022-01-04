<template>
    <form @submit.prevent="onSubmitCreate" method="POST">
        <div class="datos-container">
            <div class="datos-upper">
                <input type="text" v-model="heroe.name" name="name" placeholder="Original Name">
                <input type="text" v-model="heroe.alias" name="alias" placeholder="Aka">
            </div>
                <input type="url" v-model="heroe.image" name="image" placeholder="Image URL">
                <textarea name="details" v-model="heroe.details" placeholder="Details..."></textarea>
                <input type="submit" value="Save changes">
        </div>
    </form>
</template>

<script>
import axios from 'axios'

export default {
    name: "Datos",
    data(){
        return{
            heroe: {
                name: '',
                alias: '',
                image: '',
                details: '',
            }
        }
    },
    methods: {
        onSubmitCreate(e){
            e.preventDefault()
            axios.post('/createHero', this.heroe)
            .then(res => {
                if(res.status == 200){
                    console.log("Heroe agregado con exito")
                    this.$router.push({name:'Home'});
                }
            })
            .catch(err => console.log("Ocurrio un erro al agregar el heroe", err))
        }
    }
}
</script>

<style>

    .datos-container{
        display: grid;
        grid-template-rows: repeat(4, auto);
        padding: 10px 10px 10px 10px;
        justify-content: center;
        margin: auto;
        row-gap: 30px;
    }   

    .datos-upper{
        display: flex;
        flex-wrap: wrap;
        gap: 5vw;
    }

    input[type=text], input[type=url]{
        border-style: none;
        border-bottom: 2px solid rgb(110, 110, 110);
        font-size: 20px;
    }

    textarea[name=details]{
        border-style: none;
        border-bottom: 2px solid rgb(110, 110, 110);
        background: #e6e6e6;
        height: 125px;
        padding: 10px;
        resize: none;
        font-size: 20px;
    }

    input[type="submit"]{
        border-style: none;
        width: 180px;
        height: 50px;
        display: inline-block;
        border-radius:50px; /* half of width + borders */ 
        line-height: 50px; /* vertical center */
        color: white;
        cursor: pointer;
        box-shadow: 0 3px 5px rgb(196, 196, 196);
        background: linear-gradient(75deg, rgba(250,228,99,1) 0%, rgba(255,221,20,1) 8%, rgba(255,59,0,1) 100%);
        justify-self: start;
        font-size: 18px;
        font-weight: bold;
    }

    textarea:focus, input:focus{
        outline: none;
    }
</style>