import Vue from "vue";
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

let store = new Vuex.Store( {
    state: {
        kitchens: [],
        cart: []
    },
    mutations: {
        SET_KITCHENS_TO_STATE: (state, kitchen) => {
            state.kitchens = kitchen;
        },
        SET_CART: (state, kitchen) => {
            if (state.cart.length) {
                let isProductExists = false;
                state.cart.map(function (item) {
                    if (item.article === kitchen.article) {
                        isProductExists = true;
                        item.quantity++
                    }
                })
                if (!isProductExists) {
                    state.cart.push(kitchen) ;
                }
            } else {
              state.cart.push(kitchen) ;  
            }
        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1) ;
        },
    },
    actions: {
        GET_KITCHENS_FROM_API({commit}) {
            return axios('http://localhost:3000/kitchens', {
                method: "GET"
            })
                .then((kitchens) => {
                    commit('SET_KITCHENS_TO_STATE', kitchens.data);
                    return kitchens;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
                ;
        },
        ADD_TO_CART({commit}, kitchens) {
            commit('SET_CART', kitchens);
        },
        DELETE_FROM_CART({commit}, index) {
            commit('REMOVE_FROM_CART', index);
        },
    },
    getters: {
        KITCHENS(state) {
            return state.kitchens;
        },
        CART(state) {
            return state.cart;
        },
    }
}) ;

export default store;
