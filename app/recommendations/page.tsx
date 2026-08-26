import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CircleAlert,
  FlaskConical,
  Leaf,
  ShieldAlert,
  Sprout,
} from "lucide-react";
import AppSidebar from "@/components/app-sidebar";

export default async function RecommendationsPage() {
  const { isAuthenticated } = await auth();

  if (!isAuthenticated) {
    redirect("/sign-in");
  }

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
                Crop Guidance
              </p>

              <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight">
                Fertilizer Recommendations
              </h1>

              <p className="mt-1 text-sm text-[#6B746E]">
                Nutrient-based guidance generated from your latest analysis.
              </p>
            </div>
          </header>

          {/* ================= CONTENT ================= */}
          <div className="mx-auto max-w-6xl px-6 py-8 lg:px-10">
            {/* Alert */}
            <section className="rounded-2xl border border-[#E8DED0] bg-[#FCF8F2] p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F5EBDD] text-[#936A32]">
                  <CircleAlert className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="font-semibold text-[#4B4132]">
                    Review phosphorus first
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-[#756A5B]">
                    Your latest demonstration analysis shows phosphorus below
                    the preferred range. The recommendation engine has
                    therefore prioritized phosphorus-related guidance.
                  </p>
                </div>
              </div>
            </section>

            {/* Current Analysis */}
            <section className="mt-6 rounded-2xl border border-[#E0E2DE] bg-white p-6 sm:p-7">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1F6B49]">
                    Based On
                  </p>

                  <h2 className="mt-2 font-serif text-2xl font-bold">
                    Grape Plant #002
                  </h2>

                  <p className="mt-1 text-sm text-[#6B746E]">
                    Latest petiole analysis • Sample GA-002
                  </p>
                </div>

                <a
                  href="/results"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#D8DDD8] bg-white px-4 py-2.5 text-sm font-semibold text-[#344039] hover:bg-[#F2F4F1]"
                >
                  View Results
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <NutrientStatus
                  letter="N"
                  name="Nitrogen"
                  value="78%"
                  status="Optimal"
                  good
                />

                <NutrientStatus
                  letter="P"
                  name="Phosphorus"
                  value="42%"
                  status="Low"
                />

                <NutrientStatus
                  letter="K"
                  name="Potassium"
                  value="81%"
                  status="Optimal"
                  good
                />
              </div>
            </section>

            {/* Main Recommendation */}
            <section className="mt-6 rounded-2xl border border-[#D6E2D9] bg-white p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EEF5F0] text-[#1F6B49]">
                  <FlaskConical className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1F6B49]">
                    Recommended Priority
                  </p>

                  <h2 className="mt-2 font-serif text-2xl font-bold">
                    Phosphorus-focused fertilizer guidance
                  </h2>

                  <p className="mt-2 max-w-3xl text-sm leading-7 text-[#6B746E]">
                    The current nutrient estimate indicates phosphorus
                    deficiency. A production recommendation engine should
                    combine this result with crop stage, soil conditions,
                    vineyard history, and a configurable fertilizer catalog
                    before suggesting a specific product or rate.
                  </p>
                </div>
              </div>

              <div className="mt-7 grid gap-4 md:grid-cols-3">
                <RecommendationCard
                  icon={<Leaf className="h-5 w-5" />}
                  title="Nutrient Priority"
                  value="Phosphorus"
                  tone="amber"
                />

                <RecommendationCard
                  icon={<Sprout className="h-5 w-5" />}
                  title="Crop"
                  value="Grapes"
                  tone="green"
                />

                <RecommendationCard
                  icon={<FlaskConical className="h-5 w-5" />}
                  title="Recommendation"
                  value="Review P fertilizer"
                  tone="green"
                />
              </div>

              <div className="mt-6 rounded-xl bg-[#EEF5F0] p-5">
                <p className="text-sm font-semibold text-[#234E38]">
                  Recommended action
                </p>

                <p className="mt-2 text-sm leading-6 text-[#496155]">
                  Review an appropriate phosphorus-based fertilizer strategy
                  using local grape-growing recommendations, crop stage, and
                  soil information. The platform should use verified
                  agronomic rules before generating a final application
                  recommendation.
                </p>
              </div>
            </section>

            {/* Rule Engine */}
            <section className="mt-6 rounded-2xl border border-[#E0E2DE] bg-white p-6 sm:p-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7B837E]">
                  Recommendation Engine
                </p>

                <h2 className="mt-2 font-serif text-2xl font-bold">
                  How the recommendation will be generated
                </h2>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-[#6B746E]">
                  These are the decision layers the real system can use once
                  your ESP32 and prediction service are connected.
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <RuleRow
                  number="01"
                  title="Analyze NPK condition"
                  text="Read the predicted Nitrogen, Phosphorus, and Potassium levels."
                  completed
                />

                <RuleRow
                  number="02"
                  title="Identify nutrient priority"
                  text="Determine whether one or more nutrients need attention."
                  completed
                />

                <RuleRow
                  number="03"
                  title="Check crop context"
                  text="Use grape crop stage, soil condition, and other configured farm information."
                  completed
                />

                <RuleRow
                  number="04"
                  title="Apply fertilizer rules"
                  text="Match nutrient needs to the administrator-managed fertilizer rules and catalog."
                  completed={false}
                />

                <RuleRow
                  number="05"
                  title="Generate final guidance"
                  text="Present the recommendation with appropriate advisory notes and limitations."
                  completed={false}
                />
              </div>
            </section>

            {/* Safety / Limitations */}
            <section className="mt-6 rounded-2xl border border-[#E0E2DE] bg-white p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F3F4F1] text-[#69736C]">
                  <ShieldAlert className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Important agricultural notice
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#6B746E]">
                    GrapeNPK recommendations are intended as decision-support
                    guidance. Final fertilizer selection, dosage, timing, and
                    application should be confirmed using local agricultural
                    recommendations, soil conditions, crop stage, and
                    qualified expert guidance.
                  </p>
                </div>
              </div>
            </section>

            {/* Actions */}
            <section className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="/results"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1F6B49] px-5 py-3 text-sm font-semibold text-white hover:bg-[#18583B]"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Results
              </a>

              <a
                href="/ai"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D8DDD8] bg-white px-5 py-3 text-sm font-semibold text-[#344039] hover:bg-[#F2F4F1]"
              >
                Ask Grape AI
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="/scan"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D8DDD8] bg-white px-5 py-3 text-sm font-semibold text-[#344039] hover:bg-[#F2F4F1]"
              >
                New Scan
                <ArrowRight className="h-4 w-4" />
              </a>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}

