<template>
  <!-- 자식컴포넌트 -->
  <div>
    <div @click="btnEvent">{{ propTitle }}</div>
    <button @click="btnEmitEvent('aaa', 'bbb')">emit test</button>
  </div>
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
const emit = defineEmits({
  btnEvent: null,
  btnEmitEvent: ({ email, password }) => {
    if (email && password) {
      return true;
    } else {
      console.warn("Invalid submit event payload!");
      return false;
    }
  },
});

const btnEvent = () => {
  emit("btn-event");
};

const btnEmitEvent = (email, password) => {
  emit("btnEmitEvent", email, password);
};

//부모컴포넌트에 데이터 전달
defineExpose({
  a,
  b,
});
</script>

<style></style>
