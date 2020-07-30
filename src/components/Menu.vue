<template>
    <div class="menu">
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
    .grid-container{
        margin-top: 45px;
        display: grid;
        grid-template-columns: 200px 135px 200px;
    }
    .menu{
        display: flex; 
        justify-content: center;
    }
</style>