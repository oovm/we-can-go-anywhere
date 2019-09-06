<script setup lang="ts">
import githubIcon from "../assets/github.svg";

defineProps<{
  url: string
}>()

</script>

<template>
  <a :href="url" target="_blank" class="github-link">
    <img :src="githubIcon" alt="GitHub" class="github-icon"/>
  </a>
</template>

<style lang="scss" scoped>

</style>