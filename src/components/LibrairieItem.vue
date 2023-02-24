<script>
    import LibrairieForm from './LibrairieForm.vue';
    export default{
        data(){
            return{
                isForm: false,
            }
        },
        props:{
            livre: {
                type: Object,
                required: true
            },
            recherche: {
                type: Boolean,
                required: false
            },
            modif: {
                type: Boolean,
                required: false
            }
        },
        methods:{
            modifierLivre(livre, rechercheBool){
                this.$emit('handleModif', livre, rechercheBool);
            }
        },
        components:{
            LibrairieForm
        }
    }

</script>
<template>
    <tr>
        <td>
            {{ livre.titre }}
        </td>
        <td>
            {{ livre.prix }}
        </td>
        <td id="qtestock">
            <p>{{ livre.qtestock }}</p>
            <img @click="$emit('handleStock', 1, livre, recherche)" class="arrowStock" src="../img/add_circle_FILL0_wght400_GRAD0_opsz48.png"/>
            <img @click="$emit('handleStock', -1, livre, recherche)" class="arrowStock" src="../img/do_not_disturb_on_FILL0_wght400_GRAD0_opsz48.svg"/>
        </td>
        <td>
            <img @click="$emit('handleDeleteLivre', livre.id)" class="arrowStock" src="../img/delete_FILL0_wght400_GRAD0_opsz48.png"/>
        </td>
        <td>
            <img @click="isForm = !isForm" class="arrowStock" src="../img/edit_FILL0_wght400_GRAD0_opsz48.png"/>
            <LibrairieForm v-if="isForm" @handleModif="modifierLivre" :recherche="recherche" :modif="true" :livre="livre"/>
        </td>
    </tr>
</template>
<style>

.arrowStock{
    width: 20px;
    height: 20px;
    margin: 0.6em;
}
tr{
    border-bottom: 1px solid black;
    text-align: center;
}
tr:last-of-type{
    border:none;
}
td{
    padding: 0.5em;
}
#qtestock p{
    margin-bottom: -0.2em;
}
</style>