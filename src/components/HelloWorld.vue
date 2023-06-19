<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<script setup>
import { ref } from "vue";

//ref(값)
const count = ref(0);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  font-weight: bold;
}
</style>
