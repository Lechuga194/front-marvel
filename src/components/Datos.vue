<template>

    <div v-if="fromUpdate" class="image-cropper-100">
        <img :src="hero.image" alt="foto">
    </div>

    <form @submit.prevent="onSubmit" method="POST">
        <div class="datos-container">
            <div class="datos-upper">
                <input 
                    type="text" 
                    v-model="hero.name" 
                    name="name" 
                    placeholder="Original Name">
                <input 
                    type="text" 
                    v-model="hero.alias" 
                    name="alias" 
                    placeholder="Aka">
            </div>
                <input 
                    type="url" 
                    v-model="hero.image" 
                    name="image" 
                    placeholder="Image URL">
                <textarea 
                    name="details" 
                    v-model="hero.details" 
                    placeholder="Details..."></textarea>
                <input type="submit" value="Save changes">
        </div>
    </form>
</template>

<script>
import axios from 'axios'
import { useRoute } from 'vue-router'

export default {
    name: "Datos",
    props: ['fromUpdate'],
    created(){
        if(this.fromUpdate){
            const route = useRoute();
            this.get(route.params.id)        
        }
    },
    data(){        
        return{
            hero: {
                id: '',
                name: '',
                alias: '',
                image: '',
                details: '',
            }
        }
    },
    methods: {
        onSubmit(e){
            e.preventDefault()
            if(this.fromUpdate) 
                return this.update(this.hero)
            return this.create(this.hero)
        },
        create(hero){
            axios.post('/createHero', hero)
            .then(res => {
                if(res.status == 200){
                    console.log("Hero added")
                    this.$router.push({name:'Home'});
                }
            })
            .catch(err => console.log("An error occurred while adding the hero", err))
        },
        update(hero){
            axios.post('/updateHero', hero)
            .then(res => {
                if(res.status == 200){
                    this.$router.push({name:'Home'});
                }
            })
            .catch(err => console.log("An error occurred while editing the hero", err))
        },
        async get(id){
            axios.get(`/getHero/${encodeURIComponent(id)}`)
            .then(res => {
                const {id, name, alias, image, details} = res.data[0]
                const hero = {
                    id: id,
                    name: name,
                    alias: alias,
                    image: image,
                    details: details
                }
                this.hero = hero
            })
            .catch(err => {
                console.log("Hero not found", err);
                this.$router.push({name:'Home'});
            })
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