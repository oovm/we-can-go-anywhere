<template>
  <navigation-header v-model="searchQuery"/>
  <div class="gallery">
    <div class="gallery-grid">
      <gallery-item v-for="image in filteredImages" :key="image" :image="image"/>
    </div>
  </div>
  <speed-insights/>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'
import GalleryItem from './components/GalleryItem.vue'
import NavigationHeader from './components/NavigationHeader.vue'
import {useFluent} from "fluent-vue";
import { SpeedInsights } from "@vercel/speed-insights/vue"

const {$t} = useFluent()

// 图片列表
const images = ref([
  'minecraft',
  'ghibli',
  'jojo',
  'attack-on-titan',
  'genshin-impact',
  'tomie',
  'super-mario',
  'starry-night',
  'wave-off-kanagawa'
])

// 搜索关键词
const searchQuery = ref('')

// 过滤后的图片列表
const filteredImages = computed(() => {
  const query = searchQuery.value.toLowerCase()
  return images.value.filter(image =>
      image.toLowerCase().includes(query) ||
      $t('image-' + image).toLowerCase().includes(query)
  )
})
</script>


<style lang="scss" scoped>
.gallery {
  padding: 6rem 2rem 2rem;
  min-height: 100vh;
  background-color: #f5f5f5;

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
}
</style>