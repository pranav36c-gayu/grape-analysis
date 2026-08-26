import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import {
  Grape,
  ScanLine,
  Cpu,
  Brain,
  Leaf,
  Shield,
  ArrowRight,
  Activity,
  BarChart3,
  Wifi,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Microscope,
  FlaskConical,
} from "lucide-react";

const HERO_IMAGE =
  "https://images.pexels.com/photos/36189155/pexels-photo-36189155.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";

const GRAPE_IMAGE =
  "https://images.pexels.com/photos/31782681/pexels-photo-31782681.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";

const LAB_IMAGE =
  "https://images.pexels.com/photos/8533045/pexels-photo-8533045.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";

const WORKFLOW_STEPS = [
  {
    num: "01",
    title: "Petiole",
    desc: "Collect a grape petiole sample from your vineyard.",
    icon: Leaf,
  },
  {
    num: "02",
    title: "Spectral Sensor",
    desc: "Place the sample in the spectral sensor attached to your ESP32.",
    icon: Microscope,
  },
  {
    num: "03",
    title: "ESP32 Device",
    desc: "The ESP32 captures spectral readings across visible and near-infrared wavelengths.",
    icon: Cpu,
  },
  {
    num: "04",
    title: "Secure Data Transfer",
    desc: "Readings are securely transmitted to the GrapeNPK cloud platform.",
    icon: Shield,
  },
  {
    num: "05",
    title: "Spectral Processing",
    desc: "Data is validated, cleaned, and features are extracted from the spectral signature.",
    icon: Activity,
  },
  {
    num: "06",
    title: "NPK Prediction",
    desc: "The prediction model estimates Nitrogen, Phosphorus, and Potassium levels.",
    icon: BarChart3,
  },
  {
    num: "07",
    title: "Fertilizer Recommendation",
    desc: "Configurable rules generate targeted fertilizer guidance based on your results.",
    icon: FlaskConical,
  },
  {
    num: "08",
    title: "AI Explanation",
    desc: "Grape AI explains your results in plain language and answers your questions.",
    icon: Brain,
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Is GrapeNPK a replacement for laboratory soil or tissue testing?",
    answer:
      "No. GrapeNPK provides model-based estimates of nutrient levels from spectral data. It is a decision-support tool designed for rapid in-field assessment. For critical decisions, always confirm with accredited laboratory testing. The platform clearly labels results as estimates and does not claim laboratory-grade accuracy.",
  },
  {
    question: "What hardware do I need to use GrapeNPK?",
    answer:
      "GrapeNPK is designed to work with an ESP32 microcontroller connected to a spectral sensor. The platform supports real device communication via secure API endpoints. During development, a built-in simulator mode generates realistic spectral data so you can test the full workflow without hardware.",
  },
  {
    question: "How does the AI assistant work?",
    answer:
      "Grape AI uses your actual scan data, NPK results, recommendations, and scan history as context. It explains your results in farmer-friendly language and never invents sensor readings or nutrient values. The AI clearly distinguishes between measured data and its own interpretations, and includes advisory notices about its limitations.",
  },
  {
    question: "Can I use GrapeNPK for crops other than grapes?",
    answer:
      "The architecture is designed to support future crops. Nutrient thresholds, fertilizer catalogs, and recommendation rules are configurable per crop type. Currently, the platform is tuned for grape vineyards, but the system can be extended to tomatoes, other fruits, and additional crops.",
  },
  {
    question: "How is my farm data protected?",
    answer:
      "GrapeNPK uses row-level security at the database level — each farmer can only access their own scans, devices, and analysis. Admins have system-wide access for monitoring and configuration. All authentication is handled securely, and device communication uses authenticated API endpoints.",
  },
  {
    question: "Can the prediction model be replaced with a real trained model?",
    answer:
      "Yes. The prediction service is modular. The current development model is a simulation that generates plausible NPK values from spectral features. It can be replaced with a real trained ML model hosted as a Python API or any other service, without changing the application logic.",
  },
];

