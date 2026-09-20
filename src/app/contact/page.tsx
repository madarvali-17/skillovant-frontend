"use client";

import {
  ArrowRight,
  Mail,
  MessageCircle,
  Phone,
  Users,
} from "lucide-react";
import { FormEvent, useState } from "react";

function InstagramIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#429EBD]"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function LinkedinIcon() {
  
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#429EBD]"
    >
      <path
        d="M6 9V18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 6.5V6.6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M10 18V9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10 13C10 10.8 11.2 9 13.5 9C16 9 17 10.8 17 13V18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const contactData = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      contactNumber: String(formData.get("contactNumber") || ""),
      organization: String(formData.get("organization") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
    };

    setSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Your message could not be submitted."
        );
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Contact form submission error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f4fdff] via-white to-white">
        {/* Background decorations */}
        <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#9FE7F5]/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#429EBD]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 sm:pb-24 sm:pt-24 lg:px-8 lg:pb-28 lg:pt-28">
          <div className="mx-auto max-w-4xl text-center">
            {/* Label */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#9FE7F5] bg-white px-4 py-2 shadow-sm">
              <MessageCircle
                size={15}
                className="text-[#429EBD]"
                strokeWidth={2.5}
              />

              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#429EBD]">
                Let&apos;s Connect
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-[#053F5C] sm:text-5xl lg:text-6xl">
              Let&apos;s Build Something{" "}
              <span className="text-[#429EBD]">Meaningful</span> Together.
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#647B88] sm:text-lg">
              Whether you&apos;re a student looking to learn, a college
              exploring new opportunities, or an organization interested in
              collaboration, we&apos;d love to hear from you.
            </p>

            {/* Quick connection points */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#contact-form"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#fafcfc] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(5,63,92,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#429EBD]"
              >
                Send Us a Message

                <ArrowRight
                  size={17}
                  strokeWidth={3}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="mailto:admin@skillovant.com"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#dcecf1] bg-white px-6 py-3.5 text-sm font-bold text-[#053F5C] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9FE7F5] hover:bg-[#f4fdff]"
              >
                <Mail size={17} className="text-[#429EBD]" />
                Email Us
              </a>
            </div>
          </div>

          {/* Connection cards */}
          <div className="mx-auto mt-16 grid max-w-5xl gap-5 md:grid-cols-3">
            {/* Students */}
            <div className="group rounded-2xl border border-[#dcecf1] bg-white p-6 shadow-[0_8px_30px_rgba(5,63,92,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#9FE7F5] hover:shadow-[0_14px_35px_rgba(5,63,92,0.08)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eafafd]">
                <Users size={21} className="text-[#429EBD]" />
              </div>

              <h2 className="mt-5 text-lg font-bold text-[#053F5C]">
                Students
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#647B88]">
                Have questions about our programs, classes, or learning
                journey? We&apos;re here to help.
              </p>
            </div>

            {/* Colleges */}
            <div className="group rounded-2xl border border-[#dcecf1] bg-white p-6 shadow-[0_8px_30px_rgba(5,63,92,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#9FE7F5] hover:shadow-[0_14px_35px_rgba(5,63,92,0.08)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eafafd]">
                <MessageCircle size={21} className="text-[#429EBD]" />
              </div>

              <h2 className="mt-5 text-lg font-bold text-[#053F5C]">
                Colleges &amp; Institutions
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#647B88]">
                Interested in bringing Skillovant programs and industry-focused
                learning to your institution?
              </p>
            </div>

            {/* Partnerships */}
            <div className="group rounded-2xl border border-[#dcecf1] bg-white p-6 shadow-[0_8px_30px_rgba(5,63,92,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#9FE7F5] hover:shadow-[0_14px_35px_rgba(5,63,92,0.08)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eafafd]">
                <ArrowRight size={21} className="text-[#429EBD]" />
              </div>

              <h2 className="mt-5 text-lg font-bold text-[#053F5C]">
                Partnerships
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#647B88]">
                Looking to collaborate with Skillovant on training, projects,
                events, or initiatives?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
<section
  id="contact-form"
  className="border-t border-[#dcecf1] bg-white"
>
  <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
    <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
      {/* Left Content */}
<div>
  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#429EBD]">
    Get In Touch
  </span>

  <h2 className="mt-4 max-w-lg text-3xl font-extrabold leading-tight tracking-[-0.03em] text-[#053F5C] sm:text-4xl">
    Have a Question?
    <br />
    <span className="text-[#429EBD]">Let&apos;s Talk.</span>
  </h2>

  <p className="mt-5 max-w-md text-base leading-7 text-[#647B88]">
    Have a question about Skillovant, our programs, or a possible
    collaboration? Send us a message and our team will get back to you.
  </p>

  {/* Contact Details */}
  <div className="mt-8 space-y-3">
    {/* Email */}
    <div className="flex items-center gap-4 rounded-2xl border border-[#dcecf1] bg-[#f8fdff] p-4 transition-all duration-300 hover:border-[#9FE7F5] hover:shadow-sm">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eafafd]">
        <Mail size={19} className="text-[#429EBD]" />
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#429EBD]">
          Email
        </p>

        <p className="mt-1 text-sm font-semibold text-[#053F5C]">
          admin@skillovant.com
        </p>
      </div>
    </div>

    {/* Instagram */}
    <div className="flex items-center gap-4 rounded-2xl border border-[#dcecf1] bg-[#f8fdff] p-4 transition-all duration-300 hover:border-[#9FE7F5] hover:shadow-sm">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eafafd]">
        <InstagramIcon />
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#429EBD]">
          Instagram
        </p>

        <p className="mt-1 text-sm font-semibold text-[#053F5C]">
          @skillovant
        </p>
      </div>
    </div>

    {/* LinkedIn */}
    <div className="flex items-center gap-4 rounded-2xl border border-[#dcecf1] bg-[#f8fdff] p-4 transition-all duration-300 hover:border-[#9FE7F5] hover:shadow-sm">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eafafd]">
        <LinkedinIcon />
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#429EBD]">
          LinkedIn
        </p>

        <p className="mt-1 text-sm font-semibold text-[#053F5C]">
          Skillovant
        </p>
      </div>
    </div>

    {/* Mobile Numbers */}
    <div className="rounded-2xl border border-[#dcecf1] bg-[#f8fdff] p-4 transition-all duration-300 hover:border-[#9FE7F5] hover:shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eafafd]">
          <Phone size={19} className="text-[#429EBD]" />
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#429EBD]">
            Mobile
          </p>

          <div className="mt-1 space-y-0.5">
            <p className="text-sm font-semibold text-[#053F5C]">
              +91 XXXXX XXXXX
            </p>

            <p className="text-sm font-semibold text-[#053F5C]">
              +91 XXXXX XXXXX
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Response Note */}
  <div className="mt-6 rounded-2xl bg-gradient-to-r from-[#eafafd] to-[#f6fdff] p-5">
    <p className="text-sm font-bold text-[#053F5C]">
      Let&apos;s start a conversation.
    </p>

    <p className="mt-1 text-sm leading-6 text-[#647B88]">
      Whether it&apos;s learning, collaboration, or an idea you want to
      explore, we&apos;re happy to hear from you.
    </p>
  </div>
