<template>
    <div>
        <div data-aos="fade-zoom-in" class="container">
            <router-link to="/about">About</router-link>
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
        height: 80vh;
        top:0;
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