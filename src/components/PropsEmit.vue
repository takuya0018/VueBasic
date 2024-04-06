<template>
  <section>
    <h2>Propsの処理</h2>
    <p :class="aaa.class">{{ aaa.message }}{{ aaa.name }}</p>
    <button @click="emitSubmit">送信</button>
  </section>
</template>

<script setup lang="ts">
interface Props {
  class: String;
  message: String;
  name?: String;
}

const aaa = defineProps<Props>();
const emit = defineEmits(["submit"])

const emitSubmit = function():void {
  emit("submit")
}
</script>
<style scoped>
.abc {
  color: red;
}
.active {
  color: blueviolet;
}
</style>