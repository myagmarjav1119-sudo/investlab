"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { key: "home", href: "/" },
  { key: "courses", href: "/courses" },
  { key: "pricing", href: "/pricing" },
  { key: "blog", href: "/blog" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];

export default function Header() {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  const otherLocale = locale === "mn" ? "en" : "mn";

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-[var(--primary-dark)]"
        >
          InvestLab
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-[var(--primary)]"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={`/${otherLocale}`}
            className="text-sm font-medium text-slate-600 hover:text-[var(--primary)]"
          >
            {otherLocale.toUpperCase()}
          </Link>
          <Link
            href="/login"
            className="text-sm font-medium text-slate-700 hover:text-[var(--primary)]"
          >
            {t("login")}
          </Link>
          <Link
            href="/register"
            className="rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--primary-dark)]"
          >
            {t("register")}
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-slate-700" />
          ) : (
            <Menu className="h-6 w-6 text-slate-700" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[var(--border)] bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-base font-medium text-slate-700"
                onClick={() => setMobileOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
            <hr className="my-2 border-[var(--border)]" />
            <Link
              href={`/${otherLocale}`}
              className="text-base font-medium text-slate-600"
            >
              {otherLocale.toUpperCase()}
            </Link>
            <Link
              href="/login"
              className="text-base font-medium text-slate-700"
            >
              {t("login")}
            </Link>
            <Link
              href="/register"
              className="rounded-full bg-[var(--primary)] px-4 py-2 text-center text-base font-medium text-white"
            >
              {t("register")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
