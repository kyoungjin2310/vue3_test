<template>
  <div>
    <button @click="state.count++">Count is: {{ state.count }}</button>
    <p>{{ state.testNum * state.count }}</p>
  </div>
</template>

<script setup>
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
