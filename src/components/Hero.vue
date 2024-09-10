<template>
  <div class="hero max-width">
    <div class="flex-1 pt-8 padding-x">
      <h1 class="hero__title">Create, View & Edit your next adventurer!</h1>
      <p class="hero__subtitle">
        A horde of goblins, a family of trolls or a mighty red dragon — Your party is ready for
        anything
      </p>

      <RouterLink to="/characters">
        <div class="pill-btn mt-8">View All Characters</div>
      </RouterLink>
    </div>

    <div class="hero__image-container">
      <div class="hero__image">
        <img :src="`./src/assets/img/hero/wizard.png`" alt="Hero Image" class="object-contain" />
      </div>
      <div class="hero__image-overlay" />
    </div>
  </div>
</template>

<style scoped>
.hero {
  @apply flex xl:flex-row flex-col gap-8 lg:gap-24 relative z-0 pb-16 xl:pb-0;
}

.hero__title {
  @apply 2xl:text-[64px] sm:text-[48px] text-[36px] font-bold;
}

.hero__subtitle {
  @apply text-[20px] md:text-[28px] text-slate-700 font-light mt-5;
}

.hero__image-container {
  @apply relative xl:flex-[1.5] justify-center items-center xl:justify-end xl:items-end w-full xl:h-screen flex;
}

.hero__image {
  @apply flex justify-center items-center md:items-start max-w-[800px] xl:w-full w-[75%] xl:h-full z-0 aspect-auto;
}

.hero__image-overlay {
  @apply absolute xl:top-0 xl:-right-1/2 bottom-0 left-auto bg-hero-bg bg-repeat-round -z-10 xl:w-[150%] w-[90%] xl:h-[80%] h-full overflow-hidden;
}
</style>
