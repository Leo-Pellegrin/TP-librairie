<script>
import LibrarieView from './components/LibrairieView.vue';
export default {
  name: 'App',
  components: {
    LibrarieView,
  },
}
</script>

<template>
  <LibrarieView/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #FAF8F1;
}
</style>
