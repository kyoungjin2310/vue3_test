<template>
  <!-- 부모컴포넌트 : 자식컴포넌트 value값 참조 -->
  <div>
    <example-child
      ref="child"
      :title="text"
      @btn-event="checkEmit"
      @btnEmitEvent="test"
    />
    <p>{{ childval }}</p>
  </div>
</template>

<script setup>
import ExampleChild from "./ExampleChild.vue";
// eslint-disable-next-line
import { ref, onMounted, computed } from "vue";

const child = ref(null);
const childval = computed(() => child?.value?.b + child?.value?.a);
const text = ref("test t");

const checkEmit = () => {
  console.log("emit 발생");
};

const test = (email, password) => {
  console.log("emit test", email, password);
};

onMounted(() => {
  // eslint-disable-next-line
  console.log(child.value.b);
  console.log(child.value.a);
});
</script>

<style></style>
