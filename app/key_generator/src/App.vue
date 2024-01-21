<template>
  <GeneratorWidget/>
</template>

<script>
import GeneratorWidget from './components/GeneratorWidget.vue'

export default {
  name: 'App',
  components: {
    GeneratorWidget
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eeeeee;
  margin-top: 60px;
}
</style>
