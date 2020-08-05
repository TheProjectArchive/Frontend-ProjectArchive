<template>
    <div class="bottoms">
        <div v-if="!index && !detail" class="container-flex"><a class="upppercase bold white none" href="/">back</a></div>
        <div v-else-if="detail" class="container-flex"><a class="upppercase bold white none" href="/work">back</a></div>
        <div v-else style="height:23px;"></div>

        © 2019 ProjectArchive™ All Rights Reserved.
    </div>
</template>

<script>
export default {
    computed:{
        index(){
            return this.$route.path === '/'
        },
        detail(){
            return this.$route.path === '/detail'
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
</style>