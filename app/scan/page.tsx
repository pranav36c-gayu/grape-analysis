"use client";

import { useState } from "react";
import Link from "next/link";
import AppShell from "@/components/app-shell";

type ScanStage = "setup" | "preparing" | "scanning" | "result";

type ResultData = {
  nitrogen: number;
  phosphorus: number;
  potassium: number;
};

export default function ScanPage() {
  const [stage, setStage] = useState<ScanStage>("setup");

  const [result, setResult] = useState<ResultData>({
    nitrogen: 420,
    phosphorus: 0.18,
    potassium: 1240,
  });

  const startScan = () => {
    setStage("preparing");

    setTimeout(() => {
      setStage("scanning");
    }, 1200);

    setTimeout(() => {
      setResult({
        nitrogen: 420,
        phosphorus: 0.18,
        potassium: 1240,
      });

      setStage("result");
    }, 3500);
  };

  return (
    <AppShell>

      <div className="mx-auto max-w-3xl">

        {stage === "setup" && (
          <SetupScreen onStart={startScan} />
        )}

        {stage === "preparing" && (
          <PreparingScreen />
        )}

        {stage === "scanning" && (
          <ScanningScreen />
        )}

        {stage === "result" && (
          <ResultScreen result={result} />
        )}

      </div>

    </AppShell>
  );
}

function SetupScreen({
  onStart,
}: {
  onStart: () => void;
}) {
  return (
    <div className="space-y-6">

      <div>
        <Link
          href="/dashboard"
          className="text-sm font-medium text-gray-500"
        >
          ← Dashboard
        </Link>

        <p className="mt-5 text-sm font-semibold text-[#1F6B49]">
          New Field Analysis
        </p>

        <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
          Analyze a grape petiole
        </h1>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          Enter the basic field information before starting the measurement.
        </p>
      </div>

      {/* STEP INDICATOR */}
      <div className="rounded-2xl border border-[#E0E2DE] bg-white p-5">

        <div className="flex items-center gap-3">

          <StepCircle number="1" active />

          <div className="h-px flex-1 bg-[#D8E0DB]" />

          <StepCircle number="2" />

          <div className="h-px flex-1 bg-[#D8E0DB]" />

          <StepCircle number="3" />

        </div>

        <div className="mt-5 grid grid-cols-3 gap-2 text-center text-[11px] text-gray-500">
          <span>Sample</span>
          <span>Measure</span>
          <span>Result</span>
        </div>

      </div>

      {/* FORM */}
      <div className="rounded-2xl border border-[#E0E2DE] bg-white p-5 shadow-sm sm:p-7">

        <div className="space-y-5">

          <Field
            label="Crop"
            value="Grape"
          />

          <Field
            label="Growth Stage"
            value="Flowering"
          />

          <Field
            label="Device"
            value="PETIOLE-ESP32-01 — Connected"
            success
          />

          <Field
            label="Sample"
            value="Fresh grape petiole"
          />

        </div>

        <div className="mt-6 rounded-xl bg-[#EEF5F0] p-4">

          <p className="text-sm font-semibold text-[#1F6B49]">
            Before you scan
          </p>

          <ul className="mt-2 space-y-1 text-sm leading-6 text-gray-600">
            <li>• Use a clean sample.</li>
            <li>• Keep the sample position consistent.</li>
            <li>• Make sure the sensor chamber is clean.</li>
          </ul>

        </div>

        <button
          onClick={onStart}
          className="mt-6 min-h-12 w-full rounded-xl bg-[#1F6B49] font-semibold text-white shadow-sm"
        >
          Start Analysis
        </button>

      </div>

    </div>
  );
}

function PreparingScreen() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">

      <div className="flex h-20 w-20 animate-pulse items-center justify-center rounded-full bg-[#EEF5F0] text-3xl text-[#1F6B49]">
        ◉
      </div>

      <h1 className="mt-6 text-2xl font-bold">
        Preparing the device
      </h1>

      <p className="mt-2 max-w-md text-sm leading-6 text-gray-600">
        Checking the sensor connection and preparing the measurement.
      </p>

    </div>
  );
}

