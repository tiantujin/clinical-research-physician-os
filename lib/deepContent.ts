export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export type WeekPlan = {
  week: string;
  goal: string;
  nodes: string[];
  output: string;
  quiz: string;
  review: string;
};

export const todayRecommendations = [
  { title: "先学习 ICH E6(R3)：Sponsor职责", moduleId: "ich", cardId: "ich-e6-r3" },
  { title: "再学习 AE/SAE/SUSAR 医学判断", moduleId: "pv", cardId: "ae-sae" },
  { title: "最后完成 KEYNOTE-355 Protocol拆解", moduleId: "protocol-dissection", cardId: "keynote-355-deep-dive" }
];

export const twelveWeekPlan: WeekPlan[] = [
  { week: "第1周", goal: "建立新药研发全流程地图，能讲清从发现到上市后每一步CRP参与点。", nodes: ["drug-lifecycle", "phase-transition", "global-regulatory"], output: "画一张Drug Discovery到Post Marketing流程图，并标注CRP输入文件。", quiz: "解释IND、Phase II、Phase III各自回答什么问题。", review: "复习NDA/BLA/MAA与Post Marketing差异。" },
  { week: "第2周", goal: "掌握ICH-GCP角色体系，理解Sponsor、Investigator、Medical Monitor职责边界。", nodes: ["ich-e6-r3", "sponsor-role", "investigator-role", "medical-monitor"], output: "写一页Sponsor vs Investigator职责对照表。", quiz: "判断5个场景由谁负责最终医学决定。", review: "复习Essential Documents与Protocol Deviation。" },
  { week: "第3周", goal: "能拆解Protocol结构，识别研究设计、人群、终点和安全监测问题。", nodes: ["protocol-review", "rct", "master-protocol"], output: "完成一份Protocol Review Checklist。", quiz: "指出一个入排标准不可执行的原因。", review: "复习PICO与主要/次要终点。" },
  { week: "第4周", goal: "掌握肿瘤临床试验终点，能解释ORR、PFS、OS、pCR、EFS。", nodes: ["pfs-os", "orr", "survival-analysis", "endpoint-evaluation"], output: "写一段HR=0.70的临床解释。", quiz: "判断PFS阳性但OS不成熟是否足够支持注册。", review: "复习KM曲线、删失和风险表。" },
  { week: "第5周", goal: "补齐PV短板，能处理AE、SAE、SUSAR和安全性个案。", nodes: ["ae-sae", "sae", "causality", "signal-detection"], output: "写一份患者死亡SAE医学讨论记录。", quiz: "区分Seriousness与Severity。", review: "复习Expectedness、Causality、Expedited Reporting。" },
  { week: "第6周", goal: "掌握医生版统计学，能看懂分析集、HR、CI、P值和多重性。", nodes: ["analysis-sets", "power-sample-size", "alpha-beta", "survival-analysis"], output: "做一张ITT/PP/mITT/FAS/Safety Set对照表。", quiz: "解释为什么PP不能替代ITT。", review: "复习Multiplicity与Interim Analysis。" },
  { week: "第7周", goal: "理解Medical Monitoring日常工作，能回答中心医学问题并形成记录。", nodes: ["medical-monitor", "safety-review", "site-communication"], output: "写一份Medical Monitoring Note模板。", quiz: "判断Medical Monitor能否替研究者决定停药。", review: "复习SAE Narrative和AE随访。" },
  { week: "第8周", goal: "掌握Data Review和Query Review，能识别医学逻辑不闭环的数据。", nodes: ["data-review", "medical-review", "csr"], output: "写10条高质量医学Query。", quiz: "判断一个query是否诱导中心回答。", review: "复习EOT/EOS、后续治疗、死亡日期。" },
  { week: "第9周", goal: "完成经典Protocol拆解，训练Sponsor与审评员视角。", nodes: ["keynote-355-deep-dive", "ascent-deep-dive"], output: "写一页KEYNOTE-355 Sponsor点评。", quiz: "指出ASCENT对照选择的价值。", review: "复习TNBC治疗格局。" },
  { week: "第10周", goal: "训练Sponsor Go/No-Go决策，能从医学、统计、监管和商业整合判断。", nodes: ["sponsor-adc-io-phase3", "sponsor-post-io-rechallenge", "sponsor-orr-pfs-discordance"], output: "完成3个Sponsor Decision Memo。", quiz: "判断ORR提高但PFS不显著时是否推进III期。", review: "复习PoC、Dose Finding、Go/No-Go。" },
  { week: "第11周", goal: "系统准备医学部面试，形成可背诵又能个性化表达的答案。", nodes: ["crp-interview-20", "why-pharma", "phase-iii-interview"], output: "录一遍3分钟自我介绍和5个情景题答案。", quiz: "用乳腺外科医生背景回答为什么转CRP。", review: "复习AE/SAE、ITT/PP、Protocol Review。" },
  { week: "第12周", goal: "整理Portfolio，把论文、课题、会议和研究想法转成药企面试资产。", nodes: ["portfolio-我的论文", "portfolio-我的课题设计", "portfolio-我的职业转型记录"], output: "完成一页CRP Portfolio和一版简历项目经历。", quiz: "把一个临床课题改写成Sponsor视角开发问题。", review: "复习所有收藏和错题。" }
];

const standardTail = `
## 本章总结
- CRP学习不是背概念，而是把概念转化为方案判断、安全判断、数据判断和沟通判断。
- 面试时要用“定义 + 场景 + 风险 + 我的处理方式”回答，避免只背教科书句子。
- 入职后最有价值的能力，是发现研究设计或执行中会影响患者安全、数据可信度和注册解释的问题。

## 5分钟速读版
- 先抓一句话定义。
- 再问它在Protocol、Safety Review、Data Review、CSR或监管沟通中出现在哪里。
- 最后准备一个肿瘤案例和一个面试答案。

## 面试复习版
- 面试官通常不是考你是否知道缩写，而是考你能否把临床语言翻译成药企开发语言。
- 回答要有结构：背景、判断标准、实际场景、风险控制、沟通方式。

## CRP实战版
- 工作中不要只说“临床上可以”。要说明是否符合Protocol、是否影响终点解释、是否需要记录、是否需要升级给Safety/Stats/Regulatory团队。
`;

