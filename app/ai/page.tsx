"use client";

import { useState } from "react";
import {
  ArrowRight,
  Brain,
  MessageCircle,
  ScanLine,
  Send,
  Sparkles,
  User,
} from "lucide-react";
import AppSidebar from "@/components/app-sidebar";

const SUGGESTED_QUESTIONS = [
  "Why is nitrogen low?",
  "Explain my result.",
  "What does this mean for my grape crop?",
  "Compare this scan with my previous scan.",
  "Why are you recommending this fertilizer?",
  "Is my plant improving compared with the previous scan?",
];

export default function AIPage() {
  const [message, setMessage] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState("");

  const handleQuestionClick = (question: string) => {
    setSelectedQuestion(question);
    setMessage(question);
  };

  return (
    <main className="min-h-screen bg-[#FBFAF7] text-[#1E211F]">
      <div className="flex min-h-screen">
        {/* ================= SIDEBAR ================= */}
        <AppSidebar />

        {/* ================= MAIN ================= */}
        <section className="min-w-0 flex-1">
          {/* Header */}
          <header className="border-b border-[#E0E2DE] bg-[#FBFAF7]">
            <div className="mx-auto max-w-6xl px-6 py-6 lg:px-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7B837E]">
                AI Assistant
              </p>

              <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight">
                Grape AI
              </h1>

              <p className="mt-1 text-sm text-[#6B746E]">
                Ask about your nutrient analysis.
              </p>
            </div>
          </header>

          {/* ================= CONTENT ================= */}
          <div className="mx-auto max-w-5xl px-6 py-8 lg:px-10">
            {/* Main AI panel */}
            <section className="rounded-2xl border border-[#E0E2DE] bg-white">
              {/* AI introduction */}
              <div className="border-b border-[#E0E2DE] px-6 py-7 sm:px-8">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF5F0] text-[#1F6B49]">
                    <Brain className="h-8 w-8" />
                  </div>

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#EEF5F0] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#1F6B49]">
                    <Sparkles className="h-3.5 w-3.5" />
                    Grape AI
                  </div>

                  <h2 className="mt-4 font-serif text-2xl font-bold sm:text-3xl">
                    Your agronomist in your pocket
                  </h2>

                  <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#6B746E]">
                    Grape AI uses your actual scan data, NPK results,
                    recommendations, and scan history to explain your results
                    in plain language.
                  </p>
                </div>
              </div>

              {/* Pre-scan state */}
              <div className="px-6 py-8 sm:px-8">
                <div className="rounded-2xl border border-[#E0E2DE] bg-[#FBFAF7] p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#1F6B49]">
                    <ScanLine className="h-6 w-6" />
                  </div>

                  <h3 className="mt-4 font-serif text-xl font-bold">
                    Complete a scan first
                  </h3>

                  <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-[#6B746E]">
                    Grape AI needs an actual nutrient analysis before it can
                    answer questions about your grape crop.
                  </p>

                  <a
                    href="/scan"
                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#1F6B49] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#18583B]"
                  >
                    <ScanLine className="h-4 w-4" />
                    Start New Scan
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                {/* Suggested questions */}
                <div className="mt-8">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-[#1F6B49]" />

                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7B837E]">
                      Suggested questions
                    </p>
                  </div>

                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    {SUGGESTED_QUESTIONS.map((question) => {
                      const active = selectedQuestion === question;

                      return (
                        <button
                          key={question}
                          type="button"
                          onClick={() => handleQuestionClick(question)}
                          className={`rounded-xl border px-4 py-3 text-left text-sm transition ${
                            active
                              ? "border-[#1F6B49] bg-[#EEF5F0] text-[#1F6B49]"
                              : "border-[#E0E2DE] bg-white text-[#53605A] hover:border-[#BFD4C5] hover:bg-[#F6F8F5]"
                          }`}
                        >
                          {question}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Composer */}
                <div className="mt-8">
                  <div className="rounded-2xl border border-[#E0E2DE] bg-white p-3">
                    <div className="flex items-end gap-3">
                      <textarea
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        placeholder="Ask about your analysis..."
                        rows={3}
                        className="min-h-[80px] flex-1 resize-none border-0 bg-transparent px-2 py-2 text-sm text-[#1E211F] outline-none placeholder:text-[#9AA29D]"
                      />

                      <button
                        type="button"
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1F6B49] text-white transition hover:bg-[#18583B]"
                        aria-label="Send message"
                      >
                        <Send className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <p className="mt-2 text-center text-[11px] leading-5 text-[#8A938D]">
                    Grape AI should distinguish measured sensor data from its
                    own explanations and recommendations.
                  </p>
                </div>
              </div>
            </section>

            {/* AI capabilities */}
            <section className="mt-6 grid gap-4 md:grid-cols-3">
              <CapabilityCard
                icon={<Brain className="h-5 w-5" />}
                title="Explain results"
                text="Understand what your NPK analysis means for the crop."
              />

              <CapabilityCard
                icon={<Sparkles className="h-5 w-5" />}
                title="Understand trends"
                text="Compare current results with previous scan history."
              />

              <CapabilityCard
                icon={<User className="h-5 w-5" />}
                title="Farmer-friendly answers"
                text="Ask questions naturally and receive simple explanations."
              />
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}

function CapabilityCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-[#E0E2DE] bg-white p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF5F0] text-[#1F6B49]">
        {icon}
      </div>

      <h3 className="mt-4 font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#6B746E]">
        {text}
      </p>
    </div>
  );
}