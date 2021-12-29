<template>
  <div class="home">
    <Cart />
    <Products/>
  </div>
</template>

<script>
import Products from '@/components/Products.vue'
import Cart from "@/components/Cart";

export default {
  name: 'Home',
  components: {
      Cart,
    Products,
  },

}
</script>

