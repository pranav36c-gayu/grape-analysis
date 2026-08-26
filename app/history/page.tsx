import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  ChevronRight,
  FileSearch,
  History as HistoryIcon,
  ScanLine,
} from "lucide-react";
import AppSidebar from "@/components/app-sidebar";

export default async function HistoryPage() {
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
                Past Analysis
              </p>

              <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight">
                Scan History
              </h1>

              <p className="mt-1 text-sm text-[#6B746E]">
                Past scans and nutrient trends.
              </p>
            </div>
          </header>

          {/* ================= CONTENT ================= */}
          <div className="mx-auto max-w-6xl px-6 py-8 lg:px-10">
            {/* Top summary */}
            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <SummaryCard
                icon={<ScanLine className="h-5 w-5" />}
                label="Total Scans"
                value="0"
              />

              <SummaryCard
                icon={<BarChart3 className="h-5 w-5" />}
                label="NPK Trends"
                value="No data"
              />

              <SummaryCard
                icon={<CalendarDays className="h-5 w-5" />}
                label="Latest Scan"
                value="—"
              />

              <SummaryCard
                icon={<FileSearch className="h-5 w-5" />}
                label="Reports"
                value="0"
              />
            </section>

            {/* Empty state */}
            <section className="mt-8 rounded-2xl border border-[#E0E2DE] bg-white">
              <div className="px-6 py-14 text-center sm:px-10">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF5F0] text-[#1F6B49]">
                  <HistoryIcon className="h-8 w-8" />
                </div>

                <h2 className="mt-6 font-serif text-2xl font-bold">
                  No scan history
                </h2>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#6B746E]">
                  Your previous grape petiole analyses will appear here after
                  you complete your first scan.
                </p>

                <a
                  href="/scan"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#1F6B49] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#18583B]"
                >
                  <ScanLine className="h-4 w-4" />
                  Start New Scan
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </section>

            {/* Trends preview */}
            <section className="mt-6 rounded-2xl border border-[#E0E2DE] bg-white p-6 sm:p-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1F6B49]">
                  Nutrient Trends
                </p>

                <h2 className="mt-2 font-serif text-2xl font-bold">
                  NPK Progress Over Time
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#6B746E]">
                  Once scans are available, this area will show how Nitrogen,
                  Phosphorus, and Potassium change across your vineyard scans.
                </p>
              </div>

              <div className="mt-6 rounded-xl border border-dashed border-[#D6DDD7] bg-[#FBFAF7] p-10 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF5F0] text-[#1F6B49]">
                  <BarChart3 className="h-6 w-6" />
                </div>

                <p className="mt-4 text-sm font-semibold text-[#344039]">
                  Nutrient trend data will appear here
                </p>

                <p className="mt-1 text-xs text-[#7B837E]">
                  Complete a scan to begin tracking your crop's nutrient
                  history.
                </p>
              </div>
            </section>

            {/* How history will work */}
            <section className="mt-6 grid gap-4 md:grid-cols-3">
              <HistoryStep
                number="01"
                title="Complete a scan"
                text="Capture a grape petiole measurement with your connected ESP32 device."
              />

              <HistoryStep
                number="02"
                title="Save the analysis"
                text="Your NPK result and recommendation will be added to your scan history."
              />

              <HistoryStep
                number="03"
                title="Track trends"
                text="Compare future scans to understand changes in plant nutrition."
              />
            </section>

            {/* Future history row preview */}
            <section className="mt-6 rounded-2xl border border-[#E0E2DE] bg-white p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7B837E]">
                    Scan Records
                  </p>

                  <h2 className="mt-2 font-serif text-xl font-bold">
                    Previous Analyses
                  </h2>
                </div>

                <span className="rounded-full bg-[#EEF5F0] px-3 py-1 text-[10px] font-bold text-[#1F6B49]">
                  0 RECORDS
                </span>
              </div>

              <div className="mt-5 rounded-xl bg-[#FBFAF7] px-5 py-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#7B837E]">
                    <FileSearch className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#344039]">
                      No completed analyses yet
                    </p>

                    <p className="mt-1 text-xs text-[#7B837E]">
                      Completed scans will be listed here with their nutrient
                      results and recommendations.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}

/* ================= SUMMARY CARD ================= */

function SummaryCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-[#E0E2DE] bg-white p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF5F0] text-[#1F6B49]">
        {icon}
      </div>

      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-[#7B837E]">
        {label}
      </p>

      <p className="mt-1 text-lg font-bold text-[#1E211F]">
        {value}
      </p>
    </div>
  );
}

/* ================= HISTORY STEP ================= */

function HistoryStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-[#E0E2DE] bg-white p-5">
      <div className="flex items-center justify-between">
        <span className="font-serif text-2xl font-bold text-[#1F6B49]/20">
          {number}
        </span>

        <ChevronRight className="h-4 w-4 text-[#B3BBB5]" />
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