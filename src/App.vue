<template>
  <div>
    <example-lifecycle-hooks />
  </div>
</template>

<script>
import ExampleLifecycleHooks from "@/components/ExampleLifecycleHooks.vue";
import "./assets/scss/style.scss";
export default {
  name: "App",
  components: {
    ExampleLifecycleHooks,
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
