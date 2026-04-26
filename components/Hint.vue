<script setup lang="ts">
interface Props {
    title?: string
    icon?: string // 接收 UnoCSS 图标类名，如 i-carbon-light
    align?: 'left' | 'center' | 'right'
    size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
    align: 'center',
    size: 'md'
})

const alignMap = {
    left: 'justify-start text-left',
    center: 'justify-center text-center',
    right: 'justify-end text-right'
}
const sizeMap = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
}
</script>

<template>
    <div class="w-full flex mb-2">
        <div
            class="w-full flex items-center gap-2 bg-gray-100/50 px-3 py-1.5 rounded-xl border border-whu-sky shadow-md backdrop-blur-sm"
            :class="alignMap[props.align]">
            <div v-if="props.icon" :class="props.icon" class="text-primary shrink-0" />

            <div class="flex items-center gap-2 leading-4" :class="sizeMap[props.size]">
                <span v-if="props.title" class="font-bold text-primary whitespace-nowrap">
                    {{ props.title }}
                </span>

                <span v-if="props.title" class="w-1px h-3 bg-gray-300" />

                <span class="leading-4">
                    <slot />
                </span>
            </div>
        </div>
    </div>
</template>