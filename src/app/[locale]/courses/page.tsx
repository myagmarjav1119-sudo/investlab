import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedCourses from "@/components/sections/FeaturedCourses";
import { getCourses } from "@/lib/cms/data";

export default async function CoursesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const posts = await getCourses(locale);

  const courses = posts.map((post) => ({
    _id: post._id,
    title: post.title,
    excerpt: post.excerpt,
    thumbnail: post.thumbnail,
    categories: post.categories,
    duration: "30",
    lessons: 8,
    slug: post.slug,
  }));

  return (
    <>
      <Header />
      <main className="flex-1 bg-[var(--card)] py-12">
        <FeaturedCourses courses={courses} />
      </main>
      <Footer />
    </>
  );
}
