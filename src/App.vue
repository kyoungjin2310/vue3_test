<template>
  <div>
    <example-watch />
  </div>
</template>

<script>
import ExampleWatch from "@/components/ExampleWatch.vue";
import "./assets/scss/style.scss";
export default {
  name: "App",
  components: {
    ExampleWatch,
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
