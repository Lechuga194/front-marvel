<template>
    <div class="container">
        <div class="image-cropper">
            <img :src="heroe.imagen" alt="foto">
        </div>
        <div class="names">
            <p>{{heroe.alias}} <span> {{heroe.nombre}}</span></p>
        </div>
        <div class="button-container">
            <span class="button" id="edit">
                <fa icon="pen" />
            </span>
            <span class="button" id="delete">
                <fa icon="times"/>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Tarjeta",
    props: {
        heroe: Object,
    },
}
</script>

<style>

    .container{
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

    .image-cropper {
        width: 80px;
        height: 80px;
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

    .names{
       text-align: left;
       padding-right: 25px;
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

</style>