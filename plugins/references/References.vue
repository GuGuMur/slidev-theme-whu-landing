<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useSlideContext } from '@slidev/client'
import { Cite } from '@citation-js/core'
import '@citation-js/plugin-doi'
import '@citation-js/plugin-bibtex' // 处理 bibtex
import '@citation-js/plugin-csl'
import { type SlideCitation, useCitationStore } from './store.ts'

const { $page } = useSlideContext()
const citationStore = useCitationStore()

const citations = computed(() => citationStore.getSlideCitations($page.value))
const sortedCitations = computed(() => [...citations.value].sort((a, b) => a.number - b.number))
const renderedByNumber = ref<Record<number, string>>({})

const templates = ['mla', 'apa']

function normalizeOutput(text: string): string {
  return text.replace(/\s+/g, ' ').trim()
}

/**
 * 格式化 DOI 为 GB/T 7714 标准
 */
async function formatDoi(doi: string | undefined, url: string | undefined): Promise<string> {
    if (!doi) return url || ' ';

    // 1. 预处理 DOI (确保格式正确)
    let cleanDoi = doi.trim();
    if (/^\d{4}\.\d{4,5}$/.test(cleanDoi)) {
        cleanDoi = `10.48550/arXiv.${cleanDoi}` // 转换为 DOI 格式
    }
    for (const template of templates) {
        try {
            const cite = await Cite.async(cleanDoi);

            // 2. 渲染文献
            const rendered = cite.format('bibliography', {
                format: 'text',
                template: template,
                lang: 'en-US', // 强制使用中文语言包，这会处理 "et al." 和 "等"
                prepend: (entry: any) => {
                    // 如果不需要原本库带的 [1] 编号，可以在这里处理
                    return '';
                }
            });

            let normalized = normalizeOutput(rendered);

            // 3. 针对性修护 (Fix: 部分 CSL 模板可能不会自动补全 [J])
            // 如果结果里没有 [J]、[M] 等标识且它是期刊，可以手动补充逻辑，
            // 但通常 gb-7714-2015 模板会自动处理这些。

            // 移除可能存在的开头数字编号，例如 "1. " 或 "[1] "
            normalized = normalized.replace(/^\[?\d+\]?\s*/, '');

            if (normalized) {
                return normalized;
            }
        } catch (e) {
            console.warn(`Template ${template} failed for DOI: ${cleanDoi}`, e);
        }
    }

    // 兜底返回
    return doi || url || ' ';
}
watch(
  citations,
  async (items: SlideCitation[], _, onCleanup) => {
    let cancelled = false
    onCleanup(() => {
      cancelled = true
    })

    if (!items.length) {
      renderedByNumber.value = {}
      return
    }

    const entries = await Promise.all(
      items.map(async (item) => {
        const rendered = await formatDoi(item.doi, item.url)
        console.log(rendered);
        return [item.number, rendered] as const
      })
    )

    if (!cancelled) {
      renderedByNumber.value = Object.fromEntries(entries)
    }
  },
  { immediate: true, deep: true }
)
</script>

<template>
    <div v-if="sortedCitations.length > 0" class="border-t border-gray-100 pt-1">
        <div v-for="item in sortedCitations" :key="item.number"
            class="reference-row text-[10px] leading-tight text-gray-700 mb-0.5">
            <span class="font-mono">[{{ item.number }}]</span>
            {{ renderedByNumber[item.number] || item.doi || item.url || " " }}
        </div>
    </div>
</template>

<style scoped>
</style>
