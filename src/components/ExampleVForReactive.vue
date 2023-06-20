<template>
  <div>
    <ul>
      <li v-for="(val, key, idx) in obj" :key="idx">
        val:{{ val }} key:{{ key }} idx:{{ idx }}
      </li>
    </ul>
    <ul>
      <li v-for="(n, idx) in 100" :key="idx">val:{{ n }} idx:{{ idx }}</li>
    </ul>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const obj = reactive({
  title: "title",
  name: "name",
  text: "text",
});
</script>

<style lang="scss" scoped>
.color {
  color: skyblue;
}
.active {
  color: brown;
}
</style>
