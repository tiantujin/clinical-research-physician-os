export type KnowledgeCard = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  links: string[];
  body: string;
};

export type Module = {
  id: string;
  number: string;
  title: string;
  description: string;
  cards: KnowledgeCard[];
};

const protocolStudies = [
  "KEYNOTE-355",
  "KEYNOTE-522",
  "IMpassion130",
  "ASCENT",
  "ASCENT-04",
  "BEGONIA",
  "TROPION-Breast01",
  "DESTINY-Breast04",
  "DESTINY-Breast06",
  "NeoTRIP",
  "CheckMate 7FL",
  "TROPION-Breast02"
];

function slugifyStudy(name: string) {
  const slug = name.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-|-$/g, "");
  return slug || "item";
}

function makeProtocolCards(study: string): KnowledgeCard[] {
  const id = slugifyStudy(study);
  return [
    {
      id: `${id}-quick-card`,
      title: `${study} 速览卡片`,
      summary: `${study} 的 CRP 快速阅读卡，聚焦研究问题、人群、设计、终点和一句话 Sponsor 判断。`,
      tags: ["Protocol Dissection", "Quick Card", "Breast Cancer", study],
      links: [`${id}-deep-dive`, "protocol-review", "endpoint-evaluation", "tnbc-landscape"],
      body: `
## 研究背景
- 研究处于乳腺癌关键治疗格局中，需结合疾病阶段、既往治疗、biomarker和可及治疗解读。

## 研究假设
- 目标治疗策略相较当前标准治疗可改善关键疗效终点，并保持可管理安全性。

## 研究人群
- 需重点识别分期、治疗线、biomarker状态、既往暴露和器官功能要求。

## 分组设计
- 快速看随机化比例、对照选择、是否盲法、是否允许交叉和后续治疗记录。

## 主要终点
- 判断主要终点是否匹配疾病阶段：早期常看 pCR/EFS，晚期常看 PFS/OS。

## 样本量与统计
- 关注 alpha 分配、power、事件数、分层因素和关键亚组是否预设。

## Sponsor一句话判断
- 该研究适合训练“方案设计是否服务于注册问题”的 Sponsor 思维。

[[${study} 深度拆解]] 可用于逐项评估方案优化和审评关注点。
`
    },
    {
      id: `${id}-deep-dive`,
      title: `${study} 深度拆解`,
      summary: `${study} 的系统化 protocol dissection：从背景、人群、终点、统计到 Sponsor 和审评员视角。`,
      tags: ["Protocol Dissection", "Deep Dive", "Sponsor", "Reviewer", study],
      links: [`${id}-quick-card`, "phase-iii-interview", "reviewer-benefit-risk", "medical-writing-clinical-study-protocol"],
      body: `
## 1. 研究背景
- 明确疾病阶段、标准治疗、关键未满足需求和竞品压力。

## 2. 研究假设
- 说明目标药物或联合策略为何可能改善 PFS、OS、pCR、EFS、ORR 或 DoR。

## 3. 研究人群
- 关注治疗线、biomarker、器官功能、ECOG、脑转移、既往 IO/ADC/化疗暴露。

## 4. 入排标准
- 判断入排是否保护患者安全，同时避免过度筛选导致外推性不足。

## 5. 分组设计
- 分析对照是否符合当时标准治疗，治疗臂是否反映真实临床可执行性。

## 6. 随机化与分层因素
- 常见分层包括 PD-L1、疾病阶段、既往治疗、地理区域、转移部位和新辅助反应。

## 7. 治疗方案
- 看剂量、疗程、减量、停药、联合药物选择和后续治疗记录。

## 8. 主要终点
- 评价终点是否能支持注册、临床采用和医学沟通。

## 9. 次要终点
- OS、PFS、ORR、DoR、QoL、安全性和 biomarker 分析要服务于完整 benefit-risk。

## 10. 统计假设
- 重点看效应量是否有临床意义，alpha是否合理分配，亚组是否预设。

## 11. 样本量设计
- 样本量要兼顾事件数、入组可行性、随访成熟度和关键亚组解释力。

## 12. 研究亮点
- 训练点包括人群富集、终点选择、联合策略、对照合理性和全球多中心可执行性。

## 13. 研究局限
- 可能包括 OS 不成熟、后续治疗影响、biomarker cut-off争议、亚组样本量不足或安全随访不足。

## 14. 如果我是Sponsor，我会如何优化
- 提前设计 biomarker strategy、后续治疗收集、亚洲/中国人群样本、DMC规则和安全管理计划。

## 15. 如果我是审评员，我会关注什么
- 关注疗效稳健性、统计控制、数据完整性、亚组一致性、安全可管理性和标签适应证边界。

## 16. 对CRP工作的启发
- CRP阅读 protocol 时要同时站在研究者、Sponsor、统计师和审评员的位置。
`
    }
  ];
}

const sponsorCases: KnowledgeCard[] = [
  {
    id: "sponsor-adc-io-phase3",
    title: "是否启动 ADC+IO 三期研究？",
    summary: "训练用户综合疾病需求、机制互补、早期信号、竞品压力和安全风险作出启动决策。",
    tags: ["Sponsor Decision", "ADC+IO", "Phase III", "TNBC"],
    links: ["adc-io-strategy", "phase-transition", "reviewer-benefit-risk"],
    body: `
## 疾病背景
- TNBC复发转移后进展快，Post-IO与ADC序贯后仍存在显著未满足需求。

## 当前治疗格局
- IO、化疗、PARP抑制剂和TROP2/HER2 ADC共同构成竞争格局。

## 未满足临床需求
- 需要提高长期控制率，同时避免联合治疗毒性使真实世界可用性下降。

## 目标药物机制
- ADC提供肿瘤细胞杀伤和抗原释放，IO可能放大免疫反应。

## 已有数据
- 若早期ORR、DoR和PFS趋势一致，且安全可管理，可考虑进入注册研究。

## 竞品情况
- 需比较同类ADC、IO联合和新型靶点在同线治疗的进展。

## 监管可行性
- Phase III需有清晰对照、预设biomarker策略和严格安全管理。

## 商业价值
- 若定位一线或高未满足人群，价值较高；若治疗线拥挤需强调差异化。

## 风险点
- ILD、骨髓抑制、irAE叠加；OS可能受后续治疗影响。

## 推荐决策
- 有条件启动：先完成剂量优化和安全run-in，再启动分层明确的全球III期。

## 专家点评
- Sponsor不能只被ORR吸引，必须确认获益持续性、可管理安全性和注册可解释性。
`
  },
  {
    id: "sponsor-post-io-rechallenge",
    title: "Post-IO TNBC 是否继续开发 PD-1 rechallenge？",
    summary: "判断免疫再挑战是否有生物学合理性、可识别人群和可接受注册路径。",
    tags: ["Sponsor Decision", "Post-IO", "PD-1", "TNBC"],
    links: ["post-io-strategy", "pd1", "single-arm"],
    body: `
## 疾病背景
- 越来越多TNBC患者在早期或一线晚期已暴露IO，后续是否再次使用IO成为开发问题。

## 当前治疗格局
- Post-IO人群可选择化疗、ADC、PARP或临床试验。

## 未满足临床需求
- IO耐药后缺少明确可预测再获益的策略。

## 目标药物机制
- PD-1 rechallenge需依赖免疫微环境重塑、联合药物诱导抗原释放或耐药机制逆转。

## 已有数据
- 若仅有小样本ORR信号，应优先做转化研究和随机II期。

## 推荐决策
- 暂不直接进入III期；建议补充转化研究、ctDNA/免疫微环境分析和随机探索研究。

## 专家点评
- Rechallenge项目最怕“机制故事强、患者选择弱”。Sponsor要先回答谁会再次获益。
`
  },
  {
    id: "sponsor-her2-low-rwe",
    title: "是否针对 HER2-low 人群设计真实世界研究？",
    summary: "评估真实世界证据在HER2-low治疗路径、检测一致性和特殊人群中的价值。",
    tags: ["Sponsor Decision", "HER2-low", "RWE"],
    links: ["her2-low-landscape", "rwe", "causal-methods"],
    body: `
## 疾病背景
- HER2-low改变了传统HER2阴性乳腺癌分类，但检测一致性和治疗序贯仍有争议。

## 当前治疗格局
- HER2 ADC正在改变后线和更早线治疗策略。

## 未满足临床需求
- 真实世界中IHC 1+和2+/ISH-判读、再检测、治疗序贯和安全管理数据不足。

## 推荐决策
- 启动RWE：采用前瞻性登记或高质量回顾性队列，预设终点和偏倚控制方法。

## 专家点评
- RWE适合回答临床路径和外部有效性，但不能把混杂严重的比较当成确证疗效。
`
  },
  {
    id: "sponsor-orr-pfs-discordance",
    title: "ORR提高但PFS不显著，是否继续推进？",
    summary: "训练对替代终点、缓解持续性、后续治疗和统计稳健性的Sponsor判断。",
    tags: ["Sponsor Decision", "ORR", "PFS", "Go/No-Go"],
    links: ["orr", "pfs-os", "case-endpoint-failure"],
    body: `
## 已有数据
- ORR明显提高，但PFS HR接近1且置信区间跨越无效线。

## 风险点
- 缓解短暂、进展评估偏倚、影像频率差异或后续治疗不平衡。

## 推荐决策
- 不直接推进III期。先分析DoR、depth of response、关键亚组、影像审阅一致性和PFS事件质量。

## 专家点评
- Sponsor决策要问：这个ORR是否能转化成患者真正获益？
`
  },
  {
    id: "sponsor-safety-signal-hold",
    title: "安全性信号增加时，是否暂停入组？",
    summary: "用严重性、频率、可逆性、机制和替代治疗判断是否暂停开发或修改方案。",
    tags: ["Sponsor Decision", "Safety", "Enrollment Hold"],
    links: ["signal-detection", "safety-review", "rmp"],
    body: `
## 已有数据
- 多中心出现同类严重AE，发生时间与暴露相关，部分需住院。

## 风险点
- 若机制合理且严重事件聚集，应立即升级医学和安全委员会。

## 推荐决策
- 暂停新入组并保留已入组患者医学评估；同步更新风险最小化措施、ICF和protocol。

## 专家点评
- 暂停入组不是项目失败，而是保护患者和证据可信度的Sponsor责任。
`
  }
];

