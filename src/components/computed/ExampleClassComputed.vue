<template>
  <!-- class에 computed 적용 방법 -->
  <div>
    <p :class="classObject">{{ text }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const text = ref("text");
const isActive = ref(true);
const error = ref(null);

const classObject = computed(() => ({
  active: isActive.value && !error.value,
  color: error.value && error.value.type === "aaa",
}));
</script>

<style lang="scss" scoped>
.color {
  color: skyblue;
}
.active {
  color: brown;
}
</style>
