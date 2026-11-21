import Image from "next/image";
import { aboutPhotos, aboutStats, numbers } from "@/lib/content";
import { Reveal } from "./reveal";
import { container, Eyebrow, SectionTitle, sectionPad, TextLink } from "./ui";

export function About() {
  const [main, inset] = aboutPhotos;
  return (
    <section id="about" className={sectionPad}>
      <div
        className={`${container} grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-center gap-[clamp(40px,7vw,110px)]`}
      >
        <Reveal from="left" className="relative pb-16 pr-10">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={main.src}
              alt={main.alt}
              fill
              sizes="(min-width: 1024px) 560px, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 aspect-square w-[44%] border-[10px] border-cream">
            <Image src={inset.src} alt={inset.alt} fill sizes="240px" className="object-cover" />
          </div>
        </Reveal>

        <div>
          <Eyebrow>About</Eyebrow>
          <SectionTitle>
            A house of <em>timeless</em> celebrations.
          </SectionTitle>
          <p className="mt-8 text-lg text-muted">
            Eventora is a one-stop wedding and event studio built around a single idea: the
            guest should feel the care, and the host should never see the chaos. From
            intimate family ceremonies to grand galas, every event is planned, styled and
            produced by the same hands-on team.
          </p>
          <p className="mt-6 font-serif text-2xl italic text-gold-deep">
            We create while you celebrate.
          </p>
          <dl className="mt-10 flex flex-wrap gap-12 border-t border-ink/15 pt-8">
            {aboutStats.map((s) => (
              <div key={s.label}>
                <dd className="font-serif text-[44px] font-light leading-none">{s.value}</dd>
                <dt className="mt-2 text-[12px] uppercase tracking-[.22em] text-muted">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
          <div className="mt-10">
            <TextLink href="#contact">Our story</TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Numbers() {
  return (
    <section className={`bg-gradient-to-b from-cream to-sand ${sectionPad}`}>
      <div className={`${container} text-center`}>
        <Eyebrow center>By the numbers</Eyebrow>
        <SectionTitle center>
          A legacy measured in <em>memories</em>.
        </SectionTitle>
        <dl className="mt-16 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-y-12">
          {numbers.map((n, i) => (
            <div key={n.label} className={i ? "lg:border-l lg:border-ink/15" : ""}>
              <dd className="font-serif text-[clamp(48px,6vw,84px)] font-light leading-none text-gold-deep">
                {n.value}
              </dd>
              <dt className="mt-3 text-[12px] uppercase tracking-[.24em] text-muted">
                {n.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
