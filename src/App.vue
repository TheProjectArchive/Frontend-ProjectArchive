<template>
  <div id="app">
    <Header/>
    <div class="container"> 
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

.root{
  background: black;
}
.container{
  height: 84vh;
  top: 0;
}
</style>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  }
}
</script>
