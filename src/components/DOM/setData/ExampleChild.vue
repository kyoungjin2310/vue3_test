<template>
  <!-- 자식컴포넌트 -->
  <div @click="btnEvent">{{ propTitle }}</div>
</template>

<script setup>
import { ref, defineExpose, defineProps, defineEmits } from "vue";

const a = 1;
const b = ref(2);
const props = defineProps({
  title: {
    Type: String,
    default: "",
  },
});

const propTitle = ref(props.title);
const emit = defineEmits(["btn-event"]);

const btnEvent = () => {
  emit("btn-event");
};

//부모컴포넌트에 데이터 전달
defineExpose({
  a,
  b,
});
</script>

<style></style>
