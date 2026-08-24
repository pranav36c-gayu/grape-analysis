import { SignInButton , SignUpButton , UserButton , Show } from
"@clerk/nextjs";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-xl">
              🍇
            </div>

            <div>
              <h1 className="text-xl font-bold">Grape Nutrient Analysis</h1>
              <p className="text-xs text-gray-500">
                Smart Petiole Analysis System
              </p>
            </div>
          </div>

             <Show when="signed-out"><SignInButton mode="modal">
            <button className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700">
           Farmer Login
            </button>
             </SignInButton>
             <SignUpButton mode="modal">
            <button className="ml-3 rounded-lg border border-green-600 px-5 py-2.5 text-sm font-semibold text-green-700 transition hover:bg-green-50">
           Farmer Sign Up
             </button>
             </SignUpButton>
             </Show> 
              <Show when ="signed-in"> 
                <a
                   href="/dashboard"
                     className="mr-4 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
>
                     Dashboard
                     </a><UserButton/> </Show>
         
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white">
        <div className="mx-auto grid min-h-[650px] max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
          <div>
            <span className="mb-4 inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              Real-Time Grape Plant Analysis
            </span>

            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Understand your grape plant's
              <span className="text-green-600"> nutrition.</span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Analyze grape petiole data and monitor Nitrogen, Phosphorus, and
              Potassium status to support better fertilizer decisions.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-lg bg-green-600 px-6 py-3.5 font-semibold text-white transition hover:bg-green-700">
                Start Analysis
              </button>

              <button className="rounded-lg border border-gray-300 px-6 py-3.5 font-semibold text-gray-700 transition hover:bg-gray-50">
                Learn More
              </button>
            </div>
          </div>

          {/* Analysis Preview */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Latest Analysis</p>
                <h3 className="mt-1 text-xl font-bold">Grape Plant #001</h3>
              </div>

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                Analyzed
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl bg-green-50 p-4 text-center">
                <p className="text-sm text-gray-500">Nitrogen</p>
                <p className="mt-2 text-2xl font-bold text-green-600">Optimal</p>
                <p className="mt-1 text-xs text-gray-500">N</p>
              </div>

              <div className="rounded-xl bg-yellow-50 p-4 text-center">
                <p className="text-sm text-gray-500">Phosphorus</p>
                <p className="mt-2 text-2xl font-bold text-yellow-600">Low</p>
                <p className="mt-1 text-xs text-gray-500">P</p>
              </div>

              <div className="rounded-xl bg-green-50 p-4 text-center">
                <p className="text-sm text-gray-500">Potassium</p>
                <p className="mt-2 text-2xl font-bold text-green-600">Optimal</p>
                <p className="mt-1 text-xs text-gray-500">K</p>
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-gray-50 p-5">
              <p className="text-sm font-semibold text-gray-800">
                Recommendation
              </p>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Phosphorus level is below the optimal range. A suitable
                phosphorus fertilizer recommendation will be displayed here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-6">
            <div className="text-3xl">📊</div>
            <h3 className="mt-4 text-lg font-bold">NPK Analysis</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Monitor Nitrogen, Phosphorus, and Potassium status from petiole
              analysis data.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <div className="text-3xl">⚡</div>
            <h3 className="mt-4 text-lg font-bold">Real-Time Results</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Receive analysis results from the connected ESP32 device.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <div className="text-3xl">🌱</div>
            <h3 className="mt-4 text-lg font-bold">Fertilizer Guidance</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Get recommendations based on detected nutrient deficiencies.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-sm text-gray-500">
          Grape Nutrient Analysis System • Smart Agriculture
        </div>
      </footer>
    </main>
  );
}