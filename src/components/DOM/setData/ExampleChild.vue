<template>
  <!-- 자식컴포넌트 -->
  <div>{{ propTitle }}</div>
</template>

<script setup>
import { ref, defineExpose, defineProps } from "vue";

const a = 1;
const b = ref(2);
const props = defineProps({
  title: {
    Type: String,
    default: "",
  },
});

const propTitle = ref(props.title);

//부모컴포넌트에 데이터 전달
defineExpose({
  a,
  b,
});
</script>

<style></style>
