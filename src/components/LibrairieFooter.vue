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
            <a href=""><img src="../img/linkedin.png"/></a>
            <a href=""><img src="../img/Logo-Instagram-noir-1.webp"/></a>
            <a href=""><img src="../img/logo-twitter-noir.png"/></a>
            <a href=""><img src="../img/youtube_logo_icon_144714.png"/></a>
        </div>
        <div id="contact">
            <a href="tel:+33781794004">Téléphone</a> 
            <a href="mailto:mapetitelibrairie@leo-pellegrin.fr">E-Mail</a>
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
        margin-top: 1em;
    }
    #contact{
        display: flex;
        justify-content: center;
    }
    #contact a{
        margin-top: 1em;
        margin-right: 1em;
        color: black;
        padding: 0.5em;

    }
    #contact:hover a {
        color: white;
        background-color: #C58940;
        border-radius: 3em;
    }
    hr{
        position: fixed;
        width: 100%;
        height: 1%;
        border: solid 1px #FAEAB1;
        background-color: #FAEAB1;
        margin-bottom: 7.5em;
    }
</style>