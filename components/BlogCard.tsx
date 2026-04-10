import Link from "next/link";
import type { BlogPost } from "@/content/posts";

export default function BlogCard({ post }: { post: BlogPost }) {
  const date = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-2xl bg-white border border-misty-aqua/30 p-6 transition-shadow hover:shadow-lg hover:shadow-oracle/5"
    >
      <p className="text-xs font-medium text-warbler mb-2">{date}</p>
      <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text group-hover:text-oracle transition-colors mb-3">
        {post.title}
      </h2>
      <p className="text-sm text-dark-text/70 leading-relaxed line-clamp-3">
        {post.description}
      </p>
      {post.tags && (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-misty-aqua/30 text-oracle rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
