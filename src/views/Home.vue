<template>
  <div class="home">
    <Cart/>
    <HelloWorld/>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import HelloWorld from '@/components/HelloWorld.vue'
import Cart from "@/components/Cart";

export default {
  name: 'Home',
    // data() {
    //   return {
    //       products,
    //   }
    // },
  components: {
      Cart,
    HelloWorld
  },
    computed: {
      ...mapGetters(["products"]),
    },
    methods: {
      ...mapActions((["getProducts"]))
    },
  mounted() {
      this.getProducts();
  }
}
</script>

