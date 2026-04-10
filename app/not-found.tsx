import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-32 bg-off-white">
      <div className="mx-auto max-w-xl px-6 text-center">
        <h1 className="font-[family-name:var(--font-heading)] text-6xl text-dark-text">
          404
        </h1>
        <p className="mt-4 text-lg text-dark-text/70">
          This page doesn&apos;t exist. It may have been moved or removed.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="rounded-lg bg-warbler px-6 py-3 font-semibold text-dark-text transition-colors hover:bg-warbler/90"
          >
            Back to Home
          </Link>
          <Link
            href="/blog"
            className="rounded-lg border border-misty-aqua/50 px-6 py-3 font-semibold text-dark-text transition-colors hover:bg-misty-aqua/10"
          >
            Read the Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
