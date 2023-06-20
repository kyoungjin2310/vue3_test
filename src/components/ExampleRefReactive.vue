<template>
  <!-- reactive 사용방법 - 객체 -->
  <div>
    <button @click="state.count++">Count is: {{ state.count }}</button>
    <p>{{ state.testNum * state.count }}</p>
  </div>
</template>

<script setup>
//reactive - 객체만 받고, 깊은(deep) 감지
import { reactive } from "vue";

let state = reactive({ count: 0, testNum: 20 });
state.count = 0;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  font-weight: bold;
}
</style>
