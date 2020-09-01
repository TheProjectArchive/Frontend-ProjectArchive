<template>
    <Panel>
        <div>
            <img v-if="filter==false" @click="openFilter" class="menu-category cursor" src="@/assets/menu-img.png" alt="">
            <img v-else @click="filter=false" class="menu-category cursor" style="margin-right:4px" src="@/assets/close-filter.png" alt="">
        </div>
        <div data-aos="fade-zoom-in" id="scroll-down" class="container white grid">
            <div v-for="images in image" :key="images.id" style="height:300px">
                <img class="cursor cover-img" @click="setDetailId(images.id)" v-if="images.img!=''" :src="'http://localhost:8080/assets/image-work/'+images.img+'.png'" alt="content">
                <img class="cover-img" v-else :src="'http://localhost:8080/assets/not-found.jpg'" alt="not found">
            </div>
        </div>
        <div v-show="image.length>=9">
            <img @click="scrollDown('scroll-down')" :class="'cursor arrow-scroll ' + className" src="@/assets/scroll-img.png" alt="">
        </div>
        <transition name='fade' appear>
        <div class="modal-overlay flex-center " v-if="filter">
            <div class="filter filter-position">
                <button @click="getCategory(category)" v-for="category in categories" :key="category.index" > {{category}}</button>
            </div>
        </div>
        </transition>
    </Panel>
</template>

<style scoped>
    .grid{
        display: grid;
        grid-column-gap: 10px;
        grid-row-gap: 10px;
        grid-template-columns: auto auto auto auto;
    }
    .cursor{
        cursor: pointer;
    }
    .cover-img{
        width: 300px;
        height: 300px;
    }
    .arrow-scroll{
        padding-left: 50px;
        width: 20px;
        height: 35px;
    }
    .container{
        overflow: scroll;
        height:610px;
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
        padding-right: 50px;
    }
    .modal-overlay{
        position: absolute;
        top: 100px;
        left: 250px;
        right: 0;
        bottom: 20px;
        z-index: 98;
        background-color: rgba(0,0, 0, 0.5);
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
        font-weight: 700;
        text-shadow: 2px 2px 8px white;
    }
</style>

<script>
import api from '@/request.js'

export default {
    data(){
        return {
            className:'bounce',
            filter:false,
            categories:['visual identity','Illustration','ui/ux', 'collateral'],
            image:[
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
    components:{
        Panel: () => import('@/components/Panel.vue')
    },
    methods:{
        getApi(payload, callback){
            api.get('/content'+payload).then(response => {
                callback(response)
            })
        },
        setDetailId(id){
            let routeData = this.$router.resolve({name: 'Detail', params: {detailId: id}});
            window.open(routeData.href, '_self');
        },
        scrollDown(id){
            this.className=''
            document.getElementById(id).scrollBy({top: 620, behavior: 'smooth' })
        },
        openFilter(){
            this.filter = true
        },
        getCategory(category){
            console.log(category)
        }
    }
}
</script>