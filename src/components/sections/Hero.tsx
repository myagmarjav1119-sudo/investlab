"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Search, TrendingUp, BookOpen, Layers } from "lucide-react";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--primary-light)] to-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {t("title")}
            </h1>
            <p className="text-lg leading-8 text-slate-700 sm:text-xl">
              {t("subtitle")}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-6 py-3 text-base font-semibold text-white transition hover:bg-[var(--primary-dark)]"
              >
                {t("cta")}
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                {t("bundleCourses")}
              </Link>
            </div>
          </div>

          <div className="relative rounded-2xl bg-white p-6 shadow-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder={t("searchPlaceholder")}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-slate-700 outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light)]"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <CategoryChip icon={<Layers className="h-4 w-4" />} label={t("allCourses")} />
              <CategoryChip icon={<BookOpen className="h-4 w-4" />} label={t("freeCourses")} />
              <CategoryChip icon={<TrendingUp className="h-4 w-4" />} label={t("paidCourses")} />
              <CategoryChip icon={<Layers className="h-4 w-4" />} label={t("bundleCourses")} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryChip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-slate-100 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm">
      <span className="text-[var(--primary)]">{icon}</span>
      {label}
    </div>
  );
}
