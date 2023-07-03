<template>
  <!-- onUpdated 데이터 변경 후 렌더링 됐을때, DOM을 업데이트한 후 호출할 콜백 -->
  <button id="count" :class="classN && 'color'" @click.prevent="count++">
    {{ count }}
  </button>
</template>

<script setup>
import { ref, onUpdated } from "vue";

const count = ref(0);
const classN = ref(false);

onUpdated(() => {
  console.log(count.value);
  classN.value = !classN.value;
});
</script>

<style lang="scss" scoped>
#count {
  display: inline-block;
  border: 1px solid;
  width: 100px;
  height: 200px;
  font-size: 22px;
  &.color {
    background: skyblue;
  }
}
</style>
