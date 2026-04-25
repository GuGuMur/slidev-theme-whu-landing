<script setup lang="ts">
import { computed } from 'vue'
import BaseLayout from './base.vue'
import { onSlideEnter, onSlideLeave, useDarkMode, useIsSlideActive, useNav, useSlideContext } from '@slidev/client'

const { tocTree } = useNav()
const props = defineProps({
    active: Number
})

// 定义一个颜色映射，方便管理高亮和非高亮状态
const activeClass = "text-black opacity-100"
const inactiveClass = "text-gray-300 opacity-50"
const activeBox = "bg-[#3b99d4]"
const inactiveBox = "bg-[#3b99d4] opacity-20"
</script>

<template>
    <BaseLayout>
        <template #main>
            <div class="h-full w-full flex items-center px-20">

                <div class="relative mr-20">
                    <div class="w-16 h-16 bg-[#2c5364] absolute -top-4 -left-4"></div>
                    <div class="w-18 h-18 bg-[#3b99d4] relative z-10 flex items-center justify-center shadow-lg">
                        <span class="text-white text-3xl font-bold tracking-widest">目录</span>
                    </div>
                </div>

                <div class="flex flex-col gap-12">
                    <div v-for="(item, index) in tocTree" :key="index"
                        class="flex items-start gap-6 transition-all duration-300"
                        :class="active == null || active === index + 1 ? activeClass : inactiveClass">

                        <div class="w-16 h-16 flex items-center justify-center text-white text-3xl font-bold shrink-0"
                            :class="active == null || active === index + 1 ? activeBox : inactiveBox">
                            {{ String(index + 1).padStart(2, '0') }}
                        </div>

                        <div class="flex flex-col gap-2">
                            <h2 class="text-3xl font-bold">{{ item.title }}</h2>

                            <ul v-if="item.children && item.children.length" class="list-disc list-inside ml-2">
                                <li v-for="child in item.children" :key="child.title" class="text-xl font-medium mt-1">
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