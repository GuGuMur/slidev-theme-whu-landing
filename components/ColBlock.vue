<script setup lang="ts">
import type { VNodeChild } from 'vue'
const props = withDefaults(defineProps<{
    title?: string | VNodeChild
    titleTextColor?: string
    titleBGColor?: string
    contentColor?: string
}>(), {
    titleBGColor: 'bg-primary',
    titleTextColor: 'text-white',
    contentColor: 'bg-white',
})
</script>

<template>
    <div class="flex flex-col min-h-0 rounded-lg shadow-md overflow-hidden border border-gray-200/50">
        <div :class="props.titleBGColor" class="px-4 pb-0.3 text-white font-semibold text-[16px] md:text-[18px] leading-tight flex-center gap-2 shrink-0">
            <slot name="title-prefix" />
            <span :class="props.titleTextColor">
                <slot name="title">{{ props.title }}</slot>
            </span>
        </div>

        <div :class="props.contentColor" class="px-3.5 py-0.75 flex flex-col justify-start text-[12px] md:text-[13px] leading-snug">
            <slot />
        </div>
    </div>
</template>

<style scoped>
</style>