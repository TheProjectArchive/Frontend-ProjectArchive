<template>
    <div class="bottoms">
         <div class="footer">
             <div v-if="index"></div>
            <div v-else-if="detail" class="button-back">
                <a class="uppercase bold white none" @click="goBack()" >back
                </a>
            </div>
            <div v-else class="button-back"><a class="uppercase bold white none" href="/">back</a></div>
            <div>
                © 2019
                <a @click="openInstagram" class="link">
                    ProjectArchive™
                </a>
                All Rights Reserved. 
            </div>
         </div>
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
        },
        goBack(){
            window.history.back();
        }
    }
}
</script>

<style lang="css" scoped>
    .button-back{
        display: flex;
        justify-content: flex-end;
        font-size: 17px;
        margin-right: 11vw;
        cursor: pointer;
    }
    .footer{
        display: flex;
        flex-direction: column;
        background-color: black;
        color:white;
        width: 100%;

        font-size: 13px;
        font-family: 'Montserrat', sans-serif;
        font-weight: lighter;

        padding-top: 2% ;
        padding-bottom: 2% ;
        bottom: 0%;
        position: fixed;
    }
    .link{
        text-decoration: none;
        color: white;
    }
</style>