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
  return [deepContent[cardId], deepContentAdditions[cardId], protocolDeepDives[cardId], caseAndTemplateContent[cardId]].filter(Boolean).join("\n");
}
