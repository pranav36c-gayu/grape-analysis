"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import {
  Grape,
  LayoutDashboard,
  Cpu,
  ScanLine,
  History,
  Brain,
} from "lucide-react";

const navigation = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Devices",
    href: "/devices",
    icon: Cpu,
  },
  {
    label: "New Scan",
    href: "/scan",
    icon: ScanLine,
  },
  {
    label: "History",
    href: "/history",
    icon: History,
  },
  {
    label: "Grape AI",
    href: "/ai",
    icon: Brain,
  },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden min-h-screen w-64 shrink-0 border-r border-[#E0E2DE] bg-[#FBFAF7] lg:flex lg:flex-col">
      {/* ================= BRAND ================= */}
      <div className="border-b border-[#E0E2DE] px-6 py-5">
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1F6B49]">
            <Grape className="h-5 w-5 text-white" />
          </div>

          <div>
            <p className="font-serif text-lg font-bold tracking-tight text-[#1E211F]">
              GrapeNPK
            </p>

            <p className="text-[11px] text-[#7B837E]">
              Smart grape nutrition
            </p>
          </div>
        </Link>
      </div>

      {/* ================= NAVIGATION ================= */}
      <nav className="flex-1 px-4 py-6">
        <p className="px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8A938D]">
          Application
        </p>

        <div className="mt-3 space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;

            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" &&
                pathname.startsWith(`${item.href}/`));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-[#EEF5F0] font-semibold text-[#1F6B49]"
                    : "text-[#66706A] hover:bg-[#F1F3F0] hover:text-[#1F6B49]"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* ================= USER AREA ================= */}
      <div className="border-t border-[#E0E2DE] p-4">
        <div className="flex items-center gap-3 rounded-xl bg-white p-3">
          <div className="shrink-0">
            <UserButton />
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-[#1E211F]">
              Grape Farmer
            </p>

            <p className="truncate text-xs text-[#7B837E]">
              Farmer account
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}