<script setup lang="ts">
import { ref, provide, watch, computed, InjectionKey } from 'vue'
import { useSlideContext } from '@slidev/client'

interface TabProps {
    type?: 'line' | 'card'
    size?: 'small' | 'medium' | 'large'
}

const props = withDefaults(defineProps<TabProps>(), {
    type: 'line',
    size: 'medium'
})

// 定义子节点数据结构
export interface TabInfo {
    name: string
    tab: string
    click?: number
}

// 1. 获取 Slidev 上下文
const { $slidev } = useSlideContext()
const currentClick = computed(() => $slidev?.nav?.clicks || 0)

// 2. 状态维护 (数据结构)
const tabs = ref<TabInfo[]>([])
const activeName = ref<string | number>('')

// 3. 定义并提供注册接口
const registerTab = (tab: TabInfo) => {
    if (!tabs.value.find(t => t.name === tab.name)) {
        tabs.value.push(tab)
        // 如果是第一个 Tab，或者其 click === 0，设为默认激活
        if (tabs.value.length === 1 || tab.click === currentClick.value) {
            activeName.value = tab.name
        }
    }
}

const unregisterTab = (name: string) => {
    tabs.value = tabs.value.filter(t => t.name !== name)
}

provide('SlidevTabsContext', {
    activeName,
    registerTab,
    unregisterTab
})

// 4. 监听 Slidev 点击事件，自动切换 Tab
watch(currentClick, (newClick) => {
    const targetTab = tabs.value.find(t => t.click === newClick)
    if (targetTab) {
        activeName.value = targetTab.name
    }
}, { immediate: true })

// 支持手动点击切换
const handleTabClick = (name: string) => {
    activeName.value = name
}

// 尺寸样式映射
const sizeClass = computed(() => {
    switch (props.size) {
        case 'small': return 'text-sm py-1 px-3'
        case 'large': return 'text-lg py-3 px-5'
        default: return 'text-base py-2 px-4'
    }
})
</script>

<template>
    <div class="w-full flex flex-col my-tabs-container">
        <div class="flex border-b border-gray-200 dark:border-gray-700 mb-4 relative">
            <div v-for="tab in tabs" :key="tab.name" @click="handleTabClick(tab.name)"
                class="cursor-pointer transition-all duration-300 relative -mb-[1px] whitespace-nowrap" :class="[
                    sizeClass,
                    activeName === tab.name
                        ? 'text-[var(--slidev-theme-primary)] font-medium border-b-2 border-[var(--slidev-theme-primary)]'
                        : 'text-gray-500 dark:text-gray-400 border-b-2 border-transparent hover:text-gray-700 dark:hover:text-gray-200'
                ]">
                {{ tab.tab }}
            </div>
        </div>

        <div class="relative flex-1">
            <slot />
        </div>
    </div>
</template>