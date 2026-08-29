import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import CourseCategories from "@/components/sections/CourseCategories";
import FeaturedCourses from "@/components/sections/FeaturedCourses";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Pricing from "@/components/sections/Pricing";
import BlogPosts from "@/components/sections/BlogPosts";
import Contact from "@/components/sections/Contact";
import { getCourses, getBlogPosts } from "@/lib/cms/data";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const coursePosts = await getCourses(locale);
  const blogPosts = await getBlogPosts(locale);

  const courses = coursePosts.map((post) => ({
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
      <main className="flex-1">
        <Hero />
        <CourseCategories />
        <FeaturedCourses courses={courses} />
        <WhyChooseUs />
        <Pricing />
        <BlogPosts posts={blogPosts} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
