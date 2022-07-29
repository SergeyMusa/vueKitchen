<template>
  <div>

    <nav>
      <router-link to="/page1">Типы планировок кухни</router-link> |
      <router-link to="/page2">Уход за мебелью из МДФ</router-link>
    </nav>
    <router-view/>

    <div id="useful">
      <hr>
    </div>
  </div>
</template>


<script >
export default {
  name: "ErrorPage",
};
</script>

<style>
/* .useful {
  height: 100%;
} */
.useful {
  height: 100%;
  
  box-sizing: border-box;
  min-height: 100%;
  padding-bottom: 90px;
}
</style>
