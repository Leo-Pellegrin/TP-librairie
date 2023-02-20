<script>

    export default{
        name: 'LibrairieFooter',
        methods:{

        }
    }
</script>

<template>
    <div id="footer">
        <hr>
        <div id="logo">
            <img src="../img/linkedin.png"/>
            <img src="../img/Logo-Instagram-noir-1.webp"/>
            <img src="../img/logo-twitter-noir.png"/>
            <img src="../img/yt-logo.jpg"/>   
        </div>
        <div id="contact">
            <p href="tel:">Téléphone</p>
            
            <p href="mail:leo.pellegrin@etud.univ-jfc.fr">Mail</p>
        </div>
    </div>
     
</template>

<style scoped>
    #footer{
        display: flex;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: #E5BA73;
        height: 15%;
        justify-content: center;
        flex-direction: column;
    }
    #footer img{
        width: 20px;
        height: 20px;
        margin-right: 1em;
    }
    h1{
        font-size: 25px;
    }
    #logo{
        display: flex;
        justify-content: center;
    }
    #contact{
        display: flex;
        justify-content: center;
    }
    #contact p{
        margin-right: 1em;
    }
    hr{
        width: 100%;
        height: 5%;
        border: solid 1px #FAEAB1;
        background-color: #FAEAB1;
        margin-top: -15px;
        margin-bottom: 2em;
    }
</style>