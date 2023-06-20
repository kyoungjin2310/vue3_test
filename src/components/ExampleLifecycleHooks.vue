<template>
  <!-- onMounted - 컴포넌트가 마운트된 후 호출, 콜백 -->
  <div ref="el"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const el = ref();

onMounted(() => {
  console.log(el.value);
});
</script>

<style lang="scss" scoped></style>
