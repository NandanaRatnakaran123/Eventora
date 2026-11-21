import Image from "next/image";
import { gallery, instagramTiles, testimonials } from "@/lib/content";
import { container, Eyebrow, SectionTitle, sectionPad, TextLink } from "./ui";

export function Gallery() {
  return (
    <section id="gallery" className={sectionPad}>
      <div className={container}>
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Gallery</Eyebrow>
            <SectionTitle>
              Moments, <em>immortalised</em>.
            </SectionTitle>
          </div>
          <TextLink href="#contact">Explore full gallery</TextLink>
        </div>
        <div className="grid auto-rows-[260px] grid-cols-2 gap-3 md:auto-rows-[300px] md:grid-cols-3">
          {gallery.map((g) => (
            <figure
              key={g.label}
              className={`group relative overflow-hidden ${g.tall ? "row-span-2" : ""}`}
            >
              <Image
                src={g.src}
                alt={g.label}
                fill
                sizes="(min-width: 768px) 420px, 50vw"
                className="object-cover transition-transform duration-[900ms] group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink-deep/75 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
              />
              <figcaption className="absolute bottom-4 left-5 font-serif text-xl italic text-cream opacity-0 transition-opacity group-hover:opacity-100">
                {g.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className={`${sectionPad} bg-sand`}>
      <div className={container}>
        <div className="mb-14 text-center">
          <Eyebrow center>Testimonials</Eyebrow>
          <SectionTitle center>
            Kind <em>words</em>.
          </SectionTitle>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="bg-cream p-9">
              <div className="text-lg tracking-[4px] text-gold-deep" role="img" aria-label="Five stars">
                ★★★★★
              </div>
              <blockquote className="mb-7 mt-5 font-serif text-[21px] font-light italic leading-[1.45]">
                “{t.quote}”
              </blockquote>
              <figcaption className="text-[12px] uppercase tracking-[.2em] text-muted">
                <strong className="font-semibold text-ink">{t.name}</strong> · {t.kind}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Instagram() {
  return (
    <section className="pt-[clamp(72px,9vw,136px)]">
      <div className={`${container} mb-10 text-center`}>
        <Eyebrow center>Follow along</Eyebrow>
        {/* TODO: replace with the real handle and profile URL */}
        <SectionTitle center>
          @<em>eventora</em>
        </SectionTitle>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6">
        {instagramTiles.map((src) => (
          <div key={src} className="relative aspect-square overflow-hidden">
            <Image
              src={src}
              alt=""
              fill
              sizes="(min-width: 768px) 16vw, 33vw"
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
