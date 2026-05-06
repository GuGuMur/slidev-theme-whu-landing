<script setup lang="ts">
import { computed, useSlots } from 'vue'

interface Props {
    icon?: string
    title?: string
    content?: string
}

const props = withDefaults(defineProps<Props>(), {
    title: '',
    content: ''
})

const slots = useSlots()
const hasTitle = computed(() => Boolean(props.title) || Boolean(slots.title))
const hasContent = computed(() => Boolean(props.content) || Boolean(slots.content))
</script>

<template>
    <!-- 有icon的布局：左侧icon，右侧标题和内容竖排 -->
    <div v-if="props.icon" class="inline-flex flex-row items-start gap-1 p-2.5 rounded-xl border border-whu-blue/25 bg-gradient-to-br from-whu-blue/10 via-white/70 to-whu-sky/5 shadow-sm backdrop-blur-sm">
        <div class="text-xl md:text-[22px] text-whu-blue shrink-0 opacity-90">
            <div :class="props.icon" />
        </div>

        <div class="flex flex-col">
            <div v-if="hasTitle" class="text-[14px] md:text-[15px] font-semibold leading-tight tracking-tight text-whu-deepblue">
                <slot name="title">
                {{ props.title }}
                </slot>
            </div>

            <div v-if="hasContent" class="text-[11px] md:text-[12px] leading-snug">
                <slot name="content">
                {{ props.content }}
                </slot> 
            </div>
        </div>
    </div>

    <!-- 无icon的布局：标题和内容竖排 -->
    <div v-else class="inline-flex flex-col gap-1.5 p-2.5 rounded-2xl border border-whu-blue/25 bg-gradient-to-br from-whu-blue/10 via-white/70 to-whu-sky/5 shadow-sm backdrop-blur-sm">
        <div v-if="hasTitle" class="text-[14px] md:text-[15px] font-semibold leading-tight tracking-tight text-whu-deepblue">
            <slot name="title">
            {{ props.title }}
            </slot>
        </div>

        <div v-if="hasContent" class="text-[11px] md:text-[12px] leading-snug text-whu-blue/90">
            <slot name="content">
            {{ props.content }}
            </slot>
        </div>
    </div>
</template>