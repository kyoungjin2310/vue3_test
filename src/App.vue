<template>
  <div>
    <example-watch-effect />
  </div>
</template>

<script>
import ExampleWatchEffect from "@/components/ExampleWatchEffect.vue";
import "./assets/scss/style.scss";
export default {
  name: "App",
  components: {
    ExampleWatchEffect,
  },
};
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
