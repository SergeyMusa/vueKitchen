<template>
    <div class="CCart">
        <h1>Cart-Корзина</h1>
        <CCartItem 
            v-for="(item, index) in cart_data"
            :key="item.article"
            :cart_item_data="item"
            @deleteFromCart="deleteFromCart(index)"
        />

    </div>
</template>

<script>
import CCartItem from '@/components/cart/CCartItem.vue';
import { mapActions } from "vuex";


    export default {
        name:"CCart",
        components: {
            CCartItem,
        },
        props:{
            cart_data: {
                type:Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {}
        },
        computed: {},
        methods: {
            ...mapActions([
               'DELETE_FROM_CART' 
            ]),
            deleteFromCart(index) {
                // console.log(index);
                this.DELETE_FROM_CART(index)
            }
        }
    }
</script>

<style scoped>

</style>