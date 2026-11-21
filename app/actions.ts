"use server";

import { eventTypes } from "@/lib/content";

export type CallbackState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "phone" | "type" | "date", string>>;
};

export async function requestCallback(
  _prev: CallbackState,
  formData: FormData,
): Promise<CallbackState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const type = String(formData.get("type") ?? "");
  const date = String(formData.get("date") ?? "");

  const errors: NonNullable<CallbackState["errors"]> = {};
  if (name.length < 2 || name.length > 100) errors.name = "Please enter your name.";
  if (!/^\+?[\d\s-]{7,16}$/.test(phone)) errors.phone = "Enter a valid phone number.";
  if (!(eventTypes as readonly string[]).includes(type)) errors.type = "Choose an event type.";
  if (date) {
    const d = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (Number.isNaN(d.getTime()) || d < today) errors.date = "Pick a date in the future.";
  }
  if (Object.keys(errors).length) {
    return { status: "error", errors, message: "Please fix the highlighted fields." };
  }

  // Deliver the enquiry. Set ENQUIRY_WEBHOOK_URL (e.g. Zapier, Make, or your backend).
  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  if (!webhook) {
    if (process.env.NODE_ENV === "development") {
      console.log("[dev] callback request:", { name, phone, type, date });
      return { status: "success", message: "Thanks! (dev mode: logged to the server console.)" };
    }
    return {
      status: "error",
      message: "We can't take requests online right now. Please use WhatsApp or call us.",
    };
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, type, date, source: "home-callback" }),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  } catch {
    return { status: "error", message: "Something went wrong. Please try again in a moment." };
  }

  return { status: "success", message: "Thank you! We'll call you back shortly." };
}
