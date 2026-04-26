---
theme: ../
aspectRatio: 16/9
---

测试：首页

---
src: ./plugs/toc.md
# active: 1
---

---
layout: content-flex
chapter: Chapter
section: Section
---

test

<div>
  A <NButton strong type="info"> Slidev </NButton> addon that brings <NButton
  strong type="primary" > Naive UI </NButton> components to your slide show.
</div>

<ColBlock title="Test">

1. <MyCite doi="2603.06902" suffix="test">深度学习在计算机视覺中的应用</MyCite> 展示了神经网络的强大能力
2. <MyCite doi="2512.08286">BERT 预训练模型</MyCite> 推动了 NLP 的发展

- 123
- 789

</ColBlock>

<Hint icon="i-carbon-idea" title="提示">
  多模态模型通常需要在大规模图文对数据集上进行预训练。
</Hint>

<Hint align="right" title="数据源">
  来自武汉大学 2024 视觉计算实验室公开报告
</Hint>

<Hint align="left" icon="i-carbon-warning">
  注意：此推理过程在高分辨率图像下可能存在显存溢出风险。
</Hint>

<Block icon="i-carbon-chart-cluster-bar">
  更强的 SFDA <br>模型
</Block>

---
layout: my-image
chapter: 领域现状
---

![](./assets/view/image.png)

---
layout: paper-summary
chapter: 痛点调研
section: 推理与决策过程的缺陷
paperABBR: MedEinst
paperDOI: "2601.06636"
clicks: 2
---

::up::

<Hint align="left" title="依赖统计捷径" class="w-full">

模型倾向于依赖常见疾病的统计学先验概率，忽视患者特定的反常证据，导致不典型病例误诊

</Hint>

::summary::

- 针对统计捷径构建反事实鉴别诊断基准
- 通过候选数据过滤，自然语言重叙述，差分特征重写以生成陷阱案例，模型间验证构造数据集
- 提出了<Mark>循证因果推理智能体</Mark>，使用基线准确性、稳健准确率、偏置陷阱率三个指标进行评估；将推理过程从概率匹配转变为证据核实，并反复迭代，积累知识库

::details::

<MyTab type="line" size="small">
  <MyTabPane name="构建数据集" tab="构建数据集" :click="0">
      123
      <img src="./assets/MedEinst/1.png"/>
  </MyTabPane>
  
  <MyTabPane name="智能体" tab="智能体" :click="1">
      <img src="./assets/MedEinst/2.png"/>
<div class="flex gap-1">

<Chevron title="术前分期" icon="carbon:analytics">

* 肿瘤分期评估
* 可切除性评估
* 多学科会诊

</Chevron>

<Chevron title="术中风险" icon="i-carbon-warning">

* 患者情况分析
* 手术风险评估
* 胰腺风险预测

</Chevron>

</div>
  </MyTabPane>
  
  <MyTabPane name="实验结果" tab="实验结果" :click="2">
      <img src="./assets/MedEinst/3.png"/>
  </MyTabPane>
</MyTab>

::bottom::

---
layout: cover
---

敬请各位老师批评指正

谢谢
