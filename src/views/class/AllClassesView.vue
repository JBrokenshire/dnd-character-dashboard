<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { ClassType } from '@/models/ClassType'
import ClassCard from '@/components/class/ClassCard.vue'
import { getAllClasses } from '@/services/ClassService'
import CustomScaleLoader from '@/components/loaders/CustomScaleLoader.vue'

const classes = ref<ClassType[]>([])
const isLoading = ref(true)

onMounted(async () => {
  isLoading.value = true
  classes.value = await getAllClasses()
  isLoading.value = false
})
</script>

<template>
  <!-- Show loading spinner while isLoading = true -->
  <div v-if="isLoading" class="text-center py-6">
    <CustomScaleLoader />
  </div>

  <div v-else class="max-width padding-x mt-8">
    <h2 class="border-b border-gray-300 pb-4 font-bold text-5xl text-center sm:text-start">
      Classes
    </h2>
    <div
      v-if="classes.length > 0"
      class="grid-three"
    >
      <ClassCard
        v-for="classType in classes"
        :key="`class-card-${classType.id}`"
        :classType="classType"
      />
    </div>
  </div>
</template>
