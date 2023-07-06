<template>
  <!-- 자식컴포넌트 -->
  <div>children</div>
</template>

<script setup>
import { ref, defineExpose } from "vue";

const a = 1;
const b = ref(2);

//부모컴포넌트에 데이터 전달
defineExpose({
  a,
  b,
});
</script>

<style></style>
