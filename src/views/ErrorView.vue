<script setup>
import { useRoute } from 'vue-router'
import Error from '@/components/Error.vue'

const route = useRoute()

let title
let message

switch (route.params.code) {
  case undefined:
  case '404':
    title = '404 Page Not Found'
    message = 'The page you were looking for does not exist.'
    break
  case '500':
    title = '500 Internal Server Error'
    message = 'Oops! Something went wrong on our end, please try again later.'
    break
  default:
    title = 'Something went wrong'
    message = "We aren't sure what happened there, please try again later."
}
</script>

<template>
  <section class="text-center flex flex-col justify-center items-center h-96">
    <i class="pi pi-exclamation-triangle text-primary text-7xl mb-5"> </i>
    <Error :title="title" :message="message" />
    <RouterLink to="/" class="pill-btn"> Go Back </RouterLink>
  </section>
</template>
