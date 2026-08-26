import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  Activity,
  ArrowRight,
  Brain,
  Cpu,
  Grape,
  History,
  ScanLine,
} from "lucide-react";
import AppSidebar from "@/components/app-sidebar";

export default async function DashboardPage() {
  const { isAuthenticated } = await auth();

  if (!isAuthenticated) {
    redirect("/sign-in");
  }

  return (
    <main className="min-h-screen bg-[#FBFAF7] text-[#1E211F]">
      <div className="flex min-h-screen">
        <AppSidebar />

        <section className="min-w-0 flex-1">
          {/* ================= HEADER ================= */}
          <header className="border-b border-[#E0E2DE] bg-[#FBFAF7]">
            <div className="mx-auto max-w-6xl px-6 py-6 lg:px-10">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7B837E]">
                    Vineyard Overview
                  </p>

                  <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight">
                    Welcome, pranav
                  </h1>

                  <p className="mt-1 text-sm text-[#6B746E]">
                    Here is your vineyard overview.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="/scan"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#1F6B49] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#18583B]"
                  >
                    <ScanLine className="h-4 w-4" />
                    Start New Scan
                  </a>

                  <a
                    href="/devices"
                    className="inline-flex items-center gap-2 rounded-xl border border-[#D8DDD8] bg-white px-4 py-2.5 text-sm font-semibold text-[#344039] transition hover:bg-[#F2F4F1]"
                  >
                    <Cpu className="h-4 w-4" />
                    Connect Device
                  </a>
                </div>
              </div>
            </div>
          </header>

          {/* ================= CONTENT ================= */}
          <div className="mx-auto max-w-6xl px-6 py-8 lg:px-10">

            {/* ================= STATS ================= */}
            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <StatCard
                icon={<Cpu className="h-5 w-5" />}
                label="Device"
                value="Not Connected"
              />

              <StatCard
                icon={<ScanLine className="h-5 w-5" />}
                label="Last Scan"
                value="No scans yet"
              />

              <StatCard
                icon={<Activity className="h-5 w-5" />}
                label="NPK Health"
                value="—"
              />

              <StatCard
                icon={<Grape className="h-5 w-5" />}
                label="Overall"
                value="Ready"
              />
            </section>

            {/* ================= QUICK ACTIONS ================= */}
            <section className="mt-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1F6B49]">
                  Quick Actions
                </p>

                <h2 className="mt-2 font-serif text-2xl font-bold">
                  What would you like to do?
                </h2>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <QuickAction
                  href="/scan"
                  icon={<ScanLine className="h-5 w-5" />}
                  title="Start New Scan"
                  text="Analyze a new grape petiole sample."
                />

                <QuickAction
                  href="/devices"
                  icon={<Cpu className="h-5 w-5" />}
                  title="Connect Device"
                  text="Register and manage your ESP32 sensor."
                />

                <QuickAction
                  href="/history"
                  icon={<History className="h-5 w-5" />}
                  title="View History"
                  text="Review past scans and nutrient trends."
                />

                <QuickAction
                  href="/ai"
                  icon={<Brain className="h-5 w-5" />}
                  title="Ask Grape AI"
                  text="Get help understanding your analysis."
                />
              </div>
            </section>

            {/* ================= EMPTY STATE ================= */}
            <section className="mt-10 rounded-2xl border border-[#E0E2DE] bg-white">
              <div className="px-6 py-12 text-center sm:px-10">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF5F0] text-[#1F6B49]">
                  <Grape className="h-8 w-8" />
                </div>

                <h2 className="mt-5 font-serif text-2xl font-bold">
                  No scans yet
                </h2>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#6B746E]">
                  Connect your ESP32 spectral sensor and start your first scan
                  to see your nutrient analysis here.
                </p>

                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  <a
                    href="/devices"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1F6B49] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#18583B]"
                  >
                    <Cpu className="h-4 w-4" />
                    Connect Device
                  </a>

                  <a
                    href="/scan"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D8DDD8] bg-white px-5 py-3 text-sm font-semibold text-[#344039] transition hover:bg-[#F2F4F1]"
                  >
                    <ScanLine className="h-4 w-4" />
                    Start New Scan
                  </a>
                </div>
              </div>
            </section>

            {/* ================= WHAT HAPPENS NEXT ================= */}
            <section className="mt-6 grid gap-4 md:grid-cols-3">

              <InfoCard
                number="01"
                title="Connect your ESP32"
                description="Register your spectral sensing device before starting a scan."
              />

              <InfoCard
                number="02"
                title="Scan a petiole"
                description="Place a grape petiole sample in the sensor and begin analysis."
              />

              <InfoCard
                number="03"
                title="View your insights"
                description="Review nutrient results, recommendations, trends, and Grape AI guidance."
              />

            </section>
          </div>
        </section>
      </div>
    </main>
  );
}

/* ================= STAT CARD ================= */

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-[#E0E2DE] bg-white p-5 shadow-[0_2px_12px_rgba(30,33,31,0.03)]">
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

/* ================= QUICK ACTION ================= */

function QuickAction({
  href,
  icon,
  title,
  text,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <a
      href={href}
      className="group rounded-2xl border border-[#E0E2DE] bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#BFD4C5] hover:shadow-md"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF5F0] text-[#1F6B49]">
        {icon}
      </div>

      <h3 className="mt-4 text-base font-semibold text-[#1E211F]">
        {title}
      </h3>

      <p className="mt-1 text-sm leading-6 text-[#6B746E]">
        {text}
      </p>

      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#1F6B49]">
        Open
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </a>
  );
}

/* ================= INFO CARD ================= */

function InfoCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-[#E0E2DE] bg-white p-5">
      <div className="flex items-center justify-between">
        <span className="font-serif text-2xl font-bold text-[#1F6B49]/20">
          {number}
        </span>

        <span className="rounded-full bg-[#EEF5F0] px-2.5 py-1 text-[10px] font-bold text-[#1F6B49]">
          NEXT
        </span>
      </div>

      <h3 className="mt-4 font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#6B746E]">
        {description}
      </p>
    </div>
  );
}