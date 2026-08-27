"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Calendar } from "lucide-react";
import Image from "@/components/common/Image";
import { Post } from "@/graphql/cms/queries/post";

export default function BlogPosts({ posts }: { posts: Post[] }) {
  const t = useTranslations("Blog");

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">{t("title")}</h2>
            <p className="mt-3 text-slate-600">{t("subtitle")}</p>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold text-[var(--primary)] hover:text-[var(--primary-dark)]"
          >
            {t("viewAll")} →
          </Link>
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-slate-500">{t("viewAll")}</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function BlogCard({ post }: { post: Post }) {
  const t = useTranslations("Blog");

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-[var(--card)] transition hover:shadow-md">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        {post.thumbnail?.url ? (
          <Image
            src={post.thumbnail.url}
            alt={post.title || "Blog image"}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[var(--primary-light)] text-[var(--primary)]">
            <Calendar className="h-10 w-10" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-2 text-xs text-slate-500">
          <Calendar className="h-3.5 w-3.5" />
          {post.createdAt
            ? new Date(post.createdAt).toLocaleDateString()
            : ""}
        </div>
        <h3 className="mb-2 text-lg font-bold text-slate-900 line-clamp-2">
          {post.title || "Untitled"}
        </h3>
        <p className="mb-4 flex-1 text-sm text-slate-600 line-clamp-3">
          {post.excerpt || ""}
        </p>
        <Link
          href={`/blog/${post.slug || post._id}`}
          className="text-sm font-semibold text-[var(--primary)] hover:text-[var(--primary-dark)]"
        >
          {t("readMore")} →
        </Link>
      </div>
    </article>
  );
}
