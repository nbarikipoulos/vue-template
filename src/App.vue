<template lang="pug">
v-app
  v-main
    v-container
      v-row
        v-col(
          v-for="(logo,i) in logos"
          :key="i"
          cols="6"
          lg="3"
        )
          my-item(v-bind="logo")
</template>

<script setup>
import { vue, vuetify, pug, standard } from '@/utils/images'

const logos = [
  [vue, 'vue 3'],
  [vuetify, 'vuetify'],
  [pug, 'pug'],
  [standard, 'standard JS']
].map(([src, label]) => ({ src, label }))
</script>
