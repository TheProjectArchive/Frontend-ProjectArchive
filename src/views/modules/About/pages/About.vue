<template>
<div class="description-container">
   <div data-aos="fade-zoom-in" data-aos-duration="1200" class="col-md-12 description text">
        {{description}}
      </div>
</div>
 
    
</template>

<script>
import api from '@/request.js'
export default {
  data(){
    return{
      description:''
    }
  },
  mounted(){
    this.getDescription()
  },
  methods:{
    getDescription(){
      api.get("/api/aboutdesc")
        .then(response => {
            this.description = response.data[0].about_text
      })
    }
  }
}
</script>

<style scoped>
  .description{
    font-size:2vw;
    text-transform: uppercase; 
    text-align: left;
    color: white;
    line-height: 1.1;
  }
  .description-container{
    padding-left: 9%;
    padding-right: 9%;
    padding-top: 3%;
  }
  /* @media screen and (max-height:728px){
    .text{
      font-size: 25px;
    }
  } */
</style>