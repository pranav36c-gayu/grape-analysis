"use client";

import { useState } from "react";
import {
  Cpu,
  Plus,
  X,
  CheckCircle2,
  Copy,
  Trash2,
  Wifi,
  Activity,
} from "lucide-react";
import AppSidebar from "@/components/app-sidebar";

export default function DevicesPage() {
  const [showModal, setShowModal] = useState(false);
  const [deviceId, setDeviceId] = useState("GRAPE-001");
  const [friendlyName, setFriendlyName] = useState("Vineyard Sensor A");
  const [deviceRegistered, setDeviceRegistered] = useState(false);

  const handleRegister = () => {
    if (!deviceId.trim() || !friendlyName.trim()) {
      return;
    }

    setDeviceRegistered(true);
    setShowModal(false);
  };

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
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7B837E]">
                    Device Management
                  </p>

                  <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight">
                    Devices
                  </h1>

                  <p className="mt-1 text-sm text-[#6B746E]">
                    Manage your ESP32 spectral sensors.
                  </p>
                </div>

                <button
                  onClick={() => setShowModal(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1F6B49] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#18583B]"
                >
                  <Plus className="h-4 w-4" />
                  Register Device
                </button>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="mx-auto max-w-6xl px-6 py-8 lg:px-10">
            {!deviceRegistered ? (
              /* ================= EMPTY STATE ================= */
              <section className="rounded-2xl border border-[#E0E2DE] bg-white">
                <div className="px-6 py-14 text-center sm:px-10">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF5F0] text-[#1F6B49]">
                    <Cpu className="h-8 w-8" />
                  </div>

                  <h2 className="mt-6 font-serif text-2xl font-bold">
                    No devices are connected
                  </h2>

                  <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#6B746E]">
                    Register your ESP32 spectral sensor to begin scanning grape
                    petiole samples.
                  </p>

                  <button
                    onClick={() => setShowModal(true)}
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#1F6B49] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#18583B]"
                  >
                    <Plus className="h-4 w-4" />
                    Register Device
                  </button>
                </div>
              </section>
            ) : (
              /* ================= REGISTERED DEVICE ================= */
              <section>
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1F6B49]">
                      Connected Hardware
                    </p>

                    <h2 className="mt-1 font-serif text-2xl font-bold">
                      Your Devices
                    </h2>

                    <p className="mt-1 text-sm text-[#6B746E]">
                      Registered ESP32 spectral sensors.
                    </p>
                  </div>

                  <button
                    onClick={() => setShowModal(true)}
                    className="inline-flex items-center gap-2 rounded-xl border border-[#D8DDD8] bg-white px-4 py-2.5 text-sm font-semibold text-[#344039] transition hover:bg-[#F2F4F1]"
                  >
                    <Plus className="h-4 w-4" />
                    Add Device
                  </button>
                </div>

                <div className="rounded-2xl border border-[#D6E2D9] bg-white p-6 shadow-[0_2px_12px_rgba(30,33,31,0.03)]">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#EEF5F0] text-[#1F6B49]">
                        <Cpu className="h-7 w-7" />
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-serif text-xl font-bold">
                            {friendlyName}
                          </h3>

                          <span className="inline-flex items-center gap-1 rounded-full bg-[#EEF5F0] px-2.5 py-1 text-[10px] font-bold text-[#1F6B49]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#1F6B49]" />
                            REGISTERED
                          </span>
                        </div>

                        <p className="mt-1 text-sm text-[#6B746E]">
                          ESP32 Spectral Sensor
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">
                          <span className="rounded-lg bg-[#F4F6F3] px-2.5 py-1 text-xs font-medium text-[#5F6962]">
                            Device ID: {deviceId}
                          </span>

                          <span className="rounded-lg bg-[#F4F6F3] px-2.5 py-1 text-xs font-medium text-[#5F6962]">
                            GrapeNPK
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      <DeviceMetric
                        icon={<Wifi className="h-4 w-4" />}
                        label="Connection"
                        value="Ready"
                        positive
                      />

                      <DeviceMetric
                        icon={<Activity className="h-4 w-4" />}
                        label="Heartbeat"
                        value="Waiting"
                      />

                      <DeviceMetric
                        icon={<Cpu className="h-4 w-4" />}
                        label="Type"
                        value="ESP32"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 border-t border-[#E0E2DE] pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs leading-5 text-[#7B837E]">
                      This device can be used to start a new grape petiole scan.
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => navigator.clipboard?.writeText(deviceId)}
                        className="inline-flex items-center gap-2 rounded-lg border border-[#D8DDD8] bg-white px-3 py-2 text-xs font-semibold text-[#4B554F] hover:bg-[#F3F5F2]"
                      >
                        <Copy className="h-3.5 w-3.5" />
                        Copy ID
                      </button>

                      <a
                        href="/scan"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#1F6B49] px-3 py-2 text-xs font-semibold text-white hover:bg-[#18583B]"
                      >
                        Start Scan
                      </a>

                      <button
                        onClick={() => setDeviceRegistered(false)}
                        className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-white px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-50"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* ================= INFORMATION ================= */}
            <section className="mt-6 grid gap-4 md:grid-cols-3">
              <InfoCard
                number="01"
                title="Register"
                text="Add the device ID and a friendly name for your ESP32 sensor."
              />

              <InfoCard
                number="02"
                title="Connect"
                text="Keep the ESP32 connected so the platform can receive sensor readings."
              />

              <InfoCard
                number="03"
                title="Scan"
                text="Once your device is ready, start a grape petiole analysis."
              />
            </section>
          </div>
        </section>
      </div>

      {/* ================= REGISTER MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1E211F]/45 px-4">
          <div className="w-full max-w-lg rounded-2xl border border-[#E0E2DE] bg-[#FBFAF7] p-6 shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1F6B49]">
                  Device Setup
                </p>

                <h2 className="mt-2 font-serif text-2xl font-bold">
                  Register a new ESP32 device
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#6B746E]">
                  Add the device identifier and a friendly name so you can
                  recognize the sensor in your vineyard.
                </p>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#6B746E] transition hover:bg-[#EEF1ED] hover:text-[#1E211F]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Form */}
            <div className="mt-7 space-y-5">
              <div>
                <label
                  htmlFor="device-id"
                  className="text-sm font-semibold text-[#344039]"
                >
                  Device ID / Code
                </label>

                <input
                  id="device-id"
                  value={deviceId}
                  onChange={(event) => setDeviceId(event.target.value)}
                  placeholder="GRAPE-001"
                  className="mt-2 w-full rounded-xl border border-[#D8DDD8] bg-white px-4 py-3 text-sm text-[#1E211F] outline-none transition placeholder:text-[#A0A8A3] focus:border-[#1F6B49] focus:ring-2 focus:ring-[#1F6B49]/10"
                />

                <p className="mt-1.5 text-xs text-[#8A938D]">
                  Example: GRAPE-001
                </p>
              </div>

              <div>
                <label
                  htmlFor="friendly-name"
                  className="text-sm font-semibold text-[#344039]"
                >
                  Friendly Name
                </label>

                <input
                  id="friendly-name"
                  value={friendlyName}
                  onChange={(event) => setFriendlyName(event.target.value)}
                  placeholder="Vineyard Sensor A"
                  className="mt-2 w-full rounded-xl border border-[#D8DDD8] bg-white px-4 py-3 text-sm text-[#1E211F] outline-none transition placeholder:text-[#A0A8A3] focus:border-[#1F6B49] focus:ring-2 focus:ring-[#1F6B49]/10"
                />

                <p className="mt-1.5 text-xs text-[#8A938D]">
                  Choose a name that helps you identify the sensor.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-7 flex flex-col-reverse gap-3 border-t border-[#E0E2DE] pt-5 sm:flex-row sm:justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="rounded-xl border border-[#D8DDD8] bg-white px-5 py-3 text-sm font-semibold text-[#4B554F] transition hover:bg-[#F2F4F1]"
              >
                Cancel
              </button>

              <button
                onClick={handleRegister}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1F6B49] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#18583B]"
              >
                <CheckCircle2 className="h-4 w-4" />
                Register Device
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function DeviceMetric({
  icon,
  label,
  value,
  positive = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  positive?: boolean;
}) {
  return (
    <div className="min-w-[120px] rounded-xl bg-[#F5F7F4] px-4 py-3">
      <div className="flex items-center gap-2 text-[#6B746E]">
        {icon}
        <span className="text-[11px] font-semibold uppercase tracking-wide">
          {label}
        </span>
      </div>

      <p
        className={`mt-2 text-sm font-bold ${
          positive ? "text-[#1F6B49]" : "text-[#344039]"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function InfoCard({
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
      <span className="font-serif text-2xl font-bold text-[#1F6B49]/20">
        {number}
      </span>

      <h3 className="mt-3 font-semibold text-[#1E211F]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#6B746E]">
        {text}
      </p>
    </div>
  );
}