<template>
  <div class="home">
    <CompLogo />
    <!-- <img alt="Vue logo" src="img/logo.webp"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import CompLogo from '@/components/CompLogo.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    CompLogo
  }
}
</script>
