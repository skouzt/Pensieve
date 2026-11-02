import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | iMavi",
  description: "Terms of Service for iMavi, the AI image and video studio.",
};

const lastUpdated = "November 3, 2026";

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
            application that lets you create AI-generated images and videos,
            paid for from an in-app wallet.
          </p>
          <p className="max-w-2xl leading-7 text-zinc-700">
            By creating an account or using the App, you agree to these Terms.
            If you do not agree, do not use the App. You must be at least 18
            years old to use iMavi.
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
                Use automated means to access the App or our servers, create
                multiple accounts to claim free credit, or otherwise get around
                our limits, pricing, or security
              </li>
            </ul>
            <p className={paragraphClassName}>
              We retain all rights in the App itself, including its name,
              interface, and underlying code. This licence does not transfer any
              ownership of the App to you.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>2. Your Account</h2>
            <p className={paragraphClassName}>
              You sign in with Google or with a one-time code sent to your
              email. You are responsible for activity on your account and for
              keeping access to your email or Google account secure. One person
              may hold one account.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>3. Acceptable Use</h2>
            <p className={paragraphClassName}>
              You are solely responsible for the prompts you write, the images
              you upload, and the content you generate. You agree not to use
              iMavi to create, upload, or distribute content that:
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
                absolute prohibition with no exceptions, and we report it to
                the authorities.
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
              We check prompts and uploaded images automatically and may block
              a request that appears to break these rules. Blocked requests are
              not charged. Our checks are not perfect, and a request that gets
              through is not thereby permitted. You can report content from
              inside the App.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>4. Ownership of Your Output</h2>
            <p className={paragraphClassName}>
              As between you and us, you own the images and videos you generate
              with iMavi. We claim no ownership over your prompts or your
              output. You give us only the limited permission needed to process
              and store them to provide the App, to moderate content, and to
              handle reports, as described in our{" "}
              <Link
                href="/privacy-policy"
                className="font-medium text-teal-700 transition hover:text-teal-900"
              >
                Privacy Policy
              </Link>
              .
            </p>
            <p className={paragraphClassName}>
              Two important limits apply, and neither is within our control:
            </p>
            <ul className={listClassName}>
              <li>
                Your use of generated output is also subject to the terms of
                the AI model provider that produced it.
              </li>
              <li>
                The copyright status of purely AI-generated material is
                unsettled in many jurisdictions, including India. We make no
                representation that any given output is protectable by
                copyright, or that you can register or enforce rights in it.
              </li>
            </ul>
            <p className={paragraphClassName}>
              Generated media is kept on our servers only briefly. Save
              anything you want to keep to your device.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>5. Wallet and Pricing</h2>
            <ul className={listClassName}>
              <li>
                You add credit to your iMavi wallet by buying a top-up through
                Google Play. Wallet balances are held in US dollars; prices may
                be shown in your local currency for convenience.
              </li>
              <li>
                Each generation shows its price before you start it. When you
                start it, that exact amount is charged to your wallet. If the
                price changes before you start, the App shows you the new price
                first.
              </li>
              <li>
                If a generation fails, is blocked, or does not complete, the
                amount charged for it is returned to your wallet automatically.
              </li>
              <li>
                New accounts may receive a small number of free images. Free
                images are limited to one grant per person and per device.
              </li>
              <li>
                Wallet credit is not money. It does not expire, but it can only
                be used for generations in iMavi. It cannot be withdrawn,
                transferred, or exchanged for cash, and it is not refundable
                except as described in Section 6.
              </li>
              <li>
                We may change prices, add or remove models, and change the
                available options at any time. Changes never affect a
                generation you have already started.
              </li>
            </ul>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>6. Payment and Refunds</h2>
            <p className={paragraphClassName}>
              Top-ups are processed entirely by Google Play. We do not receive
              or store your card or billing details.
            </p>
            <ul className={listClassName}>
              <li>
                Refund requests for a top-up are handled by Google Play under
                its refund policy. If a top-up is refunded or charged back, the
                same amount is removed from your wallet, which may leave it
                with a negative balance that future top-ups will cover first.
              </li>
              <li>
                Credit already spent on completed generations is not
                refundable.
              </li>
              <li>
                If you believe you were charged incorrectly, contact us at{" "}
                <a
                  href="mailto:hello@imavi.in"
                  className="font-medium text-teal-700 transition hover:text-teal-900"
                >
                  hello@imavi.in
                </a>{" "}
                and we will review it.
              </li>
              <li>
                Where applicable consumer law gives you a refund right, that
                right is not limited by this section.
              </li>
            </ul>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>7. Disclaimer of Warranties</h2>
            <p className={paragraphClassName}>
              The App is provided &quot;as is&quot; and &quot;as
              available,&quot; without warranties of any kind, whether express,
              implied, or statutory, including any implied warranties of
              merchantability, fitness for a particular purpose, and
              non-infringement, to the fullest extent permitted by law.
            </p>
            <p className={paragraphClassName}>
              We do not warrant that the App will be uninterrupted or
              error-free, that any particular model will remain available, or
              that generated output will be accurate, appropriate, original, or
              fit for any purpose. AI models can produce inaccurate, biased, or
              unexpected results. Review output before you rely on it or
              publish it.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>8. Limitation of Liability</h2>
            <p className={paragraphClassName}>
              To the fullest extent permitted by law, we will not be liable for
              any indirect, incidental, special, consequential, or exemplary
              damages, or for any loss of profits, data, goodwill, or content,
              arising out of or relating to your use of the App.
            </p>
            <p className={paragraphClassName}>
              This expressly includes loss of generated content you did not
              save to your device, and any consequence of content you chose to
              generate or publish.
            </p>
            <p className={paragraphClassName}>
              Our total aggregate liability for all claims relating to the App
              will not exceed the greater of the amount you paid us in the
              twelve months before the claim arose, or ₹1,000.
            </p>
            <p className={paragraphClassName}>
              Nothing in these Terms excludes or limits liability that cannot be
              excluded or limited under applicable law, including liability for
              death or personal injury caused by negligence, or for fraud.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>9. Suspension and Termination</h2>
            <p className={paragraphClassName}>
              You may stop using iMavi at any time, and you can delete your
              account in the App under Settings → Delete account. Deleting your
              account permanently removes it, and{" "}
              <strong className="font-semibold text-zinc-950">
                any remaining wallet balance is forfeited and cannot be
                restored or refunded.
              </strong>
            </p>
            <p className={paragraphClassName}>
              We may suspend or close your account if you materially breach
              these Terms, in particular the acceptable-use rules in Section 3,
              if we reasonably suspect fraud or abuse of payments or free
              credit, or where we are required to by law or by Google Play. If
              we close your account without any breach on your part, we will
              refund your unused wallet balance.
            </p>
            <p className={paragraphClassName}>
              Sections 4, 7, 8, 10, and 11 survive termination.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>
              10. Governing Law and Jurisdiction
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
            <h2 className={headingClassName}>11. Changes and Contact</h2>
            <p className={paragraphClassName}>
              We may update these Terms as iMavi changes. We will update the
              &quot;Last updated&quot; date above and, for material changes,
              notify you within the App. Continuing to use the App after a
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
                Data Deletion
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
