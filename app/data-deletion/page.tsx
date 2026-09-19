import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Deletion Request | iMavi",
  description:
    "How to request deletion of your data from iMavi, and what the app stores on your device.",
};

const lastUpdated = "September 19, 2026";

const sectionClassName = "space-y-4 border-t border-zinc-200 pt-8";
const headingClassName = "text-2xl font-semibold text-zinc-950";
const paragraphClassName = "leading-7 text-zinc-700";
const listClassName = "ml-5 list-disc space-y-3 leading-7 text-zinc-700";

export default function DataDeletionPage() {
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
            Data Deletion Request
          </h1>
          <p className="max-w-2xl leading-7 text-zinc-700">
            This page explains what data the iMavi app holds, how to request its
            deletion, and how long that takes.
          </p>
          <p className="max-w-2xl leading-7 text-zinc-700">
            The short version:{" "}
            <strong className="font-semibold text-zinc-950">
              the iMavi app stores everything on your device, not on our
              servers.
            </strong>{" "}
            Uninstalling the app deletes your data immediately and completely.
          </p>
        </header>

        <div className="space-y-10">
          <section className={sectionClassName}>
            <h2 className={headingClassName}>1. What the App Holds</h2>
            <p className={paragraphClassName}>
              iMavi has no accounts and no sign-in. All of the following is
              stored locally on your device only:
            </p>
            <ul className={listClassName}>
              <li>
                The API keys you enter for third-party AI providers, held in
                your device&apos;s secure storage
              </li>
              <li>Your prompts and generation history</li>
              <li>The images and videos you have generated</li>
              <li>Your in-app settings and preferences</li>
            </ul>
            <p className={paragraphClassName}>
              None of this is transmitted to an iMavi server, because the app
              does not operate one. When you run a generation, your device
              communicates directly with the AI provider whose key you
              connected.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>
              2. Deleting Your Data Yourself
            </h2>
            <p className={paragraphClassName}>
              Because the data is local, you can delete all of it without
              contacting us, and it takes effect immediately.
            </p>
            <p className={paragraphClassName}>In the app:</p>
            <ul className={listClassName}>
              <li>
                <strong className="font-semibold text-zinc-950">
                  Settings → API Keys → Clear all keys
                </strong>{" "}
                removes every stored provider key from your device
              </li>
              <li>
                <strong className="font-semibold text-zinc-950">
                  Library → select an item → Delete
                </strong>{" "}
                removes an individual generation
              </li>
            </ul>
            <p className={paragraphClassName}>
              Or, to remove everything at once: uninstall iMavi, or use your
              operating system&apos;s <em>Clear app data</em> option. This
              permanently deletes your keys, history, and generated media from
              the device. It cannot be undone, and we cannot restore it, because
              we never had a copy.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>
              3. Submitting a Deletion Request
            </h2>
            <p className={paragraphClassName}>
              If you would still like a deletion request recorded and confirmed
              in writing, email us:
            </p>
            <ul className={listClassName}>
              <li>
                <strong className="font-semibold text-zinc-950">
                  Email:
                </strong>{" "}
                <a
                  href="mailto:hello@imavi.in?subject=Data%20Deletion%20Request"
                  className="font-medium text-teal-700 transition hover:text-teal-900"
                >
                  hello@imavi.in
                </a>
              </li>
              <li>
                <strong className="font-semibold text-zinc-950">
                  Subject line:
                </strong>{" "}
                Data Deletion Request
              </li>
            </ul>
            <p className={paragraphClassName}>
              Since iMavi has no accounts, there is no username or user ID to
              quote. Please include the email address you are writing from and,
              if your request relates to a specific support conversation or
              store purchase, the{" "}
              <strong className="font-semibold text-zinc-950">
                app store order ID
              </strong>{" "}
              so we can locate it. Do not send us your API keys.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>4. Turnaround</h2>
            <p className={paragraphClassName}>
              We will action and confirm your request within{" "}
              <strong className="font-semibold text-zinc-950">30 days</strong>{" "}
              of receiving it, and normally much sooner. If we need more
              information to identify your data, we will reply before that
              deadline.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>
              5. What Is Removed and What Is Retained
            </h2>
            <p className={paragraphClassName}>Removed on request:</p>
            <ul className={listClassName}>
              <li>
                Any support correspondence you have had with us, including your
                email address and its contents
              </li>
              <li>
                Any diagnostic information you voluntarily sent us while
                reporting a problem
              </li>
            </ul>
            <p className={paragraphClassName}>
              Retained, and why:
            </p>
            <ul className={listClassName}>
              <li>
                Records of app store purchases, refunds, and tax documents,
                which Apple, Google, and applicable Indian tax law require us to
                keep. These are held by the stores, not by us.
              </li>
              <li>
                Records we are required to preserve to establish, exercise, or
                defend a legal claim, for as long as that obligation lasts
              </li>
              <li>
                Aggregated or anonymised figures that can no longer identify you
              </li>
            </ul>
            <p className={paragraphClassName}>
              Data held by third-party AI providers is outside our control. If
              you want prompts or generations deleted from a provider&apos;s
              systems, you must contact that provider directly, using the
              account whose API key you used.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>6. Related Pages</h2>
            <p className={paragraphClassName}>
              For the full picture of what iMavi does and does not handle, see
              our{" "}
              <Link
                href="/privacy-policy"
                className="font-medium text-teal-700 transition hover:text-teal-900"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                href="/terms"
                className="font-medium text-teal-700 transition hover:text-teal-900"
              >
                Terms of Service
              </Link>
              .
            </p>
          </section>
        </div>

        <footer className="mt-12 border-t border-zinc-200 pt-8 text-sm leading-6 text-zinc-500">
          This page describes iMavi&apos;s deletion process as of {lastUpdated}.
          Because iMavi is under active development, please check back
          periodically for updates.
        </footer>
      </article>
    </main>
  );
}
