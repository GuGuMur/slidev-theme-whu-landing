<script setup lang="ts">
interface Props {
    icon?: string
    title?: string
    content?: string
}

const props = withDefaults(defineProps<Props>(), {
    title: '',
    content: ''
})
</script>

<template>
    <!-- 有icon的布局：左侧icon，右侧标题和内容竖排 -->
    <div v-if="props.icon" class="inline-flex flex-row items-start gap-1 p-2 rounded-xl border border-blue-200/50 bg-gradient-to-br from-blue-50/70 via-white/50 to-white shadow-sm backdrop-blur-sm">
        <div class="text-2xl text-whu-blue shrink-0 opacity-80">
            <div :class="props.icon" />
        </div>

        <div class="flex flex-col">
            <div v-if="props.title" class="text-lg font-bold text-whu-blue">
                {{ props.title }}
            </div>

            <div v-if="props.content" class="text-sm text-whu-blue/80">
                {{ props.content }}
            </div>
        </div>
    </div>

    <!-- 无icon的布局：标题和内容竖排 -->
    <div v-else class="inline-flex flex-col gap-1 p-2 rounded-xl border border-blue-200/50 bg-gradient-to-br from-blue-50/70 via-white/50 to-white shadow-sm backdrop-blur-sm">
        <div v-if="props.title" class="text-lg font-bold text-whu-blue">
            {{ props.title }}
        </div>

        <div v-if="props.content" class="text-sm text-whu-blue/80">
            {{ props.content }}
        </div>
    </div>
</template>