<template>
  <div>
    <p>Has published books:</p>
    <span>{{ dataLength }}</span>
  </div>
</template>
<script setup>
import { reactive, computed } from "vue";

const data = reactive({
  name: "data",
  books: ["data1", "data2", "data3"],
});

//api 받은 후 computed 사용 방법
const dataLength = computed(() => {
  return data.books.length > 0 ? "Y" : "N";
});
</script>

<style></style>
