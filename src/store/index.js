import {createApp} from 'vue';
import Vuex from 'vuex';
import App from '@/App.vue'
import  products from '@/mock/products.json';

const app = createApp(App);
app.use(Vuex);

export default new Vuex.Store({
  state(){
    return {
      products: [],
      cart: []
    }

  },
  getters: {
    products: state => state.products,
    cart: state => state.cart
  },

  actions: {
    getProducts({commit}) {
      commit("getProductData");
    },
    addToCart({commit}, item) {
      commit("addItemToCart", item);
    },
    addQty({commit}, id){
      commit("addQty", id)
    },
    reduceQty({commit}, id){
      commit("reduceQty", id);
    },
    removeItem({commit}, id){
      commit("removeItem", id);
    }
  },
  mutations: {
    getProductData(state) {
      state.products = products;
    },
    addItemToCart(state, item) {
      const addedItem = state.cart.find(item => item.id === item.id);
      if(addedItem) {
        addedItem.qty++;
      } else {
        state.cart.push({...item, qty: 1});
      }
      state.cart.push({...item, qty: 1});
    },
    addQty(state, id)
    {
      const currentItem = state.cart.find((product) => product.id === id);
      currentItem.qty++;
    },
    reduceQty(state, id)
    {
      const currentItem = state.cart.find((product) => product.id === id);
      currentItem.qty--;
    },
    removeQty(state, id)
    {
      state.cart = state.cart.filter((product) => product.id !== id);
    }
  },
  modules: {
  }
})
