<template>
  <div class="firstPage">
    <h1>{{ msg.toUpperCase() }}</h1>
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
.firstPage{
  /* border: 1px solid rgb(188, 176, 13); */
display: flex;
  flex-direction: column;
  justify-content: center ;
  align-items: center;

  height: calc(200px-20vh) ;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

  color: #1a55d2;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 15% 15%;

  background: rgba(0, 0, 0, 0.1);
  /* box-shadow: 0 0 25px 27px white inset; */
  /* border-radius: 15vh; */ 
  border-radius: 65px;
      /* box-shadow: 0 0 25px 27px rgba(255, 255, 255, 0.6); */
    filter: drop-shadow(0px 0px 10px rgba(0,0,0,.8));
}
a {
  color: #42b983;
}
</style>
