// Eventora mark: a lotus (new beginnings, celebration) with a spark of light above it.
export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M20 12c4.6 5 4.6 15 0 21-4.6-6-4.6-16 0-21z"
        fill="#E8BFD6"
      />
      <path
        d="M19 34C11 33.5 5.5 28 4.5 19.5 12 19.5 17.5 24 19 34z"
        stroke="#E8BFD6"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M21 34c8-.5 13.5-6 14.5-14.5C28 19.5 22.5 24 21 34z"
        stroke="#E8BFD6"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M20 2.5l1.1 3 3 1.1-3 1.1-1.1 3-1.1-3-3-1.1 3-1.1 1.1-3z"
        fill="#E8BFD6"
      />
    </svg>
  );
}

export function Logo({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark size={size} />
      <span className="font-serif font-light uppercase tracking-[.18em] leading-none">
        Event<span className="text-gold">ora</span>
      </span>
    </span>
  );
}
