<template>
    <div>
        <div class="container">
            <router-link to="/home">About</router-link>
            <router-link to="/work">Work</router-link>
            <router-link to="/contact">Contact</router-link>
        </div>
    </div>
</template>

<style lang="css" scoped>
    .container{
        position: relative;     
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    a{
        text-decoration: none;
        color: white;
        padding-bottom: 10px;
        font-size: 28px;
        font-weight: bold;
        text-transform: uppercase;
    }
</style>