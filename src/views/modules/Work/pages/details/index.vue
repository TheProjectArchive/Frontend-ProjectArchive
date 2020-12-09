<template>
  <div class="row white">
    <div
      data-aos="fade-zoom-in"
      data-aos-duration="1000"
      class="col-md-6 left-container"
    >
      <div class="banner-image">
        <img
          style="width: 92%"
          :src="'http://admin.theprojectarchive.com' + this.banner_image"
          alt=""
        />
      </div>

      <div class="information-text">
        <div class="title">{{ data.nama_brand }}</div>
        <div class="category">
          <label>{{ data.category }}</label>
        </div>
        <div class="description" style="">
          {{ data.description }}
        </div>
      </div>

      <!-- <div style="text-align: left; ">
                    <label class="url" v-if="data.url_content" @click="goToWebsite(data.url_content)">{{data.url_content}}</label>
                    <label class="url" v-else>nothing to show</label>
                </div>
                <div class="text-detail">
                   <div class="title">{{ data.nama_brand }}</div>
                   <label style="font-size:24px; margin-bottom:35px;">{{data.category}}</label>
                   <div style="font-size:12px; height:70px;">
                       {{ data.description }}
                   </div>
            </div> -->
    </div>
    <div class="col-md-6">
      <workImages :content="this.content_image"></workImages>
    </div>
    <transition name="fade" appear>
      <div class="modal-overlay flex-center">
        image
      </div>
    </transition>
  </div>
</template>

<style lang="stylus">
.left-container {
  padding-left: 9%;
}

.title {
  text-align: left;
  font-size: 40px;
  font-weight: bold;
}

.banner-image {
  text-align: left;
}

.category {
  text-align: left;
  font-size: 24px;
}

.description {
  font-size: 12px;
  text-align: left;
}

.information-text {
  padding-top: 12%;
}

.url {
  font-style: italic;
  font-weight: 400;
  font-size: 13px;
  margin-bottom: 35px;
}

.modal-overlay {
  position: absolute;
  left: 0;
  top: 12%;
  bottom: 12%;
  right: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.9);
}
</style>

<script>
import api from "@/request.js";
export default {
  data() {
    return {
      data: {},
      banner_image: "",
      content_image: [],
      response: {
        bannerimage: "mono-01",
        category: "Branding Concept",
        content: [
          {
            id: 1,
            name: "mono-02",
          },
          {
            id: 2,
            name: "mono-03",
          },
          {
            id: 3,
            name: "mono-04",
          },
          {
            id: 4,
            name: "mono-05",
          },
          {
            id: 5,
            name: "mono-05",
          },
        ],
      },
    };
  },
  components: {
    workImages: () => import("../../components/work-images/index.vue"),
    // Panel: () => import('@/components/Panel.vue')
  },
  created() {
    this.getContentImages();
  },
  methods: {
    getContentImages() {
      this.id = this.$route.params.detailId;
      api.get("/api/content/" + this.id).then((response) => {
        this.data = response.data;
        this.banner_image = response.data.banner_image.slice(2, -1);
        this.content_image = response.data.content_image;
        console.log(response.data);
      });
    },
    goToWebsite(url) {
      window.open("https://" + url);
    },
  },
};
</script>