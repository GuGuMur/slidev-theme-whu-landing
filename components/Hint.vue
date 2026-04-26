<script setup lang="ts">
interface Props {
    title?: string
    icon?: string // 接收 UnoCSS 图标类名，如 i-carbon-light
    align?: 'left' | 'center' | 'right'
}

const props = withDefaults(defineProps<Props>(), {
    align: 'center'
})

const alignMap = {
    left: 'justify-start text-left',
    center: 'justify-center text-center',
    right: 'justify-end text-right'
}
</script>

<template>
    <div class="w-full flex mt-2 mb-1" :class="alignMap[props.align]">
        <div
            class="inline-flex items-center gap-2 bg-gray-100/50 px-3 py-1.5 rounded-xl border border-gray-200/50 shadow-sm backdrop-blur-sm">
            <div v-if="props.icon" :class="props.icon" class="text-primary text-sm shrink-0" />

            <div class="flex items-center gap-2 text-xs leading-none">
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