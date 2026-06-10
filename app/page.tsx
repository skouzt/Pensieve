"use client";

import { useEffect, useRef, useState } from "react";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

export default function LandingPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Seamless loop: two stacked copies of the clip crossfade into each other,
  // hiding the abrupt end→start cut. `front` is the index currently visible.
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const [front, setFront] = useState(0);

  useEffect(() => {
    const vids = [videoARef.current, videoBRef.current].filter(
      (v): v is HTMLVideoElement => v !== null,
    );
    if (vids.length < 2) return;

    const FADE = 1; // seconds of overlap — matches the 1s opacity transition
    const frontIdx = { current: 0 };
    const swapping = { current: false };

    vids[0].play().catch(() => {});

    // Defer loading the second copy until the first is actually playing, so
    // they don't fight for bandwidth and the first frame shows sooner.
    function loadSecondCopy() {
      vids[1].load();
    }
    vids[0].addEventListener("playing", loadSecondCopy, { once: true });

    function onTimeUpdate(this: HTMLVideoElement) {
      const idx = vids.indexOf(this);
      if (idx !== frontIdx.current || swapping.current || !this.duration) return;

      if (this.currentTime >= this.duration - FADE) {
        swapping.current = true;
        const nextIdx = idx === 0 ? 1 : 0;
        const next = vids[nextIdx];
        next.currentTime = 0;
        next.play().catch(() => {});
        frontIdx.current = nextIdx;
        setFront(nextIdx);
      }
    }

    // The outgoing copy plays through the fade, then resets and frees the lock.
    function onEnded(this: HTMLVideoElement) {
      this.pause();
      this.currentTime = 0;
      swapping.current = false;
    }

    vids.forEach((v) => {
      v.addEventListener("timeupdate", onTimeUpdate);
      v.addEventListener("ended", onEnded);
    });
    return () => {
      vids.forEach((v) => {
        v.removeEventListener("timeupdate", onTimeUpdate);
        v.removeEventListener("ended", onEnded);
      });
    };
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();

    // Basic validation / sane length caps before hitting the DB
    if (cleanName.length < 1 || cleanName.length > 100) {
      setError("Please enter your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail) || cleanEmail.length > 254) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);

    try {
      const { error: dbError } = await supabase
        .from("leads")
        .insert([{ name: cleanName, email: cleanEmail }]);

      if (dbError) {
        if (dbError.code === "23505") {
          setError("You're already on the list.");
        } else {
          setError("Something went wrong. Please try again.");
        }
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="relative min-h-[100dvh] w-full overflow-hidden">
      {/* Fallback background shown while video loads */}
      <div
        className="absolute inset-0 bg-[#0a1a0f] transition-opacity duration-1000"
        style={{ opacity: videoLoaded ? 0 : 1 }}
      />

      {/* Background video — two stacked copies crossfade for a seamless loop */}
      <video
        ref={videoARef}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
        style={{ opacity: front === 0 ? 1 : 0 }}
        muted
        playsInline
        preload="auto"
        poster="/anime-field-poster.jpg"
        onLoadedData={() => setVideoLoaded(true)}
      >
        {/* serve a compressed webm first for faster load, mp4 as fallback */}
        <source src="/anime-field.webm" type="video/webm" />
        <source src="/anime-field.mp4" type="video/mp4" />
      </video>
      <video
        ref={videoBRef}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
        style={{ opacity: front === 1 ? 1 : 0 }}
        muted
        playsInline
        preload="none"
        poster="/anime-field-poster.jpg"
      >
        <source src="/anime-field.webm" type="video/webm" />
        <source src="/anime-field.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />

      {/* Content — use 100dvh so it works on mobile with browser chrome */}
      <section className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-end px-4 pb-10 pt-6 sm:justify-center sm:px-6 sm:py-10">
        <div className="glass-card mx-auto w-full max-w-[22rem] rounded-2xl p-5 text-white sm:max-w-lg sm:rounded-3xl sm:p-10">
          {submitted ? (
            <div className="py-6 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30">
                <svg
                  className="h-7 w-7 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
                You're in, {name.split(" ")[0]}
              </h2>
              <p className="mt-3 text-xs font-light text-white/75 sm:text-sm">
                Your spot is saved. We'll send your early access invite to{" "}
                <span className="text-white">{email}</span> the moment doors open.
              </p>
            </div>
          ) : (
            <>
              <h1 className="font-display text-center text-4xl tracking-tight sm:text-5xl">
                iMavi
              </h1>
              <p className="mx-auto mt-1 text-center text-[10px] font-light tracking-widest text-white/40 uppercase sm:text-xs">
                AI Creation Studio · In Your Pocket
              </p>
              <p className="mx-auto mt-3 max-w-md text-center text-[13px] font-light leading-relaxed text-white/80 sm:mt-4 sm:text-base">
                Studio-grade AI images and video, made on your phone. Plug in
                your own API keys, choose a template, and create in seconds —
                no subscriptions, no limits. Pay once, keep every update forever.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-5 flex flex-col gap-2.5 sm:mt-8 sm:gap-3"
              >
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  autoComplete="name"
                  disabled={submitting}
                  className="glass-input w-full rounded-lg px-3.5 py-3 text-sm text-white sm:rounded-xl sm:px-4 sm:py-3 sm:text-base disabled:opacity-50"
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  disabled={submitting}
                  className="glass-input w-full rounded-lg px-3.5 py-3 text-sm text-white sm:rounded-xl sm:px-4 sm:py-3 sm:text-base disabled:opacity-50"
                />

                {error && (
                  <p className="text-center text-xs text-red-200/90 sm:text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="glow-button mt-1 w-full rounded-lg px-5 py-3 text-sm font-medium tracking-wide sm:mt-2 sm:rounded-xl sm:px-6 sm:py-3 sm:text-base disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Saving…" : "Claim Your Early Access"}
                </button>
              </form>

              <p className="mt-3 text-center text-[11px] font-light text-white/50 sm:mt-5 sm:text-xs">
                No spam · No subscriptions · Cancel anytime, there's nothing to cancel
              </p>
            </>
          )}
        </div>
      </section>
    </main>
  );
}