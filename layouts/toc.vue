<script setup lang="ts">
import { computed } from 'vue'
import BaseLayout from './base.vue'
import { useNav } from '@slidev/client'

const { tocTree: globalToc } = useNav()

const props = withDefaults(defineProps<{
    active?: number | null
    tocTree?: Array<any> | null
}>(), {
    active: null,
    tocTree: null,
})

const activeClass = "text-black opacity-100"
const inactiveClass = "text-gray-400 opacity-40" // 稍微降低未选中透明度，增加对比
const activeBox = "bg-[#3b99d4]"
const inactiveBox = "bg-[#3b99d4] opacity-20"

// 优先使用传入的 tocTree，否则使用 Slidev 自动生成的
const tocData = computed(() => props.tocTree ?? globalToc.value)
</script>

<template>
    <BaseLayout>
        <template #main>
            <div class="h-full w-full flex items-center px-40 py-20 gap-16">

                <div class="relative mr-20">
                    <div class="w-16 h-16 bg-[#2c5364] absolute -top-4 -left-4"></div>
                    <div class="w-18 h-18 bg-[#3b99d4] relative z-10 flex items-center justify-center shadow-lg">
                        <span class="text-white text-3xl font-bold">目录</span>
                    </div>
                </div>

                <div class="flex flex-col gap-8">
                    <div v-for="(item, index) in tocData" :key="index"
                        class="flex items-start gap-6 transition-all duration-300"
                        :class="(active === null || active === index + 1) ? activeClass : inactiveClass">

                        <div class="w-12 h-12 flex items-center justify-center text-white text-2xl font-bold shrink-0"
                            :class="(active === null || active === index + 1) ? activeBox : inactiveBox">
                            {{ String(index + 1).padStart(2, '0') }}
                        </div>

                        <div class="flex flex-col gap-1">
                            <h2 class="text-3xl font-bold leading-tight">{{ item.title }}</h2>

                            <ul v-if="item.children && item.children.length"
                                class="flex flex-col gap-1 mt-2 border-l-2 border-[#3b99d4]/30 pl-4">
                                <li v-for="child in item.children" :key="child.path"
                                    class="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">
                                    {{ child.title }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </template>
    </BaseLayout>
</template>

<style scoped>
</style>