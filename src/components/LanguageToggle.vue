<script setup lang="ts">
import { currentLocale, toggleLanguage } from '../locales'
import languageIcon from '../assets/language.svg'
</script>

<template>
  <button class="language-toggle" @click="toggleLanguage" :title="currentLocale === 'en-us' ? '切换到中文' : 'Switch to English'">
    <img :src="languageIcon" alt="Language" class="language-icon" />
  </button>
</template>

<style lang="scss" scoped>
.language-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: none;
  background: none;
  cursor: pointer;
  transition: all 0.3s ease;

  .language-icon {
    width: 24px;
    height: 24px;
    transition: opacity 0.3s ease;
  }

  &:hover .language-icon {
    opacity: 0.7;
  }
}
</style>