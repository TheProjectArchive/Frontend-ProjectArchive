<template>
<div class="work-images">
    <div class="container-scroll">
        <div class="container-grid" id="scroll-down">
            <button @click="popOut()" v-for="content_images in content" :key="content_images.index">
                <div>
                    <img @click="getName(content.index)" class="border" width="280px" height="280px" :id="content.index" :src="'http://admin.theprojectarchive.com'+content.slice(2,-1)">
                </div>
            </button>
        </div>
    </div>
    <transition name='fade' appear>
    <div class="modal-overlay flex-center" v-if="showModal">
        <button @click="showModal = false ">
            <img class="border" width="700px" height="700px" :src="'http://localhost:8080/assets/image-work-details/'+this.modalImage">
        </button>
    </div>
    </transition>
    <div class="scroll">
        <img @click="scrollDown('scroll-down')" :class="'cursor arrow-scroll ' + className" src="@/assets/scroll-img.png" alt="">
    </div>
</div>
</template>

<style scoped>
    .work-images{
        display: flex;
    }
    .container-grid{
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 5px;
    }
    .border{
        border-style: solid;
        border-color: white;
        border-width: 5px;
    }
    .container-scroll{
        overflow: scroll;
        height:585px;
    }
    .container-scroll::-webkit-scrollbar {
        display: none;
    }
    .modal-overlay{
        position: absolute;
        top: 100px;
        left: 0;
        right: 0;
        bottom: 20px;
        z-index: 98;
        background-color: rgba(0,0, 0, 1);
        margin-bottom: 65px;
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
    .flex-center{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .fade-enter-active,
    .fade-leave-active{
        transition: opacity 0.7s ; 
    }
    .fade-enter,
    .fade-leave-to{
        opacity: 0;
    }
    .scroll{
        display: flex;
        align-items: center;
        height: 600px;
        width: 100px;
    }
    .cursor{
        cursor: pointer;
    }
    .arrow-scroll{
        padding-left: 50px;
        width: 20px;
        height: 35px;
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
</style>

<script>
//import request from '@/request.js'
export default {
    props:['content'],
   data(){
       return{
           className:'bounce',
           showModal:false,
           modalImage:'',
       }
   },
   mounted(){
     this.getContent()
   },
   methods:{
    //    getDetailImages(){
    //        request.get('/api/v3/certificates/tracking')
    //            .then((response)=>{
    //                 if(response.data.success){
    //                     console.log(response.data.data)
    //                 }else{
    //                     alert.error(response.data.message)
    //                 }
    //             })
    //        },
            getContent(){
               console.log(this.content)
            },
           popOut(){
               this.showModal = true;
           },
            getName(id){
                var fullPath = document.getElementById(id).src;
                var filename = fullPath.substring(48);
                this.modalImage = filename;
            },
            dummy(){
                console.log('dummy')
            },
            scrollDown(id){
                document.getElementById(id).scrollBy({top: 30, behavior: 'smooth' })
        },
       }
   }


</script>