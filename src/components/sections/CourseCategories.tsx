"use client";

import { useTranslations } from "next-intl";
import { TrendingUp, BarChart3, PieChart, Target } from "lucide-react";

const icons: Record<string, React.ReactNode> = {
  beginner: <TrendingUp className="h-6 w-6" />,
  technical: <BarChart3 className="h-6 w-6" />,
  fundamental: <PieChart className="h-6 w-6" />,
  strategy: <Target className="h-6 w-6" />,
};

const keys = ["beginner", "technical", "fundamental", "strategy"];

export default function CourseCategories() {
  const t = useTranslations("Courses.categories");

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">
          {t("title")}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {keys.map((key) => (
            <div
              key={key}
              className="group flex cursor-pointer items-center gap-4 rounded-xl border border-slate-100 bg-[var(--card)] p-5 transition hover:border-[var(--primary)] hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-light)] text-[var(--primary-dark)] transition group-hover:bg-[var(--primary)] group-hover:text-white">
                {icons[key]}
              </div>
              <span className="font-semibold text-slate-800">{t(key)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
