<template>
    <div class="grid-container">
        <a class="esp-logo" href="/"><img src="@/assets/esp-logo.png" alt="logo"></a>
        <Menu v-if="!index"/>
        <div v-else/>
        <div class="flex-container">
            <img class="project-archive-text" src="@/assets/projectArchive-text.png" alt="text">
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
        }
    }
}
</script>

<style lang="css" scoped>
    .grid-container{
        position: relative;
        display: grid;
        grid-template-columns: auto auto auto;
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