import Link from "next/link";
import AppShell from "@/components/app-shell";

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="space-y-6">

        {/* HEADER */}
        <section>
          <p className="text-sm font-semibold text-[#1F6B49]">
            Welcome to GrapeNPK
          </p>

          <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
            Check your grape plant health
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
            Scan a grape petiole, understand the nutrient condition and get
            a clear next step.
          </p>
        </section>

        {/* MAIN FIELD ACTION */}
        <section className="overflow-hidden rounded-3xl bg-[#1F6B49] p-6 text-white shadow-sm sm:p-8">

          <div className="max-w-2xl">

            <div className="flex items-center gap-2 text-sm text-green-100">
              <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
              Ready for field analysis
            </div>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Analyze a grape petiole
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-green-50 sm:text-base">
              Connect your sensor, place the sample and let GrapeNPK process
              the reading.
            </p>

            <Link
              href="/scan"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 text-sm font-semibold text-[#1F6B49]"
            >
              Start New Scan
            </Link>

          </div>
        </section>

        {/* FARM OVERVIEW */}
        <section>
          <div>
            <h2 className="text-lg font-semibold">
              Farm Overview
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Your latest activity at a glance.
            </p>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">

            <StatCard
              title="Total Scans"
              value="24"
              subtitle="This season"
            />

            <StatCard
              title="Healthy"
              value="18"
              subtitle="Good condition"
            />

            <StatCard
              title="Attention"
              value="06"
              subtitle="Needs review"
            />

            <StatCard
              title="Device"
              value="Ready"
              subtitle="ESP32 available"
            />

          </div>
        </section>

        {/* QUICK ACTIONS */}
        <section>
          <div>
            <h2 className="text-lg font-semibold">
              What would you like to do?
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Common tasks for a field visit.
            </p>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

            <ActionCard
              href="/scan"
              title="Scan a Petiole"
              description="Check grape plant nutrient status."
              icon="⌁"
              highlighted
            />

            <ActionCard
              href="/devices"
              title="Check Sensor"
              description="View sensor details and connection."
              icon="◉"
            />

            <ActionCard
              href="/history"
              title="View History"
              description="Compare previous plant analyses."
              icon="◷"
            />

          </div>
        </section>

        {/* DEVICE SNAPSHOT */}
        <section className="rounded-2xl border border-[#E0E2DE] bg-white p-5 shadow-sm sm:p-6">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#1F6B49]">
                Sensor Status
              </p>

              <h2 className="mt-1 text-lg font-semibold">
                PETIOLE-ESP32-01
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Connected and ready for a scan.
              </p>
            </div>

            <Link
              href="/devices"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[#D8E0DA] px-5 text-sm font-semibold text-[#1F6B49]"
            >
              View Device
            </Link>

          </div>

        </section>

        {/* LATEST RESULT */}
        <section>

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">
                Latest Analysis
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Your most recent grape sample.
              </p>
            </div>

            <Link
              href="/history"
              className="text-sm font-semibold text-[#1F6B49]"
            >
              History
            </Link>
          </div>

          <div className="mt-4 rounded-2xl border border-[#E0E2DE] bg-white p-5 shadow-sm sm:p-6">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <p className="font-semibold">
                  GRAPE-026
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  26 Aug 2026 • Flowering stage
                </p>
              </div>

              <span className="inline-flex w-fit rounded-full bg-[#EEF5F0] px-3 py-1 text-xs font-semibold text-[#1F6B49]">
                Overall: Good
              </span>

            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">

              <Nutrient
                name="Nitrogen"
                status="Adequate"
              />

              <Nutrient
                name="Phosphorus"
                status="Watch"
                watch
              />

              <Nutrient
                name="Potassium"
                status="Adequate"
              />

            </div>

            <div className="mt-5 rounded-xl bg-[#FBFAF7] p-4">
              <p className="text-xs font-semibold text-[#1F6B49]">
                Recommendation
              </p>

              <p className="mt-1 text-sm leading-6 text-gray-600">
                Review phosphorus status and check recent fertilizer and
                irrigation history before taking action.
              </p>
            </div>

          </div>
        </section>

      </div>
    </AppShell>
  );
}

function StatCard({
  title,
  value,
  subtitle,
}: {
  title: string;
  value: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-2xl border border-[#E0E2DE] bg-white p-4 shadow-sm sm:p-5">

      <p className="text-xs font-medium text-gray-500">
        {title}
      </p>

      <p className="mt-2 text-xl font-bold sm:text-2xl">
        {value}
      </p>

      <p className="mt-1 text-xs text-gray-500">
        {subtitle}
      </p>

    </div>
  );
}

function ActionCard({
  href,
  title,
  description,
  icon,
  highlighted = false,
}: {
  href: string;
  title: string;
  description: string;
  icon: string;
  highlighted?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`rounded-2xl border p-5 transition hover:-translate-y-0.5 hover:shadow-md ${
        highlighted
          ? "border-[#BBD0C3] bg-[#EEF5F0]"
          : "border-[#E0E2DE] bg-white"
      }`}
    >
      <div className="flex items-start gap-4">

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-lg text-[#1F6B49] shadow-sm">
          {icon}
        </div>

        <div className="min-w-0">
          <h3 className="font-semibold">
            {title}
          </h3>

          <p className="mt-1 text-sm leading-5 text-gray-600">
            {description}
          </p>
        </div>

      </div>
    </Link>
  );
}

function Nutrient({
  name,
  status,
  watch = false,
}: {
  name: string;
  status: string;
  watch?: boolean;
}) {
  return (
    <div className="rounded-xl bg-[#FBFAF7] p-4">

      <p className="text-xs text-gray-500">
        {name}
      </p>

      <p
        className={`mt-2 text-sm font-semibold ${
          watch ? "text-amber-700" : "text-[#1F6B49]"
        }`}
      >
        {status}
      </p>

    </div>
  );
}