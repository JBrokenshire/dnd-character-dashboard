<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="max-width px-4">
    <nav class="flex gap-2 sm:gap-8 items-center justify-center lg:justify-between">
      <RouterLink class="w-[15%] min-w-[75px] max-w-[150px]" to="/">
        <img src="@/assets/img/website-logo.png" alt="Website Logo" class="aspect-square" />
      </RouterLink>

      <div class="sm:gap-2 lg:gap-8 text-xl font-bold">
        <RouterLink class="nav-link" to="/">Home</RouterLink>
        <RouterLink class="nav-link" to="/characters"> Characters</RouterLink>
        <RouterLink class="nav-link" to="/characters/add">Create</RouterLink>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
