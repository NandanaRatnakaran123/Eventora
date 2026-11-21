import Link from "next/link";
import { navLinks } from "@/lib/content";
import { Button, container } from "./ui";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-ink-deep text-cream">
      <video
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/hero/video.mp4" type="video/mp4" />
      </video>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(25,15,36,.8)_0%,rgba(122,74,158,.3)_45%,rgba(217,138,170,.18)_70%,rgba(25,15,36,.9)_100%)]"
      />

      <header className={`relative z-10 w-full ${container}`}>
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-7">
          <Link
            href="/"
            aria-label="Eventora home"
            className="font-serif text-[30px] font-light uppercase tracking-[.18em]"
          >
            Event<span className="text-gold">ora</span>
          </Link>
          <nav
            aria-label="Main"
            className="flex flex-wrap gap-x-9 gap-y-2 text-[12px] font-medium uppercase tracking-[.22em]"
          >
            {navLinks.map((l) => (
              <Link key={l.label} href={l.href} className="py-2 hover:text-gold">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <div
        id="top"
        className={`relative z-10 flex flex-1 flex-col items-center justify-center py-20 text-center ${container}`}
      >
        <p className="mb-8 flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[.4em] text-gold">
          <span aria-hidden="true" className="h-px w-10 bg-gold" />
          Crafting your experience
          <span aria-hidden="true" className="h-px w-10 bg-gold" />
        </p>
        <h1 className="max-w-[1000px] font-serif text-[clamp(42px,7vw,100px)] font-light leading-[1.02] tracking-[-.02em]">
          Creating unforgettable weddings &amp; <em className="text-gold">extraordinary</em>{" "}
          celebrations.
        </h1>
        <p className="mt-8 max-w-[560px] text-[18px] font-medium text-white [text-shadow:0_2px_12px_rgba(0,0,0,.7)]">
          Weddings, corporate gatherings and private celebrations, planned, styled and
          produced end to end by one calm, obsessive team.
        </p>
        <div className="mt-11 flex flex-wrap justify-center gap-4">
          <Button href="/#contact">Plan your event</Button>
          <Button href="/#gallery" variant="outline">
            View our work
          </Button>
        </div>
      </div>

      <a
        href="#about"
        className="relative z-10 mx-auto mb-8 flex flex-col items-center gap-3 text-[11px] uppercase tracking-[.4em] text-cream/70"
      >
        Scroll
        <span aria-hidden="true" className="h-12 w-px bg-gradient-to-b from-gold to-transparent" />
      </a>
    </section>
  );
}
