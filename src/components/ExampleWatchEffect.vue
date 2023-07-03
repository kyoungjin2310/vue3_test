<template>
  <!-- watchEffect - 콜백 안에서 변수가 업데이트될 경우 다시 실행 -->
  <div>
    <button @click.prevent="todoId++">get Data</button>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
import { ref, watch, watchEffect, watchPostEffect } from "vue";

const todoId = ref(1);
const data = ref(null);

//watchEffect는 콜백 안에서 변수가 업데이트될 경우 다시 실행됨, watch는 두번 사용하게됨
watchEffect(async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  ).then((res) => {
    return res.json();
  });
  data.value = await response;
});

//Vue가 업데이트한 후 watch 콜백에서 DOM에 액세스하려면 다음 flush: 'post'옵션을 지정

//방식 1
watch(data, () => {}, {
  flush: "post",
});

//방식 2
watchEffect(() => {}, {
  flush: "post",
});

//방식 3
watchPostEffect(() => {
  /* executed after Vue updates */
});
</script>

<style></style>
