import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | iMavi",
  description:
    "Terms of Service for iMavi, the bring-your-own-key AI image and video studio.",
};

const lastUpdated = "September 19, 2026";

const sectionClassName = "space-y-4 border-t border-zinc-200 pt-8";
const headingClassName = "text-2xl font-semibold text-zinc-950";
const paragraphClassName = "leading-7 text-zinc-700";
const listClassName = "ml-5 list-disc space-y-3 leading-7 text-zinc-700";

export default function TermsPage() {
  return (
    <main className="min-h-[100dvh] bg-white px-5 py-8 text-zinc-950 sm:px-8 sm:py-12">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex text-sm font-medium text-teal-700 transition hover:text-teal-900"
        >
          Back to iMavi
        </Link>

        <header className="mt-10 space-y-5 pb-10">
          <p className="text-xs font-medium uppercase text-teal-700">
            Last updated: {lastUpdated}
          </p>
          <h1 className="text-5xl font-semibold leading-none text-zinc-950 sm:text-6xl">
            Terms of Service for iMavi
          </h1>
          <p className="max-w-2xl leading-7 text-zinc-700">
            These Terms of Service (&quot;Terms&quot;) govern your use of iMavi
            (&quot;the App,&quot; &quot;we,&quot; &quot;us&quot;), a mobile
            application that lets you create AI-generated images and videos using
            your own API keys from third-party AI providers.
          </p>
          <p className="max-w-2xl leading-7 text-zinc-700">
            By downloading, installing, or using the App, you agree to these
            Terms. If you do not agree, do not use the App.
          </p>
        </header>

        <div className="space-y-10">
          <section className={sectionClassName}>
            <h2 className={headingClassName}>1. Licence to Use the App</h2>
            <p className={paragraphClassName}>
              Subject to your compliance with these Terms, we grant you a
              personal, limited, non-exclusive, non-transferable, revocable
              licence to install and use iMavi on devices you own or control,
              for your own personal or internal business use.
            </p>
            <p className={paragraphClassName}>You may not:</p>
            <ul className={listClassName}>
              <li>
                Copy, resell, sublicense, rent, or redistribute the App or any
                part of it
              </li>
              <li>
                Reverse engineer, decompile, or attempt to derive the source
                code of the App, except where that restriction is prohibited by
                applicable law
              </li>
              <li>
                Remove or obscure any proprietary notices contained in the App
              </li>
              <li>
                Use the App to build a competing product, or to circumvent a
                third-party provider&apos;s own terms or rate limits
              </li>
            </ul>
            <p className={paragraphClassName}>
              We retain all rights in the App itself, including its name,
              interface, and underlying code. This licence does not transfer any
              ownership of the App to you.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>2. Acceptable Use</h2>
            <p className={paragraphClassName}>
              You are solely responsible for the prompts you write and the
              content you generate. You agree not to use iMavi to create,
              upload, or distribute content that:
            </p>
            <ul className={listClassName}>
              <li>
                Is illegal under the laws of India or any jurisdiction that
                applies to you
              </li>
              <li>
                Infringes a third party&apos;s copyright, trademark, publicity,
                privacy, or other rights, including generating a recognisable
                person&apos;s likeness without their consent
              </li>
              <li>
                Is sexual or pornographic in nature, or sexualises any real
                person
              </li>
              <li>
                Depicts, or could reasonably be understood to depict, a minor in
                any sexual, abusive, or exploitative context. This is an
                absolute prohibition with no exceptions.
              </li>
              <li>
                Harasses, defames, threatens, or incites violence or hatred
                against any person or group
              </li>
              <li>
                Is created to deceive, such as impersonation, fraudulent
                material, or synthetic media presented as a genuine record of
                real events
              </li>
              <li>
                Contains malware, or is used to attack, overload, or gain
                unauthorised access to any system
              </li>
            </ul>
            <p className={paragraphClassName}>
              Because generations run directly between your device and your
              chosen provider, we do not pre-screen or moderate your content.
              That does not make it permitted. You remain responsible for it,
              and your provider may independently enforce its own content
              policies against your account.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>3. Ownership of Your Output</h2>
            <p className={paragraphClassName}>
              As between you and us, you own the images and videos you generate
              with iMavi. We claim no licence or ownership over your prompts or
              your output, and we cannot access them in any case, because
              generations never pass through our servers.
            </p>
            <p className={paragraphClassName}>
              Two important limits apply, and neither is within our control:
            </p>
            <ul className={listClassName}>
              <li>
                Your rights in generated output are also governed by the terms
                of the third-party AI provider that produced it. Some providers
                restrict commercial use, or make different ownership claims
                depending on your plan.
              </li>
              <li>
                The copyright status of purely AI-generated material is
                unsettled in many jurisdictions, including India. We make no
                representation that any given output is protectable by
                copyright, or that you can register or enforce rights in it.
              </li>
            </ul>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>
              4. Third-Party AI Providers
            </h2>
            <p className={paragraphClassName}>
              iMavi uses a &quot;Bring Your Own Key&quot; model. You connect
              your own accounts with providers such as OpenAI, Google, Stability
              AI, Black Forest Labs, Kling, Runway, or Luma, and the App sends
              your requests directly from your device to those providers.
            </p>
            <ul className={listClassName}>
              <li>
                Your use of each provider is governed by that provider&apos;s
                own terms of service, acceptable-use policy, and privacy policy.
                Those terms pass through to you directly, and you are bound by
                them.
              </li>
              <li>
                You are responsible for all charges your providers bill to your
                accounts for generations you run through iMavi. We do not
                receive, control, or refund those charges.
              </li>
              <li>
                Providers may change pricing, models, rate limits, or
                availability, or suspend your account, at any time. A provider
                becoming unavailable or removing a model is not a defect in the
                App.
              </li>
              <li>
                You are responsible for keeping your API keys secure and for any
                activity carried out with them.
              </li>
            </ul>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>5. Payment and Refunds</h2>
            <p className={paragraphClassName}>
              Any purchase of iMavi, or of a paid feature within it, is
              processed entirely by the Apple App Store or Google Play Store. We
              do not receive or store your payment details.
            </p>
            <ul className={listClassName}>
              <li>
                Refunds are handled under the policies of the store you
                purchased through, and requests must be made to Apple or Google,
                not to us.
              </li>
              <li>
                Amounts you pay your AI providers are entirely separate from
                anything you pay for the App, and are never refundable by us.
              </li>
              <li>
                Where a store&apos;s own rules or applicable consumer law give
                you a refund right, that right is not limited by this section.
              </li>
            </ul>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>6. Disclaimer of Warranties</h2>
            <p className={paragraphClassName}>
              The App is provided &quot;as is&quot; and &quot;as
              available,&quot; without warranties of any kind, whether express,
              implied, or statutory, including any implied warranties of
              merchantability, fitness for a particular purpose, and
              non-infringement, to the fullest extent permitted by law.
            </p>
            <p className={paragraphClassName}>
              We do not warrant that the App will be uninterrupted or
              error-free, that any particular model or provider will remain
              available, or that generated output will be accurate, appropriate,
              original, or fit for any purpose. AI models can produce
              inaccurate, biased, or unexpected results. Review output before
              you rely on it or publish it.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>7. Limitation of Liability</h2>
            <p className={paragraphClassName}>
              To the fullest extent permitted by law, we will not be liable for
              any indirect, incidental, special, consequential, or exemplary
              damages, or for any loss of profits, data, goodwill, or content,
              arising out of or relating to your use of the App.
            </p>
            <p className={paragraphClassName}>
              This expressly includes charges billed to you by a third-party AI
              provider, loss of generated content stored only on your device,
              and any consequence of content you chose to generate or publish.
            </p>
            <p className={paragraphClassName}>
              Our total aggregate liability for all claims relating to the App
              will not exceed the greater of the amount you actually paid us for
              the App in the twelve months before the claim arose, or ₹1,000.
            </p>
            <p className={paragraphClassName}>
              Nothing in these Terms excludes or limits liability that cannot be
              excluded or limited under applicable law, including liability for
              death or personal injury caused by negligence, or for fraud.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>8. Termination</h2>
            <p className={paragraphClassName}>
              You may stop using iMavi at any time by uninstalling it. Doing so
              permanently removes your locally stored API keys and any content
              held only in the App.
            </p>
            <p className={paragraphClassName}>
              We may suspend or terminate your licence to use the App if you
              materially breach these Terms, in particular the acceptable-use
              rules in Section 2, or where we are required to do so by law or by
              an app store.
            </p>
            <p className={paragraphClassName}>
              Sections 3, 6, 7, 9, and 10 survive termination.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>
              9. Governing Law and Jurisdiction
            </h2>
            <p className={paragraphClassName}>
              These Terms are governed by the laws of India, without regard to
              conflict-of-laws principles. The courts at Bengaluru, Karnataka
              have exclusive jurisdiction over any dispute arising out of or
              relating to these Terms or the App.
            </p>
            <p className={paragraphClassName}>
              If you are a consumer resident outside India, this does not
              deprive you of the protection of any mandatory consumer-protection
              law of the country where you live.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>10. Changes and Contact</h2>
            <p className={paragraphClassName}>
              We may update these Terms as iMavi adds features. We will update
              the &quot;Last updated&quot; date above and, for material changes,
              notify users within the App. Continuing to use the App after a
              change takes effect means you accept the revised Terms.
            </p>
            <p className={paragraphClassName}>
              Questions about these Terms can be sent to{" "}
              <a
                href="mailto:hello@imavi.in"
                className="font-medium text-teal-700 transition hover:text-teal-900"
              >
                hello@imavi.in
              </a>
              . See also our{" "}
              <Link
                href="/privacy-policy"
                className="font-medium text-teal-700 transition hover:text-teal-900"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                href="/data-deletion"
                className="font-medium text-teal-700 transition hover:text-teal-900"
              >
                Data Deletion Request
              </Link>{" "}
              pages.
            </p>
          </section>
        </div>

        <footer className="mt-12 border-t border-zinc-200 pt-8 text-sm leading-6 text-zinc-500">
          These Terms describe the agreement between you and iMavi as of{" "}
          {lastUpdated}. Because iMavi is under active development, please check
          back periodically for updates.
        </footer>
      </article>
    </main>
  );
}
