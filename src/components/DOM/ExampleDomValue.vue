<template>
  <!-- DOM focus -->
  <input ref="input" />
  <!-- DOM ref참조 이름 문자열 대신 함수를 전달할 수 있도록 동적 바인딩을 사용-->
  <!-- <input
    :ref="
      (el) => {
        el.focus();
        console.log(el.value);
      }
    "
    value="test"
  /> -->
</template>

<script setup>
import { ref, onMounted } from "vue";

const input = ref(null);

onMounted(() => {
  input.value.focus();
});
</script>

<style></style>
