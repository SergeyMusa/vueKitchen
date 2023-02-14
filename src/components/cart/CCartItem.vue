<template>
    <div class="cart_item">
        <img class="cart_item__image" :src="require('../../assets/img/1/' + cart_item_data.image)" alt="img">
        <div class="cart_item__info">
            <p>{{ cart_item_data.name }}</p>
            <p>{{ cart_item_data.price }}</p>
            <p>{{ cart_item_data.article }}</p>
        </div>
        <div class="cart_item__info">
            <p>шт.</p>    
            {{ cart_item_data.quantity }}
        </div>
        <button 
            class="cart_item__delete"
            @click="deleteFromCart"
        >Delete</button>
    </div>
</template>

<script>
// import MenuIcon from 'vue-material-design-icons/Menu.vue';

    export default {
        name:"CCartItem",
        props:{
            cart_item_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {}
        },
        computed: {},
        methods: {
            deleteFromCart() {
                this.$emit('deleteFromCart')
            }
        },
        mounted() {
            this.$set(this.cart_item_data, 'quantity', 1)
        }
    }
</script>

<style scoped lang="scss">
.cart_item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 6px 0 gray; //lightgray;
    padding: 0 8px ;
   
    margin-bottom: 8px ;
    // width: 400px;
    &__info {
        margin: 0 20px;
    }
    &__image {
        max-width: 70px;
    }
    &__delete {
        margin-left: 10px; 
    }
}
</style>