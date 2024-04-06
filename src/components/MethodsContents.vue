<template>
  <div>
    <h2>methodsの処理</h2>
    <input type="text" v-model="message" name="" id="">
    <p>{{ message }}</p>
    <button @click="changeTxt">送信</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const message = ref();

const changeTxt = function():void {
  console.log(message.value);
}

</script>