<template>
    <div class="header">
        <div class="row align-items-start">
            <div class="col-md-4 flex-center">
                <a class="brand-logo" @click="clearSession" href="/"><img class="esp-logo" src="@/assets/esp-logo.png" alt="logo"></a>
            </div>
            <div class="col-md-4">
                <Menu v-if="!index && !detail"/>
                <div v-else/>
            </div>
            <div class="col-md-4">
                <a href="/work">
                    <img class="project-archive-text" src="@/assets/projectArchive-text.png" alt="text">
                </a>
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
            return this.$route.name === 'Detail'
        }
    },
    methods:{
        clearSession(){
            sessionStorage.clear();
        }
    }
}
</script>

<style lang="css" scoped>
    .header{
        padding-top: 40px;
        padding-bottom: 40px;
          top: 0;
          width: 100%;
          height: 20%;
          background-color: black;
    }
    .esp-logo{
        width: 38px;
        height: 36px;
    }
    .project-archive-text{
        width: 200.41px;
        height: 24.85px;
    }
    
    .brand-logo{
        padding-right: 162px;
    }

    .flex-center{
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>