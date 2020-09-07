<template>
    <Panel>
        <div class="detail-container col-sm">
                <img style="width:700px; height:290px;" :src="'http://admin.theprojectarchive.com'+this.banner_image" alt="">
                <div class="text-detail">
                   <div class="title">{{ data.nama_brand }}</div>
                   <label style="font-size:24px; margin-bottom:35px;">{{data.category}}</label>
                   <div style="font-size:12px; height:70px ">
                       {{ data.description }}
                   </div>
            </div>
        </div>
        <div class="col-sm">
            <workImages :content="content_image"></workImages>
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
import api from '@/request.js'
    export default {
        data()
        {
            return{
                data:{},
                banner_image: '',
                content_image: [],
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
                this.id = this.$route.params.detailId
                api.get('/api/content/'+this.id)
               .then((response)=>{
                   console.log(response.data)
                    this.data =  response.data
                    this.banner_image = response.data.banner_image.slice(2,-1)
                    this.content_image = response.data.content_image
                })
            }
        }
    }
</script>