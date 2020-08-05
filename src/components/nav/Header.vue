<template>
    <div class="header">
        <div class="grid-container">
                <a class="esp-logo" href="/"><img src="@/assets/esp-logo.png" alt="logo"></a>
            <Menu v-if="!index && !detail"/>
            <div v-else/>
            <div class="flex-container">
                <img class="project-archive-text" src="@/assets/projectArchive-text.png" alt="text">
            </div>
        </div>
    </div>
</template>

<script>
import Menu from './Menu'

export default {
    components:{
        Menu,
    },
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
    .header{
        position: fixed;
          top: 0;
          width: 100%;
          left: 0;
          background-color: black;
    }
    .grid-container{
        display: grid;
        grid-template-columns: 500px auto 500px;
        padding-bottom: 30px;
    }
    .flex-container{
        display: flex;
        justify-content: flex-end;
    }
    .esp-logo{
        margin: 25px 120px 0 80px;
        width: 38px;
        height: 36px;
    }
    .project-archive-text{
        width: 200.41px;
        height: 24.85px;
        margin-top: 30px;
        margin-right: 80px;
    }
    
</style>