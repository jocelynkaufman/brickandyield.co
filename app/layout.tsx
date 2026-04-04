import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brickandyield.co"),
  title: {
    default: "Brick & Yield \u2014 Agent-Branded Client Portal for Real Estate",
    template: "%s \u2014 Brick & Yield",
  },
  description:
    "Give your real estate clients a branded mobile app with curated property searches, investor analysis, and in-app messaging. Currently serving Utah agents.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    siteName: "Brick & Yield",
    url: "https://brickandyield.co",
    title: "Brick & Yield \u2014 Agent-Branded Client Portal for Real Estate",
    description:
      "Give your real estate clients a branded mobile app with curated property searches, investor analysis, and in-app messaging. Currently serving Utah agents.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${dmSans.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Brick and Yield LLC",
              url: "https://brickandyield.co",
              description:
                "White-labeled real estate client portal for agents and brokers",
              email: "jocelyn@brickandyield.co",
              areaServed: "Utah",
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69ced920fb68eb1e458e69cd"
          strategy="afterInteractive"
        />
        <Script
          src="https://go.brickandyield.co/js/external-tracking.js"
          data-tracking-id="tk_e7ac32290bc7481b924fc3855c816958"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
