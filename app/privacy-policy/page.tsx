import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Imavi",
  description: "Privacy policy for Imavi.",
};

const lastUpdated = "June 27, 2026";

const sectionClassName = "space-y-4 border-t border-zinc-200 pt-8";
const headingClassName = "text-2xl font-semibold text-zinc-950";
const paragraphClassName = "leading-7 text-zinc-700";
const listClassName = "ml-5 list-disc space-y-3 leading-7 text-zinc-700";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-[100dvh] bg-white px-5 py-8 text-zinc-950 sm:px-8 sm:py-12">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex text-sm font-medium text-teal-700 transition hover:text-teal-900"
        >
          Back to Imavi
        </Link>

        <header className="mt-10 space-y-5 pb-10">
          <p className="text-xs font-medium uppercase text-teal-700">
            Last updated: {lastUpdated}
          </p>
          <h1 className="text-5xl font-semibold leading-none text-zinc-950 sm:text-6xl">
            Privacy Policy for Imavi
          </h1>
          <p className="max-w-2xl leading-7 text-zinc-700">
            Imavi (&quot;the App,&quot; &quot;we,&quot; &quot;us&quot;) is a
            mobile application that lets you create AI-generated images and
            videos using your own API keys from third-party AI providers. This
            Privacy Policy explains what data the App handles, how it is stored,
            and your rights.
          </p>
          <p className="max-w-2xl leading-7 text-zinc-700">
            We built Imavi around a simple principle:{" "}
            <strong className="font-semibold text-zinc-950">
              your data stays on your device.
            </strong>{" "}
            We do not operate a backend server that stores your content,
            prompts, or API keys.
          </p>
        </header>

        <div className="space-y-10">
          <section className={sectionClassName}>
            <h2 className={headingClassName}>
              1. Information We Do Not Collect
            </h2>
            <p className={paragraphClassName}>
              Imavi does not require an account. We do not collect, store, or
              have access to:
            </p>
            <ul className={listClassName}>
              <li>Your name, email address, or any personal identifiers</li>
              <li>Your API keys</li>
              <li>Your prompts, generated images, or generated videos</li>
              <li>
                Usage analytics tied to your identity, unless stated otherwise
                in Section 5
              </li>
            </ul>
            <p className={paragraphClassName}>
              There is no Imavi server that your creative content passes
              through. When you generate content, your device communicates
              directly with the third-party AI provider you have connected.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>
              2. API Keys - How They Are Stored
            </h2>
            <p className={paragraphClassName}>
              Imavi uses a &quot;Bring Your Own Key&quot; (BYOK) model.
            </p>
            <ul className={listClassName}>
              <li>
                API keys you enter for providers such as Flux, DALL-E, D-ID,
                Kling, Runway, ElevenLabs, Replicate, or Anthropic are stored
                locally on your device only, using secure on-device storage.
              </li>
              <li>
                Your keys are never transmitted to Imavi&apos;s servers, because
                Imavi does not operate a server that handles your keys.
              </li>
              <li>
                Your keys are sent only to the specific provider&apos;s API when
                you run a generation, directly from your device to that provider.
              </li>
              <li>
                If you delete the App or clear its data, your stored keys are
                permanently removed from your device.
              </li>
              <li>
                You are responsible for keeping your own API keys secure and for
                any usage costs billed by your provider.
              </li>
            </ul>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>3. Third-Party AI Providers</h2>
            <p className={paragraphClassName}>
              When you generate content, your prompts, reference images, and
              other inputs are sent directly from your device to the third-party
              provider whose API key you have connected, for example OpenAI,
              Stability AI, Kling, D-ID, Runway, or ElevenLabs.
            </p>
            <ul className={listClassName}>
              <li>
                Imavi does not see, log, or store this data. It is not routed
                through any Imavi server.
              </li>
              <li>
                Each provider has its own privacy policy and terms governing how
                they handle the data you send them. We encourage you to review
                the privacy policy of any provider you connect.
              </li>
              <li>
                Imavi is not responsible for how third-party providers handle,
                store, or use your data once it reaches their servers.
              </li>
            </ul>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>4. Payment Information</h2>
            <p className={paragraphClassName}>
              If you purchase Imavi, payment is processed entirely through the
              Apple App Store or Google Play Store, as applicable. Imavi does
              not receive, see, or store your payment details, such as card
              numbers or billing address. This is handled directly by Apple or
              Google under their own privacy policies.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>5. Analytics and Crash Reporting</h2>
            <p className={paragraphClassName}>
              Imavi does not currently use any analytics or crash-reporting
              tools. If this changes in a future update, this Privacy Policy
              will be updated accordingly before the change takes effect.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>6. Data Security</h2>
            <p className={paragraphClassName}>
              Since your content and API keys never leave your device, except
              directly to the provider you choose, the main security boundary is
              your device itself. We recommend:
            </p>
            <ul className={listClassName}>
              <li>Using your device&apos;s lock screen or biometric security</li>
              <li>
                Not sharing screenshots of your Settings screen that show
                unmasked API keys
              </li>
              <li>
                Revoking and rotating any API key you believe may have been
                exposed
              </li>
            </ul>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>7. Children&apos;s Privacy</h2>
            <p className={paragraphClassName}>
              Imavi is not directed at children under 13, or the relevant
              minimum age in your country, and we do not knowingly collect
              personal information from children. Some third-party AI providers
              may have their own age restrictions. Please review their terms.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>8. Your Rights</h2>
            <p className={paragraphClassName}>
              Because Imavi does not collect personal data on its own servers,
              there is no Imavi-held data to request, export, or delete. Any
              data-subject rights, such as access, deletion, or correction,
              regarding content you have generated would need to be directed to
              the third-party AI provider whose servers processed that request.
            </p>
            <p className={paragraphClassName}>
              If you are a resident of the EU/UK (GDPR) or California (CCPA) and
              have questions about how a connected third-party provider handles
              your data, please contact that provider directly.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>9. Changes to This Policy</h2>
            <p className={paragraphClassName}>
              We may update this Privacy Policy as Imavi adds new features, for
              example if we introduce optional cloud sync or analytics in the
              future. We will update the &quot;Last updated&quot; date above and,
              for material changes, notify users within the App.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>10. Contact Us</h2>
            <p className={paragraphClassName}>
              If you have questions about this Privacy Policy, please use the
              support contact listed in the App Store or Google Play listing for
              Imavi.
            </p>
          </section>
        </div>

        <footer className="mt-12 border-t border-zinc-200 pt-8 text-sm leading-6 text-zinc-500">
          This policy describes Imavi&apos;s current data practices as of{" "}
          {lastUpdated}. Because Imavi is under active development, please check
          back periodically for updates.
        </footer>
      </article>
    </main>
  );
}
