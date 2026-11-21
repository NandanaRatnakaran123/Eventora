import Link from "next/link";
import { footerContact, navLinks, quickLinks, socials } from "@/lib/content";
import { container } from "./ui";

const heading = "mb-5 text-[12px] uppercase tracking-[.28em] text-gold";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-ink to-ink-deep pb-8 pt-[88px] text-[#e3d3de]">
      <div className={container}>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-12 border-b border-cream/15 pb-14">
          <div className="max-w-80">
            <div className="font-serif text-[30px] font-light uppercase tracking-[.18em] text-cream">
              Event<span className="text-gold">ora</span>
            </div>
            <p className="mt-5 font-serif text-xl italic">We create while you celebrate.</p>
          </div>
          <div>
            <h4 className={heading}>Quick links</h4>
            <ul className="flex flex-col gap-3 text-[15px]">
              {quickLinks.map((q) => (
                <li key={q}>
                  <Link
                    href={navLinks.find((n) => n.label === q)?.href ?? "/"}
                    className="hover:text-gold"
                  >
                    {q}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className={heading}>Contact</h4>
            <ul className="flex flex-col gap-3 text-[15px]">
              {footerContact.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className={heading}>Follow</h4>
            {/* TODO: link each network to the real profile URL */}
            <ul className="flex flex-col gap-3 text-[15px]">
              {socials.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="pt-6 text-sm">© Eventora. All rights reserved.</p>
      </div>
    </footer>
  );
}
