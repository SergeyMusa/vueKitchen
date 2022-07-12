<template>
  <div class="home">
    
    

    <!-- <img alt="Vue logo" src="img/logo.webp"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <MainBtn btnName="Нажми меня" btnUrl="#"/>
    <CompCarousel />

  </div>
</template>

<script>
// @ is an alias to /src
import MainBtn from '@/components/MainBtn.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import CompCarousel from '@/components/CompCarousel.vue'

export default {
  name: 'HomeView',
  components: {
    MainBtn,
    HelloWorld,
    CompCarousel
  }
}
</script>