const reviewerCases: KnowledgeCard[] = [
  {
    id: "reviewer-benefit-risk",
    title: "Benefit-Risk Assessment 审评框架",
    summary: "站在FDA/NMPA视角，系统判断疗效、风险、证据可靠性和标签边界。",
    tags: ["Reviewer Mind", "Benefit-Risk", "FDA", "NMPA"],
    links: ["global-regulatory", "endpoint-evaluation", "rmp"],
    body: `
## 审评员会问
- 临床需求是否真实且迫切。
- 疗效大小是否有临床意义。
- 安全风险是否可预测、可监测、可管理。
- 统计结论是否稳健，亚组是否一致。
- 数据完整性是否支持标签。

## 可能结论
- 批准、要求补充资料、增加随访、修改适应证、增加安全性管理措施或拒绝批准。
`
  },
  {
    id: "reviewer-pfs-positive-os-immature",
    title: "PFS阳性但OS不成熟",
    summary: "判断PFS获益是否足以支持批准，以及是否需要OS随访和上市后承诺。",
    tags: ["Reviewer Mind", "PFS", "OS"],
    links: ["pfs-os", "survival-analysis", "reviewer-benefit-risk"],
    body: `
## 申请适应证
- 晚期乳腺癌特定治疗线。

## 疗效数据
- PFS达到统计显著，OS数据尚不成熟。

## 安全性数据
- 需要确认毒性是否抵消PFS获益。

## 审评结论
- 可考虑批准或附条件批准，但要求继续OS随访、提交更新分析并明确标签人群。

## 给Sponsor的建议
- 强化后续治疗收集、亚组一致性分析和患者报告结局。
`
  },
  {
    id: "reviewer-single-arm-orr",
    title: "ORR较高但单臂研究",
    summary: "判断高ORR能否支持加速批准，重点看DoR、疾病背景和外部证据。",
    tags: ["Reviewer Mind", "Single Arm", "ORR"],
    links: ["single-arm", "orr", "accelerated-pathways"],
    body: `
## 临床需求
- 后线无标准治疗或现有治疗疗效很低。

## 疗效数据
- ORR较高且DoR较长时更有说服力。

## 统计可靠性
- 单臂研究无法充分控制选择偏倚，需关注独立评审和完整随访。

## 审评结论
- 可能支持加速批准，但通常要求确认性随机研究。
`
  },
  {
    id: "reviewer-safety-risk",
    title: "安全性风险明显",
    summary: "疗效可观但严重毒性增加时，审评重点转向风险最小化和适应证边界。",
    tags: ["Reviewer Mind", "Safety", "RMP"],
    links: ["case-safety", "rmp", "safety-review"],
    body: `
## 安全性数据
- 严重AE、死亡、停药和剂量调整均需与对照比较。

## Benefit-Risk判断
- 若疾病严重且疗效显著，可通过限制人群、加强监测和标签警示管理风险。

## 审评结论
- 可能要求增加安全性管理措施、限制适应证或补充随访。
`
  },
  {
    id: "reviewer-subgroup-inconsistency",
    title: "亚组获益不一致",
    summary: "亚组差异可能来自真实生物学、样本量不足或随机波动。",
    tags: ["Reviewer Mind", "Subgroup", "Statistics"],
    links: ["case-statistics", "stratification", "alpha-beta"],
    body: `
## 亚组分析
- 关注是否预设、交互检验、方向一致性和生物学合理性。

## 审评结论
- 如关键亚组无获益，可能要求修改适应证或增加说明。
`
  },
  {
    id: "reviewer-china-data",
    title: "中国人群数据不足",
    summary: "中国样本量不足时，需判断疗效安全是否可外推，以及是否需要桥接或上市后研究。",
    tags: ["Reviewer Mind", "China", "NMPA"],
    links: ["global-regulatory", "ich-m4", "reviewer-benefit-risk"],
    body: `
## 数据完整性
- 关注中国入组例数、暴露量、PK、安全性和疗效方向是否与全球一致。

## 审评结论
- 可能要求补充中国数据、上市后研究或限制标签。
`
  },
  {
    id: "reviewer-surrogate-accelerated",
    title: "替代终点能否支持加速批准",
    summary: "替代终点要能合理预测临床获益，并有确认性研究计划。",
    tags: ["Reviewer Mind", "Surrogate Endpoint", "Accelerated Approval"],
    links: ["accelerated-pathways", "endpoint-evaluation", "case-endpoint-failure"],
    body: `
## Benefit-Risk判断
- 替代终点支持批准的前提是疾病严重、未满足需求高、疗效幅度明确且风险可管理。

## 审评结论
- 可附条件批准，但必须要求确认性研究验证真实临床获益。
`
  }
];

const medicalWritingTemplates = [
  "Protocol Synopsis",
  "Clinical Study Protocol",
  "Investigator Brochure, IB",
  "Informed Consent Form, ICF",
  "Clinical Study Report, CSR",
  "Statistical Analysis Plan, SAP",
  "Medical Monitoring Plan",
  "Safety Management Plan",
  "DSUR",
  "PSUR/PBRER",
  "Investigator Letter",
  "Study Newsletter",
  "Medical Review Memo",
  "Benefit-Risk Assessment Report"
];

function makeWritingCard(name: string): KnowledgeCard {
  const id = `medical-writing-${slugifyStudy(name)}`;
  return {
    id,
    title: `${name} 模板`,
    summary: `${name} 的用途、适用场景、核心结构、写作要点、常见错误和CRP审阅重点。`,
    tags: ["Medical Writing", "Template", name],
    links: ["core-documents", "protocol-review", "csr"],
    body: `
## 文件用途
- 用标准化医学写作把研究设计、执行、结果、安全或沟通内容形成可审阅、可追溯文件。

## 适用场景
- 适用于临床开发、研究执行、安全沟通、注册申报或研究者沟通相关工作。

## 核心结构
- 背景与目的。
- 关键医学和方法学信息。
- 数据、风险或行动建议。
- 版本、责任人、审批和追踪记录。

## 写作要点
- 先回答文件要解决的决策问题。
- 使用一致术语，避免营销化表达。
- 证据、结论和行动建议要可追溯。

## 常见错误
- 把研究假设写成已证实结论。
- 关键风险缺少缓释措施。
- 数据来源、版本或cut-off date不清楚。

## 示例模板
- Title / 标题：
- Purpose / 目的：
- Background / 背景：
- Key Content / 核心内容：
- Medical Assessment / 医学评估：
- Action Items / 后续行动：

## CRP需要重点关注
- 患者安全、终点解释、获益风险、protocol一致性和监管可接受性。
`
  };
}

const toolkitTemplates = [
  ["KOL拜访记录模板", "KOL Visit Note"],
  ["研究者会议PPT框架", "Investigator Meeting Deck"],
  ["Site Initiation Visit医学培训PPT框架", "SIV Medical Training Deck"],
  ["SAE医学讨论记录模板", "SAE Medical Discussion Note"],
  ["Medical Monitoring Note模板", "Medical Monitoring Note"],
  ["Data Review Query模板", "Data Review Query"],
  ["Safety Review Meeting Minutes模板", "Safety Review Meeting Minutes"],
  ["Protocol Deviation医学评估模板", "Protocol Deviation Medical Assessment"],
  ["Study FAQ模板", "Study FAQ"],
  ["Investigator Communication Email模板", "Investigator Communication Email"],
  ["临床研究月度医学总结模板", "Monthly Medical Study Summary"],
  ["竞品研究追踪表模板", "Competitive Trial Tracker"]
];

function makeToolkitCard([cn, en]: string[]): KnowledgeCard {
  return {
    id: `toolkit-${slugifyStudy(en)}`,
    title: `${cn} / ${en}`,
    summary: `${cn}，包含可复制结构、填写示例、适用场景和注意事项。`,
    tags: ["Toolkit", "Bilingual Template", en],
    links: ["kol-communication", "medical-training", "safety-review", "data-review"],
    body: `
## 适用场景
- 用于医学部与临床开发团队的日常协作、中心沟通、会议记录或研究执行支持。

## 可复制模板
- 中文标题：${cn}
- English Title: ${en}
- Study / 项目：
- Date / 日期：
- Owner / 负责人：
- Background / 背景：
- Key Discussion / 关键讨论：
- Medical Assessment / 医学判断：
- Action Items / 行动项：
- Due Date / 截止日期：

## 填写示例
- Study：Phase III TNBC ADC+IO study
- Key Discussion：中心询问既往IO暴露患者是否可入组。
- Medical Assessment：根据protocol排除标准，若既往IO用于早期治疗且满足washout，可进一步确认复发时间和毒性恢复情况。
- Action Items：CRP提供书面澄清，CRA更新site FAQ。

## 注意事项
- 保持事实、判断和行动项分开。
- 涉及安全、入排和方案偏离时要可追溯。
- 对外沟通避免超出protocol或标签。
`
  };
}

const oncologyLandscapeCards: KnowledgeCard[] = [
  {
    id: "tnbc-landscape",
    title: "TNBC治疗格局",
    summary: "围绕早期、晚期、一线、后线和Post-IO场景建立TNBC开发地图。",
    tags: ["Oncology Landscape", "TNBC"],
    links: ["tnbc", "keynote-355", "ascent"],
    body: `
## 作用机制与治疗类别
- 化疗、IO、ADC、PARP、AKT/PI3K和抗血管生成构成主要策略。

## 关键研究
- KEYNOTE-355、KEYNOTE-522、IMpassion130、ASCENT、BEGONIA、TROPION系列。

## 未满足需求
- Post-IO、ADC序贯、脑转移、biomarker阴性和真实世界安全管理。

## 对CRP岗位的启发
- TNBC是训练终点选择、biomarker策略和联合毒性管理的理想疾病模型。
`
  },
  {
    id: "adc-development-map",
    title: "ADC开发地图",
    summary: "从靶点、payload、linker和毒性谱理解ADC临床开发。",
    tags: ["ADC", "TROP2", "HER2", "HER3"],
    links: ["adc", "trop2-adc", "her3-adc"],
    body: `
## 作用机制
- ADC通过抗体识别靶点并递送细胞毒payload，疗效窗口取决于靶点表达和药物设计。

## 研究设计
- 常见从后线单药到前线联合，再到新辅助或辅助场景。

## 安全性特点
- 骨髓抑制、胃肠道反应、ILD、肝毒性和眼毒性需按产品机制管理。

## 未来方向
- ADC+IO、ADC序贯、低表达靶点、人群富集和耐药机制研究。
`
  },
  {
    id: "io-development-map",
    title: "IO开发地图",
    summary: "PD-1/PD-L1到新型免疫检查点，核心是患者选择和联合策略。",
    tags: ["IO", "PD-1", "PD-L1"],
    links: ["pd1", "pneumonitis-case", "adc-io-strategy"],
    body: `
## 作用机制
- 通过解除免疫抑制增强抗肿瘤免疫。

## 关键问题
- biomarker、治疗线、既往IO暴露、联合毒性和长期获益。

## CRP启发
- IO研究需要把疗效曲线、irAE管理和患者沟通一起设计。
`
  },
  {
    id: "adc-io-strategy",
    title: "ADC+IO联合策略",
    summary: "ADC诱导肿瘤抗原释放与IO免疫激活可能互补，但毒性和人群选择是成败关键。",
    tags: ["ADC+IO", "Combination", "TNBC"],
    links: ["sponsor-adc-io-phase3", "adc-development-map", "io-development-map"],
    body: `
## 研究设计
- 需要安全run-in、明确剂量、预设毒性管理和biomarker探索。

## 竞品对比
- 重点比较PFS、OS、ORR、DoR、停药率和严重AE。

## 未来方向
- 寻找最适合联合的人群，而不是简单把两个有效药相加。
`
  },
  {
    id: "post-io-strategy",
    title: "Post-IO治疗策略",
    summary: "Post-IO人群需要区分原发耐药、继发耐药和早期IO后复发。",
    tags: ["Post-IO", "TNBC"],
    links: ["sponsor-post-io-rechallenge", "pd1", "adc-development-map"],
    body: `
## 未满足需求
- IO进展后缺少标准化最优序贯。

## 开发方向
- ADC、靶向、免疫再挑战、免疫微环境重塑和转化研究富集。
`
  },
  {
    id: "her2-low-landscape",
    title: "HER2-low治疗格局",
    summary: "HER2-low推动乳腺癌分类从二分法转向连续表达和ADC敏感性思维。",
    tags: ["HER2-low", "ADC", "RWE"],
    links: ["sponsor-her2-low-rwe", "adc-development-map", "rwe"],
    body: `
## 关键挑战
- IHC判读一致性、动态表达、再活检和治疗序贯。

## 未来开发
- 更早线、更低表达、HER2-ultralow和真实世界证据。
`
  },
  {
    id: "trop2-adc",
    title: "TROP2 ADC专题",
    summary: "TROP2 ADC是TNBC和HR+/HER2-乳腺癌的重要开发方向。",
    tags: ["TROP2", "ADC"],
    links: ["adc", "ascent", "tropion-breast01-deep-dive"],
    body: `
## 作用机制
- TROP2在多种上皮肿瘤表达，ADC通过payload递送发挥杀伤。

## 关键研究
- ASCENT、TROPION-Breast01、TROPION-Breast02。

## 安全性特点
- 中性粒细胞减少、腹泻、恶心、口腔炎或ILD风险需按产品区分。
`
  },
  {
    id: "her3-adc",
    title: "HER3 ADC专题",
    summary: "HER3 ADC适合探索耐药后人群和HER家族信号相关疾病。",
    tags: ["HER3", "ADC"],
    links: ["adc-development-map", "oncology-dev"],
    body: `
## 未满足需求
- HER3表达和耐药机制复杂，需要可靠检测和人群选择。

## CRP启发
- 新靶点开发要同时设计转化研究和伴随诊断策略。
`
  },
  {
    id: "parp-topic",
    title: "PARP抑制剂专题",
    summary: "PARP抑制剂围绕BRCA/HRD人群开发，关键是遗传检测和序贯策略。",
    tags: ["PARP", "BRCA", "HRD"],
    links: ["tnbc-landscape", "endpoint-evaluation"],
    body: `
## 机制
- 利用DNA修复缺陷产生合成致死。

## 开发方向
- 与IO、ADC或DNA损伤药物联合，以及早期高危人群强化治疗。
`
  },
  {
    id: "akt-pi3k-topic",
    title: "AKT/PI3K通路专题",
    summary: "AKT/PI3K通路开发依赖分子筛选、毒性管理和联合内分泌/化疗策略。",
    tags: ["AKT", "PI3K", "Targeted Therapy"],
    links: ["tnbc-landscape", "global-regulatory"],
    body: `
## 机制
- PI3K/AKT通路参与细胞增殖、存活和耐药。

## CRP关注
- biomarker阳性定义、代谢毒性、皮疹和联合方案可执行性。
`
  },
  {
    id: "vegf-vegfr-topic",
    title: "VEGF/VEGFR抗血管生成专题",
    summary: "抗血管生成治疗需平衡PFS获益和出血、高血压、蛋白尿等风险。",
    tags: ["VEGF", "VEGFR", "Anti-angiogenesis"],
    links: ["safety-review", "rmp"],
    body: `
## 安全性特点
- 高血压、蛋白尿、出血、血栓、伤口愈合不良和胃肠穿孔。

## CRP启发
- 抗血管生成方案的纳排标准和停药规则要特别清楚。
`
  },
  {
    id: "rwe-oncology-topic",
    title: "肿瘤真实世界研究专题",
    summary: "真实世界研究适合补充治疗路径、特殊人群、安全性和外部有效性证据。",
    tags: ["RWE", "Oncology", "Real World"],
    links: ["rwe", "causal-methods", "sponsor-her2-low-rwe"],
    body: `
## 研究设计
- 登记研究、回顾性队列、外部对照和患者报告结局。

## 关键限制
- 混杂、缺失、终点定义不一致和随访不足。
`
  }
];

