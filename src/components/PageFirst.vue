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

  height: 200px;

  color: #1a55d2;
  font-size: 1.5rem;
  font-weight: bold;
  /* opacity: 0.6; */
  /* background: rgba(0, 0, 0, 0.2); */
  /* box-shadow: 0 0 25px 27px white inset; */
  /* border-radius: 15vh; */
  margin: 15% 15%;
  
  border-radius: 55px;
      box-shadow: 0 0 25px 27px rgba(255, 255, 255, 0.6);
}
a {
  color: #42b983;
}
</style>
