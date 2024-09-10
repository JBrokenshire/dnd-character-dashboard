<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="max-width padding-x">
    <nav class="flex items-center justify-center lg:justify-between gap-2 sm:gap-8">
      <RouterLink class="w-[15%] min-w-[75px] max-w-[150px]" to="/">
        <img src="@/assets/img/website-logo.png" alt="Website Logo" class="aspect-square" />
      </RouterLink>

      <div class="text-xl font-bold">
        <RouterLink class="nav-link px-2 md:px-4" to="/">Home</RouterLink>
        <RouterLink class="nav-link px-2 md:px-4" to="/characters"> Characters</RouterLink>
        <RouterLink class="nav-link px-2 md:px-4" to="/characters/add">Create</RouterLink>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
