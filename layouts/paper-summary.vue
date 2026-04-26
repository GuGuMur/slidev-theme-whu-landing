<script setup lang="ts">
import BaseLayout from './base.vue'
import ColBlock from '../components/ColBlock.vue';
import MyCite from '../plugins/references/MyCite.vue';

const props = defineProps({
    chapter: { type: String, default: '' },
    section: { type: String, default: '' },
    paperABBR: { type: String, default: '' },
    paperDOI: { type: String, default: '' },
})


</script>
<template>
    <BaseLayout :chapter="chapter" :section="section">

        <template #header>
            <div class="flex items-stretch h-full w-full border-primary">
                <div
                    class="bg-primary text-white flex items-center justify-center px-8 font-bold text-xl min-w-[150px]">
                    {{ chapter }}
                </div>
                <div class="flex-grow flex items-center px-6 text-black font-bold text-xl">
                    {{ section }}
                </div>
            </div>
        </template>
        <template #main>
            <div class="p-4 w-full h-full flex flex-col min-h-0">
                <div v-if="$slots.up" class="w-full shrink-0">
                    <slot name="up" />
                </div>

                <div class="flex-1 min-h-0 grid grid-cols-12 gap-6 items-stretch">

                    <div class="col-span-4 h-full flex flex-col min-h-0">
                        <ColBlock>
                            <template #title>
                                <MyCite :doi="props.paperDOI" :label="paperABBR">
                                    {{ paperABBR }}
                                </MyCite>
                            </template>
                            <div class="h-full">
                                <slot name="summary" />
                            </div>
                        </ColBlock>
                    </div>

                    <div class="col-span-8 h-full flex flex-col overflow-auto min-h-0">
                        <slot name="details" />
                    </div>

                </div>
            </div>

        </template>

        <template #footer>
            <div v-if="$slots.bottom" class="w-full shrink-0 px-2">
                <slot name="bottom" />
            </div>
            <div class="flex flex-col w-full">
                <div class="px-2 py-1">
                    <References />
                </div>
            </div>
        </template>
    </BaseLayout>
</template>