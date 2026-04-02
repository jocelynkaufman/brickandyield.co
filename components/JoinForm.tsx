import Link from "next/link";

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

        {/* GHL Form Embed — Replace src with your actual GHL form URL */}
        {/*
          // TODO: Replace GHL_FORM_URL_HERE with your GoHighLevel form embed URL
          //
          // GHL FORM CHECKBOX TEXT (add this as a checkbox field in your GHL form):
          // ☐ "I agree to receive text messages from Brick and Yield LLC regarding
          //    real estate technology services. Message frequency varies. Msg & data
          //    rates may apply. Reply STOP to opt out. Reply HELP for help."
          // ☐ "I agree to the Terms of Service and Privacy Policy."
        */}
        <div className="w-full max-w-lg mx-auto mt-10">
          <iframe
            src="GHL_FORM_URL_HERE"
            style={{ width: "100%", height: "600px", border: "none" }}
            title="Join Waitlist"
            loading="lazy"
          />
        </div>

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
