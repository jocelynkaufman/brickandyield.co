import Link from "next/link";
import type { BlogPost } from "@/content/posts";
import { CtaFormSection } from "@/content/blog-ctas";

export default function BlogPostLayout({ post }: { post: BlogPost }) {
  const date = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="pt-24 pb-20 bg-off-white">
      <article className="mx-auto max-w-3xl px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-oracle hover:text-warbler transition-colors mb-8"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </Link>

        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-dark-text mb-2">
          {post.title}
        </h1>
        <p className="text-dark-text/60 mb-10">
          {date} &middot; {post.author}
        </p>

        <div
          className="space-y-6 text-dark-text/80 leading-relaxed
            [&>h2]:font-[family-name:var(--font-heading)] [&>h2]:text-xl [&>h2]:text-dark-text [&>h2]:mt-10 [&>h2]:mb-3
            [&>h3]:font-semibold [&>h3]:text-dark-text [&>h3]:mt-8 [&>h3]:mb-2
            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2
            [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2
            [&>blockquote]:border-l-4 [&>blockquote]:border-warbler [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-dark-text/60"
        >
          {post.body}
        </div>

        <CtaFormSection />
      </article>
    </div>
  );
}
