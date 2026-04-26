<script setup>
defineProps({
    title: {
        type: String,
        default: '步骤标题'
    },
    icon: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <div class="flex flex-col items-center flex-1 min-w-0">
        <div class="relative w-full h-12 flex items-center justify-center bg-primary text-white font-bold px-6"
            style="clip-path: polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%, 5% 50%);">
            <div class="flex items-center gap-2 truncate">
                <div v-if="icon" :class="icon" class="text-xl shrink-0" />
                <span class="text-sm md:text-base whitespace-nowrap">{{ title }}</span>
            </div>
        </div>

        <div class="mt-4 w-full px-4 text-left">
            <slot />
        </div>
    </div>
</template>

<style scoped>
</style>