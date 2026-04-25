<script setup lang="ts">
import BaseLayout from './base.vue'
import References from '../plugins/references/References.vue'


const props = defineProps({
    section: { type: String, default: '' },
    title: { type: String, default: '' },
})

</script>

<template>
    <BaseLayout>
        <template #header>
            <div class="flex items-stretch h-full w-full border-primary">
                <div class="bg-primary text-white flex items-center px-8 font-bold text-xl min-w-[150px]">
                    {{ section }}
                </div>
                <div v-if="title" class="flex-grow flex items-center px-6 text-black font-bold text-xl">
                    {{ title }}
                </div>
            </div>
        </template>

        <template #main>
            <div class="p-4 w-full h-full">
                <slot />
            </div>
        </template>

        <template #footer>
            <div class="flex flex-col w-full">
                <div class="px-8 py-1">
                    <References />
                </div>
            </div>
        </template>
    </BaseLayout>
</template>
