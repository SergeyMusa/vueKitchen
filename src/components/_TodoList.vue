<template>
    <ul>
        <li v-for="(todo, index) in todos" @click="deleteTodo(index)" :key="index">{{ todo }}</li>
    </ul>
    <!-- {{}} -->
</template>

<script>
import {i} from './HelloWorld.vue'
import {HelloWorld} from './HelloWorld.vue'


export default {
    props: ['todos'],
    methods: {
        deleteTodo(index){
            this.$emit('delete-todo', index);
        }
    }
}
console.log(i);
console.log(HelloWorld.data.message);
// ???

</script>

<style>
    ul {
        text-align: left;
    }
</style>