"use client";

import { FormEvent, useEffect, useState } from "react";

const services = [
  "Roof Repair",
  "Roof Replacement",
  "Emergency Roof Repair",
  "Roof Inspection",
  "Residential Roofing",
  "Commercial Roofing",
  "Roof Maintenance",
  "Not Sure"
];

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  website: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
  website: ""
};

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

function formatPhone(value: string) {
  const digits = digitsOnly(value).slice(0, 10);

  if (digits.length <= 3) {
    return digits;
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  }

  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function validate(form: FormState) {
  const errors: FieldErrors = {};
  const phoneDigits = digitsOnly(form.phone);

  if (form.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  if (phoneDigits.length !== 10) {
    errors.phone = "Please enter a 10-digit phone number.";
  }

  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!form.service) {
    errors.service = "Please select a service.";
  }

  return errors;
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [formLoadTime, setFormLoadTime] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [submitError, setSubmitError] = useState("");
  const [successName, setSuccessName] = useState("");
  const [successPhone, setSuccessPhone] = useState("");

  useEffect(() => {
    setFormLoadTime(String(Date.now()));
  }, []);

  const isLoading = status === "loading";

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError("");

    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...form,
          formLoadTime,
          sourcePage: window.location.href
        })
      });
      const data = (await response.json()) as { success?: boolean; error?: string };

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Unable to send your request.");
      }

      setSuccessName(form.name.trim().split(/\s+/)[0] || "there");
      setSuccessPhone(form.phone);
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("idle");
      setSubmitError("Something went wrong - please try again or call 401-837-3779");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-green-200 bg-white p-6 text-center shadow-xl shadow-slate-900/8">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8 fill-none stroke-current stroke-[3]">
            <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-4 text-2xl font-black text-slate-950">We got your request, {successName}!</h3>
        <p className="mt-3 leading-7 text-slate-700">
          Danny will call or text you at {successPhone} within a few hours. For urgent help call 401-837-3779 directly.
        </p>
        <a
          href="tel:+14018373779"
          className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-orange-600 px-5 py-3 text-center text-base font-semibold text-white hover:bg-orange-700 sm:w-auto"
        >
          {"Call Now \u2014 401-837-3779"}
        </a>
      </div>
    );
  }

  return (
    <form
      className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/8 sm:p-6"
      name="roofing-estimate"
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={(event) => updateField("website", event.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <input type="hidden" name="formLoadTime" value={formLoadTime} />

      <label className="grid gap-2 text-sm font-semibold text-slate-800">
        Full Name
        <input
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          disabled={isLoading}
          onChange={(event) => updateField("name", event.target.value)}
          aria-invalid={Boolean(errors.name)}
          className="min-h-12 rounded-md border border-slate-300 px-3 py-3 font-normal text-slate-900 outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-200 disabled:bg-slate-100"
        />
        {errors.name ? <span className="text-sm font-semibold text-red-700">{errors.name}</span> : null}
      </label>

      <label className="grid gap-2 text-sm font-semibold text-slate-800">
        Phone Number
        <input
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={form.phone}
          disabled={isLoading}
          onChange={(event) => updateField("phone", formatPhone(event.target.value))}
          aria-invalid={Boolean(errors.phone)}
          className="min-h-12 rounded-md border border-slate-300 px-3 py-3 font-normal text-slate-900 outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-200 disabled:bg-slate-100"
        />
        {errors.phone ? <span className="text-sm font-semibold text-red-700">{errors.phone}</span> : null}
      </label>

      <label className="grid gap-2 text-sm font-semibold text-slate-800">
        {"Email (optional \u2014 for estimate follow-up)"}
        <input
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          value={form.email}
          disabled={isLoading}
          onChange={(event) => updateField("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
          className="min-h-12 rounded-md border border-slate-300 px-3 py-3 font-normal text-slate-900 outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-200 disabled:bg-slate-100"
        />
        {errors.email ? <span className="text-sm font-semibold text-red-700">{errors.email}</span> : null}
      </label>

      <label className="grid gap-2 text-sm font-semibold text-slate-800">
        Service Needed
        <select
          name="service"
          value={form.service}
          disabled={isLoading}
          onChange={(event) => updateField("service", event.target.value)}
          aria-invalid={Boolean(errors.service)}
          className="min-h-12 rounded-md border border-slate-300 bg-white px-3 py-3 font-normal text-slate-900 outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-200 disabled:bg-slate-100"
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        {errors.service ? <span className="text-sm font-semibold text-red-700">{errors.service}</span> : null}
      </label>

      <label className="grid gap-2 text-sm font-semibold text-slate-800">
        Message
        <textarea
          name="message"
          rows={4}
          placeholder={"Describe what's happening with your roof \u2014 any details help us prepare"}
          value={form.message}
          disabled={isLoading}
          onChange={(event) => updateField("message", event.target.value)}
          className="min-h-28 resize-none rounded-md border border-slate-300 px-3 py-3 font-normal text-slate-900 outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-200 disabled:bg-slate-100"
        />
      </label>

      {submitError ? (
        <div className="flex items-start justify-between gap-3 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800" role="alert">
          <span>{submitError}</span>
          <button type="button" onClick={() => setSubmitError("")} className="min-h-8 min-w-8 text-lg leading-none" aria-label="Dismiss error">
            {"\u00d7"}
          </button>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isLoading}
        className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-md bg-[#1a6f3c] px-5 py-3 text-base font-semibold text-white transition hover:bg-[#155c32] disabled:cursor-not-allowed disabled:opacity-75"
      >
        {isLoading ? (
          <>
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />
            Sending...
          </>
        ) : (
          "Send My Free Estimate Request"
        )}
      </button>

      <p className="text-center text-sm leading-6 text-slate-500">
        Or call/text us directly:{" "}
        <a href="tel:+14018373779" className="font-bold text-orange-700 hover:text-orange-800">
          401-837-3779
        </a>
      </p>
    </form>
  );
}
