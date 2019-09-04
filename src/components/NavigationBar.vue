<script setup lang="ts">
import SearchBox from './SearchBox.vue'
import LanguageToggle from './LanguageToggle.vue'
import githubIcon from '../assets/github.svg'

defineProps<{
  modelValue: string
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <nav class="navigation-bar">
    <div class="nav-content">
      <h1 class="site-title">We Can Go Anywhere</h1>
      <div class="nav-items">
        <SearchBox
          :model-value="modelValue"
          @update:model-value="$emit('update:modelValue', $event)"
          class="nav-search"
        />
        <LanguageToggle class="nav-language" />
        <a href="https://github.com/your-username/we-can-go-anywhere" target="_blank" class="github-link">
          <img :src="githubIcon" alt="GitHub" class="github-icon" />
        </a>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navigation-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 1rem;

  .nav-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .site-title {
      font-size: 1.5rem;
      margin: 0;
      color: #151513;
    }

    .nav-items {
      display: flex;
      align-items: center;
      gap: 1rem;

      .nav-search {
        :deep(.search-box) {
          margin: 0;
          width: 300px;
        }
      }

      .nav-language {
        :deep(.language-toggle) {
          position: static;
          margin-left: 1rem;
        }
      }

      .github-link {
        display: flex;
        align-items: center;
        margin-left: 1rem;

        .github-icon {
          width: 24px;
          height: 24px;
          transition: opacity 0.3s ease;

          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
  }
}
</style>