<template>
  <Panel>
    <div data-aos="fade-zoom-in" data-aos-duration="1200" class="text">
      {{description}}
    </div>
  </Panel>
</template>

<script>
import api from '@/request.js'
import Panel from "@/components/Panel";
export default {
  data(){
    return{
      description:''
    }
  },
  components:{
    Panel,
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
@media only screen and (max-width: 600px) {
  .text{
    font-size:12px;
    text-transform: uppercase; 
    text-align:left;
  }
}
@media only screen and (min-width: 600px) {
.text{
    font-size:30px;
    text-transform: uppercase; 
    text-align:left;
  }
}
</style>