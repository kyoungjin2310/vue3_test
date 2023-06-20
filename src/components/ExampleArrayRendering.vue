<template>
  <!-- v-for로 숫자배열 만들기 -->
  <ul>
    <li v-for="(numbers, idx) in even(sets)" :key="idx">
      {{ numbers }}
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

const sets = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function even(num) {
  return num.filter((num) => num % 2 === 0);
}
</script>

<style lang="scss" scoped>
.color {
  color: skyblue;
}
.active {
  color: brown;
}
</style>
