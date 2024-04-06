<script setup lang="ts">
import { inject } from 'vue';
const userName = inject(`userName`)
</script>
<template>
  <section>
    <p>孫コンポーネント</p>
    <p>ウェルカム{{ userName }}</p>
  </section>
</template>