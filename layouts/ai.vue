<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'

// 接收 props，方便在 markdown 中直接定义
const props = defineProps({
    section: { type: String, default: '章节标题' },
    title: { type: String, default: '页面主标题' },
    references: { type: Array as () => string[], default: () => [] }
})

const { currentPage, total } = useNav()

const defaultUniversity = new URL('../public/WHU.png', import.meta.url).href
const defaultLab = new URL('../public/LAB.png', import.meta.url).href

const universitySrc = computed(() => defaultUniversity)
const labSrc = computed(() => defaultLab)
</script>

<template>
    <div class="h-full w-full flex flex-col bg-white relative text-sm">
        <header class="flex items-stretch h-12 w-full border-b-2 border-primary">
            <div class="bg-primary text-white flex items-center px-8 font-bold text-xl min-w-[200px]">
                {{ section }}
            </div>
            <div class="flex-grow flex items-center px-6 text-black font-bold text-xl">
                {{ title }}
            </div>
            <div class="flex items-center gap-1 pr-2">
                <img :src="universitySrc" class="h-10 object-contain" />
                <img :src="labSrc" class="h-10 object-contain" />
            </div>
        </header>

        <main class="flex-grow p-6 flex gap-4 overflow-hidden">
            <slot />
        </main>

        <footer class="px-6 pb-8">
            <div v-if="references.length > 0" class="text-[10px] text-gray-500 border-t border-gray-200 pt-1">
                <div v-for="(ref, index) in references" :key="index">
                    [{{ index + 1 }}] {{ ref }}
                </div>
            </div>

            <div class="absolute bottom-0 left-0 w-full h-6 bg-primary flex justify-end items-center px-6">
                <span class="text-white italic text-xs">
                    Slide {{ currentPage }}
                </span>
            </div>
        </footer>
    </div>
</template>

<style scoped>
/* 可以在这里定义一些主题色，如果你的 uno.config.ts 没定义的话 */
.bg-primary {
    background-color: #004b91;
    /* 示例中的深蓝色 */
}

.border-primary {
    border-color: #004b91;
}
</style>