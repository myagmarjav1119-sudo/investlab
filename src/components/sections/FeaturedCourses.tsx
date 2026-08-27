"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Clock, BookOpen } from "lucide-react";
import Image from "@/components/common/Image";

export type Course = {
  _id: string;
  title?: string;
  excerpt?: string;
  thumbnail?: { url: string; name?: string } | null;
  categories?: { name?: string }[];
  duration?: string;
  lessons?: number;
  slug?: string;
};

export default function FeaturedCourses({ courses }: { courses: Course[] }) {
  const t = useTranslations("Courses");

  return (
    <section className="bg-[var(--card)] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900">{t("title")}</h2>
          <p className="mt-3 text-slate-600">{t("subtitle")}</p>
        </div>

        {courses.length === 0 ? (
          <p className="text-center text-slate-500">{t("viewAll")}</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <Link
            href="/courses"
            className="inline-flex items-center justify-center rounded-full border border-[var(--primary)] px-6 py-3 font-semibold text-[var(--primary)] transition hover:bg-[var(--primary)] hover:text-white"
          >
            {t("viewAll")}
          </Link>
        </div>
      </div>
    </section>
  );
}

function CourseCard({ course }: { course: Course }) {
  const t = useTranslations("Courses");

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
        {course.thumbnail?.url ? (
          <Image
            src={course.thumbnail.url}
            alt={course.title || "Course thumbnail"}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[var(--primary-light)] text-[var(--primary)]">
            <BookOpen className="h-12 w-12" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex flex-wrap gap-2">
          {course.categories?.map((cat, idx) =>
            cat.name ? (
              <span
                key={idx}
                className="rounded-full bg-[var(--primary-light)] px-2 py-1 text-xs font-medium text-[var(--primary-dark)]"
              >
                {cat.name}
              </span>
            ) : null
          )}
        </div>
        <h3 className="mb-2 text-lg font-bold text-slate-900 line-clamp-2">
          {course.title || "Untitled course"}
        </h3>
        <p className="mb-4 flex-1 text-sm text-slate-600 line-clamp-2">
          {course.excerpt || ""}
        </p>
        <div className="mb-4 flex items-center gap-4 text-sm text-slate-500">
          {course.duration && (
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {course.duration} {t("duration")}
            </span>
          )}
          {course.lessons !== undefined && course.lessons > 0 && (
            <span className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              {course.lessons} {t("lessons")}
            </span>
          )}
        </div>
        <Link
          href={`/courses/${course.slug || course._id}`}
          className="mt-auto inline-flex items-center justify-center rounded-xl bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--primary-dark)]"
        >
          {t("details")}
        </Link>
      </div>
    </article>
  );
}
