<template>
  <div>
    <example-lifecycle-mounted-hooks />
  </div>
</template>

<script>
import ExampleLifecycleMountedHooks from "@/components/ExampleLifecycleMountedHooks.vue";
import "./assets/scss/style.scss";
export default {
  name: "App",
  components: {
    ExampleLifecycleMountedHooks,
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
