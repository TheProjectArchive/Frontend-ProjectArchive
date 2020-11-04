<template>
    <div class="menu">
        <div class="grid-container">
            <a  v-bind:class="'link '+className.about" href="/about">About</a>
            <a  v-bind:class="'link '+className.work" href="/work">Work</a>
            <a  v-bind:class="'link '+className.contact" href="/contact">Contact</a>
        </div>
        <dropdown :listMenu="nav"></dropdown>
    </div>
</template>

<script>
export default {
    components:{
        Dropdown:() => import('./DropdownMenu') 
    },
    data(){
        return{
            className:{
                about:'',
                work:'',
                contact:''
            },
            nav:[
                {
                    name: 'About',
                    link: '/about'
                },
                {
                    name: 'Work',
                    link: '/work'
                },
                {
                    name: 'Contact',
                    link: '/contact'
                },
            ]
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
    .link{
        text-transform: uppercase;
        color: white;
        text-decoration: none;
        font-weight: bold;
    }

    .route{
        color: #434343;
    }

    .grid-container{
        padding-bottom: 10px;
        display: grid;
        grid-template-columns: 200px 135px 200px;
    }
    .menu{
        display: flex; 
        justify-content: center;
    }
    .flex-container{
        display: none;
    }
    @media screen and (max-width: 1060px) {
        .grid-container{
            display: none;
        }

        .flex-container{
            display: flex;
            flex-direction: column;
        }
    }

    
</style>