export const deepContent: Record<string, string> = {
  "ich-e6-r3": `
## 1. 一句话理解
ICH E6(R3) 是现代GCP的操作系统：它要求Sponsor和研究者把质量、风险管理、数据可信度和患者保护从研究一开始就设计进去，而不是等研究结束后靠补文件来证明合规。

## 2. 为什么CRP必须掌握
临床医生进入药企后，最容易把GCP理解成“CRA检查文件”或“研究中心合规”。但CRP在药企中的价值，是把医学判断嵌入研究质量体系。E6(R3)直接影响Protocol Review、Medical Monitoring、Safety Review、Data Review、Vendor Oversight、CSR医学解释和监管沟通。你必须知道Sponsor不是旁观者，而是研究质量、受试者保护和数据可靠性的最终责任方之一。Medical Monitor虽然不替代研究者做医疗决定，但要确保方案提供了足够清晰的医学规则，并在执行过程中发现系统性风险。

## 3. 核心定义
- Good Clinical Practice, GCP / 药物临床试验质量管理规范：保护受试者权益、安全和福祉，并保证临床试验数据可信的国际伦理和科学质量标准。
- Quality by Design, QbD / 质量源于设计：在方案构思阶段识别关键质量因素，而不是研究执行后再通过大量核查补救。
- Risk-based Quality Management, RBQM / 基于风险的质量管理：根据风险对患者安全和数据可靠性的影响分配质量资源。
- Critical to Quality Factors, CtQ / 关键质量因素：一旦出错会实质影响受试者保护或研究结论可信度的设计和执行要素。
- Data Governance / 数据治理：保证数据完整、可追溯、准确、一致、及时和受控的体系。

## 4. 背景与逻辑
E6(R2)时代已经开始强调风险管理，但现实中许多团队仍然把质量等同于“100%源数据核查”和“TMF文件完整”。现代试验越来越复杂：肿瘤MRCT、去中心化访视、电子知情同意、中心影像、ePRO、可穿戴设备、外部数据源、平台研究和真实世界证据都让传统监查方式不够用。E6(R3)的核心逻辑是比例原则：高风险、高影响的数据和流程要重点控制；低风险、低影响的活动不应消耗过多资源。对CRP来说，这意味着Protocol的医学设计本身就是质量管理的一部分。比如TNBC注册研究中，PD-L1检测、随机化分层、影像评估窗口、进展后治疗记录、死亡日期、SAE上报和AESI处理，都属于关键质量因素。

## 5. 实际工作场景
- Protocol设计：CRP要判断主要终点、纳排标准、安全监测、剂量调整和停药规则是否清晰到足以被全球中心一致执行。
- Medical Monitoring：当中心询问边界病例是否可入组时，CRP要在Protocol、患者安全和数据解释性之间做判断。
- Safety Review：E6(R3)要求Sponsor主动识别趋势和系统风险，而不是被动等待个案报告。
- Data Review：CRP要关注关键数据是否医学合理，例如PFS事件、死亡原因、后续治疗和AE逻辑是否闭环。
- Investigator Meeting：培训重点不应是逐页读方案，而是讲清关键风险、关键数据和常见偏离。
- Regulatory Communication：与FDA/NMPA沟通时，Sponsor要能解释质量体系如何保证终点可信。
- CSR撰写：医学解释必须说明方案偏离、缺失数据、安全风险和关键亚组是否影响结论。

## 6. 肿瘤研究示例
一个全球TNBC ADC+IO III期研究把PFS作为主要终点。E6(R3)视角下，CRP不能只问“PFS是否合适”，还要问：影像评估是否中心盲态独立评审？PD-L1和TROP2检测是否有一致流程？ADC相关ILD是否作为AESI重点监测？不同国家后续治疗可及性是否影响OS解释？如果中国中心入组少，是否会影响NMPA外推？这些问题都不是单纯医学问题，而是质量和注册解释问题。

## 7. 常见误区
- 误区1：认为GCP只是CRA和QA的事。实际上方案医学设计不清楚会导致系统性质量风险。
- 误区2：认为文件越多质量越高。E6(R3)强调关键质量因素，不鼓励无差别文件堆积。
- 误区3：认为RBQM就是少做监查。RBQM是把资源转向高影响风险，而不是降低标准。
- 误区4：认为Medical Monitor可以替研究者下医疗决定。CRP提供产品和方案相关医学意见，最终临床照护仍由研究者负责。
- 误区5：把患者中心化理解为减少所有访视。真正的患者中心化是在不牺牲安全和数据质量的前提下降低不必要负担。

## 8. CRP工作提示
- 审Protocol时先标出Critical Data和Critical Process。
- 对每个关键终点问三件事：谁评估、何时评估、偏离如何处理。
- 对每个重大安全风险问四件事：如何识别、如何分级、如何处理、如何上报。
- 对每个去中心化元素问：身份、数据来源、设备一致性、隐私和AE识别如何保证。

## 9. 面试高频问题
Q1：E6(R3)相比传统GCP最重要的变化是什么？
参考答案：从事后合规和文件核查，转向以患者保护和数据可靠性为核心的质量源于设计、比例原则和基于风险的质量管理。CRP要在方案阶段识别关键质量因素。

Q2：Sponsor职责和Investigator职责如何区分？
参考答案：Sponsor负责研究设计、质量体系、数据和安全监督、供应商管理和监管报告；Investigator负责受试者医疗照护、知情同意、按方案执行和源数据真实性。Medical Monitor连接两者，但不替代研究者医疗决定。

Q3：什么是Quality by Design？
参考答案：在方案构思和研究计划阶段预先识别会影响受试者安全和研究结论的关键因素，并设计控制措施。例如肿瘤研究中独立影像评审、随机化分层、AESI管理和后续治疗收集。

Q4：RBQM在肿瘤研究中怎么落地？
参考答案：把监测重点放在关键终点、SAE/AESI、随机化、入排标准、影像评估、死亡和后续治疗等字段，而不是平均用力检查所有低影响字段。

## 10. 速查表
| 概念 | 英文 | CRP要点 |
| QbD | Quality by Design | 方案阶段设计质量，不靠事后补救 |
| RBQM | Risk-based Quality Management | 资源投向关键风险 |
| CtQ | Critical to Quality | 影响患者安全和结论可信度 |
| Data Governance | 数据治理 | ALCOA+、审计追踪、数据完整性 |
| Patient Centricity | 患者中心 | 降低负担但不牺牲安全 |

## 11. 小测验
1. 判断题：RBQM意味着可以减少所有监查活动。答案：错。解析：RBQM是按风险分配资源，高风险数据反而要加强。
2. 单选题：TNBC注册研究中最可能属于关键质量因素的是？A.研究者签名字体 B.PFS影像评估窗口 C.会议室座位表。答案：B。
3. 判断题：Medical Monitor可以直接替研究者决定患者停药。答案：错。解析：可提供方案和产品相关建议，研究者负责医疗决定。

## 12. 延伸阅读
- ICH E6(R3) Good Clinical Practice。
- ICH E8(R1) General Considerations for Clinical Studies。
- FDA关于Risk-Based Monitoring的指导原则。
- NMPA/CDE临床试验质量管理和沟通交流相关指导原则。
${standardTail}
`,

  "ae-sae": `
## 1. 一句话理解
AE是研究中出现的任何不利医学事件，SAE是满足法规严重性标准的AE；SUSAR则是在“严重、可疑相关、非预期”三个条件同时满足时需要加急报告的安全事件。

## 2. 为什么CRP必须掌握
PV是临床医生转药企最常见短板。医生在医院习惯判断“病情重不重、怎么治疗”，但药企需要进一步判断事件是否是AE、是否SAE、是否相关、是否预期、是否需要加急报告、是否提示风险信号、是否需要修改方案或ICF。CRP和Medical Monitor经常需要审阅SAE narrative、死亡病例、免疫相关AE、ADC相关ILD、肝损伤和实验室异常。一个判断错误，可能导致报告延迟、监管风险、患者保护不足或项目暂停。

## 3. 核心定义
- Adverse Event, AE / 不良事件：受试者用药后出现的任何不利医学事件，不要求与研究药物存在因果关系。
- Serious Adverse Event, SAE / 严重不良事件：导致死亡、危及生命、住院或住院延长、永久或显著残疾、先天异常，或其他重要医学事件。
- Adverse Drug Reaction, ADR / 药品不良反应：合理可能与药物相关的不良反应。
- Suspected Adverse Reaction, SAR / 可疑不良反应：怀疑与药物存在因果关系的事件。
- Suspected Unexpected Serious Adverse Reaction, SUSAR / 可疑且非预期严重不良反应：严重、可疑相关、非预期，通常触发加急报告。
- Adverse Event of Special Interest, AESI / 特别关注不良事件：基于机制、同类药物或前期信号预先定义、需特别收集和管理的事件。
- Treatment-emergent Adverse Event, TEAE / 治疗期间出现的不良事件：治疗开始后发生或恶化的AE。

## 4. 背景与逻辑
临床试验安全管理不是简单收集不良反应表。监管机构需要Sponsor持续评估研究药物的获益风险。早期试验中，一个严重肝损伤、免疫性肺炎或死亡病例可能改变剂量、纳排、安全监测和研究是否继续。后期注册研究中，安全数据库大小、严重AE发生率、停药率、AESI管理和死亡归因会影响标签、RMP和批准决策。CRP必须从个案和总体趋势两层看安全：个案层面要构建时间线和因果链；总体层面要判断是否出现新信号或已知风险频率/严重性变化。

## 5. 实际工作场景
- Protocol设计：定义AE收集窗口、SAE上报时限、AESI、DLT、停药/减量规则和复治标准。
- Medical Monitoring：中心询问患者发热、肺炎、肝酶升高是否继续给药，CRP要结合方案和产品风险回答。
- Safety Review：审阅SAE line listing、死亡病例、AESI趋势和暴露校正发生率。
- Data Review：检查AE、合并用药、实验室异常、剂量调整和停药原因是否逻辑一致。
- Investigator Meeting：培训Seriousness vs Severity、SAE上报、irAE处理和ADC ILD识别。
- Regulatory Communication：解释SUSAR、DSUR、RMP和安全数据库充分性。
- CSR撰写：确保安全结果按TEAE、SAE、Grade 3-5 AE、AESI、死亡和停药原因清楚呈现。

## 6. 典型案例
案例：患者接受PD-1联合化疗后第42天出现气促、低氧和双肺磨玻璃影，住院接受激素和抗感染治疗。研究者初判感染，与药物无关。CRP应要求补充：发热、病原学、CT影像、氧疗、既往放疗、肿瘤进展证据、末次给药时间、激素反应、合并用药和转归。该事件因住院满足SAE；是否SUSAR取决于是否怀疑相关和IB/RSI中是否预期。即使研究者认为无关，Sponsor医学团队若认为不能排除IO相关肺炎，也应按Sponsor判断完成安全评估和必要报告。

## 7. 常见误区
- 误区1：AE必须与药物相关。错，AE不要求因果关系。
- 误区2：Severe等于Serious。错，Severe是强度，Serious是法规严重性。
- 误区3：研究者认为无关，Sponsor就不能判相关。错，Sponsor可基于整体证据作独立医学评估。
- 误区4：住院观察不严重。只要满足住院或住院延长，通常就是SAE，除非方案预定义例外。
- 误区5：SUSAR等于所有SAE。错，还必须可疑相关且非预期。

## 8. CRP工作提示
- 每个SAE先画时间线：给药、事件发生、诊断、处理、转归、再给药。
- 关联性判断至少看时间关系、替代病因、机制合理性、去挑战/再挑战和已知安全谱。
- 对死亡病例区分“死亡事件”和“死亡原因”，不能只写death。
- 对免疫治疗、ADC和靶向药，要提前熟悉AESI和方案规定的管理算法。

## 9. 面试高频问题
Q1：AE和SAE的区别是什么？
参考答案：AE是任何不利医学事件，不要求相关；SAE是满足死亡、危及生命、住院、残疾、先天异常或重要医学事件等严重性标准的AE。

Q2：Serious和Severe区别？
参考答案：Serious是法规严重性标准，Severe是临床强度。重度恶心不一定SAE，轻度事件若导致住院也可能是SAE。

Q3：什么情况下是SUSAR？
参考答案：事件必须严重、怀疑与研究药物相关、且相对于参考安全信息为非预期。三者缺一不可。

Q4：研究者认为无关但Sponsor认为可能相关怎么办？
参考答案：记录双方判断，Sponsor可基于医学证据进行独立评估并按更审慎原则完成报告和风险管理。

## 10. 速查表
| 术语 | 英文 | 判断关键词 |
| AE | Adverse Event | 不利医学事件，不要求相关 |
| SAE | Serious Adverse Event | 死亡/危及生命/住院/残疾等 |
| SAR | Suspected Adverse Reaction | 怀疑相关 |
| SUSAR | Suspected Unexpected Serious Adverse Reaction | 严重+可疑相关+非预期 |
| AESI | Adverse Event of Special Interest | 预定义特别关注风险 |

## 11. 小测验
1. 患者因Grade 2肺炎住院，是SAE吗？答案：通常是。解析：住院满足SAE标准，与grade无关。
2. 所有SAE都必须是SUSAR吗？答案：否。解析：还要可疑相关且非预期。
3. 研究者判断无关时Sponsor是否可以判断相关？答案：可以。解析：Sponsor有独立安全评估责任。

## 12. 延伸阅读
- ICH E2A Clinical Safety Data Management。
- ICH E2D Post-Approval Safety Data Management。
- MedDRA Term Selection: Points to Consider。
- FDA IND Safety Reporting Guidance。
${standardTail}
`,

  "protocol-review": `
## 1. 一句话理解
Protocol Review 是CRP把临床医学、GCP、统计、监管和真实执行经验转化为可执行研究方案的核心工作。

## 2. 为什么CRP必须掌握
Protocol是临床试验的“作战地图”。医生转CRP后，不能只看疾病背景和治疗方案，还要判断研究问题是否清楚、目标人群是否合理、入排标准是否可执行、终点是否支持注册、安全管理是否充分、统计假设是否有临床意义、方案是否符合真实诊疗路径。一个好CRP在Protocol Review中能提前发现未来会导致入组困难、偏离增加、安全风险、数据不可解释或审评质疑的问题。

## 3. 核心定义
- Protocol / 临床试验方案：规定研究目的、设计、方法、统计和组织实施的核心文件。
- Protocol Synopsis / 方案概要：用简洁结构呈现研究设计核心要素，常用于早期评审。
- Protocol Deviation / 方案偏离：研究执行与批准方案不一致的情况。
- Major Deviation / 重大方案偏离：可能影响受试者安全、权益或主要数据可靠性的偏离。
- Amendment / 方案修订：对已批准方案进行正式修改。

## 4. 背景与逻辑
很多临床医生读Protocol时习惯问“这个治疗合理吗”，但Sponsor视角要多问几层：这个研究能回答注册问题吗？主要终点是否足以支持标签？对照组是否符合当前标准治疗？入排标准是否既保护患者又不让入组不可行？安全监测能否及时识别机制相关风险？统计假设是否只是数学显著还是有临床意义？如果竞品提前获批，方案是否还能保持价值？Protocol Review的价值就是在第一例患者入组前修正这些问题，因为一旦研究启动，任何修改都昂贵、缓慢且可能影响解释性。

## 5. 实际工作场景
- Study Concept阶段：CRP参与PICO、终点、人群、剂量和对照选择。
- Protocol草案阶段：逐章审阅背景、目标、设计、纳排、安全、统计和操作流程。
- Investigator Meeting前：把复杂方案转化为研究者能执行的培训重点。
- Study Start-up：回答中心对纳排、合并用药、影像窗口和安全管理的问题。
- Medical Monitoring：用Protocol作为边界处理病例咨询。
- CSR撰写：解释方案设计、偏离和数据限制对结论的影响。

## 6. 肿瘤示例
假设一个一线TNBC ADC+IO III期研究以PFS为主要终点，入组PD-L1阴性和阳性全部人群。CRP审阅时应问：是否预设PD-L1亚组？是否按既往早期IO暴露分层？对照组化疗选择是否符合各地区标准？ADC相关ILD是否有基线肺部评估和停药规则？进展后后续治疗如何收集？如果OS是关键次要终点，是否有多重性控制？中国中心是否有足够样本支持NMPA沟通？这些问题比“药物机制有趣”更能体现CRP价值。

## 7. 常见误区
- 误区1：Protocol Review就是改文字。真正重点是医学逻辑、风险和可执行性。
- 误区2：入排越严格越安全。过严会导致入组困难和外推性不足。
- 误区3：终点越多越全面。终点过多会带来多重性和执行负担。
- 误区4：安全管理写“按当地指南处理”就够。关键风险必须有明确监测、分级、暂停、复治和上报规则。
- 误区5：统计假设由统计师负责，CRP不用看。CRP要判断假设差异是否有临床意义。

## 8. Protocol Review Checklist
- 研究背景是否充分说明未满足需求和竞品格局？
- 研究目的是否能被主要终点回答？
- 目标人群是否匹配未来适应证？
- 入排标准是否清晰、可执行、不过度筛选？
- 对照组是否符合当前标准治疗和地区差异？
- 剂量、减量、暂停、复治和永久停药标准是否明确？
- 安全监测是否覆盖机制相关风险和同类药物风险？
- 主要终点是否可测量、可审评、可解释？
- 统计假设是否有临床意义，是否考虑多重性？
- 方案是否考虑MRCT、中国桥接和真实临床路径？

## 9. 面试高频问题
Q1：你如何审阅一个Protocol？
优秀答案：我会按PICO和风险逻辑审阅。先看研究问题和目标人群，再看对照、终点、统计假设、安全管理和执行可行性。最后从Sponsor和审评员角度判断是否能支持注册和获益风险评估。

Q2：入排标准你重点看什么？
参考答案：是否保护高风险患者、是否匹配目标适应证、是否影响入组可行性、是否导致外推性不足、关键标准是否可操作。

Q3：如何判断终点是否合理？
参考答案：看临床意义、监管接受度、测量客观性、事件成熟度、样本量可行性和是否匹配疾病阶段。

## 10. 速查表
| 审阅区域 | CRP问题 | 常见风险 |
| 背景 | 未满足需求是否清楚 | 研究价值不明确 |
| 人群 | 是否匹配适应证 | 入组慢/外推差 |
| 终点 | 是否支持目的 | 阳性但无临床意义 |
| 安全 | 规则是否明确 | SAE处理延迟 |
| 统计 | 假设是否合理 | 结果不可解释 |

## 11. 小测验
1. Protocol Review最重要的是语言润色吗？答案：否。解析：核心是医学逻辑和风险控制。
2. 主要终点选择只由统计师决定吗？答案：否。解析：CRP要判断临床意义和监管可接受性。
3. 对机制相关严重毒性，方案是否应写明停药和复治规则？答案：是。

## 12. 延伸阅读
- ICH E6(R3) Protocol and Quality sections。
- ICH E8(R1) Critical to Quality Factors。
- ICH E9 Statistical Principles。
- 经典研究Protocol synopsis：KEYNOTE-355、ASCENT、DESTINY-Breast04。
${standardTail}
`,

  "analysis-sets": `
## 1. 一句话理解
ITT、mITT、PP、FAS和Safety Set不是统计名词游戏，而是在回答“用哪一群患者的数据来估计治疗效果或安全风险”。

## 2. 为什么CRP必须掌握
CRP读CSR、SAP、abstract和label时必须看懂分析集。面试官问ITT与PP，真正想考你是否理解随机化、偏倚和临床解释。临床医生常觉得“只分析真正完成治疗的人更公平”，但药企和监管更重视ITT，因为它保护随机化，接近真实治疗决策。PP可用于敏感性分析，但不能轻易替代主要分析。

## 3. 核心定义
- Intention-to-Treat, ITT / 意向治疗集：所有随机化患者按随机分组分析。
- Modified ITT, mITT / 修正意向治疗集：在ITT基础上预设合理限制，如至少接受一次治疗或biomarker阳性。
- Per Protocol, PP / 符合方案集：排除重大偏离且按方案完成关键治疗/评估的人群。
- Full Analysis Set, FAS / 全分析集：尽可能接近ITT的主要疗效分析人群，常用于ICH E9语境。
- Safety Set / 安全性分析集：通常包括至少接受一次研究治疗的患者，按实际接受治疗分析。

## 4. 背景与逻辑
随机化的价值在于平衡已知和未知混杂。如果研究结束后只挑选依从性好、完成随访、没有重大偏离的人分析，可能破坏随机化。比如毒性更大的治疗组有更多患者早停，PP分析会把这些真实问题排除掉，让疗效看起来更好。因此注册研究通常把ITT/FAS作为主要疗效分析集，PP作为敏感性分析。安全性则不同，监管关心实际暴露后的风险，所以Safety Set通常按实际治疗分析。

## 5. 实际工作场景
- Protocol设计：需要预先定义各分析集，避免结果出来后选择有利人群。
- SAP审阅：CRP要确认mITT限制是否有医学合理性，是否会引入偏倚。
- CSR撰写：解释ITT、PP结果是否一致，不一致时分析原因。
- Data Review：重大方案偏离会影响PP，但不应随意从ITT中删除。
- Regulatory Communication：监管会关注主要分析集是否保护随机化。

## 6. 肿瘤示例
一项TNBC III期研究随机1000例，试验组因早期毒性停药较多。如果只做PP分析，排除早停患者，可能高估疗效；ITT分析保留这些患者，反映“医生给患者选择这项治疗策略”的真实效果。若ITT显示PFS HR=0.78，PP显示0.65，CRP应解释差异是否来自依从性、毒性、方案偏离或缺失影像，而不是简单说PP更好。

## 7. 常见误区
- 误区1：PP更“干净”所以更真实。实际上PP更容易选择偏倚。
- 误区2：mITT可以随意定义。mITT必须预设且有医学/方法学理由。
- 误区3：安全性也应按随机分组分析。安全通常按实际接受治疗分析。
- 误区4：重大偏离患者应从所有分析中删除。ITT原则下通常不能随意删除随机化患者。

## 8. CRP工作提示
- 审SAP时检查分析集定义是否与Protocol一致。
- 对mITT问：排除标准是否发生在随机后？是否可能与治疗或预后相关？
- 对ITT/PP结果不一致，准备医学解释。
- 对Safety Set确认按实际治疗还是随机治疗呈现。

## 9. 面试高频问题
Q1：ITT和PP区别？
答案：ITT按随机分组分析，保护随机化，反映临床决策；PP只分析符合方案者，可用于敏感性分析但易选择偏倚。

Q2：mITT什么时候合理？
答案：当限制有预设医学理由，如需要确认biomarker阳性或至少接受一次治疗，但要避免事后选择有利人群。

Q3：安全性分析集怎么定义？
答案：常包括至少接受一次研究治疗的患者，按实际接受治疗分析，因为安全风险来自实际暴露。

## 10. 速查表
| 分析集 | 英文 | 用途 | 风险 |
| ITT | Intention-to-Treat | 主要疗效、保护随机化 | 包含未治疗/偏离 |
| mITT | Modified ITT | 预设限制人群 | 定义不当会偏倚 |
| PP | Per Protocol | 敏感性分析 | 选择偏倚 |
| FAS | Full Analysis Set | 接近ITT | 需预先定义 |
| Safety Set | Safety Set | 安全性 | 按实际治疗 |

## 11. 小测验
1. ITT通常按随机分组还是实际治疗分析？答案：随机分组。
2. PP能作为唯一主要分析吗？答案：通常不建议，尤其优效性注册研究。
3. Safety Set通常包括谁？答案：至少接受一次研究治疗的患者。

## 12. 延伸阅读
- ICH E9 Statistical Principles。
- ICH E9(R1) Estimands and Sensitivity Analysis。
- FDA Clinical Trial Endpoints and SAP相关指导。
${standardTail}
`,

  "survival-analysis": `
## 1. 一句话理解
Kaplan-Meier和Cox模型帮助我们分析“从随机化到事件发生需要多久”，HR反映两组在随访期间瞬时事件风险的相对差异。

## 2. 为什么CRP必须掌握
肿瘤CRP几乎每天都在读PFS、OS、EFS、DFS、HR、CI和KM曲线。你不需要像统计师一样推导公式，但必须知道HR=0.70不等于“每个患者风险降低30%”，也不等于“中位PFS延长30%”。它表示在模型假设下，试验组相对于对照组的事件瞬时风险约降低30%。CRP要结合曲线形态、删失、风险表、随访成熟度、后续治疗和亚组一致性解释结果。

## 3. 核心定义
- Progression-free Survival, PFS / 无进展生存期：从随机化到疾病进展或死亡。
- Overall Survival, OS / 总生存期：从随机化到任何原因死亡。
- Kaplan-Meier Curve, KM曲线 / 生存曲线：估计随时间未发生事件比例。
- Hazard Ratio, HR / 风险比：两组瞬时事件风险之比。
- Confidence Interval, CI / 置信区间：估计不确定性范围。
- Censoring / 删失：随访结束或失访时尚未发生事件，事件时间未知。

## 4. 背景与逻辑
传统二分类终点只问“有没有发生”，但肿瘤研究更关心“什么时候进展、什么时候死亡”。PFS比OS更早成熟，适合评估抗肿瘤活性，但受影像频率、评估标准和删失影响。OS最有临床意义，但会被后续治疗、交叉和随访时间影响。KM曲线不能只看中位数，必须看曲线是否早期分离、是否交叉、尾部是否稳定、风险表人数是否足够。HR需要比例风险假设支持，若曲线明显交叉，单一HR可能误导。

## 5. 实际工作场景
- Protocol设计：决定主要终点是PFS还是OS，是否需要BICR，影像评估间隔多长。
- SAP审阅：确认Cox模型、分层因素、删失规则和敏感性分析。
- Data Review：核对进展日期、死亡日期、后续治疗和缺失影像。
- Safety Review：某些死亡事件既影响OS也影响安全解释。
- CSR撰写：解释PFS/OS成熟度、删失比例、亚组和后续治疗。
- 面试：用临床语言解释HR、CI和P值。

## 6. 肿瘤示例
一项晚期TNBC研究显示PFS HR=0.70，95%CI 0.58-0.85，p<0.001，中位PFS从5.5个月延长到7.8个月。CRP应这样解释：试验组在随访期间进展或死亡的瞬时风险相对降低约30%，结果统计学显著且置信区间未跨1；但临床价值还要看OS趋势、DoR、安全性、患者生活质量和后续治疗。如果KM曲线在前3个月重叠、6个月后分离，可能提示部分患者获益或免疫治疗延迟效应。

## 7. 常见误区
- 误区1：HR=0.70等于每个患者风险降低30%。错，它是群体层面的瞬时风险比。
- 误区2：中位PFS差值越大一定越好。还要看HR、CI、曲线形态和安全性。
- 误区3：PFS阳性就一定能批准。要看临床意义、安全性、OS趋势和监管场景。
- 误区4：KM曲线尾部上扬或稳定一定代表长期治愈。尾部人数少时解释要谨慎。
- 误区5：P值显著就说明结果可靠。还要看偏倚、缺失、删失和多重性控制。

## 8. CRP工作提示
- 读KM曲线先看风险表，再看曲线分离和删失。
- 对PFS终点确认影像评估是否盲态独立评审。
- 对OS终点确认后续治疗和交叉是否充分收集。
- 对亚组森林图不要过度解读小样本波动。

## 9. 面试高频问题
Q1：HR=0.70怎么解释？
答案：在随访期间，试验组发生事件的瞬时风险约为对照组的70%，即相对降低约30%；但不代表每个患者风险降低30%，也不等于中位生存期延长30%。

Q2：PFS和OS哪个更重要？
答案：OS临床意义最强，但成熟慢且受后续治疗影响；PFS较早反映疾病控制，常用于注册，但需结合OS、安全性和生活质量。

Q3：KM曲线要看什么？
答案：曲线分离时间、是否交叉、删失、风险表、尾部人数、中位数、HR、CI和随访成熟度。

## 10. 速查表
| 术语 | 英文 | CRP解释 |
| PFS | Progression-free Survival | 进展或死亡前时间 |
| OS | Overall Survival | 到任何原因死亡 |
| HR | Hazard Ratio | 瞬时风险相对比较 |
| CI | Confidence Interval | 估计不确定性 |
| KM | Kaplan-Meier | 时间到事件曲线 |

## 11. 小测验
1. HR=0.70是否等于中位PFS增加30%？答案：否。
2. OS不成熟时PFS阳性是否完全无价值？答案：否，要结合场景和获益风险。
3. KM尾部人数很少时能否强推长期获益？答案：不能。

## 12. 延伸阅读
- ICH E9。
- FDA Clinical Trial Endpoints for the Approval of Cancer Drugs。
- 肿瘤注册研究CSR的PFS/OS章节。
${standardTail}
`,
};