/* ================= NUTRIENT STATUS ================= */

function NutrientStatus({
  letter,
  name,
  value,
  status,
  good = false,
}: {
  letter: string;
  name: string;
  value: string;
  status: string;
  good?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-5 ${
        good
          ? "border-[#D6E8DA] bg-[#FBFEFC]"
          : "border-[#E9D8BD] bg-[#FFFCF7]"
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#7B837E]">
            {name}
          </p>

          <p
            className={`mt-2 font-serif text-2xl font-bold ${
              good ? "text-[#1F6B49]" : "text-[#A36C26]"
            }`}
          >
            {status}
          </p>
        </div>

        <span
          className={`flex h-9 w-9 items-center justify-center rounded-lg font-bold ${
            good
              ? "bg-[#EEF5F0] text-[#1F6B49]"
              : "bg-[#FFF4E4] text-[#B77A2D]"
          }`}
        >
          {letter}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs">
        <span className="text-[#7B837E]">
          Detected level
        </span>

        <span className="font-bold text-[#344039]">
          {value}
        </span>
      </div>

      <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#ECEFEC]">
        <div
          className={`h-full rounded-full ${
            good ? "bg-[#4F9A72]" : "bg-[#C58B3A]"
          }`}
          style={{ width: value }}
        />
      </div>
    </div>
  );
}

/* ================= RECOMMENDATION CARD ================= */

function RecommendationCard({
  icon,
  title,
  value,
  tone,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  tone: "green" | "amber";
}) {
  return (
    <div className="rounded-xl border border-[#E0E2DE] bg-[#FBFAF7] p-5">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-xl ${
          tone === "green"
            ? "bg-[#EEF5F0] text-[#1F6B49]"
            : "bg-[#FFF4E4] text-[#B77A2D]"
        }`}
      >
        {icon}
      </div>

      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-[#7B837E]">
        {title}
      </p>

      <p className="mt-1 text-sm font-bold text-[#344039]">
        {value}
      </p>
    </div>
  );
}

/* ================= RULE ROW ================= */

function RuleRow({
  number,
  title,
  text,
  completed,
}: {
  number: string;
  title: string;
  text: string;
  completed: boolean;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-[#E0E2DE] bg-[#FBFAF7] p-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white font-serif font-bold text-[#1F6B49]">
        {number}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <h3 className="font-semibold">
            {title}
          </h3>

          {completed ? (
            <span className="inline-flex w-fit items-center gap-1 rounded-full bg-[#EEF5F0] px-2.5 py-1 text-[10px] font-bold text-[#1F6B49]">
              <CheckCircle2 className="h-3.5 w-3.5" />
              READY
            </span>
          ) : (
            <span className="inline-flex w-fit rounded-full bg-[#F2F3F0] px-2.5 py-1 text-[10px] font-bold text-[#7B837E]">
              CONFIGURABLE
            </span>
          )}
        </div>

        <p className="mt-1 text-sm leading-6 text-[#6B746E]">
          {text}
        </p>
      </div>
    </div>
  );
}