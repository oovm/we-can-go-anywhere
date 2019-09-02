<script setup lang="ts">
defineProps<{
  modelValue: string
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <div class="search-box">
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :placeholder="$t('search-placeholder')"
    />
  </div>
</template>

<style lang="scss" scoped>
.search-box {
  margin: 0 auto 2rem;
  max-width: 600px;
  
  input {
    width: 100%;
    padding: 0.8rem 1.2rem;
    font-size: 1.1rem;
    border: 2px solid #ddd;
    border-radius: 8px;
    outline: none;
    transition: border-color 0.3s ease;
    
    &:focus {
      border-color: #4a90e2;
    }
  }
}
</style>