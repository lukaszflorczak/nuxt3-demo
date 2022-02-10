<template>
  <div>
    <p>Run the <code>/</code> page. Next change <code>layout</code> value in <code>index.vue</code> to <code>false</code></p>

    <timestamp/>
  </div>
</template>

<script lang="ts" setup>
  import { definePageMeta } from '#imports'

  import Timestamp from '~/components/timestamp.vue'

  definePageMeta({
    layout: 'default' // Change it to `false`
  })
</script>
