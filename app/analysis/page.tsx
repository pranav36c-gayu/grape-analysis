"use client";

import { UserButton } from "@clerk/nextjs";
import { useState } from "react";

export default function AnalysisPage() {
  const [scanning, setScanning] = useState(false);
  const [completed, setCompleted] = useState(false);

  const startScan = () => {
    setScanning(true);
    setCompleted(false);

    // Demo scanning process
    setTimeout(() => {
      setScanning(false);
      setCompleted(true);
    }, 5000);
  };

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">

          <div>
            <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
              Petiole Analysis
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

      {/* Main Content */}
      <section className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Back Button */}
        <a
          href="/dashboard"
          className="inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-700"
        >
          ← Back to Dashboard
        </a>

        {/* Page Heading */}
        <div className="mt-8 text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl">
            🔬
          </div>

          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Scan Grape Petiole
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600">
            Place the grape petiole inside the spectral sensor and start
            the scanning process. The sensor will collect spectral data
            required for nutrient analysis.
          </p>

        </div>

        {/* Sensor Status */}
        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-sm font-medium text-gray-500">
                Sensor Status
              </p>

              <div className="mt-2 flex items-center gap-3">

                <span
                  className={`h-3 w-3 rounded-full ${
                    scanning
                      ? "animate-pulse bg-yellow-500"
                      : "bg-green-500"
                  }`}
                />

                <p className="font-semibold text-gray-900">
                  {scanning
                    ? "Scanning..."
                    : "ESP32 Sensor Ready"}
                </p>

              </div>
            </div>

            <div className="rounded-lg bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
              AS7265x Spectral Sensor
            </div>

          </div>

        </div>

        {/* Scan Area */}
        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">

          {!scanning && !completed && (
            <>
              <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-4 border-dashed border-green-300 bg-green-50 text-6xl">
                🍃
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Ready to Scan
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
                Place a healthy grape petiole in the sensor chamber
                and make sure the sample is positioned correctly.
              </p>

              <button
                onClick={startScan}
                className="mt-8 rounded-lg bg-green-600 px-8 py-3.5 font-semibold text-white transition hover:bg-green-700"
              >
                Start Scan
              </button>
            </>
          )}

          {scanning && (
            <>
              <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-4 border-green-200 bg-green-50">

                <div className="h-16 w-16 animate-spin rounded-full border-4 border-green-600 border-t-transparent" />

              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Scanning Petiole...
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Collecting spectral data from the sensor.
              </p>

              <div className="mx-auto mt-6 h-2 max-w-md overflow-hidden rounded-full bg-gray-200">

                <div className="h-full w-full animate-pulse rounded-full bg-green-600" />

              </div>

              <p className="mt-3 text-xs text-gray-400">
                Please do not remove the petiole during scanning.
              </p>
            </>
          )}

          {completed && (
            <>
              <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-green-100 text-6xl">
                ✓
              </div>

              <h3 className="mt-6 text-xl font-bold text-green-700">
                Scan Completed
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
                Spectral data has been successfully collected from
                the grape petiole.
              </p>

              <div className="mt-6 rounded-xl bg-gray-50 p-5 text-left">

                <p className="text-sm font-semibold text-gray-900">
                  Sample Information
                </p>

                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">

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
                      Status
                    </p>

                    <p className="mt-1 font-semibold text-green-600">
                      Data Collected
                    </p>
                  </div>

                </div>

              </div>

              <a
                href="/results"
                className="mt-8 inline-flex rounded-lg bg-green-600 px-8 py-3.5 font-semibold text-white transition hover:bg-green-700"
              >
                View Nutrient Analysis →
              </a>
            </>
          )}

        </div>

        {/* Instructions */}
        {!completed && (
          <div className="mt-6 rounded-2xl border border-green-100 bg-green-50 p-6">

            <h3 className="font-bold text-green-900">
              How to scan
            </h3>

            <ol className="mt-4 space-y-3 text-sm text-green-800">

              <li>
                <span className="font-semibold">1.</span>{" "}
                Select a representative grape petiole.
              </li>

              <li>
                <span className="font-semibold">2.</span>{" "}
                Place the petiole correctly inside the sensor.
              </li>

              <li>
                <span className="font-semibold">3.</span>{" "}
                Keep the sample stable during scanning.
              </li>

              <li>
                <span className="font-semibold">4.</span>{" "}
                Press <strong>Start Scan</strong>.
              </li>

              <li>
                <span className="font-semibold">5.</span>{" "}
                Wait until spectral data collection is complete.
              </li>

            </ol>

          </div>
        )}

      </section>

    </main>
  );
}