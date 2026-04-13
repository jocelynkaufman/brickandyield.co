"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // On non-home pages, always use the "scrolled" (dark-on-light) style
  const useDarkText = !isHome || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        useDarkText
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className={`font-[family-name:var(--font-heading)] text-xl transition-colors ${
              useDarkText ? "text-oracle" : "text-warbler"
            }`}
          >
            Brick &amp; Yield
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href.startsWith("/") ? link.href : isHome ? link.href : `/${link.href}`}
                className={`text-sm font-medium transition-colors hover:text-warbler ${
                  useDarkText ? "text-dark-text" : "text-light-text"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={isHome ? "#join" : "/#join"}
              className="rounded-lg bg-warbler px-5 py-2 text-sm font-semibold text-dark-text transition-colors hover:bg-warbler/90"
            >
              Join the Waitlist
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 transition-all ${
                useDarkText ? "bg-dark-text" : "bg-light-text"
              } ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 transition-all ${
                useDarkText ? "bg-dark-text" : "bg-light-text"
              } ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 transition-all ${
                useDarkText ? "bg-dark-text" : "bg-light-text"
              } ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-misty-aqua/30">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href.startsWith("/") ? link.href : isHome ? link.href : `/${link.href}`}
                className="text-dark-text text-sm font-medium hover:text-warbler"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={isHome ? "#join" : "/#join"}
              className="rounded-lg bg-warbler px-5 py-2.5 text-sm font-semibold text-dark-text text-center transition-colors hover:bg-warbler/90"
              onClick={() => setMenuOpen(false)}
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
