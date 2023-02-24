<script>
    import Livre from "../Livre.js"

    export default{
        name: 'LibrairieForm',
        methods:{
            isLivre(item){
                return item instanceof Livre;
            }
        },
        props: {
            livre: {
                type: Object,
                required: false
            },
            modif:{
                type: Boolean,
                required: true
            },
            recherche:{
                type: Boolean,
                required: false
            }
        },
        computed: {
            returnLivre(){
                return new Livre(this.livre.id, this.livre.titre, this.livre.qtestock, this.livre.prix);
            },
            rechercheBool(){
                if(this.recherche != undefined) return this.recherche;
                else return false;
            }
        },
    }
</script>

<template id="test">
    <form id="formAdd" v-if="!modif" @submit.prevent="$emit('handleAddLivre', libelle, quantité, prix)" >
        <h1>Formulaire ajout</h1>
        <input type="text" v-model="libelle" placeholder="Nom du livre ?"/>
        <input type="number" v-model="quantité" placeholder="Quantité ?"/>
        <input type="number" v-model="prix" placeholder="Prix ?"/>
        <input type="submit" value="Ajouter"/>
    </form>
    <form v-else @submit.prevent="$emit('handleModif', this.returnLivre, this.rechercheBool)">            
        <input type="text" placeholder="Nom du livre ?" :value="this.returnLivre.titre" @input="this.returnLivre.titre = $event.target.value"/>
        <input type="number" placeholder="Quantité ?" :value="this.returnLivre.qtestock" @input="this.returnLivre.qtestock = $event.target.value"/>
        <input type="number" placeholder="Prix ?" :value="this.returnLivre.prix" @input="this.returnLivre.prix = $event.target.value"/>
        <input type="submit" value="Modifier"/>
    </form>
</template>

<style>
      input[type=submit]{
        background-color: #FAF8F1;
        padding: 10px;
        margin: 10px auto;
        border-radius: 5px; 
        border: solid 1px #E5BA73;
        background: #E5BA73; 
        font-size: 14px;
        font-weight: 600;
        color: #fff; 
      }
      input[type=submit]:hover {
      background: #26a9e0;
      }
      input[type=text], input[type=number] {
        background-color: #FAF8F1;
        margin: 13px;
        padding: 6px; 
        border-radius: 10px;
        border: solid 1px #E5BA73; 
        box-shadow: 1px 2px 5px rgba(0,0,0,.09); 
        background: #fff; 
      }
      #formAdd{
        margin-top: 5em;
        margin-bottom: 35em;
        height: 80%;
      }
      #formAdd h1{
        margin-bottom: 2.5em;
        text-decoration: underline;
      }
</style>