<script setup>
import { RouterView } from 'vue-router'
import useScalePage from './hooks/useScalePage'

useScalePage()
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>
