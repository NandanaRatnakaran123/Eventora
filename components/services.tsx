import Image from "next/image";
import { journey, pillars, services } from "@/lib/content";
import { container, Eyebrow, SectionTitle, sectionPad } from "./ui";

export function Services() {
  return (
    <section id="services" className={sectionPad}>
      <div className={container}>
        <div className="mb-16 text-center">
          <Eyebrow center>What we do</Eyebrow>
          <SectionTitle center>
            Four disciplines. One <em>obsession</em>.
          </SectionTitle>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(250px,100%),1fr))] gap-5">
          {services.map((s, i) => (
            <article key={s.title} className="group relative aspect-[3/4] overflow-hidden bg-ink">
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 100vw"
                className="object-cover transition-transform duration-[900ms] group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink-deep/90 via-ink-deep/10 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-7 text-cream">
                <span className="font-serif text-lg italic text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2 mt-1 font-serif text-[28px] font-light leading-tight">
                  {s.title}
                </h3>
                <p className="text-[15px] text-cream/80">{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section className={`${sectionPad} bg-sand`}>
      <div className={container}>
        <div className="mb-16 text-center">
          <Eyebrow center>The journey</Eyebrow>
          <SectionTitle center>
            From dream to <em>day</em>.
          </SectionTitle>
        </div>
        <ol className="grid grid-cols-[repeat(auto-fit,minmax(min(190px,100%),1fr))] gap-x-8 gap-y-12">
          {journey.map((step, i) => (
            <li key={step.title}>
              <div className="font-serif text-[64px] font-light italic leading-none text-gold-deep/60">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div aria-hidden="true" className="my-5 h-px w-full bg-ink/20" />
              <h3 className="mb-2 font-serif text-[24px] font-normal leading-tight">
                {step.title}
              </h3>
              <p className="text-[15px] text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Why() {
  return (
    <section className={`${sectionPad} bg-gradient-to-br from-ink-deep via-wine-deep to-ink text-cream`}>
      <div className={container}>
        <div className="mb-16 max-w-[760px]">
          <Eyebrow onDark>Why choose us</Eyebrow>
          <SectionTitle onDark>
            The Eventora <em>difference</em>.
          </SectionTitle>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] border-l border-cream/15">
          {pillars.map((p, i) => (
            <div key={p.title} className="border-b border-r border-t border-cream/15 p-8">
              <div className="font-serif text-xl italic text-gold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mb-3 mt-6 font-serif text-[26px] font-light leading-tight">
                {p.title}
              </h3>
              <p className="text-[15px] text-cream/70">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
