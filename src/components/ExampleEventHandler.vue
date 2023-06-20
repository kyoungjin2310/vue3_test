<template>
  <!-- methods hanlder -->
  <button @click.prevent="test">test</button>
</template>

<script setup>
import { ref } from "vue";

const testTxt = ref("test 입니다.");

//function에 event 가져오는 방법
function test(event) {
  alert(`${testTxt.value}`);
  if (event) {
    alert(event.target.tagName);
  }
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
