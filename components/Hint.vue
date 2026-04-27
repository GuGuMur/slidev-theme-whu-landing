<script setup lang="ts">
import { computed, useAttrs } from 'vue'

interface Props {
    title?: string
    icon?: string
    align?: 'left' | 'center' | 'right'
    size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
    align: 'center',
    size: 'md'
})

const containerAlignMap = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end'
}

const contentAlignMap = {
    left: 'justify-start text-left',
    center: 'justify-center text-center',
    right: 'justify-end text-right'
}
const sizeMap = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
}

const attrs = useAttrs()

function classToString(value: unknown): string {
    if (typeof value === 'string') return value
    if (Array.isArray(value)) return value.map(classToString).join(' ')
    if (value && typeof value === 'object') {
        return Object.entries(value as Record<string, unknown>)
            .filter(([, enabled]) => !!enabled)
            .map(([name]) => name)
            .join(' ')
    }
    return ''
}

const mergedClass = computed(() => classToString(attrs.class))
const fillWidth = computed(() => /(^|\s)w-full(\s|$)/.test(mergedClass.value))
const fillHeight = computed(() => /(^|\s)h-full(\s|$)/.test(mergedClass.value))
</script>

<template>
    <div class="flex mb-2" :class="containerAlignMap[props.align]">
        <div
            class="flex items-center gap-2 bg-gray-100/50 px-3 py-1.5 rounded-xl border border-whu-sky shadow-md backdrop-blur-sm"
            :class="[contentAlignMap[props.align], fillWidth ? 'w-full' : 'inline-flex', fillHeight ? 'h-full' : '']">
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