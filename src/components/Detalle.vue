<template>
   <div class="detalle-body">
        <div class="detalle-container">
            <div class="detalle-image-cropper">
                <img :src="hero.image" :alt="hero.name">
            </div>
            <div class="detalle-names">
                <p>{{hero.alias}} <span> {{hero.name}}</span></p>
            </div>
            <span class="detalle-descripcion">{{hero.details}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Detalle",
    props: {
        hero: Object,
    },
}
</script>

<style>

    .detalle-body{
        display: flex;
        justify-content: center;
    }

    .detalle-container{
        display: grid;
        grid-template-rows: auto auto auto;
        width: 600px;
        
    }

    .detalle-image-cropper {
        width: 100px;
        height: 100px;
        position: relative;
        overflow: hidden;
        border-radius: 50%;
        justify-self: center;
        align-self: center;
    }

    .detalle-names p {
        display: inline-block;
        font-size: 22px;
    }

    .detalle-names p span {
        display: block;
        text-align: center;
        color: grey;
        font-size: 16px;
    }

    .detalle-descripcion{
        margin-bottom: 20px;
        text-align: center;
    }

</style>