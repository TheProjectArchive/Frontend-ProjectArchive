<template>
    <Panel>
            <div class="container-grid">
                <img style="padding-top:10px; width:700px; height:312px;" src="@/assets/mono-01.png" alt="">
                <div class="text-detail">
                   <div class="title bold">MONO™</div>
                   <label style="font-size:12px;">
                       Mono is an experimental product of Radit esp laid on a concept that the audiences are  the fundamental groundwork for an eminent brand, not the other way around. Radit believes that all the energy of individuals plays an imperative part of life. Hence, he longs for the confident audiences thanks to their uniqueness, not because of the products they wear.
                   </label>
                </div>
                <div class="images">
                    <workImages></workImages>
                </div>
            </div>
    </Panel>
</template>

<style scoped>
    .details{
        color: white;
        padding-left: 100px;
        padding-right: 100px;
        top: 0;
        height: 80vh;
    }
    .container-grid{
        position: relative;
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 50px;
        padding: 10px;
    }
    .text-detail{
        text-align: left;
        height: 300px;
        width: 700px;
    }
    .images{
        grid-area: 1 / 2 / 3
    }
    .title{
        font-size: 40px;
    }
</style>

<script>
    export default {
        data()
        {
            return{
                content:{
                    images:[
                        {
                            img:'1'
                        },
                        {
                            img:'2'
                        },
                        {
                            img:'3'
                        },
                        {
                            img:'4'
                        }
                    ]
                }
            }
        },
        components:{
            workImages:() =>import('../../components/work-images/index.vue'),
            Panel: () => import('@/components/Panel.vue')
        }
    }
</script>