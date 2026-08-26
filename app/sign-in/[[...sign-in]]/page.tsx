import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#FBFAF7] px-4 py-8">

      <div className="w-full max-w-md">

        <div className="mb-6 text-center">
          <div className="text-3xl font-bold text-[#1F6B49]">
            GrapeNPK
          </div>

          <p className="mt-2 text-sm text-gray-500">
            Grape Nutrition Intelligence
          </p>
        </div>

        <SignIn
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "shadow-sm border border-[#E0E2DE] rounded-2xl",
            },
          }}
        />

      </div>

    </main>
  );
}