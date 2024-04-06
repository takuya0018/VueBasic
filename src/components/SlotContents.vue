<template>
  <section>
    <h2>{{ props.name }}さんの状況</h2>
    <slot>
      <p>連絡がつきません</p>
    </slot>
  </section>
</template>

<script setup lang="ts">

interface names {
  name:String
}
const props = defineProps<names>()
</script>