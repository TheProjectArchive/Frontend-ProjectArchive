<template>
<div>
  <div data-aos="fade-zoom-in" data-aos-duration="1000" class="container container-grid">
    <div v-for="content_images in content" :key="content_images.index" >
      <img
        @click="getName(content_images)"
        class="content-images"
        :id="content_images"
        :src="'http://admin.theprojectarchive.com' + content_images"
      />
    </div>
  </div>
  <transition name="fade" appear>
      <div class="modal-overlay flex-center" v-if="modalContent">
          <div class="close-modal">
            <img
              v-if="filter == true"
              @click="filter = false"
              src="@/assets/close-filter.png"
              alt=""
              class="button-close"
            />
          </div>
        <div class="container-category scrollable-container ">
          <div v-for="category in categories" :key="category.index">
            <button
              class="category-button white"
              @click="getByCategory(category.category)"
            >
              {{ category.category }}
            </button>
          </div>
        </div>
          <div class="clearfix"></div>
      </div>
    </transition>
</div>
</template>

<style scoped>
    .container-grid{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(13rem, 16rem));
        row-gap: 10px;
        column-gap: 10px;
        max-width: 600px;
    }
    .content-images{
        width: 100%;
        border: 5px solid white;
        cursor: pointer;
    }
    .container{
        overflow-y: auto;
        height:70vh;
        scrollbar-width: none;
    }
    .container::-webkit-scrollbar{
        display: none;
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
      modalContent: false
    };
  },
  mounted() {
    this.getContent();
  },
  methods: {
    getContent() {
      console.log(this.content);
    },
    popOut() {
      this.showModal = true;
    },
    getName(id) {
      this.modalImage = id;
      console.log(id);
    },
    scrollDown(id) {
      document
        .getElementById(id)
        .scrollBy({ top: 587.5, left: 0, behavior: "smooth" });
    },
  },
};
</script>