export const deepContentAdditions: Record<string, string> = {
  "pfs-os": deepContent["survival-analysis"],
  "hr": deepContent["survival-analysis"],
  "sae": deepContent["ae-sae"],
};

const ichE6SourceNote = `
## 原文来源说明
本章基于用户提供的《ICH E6(R3) Step 4 Final Guideline, adopted 06 January 2025》整理。网页内容采用学习化改写、结构化解释和CRP工作转译；不是逐字复制原文。学习时建议把本章当作“入职前读懂E6(R3)”的路线图：先理解原则，再理解角色职责，最后理解数据治理和Essential Records。
`;

export const ichE6Manual: Record<string, string> = {
  "ich-e6-r3": `
${ichE6SourceNote}
## ICH E6(R3)完整学习路线
### 你需要掌握到什么程度
如果你面试CRP或Medical Monitor，E6(R3)不需要背章节号，但必须能做到四件事：第一，能用自己的话解释GCP的目的；第二，能区分Investigator、Sponsor、IRB/IEC和Medical Monitor职责；第三，能解释Quality by Design、RBQM、Data Governance、Computerised Systems和Essential Records如何影响真实研究；第四，能把E6(R3)原则应用到Protocol Review、SAE处理、Data Review和研究者沟通中。

### E6(R3)总结构
E6(R3)由原则、Annex 1和附录构成。原则部分是所有临床试验共同遵循的伦理和科学基础；Annex 1把原则落到IRB/IEC、Investigator、Sponsor和Data Governance；附录覆盖Investigator's Brochure、Clinical Trial Protocol以及Essential Records。对CRP来说，最关键的不是把每一条原文背下来，而是理解这些章节背后的质量逻辑：谁负责保护受试者、谁负责确保数据可信、哪些记录证明研究被正确设计和执行、哪些系统会影响数据完整性。

### Principles of ICH GCP逐条学习版
说明：以下为基于E6(R3)原则章节的学习化转译。为避免把网页变成原文复制，本系统提供“原文要义、中文理解、Sponsor责任、Investigator责任、CRP场景、违规案例、面试考点、Reviewer关注点”的训练版；完整英文原文请在法规附件库内嵌PDF中阅读。

#### Principle 1：伦理与受试者保护优先
原文要义：临床试验应遵循伦理原则，受试者权益、安全和福祉优先于科学和社会利益。中文理解：研究不能因为科学问题重要就牺牲患者保护。Sponsor责任是设计风险可控的研究并确保安全监督；Investigator责任是保护每位受试者并提供适当医疗照护；CRP场景包括审阅纳排、停药规则、ICF风险描述和SAE升级。违规案例：为了入组速度放宽关键排除标准，导致高风险患者暴露于不可接受风险。面试考点：如果研究目标和患者安全冲突，如何处理？答案应强调患者保护优先、升级讨论、必要时暂停或修订方案。Reviewer关注点：是否有足够安全监测、停药规则和知情同意。

#### Principle 2：科学合理性与方案清晰
原文要义：试验应有科学合理性，并由清晰、详细的Protocol描述。中文理解：机制假说、前期证据、研究设计和终点必须能回答一个真实问题。Sponsor责任是确保方案科学、可执行、可审评；Investigator责任是理解并按方案执行。CRP场景：Protocol Review中判断PICO、终点、剂量和对照。违规案例：主要终点不能回答主要目标，导致阳性结果无法支持注册。E6(R2)时代也强调方案，但R3更强调设计阶段的质量因素。Reviewer关注点：方案是否能产生可靠且可解释数据。

#### Principle 3：获益风险合理
原文要义：可预见风险和不便应与预期获益及试验价值权衡。中文理解：不是“有希望就能做”，而是风险、负担、治疗机会和证据价值要平衡。Sponsor责任是持续评估benefit-risk；Investigator责任是把个体患者风险纳入医疗判断。CRP场景：ADC-ILD、IO肺炎、肝损伤等风险是否被Protocol管理。违规案例：安全信号增加但仍继续无差别入组。面试考点：安全性信号出现是否暂停入组？答案要看严重性、频率、机制、可逆性、替代治疗和风险控制。

#### Principle 4：合格人员与充分资源
原文要义：试验相关人员应有适当资格、培训和资源。中文理解：好方案也会被不合格执行毁掉。Sponsor责任包括研究者选择、培训、供应商监督和资源确认；Investigator责任包括确保团队资质和授权。CRP场景：SIV医学培训、研究者会议、复杂AESI管理培训。违规案例：中心不了解免疫性肺炎处理，导致SAE识别延迟。Reviewer关注点：培训和职责记录是否支持研究质量。

#### Principle 5：独立伦理审查
原文要义：试验应获得IRB/IEC审查和持续监督。中文理解：伦理委员会不是盖章，而是保护受试者的独立机制。Sponsor责任是确保必要资料提交；Investigator责任是获得批准后实施并报告重要变更。CRP场景：ICF更新、方案修订、紧急安全措施、研究者信。违规案例：未获批准即实施增加风险的方案变更。面试考点：何时需要IRB/IEC再审？答案：风险增加、方案重要变化、ICF更新等。

#### Principle 6：知情同意真实充分
原文要义：受试者应在充分理解后自愿同意。中文理解：ICF不是签字表，而是风险、替代治疗、权利和负担的沟通过程。Sponsor责任是提供准确、可理解的ICF；Investigator责任是完成真实沟通。CRP场景：审阅风险语言、替代治疗、研究性治疗描述。违规案例：ICF未更新新发现ILD风险。Reviewer关注点：患者是否被充分告知重要风险。

#### Principle 7：质量应与风险和重要性成比例
原文要义：试验流程和质量措施应与参与风险和数据重要性相称。中文理解：RBQM不是少做，而是把资源放在关键风险。Sponsor责任是识别Critical to Quality factors并控制风险；Investigator责任是执行关键流程。CRP场景：PFS影像、SAE、随机化、入排、死亡日期是高优先级。违规案例：大量检查低价值字段，却漏掉关键终点数据。E6(R3)比R2更系统强调比例原则。

#### Principle 8：数据可靠性与可追溯
原文要义：试验数据应可靠、可追溯，并适合支持结论。中文理解：如果关键数据不可信，研究就不能支持患者、医生和监管决策。Sponsor责任是数据治理和系统控制；Investigator责任是源数据真实完整。CRP场景：Data Review、Query、CSR医学解释。违规案例：进展日期、死亡日期和后续治疗记录不一致。Reviewer关注点：数据完整性、审计追踪、缺失数据和偏离。

#### Principle 9：隐私与保密
原文要义：受试者隐私和个人数据应被保护。中文理解：临床研究数据可用不等于无限使用。Sponsor责任是数据保护和访问控制；Investigator责任是保护中心源数据和受试者身份。CRP场景：病例讨论、KOL材料、SAE叙述去标识化。违规案例：邮件中暴露患者姓名或身份证信息。

#### Principle 10：研究用药质量与管理
原文要义：Investigational Product应按适当质量标准生产、处理和使用。中文理解：药物质量、标签、随机编码、储存和回收直接影响患者安全和盲态。Sponsor责任包括CMC、供应、标签、编码和召回；Investigator责任包括中心药物管理。CRP场景：剂量错误、破盲、温控偏差对安全和数据解释的影响。Reviewer关注点：药物管理偏差是否影响结论。

#### Principle 11：计算机化系统与记录生命周期
原文要义：电子系统和记录应适合用途、受控、可靠并可审计。中文理解：现代试验依赖EDC、IRT、ePRO、影像平台和安全数据库，系统问题就是研究质量问题。Sponsor责任是系统验证、安全、用户管理和故障处理；Investigator责任是正确使用系统并维护记录。CRP场景：ePRO缺失、IRT错误、影像上传延迟、审计追踪异常。E6(R3)相较R2更突出Data Governance和Computerised Systems。

### GCP原则的CRP综合转译
E6(R3)原则强调受试者权益、安全和福祉优先于科学和社会利益。CRP在工作中必须把这句话转成可执行动作：方案中的纳排标准是否保护高风险患者？给药暂停和复治规则是否清楚？知情同意是否让患者理解试验性治疗、替代治疗和风险？当研究者认为患者可以继续用药，而方案要求暂停时，CRP必须提醒团队优先遵循患者安全和方案要求。

原则还强调研究应有科学合理性、合格人员、充分资源、独立伦理审查、可追溯记录和可靠数据。临床医生常把“科学合理”理解成机制合理，但Sponsor视角还要问：研究设计是否能回答问题？终点是否能被监管接受？统计假设是否有临床意义？数据来源是否可验证？如果这些问题没有回答，研究即使机制漂亮，也可能无法支持注册。

### Quality by Design
Quality by Design不是质量部门口号，而是Protocol开始前就要识别“关键质量因素”。在TNBC注册研究中，关键质量因素可能包括：PD-L1检测质量、随机化分层、PFS影像评估窗口、盲态独立中心评审、死亡日期、后续治疗、SAE上报、ADC相关ILD管理和中国样本量。CRP参与方案设计时要主动把这些内容变成具体流程，而不是等研究启动后靠query修补。

### Risk-based Quality Management
RBQM要求Sponsor识别、评估、控制、沟通、审查和报告风险。CRP要懂的重点是：风险不是抽象概率表，而是影响患者安全或关键数据可信度的具体问题。例如，一个研究的主要终点是PFS，那么影像缺失、评估窗口偏离、非盲态评估和进展后继续治疗记录不全，都是关键风险。一个ADC研究的关键安全风险是ILD，那么基线肺部病史、CT、症状教育、停药规则和复治禁忌就是风险控制措施。

### Investigator职责
研究者负责受试者医疗照护、知情同意、按方案执行、AE/SAE识别和报告、源数据真实性、药物管理和与IRB/IEC沟通。CRP面试中经常被问：Medical Monitor能否替研究者决定治疗？答案是否定的。研究者对患者医疗决定负责；Medical Monitor提供方案和产品相关医学解释，帮助研究者理解研究要求，并把系统性风险反馈给Sponsor。

### Sponsor职责
Sponsor负责研究设计、资源、职责分配、人员培训、研究者选择、监管和伦理沟通、监督、质量管理、安全评估与报告、数据与记录、统计分析、CSR和研究提前终止/暂停的沟通。对CRP来说，Sponsor职责意味着你不能只站在单个病例上看问题，还要看整个研究系统：某类SAE是否聚集？某个入排标准是否造成大量筛败？某个数据字段是否反复query？这些都可能提示方案或培训需要调整。

### Data Governance
E6(R3)单独强调Data Governance，说明现代试验的数据来源、系统和流转已经足够复杂。CRP要关心的数据不是所有字段，而是关键医学数据：诊断、分期、biomarker、入排证据、给药、AE/SAE、影像评估、进展、死亡、后续治疗。数据治理要求数据可追溯、可解释、可审计，并保护盲态。盲态研究中，谁能看非盲数据、哪些安全信息可能导致破盲、DMC如何运作，都属于数据治理问题。

### Computerised Systems
电子系统包括EDC、ePRO、IRT/IWRS、eTMF、中心实验室、影像平台、安全数据库和统计环境。E6(R3)强调系统应有适当程序、培训、安全、验证、发布管理、故障处理、技术支持和用户管理。CRP不需要做系统验证，但要知道系统失败会影响医学判断：如果IRT随机化错误，可能影响治疗分配；如果ePRO缺失，可能影响症状终点；如果影像上传延迟，可能影响PFS事件确认。

### Essential Records
Essential Records证明研究被合规设计、执行、监督、分析和报告。CRP最常接触的是Protocol、IB、ICF、SAP、Monitoring Plan、Medical Monitoring Plan、Safety Management Plan、DSUR、CSR、DMC材料、SAE叙述、研究者沟通信和培训记录。面试中如果问“为什么文件重要”，不要回答“审计要看”，而要回答：文件是患者保护和数据可信度的证据链。

### CRP工作中如何用到
- Protocol Review：用E6(R3)检查研究质量是否从设计阶段被嵌入。
- Medical Monitoring：用Investigator/Sponsor职责边界处理中心医学问题。
- Safety Review：用Sponsor安全评估职责判断个案和趋势。
- Data Review：用Data Governance思想审阅关键医学数据。
- Investigator Meeting：把关键质量因素和高风险流程讲给研究者。
- CSR：解释方案偏离、数据缺失、安全风险和结论稳健性。

### 面试官可能怎么问
Q1：E6(R3)最重要的变化是什么？
参考答案：E6(R3)从传统文件合规进一步转向Quality by Design、风险比例原则、数据治理、计算机化系统管理和患者中心。它要求Sponsor在设计阶段识别关键质量因素，并用RBQM保护受试者安全和结果可靠性。

Q2：Sponsor如何落实RBQM？
参考答案：Sponsor先识别影响患者安全和关键数据可信度的风险，再评估风险影响、发生可能性和现有控制，制定风险控制措施和阈值，持续监测、沟通和调整。比如肿瘤PFS研究要重点管理影像评估、随机化分层、SAE和死亡日期。

Q3：Data Governance为什么对CRP重要？
参考答案：CRP的医学判断依赖数据。如果关键医学数据不可追溯、缺失、被错误修改或导致盲态破坏，研究结论就不可靠。CRP要关注诊断、终点、安全和后续治疗等关键数据的完整性和医学合理性。

Q4：E6(R3)中患者中心化如何落地？
参考答案：患者中心化不是减少所有检查，而是在保护安全和数据质量的前提下减少不必要负担，例如优化访视窗口、使用远程随访、清楚解释风险、设计合理PRO，并确保患者能真正理解知情同意。
`
  ,
  "ich-suite": `
## ICH知识体系学习版：CRP如何把指南用到工作里
## E8(R1)：General Considerations for Clinical Studies
核心思想是Quality by Design、Critical-to-Quality Factors、Fit-for-Purpose Design和Patient Focus。CRP要用E8(R1)审Protocol concept：研究问题是否清楚，设计是否适合目的，关键质量因素是否被识别，患者负担是否合理。案例：TNBC一线研究若主要终点是PFS，影像评估、PD-L1检测、后续治疗和SAE管理就是关键质量因素。

## E9：Statistical Principles for Clinical Trials
E9是CRP理解统计语言的基础。它强调偏倚控制、随机化、盲法、分析集、终点、样本量、缺失数据和多重性。CRP不需要替统计师建模，但要能判断：ITT/FAS是否保护随机化，PP是否只是敏感性分析，样本量假设是否有临床意义，亚组是否预设。

## E9(R1)：Estimand and Sensitivity Analysis
Estimand回答“我们到底要估计什么治疗效应”。Intercurrent Event包括停药、换药、死亡、救援治疗、治疗交叉等会影响终点解释的事件。CRP在肿瘤研究中必须关注：进展后继续治疗、后续抗肿瘤治疗、因毒性停药、死亡前失访如何处理。Sensitivity Analysis用于检验结论是否稳健。

## E2A：Clinical Safety Data Management
E2A是SAE、SUSAR和加急报告的核心。CRP要理解Seriousness、Expectedness、Causality和Expedited Reporting。案例：患者死亡不自动等于SUSAR；必须判断是否严重、是否可疑相关、是否非预期。

## E2D：Post-Approval Safety Data Management
E2D关注上市后安全数据管理。CRP/医学部在上市后要理解自发报告、文献、真实世界数据、Signal Detection、PSUR/PBRER和RMP如何支持持续获益风险评估。

## E3：Clinical Study Reports
E3规定CSR结构。CRP审CSR时要确认研究设计、方案偏离、疗效、安全、统计和医学解释一致。CSR不是堆表格，而是向审评员讲清研究能证明什么、不能证明什么。

## M4：Common Technical Document
M4规定CTD模块结构。CRP主要参与Module 2临床综述/总结和Module 5临床研究报告。面试中可回答：M4让全球申报资料结构标准化，帮助审评员高效定位质量、非临床和临床证据。

## ICH指南与CRP能力对应表
| 指南 | CRP能力 | 工作场景 |
| E6(R3) | GCP与职责边界 | Protocol、Monitoring、Data Governance |
| E8(R1) | 质量源于设计 | Protocol concept、CtQ识别 |
| E9/E9(R1) | 统计解释 | SAP、CSR、终点解释 |
| E2A/E2D | 安全报告 | SAE、SUSAR、DSUR/PSUR |
| E3 | CSR写作 | 临床研究报告审阅 |
| M4 | 注册资料结构 | NDA/BLA/MAA支持 |
`
};

