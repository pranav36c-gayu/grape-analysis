import Link from "next/link";
import AppShell from "@/components/app-shell";

const scans = [
  {
    id: "GRAPE-026",
    date: "26 Aug 2026",
    stage: "Flowering",
    nitrogen: "Adequate",
    phosphorus: "Watch",
    potassium: "Adequate",
    status: "Good",
  },
  {
    id: "GRAPE-025",
    date: "24 Aug 2026",
    stage: "Flowering",
    nitrogen: "Adequate",
    phosphorus: "Low",
    potassium: "Adequate",
    status: "Attention",
  },
  {
    id: "GRAPE-024",
    date: "22 Aug 2026",
    stage: "Vegetative",
    nitrogen: "Adequate",
    phosphorus: "Adequate",
    potassium: "Adequate",
    status: "Good",
  },
  {
    id: "GRAPE-023",
    date: "20 Aug 2026",
    stage: "Vegetative",
    nitrogen: "Watch",
    phosphorus: "Adequate",
    potassium: "Adequate",
    status: "Attention",
  },
];

export default function HistoryPage() {
  return (
    <AppShell>

      <div className="space-y-6">

        <section>
          <p className="text-sm font-semibold text-[#1F6B49]">
            Past Field Checks
          </p>

          <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
            Scan History
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
            Compare older grape samples and identify changes in nutrient
            status over time.
          </p>
        </section>

        {/* SIMPLE TREND */}
        <section className="rounded-2xl border border-[#E0E2DE] bg-white p-5 shadow-sm sm:p-7">

          <div>
            <p className="text-sm font-semibold">
              Nutrient trend
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Example trend view for the current prototype.
            </p>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">

            <TrendCard
              label="Nitrogen"
              value="Stable"
              detail="No major change"
            />

            <TrendCard
              label="Phosphorus"
              value="Watch"
              detail="Needs review"
              warning
            />

            <TrendCard
              label="Potassium"
              value="Stable"
              detail="No major change"
            />

          </div>

        </section>

        {/* FILTERS */}
        <div className="flex gap-2 overflow-x-auto pb-1">

          <button className="shrink-0 rounded-full bg-[#1F6B49] px-4 py-2 text-xs font-semibold text-white">
            All
          </button>

          <button className="shrink-0 rounded-full border border-[#DCE2DD] bg-white px-4 py-2 text-xs font-semibold text-gray-600">
            Good
          </button>

          <button className="shrink-0 rounded-full border border-[#DCE2DD] bg-white px-4 py-2 text-xs font-semibold text-gray-600">
            Attention
          </button>

        </div>

        {/* MOBILE CARDS */}
        <section className="space-y-3 md:hidden">

          {scans.map((scan) => (
            <div
              key={scan.id}
              className="rounded-2xl border border-[#E0E2DE] bg-white p-5 shadow-sm"
            >

              <div className="flex items-start justify-between gap-4">

                <div>
                  <p className="font-semibold">
                    {scan.id}
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    {scan.date} • {scan.stage}
                  </p>
                </div>

                <StatusBadge status={scan.status} />

              </div>

              <div className="mt-5 grid grid-cols-3 gap-2">

                <HistoryMetric label="N" value={scan.nitrogen} />

                <HistoryMetric label="P" value={scan.phosphorus} />

                <HistoryMetric label="K" value={scan.potassium} />

              </div>

            </div>
          ))}

        </section>

        {/* DESKTOP TABLE */}
        <section className="hidden overflow-hidden rounded-2xl border border-[#E0E2DE] bg-white md:block">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[720px] border-collapse">

              <thead>
                <tr className="border-b border-[#E0E2DE] bg-[#FBFAF7]">

                  {[
                    "Sample",
                    "Date",
                    "Stage",
                    "Nitrogen",
                    "Phosphorus",
                    "Potassium",
                    "Status",
                  ].map((heading) => (
                    <th
                      key={heading}
                      className="px-5 py-4 text-left text-xs font-semibold text-gray-500"
                    >
                      {heading}
                    </th>
                  ))}

                </tr>
              </thead>

              <tbody>

                {scans.map((scan) => (
                  <tr
                    key={scan.id}
                    className="border-b border-[#E0E2DE] last:border-b-0"
                  >
                    <td className="px-5 py-4 text-sm font-semibold">
                      {scan.id}
                    </td>

                    <td className="px-5 py-4 text-sm text-gray-600">
                      {scan.date}
                    </td>

                    <td className="px-5 py-4 text-sm text-gray-600">
                      {scan.stage}
                    </td>

                    <td className="px-5 py-4 text-sm">
                      {scan.nitrogen}
                    </td>

                    <td className="px-5 py-4 text-sm">
                      {scan.phosphorus}
                    </td>

                    <td className="px-5 py-4 text-sm">
                      {scan.potassium}
                    </td>

                    <td className="px-5 py-4">
                      <StatusBadge status={scan.status} />
                    </td>
                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </section>

        <Link
          href="/scan"
          className="flex min-h-12 w-full items-center justify-center rounded-xl bg-[#1F6B49] font-semibold text-white sm:mx-auto sm:w-auto sm:px-6"
        >
          Start New Scan
        </Link>

      </div>

    </AppShell>
  );
}

function TrendCard({
  label,
  value,
  detail,
  warning = false,
}: {
  label: string;
  value: string;
  detail: string;
  warning?: boolean;
}) {
  return (
    <div className="rounded-xl bg-[#FBFAF7] p-4">

      <p className="text-xs text-gray-500">
        {label}
      </p>

      <p
        className={`mt-2 text-sm font-semibold ${
          warning ? "text-amber-700" : "text-[#1F6B49]"
        }`}
      >
        {value}
      </p>

      <p className="mt-1 text-[11px] text-gray-500">
        {detail}
      </p>

    </div>
  );
}

function StatusBadge({
  status,
}: {
  status: string;
}) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
        status === "Good"
          ? "bg-[#EEF5F0] text-[#1F6B49]"
          : "bg-amber-50 text-amber-700"
      }`}
    >
      {status}
    </span>
  );
}

function HistoryMetric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-[#FBFAF7] p-3">

      <p className="text-xs font-bold text-[#1F6B49]">
        {label}
      </p>

      <p className="mt-1 text-[11px] leading-4 text-gray-600">
        {value}
      </p>

    </div>
  );
}