<script setup lang="ts">
import { useNav } from '@slidev/client'
import References from '../plugins/references/References.vue'
const { currentPage, total } = useNav()

const UniSrc = new URL('../public/WHU.png', import.meta.url).href
const LabSrc = new URL('../public/LAB.png', import.meta.url).href



</script>
<template>
  <div class="h-full w-full flex flex-col bg-white relative overflow-hidden">

    <header class="h-14 w-full flex-none relative">
      <slot name="header" />
      <div class="absolute top-1 right-1 flex justify-end items-start gap-0.5">
        <img :src="UniSrc" class="h-12 object-contain" />
        <img :src="LabSrc" class="h-12 object-contain" />
      </div>
      <div class="absolute bottom-0 w-full h-[2px] bg-primary"></div>
    </header>

    <main class="flex-1 min-h-0 flex flex-col">
      <div class="flex-1 min-h-0 overflow-y-auto">
        <slot name="main" />
      </div>
    </main>

    <footer class="flex-none w-full flex flex-col">
      <div class="w-full px-2">
        <slot name="footer" />
      </div>

      <div class="h-6 w-full bg-primary flex justify-end items-center px-6">
        <span class="text-white page-number">
          Slide {{ currentPage }} / {{ total }}
        </span>
      </div>
    </footer>
  </div>
</template>