export const regulatoryManual: Record<string, string> = {
  "global-regulatory": `
## 全球法规体系：CRP必须读懂的监管地图
### 你需要掌握到什么程度
CRP不需要替注册同事写完整申报策略，但必须能听懂FDA、EMA、NMPA/CDE、PMDA和ICH在临床开发中的语言。面试中如果问法规，不是考你背法规条款，而是考你能否理解为什么同一个研究在美国、欧洲、中国和日本可能有不同沟通重点：人群外推、MRCT设计、终点接受度、安全数据库、加速路径、真实世界证据和上市后承诺。

### FDA
FDA管理美国药品临床开发与上市审评。CRP常见关键词包括IND、Pre-IND Meeting、End-of-Phase 2 Meeting、Type B Meeting、NDA/BLA、Accelerated Approval、Breakthrough Therapy、Fast Track、Priority Review和Advisory Committee。CRP要理解：FDA沟通非常重视清晰的问题列表、可审评证据和benefit-risk逻辑。EOP2会议尤其关键，因为它决定Phase III设计是否有机会支持注册。

### EMA
EMA管理欧盟集中审评路径，常见关键词包括CTA、MAA、CHMP、Scientific Advice、PRIME、Conditional Marketing Authorisation、Accelerated Assessment。EMA常更强调总体获益风险、欧洲临床实践、比较治疗、RMP和上市后风险管理。CRP在读欧洲审评文件时要关注：是否要求更长随访、是否限制适应证、是否要求额外药物警戒活动。

### NMPA/CDE
中国加入ICH后，临床开发语言显著国际化，MRCT、ICH E6、E17、真实世界证据、突破性治疗、附条件批准和优先审评越来越重要。CRP要特别关注中国人群数据是否充分、种族敏感性、PK/安全性一致性、中国标准治疗差异、桥接策略和CDE沟通交流会议。对于全球肿瘤研究，如果中国样本量不足，即使全球阳性，也可能面临本地外推和标签沟通压力。

### PMDA
日本PMDA关注日本人群数据、剂量、PK、安全性和本地临床实践。全球MRCT中，日本常要求早期参与，以避免后期桥接困难。CRP不一定频繁直接接触PMDA，但在全球开发会上要理解日本入组、剂量和安全性外推的重要性。

### FDA vs EMA vs NMPA速查表
| 维度 | FDA | EMA | NMPA/CDE |
| 临床试验申请 | IND | CTA按欧盟体系 | IND默示许可/沟通交流 |
| 上市申请 | NDA/BLA | MAA | NDA/BLA |
| 加速路径 | Accelerated Approval | Conditional MA | 附条件批准 |
| 突破性机制 | Breakthrough Therapy | PRIME | 突破性治疗品种 |
| 优先审评 | Priority Review | Accelerated Assessment | 优先审评审批 |
| 孤儿药 | Orphan Drug | Orphan Designation | 罕见病/鼓励目录相关路径 |
| RWE接受度 | 可用于支持特定场景 | 强调方法学和数据适用性 | 在部分场景逐步接受 |
| MRCT重点 | 设计和统计可解释 | 欧盟实践和获益风险 | 中国人群充分性和外推 |

### CRP必懂会议
- Pre-IND Meeting：讨论首次人体研究、非临床支持、起始剂量、早期方案。
- EOP2 Meeting：讨论Phase II结果、Phase III设计、终点、统计和安全数据库。
- Type B Meeting：FDA中常见关键开发节点会议类型。
- CDE沟通交流会议：用于中国开发策略、关键研究设计、附条件批准、临床价值等沟通。
- Pre-NDA Meeting：确认提交资料完整性、数据库成熟度、申报内容和关键风险。
- Advisory Committee / AdCom：公开专家委员会讨论重大获益风险争议。

### CRP工作中如何用到
Protocol Review时，CRP要问终点是否被目标监管地区接受；Data Review时，要问中国/亚洲亚组是否足够解释；Safety Review时，要问风险是否需要RMP或标签管理；Sponsor决策时，要问是否需要EOP2、CDE沟通或Scientific Advice。

### 面试问法与答案
Q：全球阳性研究为什么中国仍可能需要补充数据？
答：中国审评需要判断全球数据能否外推到中国患者，包括种族敏感性、PK、安全性、标准治疗、入组比例和疗效方向一致性。如果中国样本量太少，可能需要补充中国队列、桥接研究或上市后研究。

Q：加速批准是不是降低证据标准？
答：不是。加速或附条件批准通常用于严重疾病和未满足需求，可能接受替代终点或中期证据，但要求疗效幅度、风险可管理，并通常需要确认性研究或上市后承诺。
`
  ,
  "fda-regulatory": `
## FDA监管体系详解
FDA临床开发路径以IND为起点，NDA/BLA为上市申请终点。CRP最常参与的是围绕关键研究设计与安全数据进行医学输入。Pre-IND会议通常讨论首次人体研究的非临床支持、起始剂量、剂量递增、安全监测和早期方案。EOP2会议是开发分水岭，Sponsor会与FDA讨论Phase II数据是否足以支持进入Phase III、主要终点是否可接受、样本量与统计假设是否合理、DMC和中期分析如何设计。Pre-NDA会议则确认申报资料、数据库、CSR、安全汇总和标签问题。

### 加速路径
Fast Track、Breakthrough Therapy、Accelerated Approval和Priority Review都服务于严重疾病和未满足需求，但不是降低证据标准。Accelerated Approval可能基于替代终点，如ORR或PFS，但需要确认性研究。CRP在项目会上要能判断：替代终点是否合理预测临床获益？安全风险是否可管理？确认性研究是否已经启动或设计充分？

### AdCom
Advisory Committee通常发生在获益风险争议较大时。CRP要准备解释疾病需求、研究设计、疗效稳健性、安全风险、亚组和标签边界。面试回答时可说：AdCom不是单纯学术会议，而是公开审评风险沟通场景。
`,
  "ema-regulatory": `
## EMA监管体系详解
EMA强调集中审评、CHMP意见、Scientific Advice、PRIME、Conditional Marketing Authorisation和RMP。与FDA相比，EMA文件常更系统地呈现获益风险和风险管理计划。CRP需要关注欧洲标准治疗、对照合理性、生活质量、长期随访和药物警戒承诺。

### Conditional Marketing Authorisation
适用于严重或危及生命疾病、公共卫生紧急或孤儿药场景。条件批准要求未满足需求明确、获益风险为正、申请人能够补充完整数据。CRP要理解：条件批准后不是工作结束，而是确认性研究、PSUR/PBRER、RMP和额外安全活动会成为生命周期管理重点。

### RMP与CRP
RMP中的重要已知风险、重要潜在风险和缺失信息，需要转化为医生能执行的风险最小化措施。例如ADC相关ILD可要求医生教育、早期CT评估、停药规则和患者警示材料。
`,
  "nmpa-cde-regulatory": `
## NMPA/CDE与中国开发详解
中国加入ICH后，临床开发越来越强调国际一致标准，但本地证据仍然重要。CRP必须理解中国人群数据不是形式要求，而是获益风险能否外推到中国患者的证据基础。

### CDE沟通交流会议
常见议题包括关键研究设计、MRCT中国参与、附条件批准、突破性治疗、真实世界证据、上市后研究和儿童/罕见病开发。CRP需要为会议准备医学问题：目标人群是否符合中国临床实践？对照是否在中国可及？主要终点是否被接受？中国亚组样本量是否支持解释？

### MRCT与中国桥接
如果中国参与全球MRCT不足，可能需要PK桥接、安全性补充、扩展队列或上市后研究。肿瘤研究还要考虑中国后续治疗可及性对OS解释的影响。
`,
  "pmda-regulatory": `
## PMDA与日本开发详解
PMDA常关注日本人群数据、剂量合理性、PK/PD、安全性和本地临床实践。全球同步开发中，日本希望尽早参与MRCT，避免后期单独桥接。CRP在全球团队讨论中要理解：同一个剂量在不同人群中的暴露、安全性和可耐受性可能影响本地标签和用药管理。
`
};

export const trialDesignManual: Record<string, string> = {
  "rct": `
## RCT随机对照试验：CRP读Protocol的基准设计
RCT通过随机分配把已知和未知混杂尽量平衡，是确认疗效最常用、监管接受度最高的设计。CRP需要关注的不只是“有没有随机”，而是随机化比例、盲法、对照是否符合标准治疗、分层因素是否覆盖关键预后因素、主要终点是否客观、缺失数据如何处理、交叉和后续治疗是否影响OS解释。

### 适用场景
注册性III期、存在标准治疗、疗效差异需要严谨证明的场景。TNBC一线研究、辅助/新辅助研究、多数确证性肿瘤研究都优先考虑RCT。

### 优点
偏倚控制强，证据等级高，可支持标签和指南。随机化能减少医生选择患者造成的偏倚。

### 缺点
成本高、周期长、伦理和入组挑战大。若标准治疗快速变化，对照可能过时。

### CRP审核重点
对照是否合理；分层因素是否包括PD-L1、治疗线、内脏转移等关键因素；安全监测是否适合双盲；中期分析和DMC是否保护研究完整性。

### 面试问法
Q：为什么RCT比单臂研究证据强？
答：RCT通过随机化和对照减少混杂和选择偏倚，可以更可信地把疗效差异归因于治疗本身。
`,
  "single-arm": `
## Single-arm Trial单臂研究
单臂研究没有同期对照，通常用于罕见病、后线肿瘤、无有效标准治疗或早期信号探索。CRP要记住：单臂研究能证明抗肿瘤活性，但很难证明相对获益。

### 适用场景
后线TNBC、罕见分子亚型、疗效幅度非常大且自然史清楚的疾病。常用ORR、DoR、DCR作为主要或关键终点。

### 优点
速度快、样本量较小、适合早期PoC和高未满足需求。

### 缺点
历史对照不可比，患者选择偏倚明显，ORR不一定转化为PFS/OS获益。

### 监管接受度
在严重疾病、无有效治疗且疗效显著时，可能支持加速或附条件批准，但通常要求确认性研究。

### CRP审核重点
入组人群是否定义严格；疗效评估是否独立审查；DoR是否足够；安全性数据库是否充分；是否已有确认性研究计划。
`,
  "master-protocol": `
## Basket / Umbrella / Platform / Master Protocol
Master Protocol是一套总方案下管理多个治疗臂、人群或亚研究的设计。Basket按同一分子改变跨癌种，Umbrella按同一癌种不同biomarker分配治疗，Platform允许治疗臂动态进入或退出。

### 适用场景
肿瘤精准治疗、多个biomarker并行开发、快速筛选联合方案和长期学习型研究。

### 优点
共享基础设施，提高效率；适合快速迭代；有利于稀有人群。

### 缺点
统计复杂、操作复杂、知情同意复杂、DMC和多重性管理要求高。

### CRP审核重点
biomarker检测是否可靠；治疗臂进入/退出规则是否预设；患者分配是否清楚；安全信号是否能按治疗臂快速识别；沟通材料是否避免患者误解。
`,
  "adaptive-design": `
## Adaptive Design适应性设计
适应性设计允许在预设规则下根据中期数据修改研究，如样本量重估、剂量选择、早停无效、富集人群或删除治疗臂。关键是“预设”和“保护研究完整性”。

### 适用场景
早期剂量探索、平台研究、样本量不确定、biomarker富集可能性高的研究。

### 优点
提高效率，减少无效暴露，可能更快找到有效人群。

### 缺点
统计和执行复杂；需要DMC/IDMC；若规则不清会被质疑操纵结果。

### CRP审核重点
中期分析谁看数据；是否保护盲态；适应性规则是否写入Protocol/SAP；安全和疗效阈值是否有医学意义。
`
  ,
  "non-inferiority": `
## Non-inferiority Trial非劣效研究详解
非劣效研究要证明新治疗相对标准治疗“不差超过一个临床可接受界值”。它不是证明两者完全一样，而是证明疗效损失在可接受范围内，同时新治疗可能有安全性、便利性、依从性、成本或可及性优势。

### CRP关注
非劣效界值必须有历史证据和临床意义。对照药必须有效且执行质量高，否则可能出现“劣质对劣质也非劣”的问题。ITT和PP分析都重要：ITT偏向无差异，PP更能反映真正接受治疗效果；两者方向一致更有说服力。

### 面试问法
Q：非劣效研究最怕什么？
答：界值设定没有临床意义、对照有效性不稳定、依从性差导致结果向无差异偏移，以及把非劣效错误解读成疗效相同或更好。
`,
  "equivalence-trial": `
## Equivalence Trial等效研究详解
等效研究证明两种治疗差异落在预设上下界内，常用于生物类似药、剂型转换、桥接或PK/PD相似性场景。它与非劣效不同：非劣效只关心不能差太多，等效要求不能差太多也不能好太多，因为过强效果也可能提示产品并不相似或安全不同。

### CRP关注
等效界值、敏感终点、检测方法一致性、分析集和缺失数据都会影响结论。医学上要判断“统计等效”是否真的支持临床可替换。
`,
  "pragmatic-trial": `
## Pragmatic Trial实用性临床试验详解
实用性研究更贴近日常临床，纳入更广泛患者、允许常规治疗路径，关注治疗在真实世界中的效果。它适合回答“在常规医疗环境中是否有用”，而不是严格控制条件下的生物学疗效。

### CRP关注
终点要贴近临床实践，数据来源要可靠，混杂和依从性要被预先考虑。实用性不等于低质量，反而需要更强的数据治理。
`,
  "registry-study": `
## Registry Study登记研究详解
登记研究系统收集特定疾病、人群或治疗的数据，适合长期安全性、治疗路径、罕见事件、特殊人群和真实世界结局。肿瘤领域可用于HER2-low检测路径、ADC序贯、Post-IO治疗和脑转移人群。

### CRP关注
登记研究要预定义数据字典、终点定义、随访窗口、缺失数据处理和质量控制。最大风险是数据不完整、选择偏倚和终点不一致。
`
};

