---
theme: ./
addons:
  # - slidev-addon-typst
  # - slidev-component-progress
  # - slidev-addon-naive
  # - slidev-addon-stem
aspectRatio: 16/9
---

# References 插件完整示例

_演示和测试页面_

---

# 示例 1：基础引用 - Transformer 模型

Transformer 架构 <MyCite doi="10.48550/arXiv.1706.03762">在 2017 年的"Attention Is All You Need"记者中首次提出</MyCite>，这项工作彻底改变了自然语言处理领域。

该架构的核心创新是 <MyCite doi="10.48550/arXiv.1706.03762">使用自注意力機制替代循环网络</MyCite>，这使得模型可以更有效地处理长序列。

---

# 示例 2：多个不同来源的引用

现代深度学习的发展基于多项关键工作：

1. <MyCite doi="10.1038/nature12373">深度学习在计算机视覺中的应用</MyCite> 展示了神经网络的强大能力
2. <MyCite doi="10.1609/aaai.v35i1.16166">BERT 预训练模型</MyCite> 推动了 NLP 的发展
3. <MyCite doi="https://arxiv.org">更多论文可在 arXiv 查阅</MyCite>

---

# 示例 3：长文本中的多个引用

在实践中，我们发现 <MyCite doi="10.48550/arXiv.1706.03762">基于 Transformer 的模型</MyCite> 具有以下优势：

- 并行计算能力强
- 长序列建模效果好  
- 易于扩展到大规模预训练

同时，<MyCite doi="https://huggingface.co">许多团队在 Hugging Face 上共享预训练模型</MyCite>，降低了使用门槛。

最新的研究 <MyCite doi="10.1038/s41586-020-2012-7">表明规模对模型性能有显著影响</MyCite>，这促使包括 OpenAI、Google 等团队投入资源开发更大的模型。

---

# 引用列表

所有该页面的引用将按照 GB/T 7714 标准格式显示：

<References />

---

# 示例 4：多页面独立引用

第二个页面可以有自己的引用集合，这些引用独立于其他页面。

本页的引用包括 <MyCite doi="10.48550/arXiv.1706.03762">Transformer 论文</MyCite> 和 <MyCite doi="10.1038/nature12373">深度学习应用</MyCite>。

---

# 第二页的引用列表

<References />

---

# 高级用法：在 Vue 组件中使用 Store

可以在自定义 Vue 组件中直接访问引用 Store：

```vue
<script setup>
import { inject } from 'vue';

const citeStore = inject('citeStore');

const handleGetAllCites = () => {
  const allCites = citeStore.getAllCites();
  console.log('All citations:', allCites);
};

const handleClearCites = () => {
  citeStore.clear();
};
</script>

<template>
  <div>
    <button @click="handleGetAllCites">
      Show All Citations
    </button>
    <button @click="handleClearCites">
      Clear Citations
    </button>
  </div>
</template>
```

---

# 网站样式演示

注意 <MyCite doi="10.48550/arXiv.1706.03762">超链接编号的样式</MyCite>：

- 使用上标格式 `<sup>`
- 蓝色文字 (`#0066cc`)
- 鼠标悬停时显示下划线
- 可在全局 CSS 中自定义

详见 `cite.vue` 中的 `<style scoped>` 部分。

---

# 故障排除

常见问题和解决方案：

1. **"No references found"**
   - 检查 `<MyCite>` 是否在 `<References>` 之前
   - 确认 DOI 或 URL 参数正确设置

2. **"Error loading reference"**
   - DOI 可能无效或无法在线解析
   - 检查网络连接
   - 查看浏览器控制台错误信息

3. **样式不符合预期**
   - 在全局 CSS 中覆盖 `.my-cite-number` 样式
   - 查看 `cite.vue` 了解默认样式

---

# 扩展和定制

可能的扩展方向：

- ✨ **自定义格式器** - 支持 APA、Chicago 等其他引用标准
- 🔗 **引用链接** - 点击超链接跳转到参考文献
- 💾 **导出功能** - 将参考文献导出为 BibTeX、RIS 等格式
- 🌐 **多语言支持** - 支持更多语言的作者名称格式
- 📊 **引用统计** - 显示引用热度和相关推荐

---

# 许可证和致谢

- 插件遵循 MIT 许可证
- 感谢 citation-js 社区
- 基于 GB/T 7714 国家标准

**完成！** 🎉

现在你可以在自己的演示中使用 References 插件了。
