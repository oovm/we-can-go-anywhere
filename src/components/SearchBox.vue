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
  position: relative;
  width: 250px;
  
  input {
    width: 100%;
    height: 36px;
    padding: 0 1rem;
    font-size: 0.95rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    outline: none;
    transition: all 0.3s ease;
    
    &:focus {
      border-color: #4a90e2;
      box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.1);
    }
  }
}
</style>