export const crpHandbookManual: Record<string, string> = {
  "protocol-review": `
## Protocol Review入职SOP扩展版
### 工作目的
确保方案能安全、合规、可执行地回答临床开发问题，并能支持未来CSR、注册沟通和医学传播。

### 输入文件
Protocol synopsis、完整Protocol、IB、SAP草案、竞品研究表、疾病指南、前期研究数据、TPP/CDP、监管会议纪要。

### 输出文件
CRP review comments、医学风险清单、Protocol Review Checklist、关键问题列表、给统计/运营/PV/注册的跨部门问题。

### 操作步骤
1. 先读研究问题：PICO是否清楚。
2. 再读背景：未满足需求和竞品格局是否支持研究价值。
3. 审人群：入排是否匹配未来标签，是否可执行。
4. 审治疗：剂量、减量、暂停、复治、合并用药是否清楚。
5. 审终点：主要终点是否能回答主要目标。
6. 审安全：AE/SAE/AESI、DLT、停药规则是否完整。
7. 审统计：分析集、样本量、分层、多重性是否合理。
8. 审执行：访视、影像、实验室、样本采集是否符合真实路径。

### 关键判断点
如果一个Protocol没有清楚回答“患者是谁、对照是谁、主要终点是什么、风险如何管、结果如何解释”，就不是成熟方案。

### 可复制模板
Major Comment: [Issue] The proposed inclusion criterion may exclude a clinically relevant population and reduce generalisability. [Rationale] In routine TNBC practice, patients with stable treated brain metastases are commonly encountered. [Recommendation] Consider allowing stable treated brain metastases with predefined safety monitoring and stratified analysis.

Minor Comment: Please align AE collection window in Section X with Safety Management Plan.
`,
  "safety-review": `
## Safety Review入职SOP扩展版
Safety Review的目的不是读line listing，而是判断是否出现新的风险、已知风险是否变重、风险管理是否需要升级。CRP需要准备SAE/死亡/AESI摘要、暴露校正发生率、Grade 3-5 AE、停药/减量、实验室异常和与同类药物对比。

### 操作步骤
1. 看死亡和危及生命事件。
2. 看AESI趋势，如ILD、免疫性肺炎、肝损伤。
3. 看时间关系和剂量关系。
4. 看去挑战/再挑战。
5. 看是否需要更新IB、ICF、Protocol或研究者信。

### 输出模板
Safety Concern: Suspected increase in Grade ≥2 ILD.
Evidence: 4 cases among 68 exposed patients, median onset 72 days, 2 required hospitalisation.
Assessment: Potential drug-related AESI; alternative causes not sufficient in 2 cases.
Action: Temporary enrolment pause for pulmonary review; update site training and imaging algorithm.
`,
  "data-review": `
## Data Review入职SOP扩展版
医学数据审阅关注数据是否医学合理，而不是替DM查格式。CRP重点审阅诊断、分期、biomarker、入排证据、给药、AE、实验室、影像、进展、死亡、后续治疗和停药原因。

### 好Query示例
The subject was recorded as having progressive disease on 12-Mar-2026, while the tumor assessment page indicates stable disease on the same date. Please clarify the investigator-assessed response and provide the source documentation basis.

### 常见错误
Query带有诱导性；医学问题过宽泛；没有说明矛盾数据位置；把医学判断问题写成行政问题。
`,
  "medical-monitor": `
## Medical Monitoring入职SOP扩展版
Medical Monitor负责持续医学支持和风险识别。典型输入包括中心医学问题、SAE narrative、AESI、实验室异常、入排边界病例、方案偏离和数据review发现。

### 工作边界
Medical Monitor不能替研究者决定患者治疗，但可以解释Protocol要求、产品风险、停药/复治规则和需要补充的信息。

### 记录模板
Question: Can a patient with prior adjuvant pembrolizumab be enrolled?
Assessment: Eligibility depends on recurrence interval, resolution of immune-related toxicity and protocol exclusion criteria.
Recommendation: Site should provide prior IO dates, reason for discontinuation and toxicity history for sponsor medical review.
`
  ,
  "query-review": `
## Query Review SOP详解
Query Review的目的，是让数据库中的医学矛盾被中心澄清，而不是诱导中心给出Sponsor想要的答案。CRP应优先review关键医学数据：入排证据、病理、biomarker、影像评估、AE/SAE、死亡、后续治疗和停药原因。

### 可复制模板
Query: The concomitant medication page indicates systemic corticosteroid use from 10-Feb-2026 to 20-Feb-2026, while the AE page does not report any immune-related adverse event during this period. Please confirm the indication for corticosteroid use and update the relevant AE page if applicable.

### 常见错误
不要写“Please add immune-related pneumonitis”，这会诱导。应该要求澄清用药原因和相关AE记录。
`,
  "medical-input-csr": `
## Medical Input to CSR SOP详解
CSR不是统计输出合集，而是研究医学故事的最终证据文件。CRP审阅CSR时要确认疾病背景准确、研究设计描述清楚、分析集和偏离解释合理、疗效结果不过度解读、安全性叙述完整、局限性诚实呈现。

### CRP审核重点
PFS/OS成熟度、删失、后续治疗、亚组一致性、死亡原因、AESI、停药率、剂量调整、重大方案偏离和数据cut-off。
`,
  "medical-input-ib": `
## Medical Input to IB SOP详解
IB帮助研究者理解研究药物已知信息和潜在风险。CRP需要确认IB中机制、非临床毒理、人体安全性、剂量依据、风险管理和研究者指导一致。

### CRP审核重点
新出现SAE是否需要更新IB；AESI管理是否清楚；同类药物风险是否充分；研究者是否能根据IB进行合理风险判断。
`,
  "medical-input-sap": `
## Medical Input to SAP SOP详解
SAP由统计团队主导，但CRP必须确认统计问题是否回答临床问题。分析集、主要终点、删失规则、缺失数据、亚组、多重性和敏感性分析都会影响医学解释。

### CRP问题清单
ITT/FAS是否接近随机化人群？mITT限制是否有医学理由？PFS删失规则是否可能偏倚？亚组是否预设？关键安全分析是否覆盖AESI？
`,
  "study-start-up": `
## Study Start-up医学工作详解
启动阶段CRP要把复杂Protocol转成中心能执行的医学规则。核心工作包括SIV医学培训、Study FAQ、入排边界问题、SAE上报培训、AESI管理算法、影像评估培训和研究者沟通路径。

### 输出物
医学培训PPT、中心FAQ、Medical Monitoring Plan、Safety Management Plan、Protocol Deviation医学评估流程。
`,
  "study-close-out": `
## Study Close-out医学工作详解
关闭阶段CRP要确保关键医学数据在锁库前闭环：死亡日期、进展日期、后续治疗、SAE随访、AESI结局、停药原因和重要方案偏离。锁库后CRP重点转向CSR、publication、审评问答和经验复盘。
`
};

export const regulatoryAttachmentManual: Record<string, string> = {
  "reg-attachment-ich-e6-r3": `
## ICH E6(R3)附件学习导读
### 这份PDF为什么重要
ICH E6(R3)是当前临床试验Good Clinical Practice（GCP）学习的核心文件。对临床医生转CRP来说，它不是“法规背诵材料”，而是理解药企如何设计、执行、监督、记录和解释临床试验的底层规则。你在网页中学习的Sponsor职责、Investigator职责、Quality by Design、Risk-based Quality Management、Data Governance、Computerised Systems和Essential Records，都来自这份文件的结构。

### 如何在网页内学习
上方PDF阅读框已经嵌入原始文件，可直接在网页内滚动阅读。建议不要从第一页硬读到最后，而是配合本系统的中文学习导读：先读网页里的CRP解释，再回到PDF中对应章节核对原文框架。后续FDA、NMPA/CDE、EMA、PMDA等法规PDF如果提供原文件，也会放入本模块并以内嵌阅读框呈现。

### 建议阅读顺序
1. 先读Introduction和Principles，建立GCP伦理与质量框架。
2. 再读Investigator，理解研究者对受试者医疗照护、知情同意、方案执行和安全报告的责任。
3. 再读Sponsor，理解药企对研究设计、质量管理、风险控制、安全评估、监查、数据和报告的责任。
4. 最后读Data Governance和Essential Records，理解现代临床试验为什么越来越强调电子系统、元数据、审计追踪和关键记录。

### 面试高频问法
Q：如果只能用一句话概括E6(R3)，你会怎么说？
参考答案：E6(R3)把GCP从传统文件合规推进到以患者保护和数据可靠性为核心的质量源于设计和基于风险管理体系，要求Sponsor和研究者按风险比例设计并执行临床试验。

Q：E6(R3)和CRP有什么关系？
参考答案：CRP要把E6(R3)原则转化为Protocol设计、安全监测、医学数据审阅、研究者培训和CSR解释。比如识别关键质量因素、定义AESI管理、保护盲态和保证关键终点数据可信。
`,
  "reg-ich-core-guidelines": `
## ICH核心指南如何对应CRP能力
| 指南 | 全称 | CRP能力 |
| ICH E6(R3) | Good Clinical Practice | GCP、职责边界、质量管理、数据治理 |
| ICH E8(R1) | General Considerations for Clinical Studies | 研究质量、关键质量因素、研究设计 |
| ICH E9 | Statistical Principles for Clinical Trials | 分析集、偏倚、终点、统计原则 |
| ICH E9(R1) | Estimands and Sensitivity Analysis | 治疗效应定义、中间事件、敏感性分析 |
| ICH E2A | Clinical Safety Data Management | SAE、SUSAR、加急报告 |
| ICH E2D | Post-Approval Safety Data Management | 上市后安全报告 |
| ICH E3 | Clinical Study Reports | CSR结构和医学解释 |
| ICH M4 | Common Technical Document | 注册申报资料结构 |
| ICH E17 | Multi-regional Clinical Trials | MRCT设计与地区一致性 |

### CRP学习方法
不要孤立读指南。Protocol Review时用E8和E6；SAP审阅时用E9和E9(R1)；SAE判断时用E2A；CSR审阅时用E3；全球注册讨论时用M4和E17。
`,
  "reg-fda-reference": `
## FDA法规参考包详解
FDA体系中CRP最常用的不是法规编号，而是开发节点语言。Pre-IND用于早期开发进入人体前，End-of-Phase 2用于确认Phase III方案，Pre-NDA用于上市申请前确认资料完整性。Formal meetings with FDA强调问题清晰、背景简洁、Sponsor立场明确和数据支持充分。

### CRP准备FDA会议材料
- Clinical background：疾病负担、治疗格局、未满足需求。
- Study rationale：为什么目标药物和设计能回答问题。
- Key data：疗效、安全、PK/PD、biomarker。
- Proposed design：人群、对照、终点、统计、安全监测。
- Questions to FDA：必须可回答，避免问开放式“是否同意我们全部策略”。

### 肿瘤终点
FDA常见肿瘤终点包括OS、PFS、DFS、EFS、ORR、DoR、pCR和PRO。CRP要能解释每个终点的临床意义和局限。例如ORR在单臂后线研究中可支持早期信号，但DoR短或毒性高会削弱获益风险。
`,
  "reg-nmpa-cde-reference": `
## NMPA/CDE参考包详解
中国临床开发的关键问题包括：是否同步参与全球MRCT，中国样本量是否充分，中国患者疗效和安全方向是否一致，标准治疗是否与全球一致，是否需要桥接或上市后研究。

### CDE沟通交流材料中CRP要准备什么
- 中国疾病流行病学和治疗路径。
- 中国可及标准治疗和对照合理性。
- 全球数据与中国亚组数据。
- 安全性在中国患者中的可解释性。
- 拟申请适应证与研究人群是否一致。
- 上市后研究或RMP建议。

### 常见审评关注
全球研究阳性但中国样本少；亚洲亚组方向不一致；对照在中国不是标准治疗；biomarker检测未在中国验证；安全数据库缺少中国长期暴露。
`,
  "reg-ema-pmda-reference": `
## EMA / PMDA参考包详解
EMA和PMDA都重视本地临床实践和获益风险。EMA常通过Scientific Advice提前沟通研究设计和终点，批准后通过RMP管理风险。PMDA关注日本人群数据和剂量/安全性外推。

### CRP在欧洲/日本讨论中的价值
CRP要把疾病和研究设计讲清楚：欧洲或日本患者是否与全球人群一致？对照是否符合当地实践？安全监测是否满足当地风险管理？如果本地样本少，是否有PK、机制和亚组数据支持外推？
`,
  "reg-meeting-playbook": `
## 监管沟通会议准备清单详解
### Pre-IND / 早期沟通
CRP重点准备首次人体风险、起始剂量、DLT定义、安全监测、停药规则和研究者培训。

### End-of-Phase 2 / EOP2
CRP重点准备Phase II疗效和安全综述、剂量选择、人群选择、主要终点、对照、统计假设和Phase III风险。

### CDE沟通交流会议
CRP重点准备中国临床需求、目标人群、对照合理性、中国样本策略、安全管理和本地注册可行性。

### Pre-NDA / Pre-BLA
CRP重点准备CSR完成度、数据库成熟度、死亡/SAE随访、亚组、标签边界和获益风险叙事。

### Advisory Committee
CRP要能把复杂数据变成清楚故事：患者需要什么、研究证明了什么、风险是什么、如何管理、标签应该给谁。
`
};

