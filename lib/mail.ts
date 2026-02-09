import { Resend } from "resend";

let resend: Resend | null = null;

export function getResend() {
  if (resend) return resend;
  resend = new Resend(process.env.RESEND_API_KEY);
  return resend;
}

export function getContactEmail() {
  return process.env.CONTACT_EMAIL || "info@benekan.com";
}
