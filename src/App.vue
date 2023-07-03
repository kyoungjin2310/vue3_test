<template>
  <div>
    <example-watch-deep />
  </div>
</template>

<script>
import ExampleWatchDeep from "@/components/ExampleWatchDeep.vue";
import "./assets/scss/style.scss";
export default {
  name: "App",
  components: {
    ExampleWatchDeep,
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
