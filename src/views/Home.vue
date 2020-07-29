<template>
  <div class="home">
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/about">Contact</router-link>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="RAPI GANTENG"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="stylus" scoped>

</style>

