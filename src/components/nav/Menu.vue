<template>
    <div class="menu">
        <div class="grid-container">
            <a  v-bind:class="'menu '+className.about" href="/about">About</a>
            <a  v-bind:class="'menu '+className.work" href="/work">Work</a>
            <a  v-bind:class="'menu '+className.contact" href="/contact">Contact</a>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            className:{
                about:'',
                work:'',
                contact:''
            }
        }
    },
    mounted(){
        this.routeActive()
    },
    methods:{
        routeActive(){
            if(this.$route.path==='/about'){
                this.className.about = 'route'
            }else if(this.$route.path==='/work'){
                this.className.work = 'route'
            }else if(this.$route.path==='/contact'){
                this.className.contact = 'route'
            }
        }
    }
}
</script>

<style scoped>
    .menu{
        text-transform: uppercase;
        color: white;
        text-decoration: none;
        font-weight: bold;
    }

    .route{
        color: #434343;
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