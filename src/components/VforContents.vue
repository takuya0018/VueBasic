<template>
  <ul>
    <li v-for="(item, index) in listItems" :key="index">{{ item.name }}・{{ index }}</li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface aaa {
  name:string,
  age:number,
}
const list:aaa[] = [
  {name:"太郎",age:20},
  {name:"健太",age:30},
  {name:"琢也",age:30}
]
const listItems = ref(list);
</script>

<style scoped lang="scss"></style>