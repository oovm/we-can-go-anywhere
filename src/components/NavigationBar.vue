<script setup lang="ts">
import SearchBox from './SearchBox.vue'
import LanguageToggle from './LanguageToggle.vue'
import GithubBanner from "./GithubBanner.vue";
import {useFluent} from "fluent-vue";

defineProps<{
  modelValue: string
}>()
const GITHUB_URL = 'https://github.com/oovm/we-can-go-anywhere'
const {$t} = useFluent()
defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <nav class="navigation-bar">
    <div class="nav-content">
      <h1 class="site-title">{{ $t("home-title") }}</h1>
      <div class="nav-items">
        <SearchBox
            :model-value="modelValue"
            @update:model-value="$emit('update:modelValue', $event)"
            class="nav-search"
        />
        <LanguageToggle class="nav-language"/>
        <github-banner :url="GITHUB_URL"/>
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
  padding: 0.5rem;

  .nav-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .site-title {
      font-size: 1.25rem;
      margin: 0;
      color: #151513;
    }

    .nav-items {
      display: flex;
      align-items: center;
      gap: 0.5rem;

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

      /* GitHub link styles are now handled in GithubBanner component */
    }
  }
}
</style>