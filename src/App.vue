<script setup lang="ts">
import { ref, provide } from "vue";
import BaindContents from './components/BaindContents.vue';
import VforContents from './components/VforContents.vue';
import MethodsContents from './components/MethodsContents.vue';
import ComputedContents from './components/ComputedContents.vue';
import PropsEmit from './components/PropsEmit.vue';
import AccodionContents from "./components/AccodionContents.vue";
// Provide inject
import ProvideInject from './components/ProvideInject.vue'
// Slot
import SlotContents from "./components/SlotContents.vue";
// parallax
import ParaCss from "./components/ParaCss.vue";
// tab
import SwichTab from "./components/SwitchingTab.vue";
import NewList from "./components/NewList.vue";


// Emit
const content = ref<String|number>('')

const print = function():void {
  console.log("emit")
  content.value = "emit"
}
// provide
provide(/* key */ 'userName', /* value */ 'hellow');


// tab
const tab = [
  {number: 1, id: "1", text: "このコンテンツは１です"},
  {number: 2, id: "2", text: "このコンテンツは２です"},
  {number: 3, id: "3", text: "このコンテンツは３です"},
  {number: 4, id: "4", text: "このコンテンツは４です"},
  {number: 5, id: "5", text: "このコンテンツは５です"},
  {number: 6, id: "6", text: "このコンテンツは５です"},
]
</script>

<template>
  <main>
    <BaindContents />
    <VforContents />
    <MethodsContents />
    <ComputedContents />
    <PropsEmit message="Propsの引数として渡している" class="active" v-on:submit="print" />
    <p>親から子、子から親へのでーたは{{ content }}</p>
    <ProvideInject />
    <SlotContents name="山田" />
    <SlotContents name="高山">
      <p>問題だらけ</p>
    </SlotContents>
    <ParaCss />
    <AccodionContents question="こんにちは" answer="こんばんわ" />
    <!-- <SwichTab value="1" text="こんにちは" :aaa="aaa" /> -->
    <NewList :somethingList="tab"></NewList>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}
.ccc {
  color: aqua;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