const portfolioCards: KnowledgeCard[] = [
  "我的论文",
  "我的基金",
  "我的课题设计",
  "我的研究路线图",
  "我的审稿回复",
  "我的会议汇报",
  "我的综述",
  "我的研究想法池",
  "我的面试案例库",
  "我的职业转型记录"
].map((title) => ({
  id: `portfolio-${slugifyStudy(title)}`,
  title,
  summary: `${title} 的个人转型资产管理页，可沉淀摘要、文件、标签、状态、时间线和反思。`,
  tags: ["Portfolio", "Career Asset", title],
  links: ["personal-kb", "why-pharma", "crp-role"],
  body: `
## 字段模板
- 标题：
- 摘要：
- 文件链接或本地文件名：
- 标签：
- 完成状态：Idea / Draft / Submitted / Accepted / Reused in Interview
- 时间线：
- 个人反思：

## 导出用途
- PDF汇报材料。
- 简历项目经历。
- 面试案例素材。
- 职业转型复盘。

## 建议
- 每个项目都用“我的角色、问题、方法、结果、反思”五句话沉淀。
`
}));

const commonInterview = `
## 面试高频问法
- 你如何把医学判断转化为方案设计建议？
- 面对研究者质疑，你如何用证据和监管语言沟通？
- 如果数据趋势与医学预期不一致，你会先查什么？

## CRP视角
- 先定义患者、干预、对照、终点和风险。
- 再判断证据是否足以支持下一阶段开发或监管沟通。
- 最后把医学判断写入 protocol、SAP、IB、CSR 或安全性评估。
`;

