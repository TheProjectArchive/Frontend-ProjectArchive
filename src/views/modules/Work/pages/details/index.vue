<template>
    <Panel>
        <div class="detail-container col-sm">
                <img style="width:700px; height:290px;" :src="'http://localhost:8080/assets/'+response.bannerimage+'.png'" alt="">
                <div class="text-detail">
                   <div class="title">MONO™</div>
                   <label style="font-size:24px; margin-bottom:35px;">{{response.category}}</label>
                   <div style="font-size:12px; height:70px ">
                       Mono is an experimental product of Radit esp laid on a concept that the audiences are  the fundamental groundwork for an eminent brand, not the other way around. Radit believes that all the energy of individuals plays an imperative part of life. Hence, he longs for the confident audiences thanks to their uniqueness, not because of the products they wear.
                   </div>
            </div>
        </div>
        <div class="col-sm">
            <workImages :content="response.content"></workImages>
        </div>  
        <div>
            <img @click="scrollDown('scroll-down')" :class="'cursor arrow-scroll ' + className" src="@/assets/scroll-img.png" alt="">
        </div>
    </Panel>
</template>

<style scoped>
    .detail-container{
        height:585px;
        padding-right: 50px;
    }
    .details{
        color: white;
        padding-left: 100px;
        padding-right: 100px;
        top: 0;
        height: 80vh;
    }
    .text-detail{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        text-align: left;
        height: 300px;
        width: 700px;
    }
    
    .title{
        font-size: 40px;
        font-weight:bold;
    }
    
</style>

<script>
import request from '@/request.js'
    export default {
        data()
        {
            return{
                response:{
                    bannerimage: 'mono-01',
                    category:'Branding Concept',
                    content:[
                        {
                            id:1,
                            name:'mono-02',
                            }
                        ,
                        {
                            id:2,
                            name:'mono-03'
                        },
                        {
                            id:3,
                            name:'mono-04'
                        },
                        {
                            id:4,
                            name:'mono-05'
                        },
                        {
                            id:5,
                            name:'mono-05'
                        }
                    ]
                }
            }
        },
        components:{
            workImages:() =>import('../../components/work-images/index.vue'),
            Panel: () => import('@/components/Panel.vue')
        },
        mounted(){
            this.getContentImages()
        },
        methods:{
            getContentImages(){
                this.images.id = this.$route.params.detailId
                request.get('/api/v3/certificates/tracking')
               .then((response)=>{
                    if(response.data.success){
                        console.log(response.data)
                    }else{
                        alert.error(response.data.message)
                    }
                })
            }
        }
    }
</script>