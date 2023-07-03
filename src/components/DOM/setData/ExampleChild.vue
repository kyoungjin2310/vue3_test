<template>
  <!-- 자식컴포넌트 -->
  <div>children</div>
</template>

<script setup>
import { ref, defineExpose } from "vue";

const a = 1;
const b = ref(2);

defineExpose({
  a,
  b,
});
</script>

<style></style>
