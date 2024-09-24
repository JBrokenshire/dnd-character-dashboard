<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { errorCodes } from '@/constants'
import Error from '@/components/errors/Error.vue'

const route = useRoute()

let error = errorCodes[route.params.code]

if (!error) {
  error = errorCodes['default']
}
</script>

<template>
  <section class="text-center flex flex-col justify-center items-center h-96">
    <i class="pi pi-exclamation-triangle text-primary text-7xl mb-5"> </i>
    <Error :title="error.title" :message="error.message" />
    <RouterLink to="/" class="pill-btn"> Go Back </RouterLink>
  </section>
</template>
