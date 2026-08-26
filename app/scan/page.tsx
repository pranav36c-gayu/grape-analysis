import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  Activity,
  ArrowRight,
  Cpu,
  ScanLine,
  ShieldCheck,
  WifiOff,
} from "lucide-react";
import AppSidebar from "@/components/app-sidebar";

export default async function ScanPage() {
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
                New Analysis
              </p>

              <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight">
                New Scan
              </h1>

              <p className="mt-1 text-sm text-[#6B746E]">
                Prepare your sample and device to begin.
              </p>
            </div>
          </header>

          {/* ================= CONTENT ================= */}
          <div className="mx-auto max-w-5xl px-6 py-8 lg:px-10">
            {/* Status strip */}
            <div className="grid gap-4 md:grid-cols-3">
              <StatusCard
                icon={<Cpu className="h-5 w-5" />}
                label="Device"
                value="Not Connected"
                warning
              />

              <StatusCard
                icon={<Activity className="h-5 w-5" />}
                label="Sensor"
                value="Waiting"
              />

              <StatusCard
                icon={<ScanLine className="h-5 w-5" />}
                label="Scan"
                value="Not Started"
              />
            </div>

            {/* Main empty state */}
            <section className="mt-8 rounded-2xl border border-[#E0E2DE] bg-white">
              <div className="px-6 py-14 text-center sm:px-12">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF5F0] text-[#1F6B49]">
                  <ScanLine className="h-8 w-8" />
                </div>

                <h2 className="mt-6 font-serif text-3xl font-bold">
                  No device connected
                </h2>

                <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-[#6B746E]">
                  Connect your ESP32 spectral sensor before starting a new
                  petiole scan. Once a device is connected, you can place your
                  sample in the sensor and begin the analysis.
                </p>

                <a
                  href="/devices"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#1F6B49] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#18583B]"
                >
                  <Cpu className="h-4 w-4" />
                  Connect Device
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {/* Preparation guidance */}
              <div className="border-t border-[#E0E2DE] px-6 py-7 sm:px-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1F6B49]">
                  Before You Scan
                </p>

                <h3 className="mt-2 font-serif text-xl font-bold">
                  Prepare your sample and hardware
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <PreparationCard
                    number="01"
                    title="Collect a petiole"
                    text="Collect a representative grape petiole sample from your vineyard."
                  />

                  <PreparationCard
                    number="02"
                    title="Connect ESP32"
                    text="Register and connect your ESP32 spectral sensing device."
                  />

                  <PreparationCard
                    number="03"
                    title="Begin scan"
                    text="Place the sample correctly and start the measurement process."
                  />
                </div>
              </div>
            </section>

            {/* Device requirement */}
            <section className="mt-6 rounded-2xl border border-[#E8DED0] bg-[#FCF8F2] p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F5EBDD] text-[#936A32]">
                  <WifiOff className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold text-[#4B4132]">
                    A connected device is required
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#756A5B]">
                    GrapeNPK needs an ESP32 spectral sensor to capture the
                    readings used by the nutrient-analysis pipeline. Connect
                    your device first, then return here to start a scan.
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#6F614D]">
                    <ShieldCheck className="h-4 w-4" />
                    Device communication will use authenticated endpoints.
                  </div>
                </div>
              </div>
            </section>

            {/* Workflow */}
            <section className="mt-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1F6B49]">
                  Scan Workflow
                </p>

                <h2 className="mt-2 font-serif text-2xl font-bold">
                  From sample to nutrient analysis
                </h2>

                <p className="mt-2 text-sm text-[#6B746E]">
                  The scan will eventually feed the spectral processing,
                  NPK prediction, recommendation, and Grape AI pipeline.
                </p>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-4">
                <WorkflowStep
                  number="01"
                  title="Petiole"
                  text="Collect the grape petiole."
                />

                <WorkflowStep
                  number="02"
                  title="Spectral Sensor"
                  text="Capture the sample signature."
                />

                <WorkflowStep
                  number="03"
                  title="NPK Prediction"
                  text="Estimate N, P and K."
                />

                <WorkflowStep
                  number="04"
                  title="Recommendation"
                  text="Generate fertilizer guidance."
                />
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}

/* ================= STATUS CARD ================= */

function StatusCard({
  icon,
  label,
  value,
  warning = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  warning?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-[#E0E2DE] bg-white p-5">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF5F0] text-[#1F6B49]">
          {icon}
        </div>

        <span
          className={`h-2.5 w-2.5 rounded-full ${
            warning ? "bg-[#C58B3A]" : "bg-[#A6B0A9]"
          }`}
        />
      </div>

      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-[#7B837E]">
        {label}
      </p>

      <p
        className={`mt-1 text-base font-bold ${
          warning ? "text-[#936A32]" : "text-[#344039]"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

/* ================= PREPARATION CARD ================= */

function PreparationCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-[#E0E2DE] bg-[#FBFAF7] p-5">
      <span className="font-serif text-2xl font-bold text-[#1F6B49]/20">
        {number}
      </span>

      <h4 className="mt-3 font-semibold">
        {title}
      </h4>

      <p className="mt-2 text-sm leading-6 text-[#6B746E]">
        {text}
      </p>
    </div>
  );
}

/* ================= WORKFLOW STEP ================= */

function WorkflowStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-[#E0E2DE] bg-white p-5">
      <span className="font-serif text-2xl font-bold text-[#1F6B49]/20">
        {number}
      </span>

      <h4 className="mt-3 font-semibold">
        {title}
      </h4>

      <p className="mt-2 text-sm leading-6 text-[#6B746E]">
        {text}
      </p>
    </div>
  );
}