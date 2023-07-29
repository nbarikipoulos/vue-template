<template lang="pug">
v-card
  v-img(
    class="align-end"
    :src="src"
    aspect-ratio="1"
    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
  )
    v-card-title(class="text-white") {{ label }}
</template>

<script setup>
defineProps({
  src: {
    type: String,
    default: _ => new URL('@/assets/empty.svg', import.meta.url).toString()
  },
  label: { type: String, default: '---' }
})
</script>
