<template>
    <div class="bottoms">
        <div v-if="index" style="height:23px;"></div>
        <div v-else-if="detail" class="container-flex">
            <a style="text-transform:uppercase; 
                color:white; 
                text-decoration: none; 
                font-weight: bold;" href="/work">back
            </a>
        </div>
        <div v-else class="container-flex"><a class="upppercase bold white none" href="/">back</a></div>
        © 2019
        <a @click="openInstagram" class="link">
            ProjectArchive™
        </a>
         All Rights Reserved.
    </div>
</template>

<script>
export default {
    computed:{
        index(){
            return this.$route.path === '/'
        },
        detail(){
            return this.$route.name === 'Detail'
        },
        work(){
            return this.$route.path === '/work'
        },
        contact(){
            return this.$route.path === '/contact'
        }
    },
    mounted(){
        this.conName()
    },
    methods:{
        openInstagram(){
            window.open("https://www.instagram.com/project___archive/")
        },
        conName(){
            console.log(this.$route.name)
        }
    }
}
</script>

<style lang="css" scoped>
    .container-flex{
        display: flex;
        width: 95%;
        justify-content: flex-end;
        font-size: 17px;
    }
    .bottoms{
        background-color: black;
        color:white;
        width: 100%;

        font-size: 13px;
        font-family: 'Montserrat', sans-serif;
        font-weight: lighter;
        padding-top: 30px;
        padding-bottom: 30px;

        position: fixed;
        bottom: 0;
        left: 0;
    }
    .link{
        text-decoration: none;
        color: white;
    }
</style>