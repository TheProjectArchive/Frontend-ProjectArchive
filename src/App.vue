<template>
  <div id="app">
      <div class="main">
        <router-view/>
      </div>
    <Footer/>
    <Header/>
  </div>
</template>

<style>

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.main{
  margin-top: 100px;
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
