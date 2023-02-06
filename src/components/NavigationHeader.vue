<script setup lang="ts">
import SearchBox from './SearchBox.vue'
import LanguageSwitch from './LanguageSwitch.vue'
import GithubLink from "./GithubLink.vue";
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
    <h1 class="site-title">{{ $t("home-title") }}</h1>
    <div class="nav-items">
      <search-box
          :model-value="modelValue"
          @update:model-value="$emit('update:modelValue', $event)"
          class="nav-search"
      />
      <language-switch class="nav-language"/>
      <github-link :url="GITHUB_URL"/>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navigation-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 60px;

  .site-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin: 0;
    color: #333;
  }

  .nav-items {
    display: flex;
    align-items: center;
    height: 100%;
    gap: 0.75rem;

    .nav-search {
      margin-right: 0;
    }

    .nav-language {
      margin-right: 0;
    }
  }
}

@media (max-width: 768px) {
  .navigation-bar {
    height: auto;
    padding: 0.75rem;
    flex-direction: column;
    gap: 0.75rem;

    .nav-items {
      width: 100%;
      justify-content: center;
    }
  }
}
</style>