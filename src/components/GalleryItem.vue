<template>
  <div class="gallery-item">
    <picture>
      <!--      <source :srcset="'/' + image + '.webp'" type="image/webp">-->
      <img :src="'/' + image + '.png'" :alt="$t('image-' + image)"/>
    </picture>
    <div class="image-title">{{ $t('image-' + image) }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string
}>()
</script>

<style lang="scss" scoped>
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
</style>