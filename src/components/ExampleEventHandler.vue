<template>
  <!-- methods hanlder -->
  <div>
    <button @click.prevent="test">test</button>
    <button @click="testEvent('event test', $event)">event</button>
    <button @click="testEvent('event test', $event)">event</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const testTxt = ref("test 입니다.");

//function에 event 가져오는 방법
function test(event) {
  alert(`${testTxt.value}`);
  if (event) {
    alert(event.target.tagName);
  }
}

//이벤트 재활용
function testEvent(message, event) {
  //event가 있을 경우
  if (event) {
    event.preventDefault();
  }
  alert(message);
}
</script>

<style lang="scss" scoped>
.color {
  color: skyblue;
}
.active {
  color: brown;
}
</style>
