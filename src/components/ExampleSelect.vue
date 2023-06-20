<template>
  <!-- setup select -->
  <div>
    <p>Selected: {{ selected }}</p>
    <select v-model="selected">
      <option
        v-for="(option, idx) in options"
        :value="option.type"
        :key="idx"
        :disabled="idx === 0 ? true : false"
      >
        {{ option.title }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selected = ref("선택");

const options = ref([
  { title: "선택", type: "선택" },
  { title: "One", type: "A" },
  { title: "Two", type: "B" },
  { title: "Three", type: "C" },
]);
</script>

<style lang="scss" scoped>
.color {
  color: skyblue;
}
.active {
  color: brown;
}
</style>
