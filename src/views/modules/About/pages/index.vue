<template>
  <div>
    <div v-if="isLoading" ref="workImages" />
    <div class="description-container">
      <div
        data-aos="fade-zoom-in"
        data-aos-duration="1200"
        class="col-md-12 description text"
      >
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/request.js";
export default {
  data() {
    return {
      description: "",
      isLoading: true,
      loader: this.$loading.show({
        // Optional parameters
        container: this.$refs.workImages,
        canCancel: true,
        onCancel: this.onCancel,
        opacity: 1,
        backgroundColor: "#000000",
        color: "#ffffff",
      }),
    };
  },
  beforeMount() {
    this.loader;
  },
  mounted() {
    this.getDescription();
  },
  methods: {
    getDescription() {
      api.get("/api/aboutdesc").then((response) => {
        this.description = response.data[0].about_text;
        this.isLoading = false;
        this.loader.hide();
      });
    },
  },
};
</script>

<style scoped>
.description {
  font-size: 2vw;
  text-transform: uppercase;
  text-align: left;
  color: white;
  line-height: 1.1;
}
.description-container {
  padding-left: 9%;
  padding-right: 9%;
}
</style>