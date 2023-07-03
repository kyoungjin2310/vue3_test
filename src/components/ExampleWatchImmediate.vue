<template>
  <!-- watch immediate -->
  <button @click.prevent="obj.count++">{{ obj.count }}</button>
</template>

<script setup>
import { reactive, watch } from "vue";

const obj = reactive({
  count: 0,
});

//방식 1
//immediate - 즉시 실행한 다음 data가 변경 되면 다시 실행
watch(
  obj,
  (newValue, oldValue) => {
    console.log(newValue, "newValue");
    console.log(oldValue, "oldValue");
  },
  { immediate: true }
);
</script>

<style></style>
