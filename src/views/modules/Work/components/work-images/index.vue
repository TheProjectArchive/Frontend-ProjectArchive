<template>
<div data-aos="fade-zoom-in" data-aos-duration="1000" class="work-images">
    <div class="container-scroll" id="scroll-down" >
        <div class="container-grid smooth" >
                <button @click="popOut()" v-for="content_images in content" :key="content_images.index">
                        <img @click="getName(content_images)" 
                                class="border" 
                                width="280px" 
                                height="280px" 
                                :id="content_images" 
                                :src="'http://admin.theprojectarchive.com'+content_images">
                </button>
        </div>
    </div>
    <transition name='fade' appear>
    <div class="modal-overlay flex-center" v-if="showModal">
        <button @click="showModal = false ">
            <img class="border" width="700px" height="700px" :src="'http://admin.theprojectarchive.com'+this.modalImage">
        </button>
    </div>
    </transition>
    <div v-show="content.length>4" class="scroll">
        <img @click="scrollDown('scroll-down')" :class="'cursor arrow-scroll ' + className" src="@/assets/scroll-img.png" alt="">
    </div>
</div>
</template>

<style scoped>
    .work-images{
        display: flex;
        padding-top: 13px;
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
        scrollbar-width: none;
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
                // var fullPath = document.getElementById(id).src;
                // var filename = fullPath.substring(34);
                this.modalImage = id;

                console.log(id)
            },
            dummy(){
                console.log('dummy')
            },
            scrollDown(id){
               document.getElementById(id).scrollBy({top: 587.5, left: 0, behavior: 'smooth' })
        },
       }
   }


</script>