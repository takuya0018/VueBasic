<template>
  <section>
    <dl>
      <dt :class="open" @click="toggle">Q.{{ question }}</dt>
      <dt v-show="open">A.{{answer}}</dt>
    </dl>
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";

const open = ref(false);

interface Props {
  question:String,
  answer:String,
}

defineProps<Props>()

const toggle = function(){
  open.value = !open.value
}
</script>
<style scoped>

</style>