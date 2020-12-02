<template>
  <div id="app">
    <div class="header">
      <Header />
    </div>
    <div class="content">
      <router-view />
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<style>
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

.root {
  background: black;
}

html,
body {
  height: 100%;
  display: grid;
  margin: 0;
  padding: 0;
}
.content{
  height: 76%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header{
  height: 12%;
}

.footer{
  height: 12%;
}

</style>

<script>
import Header from "@/components/nav/Header.vue";
import Footer from "@/components/nav/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
