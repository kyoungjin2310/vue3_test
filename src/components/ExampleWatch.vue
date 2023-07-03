<template>
  <!-- watch fetch -->
  <div>
    <p>
      <input v-model="testQ" />
    </p>
    <p>{{ answer }}</p>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const testQ = ref("");
const answer = ref("Questions usually contain a question mark. ;-)");

// eslint-disable-next-line
watch(testQ, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf("?") > -1) {
    answer.value = "Thinking...";
    try {
      const res = await fetch("https://yesno.wtf/api").then((res) => {
        console.log(res);
        return res.json();
      });
      answer.value = await res.answer;
      console.log(answer.value);
    } catch (error) {
      answer.value = "Error! Could not reach the API. " + error;
    }
  }
});
</script>

<style></style>
