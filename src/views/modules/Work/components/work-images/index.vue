<template>
<div>
    <div class="container-scroll">
        <div class="container-grid">
            <button @click="popOut()" v-for="images in content" :key="images.id">
                <div>
                    <img @click="getName(images.id)" class="border" width="280px" height="280px" :id="images.id" :src="'http://localhost:8080/assets/image-work-details/'+images.name+'.png'">
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
</div>
</template>

<style scoped>
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
        display: block;
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
</style>

<script>
import request from '@/request.js'
export default {
    props:['content'],
   data(){
       return{
           showModal:false,
           modalImage:'',
       }
   },
   mounted(){
       this.getDetailImages()
   },
   methods:{
       getDetailImages(){
           request.get('/api/v3/certificates/tracking')
               .then((response)=>{
                    if(response.data.success){
                        console.log(response.data.data)
                    }else{
                        alert.error(response.data.message)
                    }
                })
           },
           popOut(){
               this.showModal = true;
           },
            getName(id){
                var fullPath = document.getElementById(id).src;
                var filename = fullPath.substring(48);
                this.modalImage = filename;
            }
       }
   }


</script>