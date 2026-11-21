"use client";

import { useActionState } from "react";
import { requestCallback, type CallbackState } from "@/app/actions";
import { eventTypes } from "@/lib/content";

const initial: CallbackState = { status: "idle" };

const fieldClass =
  "h-12 border border-[#8a7f8c] bg-white px-3.5 font-[inherit] text-ink";

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-sm text-[#c0264b]">
          {error}
        </p>
      )}
    </div>
  );
}

export function CallbackForm() {
  const [state, action, pending] = useActionState(requestCallback, initial);
  const e = state.errors ?? {};

  return (
    <form
      action={action}
      noValidate
      className="flex flex-col gap-5 bg-cream p-[clamp(24px,4vw,40px)] text-ink"
    >
      <h3 className="font-serif text-[28px] font-light">Prefer a call back?</h3>
      <p className="-mt-2 text-[15px] text-muted">Leave your number and we will call you.</p>

      <Field id="evt-name" label="Your name" error={e.name}>
        <input
          id="evt-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Full name"
          required
          aria-invalid={!!e.name}
          aria-describedby={e.name ? "evt-name-error" : undefined}
          className={fieldClass}
        />
      </Field>

      <Field id="evt-phone" label="Phone number" error={e.phone}>
        <input
          id="evt-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+00 00000 00000"
          required
          aria-invalid={!!e.phone}
          aria-describedby={e.phone ? "evt-phone-error" : undefined}
          className={fieldClass}
        />
      </Field>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-5">
        <Field id="evt-type" label="Event type" error={e.type}>
          <select id="evt-type" name="type" className={fieldClass} defaultValue={eventTypes[0]}>
            {eventTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Field>
        <Field id="evt-date" label="Event date" error={e.date}>
          <input id="evt-date" name="date" type="date" className={fieldClass} />
        </Field>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="h-[54px] cursor-pointer bg-gold text-[12px] font-semibold uppercase tracking-[.24em] text-ink hover:bg-ink hover:text-cream disabled:opacity-60"
      >
        {pending ? "Sending…" : "Request a call back"}
      </button>

      <p
        role="status"
        aria-live="polite"
        className={`text-sm ${state.status === "success" ? "text-[#067647]" : "text-[#c0264b]"}`}
      >
        {state.message}
      </p>
    </form>
  );
}
