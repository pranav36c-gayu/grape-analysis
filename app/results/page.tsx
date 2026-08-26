import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  Download,
  FlaskConical,
  Grape,
  Info,
  Leaf,
  Sparkles,
} from "lucide-react";
import AppSidebar from "@/components/app-sidebar";

export default async function ResultsPage() {
  const { isAuthenticated } = await auth();

  if (!isAuthenticated) {
    redirect("/sign-in");
  }

  /*
    DEMONSTRATION RESULT DATA

    These values are intentionally presented as sample/model output.
    They should later be replaced with the real ESP32 -> ML pipeline.
  */

  const nitrogen = 78;
  const phosphorus = 42;
  const potassium = 81;

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
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7B837E]">
                    Analysis Report
                  </p>

                  <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight">
                    Nutrient Analysis Results
                  </h1>

                  <p className="mt-1 text-sm text-[#6B746E]">
                    Grape Petiole Analysis • Sample GA-002
                  </p>
                </div>

                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#EEF5F0] px-3 py-1.5 text-xs font-bold text-[#1F6B49]">
                  <CheckCircle2 className="h-4 w-4" />
                  Analysis Complete
                </span>
              </div>
            </div>
          </header>

          {/* ================= CONTENT ================= */}
          <div className="mx-auto max-w-6xl px-6 py-8 lg:px-10">
            {/* Back */}
            <a
              href="/dashboard"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1F6B49] hover:text-[#18583B]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </a>

            {/* Sample Overview */}
            <section className="mt-6 rounded-2xl border border-[#E0E2DE] bg-white p-6 sm:p-7">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF5F0] text-[#1F6B49]">
                    <Grape className="h-7 w-7" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7B837E]">
                      Sample
                    </p>

                    <h2 className="mt-1 font-serif text-2xl font-bold">
                      Grape Plant #002
                    </h2>

                    <p className="mt-1 text-sm text-[#6B746E]">
                      Petiole sample • Spectral analysis
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <SampleInfo label="Sample ID" value="GA-002" />
                  <SampleInfo label="Device" value="ESP32" />
                  <SampleInfo label="Sensor" value="Spectral" />
                  <SampleInfo label="Status" value="Complete" />
                </div>
              </div>
            </section>

            {/* ================= NPK RESULTS ================= */}
            <section className="mt-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1F6B49]">
                  Nutrient Assessment
                </p>

                <h2 className="mt-2 font-serif text-2xl font-bold">
                  NPK Analysis
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#6B746E]">
                  Model-based nutrient estimates generated from the petiole
                  analysis pipeline.
                </p>
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-3">
                <NutrientCard
                  letter="N"
                  name="Nitrogen"
                  value={nitrogen}
                  status="Optimal"
                  description="Nitrogen is currently within the preferred range."
                  tone="green"
                />

                <NutrientCard
                  letter="P"
                  name="Phosphorus"
                  value={phosphorus}
                  status="Low"
                  description="Phosphorus is below the preferred range and requires attention."
                  tone="amber"
                />

                <NutrientCard
                  letter="K"
                  name="Potassium"
                  value={potassium}
                  status="Optimal"
                  description="Potassium is currently within the preferred range."
                  tone="green"
                />
              </div>
            </section>

            {/* ================= OVERALL HEALTH ================= */}
            <section className="mt-6 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="rounded-2xl border border-[#E0E2DE] bg-white p-6 sm:p-7">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7B837E]">
                      Overall Crop Status
                    </p>

                    <h2 className="mt-2 font-serif text-2xl font-bold">
                      Needs Attention
                    </h2>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-[#6B746E]">
                      Two nutrients are within the preferred range. Phosphorus
                      is currently the main nutrient requiring attention.
                    </p>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF4E4] text-[#B77A2D]">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-7 space-y-5">
                  <NutrientBar
                    label="Nitrogen"
                    value={nitrogen}
                    tone="green"
                  />

                  <NutrientBar
                    label="Phosphorus"
                    value={phosphorus}
                    tone="amber"
                  />

                  <NutrientBar
                    label="Potassium"
                    value={potassium}
                    tone="green"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-[#E8DED0] bg-[#FCF8F2] p-6 sm:p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5EBDD] text-[#936A32]">
                  <Leaf className="h-5 w-5" />
                </div>

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#936A32]">
                  Priority
                </p>

                <h3 className="mt-2 font-serif text-2xl font-bold text-[#4B4132]">
                  Phosphorus
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#756A5B]">
                  Review phosphorus-related fertilizer guidance according to
                  crop stage, soil conditions, and local agricultural practice.
                </p>

                <a
                  href="#recommendation"
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#1F6B49] px-4 py-3 text-sm font-semibold text-white hover:bg-[#18583B]"
                >
                  View Recommendation
                  <ArrowLeft className="h-4 w-4 rotate-180" />
                </a>
              </div>
            </section>

            {/* ================= RECOMMENDATION ================= */}
            <section
              id="recommendation"
              className="mt-6 rounded-2xl border border-[#D6E2D9] bg-white p-6 sm:p-7"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EEF5F0] text-[#1F6B49]">
                  <FlaskConical className="h-6 w-6" />
                </div>

                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1F6B49]">
                    Fertilizer Recommendation
                  </p>

                  <h2 className="mt-2 font-serif text-2xl font-bold">
                    Address the phosphorus deficiency
                  </h2>

                  <p className="mt-2 max-w-3xl text-sm leading-7 text-[#6B746E]">
                    The current analysis indicates that phosphorus is below the
                    preferred range. The recommendation engine can use this
                    result together with crop stage, soil conditions, and
                    configured fertilizer rules to generate a more specific
                    recommendation.
                  </p>

                  <div className="mt-6 rounded-xl bg-[#EEF5F0] p-5">
                    <p className="text-sm font-semibold text-[#234E38]">
                      Recommended action
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#496155]">
                      Consider an appropriate phosphorus-based fertilizer plan
                      after checking crop stage, soil condition, and local
                      agricultural guidance.
                    </p>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <RecommendationItem
                      title="Nutrient"
                      value="Phosphorus"
                    />

                    <RecommendationItem
                      title="Priority"
                      value="Attention"
                    />

                    <RecommendationItem
                      title="Basis"
                      value="Petiole analysis"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* ================= AI INSIGHT ================= */}
            <section className="mt-6 rounded-2xl border border-[#D9E3DC] bg-[#EEF5F0]/70 p-6 sm:p-7">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#1F6B49]">
                    <Sparkles className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1F6B49]">
                      Grape AI
                    </p>

                    <h3 className="mt-1 font-serif text-xl font-bold">
                      Want to understand this result?
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-[#5C6B61]">
                      Ask Grape AI to explain the nutrient result and the
                      recommendation in farmer-friendly language.
                    </p>
                  </div>
                </div>

                <a
                  href="/ai"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#1F6B49] px-5 py-3 text-sm font-semibold text-white hover:bg-[#18583B]"
                >
                  Ask Grape AI
                  <ArrowLeft className="h-4 w-4 rotate-180" />
                </a>
              </div>
            </section>

            {/* ================= DISCLAIMER ================= */}
            <section className="mt-6 rounded-xl border border-[#E0E2DE] bg-white p-5">
              <div className="flex items-start gap-3">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#7B837E]" />

                <p className="text-xs leading-5 text-[#7B837E]">
                  These results are presented as model-based estimates for the
                  current prototype. They are not laboratory-verified nutrient
                  measurements. Final fertilizer application should consider
                  crop stage, soil conditions, local recommendations, and
                  qualified agricultural guidance.
                </p>
              </div>
            </section>

            {/* ================= ACTIONS ================= */}
            <section className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="/scan"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1F6B49] px-5 py-3 text-sm font-semibold text-white hover:bg-[#18583B]"
              >
                Run Another Scan
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </a>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D8DDD8] bg-white px-5 py-3 text-sm font-semibold text-[#344039] hover:bg-[#F2F4F1]"
              >
                <Download className="h-4 w-4" />
                Download Report
              </button>

              <a
                href="/history"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D8DDD8] bg-white px-5 py-3 text-sm font-semibold text-[#344039] hover:bg-[#F2F4F1]"
              >
                View History
              </a>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}

