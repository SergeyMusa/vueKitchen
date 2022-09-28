<template>
  <div id="app" class="app">
    <div class="app__pageTop">
      <div>
        <SiteHeader />
      </div>
      
      <div class="app__pageTop__PageMain">
        <nav>
          <router-link to="/">Основная</router-link> |
          <router-link to="/about">Полезное</router-link>
        </nav>
        <router-view/>
          <!-- <PageMain /> -->
      </div> 
    </div>

    <div class="app__pageBottom">
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

.app{
  display: flex;
  flex-direction: column;
  justify-content: space-between ;
  align-items: center;
  /* border: 1px solid blue; */
  /* background-size: contain ; */
   align-items: center;

  min-height: 98vh; 
}
.app__pageTop{
    display: flex;
  flex-direction: column;
  justify-content: flex-start ;

  /* justify-content: space-between; */
margin-bottom: 200px;
}
nav {
  /* margin-top: -30px; */
    margin-bottom: -10px;
}

nav a {
  font-weight: bold;
  color: #0f161d;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
