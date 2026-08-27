import { useTranslations } from "next-intl";
import Link from "next/link";

const links = [
  { key: "home", href: "/" },
  { key: "courses", href: "/courses" },
  { key: "pricing", href: "/pricing" },
  { key: "blog", href: "/blog" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="border-t border-[var(--border)] bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-[var(--primary-dark)]"
            >
              InvestLab
            </Link>
            <p className="mt-3 text-sm text-slate-600">
              {t("Footer.tagline")}
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-slate-900">
              {t("Footer.links")}
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-[var(--primary)]"
                  >
                    {t(`Navigation.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-slate-900">
              {t("Footer.contact")}
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>info@investlab.mn</li>
              <li>+976 9911 2233</li>
              <li>Улаанбаатар, Монгол улс</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-[var(--border)] pt-6 text-center text-sm text-slate-500">
          {t("Footer.rights")}
        </div>
      </div>
    </footer>
  );
}
