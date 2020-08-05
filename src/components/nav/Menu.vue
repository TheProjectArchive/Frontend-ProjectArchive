<template>
    <div data-aos="fade-zoom-in" class="menu">
        <div class="grid-container">
            <a href="/about">About</a>
            <a href="/work">Work</a>
            <a href="/contact">Contact</a>
        </div>
    </div>
</template>

<style scoped>
    a{
        text-transform: uppercase;
        color: white;
        text-decoration: none;
        font-weight: bold;
    }
    a:active{
        color: black;
    }
    a:link{
        color: white;
    }
    .grid-container{
        margin-top: 35px;
        padding-bottom: 10px;
        display: grid;
        grid-template-columns: 200px 135px 200px;
    }
    .menu{
        display: flex; 
        justify-content: center;
    }
</style>