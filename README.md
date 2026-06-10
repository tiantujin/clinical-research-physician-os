# Clinical Research Physician OS (CRP OS)

面向具有临床医学背景、希望进入药企医学部的医生，覆盖 Clinical Research Physician、Medical Advisor、Medical Manager 的入门学习、面试准备和入职培训。

## 功能

- 22 个一级学习模块
- 左侧导航 + 中间正文 + 右侧知识地图
- 全局搜索
- 标签筛选系统
- 双向知识链接，使用 `[[知识点标题]]` 维护
- 学习进度、收藏、重点高亮、笔记本地保存
- 最近学习记录
- 术语悬浮解释
- 中英文术语显示切换
- 深色/浅色模式
- 学习记录 JSON 本地备份与迁移导入
- Markdown 导入到个人材料区
- 浏览器打印导出 PDF
- 快速查询中心
- 移动端适配

## 模块目录

1. 新药研发全景图
2. 全球法规体系
3. ICH知识体系
4. 临床试验设计
5. 临床统计学
6. 药物警戒（PV）
7. CRP工作手册
8. 医学部面试宝典
9. 肿瘤药物开发专区
10. 真实案例库
11. 医学英语专区
12. 学习路径系统
13. 快速查询中心
14. 个人知识库
15. Sponsor Decision Simulator
16. Protocol Dissection Center
17. Reviewer Mind / Think Like FDA-NMPA
18. Medical Writing Library
19. Medical Affairs & Clinical Development Toolkit
20. Oncology Development Landscape
21. My CRP Portfolio
22. Future AI Extension

`Future AI Extension` 仅为未来扩展占位。当前版本不接入 OpenAI、Claude、Gemini 或其他外部AI接口。

## 技术栈

- React + Next.js
- TypeScript
- TailwindCSS
- 本地浏览器存储作为初始本地数据库
- 内容库位于 `lib/content.ts`

## 运行

当前目录已经是完整 Next.js 项目。安装依赖后运行：

```bash
npm install
npm run dev
```

然后打开：

```text
http://localhost:3000
```

## 内容维护

主要内容在 `lib/content.ts`：

- `modules`：一级模块和知识卡片
- `glossary`：快速查询术语
- `learningPaths`：学习路线图
- `protocolStudies`：Protocol拆解中心研究列表，会自动生成速览卡和深度拆解卡
- `medicalWritingTemplates`：医学写作模板列表
- `toolkitTemplates`：医学部实战模板列表

新增知识点时建议：

1. 给每个 card 设置稳定 `id`
2. 在 `links` 里写关联 card id
3. 在正文里用 `[[知识点标题]]` 建立可点击双向链接
4. 高频面试题写成“标准答案 / 优秀答案 / 加分答案”

## 后续增强路线

- Markdown 文件拆分：把 `lib/content.ts` 内容迁移到 `/content/*.mdx`
- 本地数据库：从 localStorage 升级到 IndexedDB
- PDF 导出：从浏览器打印升级为结构化PDF报告生成
- 离线访问：增加 PWA service worker
- 错题本：把面试题和自测题做成 quiz 模式
- 内容版本：为法规、ICH、指南和研究案例增加更新时间字段
- Portfolio 文件上传：从本地字段模板升级为IndexedDB附件管理
- AI模块：未来可接入文献检索、Protocol初稿、医学写作和Safety Review辅助；当前版本只保留入口

## 数据可迁移

- 点击顶部“本地备份”导出 JSON。
- 点击顶部“迁移”导入 JSON。
- 所有进度、收藏、高亮、笔记、最近学习和导入Markdown都保存在浏览器本地。
