import type { ImageMetadata } from "astro";

// Eagerly load every blog cover image (named by article slug).
const covers = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/blog/*.{jpg,jpeg,png}",
  { eager: true }
);

/** Return the featured image for a post slug, or undefined if none exists. */
export function getCover(slug: string): ImageMetadata | undefined {
  return covers[`../assets/blog/${slug}.jpg`]?.default;
}
