<template>
  <div>
    <example-v-for-reactive />
  </div>
</template>

<script>
import ExampleVForReactive from "@/components/ExampleVForReactive.vue";
export default {
  name: "App",
  components: {
    ExampleVForReactive,
  },
};
reactive;
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
