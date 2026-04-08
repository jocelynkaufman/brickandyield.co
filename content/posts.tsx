import { ReactNode } from "react";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  ogImage?: string;
  tags?: string[];
  body: ReactNode;
}

export const posts: BlogPost[] = [
  {
    slug: "why-your-clients-deserve-a-branded-app",
    title: "Why Your Clients Deserve a Branded App",
    description:
      "Generic portals lose leads. Here's why a white-labeled client portal keeps your brand front and center — and your clients off Zillow.",
    publishedAt: "2026-04-07",
    author: "Jocelyn Kaufman",
    tags: ["product", "real estate"],
    body: (
      <>
        <p>
          Every day, real estate agents send their clients to third-party portals
          to browse listings. The problem? Those portals are designed to capture
          leads — not protect your relationship. Your client searches for a home,
          and within minutes they&apos;re seeing ads for other agents.
        </p>

        <h2>The Zillow Problem</h2>
        <p>
          Zillow, Realtor.com, and Redfin aren&apos;t built to serve your
          business. They&apos;re built to monetize your clients. When a buyer
          clicks on a listing, they&apos;re immediately prompted to connect with
          a &ldquo;local agent&rdquo; — and that agent isn&apos;t you.
        </p>
        <p>
          This is the leaky bucket problem. You spend time and money generating
          leads, nurturing relationships, and building trust. Then you send your
          client to a platform that actively tries to redirect them.
        </p>

        <h2>A Branded Portal Changes the Game</h2>
        <p>
          With a white-labeled client portal like Brick &amp; Yield, your clients
          see your name, your brokerage, and your contact info — not a
          competitor&apos;s ad. The experience is curated by you: the search
          criteria, the listings, the investment analysis.
        </p>
        <p>
          Your client opens their app and sees a professional, branded experience
          that reinforces your value. No search bar sending them down rabbit
          holes. No competing agents. Just the properties you&apos;ve selected
          for them, with the tools they need to make a decision.
        </p>

        <h2>What This Means for Your Business</h2>
        <ul>
          <li>
            <strong>Higher retention:</strong> Clients stay in your ecosystem
            instead of wandering to competitor platforms.
          </li>
          <li>
            <strong>Perceived value:</strong> A branded app signals
            professionalism and investment in the client relationship.
          </li>
          <li>
            <strong>Investor-ready:</strong> Built-in cash flow projections and
            cap rate analysis give your investor clients instant answers.
          </li>
          <li>
            <strong>Push notifications:</strong> New listings land directly on
            your client&apos;s phone — no email inbox competition.
          </li>
        </ul>

        <h2>The Bottom Line</h2>
        <p>
          Your clients deserve better than a generic portal that treats them as a
          lead to be sold. A branded app keeps them engaged, informed, and
          connected to you. That&apos;s the difference between an agent who sends
          links and an agent who delivers an experience.
        </p>
      </>
    ),
  },
];

export function getSortedPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
