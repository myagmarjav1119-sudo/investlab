import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Users, BookOpen, Target } from "lucide-react";

export default function AboutPage() {
  const t = useTranslations("About");

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-[var(--primary-light)] py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
              {t("title")}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-700">
              {t("subtitle")}
            </p>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  {t("mission")}
                </h2>
                <p className="leading-8 text-slate-700">{t("missionText")}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <StatCard icon={<BookOpen className="h-6 w-6" />} value="50+" label="Хичээл" />
                <StatCard icon={<Users className="h-6 w-6" />} value="10,000+" label="Суралцагч" />
                <StatCard icon={<Award className="h-6 w-6" />} value="10+" label="Багш" />
                <StatCard icon={<Target className="h-6 w-6" />} value="95%" label="Сэтгэл ханамж" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-[var(--card)] p-6 text-center">
      <div className="mb-3 flex justify-center text-[var(--primary)]">{icon}</div>
      <div className="text-2xl font-bold text-slate-900">{value}</div>
      <div className="text-sm text-slate-600">{label}</div>
    </div>
  );
}
