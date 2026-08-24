import { UserButton } from "@clerk/nextjs";

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">

          <div>
            <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
              Nutrient Analysis Results
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

      {/* Main */}
      <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Back */}
        <a
          href="/dashboard"
          className="text-sm font-semibold text-green-600 hover:text-green-700"
        >
          ← Back to Dashboard
        </a>

        {/* Title */}
        <div className="mt-8">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-sm font-medium text-gray-500">
                Analysis Report
              </p>

              <h2 className="mt-1 text-3xl font-bold text-gray-900">
                Grape Plant #002
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Petiole spectral analysis completed successfully.
              </p>
            </div>

            <span className="w-fit rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              Analysis Complete
            </span>

          </div>

        </div>

        {/* NPK Cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">

          {/* Nitrogen */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-gray-500">
                  Nitrogen
                </p>

                <h3 className="mt-2 text-3xl font-bold text-green-600">
                  Optimal
                </h3>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-green-700">
                N
              </div>

            </div>

            <div className="mt-6">
              <div className="mb-2 flex justify-between text-xs text-gray-500">
                <span>Detected Level</span>
                <span>78%</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-[78%] rounded-full bg-green-500" />
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Nitrogen level is within the recommended range.
            </p>

          </div>

          {/* Phosphorus */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-gray-500">
                  Phosphorus
                </p>

                <h3 className="mt-2 text-3xl font-bold text-yellow-600">
                  Low
                </h3>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-lg font-bold text-yellow-700">
                P
              </div>

            </div>

            <div className="mt-6">
              <div className="mb-2 flex justify-between text-xs text-gray-500">
                <span>Detected Level</span>
                <span>42%</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-[42%] rounded-full bg-yellow-500" />
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Phosphorus level is below the recommended range.
            </p>

          </div>

          {/* Potassium */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-gray-500">
                  Potassium
                </p>

                <h3 className="mt-2 text-3xl font-bold text-green-600">
                  Optimal
                </h3>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-green-700">
                K
              </div>

            </div>

            <div className="mt-6">
              <div className="mb-2 flex justify-between text-xs text-gray-500">
                <span>Detected Level</span>
                <span>81%</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-[81%] rounded-full bg-green-500" />
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Potassium level is within the recommended range.
            </p>

          </div>

        </div>

        {/* Recommendation */}
        <div className="mt-8 rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm sm:p-8">

          <div className="flex items-start gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-100 text-2xl">
              🌱
            </div>

            <div>

              <h2 className="text-xl font-bold text-gray-900">
                Fertilizer Recommendation
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                The analysis indicates that the phosphorus level of the
                grape plant is below the recommended range.
              </p>

            </div>

          </div>

          {/* Recommendation Box */}
          <div className="mt-6 rounded-xl bg-yellow-50 p-5">

            <p className="font-semibold text-yellow-900">
              Recommended Action
            </p>

            <p className="mt-2 text-sm leading-6 text-yellow-800">
              Consider applying an appropriate phosphorus-based fertilizer
              according to the crop stage, soil condition, and recommended
              agricultural practices.
            </p>

          </div>

          {/* Important Notice */}
          <div className="mt-5 rounded-xl border border-gray-200 bg-gray-50 p-5">

            <p className="text-xs leading-5 text-gray-500">
              This recommendation is a prototype demonstration based on
              sample sensor data. Final fertilizer application should be
              determined using local agricultural recommendations, soil
              conditions, crop stage, and expert guidance.
            </p>

          </div>

        </div>

        {/* Analysis Information */}
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

          <h2 className="text-xl font-bold text-gray-900">
            Analysis Information
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <div>
              <p className="text-xs text-gray-500">
                Sample
              </p>

              <p className="mt-1 font-semibold text-gray-900">
                Grape Petiole #002
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Sensor
              </p>

              <p className="mt-1 font-semibold text-gray-900">
                AS7265x
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Controller
              </p>

              <p className="mt-1 font-semibold text-gray-900">
                ESP32
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Status
              </p>

              <p className="mt-1 font-semibold text-green-600">
                Completed
              </p>
            </div>

          </div>

        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

          <a
            href="/analysis"
            className="inline-flex items-center justify-center rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Scan Another Petiole
          </a>

          <a
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            Back to Dashboard
          </a>

        </div>

      </section>

    </main>
  );
}