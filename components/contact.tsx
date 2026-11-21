import { whatsappUrl } from "@/lib/content";
import { CallbackForm } from "./callback-form";
import { container, Eyebrow, SectionTitle, sectionPad } from "./ui";

export function Contact() {
  return (
    <section id="contact" className={`${sectionPad} bg-gradient-to-br from-ink via-wine-deep to-rose/70 text-cream`}>
      <div
        className={`${container} grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-start gap-[clamp(40px,7vw,110px)]`}
      >
        <div>
          <Eyebrow onDark>Begin</Eyebrow>
          <SectionTitle onDark className="text-[clamp(38px,5vw,72px)]">
            Let&apos;s create something <em>unforgettable</em>.
          </SectionTitle>
          <p className="mb-9 mt-7 max-w-[460px] text-lg text-cream/75">
            Share your date, guest count and the mood you are after, and we will reply with
            ideas.
          </p>
          {whatsappUrl ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[54px] items-center gap-3 border border-gold px-8 text-[12px] font-semibold uppercase tracking-[.24em] text-gold hover:bg-gold hover:text-ink"
            >
              Chat on WhatsApp
            </a>
          ) : (
            // TODO: set NEXT_PUBLIC_WHATSAPP_NUMBER to show the WhatsApp button
            <p className="text-sm text-cream/60">WhatsApp contact coming soon.</p>
          )}
        </div>
        <CallbackForm />
      </div>
    </section>
  );
}
