<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ClassType } from '@/models/ClassType'
import ClassCard from '@/components/ClassCard.vue'
import { getAllClasses } from '@/services/ClassService'
import CustomScaleLoader from '@/components/CustomScaleLoader.vue'

const router = useRouter()

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

  <div v-else class="max-width padding-x py-8 flex flex-col gap-8">
    <h2 class="border-b border-gray-300 pb-4 font-bold text-5xl text-center sm:text-start">
      Classes
    </h2>
    <div
      v-if="classes.length > 0"
      class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-4"
    >
      <ClassCard
        v-for="classType in classes"
        :key="`class-card-${classType.id}`"
        :classType="classType"
      />
    </div>
  </div>
</template>
