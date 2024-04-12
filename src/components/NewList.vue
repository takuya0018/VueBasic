<template>
  <ul class="tabs">
    <li v-for="something in somethingList" :key="something.id" @click="change(something.id,something.text)" :class="{ 'isActive': isActive === something.id}">
      タブ{{ something.number }}
    </li>
  </ul>

  <!-- 親から子へ -->
  <ul class="contents">
    <li v-if="isActive === '1'">{{ defoText }}</li>
    <li v-else>{{ isText }}</li>
  </ul>

</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';
const isActive = ref("1");
const isText = ref();

const change = function(num:string,txt:string):void {
  isActive.value = num;
  isText.value = txt;
}

defineProps({
  somethingList: Array,
  defoText: String
})
</script>

<style scoped>
.tabs {
  display: flex;
  gap: 50px;
}
li {
  list-style-type: none;
  padding: 10px 50px;
  background-color: aquamarine;
}
li:hover {
  cursor: pointer;
}

</style>