const stageFramework = (stage: string, focus: string, caseLine: string) => `
## ${stage} 教材级章节
## 1. 这个阶段到底回答什么问题
${stage} 阶段不是流程图上的一个盒子，而是Sponsor做下一步投资决策的证据关口。CRP不一定亲自做化学、毒理或注册文件，但必须理解这个阶段产生的证据会如何影响后续Protocol、风险管理、入排标准、剂量、终点和监管沟通。${focus}

## 2. 关键概念与中英文对照
- Target Identification / 靶点发现：寻找与疾病发生、进展或耐药相关的分子或通路。
- Target Validation / 靶点验证：证明干预该靶点有可能产生治疗价值。
- Candidate Selection / 候选药物选择：在活性、选择性、成药性、安全窗口和可生产性之间做取舍。
- Pharmacokinetics, PK / 药代动力学：药物在体内吸收、分布、代谢、排泄。
- Pharmacodynamics, PD / 药效动力学：药物暴露与生物学效应之间的关系。
- Go/No-Go Decision / 继续或停止开发决策：基于疗效、安全、可行性、监管和商业价值决定下一步。

## 3. CRP需要了解什么
CRP不是替代Discovery scientist、Toxicologist、Statistician或Regulatory lead，而是要理解跨职能证据如何转化为临床研究设计。例如ADC项目中，靶点在肿瘤和正常组织表达决定安全窗口；payload和linker影响毒性谱；动物毒理中的肺、肝、骨髓信号会影响FIH纳排、DLT定义和AESI。IO项目中，靶点机制、免疫激活风险和潜在irAE会影响排除自身免疫病、激素使用限制和复治规则。TNBC项目中，疾病异质性、biomarker、治疗线和竞品速度决定研究人群和终点。

## 4. Sponsor决策逻辑
Sponsor会问五个问题：第一，科学假设是否足够强；第二，证据是否能支持进入下一阶段；第三，风险是否可管理；第四，监管路径是否清楚；第五，商业窗口是否还存在。CRP参与讨论时，不能只说“临床上有需求”，还要说清楚需求是否能被当前资产差异化满足，以及下一项研究能否产生可决策证据。

## 5. 典型案例
${caseLine}

## 6. 常见失败原因
- 靶点机制在临床中不成立，动物或体外模型外推失败。
- 剂量无法同时满足疗效和安全窗口。
- Biomarker选择错误，导致获益人群被稀释。
- 终点选择不能支持监管或临床采用。
- 竞品提前改变标准治疗，使原方案对照过时。
- 安全性信号出现后没有及时调整方案、培训和风险管理。

## 7. CRP工作中如何用到
- 审Protocol时追溯非临床和早期临床证据是否支持剂量、人群和终点。
- 做Medical Monitoring时理解机制相关风险。
- 做Safety Review时判断个案是否符合产品风险谱。
- 做Sponsor决策时把医学、监管和商业证据整合成Go/No-Go建议。

## 8. 面试可能怎么问
Q：CRP为什么要懂${stage}？
参考答案：CRP不需要执行所有${stage}技术工作，但必须理解该阶段证据如何影响后续临床方案。比如非临床毒理信号会决定FIH纳排和安全监测，Phase II PoC信号会决定Phase III人群、终点和Go/No-Go。

Q：如果${stage}数据不完整但商业机会很大，是否应该推进？
参考答案：不能只看商业机会。应判断缺口是否影响患者安全或关键结论，能否通过补充研究、风险控制、适应性设计或转化研究弥补。如果核心风险不可控，应暂停或修改策略。
`;

export const drugDevelopmentManual: Record<string, string> = {
  "drug-stage-drug-discovery": stageFramework(
    "Drug Discovery",
    "在药物发现阶段，重点是从疾病生物学出发找到可干预靶点，并通过体外、体内、组学、遗传学和临床样本证据证明靶点与疾病相关。Lead Discovery和Lead Optimization要在活性、选择性、ADME、可生产性和初步安全性之间平衡。",
    "ADC开发中，TROP2或HER2-low并不是看到表达就能开发，必须评估肿瘤表达强度、正常组织表达、内吞效率、payload敏感性和旁观者效应。IO开发中，PD-1/PD-L1成功不是因为单一靶点表达，而是免疫逃逸机制、T细胞功能恢复和临床可测biomarker共同支持。TNBC项目中，靶点发现还要考虑异质性：basal-like、免疫热/冷、BRCA/HRD、HER2-low和TROP2表达都可能指向不同策略。"
  ),
  "drug-stage-preclinical": stageFramework(
    "Preclinical",
    "临床前阶段回答“能否安全进入人体”。Pharmacology证明药效，Toxicology寻找靶器官毒性，PK/PD建立暴露-效应关系，Safety Pharmacology评估心血管、呼吸和中枢风险，GLP毒理和IND-enabling studies支持监管申请。",
    "ADC常见毒理包括骨髓抑制、肝毒性、肺毒性和payload相关组织损伤；免疫治疗可能出现细胞因子释放、免疫激活和种属相关外推困难。FIH起始剂量通常综合NOAEL、MABEL、药理活性和安全因子。FDA和NMPA都会关注非临床信号是否被临床方案充分转化为纳排、安全监测和停药规则。"
  ),
  "drug-stage-ind-cta": stageFramework(
    "IND / CTA",
    "IND/CTA阶段把CMC、非临床和临床方案整合成监管可审评包。核心不是提交文件，而是说服监管机构：研究药物质量可控、人体暴露风险可接受、临床方案能保护受试者并产生有意义数据。",
    "一个ADC IND package通常要解释抗体、linker、payload、DAR、稳定性、杂质、非临床毒理、起始剂量、DLT、AESI和FIH方案。Pre-IND Meeting可提前确认起始剂量、剂量递增、哨兵给药、DLT窗口和停止规则。常见发补包括CMC可比性不足、毒理恢复期不够、IB风险描述不清、Protocol安全规则不充分。"
  ),
  "drug-stage-phase-i": stageFramework(
    "Phase I",
    "Phase I回答首次人体安全性、耐受性、PK/PD、剂量递增和推荐后续剂量。Oncology Phase I常在患者中开展，不只是健康志愿者研究。SAD/MAD、3+3、BOIN、CRM、MTD、DLT、RP2D和Expansion Cohort是核心概念。",
    "T-DXd和sacituzumab govitecan等ADC剂量探索要同时观察疗效信号和payload毒性；pembrolizumab等IO药物剂量探索常不完全依赖MTD，因为免疫治疗可能在低剂量达到靶点占有。CRP要理解为什么RP2D不等于MTD：后续剂量要平衡长期安全、疗效、暴露、联合潜力和真实世界可用性。"
  ),
  "drug-stage-phase-ii": stageFramework(
    "Phase II",
    "Phase II是很多药物死亡的阶段，因为它要从早期信号走向Proof of Concept、Dose Selection、Biomarker Selection和Go/No-Go。Single-arm Phase II适合强信号或无标准治疗；Randomized Phase II更能判断相对获益；Simon two-stage常用于ORR早期筛选。",
    "如果一个TNBC ADC项目ORR提高但DoR短、PFS无趋势且Grade 3以上毒性增加，Sponsor不应直接进入Phase III。应分析患者选择、剂量、biomarker、后续治疗、影像评估和安全管理。很多药死在Phase II，不是因为完全无效，而是因为信号不足以支持昂贵Phase III或无法找到可获益人群。"
  ),
  "drug-stage-phase-iii": stageFramework(
    "Phase III",
    "Phase III是注册研究，目标是用足够稳健的数据证明获益风险。Superiority、Non-inferiority、Equivalence、Interim Analysis、Multiplicity、DMC、MRCT、China subgroup和Bridging Strategy都必须提前设计。",
    "KEYNOTE-355说明biomarker和CPS cut-off会决定一线TNBC IO标签；ASCENT说明随机对照和OS获益能把ADC从活性信号推向临床价值；DESTINY-Breast04说明HER2-low检测定义可重塑疾病分类。CRP要关注对照是否过时、终点是否被接受、中国样本是否充分、DMC如何保护研究完整性。"
  ),
  "drug-stage-nda-bla-maa": stageFramework(
    "NDA / BLA / MAA",
    "上市申请阶段把CMC、非临床、临床、统计、安全和获益风险整合为可审评证据。NDA适用于小分子，BLA适用于生物制品，MAA是欧洲上市申请。Priority Review、Accelerated Approval、Breakthrough Therapy、Conditional Approval、ODAC/AdCom、Label Negotiation和RMP是核心议题。",
    "肿瘤药可能基于PFS、OS、ORR或pCR申请批准，但审评员会追问疗效是否有临床意义、安全是否可管理、亚组是否一致、标签人群是否过宽、确认性研究是否充分。Label negotiation常决定适应证、治疗线、biomarker、警示和剂量管理。"
  ),
  "drug-stage-post-marketing": stageFramework(
    "Post Marketing",
    "上市后阶段包括Phase IV、RWE、PASS、Registry、Label Expansion、Pharmacovigilance、Signal Detection和Lifecycle Management。获批不是终点，而是更大人群、更长暴露和真实世界复杂用药的开始。",
    "ADC上市后需要持续监测ILD、骨髓抑制、肝毒性和真实世界剂量调整；免疫治疗上市后会持续积累罕见irAE、特殊人群和联合用药风险。CRP/医学部要把真实世界问题反馈到标签更新、医生教育、RMP、后续研究和适应证扩展。"
  )
};

export const sampleSizeManual: Record<string, string> = {
  "sample-size-masterclass": `
## 样本量计算专题：医生能看懂的版本
## 1. 样本量不是公式，是研究承诺
样本量决定研究是否有足够能力回答问题。对CRP来说，重点不是手算复杂公式，而是理解输入参数是否有临床意义：Alpha、Power、Effect Size、Dropout、事件数、Hazard Ratio、ORR、pCR、PFS、OS、非劣效界值和可入组性。样本量太小，研究可能漏掉真实有效治疗；样本量太大，可能浪费资源并让微小无临床意义差异显著。

## 2. 优效性研究
Superiority trial要证明新治疗优于对照。输入包括预期差异、标准差或事件率、Alpha和Power。肿瘤PFS/OS研究常由事件数驱动，而不是单纯患者数驱动。假设PFS HR=0.75、Power 90%、双侧Alpha 0.05，统计师会推导所需事件数，再根据入组速度和随访时间估算样本量。

## 3. 非劣效和等效
Non-inferiority trial的核心是界值。界值必须有历史证据和临床可接受性。例如新药更安全、更方便，但疗效允许最多损失多少？Equivalence trial则要求差异落在上下界内，常用于生物类似药或桥接。

## 4. 二分类终点：ORR和pCR
ORR和pCR样本量常基于两组率差或单臂阈值。单臂ORR研究可能用Simon two-stage：第一阶段若响应太少就停止，避免无效治疗继续暴露。CRP要问：ORR阈值来自哪里？历史对照是否可比？DoR是否足够？pCR是否能预测长期获益？

## 5. 生存终点：PFS和OS
PFS/OS样本量本质是事件数设计。患者数只是获得足够事件的工具。CRP要关注：随访是否足够、删失是否合理、后续治疗是否影响OS、入组速度是否现实、中国亚组事件数是否足够解释。

## 6. RWE研究
RWE样本量更复杂，因为混杂、数据缺失和事件定义不一致会降低有效信息量。CRP要和统计团队确认主要问题是描述、比较还是外部对照；是否需要PSM/IPTW；关键变量是否可获得。

## 7. CRP、Sponsor、Reviewer各看什么
- CRP：假设差异是否有临床意义，终点是否可测，入组是否现实。
- Sponsor：样本量是否匹配投资、时间、竞争窗口和注册路径。
- Reviewer：Alpha控制、Power、事件数、缺失数据、亚组和敏感性分析是否支持结论。
`,
  "clinical-statistics-metrics": `
## 统计学关注指标：CRP读数指南
## HR、OR、RR、ARR、NNT
Hazard Ratio (HR)用于时间到事件终点，表示瞬时事件风险相对比较；Odds Ratio (OR)常用于二分类结局，事件较常见时会夸大相对风险；Risk Ratio (RR)更直观；Absolute Risk Reduction (ARR)告诉绝对获益；Number Needed to Treat (NNT)把获益转化为临床沟通语言。

## Median PFS / Median OS
中位PFS/OS容易理解，但可能忽略曲线形态。免疫治疗有延迟分离或长尾获益时，单看中位数会低估部分患者长期获益。CRP要结合HR、CI、KM曲线、风险表和随访成熟度。

## Landmark Analysis与RMST
Landmark Analysis在固定时间点比较生存概率，适合解释特定时间获益；Restricted Mean Survival Time (RMST)比较限定时间内平均无事件/生存时间，在比例风险假设不成立时有价值。

## Multiplicity与Hierarchical Testing
多终点、多亚组、多中期分析会增加假阳性风险。Hierarchical Testing按预设顺序检验，Graphical Testing用图形化alpha分配。CRP要懂：如果统计层级没走到某终点，即使P值好看，也可能只是描述性。

## Subgroup和Sensitivity
亚组分析用于一致性和假设生成，不能随意当作确证结论。Sensitivity Analysis用于检验结果对缺失、删失、偏离或模型假设是否稳健。
`
};

export const crpMindsetManual: Record<string, string> = {
  "how-a-crp-thinks": `
## How a CRP Thinks：30个身份转换案例
## 1. 同一个SAE
- 患者视角：我发生了严重问题，治疗是否还安全？
- 研究者视角：如何治疗患者，是否需要停药和上报？
- CRA视角：是否按时收集和录入SAE资料？
- CRP视角：事件是否符合已知风险、是否需要补充信息、是否影响方案和其他患者？
- Sponsor视角：是否构成信号，是否需要暂停、修订、监管报告？
- Reviewer视角：安全风险是否可管理，标签和RMP是否足够？

## 2. 同一个PFS阳性结果
患者看是否延缓进展；研究者看临床获益和毒性；CRA看数据完整；CRP看曲线、删失、后续治疗、亚组和医学意义；Sponsor看是否支持注册和商业定位；Reviewer看统计稳健性和获益风险。

## 3. 同一个入排边界病例
患者希望入组；研究者希望给治疗机会；CRA查方案；CRP判断安全、方案一致性和数据解释；Sponsor看是否暴露系统性入组问题；Reviewer看方案执行是否一致。

## 30个训练题清单
1 SAE死亡；2 免疫性肺炎；3 ADC-ILD；4 ALT/AST升高；5 入组边界；6 影像窗口偏离；7 PFS阳性OS不成熟；8 ORR高DoR短；9 中国样本少；10 竞品获批；11 方案偏离；12 Query争议；13 研究者要求复治；14 DMC建议暂停；15 Biomarker检测失败；16 患者撤回同意；17 后续治疗缺失；18 中期分析过界；19 亚组方向不一致；20 RWE外部对照；21 单臂申请上市；22 安全数据库小；23 标签适应证过宽；24 KOL质疑终点；25 CDE要求补充资料；26 AdCom前准备；27 CSR安全叙述；28 IB更新；29 SIV培训；30 Study close-out数据锁库。
`
};

export const interviewDeepManual: Record<string, string> = {
  "interview-deep-answers": `
## 核心面试题深度答案库
## 1. 为什么离开医院？
面试官考察点：你是否逃避临床压力，还是有清晰职业动机。普通回答：想换平台、想去药企发展。优秀回答：我不是否定临床，而是希望把临床经验放大到药物研发和证据生成层面。在医院我看到TNBC、HER2-low等患者仍有未满足需求，也意识到一个治疗方案进入临床前需要严谨的Protocol、安全管理、统计和监管证据。CRP岗位能让我把疾病理解、患者路径和研究者沟通经验转化为开发质量。乳腺外科医生版本：我熟悉乳腺癌诊疗路径、病理分型、新辅助/辅助治疗和患者决策，这些经验能帮助我审阅肿瘤研究方案、判断终点意义并与研究者沟通。
避坑：不要说“不想值班”“医院太累”。Follow-up：你缺什么？答案：我需要系统补足GCP、PV、统计和药企跨部门协作，但我已经用ICH E6、Protocol拆解和PV案例在补齐。

## 2. AE与SAE区别？
面试官考察点：PV基础和法规思维。普通回答：SAE更严重。优秀回答：AE是受试者用药后任何不利医学事件，不要求与药物相关；SAE是满足死亡、危及生命、住院或住院延长、永久残疾、先天异常或重要医学事件等严重性标准的AE。CRP回答还要补充Seriousness和Severity不同，Severe是临床强度，Serious是法规严重性。Follow-up：SUSAR是什么？答案：严重、可疑相关且非预期的不良反应。

## 3. ITT与PP区别？
面试官考察点：是否理解随机化和偏倚。优秀回答：ITT按随机分组分析，保护随机化，接近真实临床决策；PP只分析符合方案者，可作为敏感性分析，但可能因排除早停、依从性差或偏离患者而产生选择偏倚。CRP岗位回答要补充：如果ITT和PP方向不一致，我会分析方案偏离、缺失数据、治疗交叉和依从性。

## 4. 如何设计III期研究？
面试官考察点：系统开发思维。优秀回答：我会从PICO开始定义目标人群、干预、对照和终点；再确认主要终点是否有临床意义和监管接受度；统计上明确效应量、样本量、Alpha、Power、分析集和多重性；安全上设计AESI、DMC和停药规则；运营上评估入组、MRCT和中国样本策略。

## 5. Protocol Review重点是什么？
优秀回答：Protocol Review不是改语法，而是判断研究能否安全、可信、可执行地回答开发问题。我会重点看研究背景、目标人群、入排、对照、终点、统计假设、安全管理、剂量调整、偏离处理、数据收集和竞品可比性。
`
};

