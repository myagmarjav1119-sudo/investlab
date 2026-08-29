import { getServerApolloClient } from "@/lib/apollo/server-client";
import {
  CP_POSTS,
  CP_POST_LIST,
  type CpPostsData,
  type Post,
} from "@/graphql/cms/queries/post";
import {
  CP_PAGES,
  type CpPagesData,
  type Page,
} from "@/graphql/cms/queries/page";
import {
  CP_CATEGORIES,
  type CpCategoriesData,
  type PostCategory,
} from "@/graphql/cms/queries/category";
import {
  CP_MENUS,
  type CpMenusData,
  type MenuItem,
} from "@/graphql/cms/queries/menu";

const fetchOptions = { next: { revalidate: 60 } };

export async function getPosts(locale: string): Promise<Post[]> {
  const client = await getServerApolloClient();
  const { data } = await client.query<CpPostsData>({
    query: CP_POSTS,
    variables: { language: locale, status: "published", limit: 6 },
    context: { fetchOptions },
  });
  return data?.cpPosts || [];
}

const BLOG_CATEGORY_ID = "ps6dE-JUdKTVpUAghkIge";
const COURSE_CATEGORY_ID = "_6ZX7UxuZLyXKwxTvvQQg";

export async function getCourses(locale: string): Promise<Post[]> {
  const client = await getServerApolloClient();
  const { data } = await client.query<CpPostsData>({
    query: CP_POSTS,
    variables: { language: locale, status: "published", categoryIds: [COURSE_CATEGORY_ID], limit: 6 },
    context: { fetchOptions: { cache: "no-store" } },
  });
  return data?.cpPosts || [];
}

const HIDDEN_POST_SLUGS = [
  "stocks-education-article",
  "stocks-education-blog",
  "stocks-education",
  "stock-introduction",
];

export async function getBlogPosts(locale: string): Promise<Post[]> {
  const client = await getServerApolloClient();
  const { data } = await client.query<CpPostsData>({
    query: CP_POSTS,
    variables: { language: locale, status: "published", categoryIds: [BLOG_CATEGORY_ID], limit: 6 },
    context: { fetchOptions: { cache: "no-store" } },
  });
  return (data?.cpPosts || []).filter((post) => !HIDDEN_POST_SLUGS.includes(post.slug || ""));
}

export async function getPostList(locale: string): Promise<Post[]> {
  const client = await getServerApolloClient();
  const { data } = await client.query<{
    cpPostList: { posts: Post[]; totalCount: number };
  }>({
    query: CP_POST_LIST,
    variables: { language: locale, status: "published", limit: 6 },
    context: { fetchOptions },
  });
  return data?.cpPostList?.posts || [];
}

export async function getCategories(locale: string): Promise<PostCategory[]> {
  const client = await getServerApolloClient();
  const { data } = await client.query<CpCategoriesData>({
    query: CP_CATEGORIES,
    variables: { language: locale },
    context: { fetchOptions },
  });
  return data?.cpCategories?.list || [];
}

export async function getPages(locale: string): Promise<Page[]> {
  const client = await getServerApolloClient();
  const { data } = await client.query<CpPagesData>({
    query: CP_PAGES,
    variables: { language: locale },
    context: { fetchOptions },
  });
  return data?.cpPages || [];
}

export async function getMenus(locale: string): Promise<MenuItem[]> {
  const client = await getServerApolloClient();
  const { data } = await client.query<CpMenusData>({
    query: CP_MENUS,
    variables: { language: locale },
    context: { fetchOptions },
  });
  return data?.cpMenus || [];
}
