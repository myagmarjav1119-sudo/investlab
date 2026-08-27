"use client";

import { useTranslations } from "next-intl";
import { Monitor, Wallet, SlidersHorizontal } from "lucide-react";

const keys = ["anywhere", "save", "control"] as const;
const icons: Record<(typeof keys)[number], React.ReactNode> = {
  anywhere: <Monitor className="h-7 w-7" />,
  save: <Wallet className="h-7 w-7" />,
  control: <SlidersHorizontal className="h-7 w-7" />,
};

export default function WhyChooseUs() {
  const t = useTranslations("WhyUs");

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900">{t("title")}</h2>
          <p className="mt-3 text-slate-600">{t("subtitle")}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {keys.map((key) => (
            <div
              key={key}
              className="flex flex-col items-center rounded-2xl border border-slate-100 bg-[var(--card)] p-8 text-center transition hover:shadow-md"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary-light)] text-[var(--primary-dark)]">
                {icons[key]}
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">
                {t(`items.${key}.title`)}
              </h3>
              <p className="text-slate-600">{t(`items.${key}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
