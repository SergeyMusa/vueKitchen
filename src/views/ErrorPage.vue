<template>
   <div
      :style="{
        'background-image': `url(img/404.jpg)`,
        width: '99%',
        height: '88%',
      }"
    >
      <div class="h">
        <h1>404</h1>
        <h2>Похоже вы немного заплутали, вернитесь назад</h2>
      </div>
            <!-- <img id="scull" alt="My logo" src="img/logo.webp" height="100px"> -->

    </div>
</template>

<script>

</script>

<style scoped>
div{
  background: #cccccc;
background-size: contain ;
  background-repeat: no-repeat;
  position:absolute;
  /* top:-100px; */
    /* height: 80%;
    width: 99%; */
}
div.h{
  background: #ccccccc8;
  margin-top: 13%;
  vertical-align: middle;
  line-height: 0.7;
  
  margin-left: 30% ;
  margin-right: 30% ;
  padding: 5px 20px;
  border-radius: 1rem ;
}
h1 {
  font-family: Verdana, Arial, Helvetica, sans-serif;
}
h2 {
  font-family: 'Times New Roman', Times, serif;
  font-style: italic;
}
</style>