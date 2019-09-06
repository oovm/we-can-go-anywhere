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

</style>