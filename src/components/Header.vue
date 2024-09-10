<script setup>
import { reactive } from 'vue'

const state = reactive({
  isNavOpen: false
})
</script>

<template>
  <header class="max-width padding-x">
    <!--    <nav class="flex items-center justify-between gap-2 sm:gap-8">-->
    <!--      <div class="max-w-screen-xl w-full flex-between flex-wrap px-4">-->

    <!--        <button-->
    <!--          data-collapse-toggle="navbar-default"-->
    <!--          class="inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg md:hidden bg-transparent hover:bg-gray-100 hover:text-primary transition-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:text-primary"-->
    <!--          aria-controls="navbar-default"-->
    <!--          aria-expanded="false"-->
    <!--        >-->
    <!--          <span class="sr-only">Open Main Menu</span>-->
    <!--          <svg-->
    <!--            class="w-5 h-5"-->
    <!--            aria-hidden="true"-->
    <!--            xmlns="http://www.w3.org/2000/svg"-->
    <!--            fill="none"-->
    <!--            viewBox="0 0 17 14"-->
    <!--          >-->
    <!--            <path-->
    <!--              stroke="currentColor"-->
    <!--              stroke-linecap="round"-->
    <!--              stroke-linejoin="round"-->
    <!--              stroke-width="2"-->
    <!--              d="M1 1h15M1 7h15M1 13h15"-->
    <!--            />-->
    <!--          </svg>-->
    <!--        </button>-->

    <!--        <div class="hidden w-full md:block md:w-auto" id="navbar-default">-->
    <!--          <ul-->
    <!--            class="font-bold text-xl flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:gap-4 md:mt-0 md:border-0 md:bg-transparent"-->
    <!--          >-->
    <!--            <li>-->
    <!--              <RouterLink class="nav-link px-2 md:px-4" to="/">Home</RouterLink>-->
    <!--            </li>-->
    <!--            <li>-->

    <!--            </li>-->
    <!--            <li>-->
    <!--              <RouterLink class="nav-link px-2 md:px-4" to="/classes">Classes</RouterLink>-->
    <!--            </li>-->
    <!--            <li>-->
    <!--              <RouterLink class="nav-link px-2 md:px-4" to="/races">Races</RouterLink>-->
    <!--            </li>-->
    <!--          </ul>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </nav>-->

    <div class="flex-between py-2">
      <RouterLink
        class="w-[15%] min-w-[75px] max-w-[150px]"
        to="/"
        @click="state.isNavOpen = false"
      >
        <img src="@/assets/img/website-logo.png" alt="Website Logo" class="aspect-square" />
      </RouterLink>
      <nav>
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

          <div :class="state.isNavOpen ? 'showMenuNav' : 'hideMenuNav'">
            <button class="absolute top-2 right-2" @click="state.isNavOpen = false">
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
            <ul class="flex flex-col items-center justify-between gap-8 text-2xl">
              <li class="my-2 uppercase">
                <RouterLink class="nav-link px-2 md:px-4" to="/" @click="state.isNavOpen = false">
                  Home
                </RouterLink>
              </li>
              <li class="my-2 uppercase">
                <RouterLink
                  class="nav-link px-2 md:px-4"
                  to="/characters"
                  @click="state.isNavOpen = false"
                >
                  Characters
                </RouterLink>
              </li>
              <li class="my-2 uppercase">
                <RouterLink
                  class="nav-link px-2 md:px-4"
                  to="/classes"
                  @click="state.isNavOpen = false"
                >
                  Classes
                </RouterLink>
              </li>
              <li class="my-2 uppercase">
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
.hideMenuNav {
  display: none;
}
.showMenuNav {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: white;
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
</style>