/* ================= SAMPLE INFO ================= */

function SampleInfo({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-[#F5F7F4] px-3 py-3">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-[#7B837E]">
        {label}
      </p>

      <p className="mt-1 text-xs font-bold text-[#344039]">
        {value}
      </p>
    </div>
  );
}

/* ================= NUTRIENT CARD ================= */

function NutrientCard({
  letter,
  name,
  value,
  status,
  description,
  tone,
}: {
  letter: string;
  name: string;
  value: number;
  status: string;
  description: string;
  tone: "green" | "amber";
}) {
  const isGreen = tone === "green";

  return (
    <div
      className={`rounded-2xl border bg-white p-6 ${
        isGreen ? "border-[#D6E8DA]" : "border-[#E9D8BD]"
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold text-[#6B746E]">
            {name}
          </p>

          <p
            className={`mt-2 font-serif text-3xl font-bold ${
              isGreen ? "text-[#1F6B49]" : "text-[#A36C26]"
            }`}
          >
            {status}
          </p>
        </div>

        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold ${
            isGreen
              ? "bg-[#EEF5F0] text-[#1F6B49]"
              : "bg-[#FFF4E4] text-[#B77A2D]"
          }`}
        >
          {letter}
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between text-xs">
          <span className="text-[#7B837E]">
            Detected Level
          </span>

          <span className="font-bold text-[#344039]">
            {value}%
          </span>
        </div>

        <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#EEF0ED]">
          <div
            className={`h-full rounded-full ${
              isGreen ? "bg-[#4F9A72]" : "bg-[#C58B3A]"
            }`}
            style={{ width: `${value}%` }}
          />
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-[#6B746E]">
        {description}
      </p>
    </div>
  );
}

/* ================= NUTRIENT BAR ================= */

function NutrientBar({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone: "green" | "amber";
}) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold text-[#4B554F]">
          {label}
        </span>

        <span className="font-bold text-[#344039]">
          {value}%
        </span>
      </div>

      <div className="mt-2 h-3 overflow-hidden rounded-full bg-[#EEF0ED]">
        <div
          className={`h-full rounded-full ${
            tone === "green" ? "bg-[#4F9A72]" : "bg-[#C58B3A]"
          }`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

/* ================= RECOMMENDATION ITEM ================= */

function RecommendationItem({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-white px-4 py-4">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-[#7B837E]">
        {title}
      </p>

      <p className="mt-1 text-sm font-bold text-[#344039]">
        {value}
      </p>
    </div>
  );
}