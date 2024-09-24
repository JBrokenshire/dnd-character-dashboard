<script lang="ts" setup>
import { RouterView } from 'vue-router'
import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer.vue'
</script>

<template>
  <Header />
  <div class="overflow-x-hidden">
    <RouterView />
  </div>
  <Footer />
</template>

<style scoped></style>
