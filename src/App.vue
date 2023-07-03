<template>
  <div>
    <title-style title="Vue3 test" />
    <example-parents />
  </div>
</template>

<script>
import ExampleParents from "@/components/DOM/setData/ExampleParents.vue";
import TitleStyle from "@/components/style/TitleStyle.vue";
import "./assets/scss/style.scss";
export default {
  name: "App",
  components: {
    ExampleParents,
    TitleStyle,
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
