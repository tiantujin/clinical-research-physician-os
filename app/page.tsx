"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Database,
  Download,
  FileDown,
  Flag,
  Heart,
  Highlighter,
  Languages,
  Link2,
  Map,
  Menu,
  Network,
  Search,
  Star,
  StickyNote,
  SunMoon,
  Tags,
  Target,
  Upload,
  X
} from "lucide-react";
import { modules, glossary, learningPaths, type KnowledgeCard, type Module } from "@/lib/content";
import { getDeepBody, interviewTwenty, quizzes, todayRecommendations, twelveWeekPlan, type QuizQuestion } from "@/lib/deepContent";
import { useLocalKnowledgeStore } from "@/lib/useLocalKnowledgeStore";

const stageFlow = ["Discovery", "Preclinical", "IND", "Phase I", "Phase II", "Phase III", "NDA/BLA", "Post Marketing"];

export default function Home() {
  const [activeModuleId, setActiveModuleId] = useState(modules[0].id);
  const [activeCardId, setActiveCardId] = useState(modules[0].cards[0].id);
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [languageMode, setLanguageMode] = useState<"zh" | "en">("zh");
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const {
    progress,
    favorites,
    highlights,
    review,
    quizAnswers,
    wrongQuestions,
    notes,
    recent,
    importedMarkdown,
    toggleFavorite,
    toggleProgress,
    toggleHighlight,
    toggleReview,
    answerQuiz,
    recordVisit,
    setNote,
    setImportedMarkdown,
    importState,
    exportPdf,
    exportState
  } = useLocalKnowledgeStore();

  const activeModule = modules.find((module) => module.id === activeModuleId) ?? modules[0];
  const activeCard = activeModule.cards.find((card) => card.id === activeCardId) ?? activeModule.cards[0];
  const allCards = useMemo(() => modules.flatMap((module) => module.cards.map((card) => ({ ...card, module }))), []);
  const activeDeepBody = useMemo(() => {
    const deep = activeCard.id === "crp-interview-20" ? interviewTwenty : getDeepBody(activeCard.id);
    return [activeCard.body, deep].filter(Boolean).join("\n");
  }, [activeCard]);

  const searchResults = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term && !selectedTag) return [];
    return allCards
      .filter((item) => {
        const text = [item.title, item.summary, item.body, getDeepBody(item.id), item.tags.join(" "), item.module.title].join(" ").toLowerCase();
        const matchesQuery = term ? text.includes(term) : true;
        const matchesTag = selectedTag ? item.tags.includes(selectedTag) : true;
        return matchesQuery && matchesTag;
      })
      .slice(0, 12);
  }, [allCards, query, selectedTag]);

  const allTags = useMemo(() => Array.from(new Set(allCards.flatMap((item) => item.tags))).sort().slice(0, 36), [allCards]);
  const recentCards = useMemo(() => recent.map((id) => allCards.find((item) => item.id === id)).filter(Boolean) as Array<KnowledgeCard & { module: Module }>, [recent, allCards]);

  const linkedCards = useMemo(() => {
    const links = new Set(activeCard.links);
    const backlinks = allCards.filter((item) => item.links.includes(activeCard.id)).map((item) => item.id);
    backlinks.forEach((id) => links.add(id));
    return allCards.filter((item) => links.has(item.id));
  }, [activeCard, allCards]);

  const completedCount = activeModule.cards.filter((card) => progress[card.id]).length;
  const overallProgress = Math.round((Object.values(progress).filter(Boolean).length / allCards.length) * 100);
  const wrongCount = Object.values(wrongQuestions).filter(Boolean).length;

  function selectCard(moduleId: string, cardId: string) {
    setActiveModuleId(moduleId);
    setActiveCardId(cardId);
    recordVisit(cardId);
    setSidebarOpen(false);
  }

  async function importBackup(file: File) {
    const text = await file.text();
    importState(JSON.parse(text));
  }

  async function importMarkdown(file: File) {
    setImportedMarkdown(await file.text());
  }

  return (
    <main className={`min-h-screen ${darkMode ? "theme-dark" : ""}`}>
      <div className="mx-auto flex max-w-[1760px] gap-4 p-3 lg:p-5">
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-[310px] transform border-r border-slate-200 bg-white/95 p-4 shadow-soft transition lg:sticky lg:top-5 lg:h-[calc(100vh-40px)] lg:translate-x-0 lg:rounded-lg lg:border ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="mb-5 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-clinical-blue">CRP OS</div>
              <h1 className="mt-1 text-xl font-bold text-clinical-ink">Clinical Research Physician OS</h1>
            </div>
            <button className="rounded-md p-2 text-slate-500 hover:bg-slate-100 lg:hidden" onClick={() => setSidebarOpen(false)} aria-label="Close navigation">
              <X size={18} />
            </button>
          </div>

          <div className="mb-4 rounded-lg border border-clinical-sky bg-clinical-sky/70 p-3">
            <div className="flex items-center justify-between text-sm font-bold text-clinical-slate">
              <span>总学习进度</span>
              <span>{Number.isFinite(overallProgress) ? overallProgress : 0}%</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-white">
              <div className="h-2 rounded-full bg-clinical-blue" style={{ width: `${Number.isFinite(overallProgress) ? overallProgress : 0}%` }} />
            </div>
          </div>

          <nav className="crp-scrollbar h-[calc(100vh-210px)] space-y-1 overflow-y-auto pr-1">
            {modules.map((module) => {
              const isActive = module.id === activeModuleId;
              const done = module.cards.filter((card) => progress[card.id]).length;
              return (
                <button
                  key={module.id}
                  className={`flex w-full items-start gap-3 rounded-lg px-3 py-3 text-left transition ${
                    isActive ? "bg-clinical-blue text-white shadow-soft" : "text-slate-700 hover:bg-slate-100"
                  }`}
                  onClick={() => selectCard(module.id, module.cards[0].id)}
                >
                  <span className={`mt-0.5 rounded-md px-2 py-1 text-xs font-bold ${isActive ? "bg-white/20" : "bg-clinical-sky text-clinical-blue"}`}>{module.number}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-bold">{module.title}</span>
                    <span className={`mt-1 block text-xs ${isActive ? "text-white/75" : "text-slate-500"}`}>{done}/{module.cards.length} 完成</span>
                  </span>
                </button>
              );
            })}
          </nav>
        </aside>

        <section className="min-w-0 flex-1">
          <header className="sticky top-0 z-30 mb-4 rounded-lg border border-white/70 bg-white/85 p-3 shadow-soft backdrop-blur">
            <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
              <div className="flex items-center gap-2">
                <button className="rounded-md border border-slate-200 p-2 lg:hidden" onClick={() => setSidebarOpen(true)} aria-label="Open navigation">
                  <Menu size={18} />
                </button>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-clinical-cyan">Notion + Obsidian + UpToDate</div>
                  <h2 className="text-lg font-bold text-clinical-ink md:text-2xl">{activeModule.title}</h2>
                </div>
              </div>
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="搜索 AE、SAE、ITT、E6(R3)、TNBC、Protocol..."
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 py-3 pl-10 pr-3 text-sm outline-none transition focus:border-clinical-blue focus:bg-white"
                />
                {searchResults.length > 0 && (
                  <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 max-h-96 overflow-y-auto rounded-lg border border-slate-200 bg-white p-2 shadow-soft">
                    {searchResults.map((result) => (
                      <button
                        key={result.id}
                        className="w-full rounded-md p-3 text-left hover:bg-clinical-sky/70"
                        onClick={() => {
                          selectCard(result.module.id, result.id);
                          setQuery("");
                        }}
                      >
                        <div className="text-xs font-bold text-clinical-blue">{result.module.title}</div>
                        <div className="font-bold text-clinical-ink">{result.title}</div>
                        <div className="mt-1 line-clamp-2 text-xs text-slate-500">{result.summary}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-clinical-ink px-4 py-3 text-sm font-bold text-white hover:bg-clinical-slate" onClick={exportState}>
                <Download size={17} />
                本地备份
              </button>
              <div className="flex flex-wrap gap-2">
                <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-clinical-ink hover:bg-slate-50" onClick={() => setDarkMode((value) => !value)} title="深色/浅色模式">
                  <SunMoon size={16} />
                  {darkMode ? "浅色" : "深色"}
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-clinical-ink hover:bg-slate-50" onClick={() => setLanguageMode((value) => (value === "zh" ? "en" : "zh"))} title="中英文术语切换">
                  <Languages size={16} />
                  {languageMode === "zh" ? "中文" : "English"}
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-clinical-ink hover:bg-slate-50" onClick={exportPdf} title="浏览器打印为PDF">
                  <FileDown size={16} />
                  PDF
                </button>
                <label className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-clinical-ink hover:bg-slate-50" title="导入Markdown到个人材料">
                  <Upload size={16} />
                  Markdown
                  <input className="hidden" type="file" accept=".md,.markdown,text/markdown,text/plain" onChange={(event) => event.target.files?.[0] && importMarkdown(event.target.files[0])} />
                </label>
                <label className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-clinical-ink hover:bg-slate-50" title="导入JSON备份，实现数据迁移">
                  <Database size={16} />
                  迁移
                  <input className="hidden" type="file" accept="application/json,.json" onChange={(event) => event.target.files?.[0] && importBackup(event.target.files[0])} />
                </label>
              </div>
            </div>
          </header>

          <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_330px]">
            <article className="space-y-4">
              {activeModule.id === "drug-dev" && activeCard.id === "drug-lifecycle" && (
                <LearningDashboard
                  allCards={allCards}
                  progress={progress}
                  review={review}
                  favorites={favorites}
                  recentCards={recentCards}
                  onNavigate={selectCard}
                />
              )}
              <ModuleHero module={activeModule} completedCount={completedCount} />
              <CardTabs module={activeModule} activeCardId={activeCard.id} onSelect={(cardId) => setActiveCardId(cardId)} progress={progress} />

              <TagRail tags={allTags} selectedTag={selectedTag} onSelect={setSelectedTag} />

              <section className={`rounded-lg border border-slate-200 bg-white p-5 shadow-soft md:p-7 ${highlights[activeCard.id] ? "ring-2 ring-clinical-amber" : ""}`}>
                <div className="mb-5 flex flex-col gap-3 border-b border-slate-100 pb-5 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="mb-2 flex flex-wrap gap-2">
                      {activeCard.tags.map((tag) => (
                        <span key={tag} className="rounded-md bg-clinical-sky px-2.5 py-1 text-xs font-bold text-clinical-blue">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-clinical-ink md:text-3xl">{activeCard.title}</h3>
                    <p className="mt-2 max-w-3xl text-slate-600">{activeCard.summary}</p>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <button
                      className={`inline-flex items-center justify-center gap-2 rounded-md border px-3 py-2 text-sm font-bold transition ${
                        progress[activeCard.id] ? "border-clinical-blue bg-clinical-blue text-white" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                      }`}
                      onClick={() => toggleProgress(activeCard.id)}
                    >
                      <CheckCircle2 size={17} />
                      {progress[activeCard.id] ? "已掌握" : "开始学习"}
                    </button>
                    <button
                      className={`inline-flex items-center justify-center gap-2 rounded-md border px-3 py-2 text-sm font-bold transition ${
                        review[activeCard.id] ? "border-clinical-amber bg-clinical-amber text-clinical-ink" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                      }`}
                      onClick={() => toggleReview(activeCard.id)}
                    >
                      <Flag size={17} />
                      {review[activeCard.id] ? "复习中" : "加入复习"}
                    </button>
                    <IconButton active={Boolean(progress[activeCard.id])} label="标记完成" onClick={() => toggleProgress(activeCard.id)} icon={<CheckCircle2 size={18} />} />
                    <IconButton active={Boolean(favorites[activeCard.id])} label="收藏" onClick={() => toggleFavorite(activeCard.id)} icon={<Star size={18} />} />
                    <IconButton active={Boolean(highlights[activeCard.id])} label="重点高亮" onClick={() => toggleHighlight(activeCard.id)} icon={<Highlighter size={18} />} />
                  </div>
                </div>

                {activeModule.id === "drug-dev" && <DrugDevelopmentFlow />}
                {activeModule.id === "regulatory" && <RegulatoryTable />}
                {activeModule.id === "trial-design" && <TrialDesignGallery />}
                {activeModule.id === "statistics" && <StatsVisual />}
                {activeModule.id === "learning-paths" && <LearningPathPanel progress={progress} />}

                <MarkdownView body={activeDeepBody} onNavigate={selectCard} />
                <QuizBlock questions={quizzes[activeCard.id] ?? []} quizAnswers={quizAnswers} onAnswer={answerQuiz} />
              </section>
            </article>

            <aside className="space-y-4 xl:sticky xl:top-28 xl:h-[calc(100vh-132px)] xl:overflow-y-auto xl:pr-1 crp-scrollbar">
              <RightKnowledgeMap activeCard={activeCard} linkedCards={linkedCards} onNavigate={selectCard} />
              <RecentPanel recentCards={recentCards} onNavigate={selectCard} />
              <QuickLookup onNavigate={selectCard} languageMode={languageMode} />
              <PersonalPanel
                note={notes[activeCard.id] ?? ""}
                onNoteChange={(value) => setNote(activeCard.id, value)}
                favoriteCount={Object.values(favorites).filter(Boolean).length}
                completedCount={Object.values(progress).filter(Boolean).length}
                reviewCount={Object.values(review).filter(Boolean).length}
                wrongCount={wrongCount}
                importedMarkdown={importedMarkdown}
              />
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}

function ModuleHero({ module, completedCount }: { module: Module; completedCount: number }) {
  return (
    <section className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
      <div className="grid md:grid-cols-[1fr_260px]">
        <div className="p-6 md:p-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-clinical-mint px-3 py-1 text-xs font-bold text-clinical-slate">
            <BookOpen size={15} />
            {module.number} / {module.cards.length} 个知识节点
          </div>
          <h2 className="text-3xl font-bold text-clinical-ink md:text-4xl">{module.title}</h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">{module.description}</p>
        </div>
        <div className="border-t border-slate-100 bg-clinical-ink p-6 text-white md:border-l md:border-t-0">
          <div className="text-sm text-white/70">模块完成度</div>
          <div className="mt-2 text-4xl font-bold">{Math.round((completedCount / module.cards.length) * 100)}%</div>
          <div className="mt-4 h-2 rounded-full bg-white/15">
            <div className="h-2 rounded-full bg-clinical-amber" style={{ width: `${Math.round((completedCount / module.cards.length) * 100)}%` }} />
          </div>
          <p className="mt-4 text-sm leading-6 text-white/75">建议按顺序学习，再用右侧知识地图追踪双向关联。</p>
        </div>
      </div>
    </section>
  );
}

function CardTabs({ module, activeCardId, onSelect, progress }: { module: Module; activeCardId: string; onSelect: (id: string) => void; progress: Record<string, boolean> }) {
  return (
    <div className="crp-scrollbar flex gap-2 overflow-x-auto rounded-lg border border-slate-200 bg-white p-2 shadow-soft">
      {module.cards.map((card) => (
        <button
          key={card.id}
          onClick={() => onSelect(card.id)}
          className={`flex min-w-[180px] items-center justify-between gap-3 rounded-md px-3 py-2 text-left text-sm transition ${
            activeCardId === card.id ? "bg-clinical-blue text-white" : "bg-slate-50 text-slate-700 hover:bg-clinical-sky"
          }`}
        >
          <span className="line-clamp-1 font-bold">{card.title}</span>
          {progress[card.id] ? <CheckCircle2 size={16} /> : <ChevronRight size={16} />}
        </button>
      ))}
    </div>
  );
}

function TagRail({ tags, selectedTag, onSelect }: { tags: string[]; selectedTag: string; onSelect: (tag: string) => void }) {
  return (
    <div className="crp-scrollbar flex gap-2 overflow-x-auto rounded-lg border border-slate-200 bg-white p-2 shadow-soft">
      <button
        className={`inline-flex shrink-0 items-center gap-2 rounded-md px-3 py-2 text-sm font-bold ${
          selectedTag ? "bg-slate-50 text-slate-600 hover:bg-clinical-sky" : "bg-clinical-ink text-white"
        }`}
        onClick={() => onSelect("")}
      >
        <Tags size={16} />
        全部标签
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          className={`shrink-0 rounded-md px-3 py-2 text-sm font-bold ${
            selectedTag === tag ? "bg-clinical-blue text-white" : "bg-slate-50 text-slate-600 hover:bg-clinical-sky"
          }`}
          onClick={() => onSelect(selectedTag === tag ? "" : tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

function IconButton({ active, label, icon, onClick }: { active: boolean; label: string; icon: ReactNode; onClick: () => void }) {
  return (
    <button
      className={`inline-flex h-10 w-10 items-center justify-center rounded-md border transition ${
        active ? "border-clinical-blue bg-clinical-blue text-white" : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
      }`}
      title={label}
      aria-label={label}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}

function LearningDashboard({
  allCards,
  progress,
  review,
  favorites,
  recentCards,
  onNavigate
}: {
  allCards: Array<KnowledgeCard & { module: Module }>;
  progress: Record<string, boolean>;
  review: Record<string, boolean>;
  favorites: Record<string, boolean>;
  recentCards: Array<KnowledgeCard & { module: Module }>;
  onNavigate: (moduleId: string, cardId: string) => void;
}) {
  const completed = Object.values(progress).filter(Boolean).length;
  const reviewCount = Object.values(review).filter(Boolean).length;
  const favoriteCount = Object.values(favorites).filter(Boolean).length;
  const priorityCards = allCards.filter((item) => ["ich-e6-r3", "ae-sae", "protocol-review", "analysis-sets", "keynote-355-deep-dive", "ascent-deep-dive"].includes(item.id));

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft md:p-7">
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-clinical-cyan">Learning Dashboard</div>
          <h2 className="mt-1 text-2xl font-bold text-clinical-ink md:text-3xl">今日学习仪表盘</h2>
          <p className="mt-2 max-w-3xl text-slate-600">按12周路线学习，每天完成一个概念、一个案例和一个输出任务。这里优先推荐入职前最常用的CRP核心能力。</p>
        </div>
        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="rounded-md bg-clinical-sky p-3"><div className="text-xl font-bold">{completed}</div><div className="text-xs text-slate-500">已完成</div></div>
          <div className="rounded-md bg-clinical-mint p-3"><div className="text-xl font-bold">{reviewCount}</div><div className="text-xs text-slate-500">待复习</div></div>
          <div className="rounded-md bg-slate-50 p-3"><div className="text-xl font-bold">{favoriteCount}</div><div className="text-xs text-slate-500">收藏</div></div>
          <div className="rounded-md bg-slate-50 p-3"><div className="text-xl font-bold">{priorityCards.length}</div><div className="text-xs text-slate-500">高优先级</div></div>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1fr_1.3fr]">
        <div className="space-y-3">
          <h3 className="font-bold text-clinical-ink">今日推荐</h3>
          {todayRecommendations.map((item) => (
            <button key={item.cardId} className="flex w-full items-center justify-between rounded-md border border-slate-200 bg-slate-50 p-3 text-left hover:border-clinical-blue hover:bg-clinical-sky" onClick={() => onNavigate(item.moduleId, item.cardId)}>
              <span className="font-bold text-clinical-ink">{item.title}</span>
              <ChevronRight size={16} />
            </button>
          ))}
          <h3 className="pt-2 font-bold text-clinical-ink">快速入口</h3>
          <div className="grid grid-cols-2 gap-2">
            {[
              ["今天学一个概念", "ich", "ich-e6-r3"],
              ["今天拆一个Protocol", "protocol-dissection", "keynote-355-deep-dive"],
              ["今天做一道面试题", "interview", "crp-interview-20"],
              ["今天看一个Safety Case", "pv", "ae-sae"],
              ["今天更新Portfolio", "my-crp-portfolio", "portfolio-我的职业转型记录"]
            ].map(([label, moduleId, cardId]) => (
              <button key={label} className="rounded-md bg-white p-3 text-left text-sm font-bold text-clinical-blue ring-1 ring-slate-200 hover:bg-clinical-sky" onClick={() => onNavigate(moduleId, cardId)}>
                {label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3 font-bold text-clinical-ink">临床医生转CRP 12周学习路线</h3>
          <div className="crp-scrollbar max-h-[420px] space-y-2 overflow-y-auto pr-1">
            {twelveWeekPlan.map((week) => (
              <div key={week.week} className="rounded-md border border-slate-200 bg-slate-50 p-3">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-clinical-blue px-2 py-1 text-xs font-bold text-white">{week.week}</span>
                  <span className="font-bold text-clinical-ink">{week.goal}</span>
                </div>
                <div className="mt-2 text-sm leading-6 text-slate-600">输出任务：{week.output}</div>
                <div className="mt-1 text-sm leading-6 text-slate-600">自测题：{week.quiz}</div>
                <div className="mt-1 text-sm leading-6 text-slate-600">推荐复习：{week.review}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {recentCards.length > 0 && (
        <div className="mt-5 border-t border-slate-100 pt-4">
          <h3 className="mb-2 font-bold text-clinical-ink">最近学习记录</h3>
          <div className="flex flex-wrap gap-2">
            {recentCards.slice(0, 6).map((item) => (
              <button key={item.id} className="rounded-md bg-clinical-sky px-3 py-2 text-sm font-bold text-clinical-blue" onClick={() => onNavigate(item.module.id, item.id)}>
                {item.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

function MarkdownView({ body, onNavigate }: { body: string; onNavigate: (moduleId: string, cardId: string) => void }) {
  const html = useMemo(() => renderMarkdown(body), [body]);
  return (
    <div
      className="prose prose-slate max-w-none prose-headings:text-clinical-ink prose-a:no-underline prose-strong:text-clinical-ink"
      onClick={(event) => {
        const target = event.target as HTMLElement;
        const link = target.closest("[data-card-id]") as HTMLElement | null;
        if (!link) return;
        const cardId = link.dataset.cardId;
        const moduleId = link.dataset.moduleId;
        if (cardId && moduleId) {
          event.preventDefault();
          onNavigate(moduleId, cardId);
        }
      }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function QuizBlock({
  questions,
  quizAnswers,
  onAnswer
}: {
  questions: QuizQuestion[];
  quizAnswers: Record<string, number>;
  onAnswer: (questionId: string, selectedIndex: number, isCorrect: boolean) => void;
}) {
  if (questions.length === 0) return null;
  return (
    <section className="mt-8 rounded-lg border border-clinical-sky bg-clinical-sky/40 p-4">
      <div className="mb-4 flex items-center gap-2 font-bold text-clinical-ink">
        <Target size={18} />
        本节小测验
      </div>
      <div className="space-y-4">
        {questions.map((question, questionIndex) => {
          const selected = quizAnswers[question.id];
          const answered = selected !== undefined;
          return (
            <div key={question.id} className="rounded-md border border-slate-200 bg-white p-4">
              <div className="font-bold text-clinical-ink">{questionIndex + 1}. {question.question}</div>
              <div className="mt-3 grid gap-2 md:grid-cols-2">
                {question.options.map((option, optionIndex) => {
                  const isSelected = selected === optionIndex;
                  const isAnswer = question.answer === optionIndex;
                  return (
                    <button
                      key={option}
                      className={`rounded-md border p-3 text-left text-sm transition ${
                        answered && isAnswer
                          ? "border-green-500 bg-green-50 text-green-800"
                          : answered && isSelected
                            ? "border-clinical-rose bg-red-50 text-red-700"
                            : "border-slate-200 bg-slate-50 text-slate-700 hover:border-clinical-blue"
                      }`}
                      onClick={() => onAnswer(question.id, optionIndex, optionIndex === question.answer)}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              {answered && <p className="mt-3 text-sm leading-6 text-slate-600">解析：{question.explanation}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function renderMarkdown(markdown: string) {
  const linked = markdown.replace(/\[\[([^\]]+)\]\]/g, (_, raw: string) => {
    const target = modules.flatMap((module) => module.cards.map((card) => ({ card, module }))).find(({ card }) => card.title === raw || card.id === raw);
    if (!target) return `<strong>${raw}</strong>`;
    return `<a href="#" class="knowledge-link" data-module-id="${target.module.id}" data-card-id="${target.card.id}">${target.card.title}</a>`;
  });

  const withLinks = linked.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a class="knowledge-link" href="$2" target="_blank" rel="noreferrer">$1</a>');
  const withAcronyms = expandFirstAcronyms(withLinks);

  const withTerms = glossary.reduce((text, term) => {
    const escaped = term.term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return text.replace(new RegExp(`\\b${escaped}\\b`, "g"), `<abbr class="term-tip" title="${term.definition}">${term.term}</abbr>`);
  }, withAcronyms);

  return withTerms
    .split("\n")
    .map((line) => {
      if (line.startsWith("### ")) return `<h3>${line.slice(4)}</h3>`;
      if (line.startsWith("## ")) return `<h2>${line.slice(3)}</h2>`;
      if (line.startsWith("# ")) return `<h1>${line.slice(2)}</h1>`;
      if (line.trim().startsWith("<iframe")) return line;
      if (line.trim().startsWith("<object")) return line;
      if (line.trim().startsWith("</object")) return line;
      if (line.trim().startsWith("<embed")) return line;
      if (line.trim().startsWith("<img")) return line;
      if (line.trim().startsWith("<div")) return line;
      if (line.trim().startsWith("</div")) return line;
      if (line.trim().startsWith("<p")) return line;
      if (line.trim().startsWith("</p")) return line;
      if (line.startsWith("- ")) return `<li>${line.slice(2)}</li>`;
      if (line.trim() === "") return "";
      return `<p>${line}</p>`;
    })
    .join("")
    .replace(/(<li>.*?<\/li>)+/g, (match) => `<ul>${match}</ul>`)
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
}

function expandFirstAcronyms(text: string) {
  const acronyms: Record<string, string> = {
    ICH: "International Council for Harmonisation",
    GCP: "Good Clinical Practice",
    FDA: "U.S. Food and Drug Administration",
    EMA: "European Medicines Agency",
    NMPA: "National Medical Products Administration",
    CDE: "Center for Drug Evaluation",
    PMDA: "Pharmaceuticals and Medical Devices Agency",
    IND: "Investigational New Drug",
    CTA: "Clinical Trial Application",
    NDA: "New Drug Application",
    BLA: "Biologics License Application",
    MAA: "Marketing Authorisation Application",
    IRB: "Institutional Review Board",
    IEC: "Independent Ethics Committee",
    CSR: "Clinical Study Report",
    SAP: "Statistical Analysis Plan",
    IB: "Investigator's Brochure",
    ICF: "Informed Consent Form",
    SAE: "Serious Adverse Event",
    AE: "Adverse Event",
    SUSAR: "Suspected Unexpected Serious Adverse Reaction",
    DSUR: "Development Safety Update Report",
    PSUR: "Periodic Safety Update Report",
    PBRER: "Periodic Benefit-Risk Evaluation Report",
    RMP: "Risk Management Plan",
    DMC: "Data Monitoring Committee",
    DSMB: "Data and Safety Monitoring Board",
    RBQM: "Risk-based Quality Management",
    QbD: "Quality by Design",
    RWE: "Real-world Evidence",
    MRCT: "Multi-regional Clinical Trial",
    OS: "Overall Survival",
    PFS: "Progression-free Survival",
    ORR: "Objective Response Rate",
    HR: "Hazard Ratio",
    CI: "Confidence Interval",
    ITT: "Intention-to-Treat",
    PP: "Per Protocol",
    FAS: "Full Analysis Set"
  };
  const parts = text.split(/(<[^>]+>)/g);
  let output = "";
  const used = new Set<string>();
  for (const part of parts) {
    if (part.startsWith("<") && part.endsWith(">")) {
      output += part;
      continue;
    }
    let segment = part;
    for (const [abbr, full] of Object.entries(acronyms)) {
      if (used.has(abbr)) continue;
      const pattern = new RegExp(`\\b${abbr.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`);
      if (pattern.test(segment)) {
        segment = segment.replace(pattern, `${full} (${abbr})`);
        used.add(abbr);
      }
    }
    output += segment;
  }
  return output;
}

function DrugDevelopmentFlow() {
  return (
    <div className="mb-7 rounded-lg border border-clinical-sky bg-gradient-to-r from-white to-clinical-sky/60 p-4">
      <div className="mb-3 flex items-center gap-2 text-sm font-bold text-clinical-slate">
        <Network size={17} />
        新药研发全景流程
      </div>
      <div className="grid gap-2 md:grid-cols-4 xl:grid-cols-8">
        {stageFlow.map((stage, index) => (
          <div key={stage} className="relative rounded-md border border-slate-200 bg-white p-3 text-center shadow-sm">
            <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-clinical-blue text-xs font-bold text-white">{index + 1}</div>
            <div className="text-xs font-bold text-clinical-ink">{stage}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RegulatoryTable() {
  const rows = [
    ["FDA", "IND / NDA / BLA", "Fast Track, Breakthrough Therapy, Accelerated Approval, Priority Review"],
    ["EMA", "CTA / MAA", "PRIME, Conditional Marketing Authorisation, Accelerated Assessment"],
    ["NMPA", "IND / NDA / BLA", "突破性治疗、附条件批准、优先审评、特别审批"],
    ["PMDA", "CTN / J-NDA", "Sakigake, Conditional Early Approval"]
  ];
  return (
    <div className="mb-7 overflow-hidden rounded-lg border border-slate-200">
      <table className="w-full border-collapse text-sm">
        <thead className="bg-clinical-ink text-white">
          <tr>
            <th className="p-3 text-left">机构</th>
            <th className="p-3 text-left">核心路径</th>
            <th className="p-3 text-left">特殊通道</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-t border-slate-100">
              {row.map((cell) => (
                <td key={cell} className="p-3 align-top">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TrialDesignGallery() {
  const items = ["RCT", "Single Arm", "Basket", "Umbrella", "Platform", "Adaptive", "Master Protocol"];
  return (
    <div className="mb-7 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div key={item} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <div className="mb-3 h-16 rounded-md bg-[linear-gradient(135deg,#E8F4FC,#DFF6F2)] p-2">
            <div className="flex h-full items-center justify-around">
              <span className="h-7 w-7 rounded-full bg-clinical-blue" />
              <span className="h-1 w-8 rounded bg-slate-300" />
              <span className="h-7 w-7 rounded-full bg-clinical-cyan" />
            </div>
          </div>
          <div className="font-bold text-clinical-ink">{item}</div>
          <p className="mt-1 text-xs text-slate-500">定义、适用场景、肿瘤案例与面试问法。</p>
        </div>
      ))}
    </div>
  );
}

function StatsVisual() {
  return (
    <div className="mb-7 rounded-lg border border-slate-200 bg-white p-4">
      <div className="flex flex-wrap items-end gap-4">
        {[68, 52, 39, 28, 21].map((height, index) => (
          <div key={height} className="flex flex-col items-center gap-2">
            <div className="w-12 rounded-t-md bg-clinical-blue" style={{ height }} />
            <span className="text-xs text-slate-500">M{index * 6}</span>
          </div>
        ))}
        <div className="ml-2 max-w-sm text-sm leading-6 text-slate-600">
          医生版统计学强调“临床解释”：HR 是风险随时间的相对变化，PFS/OS 曲线要结合 censoring、随访成熟度和治疗转换来读。
        </div>
      </div>
    </div>
  );
}

function LearningPathPanel({ progress }: { progress: Record<string, boolean> }) {
  return (
    <div className="mb-7 grid gap-3 md:grid-cols-2">
      {learningPaths.map((path) => {
        const done = path.cards.filter((id) => progress[id]).length;
        return (
          <div key={path.id} className="rounded-lg border border-slate-200 bg-white p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-clinical-ink">{path.title}</h3>
              <span className="text-sm font-bold text-clinical-blue">{done}/{path.cards.length}</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">{path.description}</p>
            <div className="mt-3 h-2 rounded-full bg-slate-100">
              <div className="h-2 rounded-full bg-clinical-cyan" style={{ width: `${Math.round((done / path.cards.length) * 100)}%` }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function RightKnowledgeMap({ activeCard, linkedCards, onNavigate }: { activeCard: KnowledgeCard; linkedCards: Array<KnowledgeCard & { module: Module }>; onNavigate: (moduleId: string, cardId: string) => void }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-soft">
      <div className="mb-3 flex items-center gap-2 font-bold text-clinical-ink">
        <Map size={18} />
        右侧知识地图
      </div>
      <div className="rounded-md bg-clinical-blue p-3 text-sm font-bold text-white">{activeCard.title}</div>
      <div className="my-3 flex justify-center text-slate-300">
        <Link2 size={18} />
      </div>
      <div className="space-y-2">
        {linkedCards.length === 0 ? (
          <p className="text-sm text-slate-500">暂无关联节点。</p>
        ) : (
          linkedCards.map((item) => (
            <button key={item.id} className="w-full rounded-md border border-slate-200 p-3 text-left hover:border-clinical-blue hover:bg-clinical-sky/60" onClick={() => onNavigate(item.module.id, item.id)}>
              <div className="text-xs font-bold text-clinical-blue">{item.module.title}</div>
              <div className="mt-1 text-sm font-bold text-clinical-ink">{item.title}</div>
            </button>
          ))
        )}
      </div>
    </section>
  );
}

function RecentPanel({ recentCards, onNavigate }: { recentCards: Array<KnowledgeCard & { module: Module }>; onNavigate: (moduleId: string, cardId: string) => void }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-soft">
      <div className="mb-3 flex items-center gap-2 font-bold text-clinical-ink">
        <Clock3 size={18} />
        最近学习
      </div>
      <div className="space-y-2">
        {recentCards.length === 0 ? (
          <p className="text-sm text-slate-500">开始学习后会自动记录最近访问的知识点。</p>
        ) : (
          recentCards.map((item) => (
            <button key={item.id} className="w-full rounded-md bg-slate-50 p-2 text-left hover:bg-clinical-sky" onClick={() => onNavigate(item.module.id, item.id)}>
              <div className="text-xs font-bold text-clinical-blue">{item.module.title}</div>
              <div className="line-clamp-1 text-sm font-bold text-clinical-ink">{item.title}</div>
            </button>
          ))
        )}
      </div>
    </section>
  );
}

function QuickLookup({ onNavigate, languageMode }: { onNavigate: (moduleId: string, cardId: string) => void; languageMode: "zh" | "en" }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-soft">
      <div className="mb-3 flex items-center gap-2 font-bold text-clinical-ink">
        <Search size={18} />
        快速查询
      </div>
      <div className="grid grid-cols-2 gap-2">
        {glossary.map((term) => (
          <button key={term.term} className="rounded-md bg-slate-50 p-2 text-left hover:bg-clinical-sky" onClick={() => onNavigate(term.moduleId, term.cardId)}>
            <div className="font-bold text-clinical-blue">{languageMode === "zh" ? term.term : `${term.term} / EN`}</div>
            <div className="line-clamp-1 text-xs text-slate-500">{languageMode === "zh" ? term.definition : "Hover terms in articles for Chinese explanation"}</div>
          </button>
        ))}
      </div>
    </section>
  );
}

function PersonalPanel({
  note,
  onNoteChange,
  favoriteCount,
  completedCount,
  reviewCount,
  wrongCount,
  importedMarkdown
}: {
  note: string;
  onNoteChange: (value: string) => void;
  favoriteCount: number;
  completedCount: number;
  reviewCount: number;
  wrongCount: number;
  importedMarkdown: string;
}) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-soft">
      <div className="mb-3 flex items-center gap-2 font-bold text-clinical-ink">
        <StickyNote size={18} />
        个人知识库
      </div>
      <div className="mb-3 grid grid-cols-2 gap-2">
        <div className="rounded-md bg-clinical-sky p-3">
          <Heart size={16} className="text-clinical-blue" />
          <div className="mt-1 text-xl font-bold">{favoriteCount}</div>
          <div className="text-xs text-slate-500">收藏</div>
        </div>
        <div className="rounded-md bg-clinical-mint p-3">
          <Target size={16} className="text-clinical-slate" />
          <div className="mt-1 text-xl font-bold">{completedCount}</div>
          <div className="text-xs text-slate-500">完成节点</div>
        </div>
        <div className="rounded-md bg-slate-50 p-3">
          <Flag size={16} className="text-clinical-amber" />
          <div className="mt-1 text-xl font-bold">{reviewCount}</div>
          <div className="text-xs text-slate-500">待复习</div>
        </div>
        <div className="rounded-md bg-slate-50 p-3">
          <Target size={16} className="text-clinical-rose" />
          <div className="mt-1 text-xl font-bold">{wrongCount}</div>
          <div className="text-xs text-slate-500">错题本</div>
        </div>
      </div>
      <label className="mb-2 flex items-center gap-2 text-sm font-bold text-clinical-ink">
        <Highlighter size={16} />
        当前知识点笔记
      </label>
      <textarea
        value={note}
        onChange={(event) => onNoteChange(event.target.value)}
        placeholder="写下你的面试答案、案例判断、易错点..."
        className="h-32 w-full resize-none rounded-md border border-slate-200 bg-slate-50 p-3 text-sm outline-none focus:border-clinical-blue focus:bg-white"
      />
      <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
        <Clock3 size={14} />
        自动保存在浏览器本地。
      </div>
      {importedMarkdown && (
        <div className="mt-4 rounded-md border border-slate-200 bg-slate-50 p-3">
          <div className="mb-2 text-sm font-bold text-clinical-ink">Markdown导入材料</div>
          <pre className="crp-scrollbar max-h-36 overflow-auto whitespace-pre-wrap text-xs leading-5 text-slate-600">{importedMarkdown.slice(0, 1200)}</pre>
        </div>
      )}
    </section>
  );
}
