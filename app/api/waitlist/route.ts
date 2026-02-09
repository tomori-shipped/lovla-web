import { NextRequest, NextResponse } from "next/server";
import { getResend, getContactEmail } from "@/lib/mail";
import { rateLimit } from "@/lib/rate-limit";
import { isValidEmail } from "@/lib/validation";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";

  if (!rateLimit(`waitlist:${ip}`, { maxRequests: 3, windowMs: 15 * 60_000 })) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: { email?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = body.email?.trim();

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  try {
    const { error } = await getResend().emails.send({
      from: `Lovla <${process.env.FROM_EMAIL || "onboarding@resend.dev"}>`,
      to: [getContactEmail()],
      subject: "New Android Waitlist Signup",
      html: `<p>A new user has joined the Android waitlist:</p><p><strong>${email}</strong></p>`,
    });

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Waitlist email error:", err);
    return NextResponse.json(
      { error: "Failed to process your request. Please try again." },
      { status: 500 }
    );
  }
}
