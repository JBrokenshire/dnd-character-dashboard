<script lang="ts" setup>
import router from '@/router'
import { Race } from '@/models/Race'
import { useRoute } from 'vue-router'
import { Character } from '@/models/Character'
import { ClassType } from '@/models/ClassType'
import { onMounted, reactive, ref } from 'vue'
import { getAllRaces } from '@/services/RaceService'
import { getAllClasses } from '@/services/ClassService'
import CustomScaleLoader from '@/components/loaders/CustomScaleLoader.vue'
import { getCharacterByID, updateCharacter } from '@/services/CharacterService'

const route = useRoute()

const characterID = route.params.id

const form = reactive({
  name: '',
  level: 1,
  profilePictureURL: '',
  classID: 1,
  raceID: 1,
  strength: 10,
  dexterity: 10,
  constitution: 10,
  intelligence: 10,
  wisdom: 10,
  charisma: 10
})

const handleSubmit = async () => {
  const newCharacter: Character = {
    name: form.name,
    level: form.level,
    profile_picture_url: form.profilePictureURL !== '' ? form.profilePictureURL : null,
    class_id: form.classID,
    race_id: form.raceID,
    strength: form.strength,
    dexterity: form.dexterity,
    constitution: form.constitution,
    intelligence: form.intelligence,
    wisdom: form.wisdom,
    charisma: form.charisma,
    walking_speed_modifier: character.value.walking_speed_modifier,
    inspiration: character.value.inspiration,
    current_hit_points: character.value.current_hit_points,
    max_hit_points: character.value.max_hit_points,
    temp_hit_points: character.value.temp_hit_points
  }

  const responseCharacter = await updateCharacter(characterID, newCharacter)
  await router.push(`/characters/${responseCharacter.id}`)
}

const character = ref<Character>()
const classes = ref<ClassType[]>([])
const races = ref<Race[]>([])
const isLoading = ref(true)

onMounted(async () => {
  isLoading.value = true

  classes.value = await getAllClasses()
  races.value = await getAllRaces()
  character.value = await getCharacterByID(characterID)

  form.name = character.value.name
  form.level = character.value.level
  form.classID = character.value.class_id
  form.raceID = character.value.race_id
  form.profilePictureURL = character.value.profile_picture_url
    ? character.value.profile_picture_url
    : null
  form.strength = character.value.strength
  form.dexterity = character.value.dexterity
  form.constitution = character.value.constitution
  form.intelligence = character.value.intelligence
  form.wisdom = character.value.wisdom
  form.charisma = character.value.charisma

  isLoading.value = false
})
</script>

<template>
  <div class="max-width padding-x">
    <!-- Show loading spinner while isLoading = true -->
    <div v-if="isLoading" class="text-center py-6">
      <CustomScaleLoader />
    </div>

    <form v-else @submit.prevent="handleSubmit">
      <div class="flex-between w-full my-8">
        <RouterLink
          :to="`/characters/${character.id}`"
          class="flex items-center gap-2 text-lg nav-link"
        >
          <i class="pi pi-chevron-left scale-[.75]" />
          View Character
        </RouterLink>
        <h2 class="text-2xl lg:text-4xl text-center font-semibold">Edit Character</h2>
        <RouterLink :to="`/characters/${character.id}`" class="invisible">
          View Character
        </RouterLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 md:gap-8">
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
                v-for="(classType, index) in classes"
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
                v-for="(section, index) in classes[form.classID - 1].short_description.split('\n')"
                :key="`${classes[form.classID - 1].name}-description-section-${index}`"
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
                v-for="(race, index) in races"
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
                v-for="(section, index) in races[form.raceID - 1].short_description.split('\n')"
                :key="`${races[form.raceID - 1].name}-description-section-${index}`"
              >
                {{ section }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full grid grid-cols-3 lg:grid-cols-6 gap-4">
        <div class="mb-4">
          <label for="strength" class="block text-gray-700 font-bold mb-2">Strength</label>
          <input
            v-model="form.strength"
            id="strength"
            name="strength"
            type="number"
            class="border rounded w-full py-2 px-3 mb-2"
            min="1"
            max="20"
            required
          />
        </div>
        <div class="mb-4">
          <label for="dexterity" class="block text-gray-700 font-bold mb-2">Dexterity</label>
          <input
            v-model="form.dexterity"
            id="dexterity"
            name="dexterity"
            type="number"
            class="border rounded w-full py-2 px-3 mb-2"
            min="1"
            max="20"
            required
          />
        </div>
        <div class="mb-4">
          <label for="constitution" class="block text-gray-700 font-bold mb-2">Constitution</label>
          <input
            v-model="form.constitution"
            id="constitution"
            name="constitution"
            type="number"
            class="border rounded w-full py-2 px-3 mb-2"
            min="1"
            max="20"
            required
          />
        </div>
        <div class="mb-4">
          <label for="intelligence" class="block text-gray-700 font-bold mb-2">Intelligence</label>
          <input
            v-model="form.intelligence"
            id="intelligence"
            name="intelligence"
            type="number"
            class="border rounded w-full py-2 px-3 mb-2"
            min="1"
            max="20"
            required
          />
        </div>
        <div class="mb-4">
          <label for="wisdom" class="block text-gray-700 font-bold mb-2">Wisdom</label>
          <input
            v-model="form.wisdom"
            id="wisdom"
            name="wisdom"
            type="number"
            class="border rounded w-full py-2 px-3 mb-2"
            min="1"
            max="20"
            required
          />
        </div>
        <div class="mb-4">
          <label for="charisma" class="block text-gray-700 font-bold mb-2">Charisma</label>
          <input
            v-model="form.charisma"
            id="charisma"
            name="charisma"
            type="number"
            class="border rounded w-full py-2 px-3 mb-2"
            min="1"
            max="20"
            required
          />
        </div>
      </div>

      <div class="flex-center p-4">
        <button type="submit" class="pill-btn">Submit</button>
      </div>
    </form>
  </div>
</template>
