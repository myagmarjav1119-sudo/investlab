import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "@/components/common/Image";
import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_POST } from "@/graphql/cms/queries/post";
import type { CpPostData } from "@/graphql/cms/queries/post";
import { notFound } from "next/navigation";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const client = await getServerApolloClient();
  const { data } = await client.query<CpPostData>({
    query: CP_POST,
    variables: { slug, language: locale },
    context: { fetchOptions: { cache: "no-store" } },
  });

  const post = data?.cpPost;
  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-1 bg-white py-12">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 overflow-hidden rounded-2xl">
            <Image
              src={post.thumbnail?.url || "/images/placeholder.png"}
              alt={post.title || ""}
              width={1200}
              height={600}
              className="h-auto w-full object-cover"
            />
          </div>
          <h1 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            {post.title}
          </h1>
          <p className="mb-8 text-sm text-slate-500">
            {post.publishedDate
              ? new Date(post.publishedDate).toLocaleDateString(locale === "mn" ? "mn-MN" : "en-US")
              : ""}
          </p>
          <div
            className="prose prose-slate max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