function ScanningScreen() {
  return (
    <div className="space-y-6">

      <div>
        <p className="text-sm font-semibold text-[#1F6B49]">
          Measuring
        </p>

        <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
          Reading your sample
        </h1>

        <p className="mt-2 text-sm text-gray-600">
          Keep the sample steady while the sensor collects data.
        </p>
      </div>

      <div className="rounded-3xl border border-[#E0E2DE] bg-white p-6 text-center shadow-sm sm:p-10">

        <div className="mx-auto flex h-36 w-36 animate-pulse items-center justify-center rounded-full border-8 border-[#EEF5F0] bg-white text-4xl text-[#1F6B49]">
          ⌁
        </div>

        <p className="mt-6 text-sm font-semibold text-[#1F6B49]">
          Processing sensor signals…
        </p>

        <div className="mx-auto mt-4 h-2 max-w-md overflow-hidden rounded-full bg-[#E7ECE8]">
          <div className="h-full w-3/4 rounded-full bg-[#1F6B49]" />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">

          <MiniReading
            title="Nitrogen"
            value="Reading…"
          />

          <MiniReading
            title="Potassium"
            value="Reading…"
          />

          <MiniReading
            title="Stability"
            value="92%"
          />

        </div>

      </div>

    </div>
  );
}

function ResultScreen({
  result,
}: {
  result: ResultData;
}) {
  const recommendation = getRecommendation(result);

  return (
    <div className="space-y-6">

      <div>
        <p className="text-sm font-semibold text-[#1F6B49]">
          Analysis Complete
        </p>

        <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
          Grape Plant Result
        </h1>

        <p className="mt-2 text-sm text-gray-600">
          Review the nutrient indicators and recommended next action.
        </p>
      </div>

      {/* OVERALL */}
      <section className="rounded-3xl bg-[#1F6B49] p-6 text-white sm:p-8">

        <p className="text-sm text-green-100">
          Overall Plant Status
        </p>

        <p className="mt-2 text-4xl font-bold">
          {recommendation.overall}
        </p>

        <p className="mt-3 max-w-xl text-sm leading-6 text-green-50">
          {recommendation.summary}
        </p>

      </section>

      {/* NPK */}
      <section>

        <h2 className="text-lg font-semibold">
          Nutrient Indicators
        </h2>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">

          <NutrientCard
            name="Nitrogen"
            value={`${result.nitrogen} ppm`}
            status="Adequate"
          />

          <NutrientCard
            name="Phosphorus"
            value={`${result.phosphorus}%`}
            status="Watch"
            watch
          />

          <NutrientCard
            name="Potassium"
            value={`${result.potassium} ppm`}
            status="Adequate"
          />

        </div>

      </section>

      {/* AI RECOMMENDATION */}
      <section className="rounded-2xl border border-[#BBD0C3] bg-[#EEF5F0] p-5 sm:p-7">

        <div className="flex items-start gap-3">

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-xl text-[#1F6B49] shadow-sm">
            ✦
          </div>

          <div>
            <p className="text-sm font-semibold text-[#1F6B49]">
              AI Recommendation
            </p>

            <h2 className="mt-1 text-xl font-bold">
              {recommendation.title}
            </h2>
          </div>

        </div>

        <p className="mt-5 text-sm leading-7 text-gray-700">
          {recommendation.body}
        </p>

        <div className="mt-5 rounded-xl bg-white p-4">

          <p className="text-xs font-semibold uppercase tracking-wide text-[#1F6B49]">
            What to check next
          </p>

          <ul className="mt-2 space-y-2 text-sm leading-6 text-gray-600">
            {recommendation.nextSteps.map((step) => (
              <li key={step}>• {step}</li>
            ))}
          </ul>

        </div>

        <div className="mt-4 rounded-xl border border-[#DCE3DE] bg-white p-4">
          <p className="text-[11px] leading-5 text-gray-500">
            Prototype note: these values are estimated indicators and should
            be validated against calibrated reference measurements before
            making precise fertilizer-dose decisions.
          </p>
        </div>

      </section>

      {/* ACTIONS */}
      <div className="grid gap-3 sm:grid-cols-3">

        <Link
          href="/history"
          className="flex min-h-12 items-center justify-center rounded-xl bg-[#1F6B49] font-semibold text-white"
        >
          Save & View History
        </Link>

        <Link
          href="/ai"
          className="flex min-h-12 items-center justify-center rounded-xl border border-[#DCE2DD] bg-white font-semibold text-gray-700"
        >
          Ask Grape AI
        </Link>

        <Link
          href="/scan"
          className="flex min-h-12 items-center justify-center rounded-xl border border-[#DCE2DD] bg-white font-semibold text-gray-700"
        >
          New Scan
        </Link>

      </div>

    </div>
  );
}

function getRecommendation(result: ResultData) {
  const phosphorusNeedsAttention = result.phosphorus < 0.2;

  if (phosphorusNeedsAttention) {
    return {
      overall: "Needs Attention",
      summary:
        "Nitrogen and potassium are currently shown as adequate, while phosphorus deserves a closer review.",
      title: "Review phosphorus before increasing fertilizer",
      body:
        "The current analysis indicates that phosphorus may be lower than the selected prototype reference. Before making a fertilizer change, check the grape growth stage, recent fertilizer or fertigation history, irrigation uniformity and the field condition.",
      nextSteps: [
        "Review the last fertilizer application.",
        "Check whether irrigation or fertigation is reaching the whole field.",
        "Repeat the measurement with a consistent sample.",
        "Compare the prototype result with a reference or laboratory test when available.",
      ],
    };
  }

  return {
    overall: "Good",
    summary:
      "The current prototype analysis shows no major nutrient warning.",
    title: "Continue monitoring the crop",
    body:
      "The current nutrient indicators look broadly adequate. Continue routine monitoring and compare future scans with the previous results so changes can be identified early.",
    nextSteps: [
      "Continue regular field monitoring.",
      "Repeat the test at the next planned sampling stage.",
      "Keep sampling conditions consistent.",
      "Review history for trends rather than relying on one reading.",
    ],
  };
}

function StepCircle({
  number,
  active = false,
}: {
  number: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
        active
          ? "bg-[#1F6B49] text-white"
          : "bg-[#EEF5F0] text-[#1F6B49]"
      }`}
    >
      {number}
    </div>
  );
}

function Field({
  label,
  value,
  success = false,
}: {
  label: string;
  value: string;
  success?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <div className="mt-2 flex min-h-12 items-center justify-between rounded-xl border border-[#DCE2DD] bg-[#FBFAF7] px-4">

        <span className="text-sm">
          {value}
        </span>

        {success && (
          <span className="text-xs font-semibold text-[#1F6B49]">
            ✓
          </span>
        )}

      </div>
    </div>
  );
}

function MiniReading({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-[#E0E2DE] bg-[#FBFAF7] p-3">
      <p className="text-xs text-gray-500">
        {title}
      </p>

      <p className="mt-1 font-semibold">
        {value}
      </p>
    </div>
  );
}

function NutrientCard({
  name,
  value,
  status,
  watch = false,
}: {
  name: string;
  value: string;
  status: string;
  watch?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-[#E0E2DE] bg-white p-5">

      <p className="text-sm font-semibold">
        {name}
      </p>

      <p className="mt-3 text-xl font-bold">
        {value}
      </p>

      <span
        className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
          watch
            ? "bg-amber-50 text-amber-700"
            : "bg-[#EEF5F0] text-[#1F6B49]"
        }`}
      >
        {status}
      </span>

    </div>
  );
}