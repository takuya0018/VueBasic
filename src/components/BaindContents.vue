<script setup lang="ts">
import { ref } from "vue";

const message = ref("https://www.yahoo.co.jp/")
const title = ref("")

function aaa(){
  console.log("aaa");
}
</script>

<template>
  <a :href="message">{{ message }}</a>
  <p @click="aaa">クリック</p>
  <input type="text" v-model="title" :name="title" id="">
  <p>{{ title }}</p>
</template>

<style scoped>

</style>
