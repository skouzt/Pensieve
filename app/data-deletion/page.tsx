import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delete Your Account | iMavi",
  description:
    "How to delete your iMavi account and data, what is removed, and what is kept.",
};

const lastUpdated = "November 3, 2026";

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
            Delete Your iMavi Account
          </h1>
          <p className="max-w-2xl leading-7 text-zinc-700">
            This page explains how to delete your iMavi account and the data
            linked to it, what is removed, and what we are required to keep.
          </p>
          <p className="max-w-2xl leading-7 text-zinc-700">
            <strong className="font-semibold text-zinc-950">
              Deleting your account is permanent. Any remaining wallet balance
              is forfeited and cannot be restored or refunded.
            </strong>
          </p>
        </header>

        <div className="space-y-10">
          <section className={sectionClassName}>
            <h2 className={headingClassName}>1. Delete in the App</h2>
            <p className={paragraphClassName}>
              The quickest way, and it takes effect immediately:
            </p>
            <ul className={listClassName}>
              <li>Open iMavi and sign in</li>
              <li>
                Go to{" "}
                <strong className="font-semibold text-zinc-950">
                  Settings → Delete account
                </strong>
              </li>
              <li>Confirm the deletion</li>
            </ul>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>2. Request Deletion by Email</h2>
            <p className={paragraphClassName}>
              If you no longer have the App installed, email us from the
              address you use to sign in to iMavi:
            </p>
            <ul className={listClassName}>
              <li>
                <strong className="font-semibold text-zinc-950">
                  Email:
                </strong>{" "}
                <a
                  href="mailto:hello@imavi.in?subject=Account%20Deletion%20Request"
                  className="font-medium text-teal-700 transition hover:text-teal-900"
                >
                  hello@imavi.in
                </a>
              </li>
              <li>
                <strong className="font-semibold text-zinc-950">
                  Subject line:
                </strong>{" "}
                Account Deletion Request
              </li>
            </ul>
            <p className={paragraphClassName}>
              We will confirm the request came from the account owner, delete
              the account, and reply to confirm within{" "}
              <strong className="font-semibold text-zinc-950">30 days</strong>
              , normally much sooner.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>3. What Is Deleted</h2>
            <ul className={listClassName}>
              <li>Your sign-in account and email address</li>
              <li>Your profile and settings held on our servers</li>
              <li>
                Your generation history, including prompts, and any of your
                generated images and videos still stored on our servers
              </li>
              <li>Your notification token and moderation records</li>
              <li>Your wallet balance</li>
            </ul>
            <p className={paragraphClassName}>
              Images and videos already saved on your phone stay there until
              you delete them or uninstall the App.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>4. What Is Kept, and Why</h2>
            <ul className={listClassName}>
              <li>
                Wallet ledger entries and Google Play purchase records, unlinked
                from your account, because tax and accounting law and
                payment-fraud prevention require them
              </li>
              <li>
                A keyed hash of your Google account and device identifiers,
                which cannot be turned back into the originals, so that free
                starter images are not given to the same person twice
              </li>
              <li>
                Content reports you made, with your identity removed, and
                reported media until the report is reviewed
              </li>
              <li>
                Security logs, which are deleted automatically within 90 days
              </li>
              <li>
                Records we must preserve to establish, exercise, or defend a
                legal claim, for as long as that obligation lasts
              </li>
            </ul>
            <p className={paragraphClassName}>
              AI model providers process your requests only to generate a
              result. Their own retention is governed by their policies.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className={headingClassName}>5. Related Pages</h2>
            <p className={paragraphClassName}>
              For the full picture of what iMavi collects and why, see our{" "}
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
