<script setup lang="ts">
import type { VNodeChild } from 'vue'
const props = withDefaults(defineProps<{
    title?: string | VNodeChild
    titleTextColor?: string // 默认为 UnoCSS 变量或类名
    titleBGColor?: string // 默认为 UnoCSS 变量或类名
    contentColor?: string
}>(), {
    titleBGColor: 'bg-primary',
    titleTextColor: 'text-white',
    contentColor: 'bg-white',
})
</script>

<template>
    <div class="flex flex-col min-h-0 rounded-lg shadow-md overflow-hidden border border-gray-200/50">
        <div :class="props.titleBGColor" class="px-4 pb-1 text-white font-bold text-lg flex-center gap-2 shrink-0">
            <slot name="title-prefix" />
            <span :class="props.titleTextColor">
                <slot name="title">{{ props.title }}</slot>
            </span>
        </div>

        <div :class="props.contentColor" class="px-4 py-2 flex flex-col justify-start text-sm">
            <slot />
        </div>
    </div>
</template>

<style scoped>
</style>