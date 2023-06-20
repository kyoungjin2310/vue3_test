<template>
  <div>
    <example-event-handler />
  </div>
</template>

<script>
import ExampleEventHandler from "@/components/ExampleEventHandler.vue";
import "./assets/scss/style.scss";
export default {
  name: "App",
  components: {
    ExampleEventHandler,
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
