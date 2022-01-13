<template>
  <transition name="fade">
    <slot/>
  </transition>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
  }
</style>