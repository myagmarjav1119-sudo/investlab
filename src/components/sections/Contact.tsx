"use client";

import { useTranslations } from "next-intl";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section className="bg-[var(--card)] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900">{t("title")}</h2>
          <p className="mt-3 text-slate-600">{t("subtitle")}</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <ContactItem
              icon={<MapPin className="h-5 w-5" />}
              label={t("address")}
              value="Улаанбаатар хот, Монгол улс"
            />
            <ContactItem
              icon={<Mail className="h-5 w-5" />}
              label={t("email")}
              value="info@investlab.mn"
            />
            <ContactItem
              icon={<Phone className="h-5 w-5" />}
              label={t("phone")}
              value="+976 9911 2233"
            />
          </div>
          <form className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  {t("form.name")}
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light)]"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  {t("form.email")}
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light)]"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  {t("form.message")}
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light)]"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-[var(--primary)] py-3 font-semibold text-white transition hover:bg-[var(--primary-dark)]"
              >
                {t("form.submit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--primary-light)] text-[var(--primary-dark)]">
        {icon}
      </div>
      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <p className="font-semibold text-slate-900">{value}</p>
      </div>
    </div>
  );
}
