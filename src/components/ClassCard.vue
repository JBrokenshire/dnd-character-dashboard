<script setup>
defineProps({
  classType: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div
    class="rounded-2xl transition-200 shadow-lg shadow-gray-300 bg-gray-100 hover:scale-[1.02] hover:shadow-gray-400"
  >
    <RouterLink :to="`/classes/${classType.id}`">
      <div
        class="p-6 flex flex-grow gap-4 items-center hover:cursor-pointer relative overflow-hidden"
      >
        <img
          :src="`/src/assets/img/classes/icons/${classType.name.replace(/\s/g, '-').toLowerCase()}.jpg`"
          alt="Class Icon"
          class="max-w-20 aspect-square object-cover z-10 rounded-lg"
        />

        <div class="z-10">
          <h1 class="text-xl md:text-2xl font-bold line-clamp-1">
            {{ classType.name }}
          </h1>
          <p class="text-xs sm:text-sm text-gray-700 line-clamp-3">
            {{ classType.short_description }}
          </p>
        </div>
      </div>
    </RouterLink>
  </div>
</template>
