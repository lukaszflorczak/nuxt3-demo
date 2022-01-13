<template>
  <div>
    <button @click="show = !show">Toggle text</button>

    <transition-fade>
      <h1 v-if="show">Hello World!</h1>
    </transition-fade>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import TransitionFade from '../components/transition-fade.vue'

  const show = ref(false)
</script>