</div>

      {/* Form */}
      <div className="rounded-3xl border border-[#dcecf1] bg-white p-6 shadow-[0_12px_40px_rgba(5,63,92,0.06)] sm:p-8">
        <div className="mb-7">
          <h3 className="text-xl font-bold text-[#053F5C]">
            Send Us a Message
          </h3>

          <p className="mt-1.5 text-sm text-[#647B88]">
            Fill in the details below and tell us how we can help.
          </p>
        </div>

          <form onSubmit={handleSubmit} className="space-y-5">          {/* Name + Email */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-sm font-semibold text-[#053F5C]"
              >
                Full Name
              </label>

              <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Your name"
              required
              className="w-full rounded-xl border border-[#dcecf1] bg-[#fbfeff] px-4 py-3 text-sm text-[#053F5C] outline-none transition focus:border-[#429EBD] focus:ring-2 focus:ring-[#9FE7F5]/40"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm font-semibold text-[#053F5C]"
              >
                Email Address
              </label>

              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-[#dcecf1] bg-[#fbfeff] px-4 py-3 text-sm text-[#053F5C] outline-none transition focus:border-[#429EBD] focus:ring-2 focus:ring-[#9FE7F5]/40"
              />
            </div>
          </div>

          {/* Contact + Organization */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-number"
                className="mb-2 block text-sm font-semibold text-[#053F5C]"
              >
                Contact Number
              </label>

              <input
                id="contact-number"
                name="contactNumber"
                type="tel"
                placeholder="Your contact number"
                required
                className="w-full rounded-xl border border-[#dcecf1] bg-[#fbfeff] px-4 py-3 text-sm text-[#053F5C] outline-none transition focus:border-[#429EBD] focus:ring-2 focus:ring-[#9FE7F5]/40"
              />
            </div>

            <div>
              <label
                htmlFor="contact-organization"
                className="mb-2 block text-sm font-semibold text-[#053F5C]"
              >
                Organization / College
              </label>

              <input
                id="contact-organization"
                name="organization"
                type="text"
                placeholder="Optional"
                className="w-full rounded-xl border border-[#dcecf1] bg-[#fbfeff] px-4 py-3 text-sm text-[#053F5C] outline-none transition focus:border-[#429EBD] focus:ring-2 focus:ring-[#9FE7F5]/40"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="contact-subject"
              className="mb-2 block text-sm font-semibold text-[#053F5C]"
            >
              Subject
            </label>

            <input
              id="contact-subject"
              name="subject"
              type="text"
              placeholder="What would you like to discuss?"
              required
              className="w-full rounded-xl border border-[#dcecf1] bg-[#fbfeff] px-4 py-3 text-sm text-[#053F5C] outline-none transition focus:border-[#429EBD] focus:ring-2 focus:ring-[#9FE7F5]/40"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="contact-message"
              className="mb-2 block text-sm font-semibold text-[#053F5C]"
            >
              Message
            </label>

            <textarea
              id="contact-message"
              name = "message"
              rows={5}
              required
              placeholder="Tell us a little about what you need..."
              className="w-full resize-none rounded-xl border border-[#dcecf1] bg-[#fbfeff] px-4 py-3 text-sm text-[#053F5C] outline-none transition focus:border-[#429EBD] focus:ring-2 focus:ring-[#9FE7F5]/40"
            />
          </div>

          {/* Submit */}
          <button
          type="submit"
          disabled={submitting}
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#053F5C] px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#429EBD] hover:shadow-[0_10px_25px_rgba(66,158,189,0.2)] disabled:cursor-not-allowed disabled:opacity-60"
          >
  {submitting ? "Sending..." : "Send Message"}

  {!submitting && (
    <ArrowRight
      size={17}
      strokeWidth={2.5}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  )}
</button>
        </form>
        {submitted && (
  <div className="mt-5 rounded-2xl border border-[#bfeaf2] bg-[#f1fcfe] p-4">
    <p className="text-sm font-bold text-[#053F5C]">
      Message Sent Successfully! 🎉
    </p>

    <p className="mt-1 text-sm leading-6 text-[#647B88]">
      Thank you for reaching out to Skillovant. Our team will get in touch
      with you soon.
    </p>
  </div>
)}
      </div>
    </div>
  </div>
</section>
    </main>
  );
}