<script setup lang="ts">
defineProps<{
  className: string
  title: string
  proficient: boolean
  modifier: number
}>()
</script>

<template>
  <div
    class="w-[88px] xl:w-[107px] h-[31px] xl:h-[34px] order-1 flex items-center relative mb-[5px] cursor-pointer"
  >
    <div class="absolute overflow-hidden top-0 bottom-0 left-0 right-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 116.1 34">
        <g>
          <g transform="translate(-683.000000, -651.000000)">
            <path
              :class="className"
              d="M789.8,651h-22l-0.3,0.2c-1.2,0.8-2.3,1.7-3.2,2.7h-75.6l-0.3,0.4c-0.7,1.2-3,4.5-4.9,5.4 l-0.5,0.2l0,16.1l0.5,0.2c1.8,0.9,4.1,4.2,4.9,5.4l0.3,0.4h75.6c1,1,2.1,1.9,3.2,2.7l0.3,0.2h21.9l0.3-0.2c5.6-3.8,9-10,9-16.8 s-3.4-13-9-16.8L789.8,651z M797.1,668c0,5.8-2.9,11.2-7.6,14.5h-10.3c-4.7-2.1-11.1-3.2-14.3-3.8c-2.3-3-3.7-6.8-3.7-10.7v0 c0-3.9,1.3-7.7,3.7-10.7c3.1-0.6,9.5-1.7,14.3-3.8h10.3C794.3,656.8,797.1,662.2,797.1,668L797.1,668z M752.8,655.6 c0.8,0.7,2.5,1.8,5.7,2.1c-0.9,1.5-3,5.5-3,10.3s2,8.8,3,10.3c-3.2,0.3-4.9,1.4-5.7,2.1h-55.4c-3.1-1.1-11.1-4.5-12.9-9.3l0-6.2 c1.9-4.8,9.9-8.1,12.9-9.3H752.8z M759.6,657.8c0.6,0,1.3,0,2,0c-1.8,3.1-2.8,6.6-2.8,10.3v0c0,3.7,1,7.2,2.9,10.3 c-0.7,0-1.3-0.1-2,0c-0.6-1-3.1-5.2-3.1-10.2S759,658.8,759.6,657.8L759.6,657.8z M768.9,682.5c-1.1-0.8-2.1-1.7-3-2.6 c2.4,0.5,5.1,1.3,8.3,2.6H768.9L768.9,682.5z M762.2,679.3c0.3,0.4,0.5,0.7,0.8,1.1h-8.5C755.9,679.7,758.3,678.9,762.2,679.3 L762.2,679.3z M689.3,680.4c-0.7-1.1-2.8-4.1-4.9-5.4v-1.9c2.3,3.4,7.1,5.9,10.4,7.3H689.3L689.3,680.4z M684.4,661 c2.1-1.3,4.2-4.3,4.9-5.4h5.5c-3.3,1.4-8,3.9-10.4,7.3V661L684.4,661z M763,655.6c-0.3,0.4-0.5,0.7-0.8,1.1 c-3.9,0.4-6.3-0.4-7.7-1.1H763z M765.9,656.1c0.9-1,1.9-1.9,3-2.6h5.3C771,654.8,768.2,655.6,765.9,656.1L765.9,656.1z"
            />
          </g>
        </g>
      </svg>
    </div>
    <h3 class="sr-only">{{ title }} Saving Throw</h3>

    <!-- Proficiency Indicator -->
    <div class="relative w-[5px]">
      <span v-if="proficient" aria-label="Proficient">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10 10"
          class="w-[12px] h-[12px] absolute inline-flex left-[-5px] top-[50%] translate-y-[-75%] xl:translate-y-[-50%] rounded-full border border-dotted border-cs-gray"
        >
          <g data-name="Layer 2">
            <g data-name="v1">
              <circle :class="className" cx="5" cy="5" r="5"></circle>
            </g>
          </g>
        </svg>
      </span>
      <span v-else aria-label="Not Proficient">
        <span
          class="absolute inline-flex bg-cs-gray-dark rounded-full left-[-5px] top-[-50%] translate-y-[-75%] xl:translate-y-[-50%] h-[12px] w-[12px] border border-dotted border-cs-gray"
        />
      </span>
    </div>

    <!-- Ability Name -->
    <div
      class="flex-1 text-[12px] mb-1 font-bold text-center uppercase tracking-tightest text-white"
    >
      <abbr :title="title" aria-hidden="true">{{ title.slice(0, 3) }}</abbr>
    </div>

    <!-- Modifier -->
    <div class="text-center text-[14px] w-[30px] xl:w-[40px]">
      <button :class="`h[30px] xl:h-[36px] w-[30px] xl:w-[42px]`">
        <span class="inline-flex items-center mb-1">
          <span class="xl:me-[.5] text-[.74rem] text-cs-gray">{{ modifier >= 0 ? '+' : '-' }}</span>
          <span class="text-white">{{ Math.abs(modifier) }}</span>
        </span>
      </button>
    </div>
  </div>
</template>
