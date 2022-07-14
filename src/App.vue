<template>
  <div id="app">
    <div class="pageHeader">
      <SiteHeader />
    </div>
   
    <div class="PageMain">
      <nav>
        <router-link to="/">Основная</router-link> |
        <router-link to="/about">Полезное</router-link>
      </nav>
      <router-view/>
      <!-- <PageMain /> -->
    </div>

    <div class="pageFooter">
      <SiteFooter />
    </div>
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue'
// import PageMain from '@/components/PageMain.vue'
import SiteFooter from '@/components/SiteFooter.vue'

export default {
   components: {
        SiteHeader,
        // PageMain,
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

.pageHeader{
  /* border: 1px solid blue; */
  /* background-size: contain ; */
}
nav {
  margin-top: -30px;
}

nav a {
  font-weight: bold;
  color: #0f161d;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
