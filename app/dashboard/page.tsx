import { UserButton } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
              Farmer Dashboard
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Grape Nutrient Analysis System
            </p>
          </div>

          <div className="shrink-0">
            <UserButton />
          </div>
        </div>
      </header>

      {/* Dashboard */}
      <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Plant Nutrition Overview
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Current nutrient status from your latest analysis.
          </p>
        </div>

        {/* Nutrient Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {/* Nitrogen */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Nitrogen
                </p>

                <h3 className="mt-2 text-2xl font-bold text-green-600">
                  Optimal
                </h3>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 font-bold text-green-700">
                N
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Plant nitrogen status
            </p>
          </div>

          {/* Phosphorus */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Phosphorus
                </p>

                <h3 className="mt-2 text-2xl font-bold text-yellow-600">
                  Low
                </h3>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 font-bold text-yellow-700">
                P
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Plant phosphorus status
            </p>
          </div>

          {/* Potassium */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Potassium
                </p>

                <h3 className="mt-2 text-2xl font-bold text-green-600">
                  Optimal
                </h3>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 font-bold text-green-700">
                K
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Plant potassium status
            </p>
          </div>

        </div>

        {/* Start New Analysis */}
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Start New Analysis
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
                First scan the grape petiole using the connected
                ESP32 spectral sensor. The nutrient analysis will be
                generated after the scan is completed.
              </p>
            </div>

            {/* IMPORTANT:
                This now goes to /analysis,
                NOT directly to /results.
            */}
            <a
              href="/analysis"
              className="inline-flex shrink-0 items-center justify-center rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              Start Scan
            </a>

          </div>
        </div>

        {/* Recent Analyses */}
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Recent Analyses
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Your latest grape plant analysis.
            </p>
          </div>

          <div className="mt-6 rounded-xl bg-gray-50 p-5">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <p className="font-semibold text-gray-900">
                  Grape Plant #001
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Latest petiole analysis
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">

                <span className="w-fit rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                  Completed
                </span>

                <a
                  href="/results"
                  className="text-sm font-semibold text-green-600 hover:text-green-700"
                >
                  View Results →
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>
    </main>
  );
}