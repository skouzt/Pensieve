"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "./landing.css";

const PLAY_URL = "https://play.google.com/store/apps/details?id=com.skouzt.imavi";

// The hero phone plays these in turn, typing each one's prompt.
const HERO = [
  { id: "3059", prompt: "A ginger cat surfing a breaking wave, spray flying" },
  { id: "3047", prompt: "A hamster in a tiny helmet riding a motorbike through a forest" },
  { id: "3064", prompt: "A woman in a white dress swinging above a giant daisy" },
  { id: "3020", prompt: "A fluffy white puppy among presents on Christmas morning" },
];

// Real results from the app, with the prompts that made them.
const GALLERY: { id: string; w: number; h: number; prompt: string; video?: boolean }[] = [
  { id: "3059", w: 540, h: 968, video: true, prompt: "Ginger cat riding a surfboard through a breaking wave, GoPro angle" },
  { id: "3013", w: 540, h: 968, prompt: "Macro beauty shot of glossy lips with diamond letter grillz" },
  { id: "3027", w: 540, h: 540, prompt: "Woman in white lace kissing a pink dolphin in turquoise water" },
  { id: "3081", w: 540, h: 968, prompt: "Anime boy running with a keyboard through a neon city street" },
  { id: "3047", w: 540, h: 968, video: true, prompt: "Hamster in a helmet riding a tiny motorcycle down a redwood road" },
  { id: "3105", w: 540, h: 540, prompt: "A single wooden chair burning in an empty desert at night" },
  { id: "3108", w: 540, h: 968, prompt: "White horse galloping beside a green supercar through a canyon" },
  { id: "3106", w: 540, h: 540, prompt: "Woman lounging in a shopping cart full of cash on a tennis court" },
  { id: "3064", w: 540, h: 968, video: true, prompt: "Woman on a swing above a giant daisy, surreal cinematic still" },
  { id: "3075", w: 540, h: 810, prompt: "Man in a crystal-encrusted suit and visor, fashion portrait" },
  { id: "3192", w: 540, h: 968, prompt: "Giant pink teddy bear lying on a rainy New York street" },
  { id: "3125", w: 540, h: 968, prompt: "Rider in bunny ears on a motorcycle across a night bridge" },
  { id: "3020", w: 540, h: 968, video: true, prompt: "A fluffy dog among opened presents beside a Christmas tree" },
  { id: "3129", w: 540, h: 968, prompt: "POV of a wooden roller coaster dropping into a sunset sky" },
];

const MARQUEE_A = ["3013", "3081", "3108", "3027", "3192", "3075", "3105"];
const MARQUEE_B = ["3129", "3106", "3125", "3059", "3064", "3047", "3020"];

function PlayIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#9FEFD0" d="M4.2 2.6c-.3.3-.4.7-.4 1.2v16.4c0 .5.1.9.4 1.2l9.3-9.4z" />
      <path fill="#E9FF5A" d="m16.6 15.1-3.1-3.1 3.1-3.1 3.7 2.1c1.1.6 1.1 1.6 0 2.2z" />
      <path fill="#FF4FD8" d="M16.6 15.1 13.5 12l-9.3 9.4c.4.4 1 .4 1.6.1z" />
      <path fill="#3D7BFF" d="M16.6 8.9 5.8 2.5c-.6-.4-1.2-.3-1.6.1l9.3 9.4z" />
    </svg>
  );
}

function GetApp({ large }: { large?: boolean }) {
  return (
    <a className={`btn${large ? " btn-lg" : ""}`} href={PLAY_URL} target="_blank" rel="noopener noreferrer">
      <PlayIcon size={large ? 26 : 22} />
      Get it on Google Play
    </a>
  );
}

/** Adds .in to [data-reveal] elements as they enter the viewport (once each). */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/** Writes scroll progress through an element (0 when its top meets the fold, 1 a screen later) to --p. */
function useScrollProgress(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const top = el.getBoundingClientRect().top;
      const p = Math.min(1, Math.max(0, (window.innerHeight - top) / window.innerHeight));
      el.style.setProperty("--p", p.toFixed(3));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [ref]);
}

/** The hero phone: plays each clip once, typing its prompt, then moves to the next. */
function HeroPhone() {
  const [i, setI] = useState(0);
  const [typed, setTyped] = useState(0);
  const prompt = HERO[i].prompt;

  useEffect(() => {
    const t = setInterval(() => setTyped((n) => (n >= prompt.length ? n : n + 1)), 32);
    return () => clearInterval(t);
  }, [prompt]);

  return (
    <div className="phone">
      <div className="screen">
        <div className="island" />
        <div className="status"><span>9:41</span><span>iMavi</span></div>
        <video
          key={HERO[i].id}
          src={`/media/${HERO[i].id}.mp4`}
          poster={`/media/${HERO[i].id}.webp`}
          autoPlay
          muted
          playsInline
          onEnded={() => {
            setTyped(0);
            setI((n) => (n + 1) % HERO.length);
          }}
        />
        <div className="prompt-chip">
          <b>PROMPT</b>
          {prompt.slice(0, typed)}
          <span className="caret" />
        </div>
      </div>
    </div>
  );
}

