<script setup lang="ts">
import { ref } from 'vue'

// 图片列表
const images = ref([
  'minecraft',
  'jojo',
  'attack-on-titan',
  '吉利普'
])
</script>

<template>
  <div class="gallery">
    <div class="gallery-grid">
      <div v-for="image in images" :key="image" class="gallery-item">
        <img :src=`/${image}.png` :alt="$t(`image-${image}`)" />
        <div class="image-title">{{ $t(`image-${image}`) }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gallery {
  padding: 2rem;
  min-height: 100vh;
  background-color: #f5f5f5;

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .gallery-item {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
    }

    .image-title {
      padding: 1rem;
      font-size: 1.1rem;
      text-align: center;
      color: #333;
    }
  }
}
</style>