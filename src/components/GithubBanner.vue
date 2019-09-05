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
  margin-left: 1rem;
  padding: 6px;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .github-icon {
    width: 28px;
    height: 28px;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>