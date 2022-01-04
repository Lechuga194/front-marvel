<template>
    <div class="card-container">
        <div class="image-cropper-80" @click="$emit('heroDetails')">
            <img :src="hero.image" :alt="hero.name">
        </div>
        <div class="names" @click="$emit('heroDetails')">
            <p>{{hero.alias}} <span> {{hero.name}}</span></p>
        </div>
        <div class="button-container">
            <span class="button" id="edit" @click="editHero(hero)">
                <fa icon="pen" />
            </span>
            <span class="button" id="delete" @click="showDeleteModal()">
                <fa icon="times"/>
            </span>
            <transition name="fade" appear>
                <div 
                    class="modal-overlay"
                    v-if="displayDeleteModal"
                    @click="hideDeleteModal()"></div>
            </transition>
            <transition name="slide" appear>
                <div class="modal" v-if="displayDeleteModal">
                    <DeleteModal
                        :alias="hero.alias"
                        @displayModal="hideDeleteModal"
                        @delete="deleteHero"
                        />
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import DeleteModal from '@/components/DeleteModal.vue'
import axios from 'axios'

export default {
    name: "Tarjeta",
    components: {
        DeleteModal
    },
    props: {
        hero: Object,
    },
    data(){
        return{
            displayDeleteModal: false,
        }
    },
    emits: ["heroDetails", "listUpdate"],
    methods: {
        showDeleteModal(){
            this.displayDeleteModal = true;
        },
        hideDeleteModal(){
            this.displayDeleteModal = false;
        },
        deleteHero(){
            axios.delete(`/deleteHero/${encodeURIComponent(this.hero.id)}`)
            .then(res => {
                if(res.status == 200){
                    this.hideDeleteModal()
                    this.$emit("listUpdate")
                }
            });
        },
        editHero(hero){
            this.$router.push({
                name:'Update',
                params: hero
            })
        }
    }
}
</script>

<style>

    .card-container{
        display: grid;
        grid-template-columns: 20% 60% 20%;
        width: 600px;
        border: 1px solid rgb(190, 190, 190);
        border-radius: 20px;
        padding: 10px 10px 10px 10px;
        justify-items: start;
        align-items: center;
        justify-content: start;
        margin: auto;
        margin-bottom: 15px;
    }   

    .image-cropper-80 {
        width: 80px;
        height: 80px;
        position: relative;
        overflow: hidden;
        border-radius: 50%;
        justify-self: center;
        align-self: center;
    }

    img {
        cursor: pointer;
    }

    .names{
       text-align: left;
       padding-right: 25px;
       cursor: pointer;
    }

    .names p {
        display: inline-block;
        font-size: 22px;
    }

    .names p span {
        display: block;
        text-align: left;
        color: grey;
        font-size: 16px;
    }

    .button-container{
        display: grid;
        grid-template-columns: auto auto;
        column-gap: 10px;
        justify-self: end;
    }

    .button {
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius:50px; /* half of width + borders */ 
        line-height: 40px; /* vertical center */
        color: white;
        cursor: pointer;
        box-shadow: 0 3px 5px rgb(196, 196, 196);
    }

    #edit{
        background: rgb(45,156,219);
        font-size: 20px;
    }

    #delete{
        background: rgb(226,24,24);
        font-size: 20px;
    }

    .modal-overlay{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 98;
        background-color: rgba(0, 0, 0, 0.3);
    }

    .modal{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 99;
    }

    .fade-enter-active,
    .fade-leave-active {
    transition: opacity .5s;
    }

    .fade-enter,
    .fade-leave-to {
    opacity: 0;
    }

    .slide-enter-active,
    .slide-leave-active {
    transition: transform 1s;
    }

    .slide-enter,
    .slide-leave-to {
    transform: translateY(-50%) translateX(100vw);
    }

</style>