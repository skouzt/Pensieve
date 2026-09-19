import Link from "next/link";

const linkClassName =
  "text-zinc-500 transition hover:text-teal-700 focus-visible:text-teal-700";

/**
 * Site-wide footer. Exists primarily so the legal pages are reachable by a
 * crawler from any page — Google Play and Meta review bots follow links from
 * the landing page rather than guessing URLs.
 */
export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-white px-5 py-8 text-sm text-zinc-500 sm:px-8">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} iMavi</p>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/privacy-policy" className={linkClassName}>
            Privacy Policy
          </Link>
          <Link href="/terms" className={linkClassName}>
            Terms of Service
          </Link>
          <Link href="/data-deletion" className={linkClassName}>
            Data Deletion
          </Link>
          <a href="mailto:hello@imavi.in" className={linkClassName}>
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
