<template>
  <div id="app">
    <CompLogo />
    <!-- <img id="scull" alt="Vue logo" src="./assets/log-v.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <hr>
    <TodoList :todos="todos" @delete-todo="deleteTodo"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TodoList from './components/TodoList.vue'
import CompLogo from './components/CompLogo.vue'

export default {
  name: 'App',
  data(){
    return {
      todos: ['Ремонт', 'Завтрак']
    }
  },
  components: {
    CompLogo,
    TodoList,
    HelloWorld
  },
  methods: {
    deleteTodo(index){
      this.todos.splice(index, 1);
    }
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
  margin-top: 60px;
}
</style>
