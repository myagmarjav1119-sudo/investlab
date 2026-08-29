import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPosts from "@/components/sections/BlogPosts";
import { getBlogPosts } from "@/lib/cms/data";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const posts = await getBlogPosts(locale);

  return (
    <>
      <Header />
      <main className="flex-1 bg-white py-12">
        <BlogPosts posts={posts} />
      </main>
      <Footer />
    </>
  );
}
