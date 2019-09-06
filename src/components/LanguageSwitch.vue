<template>
  <div class="language-toggle">
    <select v-model="currentLocale" @change="setLanguage(currentLocale)">
      <option v-for="lang in languages" :key="lang.code" :value="lang.code">
        {{ lang.name }}
      </option>
    </select>
    <img :src="languageIcon" alt="Language" class="language-icon"/>
  </div>
</template>

<script setup lang="ts">
import {currentLocale, setLanguage} from '../locales'
import languageIcon from '../assets/language.svg'
import {watchEffect} from 'vue'

const languages = [
  {
    code: 'en-us',
    name: 'English'
  },
  {
    code: 'zh-hans',
    name: '简体中文'
  },
  {
    code: 'zh-hant',
    name: '繁體中文'
  }
]

watchEffect(() => {
  setLanguage(currentLocale.value)
})
</script>


<style lang="scss" scoped>

</style>