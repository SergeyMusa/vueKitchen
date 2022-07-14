<template>
  <div class="hello">
    <h1>...{{ msg }}...</h1>
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
    message: "Hi Sir !",
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
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
