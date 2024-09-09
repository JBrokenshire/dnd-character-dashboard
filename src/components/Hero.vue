<script setup></script>

<template>
  <div class="hero max-width">
    <div class="flex-1 pt-8 padding-x">
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

<style scoped>
.hero {
  @apply flex xl:flex-row flex-col gap-5 relative z-0;
}

.hero__title {
  @apply 2xl:text-[64px] sm:text-[56px] text-[48px] font-bold;
}

.hero__subtitle {
  @apply text-[27px] text-slate-700 font-light mt-5;
}

.hero__image-container {
  @apply xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen;
}

.hero__image {
  @apply relative max-w-[800px] xl:w-full w-[90%] xl:h-full h-[590px] z-0;
}

.hero__image-overlay {
  @apply absolute xl:top-0 md:bottom-0 bottom-32 xl:-right-1/4 bg-hero-bg bg-repeat-round -z-10 sm:w-[75%] w-[100%] xl:h-[80%] md:h-[540px] h-[480px] overflow-hidden;
}
</style>
