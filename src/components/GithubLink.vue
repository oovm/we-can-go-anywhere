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
.github-link {
  position: relative;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 36px;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(74, 144, 226, 0.1);
  }

  .github-icon {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>