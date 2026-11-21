import { tickerItems } from "@/lib/content";

export function Ticker() {
  const row = (
    <div className="flex gap-12 whitespace-nowrap px-6 py-5 font-serif text-[22px] font-light italic">
      {tickerItems.map((t) => (
        <span key={t} className="flex gap-12">
          <span>{t}</span>
          <span aria-hidden="true" className="text-gold">
            ✦
          </span>
        </span>
      ))}
    </div>
  );
  return (
    <section aria-label="Our services" className="overflow-hidden bg-gradient-to-r from-ink-deep via-wine to-rose/70 text-cream">
      <div className="marquee-track" aria-hidden="true">
        {row}
        {row}
      </div>
    </section>
  );
}