export const modules: Module[] = [
  {
    id: "drug-dev",
    number: "01",
    title: "新药研发全景图",
    description: "从药物发现到上市后医学活动，建立 CRP 对资产生命周期的全局语言。",
    cards: [
      {
        id: "drug-lifecycle",
        title: "从 Drug Discovery 到 Post Marketing",
        summary: "把研发阶段、关键文件、监管节点和医学部参与内容放在一张全景图中理解。",
        tags: ["Drug Discovery", "IND", "NDA/BLA", "Lifecycle"],
        links: ["ind-package", "protocol-review", "ich-e6-r3"],
        body: `
## 阶段地图
- Drug Discovery：明确靶点、作用机制、候选化合物和初步成药性。
- Preclinical：用药理、毒理和药代数据回答“是否可以给人用”。
- IND：向监管机构提交首次人体研究依据，核心是风险可控。
- Phase I：确认安全性、耐受性、PK/PD 和剂量探索。
- Phase II：验证概念、优化剂量、选择患者人群和终点。
- Phase III：用注册级证据证明获益风险。
- NDA/BLA：提交完整质量、非临床、临床和统计证据。
- Post Marketing：真实世界、安全监测、适应症扩展和生命周期管理。

## 医学部参与内容
- 参与 TPP/CDP 讨论，确认临床未满足需求和差异化价值。
- 审阅 protocol、IB、ICF、CSR 的医学准确性。
- 支持 KOL 咨询、研究者会议、医学培训和安全信号解释。
- 把上市后真实世界问题反馈给研发策略。

[[IND申报包]]、[[Protocol Review]] 和 [[ICH E6(R3) 总览]] 是贯穿全生命周期的基础节点。
${commonInterview}
`
      },
      {
        id: "ind-package",
        title: "IND申报包",
        summary: "IND 的本质是用已有证据支持首次或下一步人体研究的合理性和可控性。",
        tags: ["IND", "Regulatory", "Clinical Plan"],
        links: ["drug-lifecycle", "global-regulatory", "ich-m4"],
        body: `
## IND核心文件
- Investigator's Brochure：研究者了解药物已知信息的医学依据。
- Protocol：研究目的、设计、终点、安全管理和统计框架。
- CMC资料：质量和生产一致性。
- 非临床资料：安全药理、毒理、遗传毒性、生殖毒性等。
- 临床开发计划：说明从早期到注册路径的医学逻辑。

## 医学总监关注点
- 起始剂量是否有充分 NOAEL/MABEL 依据。
- 纳排标准是否保护高风险患者。
- DLT、停药、减量、SAE上报和紧急揭盲是否清楚。
- 终点是否能回答下一阶段 Go/No-Go 问题。

## 常见面试题
- IND 里 CRP 最应该关注哪些内容？
- 如何判断首次人体研究起始剂量是否合理？
- 如果 preclinical 发现肝毒性信号，protocol 应该如何体现？
`
      },
      {
        id: "phase-transition",
        title: "从 Phase II 到 Phase III 的决策",
        summary: "Phase II/III 转换是医学、统计、运营和商业判断共同收敛的节点。",
        tags: ["Phase II", "Phase III", "Go/No-Go"],
        links: ["power-sample-size", "rct", "endpoint-evaluation"],
        body: `
## 关键问题
- 疗效信号是否稳定，是否有临床意义，而不只是统计显著。
- 安全性是否支持更大样本、更长暴露和更广人群。
- 剂量是否明确，是否存在暴露-反应关系。
- Phase III 终点是否被监管机构和临床实践接受。

## CRP输出
- Evidence synthesis：整合疗效、安全、PK/PD 和竞品证据。
- Risk register：列出关键医学风险和缓释措施。
- Protocol concept：明确 PICO、终点、分层、统计假设和医学监测计划。

[[随机对照试验 RCT]]、[[样本量与 Power]]、[[如何评价临床终点]] 是这一步的核心工具。
`
      }
    ]
  },
  {
    id: "regulatory",
    number: "02",
    title: "全球法规体系",
    description: "建立 FDA、EMA、NMPA、PMDA 的比较框架，便于持续更新和面试表达。",
    cards: [
      {
        id: "global-regulatory",
        title: "FDA / EMA / NMPA / PMDA 比较",
        summary: "不同地区路径不同，但共同关注获益风险、数据质量和可解释性。",
        tags: ["FDA", "EMA", "NMPA", "PMDA"],
        links: ["ind-package", "ich-m4", "ich-e6-r3"],
        body: `
## 比较维度
- 审批流程：临床试验申请、上市申请、审评沟通和批准后承诺。
- IND/CTA要求：非临床支持、CMC成熟度、临床风险控制。
- 上市申请：NDA/BLA/MAA 的证据完整性和模块化提交。
- 特殊通道：突破性治疗、优先审评、附条件批准、加速批准等。

## 医学部如何使用
- 和注册团队对齐证据缺口。
- 在 KOL 沟通中准确表达“监管认可的证据”与“临床有吸引力的证据”的差别。
- 准备 advisory board 或 HA meeting 的医学论证。
`
      },
      {
        id: "accelerated-pathways",
        title: "特殊审评通道",
        summary: "特殊通道不是降低证据标准，而是为严重疾病和未满足需求加快证据生成与审评互动。",
        tags: ["Breakthrough", "Priority Review", "附条件批准"],
        links: ["global-regulatory", "oncology-dev", "case-endpoint-failure"],
        body: `
## 判断逻辑
- 疾病是否严重或危及生命。
- 是否存在明确未满足临床需求。
- 早期数据是否显示显著疗效优势。
- 是否能通过确认性研究补足证据。

## CRP面试表达
- 加速批准常依赖替代终点，但替代终点需要与临床获益有合理关联。
- 附条件批准后，确认性研究设计和上市后安全监测同样关键。
- 医学部要避免把“快速通道”误读成“低质量证据也可接受”。
`
      },
      {
        id: "fda-regulatory",
        title: "FDA监管沟通与加速路径",
        summary: "FDA IND、Type B Meeting、EOP2、Pre-NDA、AdCom和加速批准路径的CRP学习卡。",
        tags: ["FDA", "Regulatory", "Accelerated Approval"],
        links: ["global-regulatory", "reviewer-benefit-risk", "phase-iii-interview"],
        body: `
## 学习目标
- 理解FDA临床开发沟通节点。
- 能解释Pre-IND、EOP2、Pre-NDA和AdCom对Protocol设计的影响。
`
      },
      {
        id: "ema-regulatory",
        title: "EMA监管体系",
        summary: "EMA Scientific Advice、PRIME、Conditional MA、CHMP和RMP的CRP学习卡。",
        tags: ["EMA", "CHMP", "RMP"],
        links: ["global-regulatory", "rmp", "dsur-psur"],
        body: `
## 学习目标
- 理解EMA对获益风险、RMP和条件批准的关注点。
`
      },
      {
        id: "nmpa-cde-regulatory",
        title: "NMPA/CDE与中国临床开发",
        summary: "中国加入ICH后的MRCT、桥接、中国样本量、沟通交流会议和附条件批准。",
        tags: ["NMPA", "CDE", "China", "MRCT"],
        links: ["global-regulatory", "reviewer-china-data", "ich-e6-r3"],
        body: `
## 学习目标
- 理解中国人群数据、CDE沟通、MRCT和桥接策略在CRP工作中的意义。
`
      },
      {
        id: "pmda-regulatory",
        title: "PMDA与日本开发考虑",
        summary: "日本PMDA关注本地人群、PK、安全性、剂量和全球同步开发。",
        tags: ["PMDA", "Japan", "MRCT"],
        links: ["global-regulatory", "ich-suite"],
        body: `
## 学习目标
- 理解日本参与全球MRCT的常见考虑。
`
      }
    ]
  },
  {
    id: "ich",
    number: "03",
    title: "ICH知识体系",
    description: "围绕 E6(R3) 建立 GCP、质量、统计、安全和通用技术文件的知识树。",
    cards: [
      {
        id: "ich-e6-r3",
        title: "ICH E6(R3) 总览",
        summary: "2025版 E6(R3) 强调 Quality by Design、风险管理、数字化和患者中心化研究。",
        tags: ["ICH E6(R3)", "GCP", "QbD", "RBQM"],
        links: ["investigator-role", "sponsor-role", "medical-monitor", "rbqm", "decentralized-trial"],
        body: `
## 产生背景
- 传统 GCP 过度依赖文件核查，容易把质量理解成事后补救。
- 现代临床试验越来越复杂，包括去中心化、电子数据源、真实世界数据和平台研究。
- E6(R3) 的核心转向是把质量设计进研究，而不是在研究结束后补文件。

## 核心框架
- Quality by Design：识别关键质量因素，优先保护受试者安全和结果可靠性。
- Proportionality：监管和质量活动要与研究风险相匹配。
- RBQM：基于风险的质量管理，从风险识别、缓释、监测到持续改进。
- Patient Centricity：让流程、终点和访视安排尽量符合患者现实。
- Digitalization：允许合理使用电子系统、远程访视、电子同意和数据流。

## 真实应用
- protocol synopsis 阶段就讨论关键风险，而不是启动后才做 monitoring plan。
- 对关键终点、知情同意、SAE上报、随机化和主要数据源设置重点监控。
- 对低风险、非关键流程减少无意义核查，把资源投入关键质量因素。

[[Investigator职责]]、[[Sponsor职责]]、[[Medical Monitor职责]]、[[RBQM]] 和 [[Decentralized Trial]] 构成 E6(R3) 学习主干。
`
      },
      {
        id: "investigator-role",
        title: "Investigator职责",
        summary: "研究者对受试者医疗照护、知情同意、方案执行和数据真实性承担一线责任。",
        tags: ["Investigator", "GCP", "Site"],
        links: ["ich-e6-r3", "essential-documents", "site-communication"],
        body: `
## 核心职责
- 保护受试者权益、安全和福祉。
- 确保知情同意真实、充分、可追溯。
- 按 protocol 执行研究，及时记录偏离并解释医学原因。
- 及时识别和上报 AE/SAE，配合安全随访。
- 保证源数据和 CRF 一致、完整、可核查。

## CRP沟通重点
- 对研究者不是“检查者姿态”，而是共同保护患者和数据质量。
- 复杂纳排、剂量调整、AE归因和终点评估要提前培训。
`
      },
      {
        id: "sponsor-role",
        title: "Sponsor职责",
        summary: "申办方负责研究设计、质量体系、医学监督、安全管理、供应和数据可信度。",
        tags: ["Sponsor", "Quality", "Oversight"],
        links: ["ich-e6-r3", "rbqm", "medical-monitor"],
        body: `
## Sponsor必须保证
- 研究设计科学、伦理且可执行。
- 有清晰职责分工、供应商监管和质量管理体系。
- 安全性信息被及时收集、评估、报告和沟通。
- 数据管理、统计分析和报告符合预先计划。

## 医学部角色
- 提供医学判断，识别 protocol 中会影响安全或解释性的风险。
- 参与 DMC/SMC 资料准备和安全趋势解读。
- 对 CSR、publication 和医学沟通保持证据一致性。
`
      },
      {
        id: "medical-monitor",
        title: "Medical Monitor职责",
        summary: "Medical Monitor 是研究期间持续医学判断的枢纽。",
        tags: ["Medical Monitor", "Safety", "Data Review"],
        links: ["safety-review", "data-review", "sae"],
        body: `
## 典型工作
- 回答研究中心医学问题，包括纳排、合并用药、AE处理、剂量调整。
- 审阅 SAE narrative、AESI、死亡病例和实验室异常趋势。
- 参与医学数据审阅，识别不合理疗效评估、缺失关键病史或偏离。
- 对需要升级的问题发起 cross-functional 讨论。

## 加分表达
- Medical Monitor 不替代研究者做医疗决定，但要提供 protocol 和产品相关医学解释。
- 好的 Medical Monitor 能把个案判断转化为系统风险管理。
`
      },
      {
        id: "essential-documents",
        title: "Essential Documents",
        summary: "Essential Documents 证明研究被合规地设计、执行、监查、分析和报告。",
        tags: ["TMF", "GCP", "Essential Documents"],
        links: ["ich-e6-r3", "protocol-review", "csr"],
        body: `
## 常见文件
- Protocol、IB、ICF、SAP、Monitoring Plan、Delegation Log。
- IRB/EC 批件、研究者资质、实验室认证、药物管理记录。
- Safety reports、DSUR、CSR、audit trail 和 TMF。

## 面试要点
- 文件不是形式主义，而是受试者保护和数据可信度的证据链。
- E6(R3) 语境下，文件管理也应按风险和关键性设置优先级。
`
      },
      {
        id: "rbqm",
        title: "RBQM",
        summary: "基于风险的质量管理把资源集中在影响受试者安全和主要终点可信度的因素上。",
        tags: ["RBQM", "Quality", "Risk"],
        links: ["ich-e6-r3", "protocol-review", "data-review"],
        body: `
## RBQM流程
- 识别关键数据和关键流程。
- 评估风险发生可能性、影响和可检测性。
- 设计缓释措施，如培训、系统校验、集中监测和触发式现场访视。
- 持续审查风险指标并调整策略。

## 案例
- 肿瘤研究中 RECIST 评估、随机化分层、死亡日期、后续治疗和 SAE 是关键数据。
- 对这些字段的监测优先级应高于低影响表格的逐项核查。
`
      },
      {
        id: "decentralized-trial",
        title: "Decentralized Trial",
        summary: "去中心化研究通过远程工具改善患者可及性，但必须保持数据质量和安全管理。",
        tags: ["DCT", "Digital Health", "Patient Centricity"],
        links: ["ich-e6-r3", "patient-centricity", "rwe"],
        body: `
## 应用场景
- 远程随访、电子知情同意、可穿戴设备、家庭采样、远程结局报告。

## 风险
- 身份确认、数据完整性、设备一致性、AE识别延迟和隐私保护。

## CRP判断
- 不是所有研究都适合 DCT。高风险给药、复杂影像评估或需要紧急处理的研究要谨慎。
`
      },
      {
        id: "patient-centricity",
        title: "Patient Centricity",
        summary: "患者中心化不是口号，而是把患者负担、真实路径和可坚持性纳入研究设计。",
        tags: ["Patient Centricity", "E6(R3)", "Design"],
        links: ["ich-e6-r3", "decentralized-trial", "protocol-review"],
        body: `
## 设计问题
- 访视频率是否过高。
- PRO是否能捕捉患者真正关心的症状和功能。
- 交通、采样、影像和长期随访是否会造成不必要负担。

## CRP应用
- 在 protocol concept 阶段就评估患者路径，而不是等入组慢时再补救。
- 对严重疾病研究，患者中心化不等于降低安全监测，而是让关键监测更可执行。
`
      },
      {
        id: "ich-suite",
        title: "ICH E8 / E9 / E2 / E3 / M4 速览",
        summary: "把质量、统计、安全报告、CSR 和通用技术文件放到一张 ICH 知识树里。",
        tags: ["ICH E8", "ICH E9", "ICH E2A", "ICH M4"],
        links: ["ich-e6-r3", "power-sample-size", "dsur-psur"],
        body: `
## 指南地图
- ICH E8：临床研究一般考虑，强调研究质量和关键质量因素。
- ICH E9：统计原则，包括 estimand、偏倚控制、分析集和敏感性分析。
- ICH E9(R1)：estimand 框架，回答 intercurrent events 后“到底估计什么治疗效应”。
- ICH E2A/E2D：临床安全数据管理和上市后安全数据管理。
- ICH E3：临床研究报告结构。
- ICH M4：CTD 格式，把质量、非临床和临床资料标准化。
`
      },
      {
        id: "ich-m4",
        title: "ICH M4 与 CTD",
        summary: "ICH M4 定义 CTD 通用技术文件结构，是全球注册申报资料组织的基础。",
        tags: ["ICH M4", "CTD", "NDA/BLA"],
        links: ["global-regulatory", "ind-package", "ich-suite"],
        body: `
## CTD模块
- Module 1：地区性行政和标签资料。
- Module 2：质量、非临床和临床综述/总结。
- Module 3：质量资料。
- Module 4：非临床研究报告。
- Module 5：临床研究报告。

## CRP关注
- 临床综述要讲清获益风险。
- 临床研究报告和安全汇总必须与 protocol、SAP 和数据库一致。
`
      }
    ]
  },
  {
    id: "trial-design",
    number: "04",
    title: "临床试验设计",
    description: "从传统 RCT 到 master protocol，训练医生用设计语言回答研发问题。",
    cards: [
      {
        id: "rct",
        title: "随机对照试验 RCT",
        summary: "RCT 是确认疗效的金标准，核心价值是最大限度降低已知和未知混杂。",
        tags: ["RCT", "Randomization", "Phase III"],
        links: ["randomization", "stratification", "phase-transition"],
        body: `
## 定义
- 将受试者随机分配到试验组和对照组，通过预设终点比较治疗效果。

## 优点
- 混杂控制强，证据等级高，注册接受度高。

## 局限
- 成本高、周期长、入组限制可能影响外推性。

## 肿瘤案例
- 一线 TNBC 可用 PFS/OS、ORR、DoR 和安全性共同解释治疗价值。
`
      },
      {
        id: "single-arm",
        title: "Single Arm 单臂研究",
        summary: "单臂研究适合罕见、无标准治疗或疗效非常显著的场景，但解释性弱。",
        tags: ["Single Arm", "ORR", "Rare Disease"],
        links: ["orr", "accelerated-pathways", "case-endpoint-failure"],
        body: `
## 适用场景
- 罕见肿瘤、后线治疗、缺乏可接受对照或早期疗效信号极强。

## 关键风险
- 历史对照不可比。
- 患者选择偏倚可能夸大疗效。
- ORR 不能总是代表 OS 获益。

## 面试表达
- 单臂研究的医学价值取决于疗效幅度、持续时间、安全性、疾病自然史和外部证据一致性。
`
      },
      {
        id: "master-protocol",
        title: "Basket / Umbrella / Platform / Master Protocol",
        summary: "Master Protocol 通过统一基础设施提高复杂肿瘤研发效率。",
        tags: ["Basket", "Umbrella", "Platform", "Adaptive"],
        links: ["adaptive-design", "tnbc", "rbqm"],
        body: `
## 类型
- Basket Trial：同一分子改变，跨癌种测试同一治疗。
- Umbrella Trial：同一癌种按 biomarker 分层测试多个治疗。
- Platform Trial：多个治疗臂可进入、退出或调整，适合长期学习型研究。

## CRP关注
- biomarker 检测质量。
- 多重性控制和适应性规则。
- 患者沟通复杂度。
- 中期分析对研究执行和解释的影响。
`
      },
      {
        id: "adaptive-design",
        title: "Adaptive Design",
        summary: "适应性设计允许在预设规则下修改研究，但必须保护 I 类错误和研究完整性。",
        tags: ["Adaptive", "Interim", "Alpha"],
        links: ["alpha-beta", "master-protocol", "power-sample-size"],
        body: `
## 可能调整
- 样本量重估。
- 剂量选择。
- 富集特定 biomarker 人群。
- 提前停止无效或显著有效治疗臂。

## 关键要求
- 调整规则必须预先写入 protocol/SAP。
- 独立 DMC 维护盲态和研究完整性。
- 统计方法要控制错误率。
`
      },
      {
        id: "non-inferiority",
        title: "Non-inferiority Trial 非劣效研究",
        summary: "用于证明新治疗不比对照差超过预设界值，常见于疗效相近但安全、便利或可及性更好的场景。",
        tags: ["Non-inferiority", "Trial Design"],
        links: ["rct", "alpha-beta", "endpoint-evaluation"],
        body: `
## 学习目标
- 理解非劣效界值、对照有效性、ITT/PP一致性和临床意义。
`
      },
      {
        id: "equivalence-trial",
        title: "Equivalence Trial 等效研究",
        summary: "用于证明两种治疗差异落在预设等效界值内，常用于生物类似药或桥接场景。",
        tags: ["Equivalence", "Trial Design"],
        links: ["non-inferiority", "analysis-sets"],
        body: `
## 学习目标
- 区分等效、非劣效和优效设计。
`
      },
      {
        id: "pragmatic-trial",
        title: "Pragmatic Trial 实用性临床试验",
        summary: "更贴近真实临床路径，用于评估治疗在常规实践中的效果。",
        tags: ["Pragmatic Trial", "RWE"],
        links: ["rwe", "rwe-oncology-topic"],
        body: `
## 学习目标
- 理解解释性研究与实用性研究的区别。
`
      },
      {
        id: "registry-study",
        title: "Registry Study 登记研究",
        summary: "系统收集特定疾病、人群或治疗的真实世界数据，常用于安全性、治疗路径和长期结局。",
        tags: ["Registry", "RWE", "Real World"],
        links: ["rwe", "causal-methods"],
        body: `
## 学习目标
- 理解登记研究的数据质量、偏倚和CRP可用场景。
`
      }
    ]
  },
  {
    id: "statistics",
    number: "05",
    title: "临床统计学",
    description: "医生版统计体系：少公式，多临床解释、多面试表达。",
    cards: [
      {
        id: "analysis-sets",
        title: "ITT / PP / mITT 分析集",
        summary: "分析集决定你在回答哪一个临床问题。",
        tags: ["ITT", "PP", "mITT"],
        links: ["rct", "endpoint-evaluation", "ich-suite"],
        body: `
## 临床解释
- ITT：按随机分组分析，接近真实临床决策，保护随机化。
- PP：只分析严格按方案完成者，容易有选择偏倚，但可支持敏感性分析。
- mITT：在 ITT 基础上增加合理限制，如至少接受一次治疗或有基线阳性 biomarker。

## 面试标准答案
- ITT 更保守、更符合随机化原则；PP 可用于验证结果稳健性，但不能替代主要分析。
`
      },
      {
        id: "randomization",
        title: "Randomization",
        summary: "随机化不是让两组每个特征完全相同，而是降低系统性偏倚。",
        tags: ["Randomization", "Bias"],
        links: ["rct", "stratification", "analysis-sets"],
        body: `
## 医生要懂的点
- 随机化让未知混杂因素平均分布的概率提高。
- 样本量越小，基线不平衡越常见。
- 不能因为某个基线变量不平衡就否定随机化，但要评估临床影响。
`
      },
      {
        id: "stratification",
        title: "Stratification",
        summary: "分层随机化用于平衡关键预后因素，尤其是强影响终点的变量。",
        tags: ["Stratification", "Prognostic Factor"],
        links: ["randomization", "tnbc", "rct"],
        body: `
## 常见分层因素
- 肿瘤研究：PD-L1状态、既往治疗线数、疾病负荷、地理区域、内脏转移。
- 感染研究：疾病严重程度、年龄、基础风险。

## 风险
- 分层因素太多会增加执行复杂度。
- 分层因素应有医学和统计依据，不是越多越好。
`
      },
      {
        id: "power-sample-size",
        title: "样本量与 Power",
        summary: "Power 是研究发现真实治疗差异的能力，样本量是假设、终点和可执行性的平衡。",
        tags: ["Power", "Sample Size", "Alpha", "Beta"],
        links: ["alpha-beta", "phase-transition", "adaptive-design"],
        body: `
## 临床解释
- Alpha：把无效治疗误判为有效的风险。
- Beta：漏掉真实有效治疗的风险。
- Power = 1 - Beta，通常希望 80% 或 90%。

## 面试表达
- 样本量不是统计师单独决定。CRP要确认假设差异是否有临床意义、入组是否可行、事件数是否现实。
`
      },
      {
        id: "alpha-beta",
        title: "Alpha / Beta",
        summary: "Alpha 控制误报，Beta 控制漏报，两者共同定义研究证据的可靠性。",
        tags: ["Alpha", "Beta", "Type I Error"],
        links: ["power-sample-size", "adaptive-design"],
        body: `
## 用一句话说清
- Alpha：药其实没效，但研究说有效。
- Beta：药其实有效，但研究没看出来。

## CRP关注
- 多终点、多亚组、中期分析和平台研究会影响错误率控制。
`
      },
      {
        id: "survival-analysis",
        title: "Kaplan-Meier / Cox Regression",
        summary: "生存分析的核心是时间到事件，读图要结合删失、随访成熟度和风险表。",
        tags: ["Kaplan-Meier", "Cox", "HR", "PFS", "OS"],
        links: ["pfs-os", "endpoint-evaluation", "tnbc"],
        body: `
## KM曲线怎么读
- 看曲线分离时间、持续性和尾部稳定性。
- 看风险表，尾部人数太少时解释要谨慎。
- 看删失是否均衡，随访是否成熟。

## HR怎么讲
- HR 是随时间发生事件风险的相对比较，不等同于中位生存期的简单比例。
`
      },
      {
        id: "causal-methods",
        title: "Propensity Score / IPTW / Competing Risk / Landmark",
        summary: "真实世界研究和非随机比较常用这些方法处理混杂、时间偏倚和竞争事件。",
        tags: ["PSM", "IPTW", "Competing Risk", "Landmark"],
        links: ["rwe", "case-statistics"],
        body: `
## 临床解释
- Propensity Score：估计患者接受某治疗的概率，用来平衡可观测混杂。
- IPTW：用权重构造近似平衡的人群。
- Competing Risk：其他事件会阻止目标事件发生，例如非肿瘤死亡影响复发分析。
- Landmark Analysis：固定一个时间点，避免 immortal time bias。

## 局限
- 只能处理已测量、已纳入模型的混杂，不能替代随机化。
`
      },
      {
        id: "rwe",
        title: "真实世界证据 RWE",
        summary: "RWE 可补充随机研究外部有效性、安全性和人群覆盖，但需要严谨控制偏倚。",
        tags: ["RWE", "RWD", "External Validity"],
        links: ["causal-methods", "decentralized-trial", "global-regulatory"],
        body: `
## 常见数据源
- 电子病历、医保数据库、登记研究、患者报告结局和可穿戴设备。

## 医学价值
- 观察真实诊疗路径、长期安全性、特殊人群和治疗序贯。

## 局限
- 非随机比较易受混杂和选择偏倚影响。
- 关键变量缺失、终点定义不一致和随访不完整会削弱证据可信度。
`
      }
    ]
  },
  {
    id: "pv",
    number: "06",
    title: "药物警戒（PV）",
    description: "从 AE/SAE/SUSAR 到 DSUR/PSUR/RMP，用案例训练医学判断和上报决策。",
    cards: [
      {
        id: "ae-sae",
        title: "AE 与 SAE",
        summary: "AE 是不良事件，SAE 是满足严重性标准的不良事件，二者不是严重程度形容词的简单区别。",
        tags: ["AE", "SAE", "Safety"],
        links: ["sae", "causality", "medical-monitor"],
        body: `
## AE
- 用药后发生的任何不利医学事件，不要求已证明与药物相关。

## SAE
- 导致死亡、危及生命、住院或住院延长、永久残疾、先天异常，或其他重要医学事件。

## 面试优秀答案
- Serious 描述法规上报严重性，Severe 描述临床强度。重度头痛可能不是 SAE，轻度事件也可能因住院成为 SAE。
`
      },
      {
        id: "sae",
        title: "SAE处理流程",
        summary: "SAE处理要快、准、全：识别、医学评估、初报、随访、归因和风险升级。",
        tags: ["SAE", "Reporting", "Narrative"],
        links: ["ae-sae", "death-case", "medical-monitor"],
        body: `
## 流程
- 研究中心获知事件后按时限报告。
- 收集诊断、时间线、合并用药、既往史、实验室和影像。
- 判断 seriousness、expectedness、causality。
- 完成 narrative 和随访问题。
- 必要时升级到安全委员会、DMC 或监管报告。
`
      },
      {
        id: "causality",
        title: "关联性判断",
        summary: "关联性判断要综合时间关系、替代病因、去挑战/再挑战、已知机制和同类药物证据。",
        tags: ["Causality", "Medical Review"],
        links: ["sae", "pneumonitis-case", "liver-injury-case"],
        body: `
## 判断维度
- 时间关系是否合理。
- 事件是否符合药物机制或既往安全谱。
- 是否存在疾病进展、感染、合并用药等替代解释。
- 停药后是否改善，再用药后是否复发。

## CRP提醒
- 不能因为有替代病因就自动排除药物相关，也不能因为时间接近就自动判相关。
`
      },
      {
        id: "dsur-psur",
        title: "DSUR / PSUR / RMP / Signal Detection",
        summary: "研发期和上市后安全文件共同服务于持续获益风险评估。",
        tags: ["DSUR", "PSUR", "RMP", "Signal Detection"],
        links: ["ich-suite", "signal-detection", "rmp"],
        body: `
## 文件区别
- DSUR：研发期年度安全更新报告。
- PSUR/PBRER：上市后定期获益风险评估。
- RMP：风险管理计划，描述已知风险、潜在风险和风险最小化措施。

## 信号检测
- 看个案医学合理性，也看聚集趋势、严重性、去挑战/再挑战和生物学机制。
`
      },
      {
        id: "signal-detection",
        title: "Signal Detection",
        summary: "安全信号是对新风险或已知风险新变化的假设，需要医学和数据共同验证。",
        tags: ["Signal", "Safety", "PV"],
        links: ["dsur-psur", "case-safety", "causality"],
        body: `
## 信号来源
- 自发报告、临床试验、文献、真实世界数据和监管反馈。

## 判断维度
- 个案质量、时间关系、去挑战/再挑战、严重性、同类药物、发生率变化和生物学机制。

## 后续动作
- 加强监测、更新 IB/ICF/标签、修改 protocol、发研究者信或启动风险最小化措施。
`
      },
      {
        id: "rmp",
        title: "RMP 风险管理计划",
        summary: "RMP 描述重要已知风险、重要潜在风险、缺失信息和风险最小化措施。",
        tags: ["RMP", "Risk Management", "PV"],
        links: ["dsur-psur", "signal-detection", "safety-review"],
        body: `
## 核心内容
- Safety specification：重要风险和缺失信息。
- Pharmacovigilance plan：常规或额外药物警戒活动。
- Risk minimization measures：常规或额外风险最小化措施。

## 医学部价值
- 把安全风险翻译成医生能执行、患者能理解、监管能审评的行动。
`
      },
      {
        id: "medical-review",
        title: "PV Medical Review",
        summary: "PV医学审阅要把个案叙事、诊断证据、时间线和产品风险联系起来。",
        tags: ["Medical Review", "Narrative", "PV"],
        links: ["sae", "causality", "liver-injury-case"],
        body: `
## 审阅重点
- 诊断是否成立，是否有客观证据支持。
- 时间线是否完整，包括给药、停药、事件发生、处理和转归。
- 合并用药、基础疾病和替代病因是否充分讨论。
- 关联性和预期性判断是否与已知安全谱一致。
`
      },
      {
        id: "pneumonitis-case",
        title: "案例：免疫性肺炎",
        summary: "IO药物相关肺炎需要快速分级、排除感染和按指南处理。",
        tags: ["IO", "Pneumonitis", "Case"],
        links: ["causality", "pd1", "sae"],
        body: `
## 场景
- PD-1治疗患者出现咳嗽、气促、CT磨玻璃影。

## CRP处理
- 判断 CTCAE grade，排除感染、肿瘤进展、放射性肺炎和心衰。
- Grade 2 以上通常需要暂停治疗并考虑糖皮质激素。
- 若住院或危及生命，按 SAE 上报并完成随访。
`
      },
      {
        id: "death-case",
        title: "案例：患者死亡",
        summary: "死亡病例审阅要区分死亡事件、死亡原因、疾病进展和药物相关风险。",
        tags: ["Death", "SAE", "Narrative"],
        links: ["sae", "causality", "medical-monitor"],
        body: `
## 审阅重点
- 死亡日期、直接死因、根本死因和主要医学事件。
- 与末次给药、疾病进展、感染、出血、心血管事件和合并用药的时间关系。
- 是否满足 SUSAR 或其他加急报告标准。

## CRP处理
- 要求中心补充死亡证明、出院小结、影像、实验室和治疗经过。
- 对肿瘤进展死亡，也要确认是否存在治疗相关并发症。
`
      },
      {
        id: "liver-injury-case",
        title: "案例：严重肝损伤",
        summary: "ALT/AST、总胆红素、ALP和症状共同决定严重性、Hy's law风险和处理路径。",
        tags: ["DILI", "Liver Injury", "Case"],
        links: ["causality", "sae", "medical-review"],
        body: `
## 关键数据
- ALT/AST 升高倍数。
- 总胆红素是否升高。
- ALP 是否提示胆汁淤积。
- 症状、INR、住院和基础肝病。

## 医学判断
- 同步排查病毒性肝炎、胆道梗阻、肝转移、酒精和合并用药。
- 符合严重标准时按 SAE 管理，并评估是否需要停药或永久停药。
`
      }
    ]
  },
  {
    id: "crp-handbook",
    number: "07",
    title: "CRP工作手册",
    description: "按真实工作流组织 Protocol Review、Medical Monitoring、Safety/Data Review 和医学沟通。",
    cards: [
      {
        id: "protocol-review",
        title: "Protocol Review",
        summary: "Protocol Review 是 CRP 把医学逻辑嵌入研究执行的关键工作。",
        tags: ["Protocol", "Review", "Workflow"],
        links: ["drug-lifecycle", "rbqm", "endpoint-evaluation"],
        body: `
## 审阅顺序
- 研究问题：PICO 是否清晰。
- 人群：纳排是否服务于目标适应症，是否保护高风险患者。
- 干预：剂量、减量、停药、合并用药是否可执行。
- 终点：主要终点是否可被监管和临床接受。
- 安全：AE/SAE/AESI、实验室监测和紧急处理是否完整。

## 输出模板
- Major comments：影响患者安全、主要终点解释或注册可接受性的意见。
- Minor comments：措辞、流程和一致性修订。
- Open questions：需要跨部门或 KOL 讨论的问题。
`
      },
      {
        id: "safety-review",
        title: "Safety Review",
        summary: "Safety Review 从个案、趋势和机制三个层面判断是否出现新的风险。",
        tags: ["Safety Review", "AESI", "DMC"],
        links: ["medical-monitor", "dsur-psur", "causality"],
        body: `
## 固定议程
- SAE 和死亡病例列表。
- AESI 趋势和严重实验室异常。
- 暴露校正发生率。
- 与同类药物和既往研究比较。
- 是否需要 protocol amendment、IB update 或 investigator letter。
`
      },
      {
        id: "data-review",
        title: "Data Review",
        summary: "医学数据审阅不是查错别字，而是判断数据是否医学合理、是否支持终点解释。",
        tags: ["Data Review", "Query", "Endpoint"],
        links: ["medical-monitor", "rbqm", "survival-analysis"],
        body: `
## 审阅重点
- 关键病史是否支持入组。
- 终点评估时间点和结果是否一致。
- AE与合并用药、实验室异常、剂量调整是否逻辑闭环。
- 影像进展、死亡、后续治疗和停药原因是否一致。

## 好 query 的标准
- 问题具体、基于医学逻辑、能被中心回答，不诱导答案。
`
      },
      {
        id: "medical-training",
        title: "医学培训",
        summary: "医学培训把 protocol、疾病知识、安全管理和终点评估转化为团队共同语言。",
        tags: ["Training", "Medical Affairs", "Enablement"],
        links: ["protocol-review", "kol-communication", "site-communication"],
        body: `
## 培训对象
- CRA、CRC、研究者、MSL、市场准入和内部交叉职能团队。

## 内容结构
- 疾病背景和未满足需求。
- 药物机制和研究 rationale。
- Protocol关键执行点。
- AE/SAE、安全风险和升级路径。
- 常见问答和合规边界。
`
      },
      {
        id: "kol-communication",
        title: "KOL沟通与研究者会议",
        summary: "医学沟通要在科学、合规和商业目标之间保持清晰边界。",
        tags: ["KOL", "Investigator Meeting", "Training"],
        links: ["site-communication", "medical-training", "tnbc"],
        body: `
## 沟通原则
- 先听临床痛点，再讨论证据。
- 区分已获批信息、研究性信息和假设性策略。
- 对争议点记录出处，形成 action items。

## 研究者会议重点
- 疾病背景和研究 rationale。
- Protocol关键点和常见偏离。
- 安全管理、SAE上报和终点评估。
`
      },
      {
        id: "site-communication",
        title: "研究中心沟通",
        summary: "中心沟通的目标是减少误解、保护患者并保持方案一致执行。",
        tags: ["Site", "Communication"],
        links: ["investigator-role", "medical-monitor", "kol-communication"],
        body: `
## 常见问题
- 纳排边界病例。
- 合并用药是否允许。
- AE处理和是否继续给药。
- 影像评估窗口和进展确认。

## 注意事项
- 不替代研究者独立医疗判断。
- 所有关键医学意见要有记录，并与 protocol 保持一致。
`
      },
      {
        id: "query-review",
        title: "Query Review",
        summary: "训练CRP写出具体、不诱导、可回答的医学Query。",
        tags: ["Query", "Data Review", "CRP SOP"],
        links: ["data-review", "medical-monitor"],
        body: `
## 学习目标
- 判断哪些数据矛盾需要医学Query，哪些需要升级医学讨论。
`
      },
      {
        id: "medical-input-csr",
        title: "Medical Input to CSR",
        summary: "CRP如何审阅CSR中的疾病背景、研究设计、疗效、安全和医学解释。",
        tags: ["CSR", "Medical Writing", "CRP SOP"],
        links: ["csr", "data-review", "survival-analysis"],
        body: `
## 学习目标
- 学会从医学角度审阅CSR，不只检查格式。
`
      },
      {
        id: "medical-input-ib",
        title: "Medical Input to IB",
        summary: "CRP如何审阅IB中的非临床、临床、安全性和研究者指导信息。",
        tags: ["IB", "Medical Writing", "CRP SOP"],
        links: ["core-documents", "ich-e6-r3"],
        body: `
## 学习目标
- 理解IB如何支持研究者进行风险获益判断。
`
      },
      {
        id: "medical-input-sap",
        title: "Medical Input to SAP",
        summary: "CRP如何从临床意义角度审阅SAP的分析集、终点、缺失数据和敏感性分析。",
        tags: ["SAP", "Statistics", "CRP SOP"],
        links: ["analysis-sets", "survival-analysis", "alpha-beta"],
        body: `
## 学习目标
- 让统计分析回答临床问题，而不是只满足数学形式。
`
      },
      {
        id: "study-start-up",
        title: "Study Start-up 医学工作",
        summary: "研究启动阶段CRP如何支持中心培训、医学FAQ、安全培训和入排边界问题。",
        tags: ["Study Start-up", "SIV", "CRP SOP"],
        links: ["medical-training", "site-communication", "protocol-review"],
        body: `
## 学习目标
- 掌握启动前医学准备清单。
`
      },
      {
        id: "study-close-out",
        title: "Study Close-out 医学工作",
        summary: "研究关闭阶段CRP如何支持数据清理、CSR、publication和经验复盘。",
        tags: ["Study Close-out", "CSR", "CRP SOP"],
        links: ["data-review", "medical-input-csr"],
        body: `
## 学习目标
- 理解数据库锁定前后CRP的医学责任。
`
      }
    ]
  },
  {
    id: "interview",
    number: "08",
    title: "医学部面试宝典",
    description: "把高频题拆成标准答案、优秀答案和加分答案。",
    cards: [
      {
        id: "why-pharma",
        title: "为什么离开医院进入医学部",
        summary: "核心不是逃离临床，而是把临床经验放大到药物研发和患者群体层面。",
        tags: ["Interview", "Career"],
        links: ["crp-role", "protocol-review"],
        body: `
## 标准答案
- 我希望把临床经验用于更早、更系统的药物研发决策，影响更大患者群体。

## 优秀答案
- 在临床工作中我看到很多未满足需求，也意识到治疗选择背后依赖严谨的临床研究。医学部能让我连接临床问题、证据生成和产品价值。

## 加分答案
- 我理解药企医学岗位不是销售支持，而是证据、合规和医学判断的桥梁。我愿意从 protocol、安全、数据和 KOL 沟通这些基础工作做起。
`
      },
      {
        id: "crp-role",
        title: "为什么选择 CRP",
        summary: "CRP 的核心价值是把医生的疾病理解转化为临床开发质量。",
        tags: ["CRP", "Interview"],
        links: ["protocol-review", "medical-monitor", "why-pharma"],
        body: `
## 标准答案
- CRP 参与临床开发全过程，包括方案设计、医学监测、安全和数据解读。

## 优秀答案
- 我选择 CRP 是因为它最接近“从医学问题到证据生成”的全过程。医生背景让我更容易理解患者路径、终点意义和研究者沟通。

## 加分答案
- 我会用 GCP、统计和监管语言补足临床背景，把经验转化为可审评、可执行、可解释的研究方案。
`
      },
      {
        id: "ae-sae-interview",
        title: "AE与SAE区别怎么答",
        summary: "区分 AE/SAE、Serious/Severe 是医学部面试基础题。",
        tags: ["AE", "SAE", "Interview"],
        links: ["ae-sae", "sae"],
        body: `
## 标准答案
- AE 是用药后任何不利医学事件，不一定与药物相关。SAE 是满足死亡、危及生命、住院、残疾、先天异常或重要医学事件等严重性标准的 AE。

## 优秀答案
- Serious 是法规严重性，Severe 是临床强度，两者不是同义词。

## 加分答案
- 面对 SAE，我会先确认 seriousness、事件时间线、诊断依据、关联性、预期性和是否需要加急报告。
`
      },
      {
        id: "itt-pp-interview",
        title: "ITT与PP区别怎么答",
        summary: "回答要把统计概念落到临床研究解释性。",
        tags: ["ITT", "PP", "Interview"],
        links: ["analysis-sets"],
        body: `
## 标准答案
- ITT 按随机分组分析，PP 分析符合方案的人群。

## 优秀答案
- ITT 保护随机化，反映临床实际决策；PP 更容易受选择偏倚影响，但可支持结果稳健性。

## 加分答案
- 如果 ITT 和 PP 方向一致，证据更稳健；如果不一致，需要分析依从性、方案偏离、缺失数据和治疗交叉。
`
      },
      {
        id: "phase-iii-interview",
        title: "如何设计III期研究",
        summary: "用 PICO + endpoint + statistics + safety + operation 的结构回答。",
        tags: ["Phase III", "Interview", "Design"],
        links: ["rct", "power-sample-size", "endpoint-evaluation"],
        body: `
## 回答框架
- Population：目标患者、人群富集、分层因素。
- Intervention/Comparator：剂量、疗程和标准治疗。
- Outcome：主要终点、关键次要终点和安全终点。
- Statistics：假设差异、样本量、alpha、power、分析集。
- Operation：入组可行性、中心选择、质量管理和 DMC。

## 加分答案
- 我会先确认当前治疗格局和监管可接受终点，再决定 superiority、non-inferiority 或 enrichment strategy。
`
      },
      {
        id: "crp-interview-20",
        title: "20道CRP核心面试题",
        summary: "第一批可直接背诵和改写的CRP面试题，覆盖动机、GCP、PV、统计、Protocol和乳腺外科背景转型表达。",
        tags: ["Interview", "CRP", "Breast Surgeon", "TNBC"],
        links: ["why-pharma", "ae-sae", "analysis-sets", "protocol-review"],
        body: `
## 使用方式
- 先读普通答案，理解面试官考点。
- 再背优秀答案结构。
- 最后结合自己的临床、论文、课题或TNBC经验改写。
`
      },
      {
        id: "endpoint-evaluation",
        title: "如何评价临床终点",
        summary: "终点要同时满足临床意义、可测量性、监管接受度和可执行性。",
        tags: ["Endpoint", "Interview"],
        links: ["survival-analysis", "single-arm", "phase-iii-interview"],
        body: `
## 评价维度
- 临床意义：患者是否真正获益。
- 敏感性：能否在合理样本量和时间内观察到差异。
- 客观性：测量是否稳定，是否需要盲态独立评估。
- 监管接受度：是否已有先例或指南支持。
- 运营可行性：访视、影像、随访和缺失数据是否可控。
`
      }
    ]
  },
  {
    id: "oncology",
    number: "09",
    title: "肿瘤药物开发专区",
    description: "聚焦 IO、ADC、靶向治疗和 TNBC 关键研究，训练医学部视角点评。",
    cards: [
      {
        id: "oncology-dev",
        title: "肿瘤药物开发总览",
        summary: "肿瘤开发围绕患者分层、终点选择、组合策略和安全管理展开。",
        tags: ["Oncology", "IO", "ADC"],
        links: ["tnbc", "pd1", "adc", "survival-analysis"],
        body: `
## 主要方向
- IO：PD-1、PD-L1、CTLA-4、LAG-3、TIGIT。
- ADC：TROP2、HER2 等靶点，关注旁观者效应和毒性谱。
- 抗血管生成：VEGF/VEGFR。
- DNA修复与细胞周期：PARP、CDK4/6。

## CRP视角
- biomarker 是方案设计核心，不是附属分析。
- 终点选择要考虑治疗线、疾病进展速度和后续治疗影响。
- 安全管理要有机制化预案，如 IO肺炎、ADC间质性肺病、VEGF相关出血高血压。
`
      },
      {
        id: "pd1",
        title: "PD-1 / PD-L1 / CTLA-4 / LAG-3 / TIGIT",
        summary: "免疫检查点药物的开发重点是患者筛选、联合策略和免疫相关毒性管理。",
        tags: ["PD-1", "PD-L1", "CTLA-4", "LAG-3", "TIGIT"],
        links: ["pneumonitis-case", "tnbc", "oncology-dev"],
        body: `
## 医学机制
- PD-1/PD-L1 解除肿瘤微环境免疫抑制。
- CTLA-4 更偏早期 T 细胞激活调节。
- LAG-3/TIGIT 常作为联合和耐药机制探索靶点。

## 开发问题
- 哪些 biomarker 可预测获益。
- 联合化疗、抗血管或其他 IO 是否增加获益。
- irAE 是否可管理，是否影响长期用药。
`
      },
      {
        id: "adc",
        title: "ADC：TROP2 / HER2",
        summary: "ADC 设计要同时理解靶点表达、linker、payload、DAR和毒性谱。",
        tags: ["ADC", "TROP2", "HER2"],
        links: ["tnbc", "liver-injury-case", "oncology-dev"],
        body: `
## 关键概念
- 靶点：肿瘤表达和正常组织表达决定疗效窗口。
- Linker：影响稳定性和旁观者效应。
- Payload：常见为拓扑异构酶 I 抑制剂或微管抑制剂。
- DAR：药物抗体比，影响效力和毒性。

## CRP关注
- ILD、骨髓抑制、胃肠道反应、肝毒性和眼毒性等机制相关风险。
`
      },
      {
        id: "tnbc",
        title: "TNBC专区",
        summary: "TNBC 是 IO、ADC、PARP 和化疗组合策略高度集中的疾病模型。",
        tags: ["TNBC", "KEYNOTE-355", "ASCENT", "TROPION"],
        links: ["pd1", "adc", "keynote-355", "ascent"],
        body: `
## 研究地图
- KEYNOTE-355：一线晚期 TNBC，pembrolizumab + 化疗，关注 PD-L1 CPS 人群。
- KEYNOTE-522：早期高危 TNBC，新辅助/辅助 pembrolizumab 联合化疗。
- IMpassion130：atezolizumab + nab-paclitaxel，体现 biomarker 和伴随诊断复杂性。
- ASCENT：sacituzumab govitecan 后线 TNBC。
- ASCENT-04、BEGONIA、TROPION-Breast01：体现一线、联合和 ADC 竞争格局。

## 医学部视角点评
- 看终点：PFS/OS/pCR/EFS 是否匹配疾病阶段。
- 看人群：PD-L1、BRCA、HER2-low、治疗线和既往 IO/ADC 暴露。
- 看安全：IO irAE 与 ADC 毒性需要不同管理路径。
`
      },
      {
        id: "keynote-355",
        title: "KEYNOTE-355 研究解析",
        summary: "一线晚期 TNBC 中，PD-L1 CPS 富集人群是解释获益的关键。",
        tags: ["KEYNOTE-355", "PD-L1", "PFS", "OS"],
        links: ["tnbc", "survival-analysis", "stratification"],
        body: `
## 设计解析
- 人群：既往未接受晚期系统治疗的局部复发不可切除或转移性 TNBC。
- 干预：pembrolizumab + 化疗。
- 关键：按 PD-L1 CPS 分层解释疗效。

## CRP点评
- biomarker cut-off 直接影响标签、临床使用和医学沟通。
- OS结果解读要考虑后续治疗和免疫治疗交叉影响。
`
      },
      {
        id: "ascent",
        title: "ASCENT 研究解析",
        summary: "Sacituzumab govitecan 展示 ADC 在后线 TNBC 的临床价值。",
        tags: ["ASCENT", "TROP2", "ADC"],
        links: ["tnbc", "adc", "single-arm"],
        body: `
## 设计解析
- 人群：既往多线治疗的转移性 TNBC。
- 对照：医生选择治疗。
- 重点终点：PFS、OS、ORR 和安全性。

## 医学部视角
- 后线人群中 OS 获益更能体现临床意义。
- ADC 毒性管理和剂量调整策略决定真实世界可用性。
`
      }
    ]
  },
  {
    id: "cases",
    number: "10",
    title: "真实案例库",
    description: "用公开研究和审评思路训练方案失败、终点错误、安全和统计问题复盘。",
    cards: [
      {
        id: "case-endpoint-failure",
        title: "案例：终点选择错误",
        summary: "替代终点若不能预测真实临床获益，研究即使阳性也可能难以支持价值。",
        tags: ["Endpoint", "Failure", "Regulatory"],
        links: ["endpoint-evaluation", "accelerated-pathways", "single-arm"],
        body: `
## 背景
- 早期研究显示 ORR 提高，但缓解持续时间短，毒性明显。

## 问题
- ORR 被过度解读为长期获益。
- 缺少 OS/PFS 或患者报告结局支持。

## 正确做法
- 结合 DoR、PFS、OS、安全性和疾病自然史。
- 对加速批准路径要提前规划确认性研究。
`
      },
      {
        id: "case-statistics",
        title: "案例：统计学问题",
        summary: "亚组、缺失数据和多重比较常让研究结论看起来比实际更确定。",
        tags: ["Statistics", "Subgroup", "Multiplicity"],
        links: ["alpha-beta", "causal-methods", "analysis-sets"],
        body: `
## 常见问题
- 事后亚组被当成确定结论。
- 多个终点反复检验但未控制 alpha。
- 缺失数据与疗效或毒性相关。

## 经验总结
- 亚组发现应被视为假设生成，除非预设并有统计控制。
- CSR和医学沟通中要避免选择性呈现。
`
      },
      {
        id: "case-safety",
        title: "案例：安全性问题",
        summary: "个案风险如果出现机制一致和趋势聚集，就可能从 AE 变成信号。",
        tags: ["Safety", "Signal", "Review"],
        links: ["signal-detection", "safety-review", "causality"],
        body: `
## 背景
- 多个中心报告相似肺部毒性，部分严重且有时间关系。

## 分析
- 需要比较暴露校正发生率、背景发生率、同类药物、影像特征和再挑战结果。

## 正确做法
- 更新风险管理措施，必要时修改 protocol、ICF 和 IB。
`
      }
    ]
  },
  {
    id: "medical-english",
    number: "11",
    title: "医学英语专区",
    description: "常见英文术语、文件名、会议表达和中英对照，支持快速搜索。",
    cards: [
      {
        id: "core-documents",
        title: "Protocol / CSR / SAP / IB / ICF",
        summary: "理解核心文件英文全称和用途，是进入医学部的最低门槛。",
        tags: ["Protocol", "CSR", "SAP", "IB", "ICF"],
        links: ["protocol-review", "essential-documents"],
        body: `
## 中英对照
- Protocol：临床试验方案。
- CSR, Clinical Study Report：临床研究报告。
- SAP, Statistical Analysis Plan：统计分析计划。
- IB, Investigator's Brochure：研究者手册。
- ICF, Informed Consent Form：知情同意书。

## 常用表达
- protocol deviation：方案偏离。
- eligibility criteria：入排标准。
- primary endpoint：主要终点。
- treatment-emergent adverse event：治疗期间出现的不良事件。
`
      },
      {
        id: "csr",
        title: "CSR 临床研究报告",
        summary: "CSR 是完整呈现研究设计、执行、分析和结果的关键注册文件。",
        tags: ["CSR", "ICH E3", "Clinical Report"],
        links: ["core-documents", "essential-documents", "ich-suite"],
        body: `
## CSR包含
- 研究设计和方案修订。
- 受试者分布、方案偏离和分析集。
- 疗效、安全、药代和统计结果。
- 讨论和结论。

## CRP审阅重点
- 医学解释是否与数据一致。
- 安全叙述是否充分。
- 亚组和探索性分析是否被恰当限定。
`
      },
      {
        id: "safety-terms",
        title: "SAE / SUSAR / DMC / DSMB / MedDRA",
        summary: "安全和委员会术语常在面试、会议和邮件中高频出现。",
        tags: ["SAE", "SUSAR", "DMC", "DSMB", "MedDRA"],
        links: ["ae-sae", "dsur-psur"],
        body: `
## 中英对照
- SAE, Serious Adverse Event：严重不良事件。
- SUSAR, Suspected Unexpected Serious Adverse Reaction：可疑且非预期严重不良反应。
- DMC/DSMB：数据监查委员会。
- MedDRA：医学监管活动词典。
- WHO-DD：WHO 药物词典。
`
      }
    ]
  },
  {
    id: "learning-paths",
    number: "12",
    title: "学习路径系统",
    description: "为临床医生、CRA、医学经理和医学总监设置路线图和完成度。",
    cards: [
      {
        id: "path-doctor-crp",
        title: "路线A：临床医生 → CRP",
        summary: "从临床优势出发，补齐 GCP、研发流程、统计、安全和跨部门协作。",
        tags: ["Learning Path", "Doctor", "CRP"],
        links: ["drug-lifecycle", "ich-e6-r3", "protocol-review", "why-pharma"],
        body: `
## 阶段1：1-2周
- 新药研发全景、GCP、ICH E6(R3)、AE/SAE。

## 阶段2：2-4周
- Protocol Review、统计基础、终点评价、肿瘤开发。

## 阶段3：4-8周
- 安全个案、数据审阅、KOL沟通和面试题库。
`
      },
      {
        id: "path-cra-crp",
        title: "路线B：CRA → CRP",
        summary: "CRA 要把执行经验升级为医学判断和开发策略。",
        tags: ["Learning Path", "CRA", "CRP"],
        links: ["ich-e6-r3", "medical-monitor", "data-review"],
        body: `
## 重点
- 从流程合规升级到医学合理性。
- 学会终点评价、安全归因、方案设计和研究者医学沟通。
`
      },
      {
        id: "path-medical-manager",
        title: "路线C：医学经理",
        summary: "医学经理需要证据沟通、KOL管理、医学策略和合规边界。",
        tags: ["Learning Path", "Medical Manager"],
        links: ["kol-communication", "oncology-dev", "core-documents"],
        body: `
## 重点
- 疾病领域证据梳理。
- 医学策略和学术活动设计。
- 研究者沟通与内部培训。
`
      },
      {
        id: "path-medical-director",
        title: "路线D：医学总监",
        summary: "医学总监需要整合资产策略、证据生成、团队协同和风险决策。",
        tags: ["Learning Path", "Medical Director"],
        links: ["phase-transition", "global-regulatory", "case-safety"],
        body: `
## 重点
- 临床开发计划和注册策略。
- 获益风险决策。
- 跨职能团队领导和外部专家网络。
`
      }
    ]
  },
  {
    id: "lookup",
    number: "13",
    title: "快速查询中心",
    description: "类似 UpToDate 的术语卡片：定义、应用和面试考点，一点即查。",
    cards: [
      {
        id: "pfs-os",
        title: "PFS / OS",
        summary: "PFS 是无进展生存期，OS 是总生存期，二者临床意义和受影响因素不同。",
        tags: ["PFS", "OS", "Endpoint"],
        links: ["survival-analysis", "endpoint-evaluation", "tnbc"],
        body: `
## 定义
- PFS：从随机化到疾病进展或死亡。
- OS：从随机化到任何原因死亡。

## 应用
- PFS更早成熟，但可能受评估频率和影像判读影响。
- OS临床意义最强，但受后续治疗和交叉影响。
`
      },
      {
        id: "orr",
        title: "ORR",
        summary: "ORR 是客观缓解率，常用于早期或单臂肿瘤研究。",
        tags: ["ORR", "Endpoint"],
        links: ["single-arm", "case-endpoint-failure"],
        body: `
## 定义
- ORR = CR + PR 的比例。

## 面试考点
- ORR高不一定代表OS获益，要结合缓解持续时间、安全性和疾病背景。
`
      },
      {
        id: "hr",
        title: "HR",
        summary: "HR 是风险比，用于比较两组事件发生风险随时间的相对差异。",
        tags: ["HR", "Cox", "Survival"],
        links: ["survival-analysis"],
        body: `
## 应用
- HR < 1 通常表示试验组事件风险降低。
- 解释时要看置信区间、P值、KM曲线形态和PH假设。
`
      },
      {
        id: "eot-eos",
        title: "EOT / EOS",
        summary: "EOT 是治疗结束，EOS 是研究结束，二者影响随访和数据完整性。",
        tags: ["EOT", "EOS", "Visit"],
        links: ["data-review", "protocol-review"],
        body: `
## 定义
- EOT, End of Treatment：治疗结束访视。
- EOS, End of Study：研究结束或最后随访。

## 应用
- 患者停药后仍可能需要生存、安全和后续治疗随访。
`
      }
    ]
  },
  {
    id: "personal",
    number: "14",
    title: "个人知识库",
    description: "收藏、笔记、学习记录、高亮和错题本的本地化工作区。",
    cards: [
      {
        id: "personal-kb",
        title: "个人知识库使用方式",
        summary: "把学习过程沉淀为可复习、可导出的个人面试资产。",
        tags: ["Notes", "Favorites", "Progress"],
        links: ["why-pharma", "phase-iii-interview", "ae-sae-interview"],
        body: `
## 支持内容
- 收藏重点知识点。
- 标记完成度。
- 为每个知识点记录笔记。
- 导出学习记录 JSON，后续可用于迁移或生成 PDF 学习报告。

## 建议用法
- 每学完一个节点，用自己的话写 3 句面试答案。
- 对错题或卡壳问题加入笔记，下次从快速查询中心进入复习。
`
      }
    ]
  },
  {
    id: "sponsor-decision",
    number: "15",
    title: "Sponsor Decision Simulator",
    description: "Sponsor思维训练营：从研究者视角切换到药企开发负责人视角，练习Go/No-Go决策。",
    cards: [
      {
        id: "sponsor-decision-framework",
        title: "Sponsor决策框架",
        summary: "用疾病、数据、监管、商业和风险五个维度判断是否启动、继续、暂停或修改开发。",
        tags: ["Sponsor Decision", "Go/No-Go", "Framework"],
        links: ["phase-transition", "global-regulatory", "reviewer-benefit-risk"],
        body: `
## 用户需要判断
- 是否启动研究。
- 是否继续推进。
- 是否暂停开发。
- 是否修改方案。
- 是否需要补充转化研究。

## 决策输入
- 疾病背景、治疗格局、未满足需求。
- 目标药物机制、已有数据和竞品情况。
- 监管可行性、商业价值和关键风险。

## 推荐输出
- Decision：Go / No-Go / Hold / Amend / Translational Research Needed。
- Rationale：医学理由、统计理由、监管理由和商业理由。
- Risk Mitigation：方案修改、安全管理或补充研究。
`
      },
      ...sponsorCases
    ]
  },
  {
    id: "protocol-dissection",
    number: "16",
    title: "Protocol Dissection Center",
    description: "Protocol拆解中心：训练CRP看懂、拆解、评价和优化经典临床试验方案。",
    cards: [
      {
        id: "protocol-dissection-method",
        title: "Protocol拆解方法",
        summary: "用16步结构拆解经典研究，形成CRP、Sponsor和审评员三视角。",
        tags: ["Protocol Dissection", "Method", "CRP Core Skill"],
        links: ["protocol-review", "phase-iii-interview", "reviewer-benefit-risk"],
        body: `
## 16步拆解结构
- 研究背景、研究假设、研究人群、入排标准。
- 分组设计、随机化与分层、治疗方案。
- 主要终点、次要终点、统计假设、样本量。
- 研究亮点、研究局限、Sponsor优化、审评员关注和CRP启发。

## 使用方法
- 先读速览卡片，建立研究骨架。
- 再读深度拆解，写出自己的Sponsor优化建议。
- 最后把审评员关注点转成面试回答。
`
      },
      ...protocolStudies.flatMap(makeProtocolCards)
    ]
  },
  {
    id: "reviewer-mind",
    number: "17",
    title: "Reviewer Mind / Think Like FDA-NMPA",
    description: "审评员视角训练：围绕Benefit-Risk判断批准、补充资料、随访、适应证和安全管理要求。",
    cards: reviewerCases
  },
  {
    id: "medical-writing-library",
    number: "18",
    title: "Medical Writing Library",
    description: "医学写作专区：提前熟悉药企医学部常用医学文件、结构和CRP审阅重点。",
    cards: medicalWritingTemplates.map(makeWritingCard)
  },
  {
    id: "clinical-development-toolkit",
    number: "19",
    title: "Medical Affairs & Clinical Development Toolkit",
    description: "医学部日常工作模板库：提供可复制、双语、带示例的实战模板。",
    cards: toolkitTemplates.map(makeToolkitCard)
  },
  {
    id: "oncology-landscape",
    number: "20",
    title: "Oncology Development Landscape",
    description: "肿瘤药物开发地图：围绕乳腺癌和TNBC建立治疗格局、机制、竞品和未来开发方向。",
    cards: oncologyLandscapeCards
  },
  {
    id: "my-crp-portfolio",
    number: "21",
    title: "My CRP Portfolio",
    description: "个人Portfolio模块：沉淀论文、基金、课题、会议、综述、面试案例和职业转型记录。",
    cards: portfolioCards
  },
  {
    id: "future-ai-extension",
    number: "22",
    title: "Future AI Extension",
    description: "仅保留未来AI扩展入口，当前版本不接入任何外部AI接口。",
    cards: [
      {
        id: "future-ai-placeholder",
        title: "未来AI模块占位",
        summary: "该模块用于未来接入AI辅助文献检索、Protocol初稿生成、医学写作辅助、Safety Review辅助等功能。当前版本暂不开放。",
        tags: ["Future AI", "Placeholder", "No API"],
        links: ["medical-writing-protocol-synopsis", "protocol-dissection-method", "safety-review"],
        body: `
## 当前状态
- 该模块用于未来接入AI辅助文献检索、Protocol初稿生成、医学写作辅助、Safety Review辅助等功能。
- 当前版本暂不开放。

## 明确限制
- 不接入任何AI API。
- 不调用OpenAI、Claude、Gemini或其他外部模型接口。
- 不进行自动生成医学建议或自动审评结论。

## 未来可扩展方向
- AI辅助文献检索。
- Protocol初稿生成。
- 医学写作辅助。
- Safety Review辅助。
- 面试模拟与个性化学习路径。
`
      }
    ]
  },
  {
    id: "regulatory-reference-library",
    number: "23",
    title: "法规原文与附件库",
    description: "集中收录CRP OS中提到的重要法规、ICH指南、监管沟通文件和可下载附件。",
    cards: [
      {
        id: "reg-attachment-ich-e6-r3",
        title: "附件：ICH E6(R3) Step 4 Final Guideline",
        summary: "2025年1月6日采纳的ICH E6(R3) GCP最终指南PDF，已嵌入网页内，可直接阅读。",
        tags: ["ICH E6(R3)", "Attachment", "GCP", "2025"],
        links: ["ich-e6-r3", "sponsor-role", "investigator-role", "essential-documents"],
        body: `
## 网页内阅读
<div class="pdf-reader-shell">
<iframe class="pdf-reader" title="ICH E6(R3) Step 4 Final Guideline PDF" src="./docs/ICH_E6R3_Step4_FinalGuideline_2025_0106.pdf"></iframe>
</div>

## 使用建议
- 第一遍：读 Principles of ICH GCP，理解GCP原则。
- 第二遍：读 Investigator 和 Sponsor，理解职责边界。
- 第三遍：读 Data Governance、Computerised Systems、Essential Records，理解现代临床试验质量体系。
`
      },
      {
        id: "reg-ich-core-guidelines",
        title: "ICH核心指南清单",
        summary: "CRP必须熟悉的ICH E6、E8、E9、E2、E3、M4、E17等指南站内阅读版和学习用途。",
        tags: ["ICH", "Guidelines", "Reference"],
        links: ["ich-suite", "ich-e6-r3", "ich-m4"],
        body: `
## 清单
- ICH E6(R3)：Good Clinical Practice。
- ICH E8(R1)：General Considerations for Clinical Studies。
- ICH E9：Statistical Principles for Clinical Trials。
- ICH E9(R1)：Estimands and Sensitivity Analysis。
- ICH E2A/E2D：Safety Data Management。
- ICH E3：Clinical Study Reports。
- ICH M4：Common Technical Document。
- ICH E17：Multi-regional Clinical Trials。
`
      },
      {
        id: "reg-fda-reference",
        title: "FDA法规与指导原则参考包",
        summary: "FDA临床开发、肿瘤终点、IND安全报告、加速批准和会议沟通站内阅读版。",
        tags: ["FDA", "Reference", "Guidance"],
        links: ["fda-regulatory", "reviewer-benefit-risk", "accelerated-pathways"],
        body: `
## 重点方向
- IND and NDA/BLA development pathway。
- Formal meetings with FDA。
- IND safety reporting。
- Clinical trial endpoints for cancer drugs。
- Accelerated Approval and confirmatory trials。
- Real-world evidence programme。
`
      },
      {
        id: "reg-nmpa-cde-reference",
        title: "NMPA/CDE法规与指导原则参考包",
        summary: "中国临床试验、沟通交流、突破性治疗、附条件批准、真实世界证据和MRCT站内阅读版。",
        tags: ["NMPA", "CDE", "China", "Reference"],
        links: ["nmpa-cde-regulatory", "reviewer-china-data", "global-regulatory"],
        body: `
## 重点方向
- 药物临床试验质量管理规范。
- CDE沟通交流会议。
- 突破性治疗药物程序。
- 附条件批准。
- 真实世界证据支持药物研发。
- 国际多中心临床试验与中国人群数据。
`
      },
      {
        id: "reg-ema-pmda-reference",
        title: "EMA / PMDA法规参考包",
        summary: "欧洲和日本审评中CRP需要理解的Scientific Advice、RMP、条件批准和本地人群要求站内阅读版。",
        tags: ["EMA", "PMDA", "Reference"],
        links: ["ema-regulatory", "pmda-regulatory", "rmp"],
        body: `
## EMA重点
- Scientific Advice。
- PRIME。
- Conditional Marketing Authorisation。
- RMP and pharmacovigilance。

## PMDA重点
- Japan participation in MRCT。
- Local PK/safety data。
- Consultation with PMDA。
`
      },
      {
        id: "reg-meeting-playbook",
        title: "监管沟通会议准备清单",
        summary: "Pre-IND、EOP2、Pre-NDA、CDE沟通交流、AdCom的CRP准备清单。",
        tags: ["Regulatory Meeting", "FDA", "CDE", "AdCom"],
        links: ["global-regulatory", "protocol-review", "reviewer-benefit-risk"],
        body: `
## CRP准备问题
- 当前数据能否支持下一阶段？
- 目标人群和适应证边界是否清楚？
- 主要终点是否可接受？
- 安全性数据库是否足够？
- 中国/亚洲人群数据是否可外推？
- 是否需要确认性研究或上市后研究？
`
      }
    ]
  }
];

