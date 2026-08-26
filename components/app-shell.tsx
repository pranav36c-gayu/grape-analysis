"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Show,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

const navigation = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: "⌂",
  },
  {
    label: "Devices",
    href: "/devices",
    icon: "◉",
  },
  {
    label: "New Scan",
    href: "/scan",
    icon: "⌁",
  },
  {
    label: "History",
    href: "/history",
    icon: "◷",
  },
  {
    label: "Grape AI",
    href: "/ai",
    icon: "✦",
  },
];

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#FBFAF7] text-[#1E211F]">

      {/* ============================= */}
      {/* DESKTOP SIDEBAR               */}
      {/* ============================= */}

      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-[#E0E2DE] bg-white md:flex md:flex-col">

        {/* Brand */}
        <div className="border-b border-[#E0E2DE] px-6 py-6">
          <Link href="/dashboard" className="block">
            <div className="text-2xl font-bold tracking-tight text-[#1F6B49]">
              GrapeNPK
            </div>

            <div className="mt-1 text-xs text-gray-500">
              Smart Grape Nutrition
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 overflow-y-auto px-4 py-6">
          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  active
                    ? "bg-[#EEF5F0] text-[#1F6B49]"
                    : "text-gray-600 hover:bg-gray-50 hover:text-[#1F6B49]"
                }`}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                    active ? "bg-white" : "bg-[#F5F7F4]"
                  }`}
                >
                  {item.icon}
                </span>

                <span className="text-sm font-medium">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Simple footer — NO farmer profile block */}
        <div className="border-t border-[#E0E2DE] px-5 py-4">
          <p className="text-[11px] leading-5 text-gray-400">
            GrapeNPK field screening prototype
          </p>
        </div>
      </aside>

      {/* ============================= */}
      {/* MOBILE HEADER                 */}
      {/* ============================= */}

      <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-[#E0E2DE] bg-white/95 px-4 backdrop-blur md:hidden">

        <Link
          href="/dashboard"
          className="flex items-center gap-2"
        >
          <div>
            <div className="text-lg font-bold leading-none text-[#1F6B49]">
              GrapeNPK
            </div>

            <div className="mt-1 text-[10px] text-gray-500">
              Smart Grape Nutrition
            </div>
          </div>
        </Link>

        <Show when="signed-in">
          <UserButton
            appearance={{
              elements: {
                avatarBox: "h-9 w-9",
              },
            }}
          />
        </Show>

        <Show when="signed-out">
          <SignInButton mode="modal">
            <button className="rounded-lg bg-[#1F6B49] px-3 py-2 text-xs font-semibold text-white">
              Sign In
            </button>
          </SignInButton>
        </Show>
      </header>

      {/* ============================= */}
      {/* MAIN CONTENT                  */}
      {/* ============================= */}

      <main className="min-h-screen pb-24 md:ml-64 md:pb-0">
        <div className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8">
          {children}
        </div>
      </main>

      {/* ============================= */}
      {/* MOBILE BOTTOM NAV             */}
      {/* ============================= */}

      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#E0E2DE] bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.05)] md:hidden">

        <div className="grid grid-cols-4">

          <MobileNavItem
            href="/dashboard"
            label="Home"
            icon="⌂"
            active={pathname === "/dashboard"}
          />

          <MobileNavItem
            href="/scan"
            label="Scan"
            icon="⌁"
            active={pathname === "/scan"}
            primary
          />

          <MobileNavItem
            href="/history"
            label="History"
            icon="◷"
            active={pathname === "/history"}
          />

          <MobileNavItem
            href="/devices"
            label="Device"
            icon="◉"
            active={pathname === "/devices"}
          />

        </div>

      </nav>
    </div>
  );
}

function MobileNavItem({
  href,
  label,
  icon,
  active,
  primary = false,
}: {
  href: string;
  label: string;
  icon: string;
  active: boolean;
  primary?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex min-h-16 flex-col items-center justify-center gap-1 transition ${
        active ? "text-[#1F6B49]" : "text-gray-500"
      }`}
    >
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-full text-base ${
          primary
            ? "bg-[#1F6B49] text-white shadow-sm"
            : active
              ? "bg-[#EEF5F0]"
              : "bg-transparent"
        }`}
      >
        {icon}
      </span>

      <span className="text-[10px] font-medium">
        {label}
      </span>
    </Link>
  );
}