import Link from "next/link";
import Script from "next/script";

export default function JoinForm() {
  return (
    <section id="join" className="py-24 bg-oracle">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-white">
          Get Early Access
        </h2>
        <p className="mt-4 text-lg text-pitter-patter max-w-2xl mx-auto">
          Join the waitlist and lock in the founder&apos;s rate. We&apos;ll reach out to get you set up.
        </p>

        <div className="w-full max-w-lg mx-auto mt-10">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/ss6uUK9BuwAAvyZUHAsd"
            style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px" }}
            id="inline-ss6uUK9BuwAAvyZUHAsd"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Waitlist"
            data-height="635"
            data-layout-iframe-id="inline-ss6uUK9BuwAAvyZUHAsd"
            data-form-id="ss6uUK9BuwAAvyZUHAsd"
            title="Waitlist"
          />
        </div>
        <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />

        <p className="mt-8 text-xs text-pitter-patter/80 max-w-lg mx-auto leading-relaxed">
          By submitting this form, you agree to receive text messages from Brick
          and Yield LLC regarding our platform and real estate technology
          services. Message frequency varies. Message and data rates may apply.
          Reply STOP to opt out at any time. Reply HELP for help. See our{" "}
          <Link href="/terms" className="underline hover:text-warbler">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline hover:text-warbler">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
