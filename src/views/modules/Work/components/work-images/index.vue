<template>
    <div class="container-grid">
        <a v-for="images in image" :key="images.id" href="">
            <div>
                <img class="border-white" width="300px" height="300px" :src="'http://localhost:8080/assets/image-work-details/'+images.img+'.png'">
            </div>
        </a>
    </div>
</template>

<style scoped>
    .container-grid{
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 5px;
    }
</style>

<script>
export default {
   data(){
       return{
           image:[
               {
                id:1,
                img:'mono-02'
                }
               ,
               {
                   id:2,
                img:'mono-03'
                },
                {
                    id:3,
                img:'mono-04'
                },
                {
                    id:4,
                img:'mono-05'
                }
           ]
       }
   }

}
</script>