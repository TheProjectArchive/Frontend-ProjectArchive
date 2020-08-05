<template>
    <Panel>
    <div data-aos="fade-zoom-in" class="white grid">
        <div v-for="images in image" :key="images.id" class="img-container">
            <a v-if="images.img!=''" href="/detail">
                <img :src="'http://localhost:8080/assets/image-work/'+images.img+'.png'" alt="content">
            </a>
            <img v-else :src="'http://localhost:8080/assets/not-found.jpg'" alt="not found">
        </div>
    </div>
    </Panel>
</template>

<style scoped>
    .grid{
        position: relative;
        display: grid;
        grid-column-gap: 10px;
        grid-row-gap: 5px;
        grid-template-columns: auto auto auto auto;
        padding: 10px;
    }

    img{
        width: 300px;
        height: 300px;
    }
</style>

<script>
import api from '@/request.js'

export default {
    data(){
        return {
            image:[
                {
                    id:1,
                    img:'mono-06'
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
                    id:1,
                    img:''
                },
                {
                    id:1,
                    img:''
                },
                {
                    id:1,
                    img:''
                },
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
        
    }
}
</script>