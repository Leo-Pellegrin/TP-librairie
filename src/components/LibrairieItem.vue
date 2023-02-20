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
    <li>{{ livre.toString() }}
        <img @click="$emit('handleStock', 1, livre, recherche)" class="arrowStock" src="../img/add_circle_FILL0_wght400_GRAD0_opsz48.png"/>
        <img @click="$emit('handleStock', -1, livre, recherche)" class="arrowStock" src="../img/do_not_disturb_on_FILL0_wght400_GRAD0_opsz48.svg"/>
        <img @click="$emit('handleDeleteLivre', livre.id)" class="arrowStock" src="../img/delete_FILL0_wght400_GRAD0_opsz48.png"/>
        <img @click="isForm = !isForm" class="arrowStock" src="../img/edit_FILL0_wght400_GRAD0_opsz48.png"/>
        <div v-if="recherche">
            <LibrairieForm v-if="isForm" @handleModif="modifierLivre" :recherche="recherche" :modif="true" :livre="livre"/>
        </div>
        <div v-else>
            <LibrairieForm v-if="isForm" @handleModif="modifierLivre" :recherche="recherche" :modif="true" :livre="livre"/>
        </div>

    </li>
</template>
<style>

.arrowStock{
    width: 20px;
    height: 20px;
    margin: 0.6em;
}

</style>