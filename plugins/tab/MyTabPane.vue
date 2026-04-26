<script setup lang="ts">
import { inject, onMounted, onUnmounted, computed, Ref } from 'vue'

const props = defineProps<{
    name: string
    tab: string
    click?: number
}>()

// 获取父组件注入的上下文
const context = inject<{
    activeName: Ref<string>
    registerTab: Function
    unregisterTab: Function
}>('SlidevTabsContext')

if (!context) {
    throw new Error('[MyTabPane] 必须作为 <MyTab> 的子组件使用')
}

// 生命周期关联注册表
onMounted(() => {
    context.registerTab({
        name: props.name,
        tab: props.tab,
        click: props.click
    })
})

onUnmounted(() => {
    context.unregisterTab(props.name)
})

const isActive = computed(() => context.activeName.value === props.name)
</script>

<template>
    <div class="paper-summary-pane">
        <div v-show="isActive" class="w-full h-full paper-summary-pane-inner" v-bind="$attrs">
            <slot />
        </div>
    </div>
</template>

<style scoped></style>