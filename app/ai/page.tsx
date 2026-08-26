"use client";

import { useState } from "react";
import AppShell from "@/components/app-shell";

type Message = {
  role: "user" | "assistant";
  text: string;
};

const suggestions = [
  "Why is phosphorus low?",
  "What should I check before my next scan?",
  "Explain my latest nutrient result.",
  "What can cause yellowing leaves?",
];

export default function AIPage() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = async (text = message) => {
    const clean = text.trim();

    if (!clean || loading) {
      return;
    }

    const userMessage: Message = {
      role: "user",
      text: clean,
    };

    setMessages((current) => [
      ...current,
      userMessage,
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: clean,
          context: {
            crop: "Grape",
            growthStage: "Flowering",
            latestScan: {
              nitrogen: "420 ppm",
              phosphorus: "0.18%",
              potassium: "1240 ppm",
            },
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "AI request failed.");
      }

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text: data.answer,
        },
      ]);

    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text:
            error instanceof Error
              ? `I could not connect to the AI service right now. ${error.message}`
              : "I could not connect to the AI service right now.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppShell>

      <div className="mx-auto flex max-w-4xl flex-col">

        {/* HEADER */}
        <section>

          <p className="text-sm font-semibold text-[#1F6B49]">
            Grape AI
          </p>

          <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
            Ask about your grape crop
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
            Ask questions about nutrient results, sampling, plant health and
            what to check next.
          </p>

        </section>

        {/* CHAT */}
        <section className="mt-6 flex min-h-[60vh] flex-col overflow-hidden rounded-2xl border border-[#E0E2DE] bg-white shadow-sm">

          <div className="flex-1 space-y-4 overflow-y-auto p-4 sm:p-6">

            {messages.length === 0 && !loading && (
              <div className="flex min-h-[45vh] flex-col items-center justify-center text-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF5F0] text-2xl text-[#1F6B49]">
                  ✦
                </div>

                <h2 className="mt-5 text-lg font-bold">
                  How can I help?
                </h2>

                <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
                  Ask naturally. You do not need to know technical terms.
                </p>

                <div className="mt-6 w-full max-w-lg space-y-2">

                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => sendMessage(suggestion)}
                      className="w-full rounded-xl border border-[#DDE3DE] bg-[#FBFAF7] px-4 py-3 text-left text-sm text-gray-700 transition hover:border-[#B7C9BD]"
                    >
                      {suggestion}
                    </button>
                  ))}

                </div>

              </div>
            )}

            {messages.map((item, index) => (
              <div
                key={`${item.role}-${index}`}
                className={`flex ${
                  item.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm leading-6 sm:max-w-[78%] ${
                    item.role === "user"
                      ? "bg-[#1F6B49] text-white"
                      : "bg-[#EEF5F0] text-[#244B37]"
                  }`}
                >
                  {item.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl bg-[#EEF5F0] px-4 py-3 text-sm text-[#244B37]">
                  Thinking…
                </div>
              </div>
            )}

          </div>

          {/* COMPOSER */}
          <div className="border-t border-[#E0E2DE] p-3 sm:p-4">

            <div className="flex items-end gap-2">

              <textarea
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" &&
                    !event.shiftKey
                  ) {
                    event.preventDefault();
                    sendMessage();
                  }
                }}
                placeholder="Ask about your grape crop..."
                rows={1}
                className="min-h-12 flex-1 resize-none rounded-xl border border-[#DDE3DE] bg-[#FBFAF7] px-4 py-3 text-sm outline-none focus:border-[#1F6B49]"
              />

              <button
                onClick={() => sendMessage()}
                disabled={loading}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1F6B49] text-white disabled:opacity-50"
                aria-label="Send"
              >
                ↑
              </button>

            </div>

            <p className="mt-2 px-1 text-[10px] leading-4 text-gray-400">
              AI guidance is decision support. It should not replace
              laboratory testing or professional agronomy advice.
            </p>

          </div>

        </section>

      </div>

    </AppShell>
  );
}