import { NextRequest, NextResponse } from "next/server";
import { getResend, getContactEmail } from "@/lib/mail";
import { rateLimit } from "@/lib/rate-limit";
import { isValidEmail, isNonEmpty, sanitize } from "@/lib/validation";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";

  if (!rateLimit(`contact:${ip}`, { maxRequests: 5, windowMs: 15 * 60_000 })) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: { name?: string; email?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!isNonEmpty(name, 200)) {
    return NextResponse.json({ error: "Please provide your name." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }
  if (!isNonEmpty(message, 5000)) {
    return NextResponse.json(
      { error: "Please provide a message (max 5000 characters)." },
      { status: 400 }
    );
  }

  try {
    const { error } = await getResend().emails.send({
      from: `Lovla <${process.env.FROM_EMAIL || "onboarding@resend.dev"}>`,
      to: [getContactEmail()],
      replyTo: email,
      subject: `Contact Form: ${sanitize(name)}`,
      html: [
        `<p><strong>Name:</strong> ${sanitize(name)}</p>`,
        `<p><strong>Email:</strong> ${sanitize(email)}</p>`,
        `<hr />`,
        `<p>${sanitize(message).replace(/\n/g, "<br />")}</p>`,
      ].join("\n"),
    });

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact email error:", err);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again." },
      { status: 500 }
    );
  }
}
