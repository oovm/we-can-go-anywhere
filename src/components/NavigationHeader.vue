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

</style>