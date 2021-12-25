<template>
  <div class="home">
    <Cart />
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Cart from "@/components/Cart";

export default {
  name: 'Home',
  components: {
      Cart,
    HelloWorld
  },

}
</script>

