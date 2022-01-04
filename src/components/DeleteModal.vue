<template>
    <div class="modal-container">
        <div class="title">
            <p>Delete Hero</p>
            <span class="abutton" id="cancel" @click="$emit('displayModal')">
                <fa icon="times" />
            </span>
        </div>
        <p>Are you sure you want to delete {{alias}}?</p>
        <input type="submit" value="Delete" name="delete" @click="$emit('delete')">
    </div>
</template>

<script>
export default {
    name: "DeleteModal",
    props: {
        alias: '',
    },data() {
        return {
            
        };
    },
    emits: ["displayModal", "delete"],
};
</script>

<style >
    .modal-container{
        display: grid;
        grid-template-rows: auto auto auto;
        background: white;
        padding: 15px;
        border-radius: 20px;
    }

    .modal-container p{
        margin-bottom: 30px;
    }

    .title{
        display: grid;
        grid-template-columns: auto auto;
    }

    .title p{
        font-size: 24px;
    }

    .modal-container input[type="submit"]{
        justify-self: center;
    }


</style>
