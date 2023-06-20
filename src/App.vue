<template>
  <div>
    <example-class-computed />
    <example-ref-reactive />
    <example-reactive-computed />
    <example-get-set-computed />
  </div>
</template>

<script>
import ExampleRefReactive from "@/components/ExampleRefReactive.vue";
import ExampleReactiveComputed from "@/components/ExampleReactiveComputed.vue";
import ExampleGetSetComputed from "@/components/ExampleGetSetComputed.vue";
import ExampleClassComputed from "@/components/ExampleClassComputed.vue";
export default {
  name: "App",
  components: {
    ExampleClassComputed,
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
