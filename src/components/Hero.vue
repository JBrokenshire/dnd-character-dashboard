<script setup></script>

<template>
  <div class="hero">
    <div class="flex-1 pt-36 padding-x">
      <h1 class="hero__title">Create, View & Edit your next adventurer!</h1>
      <p class="hero__subtitle">
        A horde of goblins, a family of trolls or a mighty red dragon — Your party is ready for
        anything
      </p>

      <RouterLink to="/characters">
        <div class="pill-btn mt-8">View All Character</div>
      </RouterLink>
    </div>

    <div class="hero__image-container">
      <div class="hero__image">
        <img src="@/assets/img/wizard.png" alt="Wizard Hero" class="object-contain" />
      </div>
      <div class="hero__image-overlay" />
    </div>
  </div>
</template>

<style scoped></style>
