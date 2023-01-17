import Vue from "vue";
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

let store = new Vuex.Store( {
    state: {
        kitchens: []
    },
    mutations: {
        SET_KITCHENS_TO_STATE: (state, kitchens) => {
            state.kitchens = kitchens;
        }
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
        }
    },
    getters: {
        KITCHENS(state) {
            return state.kitchens;
        }
    }
}) ;

export default store;
