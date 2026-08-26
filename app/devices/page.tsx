"use client";

import { useState } from "react";
import AppShell from "@/components/app-shell";

export default function DevicesPage() {
  const [connected, setConnected] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <AppShell>

      <div className="space-y-6">

        {/* HEADER */}
        <section>
          <p className="text-sm font-semibold text-[#1F6B49]">
            Sensor & Device
          </p>

          <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
            Your Analysis Device
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
            See the current ESP32 connection, sensor information and live
            device health.
          </p>
        </section>

        {/* MAIN DEVICE */}
        <section className="rounded-3xl border border-[#E0E2DE] bg-white p-5 shadow-sm sm:p-7">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-start gap-4">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#EEF5F0] text-xl text-[#1F6B49]">
                ◉
              </div>

              <div>

                <p className="text-xs font-semibold uppercase tracking-wide text-[#1F6B49]">
                  Connected Device
                </p>

                <h2 className="mt-1 text-xl font-bold">
                  PETIOLE-ESP32-01
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Grape Petiole Analysis Unit
                </p>

                <div className="mt-3 flex items-center gap-2">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      connected
                        ? "bg-green-500"
                        : "bg-gray-400"
                    }`}
                  />

                  <span className="text-xs font-semibold text-gray-600">
                    {connected ? "Connected" : "Disconnected"}
                  </span>
                </div>
              </div>

            </div>

            <button
              onClick={() => setConnected((value) => !value)}
              className={`min-h-11 rounded-xl px-5 text-sm font-semibold ${
                connected
                  ? "border border-red-200 bg-red-50 text-red-600"
                  : "bg-[#1F6B49] text-white"
              }`}
            >
              {connected ? "Disconnect" : "Connect Device"}
            </button>

          </div>

        </section>

        {/* HARDWARE INFORMATION */}
        <section>

          <div>
            <h2 className="text-lg font-semibold">
              Sensor Information
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Hardware details that can be populated from the real device.
            </p>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

            <SensorCard
              label="Microcontroller"
              value="ESP32"
              detail="Primary controller"
            />

            <SensorCard
              label="Spectral Sensor"
              value="Configured Module"
              detail="Sensor identification ready"
            />

            <SensorCard
              label="Sensor Type"
              value="Optical / Spectral"
              detail="Plant sample analysis"
            />

            <SensorCard
              label="Firmware"
              value="v0.1 Demo"
              detail="Updateable"
            />

            <SensorCard
              label="Communication"
              value="BLE / Wi-Fi"
              detail="Future live data transfer"
            />

            <SensorCard
              label="Data Status"
              value={connected ? "Receiving" : "Waiting"}
              detail="Ready for real sensor readings"
            />

          </div>

        </section>

        {/* LIVE DATA */}
        <section className="rounded-2xl border border-[#E0E2DE] bg-white p-5 shadow-sm sm:p-7">

          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold">
              Live Device Readings
            </h2>

            <p className="text-sm text-gray-500">
              These values are placeholders until the physical sensor is
              connected.
            </p>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">

            <LiveReading
              label="Battery"
              value="82%"
            />

            <LiveReading
              label="Signal"
              value={connected ? "Excellent" : "Offline"}
            />

            <LiveReading
              label="Temperature"
              value="-- °C"
            />

            <LiveReading
              label="Sensor Data"
              value={connected ? "Live" : "--"}
            />

          </div>

          <div className="mt-5 rounded-xl bg-[#EEF5F0] p-4">
            <p className="text-xs font-semibold text-[#1F6B49]">
              Ready for real integration
            </p>

            <p className="mt-1 text-sm leading-6 text-gray-600">
              When the ESP32 starts sending sensor readings, this section can
              display live values without redesigning the page.
            </p>
          </div>

        </section>

        {/* REGISTER */}
        <section className="rounded-2xl border border-dashed border-[#B9C8BF] bg-[#FBFAF7] p-5 sm:p-7">

          <h2 className="text-lg font-semibold">
            Add another device
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
            Register another ESP32-based unit and give it a name you can
            recognize easily in the field.
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="mt-5 min-h-11 rounded-xl bg-[#1F6B49] px-5 text-sm font-semibold text-white"
          >
            Register Device
          </button>

        </section>

      </div>

      {showModal && (
        <RegisterModal onClose={() => setShowModal(false)} />
      )}

    </AppShell>
  );
}

function SensorCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-2xl border border-[#E0E2DE] bg-white p-5">
      <p className="text-xs font-medium text-gray-500">
        {label}
      </p>

      <p className="mt-2 font-semibold">
        {value}
      </p>

      <p className="mt-1 text-xs text-gray-500">
        {detail}
      </p>
    </div>
  );
}

function LiveReading({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-[#FBFAF7] p-4">
      <p className="text-xs text-gray-500">
        {label}
      </p>

      <p className="mt-2 text-sm font-semibold">
        {value}
      </p>
    </div>
  );
}

function RegisterModal({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/40 p-0 sm:items-center sm:p-4">

      <div className="w-full max-w-md rounded-t-3xl bg-white p-6 shadow-xl sm:rounded-2xl">

        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">
            Register Device
          </h2>

          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600"
          >
            ×
          </button>
        </div>

        <div className="mt-6 space-y-4">

          <div>
            <label className="text-sm font-medium">
              Device ID
            </label>

            <input
              type="text"
              placeholder="PETIOLE-ESP32-01"
              className="mt-2 h-12 w-full rounded-xl border border-[#DDE2DE] px-4 outline-none focus:border-[#1F6B49]"
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Friendly Name
            </label>

            <input
              type="text"
              placeholder="My Grape Sensor"
              className="mt-2 h-12 w-full rounded-xl border border-[#DDE2DE] px-4 outline-none focus:border-[#1F6B49]"
            />
          </div>

          <button
            onClick={onClose}
            className="min-h-12 w-full rounded-xl bg-[#1F6B49] font-semibold text-white"
          >
            Save Device
          </button>

        </div>

      </div>
    </div>
  );
}