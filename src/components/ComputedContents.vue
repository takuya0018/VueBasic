<template>
  <div>
    <h2>computed処理</h2>
    <input type="text" v-model="message" name="" id="">
    <p>{{ message }}</p>
    <button @click="changeTxt">送信</button>
    <p>{{ changeTxt02 }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const message = ref();

const changeTxt = function():void{
  console.log(message.value);
}

const changeTxt02 = computed(function():void {
  return console.log(message.value + "10000");
})

</script>