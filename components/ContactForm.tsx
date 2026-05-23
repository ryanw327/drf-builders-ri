"use client";

import type { FormEvent } from "react";

const services = [
  "Roof Repair",
  "Roof Replacement",
  "Emergency Roof Repair",
  "Roof Inspection",
  "Residential Roofing",
  "Commercial Roofing",
  "Roof Maintenance"
];

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString() ?? "";
    const phone = formData.get("phone")?.toString() ?? "";
    const email = formData.get("email")?.toString() ?? "";
    const service = formData.get("service")?.toString() ?? "";
    const message = formData.get("message")?.toString() ?? "";

    const subject = `Roofing estimate request from ${name || "website visitor"}`;
    const body = [
      "New estimate request from drfbuildersri.com",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Service Needed: ${service}`,
      "",
      "Message:",
      message
    ].join("\n");

    window.location.href = `mailto:buildersdrf@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/8 sm:p-6"
      name="roofing-estimate"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Name
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            className="rounded-md border border-slate-300 px-3 py-3 font-normal text-slate-900 outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-200"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Phone
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            className="rounded-md border border-slate-300 px-3 py-3 font-normal text-slate-900 outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-200"
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            className="rounded-md border border-slate-300 px-3 py-3 font-normal text-slate-900 outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-200"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Service Needed
          <select
            name="service"
            required
            className="rounded-md border border-slate-300 bg-white px-3 py-3 font-normal text-slate-900 outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-200"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-slate-800">
        Message
        <textarea
          name="message"
          rows={5}
          required
          className="resize-none rounded-md border border-slate-300 px-3 py-3 font-normal text-slate-900 outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-200"
        />
      </label>
      <button
        type="submit"
        className="rounded-md bg-orange-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
      >
        Request Free Estimate
      </button>
      <p className="text-xs leading-5 text-slate-500">
        This form opens your email app so you can send the request directly. For immediate help, call 401-837-3779.
      </p>
    </form>
  );
}
