<template>
<div>
  <div v-if="isLoading" ref="workImages" />
  <div class="row" v-else>
    <div class="col-sm flex-center">
      <img
        v-if="filter == false"
        @click="openFilter"
        src="@/assets/menu-img.png"
        alt=""
        class="button-filter"
      />
    </div>
    <div class="col-sm">
      <div
        data-aos="fade-zoom-in"
        data-aos-duration="1200"
        id="scroll-down"
        class="container white image-container"
      >
        <div v-for="images in image" :key="images.id">
          <img
            class="cursor cover-img"
            @click="setDetailId(images.id)"
            v-if="images.cover_image != ''"
             :src="
              'http://admin.theprojectarchive.com' +
              images.cover_image.slice(2, -1)
            "
            alt="content"
          />
          <img
            class="cover-img"
            v-else
            :src="'http://localhost:8080/assets/not-found.jpg'"
            alt="not found"
          />
        </div>
      </div>
    </div>
    <div
      class="col-sm flex-center"
      style="justify-content: flex-start"
      v-if="image.length >= 9"
    >
      <img
        @click="scrollDown('scroll-down')"
        :class="'arrow-scroll ' + className"
        src="@/assets/scroll-img.png"
        alt=""
      />
    </div>
    <div
      class="col-sm flex-center"
      style="justify-content: flex-start"
      v-else
    ></div>
    <transition name="fade" appear>
      <div class="modal-overlay flex-center" v-if="filter">
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
</div>
  
</template>

<style lang="stylus">
.image-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16.8rem, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(16.8rem, 1fr));
}

.cover-img {
  border: 5px solid black;
  width: 100%;
}

.button-filter {
  cursor: pointer;
  width: 30px;
}

.button-close
    cursor: pointer

.cursor {
  cursor: pointer;
}

.arrow-scroll {
  width: 20px;
  height: 35px;
  cursor: pointer;
}

.container {
  overflow: scroll;
  height: 70vh;
  scrollbar-width: auto;
}

.container::-webkit-scrollbar {
  display: none;
}

.close-modal{
    display flex
    align-items center
    justify-content flex-end
    width 12%
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

.filter-icon {
  padding-right: 10%;
  padding-left: 10%;
}

.modal-overlay {
  position: absolute;
  left: 0;
  height: 75%;
  width 100%;
  right: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.9);
}

.modal-overlay::-webkit-scrollbar 
    display none;

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.7s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.container-category {
  display: flex;
  flex-direction: column;
  width 76%
}

.category-button {
  border: none;
  background: transparent;
  box-shadow: 0px 0px 0px transparent;
  border: 0px solid transparent;
  font-size: 20px;
  text-transform lowercase
}

button:hover {
  text-decoration: underline;
  border: none;
}

.clearfix
    width 12%

@media screen and (min-height: 1080) {
  .dropdown {
    display: none;
  }
}
</style>

<script>
import api from "@/request.js";

export default {
  data() {
    return {
      className: "bounce",
      filter: false,
      categories: [],
      image: [],
      isLoading: true,
      loader:
        this.$loading.show({
                  // Optional parameters
                  container: this.$refs.workImages,
                  canCancel: true,
                  onCancel: this.onCancel,
                  opacity: 1,
                  backgroundColor: '#000000',
                  color: '#ffffff'
                })
    };
  },
  beforeMount(){
    this.loader;
  },
  mounted() {
    this.getWorkItems();
    this.getCategory();    
  },
  methods: {
    getWorkItems() {
      api.get("/api/workitems").then((response) => {
        this.image = response.data;
        this.isLoading = false
        this.loader.hide();
      });
    },
    setDetailId(id) {
      this.$router.push({ name: "Detail", params: { detailId: id } });
    },
    scrollDown(id) {
      this.className = "";
      document.getElementById(id).scrollBy({ top: 550, behavior: "smooth" });
    },
    openFilter() {
      this.filter = true;
    },
    getCategory() {
      api.get("/api/filterList").then((response) => {
        this.categories = response.data;
      });
    },
    getByCategory(category) {
      let param = category.replace(/\s/g, "-");
      api.get("/api/workitemsByCategory/" + param).then((response) => {
        this.image = response.data;
      });
    },
    // submit() {
    //               var loader = this.$loading.show({
    //               // Optional parameters
    //               container: this.$refs.workImages,
    //               canCancel: true,
    //               onCancel: this.onCancel,
    //               opacity: 1,
    //               backgroundColor: '#000000',
    //               color: '#ffffff'
    //             });
    //             loader.show();        
    //         }
  },
};
</script>