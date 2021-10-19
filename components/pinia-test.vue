<template>
  <div class="pinia-test">
    <button @click="store.counter--">-</button>
    <span>{{ store.counter }}</span>
    <button @click="store.counter++">+</button>
  </div>
</template>

<script setup>
  import { useStore } from '~/store/counter'

  const store = useStore()
</script>

<style scoped>
  .pinia-test {
    align-items: center;
    display: flex;
    gap: 1rem;
  }
</style>
