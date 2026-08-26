import Link from "next/link";
import {
  Show,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";

const steps = [
  {
    number: "01",
    title: "Petiole Collection",
    text: "Collect a grape petiole sample using a consistent field procedure.",
  },
  {
    number: "02",
    title: "Spectral Sensor",
    text: "Place the prepared sample into the connected sensing system.",
  },
  {
    number: "03",
    title: "ESP32 Device",
    text: "The ESP32 captures and transfers the sensor readings.",
  },
  {
    number: "04",
    title: "Data Processing",
    text: "The platform validates and processes the incoming measurements.",
  },
  {
    number: "05",
    title: "Nutrient Prediction",
    text: "The analysis estimates the plant's nutrient status.",
  },
  {
    number: "06",
    title: "AI Analysis",
    text: "AI combines measurements and context to explain the result.",
  },
  {
    number: "07",
    title: "Recommendation",
    text: "The system generates practical fertilizer guidance.",
  },
  {
    number: "08",
    title: "Farmer Action",
    text: "The farmer receives an understandable result and next step.",
  },
];

const faqs = [
  {
    question: "What is GrapeNPK?",
    answer:
      "GrapeNPK is a prototype platform for grape petiole nutrient screening using sensors, ESP32 data, and AI-assisted analysis.",
  },
  {
    question: "Does it replace laboratory testing?",
    answer:
      "No. The prototype is intended for field screening and decision support. Reliable quantitative claims require calibration and validation against laboratory reference data.",
  },
  {
    question: "Can farmers use it on a mobile phone?",
    answer:
      "Yes. The application is designed with a mobile-first interface so the important actions are easy to reach on a smartphone.",
  },
  {
    question: "What does the system analyze?",
    answer:
      "The platform is being developed around grape nutrient assessment, with N, P and K as the main project focus and room for additional supporting measurements.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FBFAF7] text-[#1E211F]">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-[#E0E2DE] bg-[#FBFAF7]/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">

          <Link href="/" className="block">
            <div className="text-xl font-bold text-[#1F6B49] sm:text-2xl">
              GrapeNPK
            </div>

            <div className="hidden text-[10px] text-gray-500 sm:block">
              Grape Nutrition Intelligence
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            <a href="#how-it-works" className="text-sm text-gray-600 hover:text-[#1F6B49]">
              How It Works
            </a>

            <a href="#why" className="text-sm text-gray-600 hover:text-[#1F6B49]">
              Why GrapeNPK
            </a>

            <a href="#technology" className="text-sm text-gray-600 hover:text-[#1F6B49]">
              Technology
            </a>

            <a href="#faq" className="text-sm text-gray-600 hover:text-[#1F6B49]">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">

            <Show when="signed-out">
              <SignInButton mode="modal">
                <button className="hidden rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#1F6B49] sm:block">
                  Sign In
                </button>
              </SignInButton>

              <SignUpButton mode="modal">
                <button className="rounded-lg bg-[#1F6B49] px-3 py-2 text-xs font-semibold text-white sm:px-4 sm:text-sm">
                  Get Started
                </button>
              </SignUpButton>
            </Show>

            <Show when="signed-in">
              <Link
                href="/dashboard"
                className="rounded-lg bg-[#1F6B49] px-3 py-2 text-xs font-semibold text-white sm:px-4 sm:text-sm"
              >
                Dashboard
              </Link>
            </Show>

          </div>

        </div>
      </header>

      {/* HERO */}
      <section className="px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div>

            <div className="inline-flex items-center rounded-full border border-[#C9D8CF] bg-[#EEF5F0] px-3 py-1.5 text-xs font-semibold text-[#1F6B49]">
              AI-Enabled Spectral Analysis
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              From Petiole Scan to Smarter Grape Nutrition
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              A farmer-focused platform designed to connect grape petiole
              sensing, ESP32 data, AI analysis and understandable nutrient
              recommendations.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Show when="signed-out">
                <SignUpButton mode="modal">
                  <button className="min-h-12 rounded-xl bg-[#1F6B49] px-6 font-semibold text-white shadow-sm">
                    Get Started
                  </button>
                </SignUpButton>
              </Show>

              <Show when="signed-in">
                <Link
                  href="/dashboard"
                  className="flex min-h-12 items-center justify-center rounded-xl bg-[#1F6B49] px-6 font-semibold text-white shadow-sm"
                >
                  Open Dashboard
                </Link>
              </Show>

              <a
                href="#how-it-works"
                className="flex min-h-12 items-center justify-center rounded-xl border border-[#D8DDD8] bg-white px-6 font-semibold text-gray-700"
              >
                See How It Works
              </a>

            </div>

          </div>

          <div className="rounded-3xl border border-[#DCE2DD] bg-white p-5 shadow-sm sm:p-7">
            <div className="rounded-2xl bg-[#EEF5F0] p-5 sm:p-7">

              <p className="text-xs font-semibold uppercase tracking-wider text-[#1F6B49]">
                Analysis Flow
              </p>

              <div className="mt-6 space-y-4">

                {[
                  "Grape Petiole",
                  "Spectral Sensor",
                  "ESP32",
                  "AI Analysis",
                  "Nutrient Result",
                ].map((item, index) => (
                  <div key={item}>
                    <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1F6B49] text-xs font-bold text-white">
                        {index + 1}
                      </span>

                      <span className="text-sm font-semibold">
                        {item}
                      </span>
                    </div>

                    {index < 4 && (
                      <div className="ml-7 h-4 border-l border-dashed border-[#9BB9A6]" />
                    )}
                  </div>
                ))}

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="border-y border-[#E0E2DE] bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#1F6B49]">
              How It Works
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Eight steps from grape petiole to recommendation.
            </h2>

            <p className="mt-4 text-gray-600">
              The platform connects sensing, processing and explanation into
              one understandable workflow.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-[#E0E2DE] bg-[#FBFAF7] p-5"
              >
                <div className="text-sm font-bold text-[#1F6B49]">
                  {step.number}
                </div>

                <h3 className="mt-4 font-semibold">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY */}
      <section
        id="why"
        className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">

          <div className="rounded-3xl bg-[#1F6B49] p-7 text-white sm:p-10">
            <p className="text-sm font-semibold text-green-100">
              Why GrapeNPK
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Built for the field, not just the screen.
            </h2>

            <p className="mt-5 leading-7 text-green-50">
              Farmers need information that is simple enough to act on while
              the system underneath can still be technically sophisticated.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Rapid field screening",
                text: "Designed to shorten the path from sample to understandable result.",
              },
              {
                title: "Explainable AI",
                text: "The system should explain why a result or recommendation was produced.",
              },
              {
                title: "Mobile-first",
                text: "The most important interactions are designed around smartphone use.",
              },
              {
                title: "Real device integration",
                text: "The architecture leaves room for ESP32 and sensor integration.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#E0E2DE] bg-white p-5 shadow-sm"
              >
                <h3 className="font-semibold">{item.title}</h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TECHNOLOGY */}
      <section
        id="technology"
        className="border-y border-[#E0E2DE] bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#1F6B49]">
              Technology
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              A modular architecture ready to grow.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "IoT Layer",
              "Spectral Pipeline",
              "Nutrient Prediction",
              "Recommendation Engine",
              "Grape AI",
              "Security & Audit",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#E0E2DE] bg-[#FBFAF7] p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF5F0] font-bold text-[#1F6B49]">
                  ✦
                </div>

                <h3 className="mt-5 font-semibold">
                  {item}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Designed as a separate layer so hardware, analysis and
                  user experience can evolve independently.
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* AI */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#EEF5F0] p-7 sm:p-10 lg:p-14">

          <p className="text-sm font-semibold text-[#1F6B49]">
            Grape AI
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Your grape nutrition assistant.
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            The goal is not simply to show numbers. The system should help a
            farmer understand what the result means, what may need attention,
            and what should be checked next.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Show when="signed-in">
              <Link
                href="/ai"
                className="flex min-h-12 items-center justify-center rounded-xl bg-[#1F6B49] px-6 font-semibold text-white"
              >
                Open Grape AI
              </Link>
            </Show>

            <Show when="signed-out">
              <SignUpButton mode="modal">
                <button className="min-h-12 rounded-xl bg-[#1F6B49] px-6 font-semibold text-white">
                  Get Started
                </button>
              </SignUpButton>
            </Show>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="border-t border-[#E0E2DE] bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-4xl">

          <div className="text-center">
            <p className="text-sm font-semibold text-[#1F6B49]">
              FAQ
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-[#E0E2DE] bg-[#FBFAF7] px-5 py-4"
              >
                <summary className="cursor-pointer list-none font-semibold">
                  <div className="flex items-center justify-between gap-4">
                    <span>{faq.question}</span>

                    <span className="text-xl text-[#1F6B49]">
                      +
                    </span>
                  </div>
                </summary>

                <p className="mt-3 pr-6 text-sm leading-6 text-gray-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#1F6B49] px-6 py-10 text-white sm:px-10 sm:py-14">

          <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
            Ready to explore grape nutrition intelligence?
          </h2>

          <p className="mt-4 max-w-2xl text-green-50">
            Start with the dashboard, connect the device and move toward a
            complete field analysis workflow.
          </p>

          <div className="mt-7">
            <Show when="signed-in">
              <Link
                href="/dashboard"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 font-semibold text-[#1F6B49]"
              >
                Go to Dashboard
              </Link>
            </Show>

            <Show when="signed-out">
              <SignUpButton mode="modal">
                <button className="min-h-12 rounded-xl bg-white px-6 font-semibold text-[#1F6B49]">
                  Create Farmer Account
                </button>
              </SignUpButton>
            </Show>
          </div>

        </div>
      </section>

      <footer className="border-t border-[#E0E2DE] bg-white px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">

          <div className="font-semibold text-[#1F6B49]">
            GrapeNPK
          </div>

          <div>
            AI-enabled grape petiole analysis prototype.
          </div>

        </div>
      </footer>

    </main>
  );
}