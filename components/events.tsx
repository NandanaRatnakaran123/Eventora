import Image from "next/image";
import { behindTheScenes, featuredEvents, signature } from "@/lib/content";
import { container, Eyebrow, SectionTitle, sectionPad, TextLink } from "./ui";

export function FeaturedEvents() {
  return (
    <section id="events" className={sectionPad}>
      <div className={container}>
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Featured</Eyebrow>
            <SectionTitle>
              Recent <em>chapters</em>.
            </SectionTitle>
          </div>
          <TextLink href="#gallery">All events</TextLink>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-7">
          {featuredEvents.map((e, i) => (
            <article key={e.src} className={i === 1 ? "md:mt-14" : ""}>
              <div className="relative h-[460px] overflow-hidden">
                <Image
                  src={e.src}
                  alt={e.alt}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="mb-2 mt-6 text-[12px] uppercase tracking-[.24em] text-gold-deep">
                {e.kind}
              </p>
              <h3 className="font-serif text-[30px] font-light">{e.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BehindTheScenes() {
  return (
    <section className={`${sectionPad} bg-sand`}>
      <div className={container}>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-center gap-14">
          <div>
            <Eyebrow>Behind the scenes</Eyebrow>
            <SectionTitle>
              The hours you <em>never see</em>.
            </SectionTitle>
            <p className="mt-7 max-w-[460px] text-lg text-muted">
              Long before the first guest arrives, a quiet team is sketching, sourcing,
              building and rehearsing. This is the part we love most.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {behindTheScenes.map((b, i) => (
              <figure key={b.label} className={i % 2 ? "mt-8" : ""}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={b.src}
                    alt={b.label}
                    fill
                    sizes="(min-width: 1024px) 280px, 45vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-[12px] uppercase tracking-[.2em] text-muted">
                  {b.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Signature() {
  return (
    <section className={`${sectionPad} bg-gradient-to-br from-wine-deep via-wine to-rose text-cream`}>
      <div className={container}>
        <div className="mb-14">
          <Eyebrow onDark>Signature experience</Eyebrow>
          <SectionTitle onDark>
            The details others <em>overlook</em>.
          </SectionTitle>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-10">
          {signature.map((s) => (
            <div key={s.title}>
              <h3 className="font-serif text-[40px] font-light italic text-gold">{s.title}</h3>
              <div aria-hidden="true" className="my-4 h-px w-12 bg-cream/40" />
              <p className="text-[15px] text-cream/75">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
