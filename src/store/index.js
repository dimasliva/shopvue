import {createApp} from 'vue';
import Vuex from 'vuex';
import App from '@/App.vue'
import products from '@/mock/products.json';


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
    products: (state) => state.products,
    cart: (state) => state.cart
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
    addQtyProduct({commit}, id){
      commit("addQtyProduct", id)
    },
    reduceQty({commit}, id){
      commit("reduceQty", id);
    },
    removeItem({commit}, id){
      commit("removeItem", id);
    },
    removeItemProduct({commit}, id){
      commit("removeItemProduct", id);
    },
    reduceItemProduct({commit}, id){
      commit("reduceItemProduct", id);
    },
    totalPrice({commit}){
      commit("totalPrice");
    },
    emptyCart({commit}){
      commit("emptyCart");
    },
    emptyProducts({commit}){
      commit("emptyProducts");
    }
  },
  mutations: {
    getProductData(state) {
      state.products = products;
    },
    addItemToCart(state, item) {
      const addedItem = state.cart.find((product) => product.id === item.id);
      if(addedItem) {
        addedItem.qty++;
      } else {
        state.cart.push({...item, qty: 1});
      }
    },
    addQtyProduct(state, id)
    {
      const currentItem = state.products.find((product) => product.id === id);
      currentItem.qty++;
      currentItem.total = currentItem.total + currentItem.price;
    },
    removeItemProduct(state, id)
    {
      const i = state.products.map(item => item.id).indexOf(id);
      state.products.splice(i, 1);
      },
    reduceItemProduct(state, id)
    {
      const currentItem = state.products.find((product) => product.id === id);
      if(currentItem.qty > 0) {
        currentItem.qty--;
        currentItem.total = currentItem.total - currentItem.price;
      } else {
        const i = state.products.map(item => item.id).indexOf(id);
        state.products.splice(i, 1);
      }
    },
    emptyProducts(state)
    {
      state.products.splice(0);
    },
    // Actions of Cart
    addQty(state, id)
    {
      const currentItem = state.cart.find((product) => product.id === id);
      currentItem.qty++;
    },
    reduceQty(state, id)
    {
      const currentItem = state.cart.find((product) => product.id === id);
      if(currentItem.qty > 1) {
        currentItem.qty--;
      } else {
        state.cart = state.cart.filter((product) => product.id !== id);
      }
    },
    removeItem(state, id)
    {
      state.cart = state.cart.filter((product) => product.id !== id);
    },
    emptyCart(state)
    {
      state.cart = [];
    },
  },
  modules: {
  }
})
