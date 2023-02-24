<script>
    import LibrairieRecherche from './LibrairieRecherche.vue';

    export default {
        components: {
            LibrairieRecherche
        },
        methods:{
            rechercheLivre(libelle){
                this.$emit('handleRecherche', libelle)
            },
        },
    }
</script>
<template>
    <nav id="header">

        <a href="{{ this.$emit('handleAccueil')}}" class="accueil"><img src="../img/29302.png"/>Page d'accueil</a>
        <LibrairieRecherche @handleRecherche="rechercheLivre" id="recherche"/>
        <button id="addBtn" @click="$emit('handleAjouter')">Ajouter un livre</button>
    </nav>
</template>

<style scoped>
    .accueil{
        margin-right: auto;
    }
    #header {
        flex-direction: row;
        display: inline-flex;
        position: fixed;
        background: #E5BA73;
        color: #E6E5A3;
        top: 0;
        left: 0;
        width: 100%;
        align-items: center;
        margin-right: 50px;
        justify-content: space-between;
        -webkit-justify-content: space-between;
    }   
    #header a {
        padding: 20px;
        font-weight: bold;
        color: black;
        padding: 10px;
        justify-content: center;
        display: flex;
        white-space: nowrap;
        align-items: center;
        transition: color 2s;
    }
    #header a:hover{
        background-color: #C58940;
        color: white;
        border-radius: 20%;
        transition: background-color 1s, color 1s;
    }
    #header img{
        height: 50px;
        width: 50px;
        justify-content: flex-start;
    }
    #recherche {
        padding: 20px;
        font-weight: bold;
        color: #2d2d2d;
        height: 70px;
        align-items: center;
        display: flex;
        margin-left: auto;
    }
    #addBtn{
        font-size: 1em;
        border-radius: 30px;
        padding: 1em;
        outline: none;
        transition: width 0.5s;
        margin-right: 4em;
        border: solid 1px black;
        background-color: #FAEAB1;
        white-space: nowrap;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
  /* https://colorhunt.co/palette/faf8f1faeab1e5ba73c58940 */
  </style>

  
  