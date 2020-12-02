<template>
    <div class="row">
        <div class="col-sm flex-center">
            <img v-if="filter==false" @click="openFilter" src="@/assets/menu-img.png" alt="" class="button-filter">
            <img v-else @click="filter=false" src="@/assets/close-filter.png" alt="" class="button-filter">
        </div>
        <div class="col-sm">
            <div data-aos="fade-zoom-in" data-aos-duration="1200" id="scroll-down" class="container white image-container" v-lazy-container="{ selector: 'div' }">
                <div v-for="images in image" :key="images.id">
                    <img class="cursor cover-img" @click="setDetailId(images.id)" v-if="images.cover_image!=''" :src="'http://admin.theprojectarchive.com'+images.cover_image.slice(2,-1)" alt="content">
                    <img class="cover-img" v-else :src="'http://localhost:8080/assets/not-found.jpg'" alt="not found">
                </div>
            </div>
        </div>
        <div class="col-sm flex-center" style="justify-content: flex-start" v-show="image.length>=9">
            <img @click="scrollDown('scroll-down')" :class="'arrow-scroll ' + className" src="@/assets/scroll-img.png" alt="">
        </div>
        <transition name='fade' appear>
        <div class="modal-overlay flex-center " v-if="filter">
            <div class=" filter-position">
                <button @click="getWorkItems">All</button>
                <div v-for="category in categories" :key="category.index" > <button @click="getByCategory(category.category)">{{category.category}}</button></div>
            </div>
        </div>
        </transition>
    </div>
</template>

<style lang="stylus">
    .image-container
        display grid;
        grid-template-columns repeat(auto-fit, minmax(16.8rem, 1fr));
        grid-template-rows repeat(auto-fit, minmax(16.8rem, 1fr));
    

    .cover-img{
        border: 5px solid black;
        width: 100%;
    }

    .button-filter{
        cursor: pointer;
    }
    
    .cursor{
        cursor: pointer;
    }
    
    .arrow-scroll{
        width: 20px;
        height: 35px;
        cursor: pointer;
    }
    .container{
        overflow: scroll;
        height:70vh;
        scrollbar-width: none;
    }
    .container::-webkit-scrollbar{
        display: none;
    }

    @keyframes gbounce { 
        0% { transform: translateY(0); }
        30% { transform: translateY(-30px); }
        50% { transform: translateY(0); }
        100% { transform: translateY(0); }
    }
    .bounce {
        animation: gbounce 2s;
        animation-direction: ease;
        animation-iteration-count: infinite;
    }
    .menu-category{
        position: fixed;
        left: 0;
        background-color: blue;
    }
    .filter-icon{
        padding-right: 10%;
        padding-left: 10%;
    }
    .modal-overlay{
        position: absolute;
        top: 10vh;
        right: 0;
        left: 20vh;
        bottom: 20px;
        z-index: 98;
        background-color: rgba(0,0, 0, 0.9);
        margin-bottom: 65px;
    }
    .fade-enter-active,
    .fade-leave-active{
        transition: opacity 0.7s ; 
    }
    .fade-enter,
    .fade-leave-to{
        opacity: 0;
    }
    .filter{
        padding-right:250px;
        font-size:30px;
        font-weight: 600;
    }
    .filter-position{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    button{
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }
    button:hover{
        text-decoration: underline;
    }

    @media screen and (min-height: 1080) {
        .dropdown{
            display: none;
        }
    }
</style>

<script>
import api from '@/request.js'

export default {
    data(){
        return {
            className:'bounce',
            filter:false,
            categories:[],
            image:[],
            imagos:[
                {
                    id:1,
                    img:'mono-06',
                    category:'Branding Concept'
                },
                {
                    id:2,
                    img:'mono-06'
                },
                {
                    id:3,
                    img:''
                },
                {
                    id:4,
                    img:''
                },
                {
                    id:5,
                    img:''
                },
                {
                    id:6,
                    img:''
                },
                {
                    id:7,
                    img:''
                },
                {
                    id:8,
                    img:''
                },
                {
                    id:12,
                    img:''
                },
                {
                    id:321,
                    img:''
                },
                {
                    id:343,
                    img:''
                },
                {
                    id:5312,
                    img:'mono-06'
                },
                {
                    id:5342,
                    img:''
                },
                {
                    id:5352,
                    img:''
                },
                {
                    id:5632,
                    img:''
                },
                {
                    id:32,
                    img:''
                },
                {
                    id:53,
                    img:''
                },
                {
                    id:52,
                    img:'mono-06'
                },
                {
                    id:20,
                    img:''
                },
                {
                    id:11,
                    img:''
                }
            ],
        }
    },
    mounted(){
        this.getWorkItems()
        this.getCategory()
    },
    methods:{
        getWorkItems(){
            api.get('/api/workitems').then(response => {
                this.image = response.data
            })
        },
        setDetailId(id){
            this.$router.push({name: 'Detail', params: {detailId: id}});
        },
        scrollDown(id){
            this.className=''
            document.getElementById(id).scrollBy({top: 550, behavior: 'smooth' })
        },
        openFilter(){
            this.filter = true
        },
        getCategory(){
            api.get('/api/filterList').then(response => {
                this.categories = response.data
            })
        },
        getByCategory(category){
            let param = category.replace(/\s/g, "-")
            api.get('/api/workitemsByCategory/'+param).then(response => {
                console.log(response.data)
                this.image = response.data
            })
            console.log(param)
        }
    }
}
</script>