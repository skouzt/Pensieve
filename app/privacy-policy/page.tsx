import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | iMavi",
  description: "Privacy policy for iMavi.",
};

const lastUpdated = "November 3, 2026";

const sectionClassName = "space-y-4 border-t border-zinc-200 pt-8";
const headingClassName = "text-2xl font-semibold text-zinc-950";
const paragraphClassName = "leading-7 text-zinc-700";
const listClassName = "ml-5 list-disc space-y-3 leading-7 text-zinc-700";
const linkClassName = "font-medium text-teal-700 transition hover:text-teal-900";

export default function PrivacyPolicyPage() {
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
            Privacy Policy for iMavi
          </h1>
          <p className="max-w-2xl leading-7 text-zinc-700">
            iMavi (&quot;the App,&quot; &quot;we,&quot; &quot;us&quot;) is a
            mobile application that lets you create AI-generated images and
            videos. You sign in, add credit to an in-app wallet through Google
            Play, and pay for each generation from that wallet. This Privacy
            Policy explains what data we collect, why, who we share it with,
            how long we keep it, and your rights.
          </p>
          <p className="max-w-2xl leading-7 text-zinc-700">
            The short version:{" "}
            <strong className="font-semibold text-zinc-950">
              we collect what we need to run your account, your wallet, and
              your generations, and nothing for advertising.
            </strong>{" "}
            We do not sell your data and we do not use it to train AI models.
          </p>
        </header>

        <div className="space-y-10">
          <section className={sectionClassName}>
            <h2 className={headingClassName}>1. Information We Collect</h2>
            <ul className={listClassName}>
              <li>
                <strong className="font-semibold text-zinc-950">
                  Account details:
                </strong>{" "}
                your email address, and if you sign in with Google, a keyed
                hash of your Google account identifier. We do not store your
                Google password.
              </li>
              <li>
                <strong className="font-semibold text-zinc-950">
                  Your creations:
                </strong>{" "}
                the prompts you write, any reference images you attach, the
                model and settings you choose, and the images and videos that
                are generated.
              </li>
              <li>
                <strong className="font-semibold text-zinc-950">
                  Wallet and purchases:
                </strong>{" "}
                your wallet balance, a ledger of top-ups, charges, and refunds,
                and Google Play purchase records (product, order ID, and
                purchase token). We never receive your card number or billing
                address; Google handles payment.
              </li>
              <li>
                <strong className="font-semibold text-zinc-950">
                  Security and abuse prevention:
                </strong>{" "}
                a keyed hash of a device identifier (used so the free starter
                images are given once per device), Google Play Integrity
                results that confirm requests come from a genuine copy of the
                App, request timestamps and hashed network addresses used for
                rate limiting, and records of content moderation decisions and
                reports.
              </li>
              <li>
                <strong className="font-semibold text-zinc-950">
                  Notifications:
                </strong>{" "}
                if you allow them, a push token so we can tell you when a
                generation is ready.
              </li>
            </ul>
            <p className={paragraphClassName}>
              iMavi does not use advertising, advertising identifiers, or
              third-party analytics tools.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>2. How We Use It</h2>
            <ul className={listClassName}>
              <li>To sign you in and keep your account secure</li>
              <li>
                To run your generations and deliver the results to your device
              </li>
              <li>
                To keep your wallet accurate: credit top-ups, charge the price
                shown before each generation, and refund failed generations
              </li>
              <li>
                To prevent fraud and abuse, including payment fraud, repeated
                free-credit claims, and content that breaks our Terms
              </li>
              <li>To answer you when you contact support</li>
              <li>To meet legal, tax, and accounting obligations</li>
            </ul>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>3. Who We Share It With</h2>
            <p className={paragraphClassName}>
              We share data only with the service providers that run the App,
              and only what each one needs:
            </p>
            <ul className={listClassName}>
              <li>
                <strong className="font-semibold text-zinc-950">
                  Supabase
                </strong>{" "}
                hosts our database, file storage, sign-in, and server
                functions. Our project is hosted in Mumbai, India.
              </li>
              <li>
                <strong className="font-semibold text-zinc-950">
                  OpenRouter and the AI model providers
                </strong>{" "}
                behind it (for example Google, OpenAI, ByteDance, Black Forest
                Labs) receive your prompt, reference images, and settings in
                order to generate your result. They receive no account details
                from us. Each provider processes this under its own terms and
                privacy policy.
              </li>
              <li>
                <strong className="font-semibold text-zinc-950">Google</strong>{" "}
                provides Google Sign-In, Google Play billing, and Play
                Integrity.
              </li>
              <li>
                Authorities, where we are legally required to disclose
                information, or where needed to protect people from serious
                harm, including reporting child sexual abuse material.
              </li>
            </ul>
            <p className={paragraphClassName}>
              Some of these providers process data outside India. Where they
              do, they handle it under their own data-protection commitments.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>4. Content Moderation</h2>
            <p className={paragraphClassName}>
              Prompts and reference images are checked automatically before a
              generation runs, and requests that break our{" "}
              <Link href="/terms" className={linkClassName}>
                Terms of Service
              </Link>{" "}
              are blocked. You can report a result from inside the App. Reports
              and moderation decisions may be reviewed by us, and repeated or
              serious violations can lead to your account being suspended.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>5. How Long We Keep It</h2>
            <ul className={listClassName}>
              <li>
                Reference images you attach are passed to the AI provider and
                are not stored on our servers.
              </li>
              <li>
                Generated images and videos are deleted from our servers as
                soon as the App has saved them to your device, and at the
                latest 7 days after they are created. Media you report is kept
                separately until the report has been reviewed.
              </li>
              <li>Prompts are removed from our records after 30 days.</li>
              <li>
                Security logs are kept for up to 90 days, and payment webhook
                records for up to 30 days.
              </li>
              <li>
                Account details are kept until you delete your account.
              </li>
              <li>
                Wallet ledger and purchase records are kept after account
                deletion, unlinked from your account, because tax law and
                payment-fraud prevention require it.
              </li>
            </ul>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>6. Data Security</h2>
            <p className={paragraphClassName}>
              Data is encrypted in transit. Each user can only read their own
              records and files. Device and Google identifiers are stored as
              keyed hashes rather than in plain form. No system is perfectly
              secure, so please also protect your device with a lock screen.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>7. Children</h2>
            <p className={paragraphClassName}>
              iMavi is intended for people aged 18 and over. We do not
              knowingly collect personal data from anyone under 18. If you
              believe a child has created an account, contact us and we will
              delete it.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>8. Your Rights</h2>
            <p className={paragraphClassName}>
              Depending on where you live, including under India&apos;s Digital
              Personal Data Protection Act, the GDPR, or the CCPA, you may have
              the right to access, correct, or delete your personal data, and
              to withdraw consent. You can:
            </p>
            <ul className={listClassName}>
              <li>
                Delete your account and its data at any time in the App under{" "}
                <strong className="font-semibold text-zinc-950">
                  Settings → Delete account
                </strong>
                , or by following our{" "}
                <Link href="/data-deletion" className={linkClassName}>
                  Data Deletion
                </Link>{" "}
                page
              </li>
              <li>
                Email{" "}
                <a href="mailto:hello@imavi.in" className={linkClassName}>
                  hello@imavi.in
                </a>{" "}
                from the address you sign in with to request a copy of your
                data or a correction
              </li>
            </ul>
            <p className={paragraphClassName}>
              We will respond within 30 days. If you are unhappy with our
              response, you may complain to your local data-protection
              authority.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>9. Changes to This Policy</h2>
            <p className={paragraphClassName}>
              We may update this Privacy Policy as iMavi changes. We will
              update the &quot;Last updated&quot; date above and, for material
              changes, notify you within the App before the change takes
              effect.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>10. Contact Us</h2>
            <p className={paragraphClassName}>
              Questions about this Privacy Policy, or requests about your data,
              can be sent to{" "}
              <a href="mailto:hello@imavi.in" className={linkClassName}>
                hello@imavi.in
              </a>
              .
            </p>
          </section>
        </div>

        <footer className="mt-12 border-t border-zinc-200 pt-8 text-sm leading-6 text-zinc-500">
          This policy describes iMavi&apos;s current data practices as of{" "}
          {lastUpdated}. Because iMavi is under active development, please check
          back periodically for updates.
        </footer>
      </article>
    </main>
  );
}
