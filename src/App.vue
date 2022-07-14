<template>
  <div id="app">
    <div class="content">

      <div class="pageLogo">
        <SiteHeader />
        <div>
          <nav>
            <router-link to="/">Основная</router-link> |
            <router-link to="/about">Полезное</router-link>
          </nav>
          <router-view/>
        </div>
      </div>

      <div class="pageHow">
          <CompLogo />
      </div>
      
      <div class="pageGallery">

      </div>

    </div>
    <div class="pageFooter">
      <SiteFooter />
    </div>
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue'
import CompLogo from '@/components/CompLogo.vue'

import SiteFooter from '@/components/SiteFooter.vue'

export default {
   components: {
        SiteHeader,
        SiteFooter,
        CompLogo

   }
}
</script>

<style>
/* * {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
.content {
  position: relative;
  min-height: 100%;
    padding-bottom: 90px;

} */
/* .content {
  padding-bottom: 90px;
} */
/* .pageFooter {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
} */

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
.pageLogo{
  background-color: black;
  /* background-size: contain ; */
  background-repeat: no-repeat;
  background-image: url(@/assets/s1.jpg);;
}
.pageMap{
margin-top: 20%;
}
</style>
