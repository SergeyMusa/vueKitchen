<template>
  <div id="poleznoe">

    <nav>
      <router-link to="/page1">Типы планировок кухни</router-link> |
      <router-link to="/page2">Уход за мебелью из МДФ</router-link>
    </nav>
    <router-view/>
    
  </div>
</template>


<script >

</script>

<style>
/* .poleznoe {
  height: 100%;
} */
.poleznoe {
  height: 100%;
  
  box-sizing: border-box;
  min-height: 100%;
  padding-bottom: 90px;
}
</style>
