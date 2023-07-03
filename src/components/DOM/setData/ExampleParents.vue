<template>
  <!-- 부모컴포넌트 : 자식컴포넌트 value값 참조 -->
  <div>
    <example-child ref="child" />
  </div>
</template>

<script setup>
import ExampleChild from "./ExampleChild.vue";
// eslint-disable-next-line
import { ref, onMounted } from "vue";

const child = ref(null);
onMounted(() => {
  // eslint-disable-next-line
  console.log(child.value.b);
});
</script>

<style></style>
