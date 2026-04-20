import { ReactNode } from "react";
import { CtaWaitlist, CtaFeatures, CtaPricing, CtaBanner, CtaForm } from "./blog-ctas";
import { post as stopLosingClientsToZillow } from "./articles/stop-losing-clients-to-zillow";
import { post as houseHackingUtahGuide } from "./articles/house-hacking-utah-guide";
import { post as bestRealEstateCrmUtah } from "./articles/best-real-estate-crm-utah";
import { post as realEstateAgentTechStack2026 } from "./articles/real-estate-agent-tech-stack-2026";
import { post as keepClientsComingBack } from "./articles/keep-clients-coming-back";
import { post as investorClientsNeedMore } from "./articles/investor-clients-need-more-than-email-alerts";
import { post as wasatchFrontTrends2026 } from "./articles/wasatch-front-housing-market-trends-2026";
import { post as howToWorkWithInvestors } from "./articles/how-to-work-with-real-estate-investors";
import { post as zillowPremierAgentAlt } from "./articles/zillow-premier-agent-alternative";
import { post as capRateCashFlowUtah } from "./articles/cap-rate-cash-flow-house-hacks-utah";
import { post as vsFollowUpBoss } from "./articles/brick-and-yield-vs-follow-up-boss";
import { post as vsKvcore } from "./articles/brick-and-yield-vs-kvcore";
import { post as howToSendCuratedListings } from "./articles/how-to-send-curated-listings";
import { post as whatIsClientPortal } from "./articles/what-is-real-estate-client-portal";
import { post as wfrmlsIntegration } from "./articles/wfrmls-integration-utah-agents";
import { post as brandedAppVsIdx } from "./articles/branded-real-estate-app-vs-idx";
import { post as brokerTeamOversight } from "./articles/broker-team-oversight-tools";
import { post as bestToolsInvestorAgents } from "./articles/best-tools-real-estate-investor-agents";
import { post as wasatchFrontTech } from "./articles/wasatch-front-real-estate-technology";
import { post as crmWithMls } from "./articles/real-estate-crm-with-mls-integration";
import { post as houseHackingGuide2026 } from "./articles/house-hacking-guide-utah-2026";
import { post as appWithInvestorAnalysis } from "./articles/real-estate-app-with-investor-analysis";
import { post as utahAgentCrm } from "./articles/utah-real-estate-agent-crm";
import { post as listingNotificationApp } from "./articles/real-estate-listing-notification-app";
import { post as aduInvestmentUtah } from "./articles/adu-investment-utah";
import { post as crmForAgents } from "./articles/real-estate-crm-for-agents";
import { post as automationForAgents } from "./articles/real-estate-automation-for-agents";
import { post as investmentPropertyAnalysisApp } from "./articles/investment-property-analysis-app";
import { post as vsLofty } from "./articles/brick-and-yield-vs-lofty";
import { post as houseHackingFhaLoanUtah } from "./articles/house-hacking-fha-loan-utah";
import { post as houseHackingDuplexUtah } from "./articles/house-hacking-duplex-utah";
import { post as clientOnboardingApp } from "./articles/real-estate-client-onboarding-app";
import { post as utahInvestorCrm } from "./articles/utah-real-estate-investor-crm";
import { post as utahAgentApp } from "./articles/utah-real-estate-agent-app";

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
  stopLosingClientsToZillow,
  houseHackingUtahGuide,
  bestRealEstateCrmUtah,
  realEstateAgentTechStack2026,
  keepClientsComingBack,
  investorClientsNeedMore,
  wasatchFrontTrends2026,
  howToWorkWithInvestors,
  zillowPremierAgentAlt,
  capRateCashFlowUtah,
  vsFollowUpBoss,
  vsKvcore,
  howToSendCuratedListings,
  whatIsClientPortal,
  wfrmlsIntegration,
  brandedAppVsIdx,
  brokerTeamOversight,
  bestToolsInvestorAgents,
  wasatchFrontTech,
  crmWithMls,
  houseHackingGuide2026,
  appWithInvestorAnalysis,
  utahAgentCrm,
  listingNotificationApp,
  aduInvestmentUtah,
  crmForAgents,
  automationForAgents,
  investmentPropertyAnalysisApp,
  vsLofty,
  houseHackingFhaLoanUtah,
  houseHackingDuplexUtah,
  clientOnboardingApp,
  utahInvestorCrm,
  utahAgentApp,
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
          criteria, the listings, the investment analysis. Ready to make the
          switch? <CtaFeatures /> and see how it works.
        </p>
        <p>
          Your client opens their app and sees a professional, branded experience
          that reinforces your value. No search bar sending them down rabbit
          holes. No competing agents. Just the properties you&apos;ve selected
          for them, with the tools they need to make a decision.
        </p>

        <CtaBanner />

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
          links and an agent who delivers an experience.{" "}
          <CtaWaitlist /> today — you can also <CtaPricing /> to find
          the right plan for your business.
        </p>

        <CtaForm />
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
