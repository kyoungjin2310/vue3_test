<template>
  <!-- input checkbox 여러개 -->
  <div>
    <!-- chackList - input checkbox 선택시 input value 값이 나옴 -->
    <p>{{ checkList }}</p>
    <div v-for="(obj, idx) in checkBoxArr" :key="idx">
      <input
        type="checkbox"
        :id="obj.id"
        :value="obj.type"
        v-model="checkList"
      />
      <label :for="obj.id">{{ obj.title }}</label>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const checkList = ref([]);

const checkBoxArr = ref([
  { title: "check 1", type: "1", id: "check1", checked: true },
  { title: "check 2", type: "2", id: "check2", checked: false },
  { title: "check 3", type: "3", id: "check2", checked: false },
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
