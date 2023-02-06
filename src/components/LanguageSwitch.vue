<template>
  <div class="language-toggle" @click.stop="isOpen = !isOpen" v-click-outside="closeDropdown">
    <button class="language-button">
      <img :src="languageIcon" alt="Language" class="language-icon"/>
      <span>{{ getCurrentLanguageName() }}</span>
    </button>
    <div class="language-dropdown" :class="{ 'is-open': isOpen }">
      <div
        v-for="lang in languages"
        :key="lang.code"
        class="language-option"
        :class="{ 'is-active': currentLocale === lang.code }"
        @click="selectLanguage(lang.code)"
      >
        {{ lang.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {currentLocale, setLanguage} from '../locales'
import languageIcon from '../assets/language.svg'
import {ref, watchEffect} from 'vue'

const isOpen = ref(false)

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

const getCurrentLanguageName = () => {
  const lang = languages.find(l => l.code === currentLocale.value)
  return lang ? lang.name : 'English'
}

const selectLanguage = (code: string) => {
  currentLocale.value = code
  setLanguage(code)
  isOpen.value = false
}

const closeDropdown = () => {
  isOpen.value = false
}

watchEffect(() => {
  setLanguage(currentLocale.value)
})

// Click outside directive
const vClickOutside = {
  mounted(el: any, binding: any) {
    el.clickOutsideEvent = (event: Event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value()
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el: any) {
    document.removeEventListener('click', el.clickOutsideEvent)
  },
}
</script>


<style lang="scss" scoped>
.language-toggle {
  position: relative;
  display: flex;
  align-items: center;
  height: 36px;

  .language-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    height: 100%;
    padding: 0 0.75rem;
    font-size: 0.95rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: white;
    cursor: pointer;
    outline: none;
    transition: all 0.3s ease;

    &:hover {
      border-color: #4a90e2;
    }

    .language-icon {
      width: 16px;
      height: 16px;
    }
  }

  .language-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: 0.25rem;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.2s ease;

    &.is-open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .language-option {
      padding: 0.5rem 0.75rem;
      cursor: pointer;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: rgba(74, 144, 226, 0.1);
      }

      &.is-active {
        background-color: rgba(74, 144, 226, 0.1);
        color: #4a90e2;
      }
    }
  }
}
</style>