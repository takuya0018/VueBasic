<template>
  <section>
    <div class="tab__wrap">
      <!-- 回す必要がある -->
      <ul class="tabs">
        <li v-for="(tabs, index) in isTablist" :key="index" @click="change(tabs.id)" :class="{'active': isActive === tabs.id}">タブ{{ tabs.number }}</li>
      </ul>

      <!-- 回す必要はない -->
      <ul class="contents">
        <li v-if="isActive === '1'">{{ aaa.text }}</li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
// タブの初期設定
const isActive = ref("1");
// タブがクリックされた物の紐付け
const change = function(num:string):void {
  isActive.value = num;

}

interface tabContent {
  number: number,
  id: string,
  text: String,
}
const tabList:tabContent[] = [
  {number: 1, id: "1", text: "このコンテンツは１です"},
  {number: 2, id: "2", text: "このコンテンツは２です"},
]

const isTablist = ref(tabList);

interface Props {
  value: String,
  text: String,
}

const aaa = defineProps<Props>();
</script>