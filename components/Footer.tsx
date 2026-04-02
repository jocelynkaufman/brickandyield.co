import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-oracle text-light-text">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p className="font-[family-name:var(--font-heading)] text-xl text-warbler mb-3">
              Brick &amp; Yield
            </p>
            <p className="text-sm text-pitter-patter leading-relaxed">
              Real estate technology for agents who give a damn.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-white mb-1">Links</p>
            <Link href="#features" className="text-sm text-pitter-patter hover:text-warbler transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-sm text-pitter-patter hover:text-warbler transition-colors">
              Pricing
            </Link>
            <Link href="#faq" className="text-sm text-pitter-patter hover:text-warbler transition-colors">
              FAQ
            </Link>
            <Link href="/terms" className="text-sm text-pitter-patter hover:text-warbler transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-pitter-patter hover:text-warbler transition-colors">
              Privacy Policy
            </Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-white mb-1">Contact</p>
            <a
              href="mailto:jocelyn@brickandyield.co"
              className="text-sm text-pitter-patter hover:text-warbler transition-colors"
            >
              jocelyn@brickandyield.co
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-pitter-patter/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between gap-4 text-xs text-pitter-patter">
          <p>&copy; 2026 Brick and Yield LLC. All rights reserved.</p>
          <p>Currently serving the Wasatch Front Regional MLS (Utah).</p>
        </div>
      </div>
    </footer>
  );
}
