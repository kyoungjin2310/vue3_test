<template>
  <div>
    <p :class="classObject">{{ text }}</p>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const text = ref("test");
const classObject = reactive({
  active: true,
  color: false,
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
