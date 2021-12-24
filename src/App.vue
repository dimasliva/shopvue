<template>
  <div id="nav" class="app">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>

</template>

<script>

export default {
name: 'App',
}
</script>

<style>

</style>
