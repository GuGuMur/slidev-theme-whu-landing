---
theme: ../
addons: 
  # - naive
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

* 123
* 789

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
layout: paper-summary
chapter: 痛点调研
section: 推理与决策过程的缺陷
paperABBR: MedEinst
paperDOI: "2601.06636"
---

::up::

<Hint align="left" title="依赖统计捷径">

模型倾向于依赖常见疾病的统计学先验概率，忽视患者特定的反常证据，导致不典型病例误诊

</Hint>

::summary::

* 针对统计捷径构建反事实鉴别诊断基准
* 通过候选数据过滤，自然语言重叙述，差分特征重写以生成陷阱案例，模型间验证构造数据集
* 提出了<Mark>循证因果推理智能体</Mark>，使用基线准确性、稳健准确率、偏置陷阱率三个指标进行评估；将推理过程从概率匹配转变为证据核实，并反复迭代，积累知识库


::details::


<NTabs type="line" size="small">
  <NTabPane name="chap1" tab="第一章">
    我这辈子最疯狂的事，发生在我在 Amazon
    当软件工程师的时候，故事是这样的：<br><br>
    那时我和女朋友住在一起，正在家里远程工作。忽然同事给我发来了紧急消息：”我们的服务出现了
    SEV 2 级别的故障！需要所有的人马上协助！“我们组的应用全挂掉了。<br><br>
    当我还在费力的寻找修复方法的时候，忽然闻到隔壁房间的的焦味，防火报警器开始鸣叫。
  </NTabPane>
  <NTabPane name="chap2" tab="第二章">
    “威尔！着火了！快来帮忙！”我听到女朋友大喊。现在一个难题在我面前——是恢复一个重要的
    Amazon 服务，还是救公寓的火。<br><br>
    我的脑海中忽然出现了 Amazon
    著名的领导力准则”客户至上“，有很多的客户还依赖我们的服务，我不能让他们失望！所以着火也不管了，女朋友喊我也无所谓，我开始
    debug 这个线上问题。
  </NTabPane>
  <NTabPane name="chap3" tab="第三章">
    但是忽然，公寓的烟味消失，火警也停了。我的女朋友走进了房间，让我震惊的是，她摘下了自己的假发，她是
    Jeff Bezos（Amazon 老板）假扮的！<br><br>
    “我对你坚持顾客至上的原则感到十分骄傲”，说完，他递给我一张五美金的亚马逊礼品卡，从我家窗户翻了出去，跳上了一辆
    Amazon 会员服务的小货车，一溜烟离开了。<br><br>虽然现在我已不在 Amazon
    工作，但我还是非常感激在哪里学的到的经验，这些经验我终身难忘。你们同意么？
  </NTabPane>
</NTabs>

::bottom::

<Hint align="left" title="依赖统计捷径" class="w-full">

模型倾向于依赖常见疾病的统计学先验概率，忽视患者特定的反常证据，导致不典型病例误诊

</Hint>


---
layout: cover
---

敬请各位老师批评指正

谢谢
