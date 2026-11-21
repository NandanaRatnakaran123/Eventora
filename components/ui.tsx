import type { ReactNode } from "react";

export const container = "mx-auto max-w-[1296px] px-[clamp(20px,5vw,72px)]";
export const sectionPad = "py-[clamp(72px,9vw,136px)]";

export function Eyebrow({
  children,
  onDark = false,
  center = false,
}: {
  children: ReactNode;
  onDark?: boolean;
  center?: boolean;
}) {
  return (
    <p
      className={`mb-5 flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[.32em] ${
        center ? "justify-center" : ""
      } ${onDark ? "text-gold" : "text-gold-deep"}`}
    >
      <span aria-hidden="true" className="h-px w-10 bg-current" />
      {children}
      {center && <span aria-hidden="true" className="h-px w-10 bg-current" />}
    </p>
  );
}

// Wrap the accent word(s) in <em> inside children.
export function SectionTitle({
  children,
  onDark = false,
  center = false,
  className = "",
}: {
  children: ReactNode;
  onDark?: boolean;
  center?: boolean;
  className?: string;
}) {
  return (
    <h2
      className={`font-serif text-[clamp(36px,4.8vw,68px)] font-light leading-[1.04] tracking-[-.02em] ${
        center ? "text-center" : ""
      } ${onDark ? "[&_em]:text-gold" : "[&_em]:text-gold-deep"} [&_em]:font-normal ${className}`}
    >
      {children}
    </h2>
  );
}

export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-11 items-center gap-3 text-[12px] font-semibold uppercase tracking-[.24em] ${className}`}
    >
      <span className="border-b border-current pb-1">{children}</span>
      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}

export function Button({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
}) {
  const base =
    "inline-flex min-h-[54px] items-center justify-center px-9 text-[12px] font-semibold uppercase tracking-[.24em] transition-colors";
  return (
    <a
      href={href}
      className={`${base} ${
        variant === "solid"
          ? "bg-gold text-ink hover:bg-cream"
          : "border border-cream/60 text-cream hover:bg-cream hover:text-ink"
      }`}
    >
      {children}
    </a>
  );
}
