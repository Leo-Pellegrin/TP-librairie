<script setup>

</script>

<template>
    <form id="recherche" @submit.prevent="$emit('handleRecherche', libelle)">
        <input type="text" v-model="libelle" placeholder="Nom du livre ?"/>
        <button id="submit" type="submit" value="Rechercher un livre">
            <img class="searchStock" src="../img/search_FILL0_wght400_GRAD0_opsz48.png"/>
        </button>
    </form>
</template>

<style scoped>

#submit{
    color: white;
     vertical-align: middle;
    margin-right: 3em;
    width: 50px;
    height: 50px;
    background: #FAEAB1;
    border: none;
    border-radius: 30px;
    color: #FFF;
    font-size: 1.3em;
    outline: none;
    cursor: pointer;
    border:solid 1px black;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.searchStock{
    width: 25px;
    height: 25px;
}

#recherche{
    border-radius: 7px;
    width: 100%;
    height: 150px;
    justify-content: center;
}
input[type=text] {
    font-size: 1em;
    border-radius: 30px;
    padding: 1em;
    outline: none;
    padding-left: 20px;
    transition: width 0.5s;
    margin-right: 0.4em;
    border: solid 1px black;
    background-color: #FAEAB1;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
input[type=text]::placeholder{
    color: black;
}

</style>

