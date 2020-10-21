<template>
  <div id="app">
    <Header/>
      <div class="main">
        <router-view/>
      </div>
    <Footer/>
  </div>
</template>

<style>
  #app {
    font-family: 'Montserrat', sans-serif;
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

#nav a.router-link-exact-active {
  color: #42b983;
}

.root{
  background: black;
}
</style>

<script>
import Header from "@/components/nav/Header.vue";
import Footer from "@/components/nav/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  }
}
</script>
