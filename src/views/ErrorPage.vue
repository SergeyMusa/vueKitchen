<template>
<!-- TODO:
FIXME: -->
  <div class="main">
    <div class="h">
      <h1>404</h1>
      <h2>Похоже вы немного заплутали, вернитесь назад</h2>
    </div>
    <!-- <img id="scull" alt="My logo" src="img/logo.webp" height="100px"> -->
  
          <a href="#insta"
          ><img class="socPict" alt="insta" src="../assets/img/soc/insta.png"
        /></a>
  
  </div>
</template>

<script>
// const lines = 5;
// let rez = "";
// for (let i = 1; i < lines; +i) {
//   for (let j = 0; j < i; j++) {
//     rez += "*";
//   }
//   rez += "\n";
// }
// console.log(rez);
</script>

<style scoped>
.main{
   background-image: "url(404.jpg)";
      width: "99%";
      height: "88%";
}
div {
  background: #cccccc;
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  /* top:-100px; */
  /* height: 80%;
    width: 99%; */
}
div.h {
  background: #ccccccc8;
  margin-top: 13%;
  vertical-align: middle;
  line-height: 0.7;

  margin-left: 30%;
  margin-right: 30%;
  padding: 5px 20px;
  border-radius: 1rem;
}
h1 {
  font-family: Verdana, Arial, Helvetica, sans-serif;
}
h2 {
  font-family: "Times New Roman", Times, serif;
  font-style: italic;
}
</style>
