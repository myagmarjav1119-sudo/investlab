"use client";

import { useTranslations } from "next-intl";
import { Check } from "lucide-react";

const plans = [
  {
    key: "starter",
    price: "9,900₮",
    period: "yearly",
    features: ["10+ үндсэн хичээл", "Зах зээлийн мэдээлэл", "Сертификат"],
  },
  {
    key: "pro",
    price: "19,900₮",
    period: "yearly",
    features: ["30+ хичээл", "Суурь шинжилгээ", "Зах зээлийн мэдээлэл", "Демо арилжаа", "7 хоног бүр шинэ контент", "Сертификат"],
    popular: true,
  },
  {
    key: "premium",
    price: "899,900₮",
    period: "yearly",
    features: ["Бүх сургалт", "Онцлох хичээлүүд", "Live хурал", "Багц арилжааны дэмжлэг", "Сертификат"],
  },
];

export default function Pricing() {
  const t = useTranslations("Pricing");

  return (
    <section className="bg-[var(--card)] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900">{t("title")}</h2>
          <p className="mt-3 text-slate-600">{t("subtitle")}</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.key} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  plan,
}: {
  plan: {
    key: string;
    price: string;
    period: string;
    features: string[];
    popular?: boolean;
  };
}) {
  const t = useTranslations("Pricing");

  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-6 sm:p-8 ${
        plan.popular
          ? "border-[var(--primary)] bg-white shadow-lg ring-1 ring-[var(--primary)]"
          : "border-slate-100 bg-white"
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--primary)] px-3 py-1 text-xs font-semibold text-white">
          Popular
        </span>
      )}
      <h3 className="text-xl font-bold text-slate-900">{t(`plans.${plan.key}.name`)}</h3>
      <p className="mt-2 text-sm text-slate-500">{t(`plans.${plan.key}.description`)}</p>
      <div className="my-5">
        <span className="text-3xl font-extrabold text-slate-900">{plan.price}</span>
        <span className="text-slate-500"> / {t(plan.period)}</span>
      </div>
      <ul className="mb-8 flex-1 space-y-3">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-slate-700">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-[var(--primary)]" />
            {feature}
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={`mt-auto w-full rounded-xl py-3 font-semibold transition ${
          plan.popular
            ? "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]"
            : "border border-slate-200 text-slate-700 hover:border-[var(--primary)] hover:text-[var(--primary)]"
        }`}
      >
        {t("cta")}
      </button>
    </div>
  );
}
