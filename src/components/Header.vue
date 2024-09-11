<script setup>
import { reactive } from 'vue'

const state = reactive({
  isNavOpen: false
})
</script>

<template>
  <header class="max-width padding-x">
    <div class="flex-between py-2">
      <RouterLink
        class="w-[15%] min-w-[75px] max-w-[150px]"
        to="/"
        @click="state.isNavOpen = false"
      >
        <img src="@/assets/img/website-logo.png" alt="Website Logo" class="aspect-square" />
      </RouterLink>
      <nav>
        <!-- Small Screen Navbar -->
        <section class="flex md:hidden">
          <button
            class="space-y-2 transition hover:text-primary"
            @click="state.isNavOpen = !state.isNavOpen"
          >
            <span class="sr-only">Open Main Menu</span>
            <svg
              class="w-8 h-8"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div :class="`transition-200 sidebar ${state.isNavOpen ? 'showMenuNav' : 'hideMenuNav'}`">
            <div class="w-full flex-between px-4 py-2 mb-4">
              <RouterLink
                class="w-[15%] min-w-[75px] max-w-[150px] block sm:hidden"
                to="/"
                @click="state.isNavOpen = false"
              >
                <img src="@/assets/img/website-logo.png" alt="Website Logo" class="aspect-square" />
              </RouterLink>
              <button class="w-full flex items-center justify-end" @click="state.isNavOpen = false">
                <svg
                  class="h-12 w-12 text-gray-600 transition-200 hover:text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <ul
              v-if="state.isNavOpen"
              class="flex flex-col items-center sm:items-end justify-between gap-8 text-2xl px-8"
            >
              <li class="my-2">
                <RouterLink class="nav-link px-2 md:px-4" to="/" @click="state.isNavOpen = false">
                  Home
                </RouterLink>
              </li>
              <li class="my-2">
                <RouterLink
                  class="nav-link px-2 md:px-4"
                  to="/characters"
                  @click="state.isNavOpen = false"
                >
                  Characters
                </RouterLink>
              </li>
              <li class="my-2">
                <RouterLink
                  class="nav-link px-2 md:px-4"
                  to="/classes"
                  @click="state.isNavOpen = false"
                >
                  Classes
                </RouterLink>
              </li>
              <li class="my-2">
                <RouterLink
                  class="nav-link px-2 md:px-4"
                  to="/races"
                  @click="state.isNavOpen = false"
                >
                  Races
                </RouterLink>
              </li>
            </ul>
          </div>
        </section>

        <!-- Large Screen Navbar -->
        <ul class="hidden space-x-4 md:flex text-xl">
          <li>
            <RouterLink class="nav-link px-2" to="/" @click="state.isNavOpen = false"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink class="nav-link px-2" to="/characters" @click="state.isNavOpen = false"
              >Characters</RouterLink
            >
          </li>
          <li>
            <RouterLink class="nav-link px-2" to="/classes" @click="state.isNavOpen = false"
              >Classes</RouterLink
            >
          </li>
          <li>
            <RouterLink class="nav-link px-2" to="/races" @click="state.isNavOpen = false"
              >Races</RouterLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.sidebar {
  @apply fixed top-0 right-0 h-[100vh] z-[999] bg-white shadow-md;
}

.hideMenuNav {
  @apply w-0;
}
.showMenuNav {
  @apply w-full sm:w-[250px];
}
</style>
