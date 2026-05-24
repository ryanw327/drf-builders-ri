import { NextResponse } from "next/server";
import { Resend } from "resend";

type LeadPayload = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
  website?: string;
  formLoadTime?: number | string;
  sourcePage?: string;
};

const phoneDigits = (value: string) => value.replace(/\D/g, "");

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatSubmittedAt() {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "America/New_York"
  }).format(new Date());
}

async function sendSms(message: string) {
  const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER, TWILIO_TO_NUMBER } = process.env;

  if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_FROM_NUMBER || !TWILIO_TO_NUMBER) {
    return;
  }

  const body = new URLSearchParams({
    From: TWILIO_FROM_NUMBER,
    To: TWILIO_TO_NUMBER,
    Body: message.slice(0, 160)
  });

  const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body
  });

  if (!response.ok) {
    console.error("Twilio SMS failed", await response.text());
  }
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as LeadPayload;
    const name = clean(payload.name);
    const phone = clean(payload.phone);
    const email = clean(payload.email);
    const service = clean(payload.service);
    const message = clean(payload.message);
    const website = clean(payload.website);
    const sourcePage = clean(payload.sourcePage) || request.headers.get("referer") || "drfbuildersri.com";
    const loadTime = Number(payload.formLoadTime);

    if (website || (loadTime && Date.now() - loadTime < 3000)) {
      return NextResponse.json({ success: true });
    }

    if (!name || !phone || !service) {
      return NextResponse.json({ error: "Name, phone, and service are required." }, { status: 400 });
    }

    const digits = phoneDigits(phone);
    if (name.length < 2 || digits.length !== 10 || !service) {
      return NextResponse.json({ error: "Please check the required fields and try again." }, { status: 400 });
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Email delivery is not configured." }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const submittedAt = formatSubmittedAt();
    const telHref = `tel:+1${digits}`;
    const from = process.env.CONTACT_FROM_EMAIL || "leads@drfbuildersri.com";
    const to = process.env.CONTACT_TO_EMAIL || "buildersdrf@gmail.com";

    const html = `
      <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.6">
        <h1 style="font-size:22px;margin:0 0 16px">New Roofing Lead</h1>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone:</strong> <a href="${telHref}">${escapeHtml(phone)}</a></p>
        <p><strong>Email:</strong> ${email ? escapeHtml(email) : "Not provided"}</p>
        <p><strong>Service:</strong> ${escapeHtml(service)}</p>
        <p><strong>Message:</strong><br />${escapeHtml(message || "No message provided.").replace(/\n/g, "<br />")}</p>
        <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)} ET</p>
        <p><strong>Source page:</strong> ${escapeHtml(sourcePage)}</p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from,
      to,
      subject: `New Roofing Lead \u2014 ${service} \u2014 ${name}`,
      html,
      replyTo: email || undefined
    });

    if (error) {
      console.error("Resend email failed", error);
      return NextResponse.json({ error: "Unable to send lead email." }, { status: 500 });
    }

    try {
      await sendSms(`New lead: ${name} | ${phone} | ${service} | drfbuildersri.com`);
    } catch (smsError) {
      console.error("Optional Twilio SMS failed", smsError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
