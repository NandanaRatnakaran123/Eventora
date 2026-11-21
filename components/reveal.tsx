"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type From = "left" | "right" | "top" | "bottom";

const hidden: Record<From, string> = {
  left: "-translate-x-16",
  right: "translate-x-16",
  top: "-translate-y-16",
  bottom: "translate-y-16",
};

// Slides + fades its children in from one side the first time they scroll into view.
export function Reveal({
  from,
  delay = 0,
  className = "",
  children,
}: {
  from: From;
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[transform,opacity,box-shadow] duration-700 ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        shown
          ? "translate-x-0 translate-y-0 opacity-100 shadow-[0_28px_60px_-18px_rgba(122,35,56,.55),0_0_0_1px_rgba(224,165,38,.25)]"
          : `${hidden[from]} opacity-0 shadow-none`
      } ${className}`}
    >
      {children}
    </div>
  );
}
