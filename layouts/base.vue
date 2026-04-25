<script setup lang="ts">
import { onSlideEnter, onSlideLeave, useDarkMode, useIsSlideActive, useNav, useSlideContext } from '@slidev/client'

const { $slidev } = useSlideContext()
const { currentPage, total } = useNav()
const { isDark } = useDarkMode()
const isActive = useIsSlideActive()

const props = defineProps({
  university: {
    type: String,
    default: '/assets/WHU.png'
  },
  lab: {
    type: String,
    default: '/assets/LAB.png'
  }
})
</script>
<template>
  <div class="h-full w-full flex flex-col bg-white relative">
    <slot name="header" />
    <header>
      <div class="absolute top-1 right-1 flex justify-end items-start gap-0.5">
        <img v-if="university" :src="university" class="h-12 object-contain" />
        <img v-if="lab" :src="lab" class="h-12 object-contain" />
      </div>
      <div class="absolute top-14 w-full h-[2px] bg-primary"></div>
    </header>

    <main class="flex-grow flex flex-col">
      <slot name="main" />
    </main>

    <footer>
      <slot name="footer" />
      <div class="absolute bottom-0 w-full h-6 bg-primary flex justify-end items-center px-6">
        <span class="text-white page-number">
          Slide {{ currentPage }} / {{ total }}
        </span>
      </div>
    </footer>
  </div>
</template>
<style scoped>
h1 {
  line-height: 1.4;
}
</style>