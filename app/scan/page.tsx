export default function ScanPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">

          <div>
            <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
              Petiole Scan
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Grape Nutrient Analysis System
            </p>
          </div>

          <div className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
            Step 1 of 3
          </div>

        </div>
      </header>

      {/* Main */}
      <section className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Progress */}
        <div className="mb-10">
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-green-600">
              Scan Petiole
            </span>

            <span className="text-gray-400">
              Sensor Analysis
            </span>

            <span className="text-gray-400">
              Results
            </span>
          </div>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-200">
            <div className="h-full w-1/3 rounded-full bg-green-600" />
          </div>
        </div>

        {/* Scan Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10">

          <div className="text-center">

            {/* Scanner Icon */}
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-5xl">
              🌿
            </div>

            <h2 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl">
              Scan Grape Petiole
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
              Place the grape petiole inside the spectral sensor and
              start the scanning process.
            </p>

          </div>

          {/* Instructions */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">

            <div className="rounded-xl bg-gray-50 p-5 text-center">
              <div className="text-2xl">🌱</div>
              <h3 className="mt-3 font-semibold text-gray-900">
                1. Prepare
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Take a fresh grape petiole sample.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-5 text-center">
              <div className="text-2xl">📡</div>
              <h3 className="mt-3 font-semibold text-gray-900">
                2. Connect
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Connect the ESP32 spectral sensor.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-5 text-center">
              <div className="text-2xl">🔬</div>
              <h3 className="mt-3 font-semibold text-gray-900">
                3. Scan
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Start the petiole scanning process.
              </p>
            </div>

          </div>

          {/* Sensor Status */}
          <div className="mt-8 flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-4">

            <div>
              <p className="text-sm font-semibold text-gray-900">
                Sensor Status
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Waiting for ESP32 connection
              </p>
            </div>

            <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
              Not Connected
            </span>

          </div>

          {/* Start Scan */}
          <div className="mt-8 text-center">

            <a
              href="/analysis"
              className="inline-flex w-full items-center justify-center rounded-lg bg-green-600 px-6 py-3.5 font-semibold text-white transition hover:bg-green-700 sm:w-auto"
            >
              Start Scan
            </a>

          </div>

        </div>

        {/* Back */}
        <div className="mt-6 text-center">
          <a
            href="/dashboard"
            className="text-sm font-semibold text-gray-500 hover:text-gray-700"
          >
            ← Back to Dashboard
          </a>
        </div>

      </section>
    </main>
  );
}