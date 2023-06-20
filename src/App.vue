<template>
  <div>
    <example-array-rendering />
  </div>
</template>

<script>
import ExampleArrayRendering from "@/components/ExampleArrayRendering.vue";
import "./assets/scss/style.scss";
export default {
  name: "App",
  components: {
    ExampleArrayRendering,
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
