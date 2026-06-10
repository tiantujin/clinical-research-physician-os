"use client";

import { useEffect, useState } from "react";

export type LocalKnowledgeStoreData = {
  progress: Record<string, boolean>;
  favorites: Record<string, boolean>;
  highlights: Record<string, boolean>;
  review: Record<string, boolean>;
  quizAnswers: Record<string, number>;
  wrongQuestions: Record<string, boolean>;
  notes: Record<string, string>;
  recent: string[];
  importedMarkdown: string;
};

const storageKey = "crp-os-local-store-v1";

const emptyStore: LocalKnowledgeStoreData = {
  progress: {},
  favorites: {},
  highlights: {},
  review: {},
  quizAnswers: {},
  wrongQuestions: {},
  notes: {},
  recent: [],
  importedMarkdown: ""
};

export function useLocalKnowledgeStore() {
  const [store, setStore] = useState<LocalKnowledgeStoreData>(emptyStore);

  useEffect(() => {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) return;
    try {
      setStore({ ...emptyStore, ...JSON.parse(raw) });
    } catch {
      setStore(emptyStore);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(store));
  }, [store]);

  return {
    ...store,
    toggleProgress(cardId: string) {
      setStore((current) => ({
        ...current,
        progress: { ...current.progress, [cardId]: !current.progress[cardId] }
      }));
    },
    toggleFavorite(cardId: string) {
      setStore((current) => ({
        ...current,
        favorites: { ...current.favorites, [cardId]: !current.favorites[cardId] }
      }));
    },
    toggleHighlight(cardId: string) {
      setStore((current) => ({
        ...current,
        highlights: { ...current.highlights, [cardId]: !current.highlights[cardId] }
      }));
    },
    toggleReview(cardId: string) {
      setStore((current) => ({
        ...current,
        review: { ...current.review, [cardId]: !current.review[cardId] }
      }));
    },
    answerQuiz(questionId: string, selectedIndex: number, isCorrect: boolean) {
      setStore((current) => ({
        ...current,
        quizAnswers: { ...current.quizAnswers, [questionId]: selectedIndex },
        wrongQuestions: { ...current.wrongQuestions, [questionId]: !isCorrect }
      }));
    },
    recordVisit(cardId: string) {
      setStore((current) => ({
        ...current,
        recent: [cardId, ...current.recent.filter((id) => id !== cardId)].slice(0, 8)
      }));
    },
    setNote(cardId: string, value: string) {
      setStore((current) => ({
        ...current,
        notes: { ...current.notes, [cardId]: value }
      }));
    },
    setImportedMarkdown(value: string) {
      setStore((current) => ({
        ...current,
        importedMarkdown: value
      }));
    },
    importState(value: LocalKnowledgeStoreData) {
      setStore({ ...emptyStore, ...value });
    },
    exportPdf() {
      window.print();
    },
    exportState() {
      const blob = new Blob([JSON.stringify(store, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `crp-os-learning-record-${new Date().toISOString().slice(0, 10)}.json`;
      link.click();
      URL.revokeObjectURL(url);
    }
  };
}
