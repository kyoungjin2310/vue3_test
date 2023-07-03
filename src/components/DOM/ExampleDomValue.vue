<template>
  <!-- DOM focus -->
  <input ref="input" />
</template>

<script setup>
import { ref, onMounted } from "vue";

const input = ref(null);

onMounted(() => {
  input.value.focus();
});
</script>

<style></style>
