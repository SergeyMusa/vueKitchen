<template>
  <div class="FirstPage">
    <h1>{{ msg }}</h1>
    <p>
      собственное производство и минимальные сроки изготовления 
    </p>
  </div>
</template>

<script>
export default {
  name: 'FirstPage',
  data() {
    return {
        message: "Добро пожаловать !",
      };
},
  props: {
    msg: String
  },
}
let i = 42;
export {i};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.FirstPage{
height: 70%;
width: 99%;
  color: #1a55d2;
    font-size: 1.4rem;
  font-weight: bold;
  margin: 20% 0;
  
    border: 1px solid rgb(13, 188, 19);

}
/* 
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
} */
a {
  color: #42b983;
}
</style>