export const reviewerDeepManual: Record<string, string> = {
  "think-like-fda": `
## Think Like FDA：审评员思维训练
## Benefit-Risk Assessment怎么写
FDA视角不会只看P值，而是看临床需求、疗效大小、证据可靠性、安全风险、风险管理、标签边界和上市后承诺。一个Benefit-Risk Assessment应包括：疾病严重性、现有治疗、研究设计、主要疗效、关键次要终点、安全性、数据完整性、亚组、一致性、未解决问题和建议结论。

## 10个FDA式案例
1 单臂ORR高但DoR短：倾向补充资料或要求确认性研究。2 PFS阳性但毒性明显：可能限制适应证并加强RMP。3 OS不成熟：要求继续随访。4 亚组不一致：限制标签或要求解释。5 安全数据库小：要求上市后研究。6 Biomarker检测不标准：要求伴随诊断/检测验证。7 替代终点申请加速批准：看未满足需求和确认性研究。8 竞品改变标准治疗：要求更新对照解释。9 DMC早停：审查偏倚和成熟度。10 RWE扩展适应证：审查数据质量和混杂控制。
`,
  "think-like-nmpa": `
## Think Like NMPA：CDE审评思维训练
## 中国数据是否充分
CDE视角会问：全球MRCT中中国患者数量是否足够？疗效方向是否一致？安全性是否可解释？PK是否存在差异？对照是否符合中国临床实践？中国后续治疗是否影响OS？若数据不足，可能要求补充中国队列、桥接研究、上市后研究或限制适应证。

## 10个NMPA式案例
1 全球阳性中国样本少：补充资料或上市后研究。2 亚洲亚组方向不一致：要求解释和补充。3 中国标准治疗不同：质疑对照。4 附条件批准：要求确认性研究。5 RWE支持扩展：看数据质量。6 安全信号中国暴露少：要求风险管理。7 Biomarker检测在中国未验证：要求本地检测一致性。8 单臂研究申请：看未满足需求和DoR。9 真实世界外部对照：审查混杂。10 标签人群宽于研究人群：限制适应证。
`
};

export const protocolStudyManual: Record<string, string> = {
  "keynote-522-deep-dive": `
## KEYNOTE-522详细解读
KEYNOTE-522回答早期高危TNBC中，新辅助化疗联合pembrolizumab并在术后继续pembrolizumab，是否能提高pCR并改善EFS。PICO中Population是早期高危TNBC，Intervention是pembrolizumab联合新辅助化疗后辅助pembrolizumab，Comparator是安慰剂联合相同化疗，Outcome包括pCR和EFS。设计逻辑是早期TNBC复发风险高，新辅助阶段能快速观察pCR，辅助阶段继续免疫可能巩固微小残留病灶控制。CRP要重点关注pCR定义、手术时点、术后治疗依从性、免疫相关AE、长期EFS随访和早期毒性对手术的影响。Sponsor视角会关注这项研究如何把IO从晚期推进到治愈意图场景；审评员会关注pCR改善是否转化为EFS获益，以及长期安全性是否可接受。未来开发启发是：早期TNBC终点不能只看短期pCR，还要证明EFS和安全性平衡。
`,
  "impassion130-deep-dive": `
## IMpassion130详细解读
IMpassion130研究atezolizumab联合nab-paclitaxel用于一线转移性TNBC。研究问题是PD-L1阳性TNBC患者是否能从PD-L1抑制剂联合化疗中获益。PICO中人群是一线mTNBC，干预是atezolizumab+nab-paclitaxel，对照是安慰剂+nab-paclitaxel，终点包括PFS和OS。该研究的重要性在于开启TNBC免疫治疗时代，也暴露出伴随诊断、PD-L1检测平台、适应证边界和后续验证复杂性。CRP应关注PD-L1 IC评分与CPS体系差异、化疗骨架选择、OS统计层级、安全性和监管区域差异。Sponsor视角要看到：一个阳性研究不等于开发路径永远稳固，后续确认、检测标准和竞品变化会影响生命周期。
`,
  "tropion-breast01-deep-dive": `
## TROPION-Breast01详细解读
TROPION-Breast01评估TROP2 ADC datopotamab deruxtecan在既往治疗HR+/HER2-乳腺癌中的价值。虽然不是TNBC核心研究，但对TROP2 ADC开发地图极重要。CRP要关注ADC payload、ILD/口腔炎等毒性、既往CDK4/6和化疗暴露、人群异质性、PFS与OS成熟度、与已有ADC的差异化。Sponsor视角要问：疗效优势是否足以抵消毒性管理复杂度？未来是否能扩展到TNBC、一线或联合IO？审评员会关注安全性数据库、ILD管理、亚组一致性和标签定位。
`,
  "destiny-breast04-deep-dive": `
## DESTINY-Breast04详细解读
DESTINY-Breast04重塑HER2-low乳腺癌治疗格局。研究问题是HER2-low既往治疗患者是否能从trastuzumab deruxtecan获益。PICO中Population是HER2-low不可切除或转移性乳腺癌，Intervention是T-DXd，Comparator是医生选择治疗，Outcome包括PFS和OS。该研究的核心意义是把HER2表达从阳性/阴性二分法推进到低表达可治疗人群。CRP要关注HER2-low检测一致性、IHC 1+与2+/ISH-判读、ILD风险、HR阳性和TNBC亚组、真实世界再检测。Sponsor启发是：检测路径和病理教育本身就是开发策略的一部分。
`,
  "destiny-breast06-deep-dive": `
## DESTINY-Breast06详细解读
DESTINY-Breast06进一步探索HER2-low/HER2-ultralow更早线治疗价值。CRP阅读时要关注人群定义是否会改变临床检测实践、对照治疗是否符合标准、PFS/OS成熟度、安全性尤其ILD、以及HER2表达动态变化。Sponsor视角要判断：扩展人群是否带来足够临床价值，还是会因检测不稳定导致真实世界使用混乱。审评员可能重点问HER2-ultralow检测可重复性、病理一致性和获益风险。
`,
  "begonia-deep-dive": `
## BEGONIA详细解读
BEGONIA是TNBC一线联合策略探索平台，关注不同IO/ADC/化疗组合的早期信号。CRP要把它作为“早期组合开发如何生成PoC”的案例，而不是注册性研究。重点看ORR、DoR、安全run-in、停药率、剂量优化和哪些组合值得进入随机确认。Sponsor视角要避免被小样本ORR冲昏头脑，必须看获益持续性、毒性可管理性和可注册对照选择。
`,
  "ascent-04-deep-dive": `
## ASCENT-04详细解读
ASCENT-04代表TROP2 ADC向一线TNBC或与IO联合方向推进的开发逻辑。CRP要关注既往IO暴露、PD-L1状态、对照治疗、ADC+IO毒性叠加、PFS/OS终点和后续ADC序贯。Sponsor视角要问：相比既有IO+化疗或ADC单药，联合是否有足够增量价值？审评员会关注安全性、亚组一致性、后续治疗和适应证边界。
`
};

export const protocolDeepDives: Record<string, string> = {
  "keynote-355-deep-dive": `
## KEYNOTE-355完整拆解
## 1. 研究背景
转移性三阴性乳腺癌（TNBC）长期以化疗为主，疾病进展快、预后差、可用靶向治疗有限。免疫治疗在TNBC中的开发逻辑来自肿瘤免疫原性、TILs较高、PD-L1表达和化疗可能诱导免疫原性细胞死亡。KEYNOTE-355要回答的问题不是“PD-1是否有生物学活性”，而是“在一线晚期TNBC中，pembrolizumab联合化疗能否在合适人群带来可注册、可临床采用的获益”。

## 2. 研究问题
核心问题是：在既往未接受晚期系统治疗的不可切除局部复发或转移性TNBC患者中，pembrolizumab加化疗是否优于安慰剂加化疗？更关键的是，PD-L1 CPS cut-off如何定义获益人群。CRP阅读此研究时要意识到，biomarker不是附属分析，而是决定标签、临床使用和商业定位的核心。

## 3. PICO
- Population：既往未接受晚期系统治疗的局部复发不可切除或转移性TNBC。
- Intervention：pembrolizumab联合研究者选择的化疗。
- Comparator：安慰剂联合化疗。
- Outcome：PFS和OS，按PD-L1 CPS人群进行关键分析，同时关注ORR、DoR和安全性。

## 4. 设计逻辑
一线晚期场景适合随机双盲III期设计，因为存在标准化疗对照，且需要区分免疫联合带来的真实增益。允许不同化疗骨架更贴近临床，但也增加异质性，因此分层和亚组解释很重要。PD-L1 CPS富集是关键设计逻辑：如果全人群获益稀释，CPS较高人群可能体现更明确免疫获益。

## 5. 终点选择
PFS能较早反映疾病控制，OS更具临床意义但受后续治疗影响。免疫治疗研究中还要看DoR和KM曲线尾部，因为少数患者长期获益可能被中位数低估。CRP要关注PFS是否由盲态独立中心评审支持、影像评估间隔是否均衡，以及进展后免疫治疗或其他后续治疗是否影响OS。

## 6. 分层因素
此类研究通常关注化疗类型、PD-L1状态、既往治疗间隔或地理区域等因素。CRP需要判断分层因素是否覆盖强预后因素和强预测因素。若PD-L1是预测获益关键，cut-off选择必须预设并有检测方法学支持。

## 7. 样本量逻辑
样本量服务于主要终点和关键人群。若同时检验全人群和PD-L1阳性人群，就涉及多重性控制。CRP不必计算样本量，但要判断事件数、随访时间和亚组样本是否足以支持标签。

## 8. 统计分析
关键是分层Cox模型、HR、CI、P值、多重性控制和中期/最终分析。CRP要检查统计层级是否保护I类错误，避免把探索性亚组当成确证结论。

## 9. 疗效结果
KEYNOTE-355的重要启发是：免疫治疗获益高度依赖PD-L1 CPS定义的人群。PFS和OS结果需要结合CPS cut-off解释，不应简单说“所有TNBC都适合PD-1”。医学沟通中要清楚说明获益人群、检测方法和与化疗骨架的关系。

## 10. 安全性结果
pembrolizumab联合化疗的安全性要同时看化疗毒性和免疫相关AE。CRP要关注免疫性肺炎、肝炎、内分泌异常、皮疹、结肠炎，以及因AE导致停药的比例。研究者培训必须强调irAE早识别和激素处理。

## 11. 阳性的关键原因
关键在于一线场景、合理联合化疗、PD-L1富集、随机对照设计和终点选择。若不进行biomarker分层，获益可能被稀释，临床和监管解释都会变弱。

## 12. 如果我是CRP，我会重点关注什么
- PD-L1检测流程、样本质量和CPS判读一致性。
- 影像评估窗口和PFS事件质量。
- irAE识别、分级、处理和复治规则。
- 后续治疗收集，尤其影响OS解释。
- 中国人群样本量和治疗可及性是否支持本地沟通。

## 13. 如果我是Sponsor，我会如何评价
这是一个通过biomarker选择实现差异化的注册研究。Sponsor应围绕CPS人群建立标签、医学教育、检测路径和商业策略，同时准备解释为什么低CPS人群获益不足。

## 14. 如果我是审评员，我会问什么
- PD-L1检测是否标准化？
- CPS cut-off是否预设，是否有统计控制？
- PFS和OS获益是否一致？
- 安全风险是否可管理？
- 标签是否应限制在特定CPS人群？

## 15. 对未来TNBC开发的启发
TNBC不是单一疾病。未来开发必须把biomarker、治疗线、既往IO暴露、ADC序贯和真实世界可及性纳入方案设计。CRP要学会从“药物有效”升级为“在哪类患者、哪个治疗线、用什么终点证明有效”。
${standardTail}
`,

  "ascent-deep-dive": `
## ASCENT完整拆解
## 1. 研究背景
转移性TNBC后线治疗长期缺少有效选择，传统单药化疗ORR低、PFS短、OS有限。TROP2在多种上皮肿瘤表达，sacituzumab govitecan作为TROP2 ADC，提供了靶向递送SN-38 payload的策略。ASCENT要回答的问题是：在多线治疗后的mTNBC中，TROP2 ADC是否能相对医生选择化疗带来明确生存获益。

## 2. 研究问题
核心问题不是单纯ORR是否提高，而是后线TNBC患者是否能获得PFS和OS改善，并且毒性是否可管理。ASCENT的价值在于用随机对照而非单臂研究证明ADC临床价值。

## 3. PICO
- Population：既往接受多线治疗的转移性TNBC患者。
- Intervention：sacituzumab govitecan。
- Comparator：医生选择单药化疗。
- Outcome：PFS、OS、ORR、DoR和安全性。

## 4. 设计逻辑
后线TNBC存在可接受的医生选择治疗作为对照，因此随机III期设计能最大程度降低历史对照偏倚。医生选择治疗贴近真实临床，但也要求对照选项合理、地区可及性清楚、后续治疗记录充分。

## 5. 终点选择
PFS适合作为疾病控制指标，OS在后线TNBC中尤其有价值，因为患者预后差、后续有效治疗有限。若OS也改善，临床意义更强。ORR和DoR帮助解释症状控制和肿瘤负荷下降。

## 6. 分层因素
后线研究常关注既往治疗线数、脑转移状态、地理区域等。脑转移是重要预后因素，是否纳入、是否稳定、如何分析都会影响解释。

## 7. 样本量逻辑
样本量应保证足够PFS/OS事件数。CRP要看统计假设是否基于现实对照疗效，若假设过乐观，研究可能失败；若过保守，样本可能过大且不经济。

## 8. 统计分析
重点看ITT/FAS、分层Cox模型、HR、CI、关键次要终点层级和敏感性分析。后线研究中停药、后续治疗和缺失影像也会影响PFS解释。

## 9. 疗效结果
ASCENT显示ADC在后线TNBC中可带来PFS和OS获益，这比单纯ORR提高更有注册和临床说服力。CRP在医学沟通中应强调“随机对照 + 生存获益 + 可管理安全性”的证据组合。

## 10. 安全性结果
SG相关毒性包括中性粒细胞减少、腹泻、恶心、脱发、疲乏等。CRP要关注Grade 3-4 AE、剂量调整、停药率、感染风险和支持治疗。ADC不是“靶向所以低毒”，payload相关毒性必须主动管理。

## 11. 阳性的关键原因
疾病未满足需求高、TROP2 ADC机制明确、对照合理、随机研究设计稳健、PFS和OS方向一致，是ASCENT具有开发意义的核心。

## 12. 如果我是CRP，我会重点关注什么
- 对照治疗是否符合当地实践。
- 患者既往治疗线和既往ADC/IO暴露。
- 中性粒细胞减少和腹泻管理算法。
- 停药、减量和延迟给药对疗效解释的影响。
- 后续治疗是否影响OS。

## 13. 如果我是Sponsor，我会如何评价
ASCENT建立了TROP2 ADC在后线TNBC的资产价值。下一步Sponsor会思考更早线、联合IO、biomarker、post-ADC序贯和其他乳腺癌亚型扩展。

## 14. 如果我是审评员，我会问什么
- 安全性是否可通过标签和管理措施控制？
- 特定亚组是否获益一致？
- 脑转移患者数据是否充分？
- 对照选择是否代表标准治疗？
- ADC毒性是否需要RMP或额外药物警戒？

## 15. 对未来TNBC开发的启发
后线ADC成功后，竞争焦点会转向一线、联合、序贯和耐药后策略。CRP必须理解ADC开发不只是药物机制，还包括治疗线、竞品速度、毒性管理和真实世界可用性。
${standardTail}
`
};

