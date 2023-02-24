<script>
import Livre from '@/Livre';
import { reactive } from 'vue';
import LibrairieItem from './LibrairieItem.vue';
import LibrairieForm from './LibrairieForm.vue';
import LibraireHeader from './LibrairieHeader.vue';
import LibrairieFooter from './LibrairieFooter.vue';

  export default{
    name: 'LibrairieView',
    data(){
      return {
        // Url de l'API
        url : "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/30/livres",
        // Liste des livres 
        lLivres : reactive([]),
        // Liste des livres recherchés
        lLivresRecherche : reactive([]),
        // Variable affichage
        isForm: false,
        isRecherche: false,
        isFormRecherche: false,
        isAjouter: false,
        // Livre sélectionné
        targetedLivre: null,
        // Mot clé de la recherche
        libelleRecherche: '',
      }
    },
    methods:{
      // Fonction supprimer
      async deleteLivre(id){
        let urlDelete = this.url + "/" + id;
        const options = {method : "DELETE"};
        const response = await fetch(urlDelete, options);
        const result = await response.json();
        location.reload();
      },
      // Fonction ajouter
      async addLivre(titre, quantité, prix){
        const options = {
          method : "POST",
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify({
            'titre' : titre,
            'qtestock' : quantité,
            'prix' : prix
          })
        };
        const response = await fetch(this.url, options);
        const result = await response.json();
        this.getLivres();
        location.replace("/")
      },
      // Afficher le formulaire de modification
      afficherFormModif(livre){
        this.isForm = !this.isForm;
        this.targetedLivre = new Livre(livre.id, livre.titre, livre.qtestock, livre.prix);
      },
      // Afficher le formulaire de modification pour les livres recherchées
      afficherFormModifRecherche(livre){
        this.isFormRecherche = !this.isFormRecherche;
        this.targetedLivre = new Livre(livre.id, livre.titre, livre.qtestock, livre.prix);
      },
      // Fonction modifier
      async modifierLivre(livre, rechercheBool){
        const options = {
          method : "PUT",
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify({
            id : livre.id,
            titre : livre.titre,
            qtestock: livre.qtestock,
            prix : livre.prix
          })
        };
        const response = await fetch(this.url, options);
        const result = await response.json();
        if(rechercheBool){
          this.isFormRecherche = !this.isFormRecherche;
          this.rechercheLivre(this.libelleRecherche)
        } 
        else {
          this.isForm= !this.isForm;
          this.getLivres();
        }       
      },
      // Fonction recherche
      async rechercheLivre(libelle){
        this.libelleRecherche = libelle;
        this.lLivresRecherche = reactive([]);
        this.isRecherche = true;
        const options = {method : "GET"}
        const urlRecherche = this.url + "?search=" + this.libelleRecherche;
        const response = await fetch(urlRecherche, options);
        const result = await response.json();
        result.forEach(livre => {
          this.lLivresRecherche.push(new Livre(livre.id, livre.titre, livre.qtestock, livre.prix));
        });
      },
      // Fonction modification du stock en base
      async changeStockLivre(qt, livre, rechercheBool){
        let quantiteEnBase = this.lLivres.find(e => e.id == livre.id).qtestock;
        if(quantiteEnBase + qt > 0){
          const nouvelleQuantite = quantiteEnBase + qt;
          const options = {
            method : "PUT",
            headers : {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify({
              'id' : livre.id,
              'titre' : livre.titre,
              'qtestock' : nouvelleQuantite,
              'prix' : livre.prix
            })
          };
          const response = await fetch(this.url, options);
          const result = await response.json();  
        }
        else{
          this.deleteLivre(livre.id);
        }

        if(rechercheBool){
          this.isFormRecherche = !this.isFormRecherche;
          this.rechercheLivre(this.libelleRecherche)
        } 
        else {
          this.isForm= !this.isForm;
          this.getLivres();
        }     
      },
      // Fonction principale de récupération des livres en base
      async getLivres(){
        this.lLivres = reactive([]);
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const options = {method : "GET"};
        const response = await fetch(this.url, options);
        const result = await response.json();
        result.forEach(livre => {
          this.lLivres.push(new Livre(livre.id, livre.titre, livre.qtestock, livre.prix));
        });
        if (!response.ok) throw result;
      },
      // Redirection vers la page d'acceuil
      goToAccueil(){
        this.isRecherche = false;
        this.isForm = false;
        this.isFormRecherche = false;
        this.isAjouter = false;
        document.getElementById("recherche").firstChild.value = ""
        this.getLivres();
      },
      // Afficher le formulaire d'ajout
      displayAddForm(){
        this.isRecherche = false;
        this.isAjouter = true;        
      }
    },
    components: {
      LibrairieItem,
      LibrairieForm,
      LibraireHeader,
      LibrairieFooter
    },
    mounted() {
      this.getLivres();
    }

}
</script>

<template>
  <LibraireHeader @handleAccueil="goToAccueil" @handleRecherche="rechercheLivre" @handleAjouter="displayAddForm" />
  <div id="body">
    <div v-if="isRecherche">
      <div v-if="ErrorMsg">
          <p>Le livre est déjà présent dans la librairie</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Prix</th>
            <th>Quantité</th>
            <th>Supprimer</th>
            <th>Modifier</th>
          </tr>
        </thead>
        <tbody>
          <LibrairieItem  @handleDelete="deleteLivre"
                      @handleStock="changeStockLivre"
                      @handleModif="modifierLivre"
                      v-for="livre in lLivresRecherche" :key="livre" :livre="livre" :recherche="true"/>
        </tbody>  
      </table>
    </div>
    <div v-else-if="isAjouter">
      <LibrairieForm @handleAddLivre="addLivre" :modif="false" :livre="null"/>
    </div>
    <div v-else>
      <table>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Prix</th>
            <th>Quantité</th>
            <th>Supprimer</th>
            <th>Modifier</th>
          </tr>
        </thead>
        <tbody>
          <LibrairieItem  @handleDeleteLivre="deleteLivre" 
                      @handleStock="changeStockLivre"
                      @handleModif="modifierLivre"
                      v-for="livre in lLivres" :key="livre" :livre="livre"/>
        </tbody>
      </table>
    </div>
  </div>
  <LibrairieFooter/>
</template>

<style scoped>
  #body{
    justify-content: center;
    display: flex;
    margin-top: 7em;
    width: 100%;
    height: 100%;
    margin-bottom: 7.5em;
    min-height: 80%;
  }
  li {
    counter-increment: index; 
    display: flex;
    align-items: center;
    padding: 12px 0;
    box-sizing: border-box;
  }
  li::before {
    content: counters(index, ".", decimal-leading-zero);
    font-size: 1.5rem;
    text-align: right;
    font-weight: bold;
    min-width: 50px;
    padding-right: 12px;
    font-variant-numeric: tabular-nums;
    align-self: flex-start;
    background-image: linear-gradient(to bottom, #FAF8F1, #C58940);
    background-attachment: fixed;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  li + li {
    border-top: 1px solid rgba(255,255,255,0.2);
  }
  th{
    border-bottom: solid 1px black;
  }
  tbody tr:last-of-type{
    border: none;
  }
  table{
    margin: 3em;
    border-collapse: collapse;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    background-color: #FAEAB1;
  }
  thead tr th{
    padding: 1em;
  }
</style>