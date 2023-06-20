<template>
  <!-- input rodio 여러개 -->
  <div>
    <!-- rodioList - input rodio 선택시 input value 값이 나옴 -->
    <p>{{ rodioList }}</p>
    <div v-for="(obj, idx) in rodioBoxArr" :key="idx">
      <input
        type="radio"
        :id="obj.id"
        :value="obj.type"
        v-model="rodioList"
        :checked="obj.checked"
      />
      <label :for="obj.id">{{ obj.title }}</label>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const rodioList = ref([]);

const rodioBoxArr = ref([
  { title: "rodio 1", type: "1", id: "rodio1", checked: true },
  { title: "rodio 2", type: "2", id: "rodio2", checked: false },
  { title: "rodio 3", type: "3", id: "rodio3", checked: false },
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
