<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    handle: function () {
      this.$http.post(this.$api.Index.index, {
        q: "",
        limit: 200,
        facetsDistribution: ["category", "year"],
        attributesToHighlight: ["*"]
      }, true).then((result) => {
        console.log(result)
      })
    }
  },
  mounted() {
    this.handle()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
