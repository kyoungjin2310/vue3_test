<template>
  <div>
    <example-ref-reactive />
    <example-reactive-computed />
    <example-get-set-computed />
  </div>
</template>

<script>
import ExampleRefReactive from "@/components/ExampleRefReactive.vue";
import ExampleReactiveComputed from "@/components/ExampleReactiveComputed.vue";
import ExampleGetSetComputed from "@/components/ExampleGetSetComputed.vue";
export default {
  name: "App",
  components: {
    ExampleRefReactive,
    ExampleReactiveComputed,
    ExampleGetSetComputed,
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
