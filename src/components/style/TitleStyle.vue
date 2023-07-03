<template>
  <h2 class="title">{{ title }}</h2>
</template>

<script setup>
import { defineProps } from "vue";
defineProps(["title"]);
</script>

<style lang="scss" scoped>
.title {
  font-size: 32px;
}
</style>
