<script setup>
import axios from 'axios'
import router from '@/router'
import { useRoute } from 'vue-router'
import { onMounted, reactive } from 'vue'
import { ScaleLoader } from 'vue-spinner/src'
import { useToast } from 'vue-toastification'
import { primaryColour } from '@/constants'

const route = useRoute()

const characterID = route.params.id

const form = reactive({
  name: '',
  level: 1,
  profilePictureURL: '',
  classID: 1,
  raceID: 1
})

const toast = useToast()

const handleSubmit = async () => {
  const newCharacter = {
    name: form.name,
    level: form.level,
    profile_picture_url: form.profilePictureURL !== '' ? form.profilePictureURL : null,
    class_id: form.classID,
    race_id: form.raceID
  }

  try {
    const response = await axios.put(`/api/characters/${state.character.id}`, newCharacter)
    toast.success('Character Updated Successfully')
    await router.push(`/characters/${response.data.id}`)
  } catch (error) {
    console.error('Error creating character:', error)
    toast.error('Character Not Updated')
  }
}

const state = reactive({
  character: Object,
  classes: [],
  races: [],
  isLoading: true
})

onMounted(async () => {
  try {
    const classesResponse = await axios.get('/api/classes')
    state.classes = classesResponse.data

    const racesResponse = await axios.get('/api/races')
    state.races = racesResponse.data

    const characterResponse = await axios.get(`/api/characters/${characterID}`)
    state.character = characterResponse.data

    form.name = state.character.name
    form.level = state.character.level
    form.classID = state.character.class_id
    form.raceID = state.character.race_id
    form.profilePictureURL = state.character.profile_picture_url
      ? state.character.profile_picture_url
      : null
  } catch (error) {
    console.error('Error fetching character, classes or races:', error)
  } finally {
    state.isLoading = false
  }
})
</script>

<template>
  <div class="max-width padding-x">
    <!-- Show loading spinner while isLoading = true -->
    <div v-if="state.isLoading" class="text-center py-6">
      <ScaleLoader :color="primaryColour" size="1rem" />
    </div>

    <form v-else @submit.prevent="handleSubmit">
      <h2 class="text-2xl lg:text-4xl text-center font-semibold mb-8">Edit Character</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="flex flex-col flex-grow">
          <div class="mb-4">
            <label for="name" class="block text-gray-700 font-bold mb-2">Name</label>
            <input
              v-model="form.name"
              id="name"
              name="name"
              type="text"
              class="border rounded w-full py-2 px-3 mb-2"
              placeholder="Character Name"
              required
            />
          </div>

          <div class="mb-4">
            <label for="class-id" class="block text-gray-700 font-bold mb-2">Class</label>
            <select
              v-model="form.classID"
              id="class-id"
              name="class-id"
              class="border rounded w-full py-2 px-3"
              required
            >
              <option
                v-for="(classType, index) in state.classes"
                :key="`add-character__${classType.name}`"
                :value="index + 1"
              >
                {{ classType.name }}
              </option>
            </select>
            <div
              class="mt-2 p-1 flex flex-col gap-2 h-[100px] overflow-y-scroll border border-gray-200 rounded-md"
            >
              <p
                v-for="(section, index) in state.classes[form.classID - 1].description.split('\n')"
                :key="`${state.classes[form.classID - 1].name}-description-section-${index}`"
              >
                {{ section }}
              </p>
            </div>
          </div>

          <div class="mb-4">
            <label for="profile-picture-url" class="block text-gray-700 font-bold mb-2">
              Profile Picture URL (Optional)
            </label>
            <input
              v-model="form.profilePictureURL"
              id="profile-picture-url"
              name="profile-picture-url"
              type="text"
              class="border rounded w-full py-2 px-3 mb-2"
              placeholder="https://www.example.com"
            />
          </div>
        </div>

        <div class="flex flex-col flex-grow">
          <div class="mb-4">
            <label for="level" class="block text-gray-700 font-bold mb-2">Level</label>
            <input
              v-model="form.level"
              id="level"
              name="level"
              type="number"
              class="border rounded w-full py-2 px-3 mb-2"
              placeholder="Character Level"
              min="1"
              max="20"
              required
            />
          </div>

          <div class="mb-4">
            <label for="race-id" class="block text-gray-700 font-bold mb-2">Race</label>
            <select
              v-model="form.raceID"
              id="race-id"
              name="race-id"
              class="border rounded w-full py-2 px-3"
              required
            >
              <option
                v-for="(race, index) in state.races"
                :key="`add-character__${race.name}`"
                :value="index + 1"
              >
                {{ race.name }}
              </option>
            </select>

            <div
              class="mt-2 p-1 flex flex-col gap-2 h-[100px] overflow-y-scroll border border-gray-200 rounded-md"
            >
              <p
                v-for="(section, index) in state.races[form.raceID - 1].description.split('\n')"
                :key="`${state.races[form.raceID - 1].name}-description-section-${index}`"
              >
                {{ section }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex-center p-4">
        <button type="submit" class="pill-btn">Submit</button>
      </div>
    </form>
  </div>
</template>
