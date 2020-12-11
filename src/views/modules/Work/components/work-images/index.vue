<template>
  <div class="container-workimage">
    <div
      data-aos="fade-zoom-in"
      data-aos-duration="1000"
      class="container container-grid"
      id="scroll-down"
    >
      <div v-for="content_images in content" :key="content_images.index">
        <img
          @click="getName(content_images)"
          class="content-images"
          :id="content_images"
          :src="'http://admin.theprojectarchive.com' + content_images"
        />
      </div>
      
    </div>
    <div v-show="content.length > 4" class="scroll">
        <img 
          @click="scrollDown('scroll-down')"
          :class="'cursor arrow-scroll ' + className"
          src="@/assets/scroll-img.png"
          alt=""
        />
      </div>
  </div>
</template>

<style scoped>
.container-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13rem, 16rem));
  row-gap: 10px;
  column-gap: 10px;
  max-width: 590px;
  overflow-y: auto;
  height: 70vh;
  scrollbar-width: none;
  margin-left: 0;
  margin-right: 0;
}
.content-images {
  width: 100%;
  border: 5px solid white;
  cursor: pointer;
}

.container-grid::-webkit-scrollbar {
  display: none;
}

.container-workimage{
  display: flex;
  flex-direction: row;
}

.scroll{
  display: flex;
  align-items: center;
}

@keyframes gbounce {
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-30px);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
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
  props: ["content"],
  data() {
    return {
      className: "bounce",
      showModal: false,
      modalImage: "",
      modalContent: false,
    };
  },
  methods: {
    popOut() {
      this.showModal = true;
    },
    getName(id) {
      this.$emit("getName", id);
    },
    scrollDown(id) {
      document
        .getElementById(id)
        .scrollBy({ top: 525, left: 0, behavior: "smooth" });
    },
  },
};
</script>