export const caseAndTemplateContent: Record<string, string> = {
  "sponsor-adc-io-phase3": `
## 完整Sponsor决策训练
## 商业背景
TNBC一线和早期治疗已经进入IO和ADC快速竞争阶段。若ADC+IO能进入更早线，商业价值大，但开发成本高、竞品变化快、失败风险也高。

## 医学背景
ADC可通过肿瘤细胞杀伤释放抗原，理论上增强免疫反应；IO可解除免疫抑制。联合有机制互补性，但也可能叠加ILD、骨髓抑制、肝炎、肺炎等风险。

## 竞品情况
需要比较现有PD-1/PD-L1联合化疗、TROP2 ADC、HER2 ADC、AKT/PI3K和PARP策略。若竞品已在一线获批，试验对照和终点必须更新。

## 已有数据
若I/II期显示ORR提高、DoR延长、PFS趋势改善且毒性可控，可考虑III期。但若只有ORR信号，没有PFS趋势或停药率高，应先优化剂量和人群。

## 监管路径
一线III期需要随机对照、明确主要终点、预设biomarker和安全管理。若目标是加速批准，需要确认替代终点与临床获益关系。

## 用户决策选项
A. 直接进入III期。B. 先做随机II期和转化研究。C. 暂停开发。D. 改为后线单药。

## 推荐答案
推荐B或有条件A：如果已有随机信号和安全run-in充分，可进入III期；否则先做随机II期、剂量优化和biomarker富集。

## 解析
Sponsor决策不能只看机制合理和ORR漂亮。要同时看获益持续性、PFS/OS趋势、安全可管理性、对照合理性、竞品窗口和注册可行性。

## 延伸学习节点
[[TNBC治疗格局]]、[[ADC+IO联合策略]]、[[Protocol Review]]、[[Benefit-Risk Assessment 审评框架]]
`,
  "sponsor-post-io-rechallenge": `
## 完整Sponsor决策训练
## 商业背景
随着早期和一线TNBC使用IO增多，Post-IO人群会越来越大。PD-1 rechallenge看似可延续已有资产价值，但若缺少人群选择，很容易成为低成功率项目。

## 医学背景
Rechallenge可能适用于既往IO后长期缓解、停药后复发或联合药物能重塑免疫微环境的人群。但对原发耐药或快速进展患者，再挑战生物学合理性弱。

## 竞品情况
Post-IO场景已有ADC、化疗、PARP和临床试验选择。若ADC疗效明确，PD-1 rechallenge必须证明差异化。

## 已有数据
小样本ORR不足以直接进入III期。需要区分既往IO获益持续时间、停药原因、复发间隔、PD-L1/TILs/ctDNA和免疫微环境变化。

## 监管路径
若无清晰预测人群，监管会质疑试验科学性。随机II期和转化研究更合适。

## 用户决策选项
A. 直接III期。B. 做biomarker-enriched随机II期。C. 仅做IIT探索。D. 放弃。

## 推荐答案
B。先定义Post-IO亚型，建立预测标志物和联合策略，再决定是否进入注册。

## 解析
这个案例训练Sponsor从“资产延伸”转向“患者获益逻辑”。没有可识别人群的rechallenge，很难说服审评员和临床医生。
`,
  "sponsor-orr-pfs-discordance": `
## 完整Sponsor决策训练
## 商业背景
ORR漂亮容易吸引投资和KOL关注，但若PFS不显著，注册和临床采用都存在风险。

## 医学背景
ORR代表肿瘤缩小比例，PFS代表疾病控制持续时间。若缓解短暂、进展快或毒性导致停药，ORR不能转化为患者真实获益。

## 已有数据
ORR从20%提高到38%，但PFS HR=0.95，OS无趋势，Grade 3以上AE增加。

## 用户决策选项
A. 继续III期。B. 暂停并做DoR和亚组分析。C. 申请加速批准。D. 换适应证。

## 推荐答案
B。先分析DoR、depth of response、症状改善、影像审阅、亚组和后续治疗；若无法解释PFS不显著，不应贸然推进。

## 解析
Sponsor要区分“药物有抗肿瘤活性”和“治疗策略能改善临床结局”。ORR是信号，不是所有场景的终点答案。
`,
  "medical-writing-protocol-synopsis": `
## Protocol Synopsis真实可用模板
## 文件用途
用于在完整Protocol前快速对齐研究设计核心，包括研究背景、目的、人群、设计、终点、统计和安全管理。常用于内部 governance、KOL咨询、HA沟通前准备和方案立项。

## 文件结构与示例文本
1. Title：A randomized, double-blind, phase III study of Drug X plus chemotherapy versus placebo plus chemotherapy in first-line metastatic TNBC.
2. Rationale：TNBC remains an aggressive disease with limited durable treatment options. Drug X targets TROP2 and may enhance chemotherapy-induced tumor cell killing.
3. Objectives：Primary objective is to compare PFS by BICR. Key secondary objective is OS.
4. Population：Adults with unresectable locally recurrent or metastatic TNBC, no prior systemic therapy for advanced disease.
5. Design：Randomized 1:1, double-blind, global multicenter trial.
6. Intervention and Comparator：Drug X plus chemotherapy versus placebo plus chemotherapy.
7. Endpoints：PFS, OS, ORR, DoR, safety, PRO.
8. Statistics：Assume HR 0.75 for PFS, power 90%, two-sided alpha controlled with hierarchical testing.
9. Safety：AESI includes ILD, neutropenia and severe diarrhea. Management algorithms are included.

## CRP审核重点
- Rationale是否基于未满足需求和机制，而非营销语言。
- 人群是否等同未来标签。
- 终点和统计假设是否有临床意义。
- 安全风险是否在概要阶段就被设计进去。

## 常见错误
- 背景写得像综述，不能支持研究问题。
- 对照组过时。
- 主要终点和样本量假设不匹配。
`,
  "medical-writing-clinical-study-protocol": `
## Clinical Study Protocol真实可用模板
## 文件用途
Protocol是研究执行、质量管理、监管审评和CSR解释的基础文件。

## 每部分写什么
1. Background：疾病、治疗格局、药物机制、已有数据和研究依据。
2. Objectives and Endpoints：目标必须与终点一一对应。
3. Study Design：随机、盲法、对照、分层、访视和研究流程。
4. Population：入排标准要医学合理且可执行。
5. Treatment：剂量、给药、减量、暂停、复治、禁用药。
6. Safety：AE/SAE/AESI、实验室、影像、上报和管理算法。
7. Statistics：分析集、样本量、主要分析、多重性和敏感性分析。
8. Data Handling：缺失数据、数据锁库、质量管理和审计追踪。

## 示例文本
Patients who develop suspected drug-related ILD Grade 2 or higher must interrupt study treatment and undergo prompt evaluation, including chest CT, oxygen saturation, infectious workup and pulmonary consultation as clinically indicated.

## CRP审核重点
- 医学规则是否足够清晰，中心能否一致执行。
- 安全管理是否具体到分级和行动。
- 终点评估是否有可追溯数据源。
`,
  "medical-writing-medical-monitoring-plan": `
## Medical Monitoring Plan真实可用模板
## 文件用途
规定Medical Monitor如何支持研究执行、审阅安全和医学数据、回答中心问题并升级风险。

## 文件结构
1. Roles and Responsibilities。
2. Medical Questions Handling。
3. SAE/AESI Review Process。
4. Eligibility and Protocol Deviation Review。
5. Medical Data Review Plan。
6. Safety Signal Escalation。
7. Documentation and Communication。

## 示例文本
The Medical Monitor will review all fatal SAEs, suspected drug-related Grade 3 or higher AESIs, potential Hy's law cases, and medically significant protocol deviations within predefined timelines.

## CRP审核重点
- 哪些事件必须医学审阅。
- 审阅时限和升级路径是否明确。
- 与PV、Clinical Operations、Data Management和Stats的接口是否清楚。

## 常见错误
- 只写职责，不写触发条件。
- 没有定义医学数据审阅频率。
- 中心问题没有记录和追踪机制。
`
};

export const interviewTwenty = `
## 20道CRP面试题：可背诵版本
1. 为什么从临床转药企医学部？
普通答案：想换平台。优秀答案：我希望把临床经验用于更系统的证据生成和药物开发，让对患者需求的理解影响Protocol设计、安全管理和医学沟通。乳腺外科医生版本：TNBC和HER2-low治疗快速变化，我在临床看到未满足需求，希望参与新药从研究设计到落地的全过程。

2. 为什么选择CRP？
优秀答案：CRP最接近临床问题转化为开发证据的过程，工作覆盖Protocol、Medical Monitoring、Safety Review、Data Review和CSR医学解释。

3. CRP和Medical Advisor区别？
答案：CRP更偏临床开发和研究执行医学监督；Medical Advisor更偏上市前后医学策略、证据沟通和KOL合作，但两者都需要疾病、证据和合规能力。

4. AE和SAE区别？
答案见AE/SAE章节：AE不要求相关，SAE满足严重性标准。

5. Serious和Severe区别？
答案：Serious是法规严重性，Severe是临床强度。

6. 什么是SUSAR？
答案：严重、可疑相关且非预期的不良反应。

7. 如何处理SAE？
答案：确认严重性，收集时间线、诊断、处理、转归、合并用药和替代病因，评估相关性和预期性，按时限上报并随访。

8. ITT和PP区别？
答案：ITT保护随机化，PP用于敏感性分析但可能选择偏倚。

9. HR=0.70怎么解释？
答案：试验组事件瞬时风险约为对照组70%，相对降低约30%，不等于每个患者风险降低30%。

10. PFS和OS怎么取舍？
答案：OS最硬但成熟慢，PFS早且敏感但受评估影响；应结合疾病场景、后续治疗和安全性。

11. 如何审阅Protocol？
答案：按PICO、终点、统计、安全、执行和监管逻辑审阅。

12. 如何评价入排标准？
答案：保护患者、匹配适应证、可执行、不过度限制外推性。

13. 如何设计III期研究？
答案：定义人群、对照、主要终点、统计假设、分层、安全管理和MRCT策略。

14. 单臂ORR优秀能否注册？
答案：取决于疾病严重性、未满足需求、ORR幅度、DoR、安全性和确认性研究。

15. PFS阳性但OS不成熟怎么办？
答案：评估PFS临床意义、安全性、OS趋势和后续治疗，可能支持批准但需继续随访。

16. 如何与KOL沟通？
答案：先听临床痛点，用证据回答问题，区分已批准信息和研究性信息，记录行动项。

17. Medical Monitor能否替研究者决定治疗？
答案：不能替代，但可提供方案和产品相关医学建议。

18. 如何处理研究者认为无关但Sponsor认为相关的SAE？
答案：记录双方判断，Sponsor独立评估，按审慎原则报告和管理。

19. 乳腺外科背景如何转化为优势？
答案：熟悉患者路径、手术/新辅助/辅助治疗场景、病理和影像沟通，可用于Protocol人群、终点和中心沟通。

20. 入职前三个月如何补短板？
答案：系统补GCP、PV、统计、Protocol Review、肿瘤开发格局和英文医学写作，并用案例形成Portfolio。
`;

export const quizzes: Record<string, QuizQuestion[]> = {
  "ich-e6-r3": [
    { id: "q-ich-1", question: "E6(R3)中Quality by Design最接近哪种含义？", options: ["研究结束后补齐TMF", "方案设计阶段识别关键质量因素", "减少所有监查", "只由QA负责"], answer: 1, explanation: "QbD强调在设计阶段识别会影响患者安全和数据可信度的关键因素。" },
    { id: "q-ich-2", question: "Medical Monitor是否替代研究者做医疗决定？", options: ["是", "否"], answer: 1, explanation: "Medical Monitor提供方案和产品相关医学建议，研究者负责患者医疗照护。" },
    { id: "q-ich-3", question: "RBQM的核心是？", options: ["平均检查所有字段", "按风险分配质量资源", "只做远程监查", "减少安全随访"], answer: 1, explanation: "RBQM不是降标准，而是聚焦关键风险。" }
  ],
  "ae-sae": [
    { id: "q-pv-1", question: "AE是否必须与药物相关？", options: ["必须", "不必须"], answer: 1, explanation: "AE是不利医学事件，不要求已证明与药物相关。" },
    { id: "q-pv-2", question: "SUSAR需要哪些条件？", options: ["严重+可疑相关+非预期", "所有SAE", "所有Grade 3 AE", "所有住院事件"], answer: 0, explanation: "SUSAR三要素缺一不可。" },
    { id: "q-pv-3", question: "Severe和Serious是否同义？", options: ["是", "否"], answer: 1, explanation: "Severe是强度，Serious是法规严重性。" }
  ],
  "protocol-review": [
    { id: "q-protocol-1", question: "Protocol Review核心是？", options: ["改语法", "判断医学逻辑、风险和可执行性", "只看背景", "只看统计"], answer: 1, explanation: "CRP审阅重点是研究能否安全、可信、可执行地回答问题。" },
    { id: "q-protocol-2", question: "入排标准越严格一定越好吗？", options: ["是", "否"], answer: 1, explanation: "过严会影响入组和外推性。" },
    { id: "q-protocol-3", question: "CRP需要看统计假设吗？", options: ["需要", "不需要"], answer: 0, explanation: "CRP要判断假设差异是否具有临床意义。" }
  ],
  "analysis-sets": [
    { id: "q-stat-1", question: "ITT主要保护什么？", options: ["随机化", "只保留依从者", "减少样本量", "提高ORR"], answer: 0, explanation: "ITT按随机分组分析，保护随机化。" },
    { id: "q-stat-2", question: "PP分析最大风险是？", options: ["选择偏倚", "样本太大", "不能计算AE", "无法定义终点"], answer: 0, explanation: "PP排除偏离和早停者，可能破坏随机化。" },
    { id: "q-stat-3", question: "Safety Set通常按什么分析？", options: ["实际接受治疗", "随机分组", "只按PP", "只按mITT"], answer: 0, explanation: "安全风险来自实际暴露。" }
  ],
  "survival-analysis": [
    { id: "q-survival-1", question: "HR=0.70表示什么？", options: ["中位生存延长30%", "瞬时事件风险相对降低约30%", "每个患者风险降低30%", "ORR提高30%"], answer: 1, explanation: "HR是群体层面瞬时风险比。" },
    { id: "q-survival-2", question: "KM曲线尾部人数很少时应如何解释？", options: ["非常确定", "谨慎解释", "直接宣称治愈", "忽略风险表"], answer: 1, explanation: "尾部人数少，不确定性大。" },
    { id: "q-survival-3", question: "PFS是否会受影像评估频率影响？", options: ["会", "不会"], answer: 0, explanation: "不同评估频率可能影响进展发现时间。" }
  ]
};

export function getDeepBody(cardId: string) {
  return [
    deepContent[cardId],
    deepContentAdditions[cardId],
    ichE6Manual[cardId],
    regulatoryManual[cardId],
    drugDevelopmentManual[cardId],
    trialDesignManual[cardId],
    sampleSizeManual[cardId],
    crpHandbookManual[cardId],
    crpMindsetManual[cardId],
    regulatoryAttachmentManual[cardId],
    interviewDeepManual[cardId],
    protocolDeepDives[cardId],
    protocolStudyManual[cardId],
    reviewerDeepManual[cardId],
    caseAndTemplateContent[cardId]
  ].filter(Boolean).join("\n");
}