export default async function LandingPage() {
  const { isAuthenticated } = await auth();

  if (!isAuthenticated) {
    redirect("/sign-in");
  }

  return (
    <main className="min-h-screen bg-[#FBFAF7] text-[#1E211F]">
      {/* ================= NAVIGATION ================= */}
      <nav className="fixed top-0 z-50 w-full border-b border-[#E0E2DE]/70 bg-[#FBFAF7]/90 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1F6B49]">
              <Grape className="h-5 w-5 text-white" />
            </div>

            <span className="font-serif text-xl font-bold tracking-tight">
              GrapeNPK
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#how-it-works"
              className="text-sm font-medium text-[#66706A] transition-colors hover:text-[#1F6B49]"
            >
              How It Works
            </a>

            <a
              href="#why"
              className="text-sm font-medium text-[#66706A] transition-colors hover:text-[#1F6B49]"
            >
              Why GrapeNPK
            </a>

            <a
              href="#technology"
              className="text-sm font-medium text-[#66706A] transition-colors hover:text-[#1F6B49]"
            >
              Technology
            </a>

            <a
              href="#faq"
              className="text-sm font-medium text-[#66706A] transition-colors hover:text-[#1F6B49]"
            >
              FAQ
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/sign-in"
              className="rounded-lg px-3 py-2 text-sm font-medium text-[#4B554F] transition hover:bg-[#EEF5F0]"
            >
              Sign In
            </Link>

            <Link
              href="/sign-up"
              className="rounded-lg bg-[#1F6B49] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#18583B]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Vineyard at golden hour"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#FBFAF7] via-[#FBFAF7]/90 to-[#FBFAF7]/40" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#FBFAF7] via-transparent to-[#FBFAF7]/20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-[#D8DDD8] bg-[#FBFAF7]/90 px-3 py-1.5 text-xs font-medium backdrop-blur">
              <Sparkles className="h-3 w-3 text-[#1F6B49]" />
              AI-Enabled Spectral Analysis
            </div>

            <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              From Petiole Scan to Smarter Grape Nutrition
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-[#5D6761]">
              AI-enabled spectral analysis for grape nutrient assessment and
              precision fertilizer guidance. Connect your ESP32 spectral sensor,
              scan petioles, and get instant NPK estimates with actionable
              recommendations.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/dashboard">
                <span className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1F6B49] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#18583B] sm:w-auto">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              <a href="#how-it-works">
                <span className="flex w-full items-center justify-center rounded-xl border border-[#CCD3CD] bg-[#FBFAF7]/90 px-6 py-3.5 text-sm font-semibold text-[#344039] backdrop-blur transition hover:bg-white sm:w-auto">
                  See How It Works
                </span>
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-[#66706A]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#1F6B49]" />
                Real ESP32 integration
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#1F6B49]" />
                Modular ML architecture
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#1F6B49]" />
                AI-powered explanations
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-[#7C857F]/50" />
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section id="how-it-works" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-flex rounded-full border border-[#D8DDD8] px-3 py-1.5 text-xs font-semibold text-[#5B665F]">
              How It Works
            </span>

            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
              Eight steps from leaf to recommendation
            </h2>

            <p className="mt-4 text-[#6B746E]">
              A complete pipeline from physical petiole sample to
              AI-explained fertilizer guidance.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WORKFLOW_STEPS.map((step, idx) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.num}
                  className="group relative rounded-xl border border-[#E0E2DE] bg-white p-6 transition-all hover:border-[#BFD4C5] hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-bold text-[#1F6B49]/20">
                      {step.num}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF5F0] text-[#1F6B49]">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mt-4 font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[#6B746E]">
                    {step.desc}
                  </p>

                  {idx < WORKFLOW_STEPS.length - 1 && (
                    <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 lg:block">
                      <ArrowRight className="h-4 w-4 text-[#D6DCD7]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= WHY GRAPENPK ================= */}
      <section id="why" className="bg-[#EEF5F0]/60 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <img
                src={GRAPE_IMAGE}
                alt="Fresh grapes on the vine"
                className="rounded-2xl shadow-xl"
              />
            </div>

            <div>
              <span className="mb-4 inline-flex rounded-full border border-[#C9D5CC] px-3 py-1.5 text-xs font-semibold text-[#5B665F]">
                Why GrapeNPK
              </span>

              <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
                Built for farmers, engineered for precision
              </h2>

              <p className="mt-4 leading-relaxed text-[#6B746E]">
                GrapeNPK bridges the gap between scientific instrumentation
                and everyday vineyard management. No technical knowledge
                required — just connect, scan, and understand.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    icon: ScanLine,
                    title: "Rapid in-field assessment",
                    desc: "Get NPK estimates in minutes, not days.",
                  },
                  {
                    icon: Brain,
                    title: "AI that explains, not just reports",
                    desc: "Grape AI translates results into plain language.",
                  },
                  {
                    icon: Shield,
                    title: "Secure and private",
                    desc: "Your farm data is isolated and protected.",
                  },
                  {
                    icon: Wifi,
                    title: "Real device integration",
                    desc: "Designed for real ESP32 + spectral sensor hardware.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EEF5F0] text-[#1F6B49]">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="font-semibold">
                          {item.title}
                        </h3>

                        <p className="text-sm text-[#6B746E]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGY ================= */}
      <section id="technology" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-flex rounded-full border border-[#D8DDD8] px-3 py-1.5 text-xs font-semibold text-[#5B665F]">
              Technology
            </span>

            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
              A modular architecture ready for production
            </h2>

            <p className="mt-4 text-[#6B746E]">
              Every component — from sensor adapter to ML model to AI provider
              — is designed to be replaced or upgraded without rebuilding the
              system.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Cpu,
                title: "IoT Layer",
                desc: "ESP32 communicates via secure HTTPS API with heartbeat monitoring, device authentication, and real-time status updates.",
              },
              {
                icon: Activity,
                title: "Spectral Pipeline",
                desc: "A sensor adapter layer normalizes incoming data, followed by validation, cleaning, feature extraction, and prediction.",
              },
              {
                icon: BarChart3,
                title: "ML Prediction",
                desc: "The NPK prediction service is modular — swap the simulated model for a trained Python ML API without touching the frontend.",
              },
              {
                icon: FlaskConical,
                title: "Recommendation Engine",
                desc: "Configurable rules map nutrient conditions to fertilizers. Admins can edit thresholds, rules, and the fertilizer catalog.",
              },
              {
                icon: Brain,
                title: "Grape AI",
                desc: "An AI abstraction layer uses your actual scan data as context. The provider can be replaced without exposing API keys.",
              },
              {
                icon: Shield,
                title: "Security & Audit",
                desc: "Row-level security, role-based access, activity logging, and server-side validation protect every data boundary.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#E0E2DE] bg-white p-6 transition-all hover:border-[#BFD4C5] hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#EEF5F0] text-[#1F6B49]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-4 font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[#6B746E]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= GRAPE AI ================= */}
      <section className="bg-[#EEF5F0]/60 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <span className="mb-4 inline-flex rounded-full border border-[#C9D5CC] px-3 py-1.5 text-xs font-semibold text-[#5B665F]">
                How AI Helps
              </span>

              <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
                Grape AI: your agronomist in your pocket
              </h2>

              <p className="mt-4 leading-relaxed text-[#6B746E]">
                Ask questions in plain language. Grape AI uses your actual
                scan data, NPK results, and scan history to give you meaningful
                explanations — never invented data.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Why is nitrogen low?",
                  "Explain my result.",
                  "What does this mean for my grape crop?",
                  "Compare this scan with my previous scan.",
                  "Why are you recommending this fertilizer?",
                  "Is my plant improving compared with the previous scan?",
                ].map((question) => (
                  <div
                    key={question}
                    className="flex items-center gap-3 rounded-lg border border-[#E0E2DE] bg-white px-4 py-3"
                  >
                    <Brain className="h-4 w-4 shrink-0 text-[#1F6B49]" />

                    <span className="text-sm text-[#6B746E]">
                      {question}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <img
                src={LAB_IMAGE}
                alt="Scientific analysis"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section id="faq" className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="mb-4 inline-flex rounded-full border border-[#D8DDD8] px-3 py-1.5 text-xs font-semibold text-[#5B665F]">
              FAQ
            </span>

            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-12 space-y-3">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-[#E0E2DE] bg-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-5 text-left text-base font-medium">
                  {item.question}

                  <ChevronDown className="h-5 w-5 shrink-0 text-[#7B837E] transition-transform group-open:rotate-180" />
                </summary>

                <div className="border-t border-[#E0E2DE] px-5 py-5 text-sm leading-relaxed text-[#6B746E]">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#1F6B49] px-8 py-16 text-center sm:px-16">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1F6B49]/90 to-[#1A5B3E]" />

            <div className="relative">
              <Grape className="mx-auto h-12 w-12 text-white/80" />

              <h2 className="mt-6 font-serif text-3xl font-bold text-white sm:text-4xl">
                Start scanning your vineyard today
              </h2>

              <p className="mt-4 text-white/80">
                Create an account, connect your ESP32 device, and get your
                first NPK analysis in minutes.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#1F6B49] transition hover:bg-[#F3F6F3]"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>

                <Link
                  href="/sign-in"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-[#E0E2DE] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1F6B49]">
                <Grape className="h-4 w-4 text-white" />
              </div>

              <span className="font-serif text-lg font-bold">
                GrapeNPK
              </span>
            </div>

            <p className="text-center text-sm text-[#6B746E]">
              AI-enabled grape petiole analysis & precision fertilizer
              recommendation.
            </p>

            <p className="text-xs text-[#8A938D]">
              Model-based estimates. Not laboratory-verified results.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}