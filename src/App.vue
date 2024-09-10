<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template class="overflow-x-hidden">
  <Header />
  <RouterView />
  <Footer />
</template>

<style scoped></style>
