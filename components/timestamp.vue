<template>
  <div class="timestamp">
    <pre>{{ data }}</pre>
  </div>
</template>

<script lang="ts" setup>
  import { useAsyncData } from '#app'

  const { data } = await useAsyncData('count', () => {
    console.log('Fetch', process.server ? 'server side' : 'client side')
    return $fetch('/api/timestamp')
  })
</script>
