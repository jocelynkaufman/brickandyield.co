import type { Metadata } from "next";
import { getSortedPosts } from "@/content/posts";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on real estate technology, client experience, and growing your business with Brick & Yield.",
  openGraph: {
    title: "Blog \u2014 Brick & Yield",
    description:
      "Insights on real estate technology, client experience, and growing your business with Brick & Yield.",
    url: "https://brickandyield.co/blog",
  },
  alternates: { canonical: "https://brickandyield.co/blog" },
};

export default function BlogIndexPage() {
  const posts = getSortedPosts();

  return (
    <div className="pt-24 pb-20 bg-off-white">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-dark-text mb-3">
          Blog
        </h1>
        <p className="text-dark-text/60 mb-12 max-w-2xl">
          Insights on real estate technology, client experience, and growing your
          business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-dark-text/50 text-center py-20">
            No posts yet. Check back soon!
          </p>
        )}
      </div>
    </div>
  );
}
