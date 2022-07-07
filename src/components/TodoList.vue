<template>
    <ul>
        <li v-for="(todo, index) in todos" @click="deleteTodo(index)" :key="index">{{ todo }}</li>
    </ul>
</template>

<script>
export default {
    props: ['todos'],
    methods: {
        deleteTodo(index){
            this.$emit('delete-todo', index);
        }
    }
}
</script>

<style>
    ul {
        text-align: left;
    }
</style>