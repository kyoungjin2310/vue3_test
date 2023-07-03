<template>
  <!-- onUnmounted - 마운트 해제된 후 호출할 콜백 -->
  <div>interval</div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

let intervalId;
onMounted(() => {
  intervalId = setInterval(() => {
    console.log("interval");
  }, 1000);
});

onUnmounted(() => clearInterval(intervalId));
</script>

<style></style>
