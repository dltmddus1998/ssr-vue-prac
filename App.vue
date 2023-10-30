<template>
  <div v-for="(d, i) in data" :key="i">
    {{ d }}
    {{ message }}
  </div>
</template>

<script setup lang="ts">
import { data } from './data/index.js';
import { ref } from 'vue';

const message = ref('This is Server Side Rendering!! ᴑ');
</script>

<style scoped lang="scss"></style>
