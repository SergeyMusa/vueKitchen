<template>
   <div
      :style="{
        'background-image': `url(img/404.jpg)`,
        width: '99%',
        height: '88%',
      }"
    >
        <h1>404</h1>
        <h2>Похоже вы немного заплутали, вернитесь назад</h2>
            <!-- <img id="scull" alt="My logo" src="img/logo.webp" height="100px"> -->

    </div>
</template>

<script>

</script>

<style scoped>
/* img/404.jpg */
body{
    
}
div{
    background: #cccccc;
    /* background-image: "img/404.jpg"; */
           /* background-size: 100% auto; */
background-size: contain ;
background-repeat: no-repeat;
margin: 10%;
/* background-size:  contain auto; */

 position:absolute;
  /*  top:0px;
  right:0px;
  bottom:0px;
  left:0px; */
    /* height: 80%;
    width: 99%; */

}
h1 {
    /* position:absolute; */
   /*  top:40%;
    right:50%; */
    /* margin-top: 20%; */
    /* text-align: center;
   
    display: inline-block; 
    vertical-align: middle;  */

    /* display: block; */

  /* display: inline-block; */ 
  margin-top: 13%;
  vertical-align: middle;
  
}
h2 {
    line-height: 0.7;
}
</style>