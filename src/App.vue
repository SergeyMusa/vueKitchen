<template>
  <div id="app">
    <SiteHeader />

    <nav>
      <router-link to="/">Основная</router-link> |
      <router-link to="/about">Полезное</router-link>
    </nav>
    <router-view/>
    
    <CompMap />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue'

import CompMap from '@/components/CompMap.vue'
import SiteFooter from '@/components/SiteFooter.vue'

export default {
   components: {
        SiteHeader,
        CompMap,
        SiteFooter

   }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 5px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