/** A gallery video plays only while it's on screen. */
function InViewVideo({ id, w, h }: { id: string; w: number; h: number }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? void v.play().catch(() => {}) : v.pause()), { threshold: 0.3 });
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return <video ref={ref} src={`/media/${id}.mp4`} poster={`/media/${id}.webp`} width={w} height={h} muted loop playsInline preload="none" />;
}

export default function LandingPage() {
  useReveal();
  const stage = useRef<HTMLDivElement>(null);
  useScrollProgress(stage);

  return (
    <main className="lp">
      <nav className="nav" aria-label="Main">
        <Link href="/" className="display nav-mark brand">iMavi</Link>
        <div className="nav-links">
          <a href="#how">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#gallery">Gallery</a>
        </div>
        <a className="btn" href={PLAY_URL} target="_blank" rel="noopener noreferrer">
          <PlayIcon />
          Get the app
        </a>
      </nav>

      {/* ── Hero ── */}
      <header className="hero">
        <h1 className="display h-hero">
          <span className="line"><span>Type it.</span></span>
          <span className="line"><span>Watch it move.</span></span>
        </h1>
        <p className="lede">Every image and video model in one app. Pay only for what you make.</p>
        <div className="hero-cta">
          <GetApp large />
          <small>3 free images when you sign up. No card needed.</small>
        </div>

        <div className="stage" ref={stage}>
          <HeroPhone />
          <span className="sticker s-pink st1" style={{ "--r": "-9deg", "--drift": "-70px" } as React.CSSProperties}>3 free images</span>
          <span className="sticker s-lemon st2" style={{ "--r": "7deg", "--drift": "-120px", "--d": "-1.2s" } as React.CSSProperties}>From $0.02</span>
          <span className="sticker s-mint st3" style={{ "--r": "6deg", "--drift": "-160px", "--d": "-2s" } as React.CSSProperties}>No subscription</span>
          <span className="sticker s-blue st4" style={{ "--r": "-6deg", "--drift": "-90px", "--d": "-3s" } as React.CSSProperties}>Image + video</span>
        </div>
      </header>

      {/* ── Real results, sliding by ── */}
      <section className="marquee" aria-label="Images made in iMavi">
        {[MARQUEE_A, MARQUEE_B].map((row, r) => (
          <div key={r} className={`track${r ? " rev" : ""}`}>
            {[...row, ...row].map((id, k) => (
              // eslint-disable-next-line @next/next/no-img-element -- small static webp tiles, no optimisation needed
              <img key={k} src={`/media/${id}.webp`} alt="" loading="lazy" aria-hidden={k >= row.length} />
            ))}
          </div>
        ))}
      </section>

      {/* ── How it works ── */}
      <section className="section" id="how">
        <div className="wrap">
          <p className="kicker" data-reveal>Three steps. That&apos;s it.</p>
          <h2 className="display h-xl" data-reveal>How <span className="brand">iMavi</span><br />works</h2>
          <div className="bento">
            <article className="card" data-reveal style={{ "--d": "0s" } as React.CSSProperties}>
              <span className="num">01 · ADD</span>
              <h3>Top up from $2.</h3>
              <p>Keep it as long as you want. Your balance never expires.</p>
              <div className="visual">
                <div className="mock">
                  <span className="num">BALANCE</span>
                  <div className="bal">$12<small>.40</small></div>
                  <div className="pill-row"><span>$2</span><span className="on">$5</span><span>$10</span></div>
                </div>
              </div>
            </article>
            <article className="card mint" data-reveal style={{ "--d": "0.08s" } as React.CSSProperties}>
              <span className="num">02 · TYPE</span>
              <h3>Image or video. One prompt.</h3>
              <p>Describe it in plain words. Add a reference picture if you like.</p>
              <div className="visual">
                <div className="input">A ginger cat surfing a breaking wave, spray flying</div>
                <div className="chips"><span>Kling</span><span>9:16</span><span>5s</span><span className="go">Render</span></div>
              </div>
            </article>
            <article className="card ink" data-reveal style={{ "--d": "0.16s" } as React.CSSProperties}>
              <span className="num">03 · GET</span>
              <h3>Pay per generation.</h3>
              <p>No monthly bill. Save it, share it, or run it again.</p>
              <div className="visual">
                {/* eslint-disable-next-line @next/next/no-img-element -- small static webp */}
                <img className="result" src="/media/3027.webp" alt="A woman in white lace with a pink dolphin, made in iMavi" loading="lazy" />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── What it does ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 className="display h-lg" data-reveal>What <span className="brand">iMavi</span> does</h2>
          <div className="bento four">
            <article className="card" data-reveal>
              <span className="num">WALLET</span>
              <h3>Your balance. Right there.</h3>
              <p>See every cent you spend, right on the home screen.</p>
            </article>
            <article className="card ink" data-reveal style={{ "--d": "0.06s" } as React.CSSProperties}>
              <span className="num">MODELS</span>
              <h3>Pick a model. Switch any time.</h3>
              <div className="visual">
                <div className="models">
                  <div><span>GPT Image 2<em>image</em></span><b>$0.02</b></div>
                  <div><span>FLUX.2 Pro<em>image</em></span><b>$0.08</b></div>
                  <div><span>Nano Banana<em>image</em></span><b>$0.10</b></div>
                  <div><span>Seedance 2.0 Mini<em>video</em></span><b>$0.28</b></div>
                </div>
              </div>
            </article>
            <article className="card" data-reveal style={{ "--d": "0.12s" } as React.CSSProperties}>
              <span className="num">VIDEO</span>
              <h3>Type. Wait. Watch.</h3>
              <div className="visual">
                <InViewVideo id="3047" w={540} h={968} />
              </div>
            </article>
            <article className="card mint" data-reveal style={{ "--d": "0.18s" } as React.CSSProperties}>
              <span className="num">PRICE</span>
              <h3>See the price first.</h3>
              <p>The cost shows before you tap. No surprises, no bill at the end of the month.</p>
              <div className="visual"><span className="display" style={{ fontSize: 96 }}>$0.08</span></div>
            </article>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="section pricing" id="pricing">
        <div className="wrap price-grid">
          <div data-reveal>
            <p className="kicker">Top up from</p>
            <div className="display big-price">$2</div>
          </div>
          <div data-reveal style={{ "--d": "0.1s" } as React.CSSProperties}>
            <h2 className="display h-lg" style={{ marginBottom: 28 }}>How the pricing works</h2>
            <div className="rows">
              <div><span>01</span>You see the exact price before you generate.</div>
              <div><span>02</span>Credits don&apos;t expire.</div>
              <div><span>03</span>No subscription. No auto-renew.</div>
              <div><span>04</span>A run that fails is refunded automatically.</div>
            </div>
            <p className="fine">Payments are handled by Google Play.</p>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="section" id="gallery">
        <div className="wrap">
          <p className="kicker" data-reveal>Every tile is the prompt that made it</p>
          <h2 className="display h-xl" data-reveal>Made in <span className="brand">iMavi</span></h2>
          <div className="gallery">
            {GALLERY.map((g, k) => (
              <figure key={g.id} className="tile" data-reveal style={{ "--d": `${(k % 4) * 0.06}s` } as React.CSSProperties} tabIndex={0}>
                {g.video ? <span className="badge">VIDEO</span> : null}
                {g.video ? (
                  <InViewVideo id={g.id} w={g.w} h={g.h} />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element -- small static webp tiles
                  <img src={`/media/${g.id}.webp`} width={g.w} height={g.h} alt={g.prompt} loading="lazy" />
                )}
                <figcaption>&ldquo;{g.prompt}&rdquo;</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Privacy ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap privacy">
          <article className="card ink" data-reveal>
            <span className="num">PRIVACY</span>
            <h2 className="display h-lg">Private by design</h2>
            <p>Your reference photos go to the model and are never stored. Results are deleted from our servers once they&apos;re on your phone. Nothing sold.</p>
          </article>
          <article className="card" data-reveal style={{ "--d": "0.08s" } as React.CSSProperties}>
            <span className="num">THE FINE PRINT</span>
            <p>Sign in with Google or an email code. Delete your account any time from Settings.</p>
            <div className="legal-links">
              <Link href="/privacy-policy">Privacy policy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/data-deletion">Data deletion</Link>
            </div>
          </article>
        </div>
      </section>

      {/* ── Final call ── */}
      <section className="final">
        <h2 className="display h-hero" data-reveal>Try it free.</h2>
        <p className="lede" data-reveal style={{ margin: "18px auto 0", maxWidth: "32ch" }}>3 free images when you sign up. Top up only when you want more.</p>
        <div data-reveal style={{ "--d": "0.1s" } as React.CSSProperties}><GetApp large /></div>
        <span className="sticker s-pink" style={{ left: "8%", top: 90, "--r": "-10deg" } as React.CSSProperties}>Made for Android</span>
        <span className="sticker s-blue" style={{ right: "8%", bottom: 110, "--r": "8deg", "--d": "-2s" } as React.CSSProperties}>Pay per run</span>
      </section>
    </main>
  );
}
