<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    //ref(값)
    const count = ref(0);

    function increment() {
      count.value++;
    }
    return {
      count,
      increment,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  font-weight: bold;
}
</style>
