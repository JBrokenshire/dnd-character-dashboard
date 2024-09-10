<script setup>
import { RouterLink } from 'vue-router'
import { footerLinks } from '@/constants'
</script>

<template>
  <footer>
    <div class="links-container padding-x">
      <div class="hidden sm:flex flex-col justify-start items-start gap-6">
        <RouterLink class="w-max min-w-[75px] max-w-[150px]" to="/">
          <img src="@/assets/img/website-logo.png" alt="Website Logo" class="aspect-square" />
        </RouterLink>
      </div>

      <div class="links">
        <div
          v-for="linkGroup in footerLinks"
          :key="`footer__link-group-${linkGroup.title}`"
          class="link-group"
        >
          <h3 class="text-xl font-bold">{{ linkGroup.title }}</h3>
          <div class="flex flex-col items-start gap-2 md:gap-5">
            <div v-for="link in linkGroup.links" :key="`link-${link.name}`" class="nav-link px-0">
              <a v-if="link.url.includes('https')" :href="link.url">{{ link.name }}</a>
              <RouterLink v-else :to="link.url">{{ link.name }}</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="copyrights-container">
      <p>@2024 D&D Character Hub. All rights reserved</p>

      <div class="copyrights-links flex-center">
        <RouterLink to="/privacy-policy" class="nav-link">Privacy Policy</RouterLink>
        <RouterLink to="/terms-and-conditions" class="nav-link">Terms & Conditions</RouterLink>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  @apply flex flex-col border-t border-gray-300;
}

.links-container {
  @apply flex max-md:flex-col flex-wrap justify-between gap-5 py-10;
}

.links {
  @apply flex-1 flex md:justify-end flex-wrap gap-20;
}

.link-group {
  @apply flex flex-col gap-6 text-base w-fit;
}

.copyrights-container {
  @apply flex justify-center items-center text-center flex-wrap my-4 sm:gap-8;
}

.copyrights-links {
  @apply flex items-center justify-center gap-10;
}
</style>
