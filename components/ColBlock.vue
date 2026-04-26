<script setup lang="ts">

const props = withDefaults(defineProps<{
    title: string
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
    <div class="flex flex-col flex-1 min-h-0 rounded-lg shadow-md overflow-hidden border border-gray-200/50">
        <div :class="props.titleBGColor" class="px-4 text-white font-bold text-lg flex-center gap-2 shrink-0">
            <slot name="title-prefix" />
            <span :class="props.titleTextColor">{{ props.title }}</span>
        </div>

        <div :class="props.contentColor" class="px-4 py-2 flex-grow flex overflow-y-auto flex-col  justify-start text-sm ">
            <slot />
        </div>
    </div>
</template>

<style scoped>
</style>