export const glossary = [
  { term: "AE", definition: "任何不利医学事件", moduleId: "pv", cardId: "ae-sae" },
  { term: "SAE", definition: "满足严重性标准的不良事件", moduleId: "pv", cardId: "sae" },
  { term: "ITT", definition: "按随机分组分析", moduleId: "statistics", cardId: "analysis-sets" },
  { term: "PP", definition: "符合方案人群分析", moduleId: "statistics", cardId: "analysis-sets" },
  { term: "HR", definition: "风险比", moduleId: "lookup", cardId: "hr" },
  { term: "ORR", definition: "客观缓解率", moduleId: "lookup", cardId: "orr" },
  { term: "PFS", definition: "无进展生存期", moduleId: "lookup", cardId: "pfs-os" },
  { term: "OS", definition: "总生存期", moduleId: "lookup", cardId: "pfs-os" },
  { term: "EOT", definition: "治疗结束", moduleId: "lookup", cardId: "eot-eos" },
  { term: "EOS", definition: "研究结束", moduleId: "lookup", cardId: "eot-eos" },
  { term: "SUSAR", definition: "可疑且非预期严重不良反应", moduleId: "medical-english", cardId: "safety-terms" },
  { term: "DMC", definition: "数据监查委员会", moduleId: "medical-english", cardId: "safety-terms" }
];

export const learningPaths = [
  {
    id: "doctor-crp",
    title: "临床医生 → CRP",
    description: "先建立研发全景和 GCP，再训练方案、安全、统计和面试表达。",
    cards: ["drug-lifecycle", "ich-e6-r3", "ae-sae", "protocol-review", "analysis-sets", "why-pharma"]
  },
  {
    id: "cra-crp",
    title: "CRA → CRP",
    description: "把中心执行经验升级为医学判断、数据解释和研究设计能力。",
    cards: ["ich-e6-r3", "medical-monitor", "data-review", "endpoint-evaluation", "phase-iii-interview"]
  },
  {
    id: "medical-manager",
    title: "医学经理",
    description: "聚焦证据沟通、KOL协作、医学培训和产品策略。",
    cards: ["kol-communication", "oncology-dev", "core-documents", "tnbc", "why-pharma"]
  },
  {
    id: "medical-director",
    title: "医学总监",
    description: "训练资产策略、获益风险、法规沟通和跨团队决策。",
    cards: ["phase-transition", "global-regulatory", "case-safety", "accelerated-pathways", "path-medical-director"]
  }
];
