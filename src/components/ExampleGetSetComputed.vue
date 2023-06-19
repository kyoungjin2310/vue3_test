<template>
  <div>
    <p>full name:</p>
    <span>{{ fullName }}</span>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const firstName = ref("John");
const lastName = ref("Doe");

const fullName = computed({
  get() {
    return firstName.value + "" + lastName.value;
  },
  set(newValue) {
    [firstName.value, lastName.value] = newValue.split("");
  },
});
</script>

<style></style>
