<template>
  <button @click.prevent="count++">{{ count }}</button>
</template>

<script setup>
import { ref, watch } from "vue";

//증가
const count = ref(0);
const add = ref(2);

//방식 1
watch(count, (newCount) => {
  console.log(`count is ${newCount}`);
});

//방식 2, deep option
// 딥 워치는 감시 객체의 모든 중첩된 속성을 순회해야 하며,
// 대규모 데이터 구조에 사용할 경우 비용이 많이 듬, 필요한 경우에만 사용
watch(
  () => add.value + count.value,
  (sum) => {
    console.log(`sum of add + count is: ${sum}`);
  },
  { deep: true }
);

//방식 3
watch([add, () => count.value], ([newAdd, newCount]) => {
  console.log(`add is ${newAdd} and count is ${newCount}`);
});
</script>

<style></style>
