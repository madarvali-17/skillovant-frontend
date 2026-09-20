"use client";

import {
  ArrowRight,
  CheckCircle2,
  Coffee,
  User,
  Mail,
  Phone,
  Building2,
  GraduationCap,
  Code2,
  MessageSquare,
  Send,
} from "lucide-react";
import { FormEvent, useState } from "react";

export default function ProgramsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  const registrationData = {
    name: String(formData.get("name") || ""),
    email: String(formData.get("email") || ""),
    contactNumber: String(formData.get("contactNumber") || ""),
    college: String(formData.get("college") || ""),
    branch: String(formData.get("branch") || ""),
    program: String(formData.get("program") || ""),
  };

  try {
    const response = await fetch("/api/registrations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registrationData),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(
        result.message || "Registration could not be completed."
      );
    }

    setSubmitted(true);
    form.reset();
  } catch (error) {
    console.error("Registration submission error:", error);

    alert(
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again."
    );
  }
};

  return (
    <main>
      {/* ========================================================= */}
      {/* SECTION 1 — ONLINE SKILL PROGRAMS */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#f8fcfd]">
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#9fe7f5]/30 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-[#429ebd]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          {/* Section Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-[#429ebd]/20 bg-[#9fe7f5]/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#053f5c]">
              Online Skill Programs
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-[#053f5c] sm:text-5xl lg:text-6xl">
              Learn. Practice. Build.
              <span className="block text-[#429ebd]">
                With Skillovant.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#647b88] sm:text-lg">
              Build practical technical skills through structured online
              classes designed to help students understand concepts, practice
              consistently, and apply what they learn.
            </p>
          </div>

          {/* Program Cards */}
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {/* Python */}
            <div className="group rounded-[2rem] border border-[#dcecf1] bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#053f5c]/5 sm:p-9">
              <div className="flex items-start justify-between gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#9fe7f5]/35 text-[#053f5c]">
                  <Code2 size={28} />
                </div>

                <span className="rounded-full bg-[#9fe7f5]/20 px-3 py-1.5 text-xs font-bold text-[#053f5c]">
                  Python
                </span>
              </div>

              <h2 className="mt-7 text-2xl font-bold text-[#053f5c] sm:text-3xl">
                Python Skill Program
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#647b88] sm:text-base">
                Learn Python from the fundamentals and gradually build your
                programming and problem-solving abilities through practical
                exercises and projects.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Python Fundamentals",
                  "Problem Solving",
                  "Practical Programming",
                  "Hands-on Exercises",
                  "Mini Projects",
                  "Skill-focused Learning",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-[#429ebd]"
                    />

                    <span className="text-sm font-medium text-[#173042]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-[#dcecf1] pt-6">
                <p className="text-sm font-semibold text-[#053f5c]">
                  Build your programming foundation with Python.
                </p>
              </div>
            </div>

            {/* Java */}
            <div className="group rounded-[2rem] border border-[#dcecf1] bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#053f5c]/5 sm:p-9">
              <div className="flex items-start justify-between gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#9fe7f5]/35 text-[#053f5c]">
                  <Coffee size={28} />
                </div>

                <span className="rounded-full bg-[#9fe7f5]/20 px-3 py-1.5 text-xs font-bold text-[#053f5c]">
                  Java
                </span>
              </div>

              <h2 className="mt-7 text-2xl font-bold text-[#053f5c] sm:text-3xl">
                Java Skill Program
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#647b88] sm:text-base">
                Build a strong foundation in Java and object-oriented
                programming while developing practical programming and
                problem-solving skills.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Java Fundamentals",
                  "Object-Oriented Programming",
                  "Problem Solving",
                  "Practical Programming",
                  "Hands-on Exercises",
                  "Mini Projects",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-[#429ebd]"
                    />

                    <span className="text-sm font-medium text-[#173042]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-[#dcecf1] pt-6">
                <p className="text-sm font-semibold text-[#053f5c]">
                  Build your programming foundation with Java.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="mt-12 rounded-[1.75rem] border border-[#dcecf1] bg-white px-6 py-7 text-center shadow-sm sm:px-8">
            <p className="text-base font-semibold text-[#053f5c] sm:text-lg">
              Choose the skill you want to learn and become part of the
              Skillovant learning journey.
            </p>

            <div className="mt-4 flex justify-center">
              <ArrowRight size={22} className="text-[#429ebd]" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2 — JOIN SKILLOVANT */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#9fe7f5]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            {/* Left Content */}
            <div className="lg:sticky lg:top-28">
              <span className="inline-flex rounded-full border border-[#429ebd]/20 bg-[#9fe7f5]/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#053f5c]">
                Join Skillovant
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#053f5c] sm:text-4xl lg:text-5xl">
                Want to Be a Part of Skillovant?
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#647b88] sm:text-lg">
                Take the first step toward building your technical skills.
                Tell us about yourself and choose the skill you want to learn.
              </p>

              {/* Learning Journey Card */}
              <div className="mt-10 rounded-[2rem] bg-[#053f5c] p-7 text-white shadow-xl shadow-[#053f5c]/10 sm:p-8">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#9fe7f5]">
                  Your Learning Journey
                </p>

                <h3 className="mt-4 text-2xl font-bold">
                  Learn. Practice. Build.
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/70">
                  Join our online skill programs and take a structured step
                  toward developing practical technical capabilities.
                </p>

                <div className="mt-7 space-y-4">
                  {[
                    "Choose your skill",
                    "Join online classes",
                    "Practice consistently",
                    "Build practical projects",
                  ].map((item, index) => (
                    <div key={item} className="flex items-center gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#9fe7f5]/20 text-sm font-bold text-[#9fe7f5]">
                        {index + 1}
                      </div>

                      <span className="text-sm font-medium text-white/90">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="rounded-[2rem] border border-[#dcecf1] bg-[#f8fcfd] p-6 shadow-sm sm:p-8 lg:p-10">
              {submitted ? (
                <div className="flex min-h-[560px] flex-col items-center justify-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#9fe7f5]/30 text-[#429ebd]">
                    <CheckCircle2 size={42} />
                  </div>

                  <h3 className="mt-7 text-2xl font-bold text-[#053f5c] sm:text-3xl">
                    Registration Submitted Successfully!
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-[#647b88] sm:text-base">
                    Thank you for your interest in Skillovant. Our team will
                    get in touch with you regarding the online classes.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-[#053f5c] sm:text-3xl">
                      Student Registration
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#647b88]">
                      Fill in your details and register for your preferred
                      online skill program.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold text-[#173042]"
                      >
                        Full Name
                      </label>

                      <div className="relative">
                        <User
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#429ebd]"
                        />

                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Enter your full name"
                          className="w-full rounded-xl border border-[#dcecf1] bg-white py-3.5 pl-11 pr-4 text-sm text-[#173042] outline-none transition focus:border-[#429ebd] focus:ring-4 focus:ring-[#9fe7f5]/20"
                        />
                      </div>
                    </div>

                    {/* Email + Contact */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-semibold text-[#173042]"
                        >
                          Email Address
                        </label>

                        <div className="relative">
                          <Mail
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#429ebd]"
                          />

                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="Enter your email"
                            className="w-full rounded-xl border border-[#dcecf1] bg-white py-3.5 pl-11 pr-4 text-sm text-[#173042] outline-none transition focus:border-[#429ebd] focus:ring-4 focus:ring-[#9fe7f5]/20"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="contactNumber"
                          className="mb-2 block text-sm font-semibold text-[#173042]"
                        >
                          Contact Number
                        </label>

                        <div className="relative">
                          <Phone
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#429ebd]"
                          />

                          <input
                            id="contactNumber"
                            name="contactNumber"
                            type="tel"
                            required
                            placeholder="Enter contact number"
                            className="w-full rounded-xl border border-[#dcecf1] bg-white py-3.5 pl-11 pr-4 text-sm text-[#173042] outline-none transition focus:border-[#429ebd] focus:ring-4 focus:ring-[#9fe7f5]/20"
                          />
                        </div>
                      </div>
                    </div>

                    {/* College */}
                    <div>
                      <label
                        htmlFor="college"
                        className="mb-2 block text-sm font-semibold text-[#173042]"
                      >
                        College
                      </label>

                      <div className="relative">
                        <Building2
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#429ebd]"
                        />

                        <input
                          id="college"
                          name="college"
                          type="text"
                          required
                          placeholder="Enter your college name"
                          className="w-full rounded-xl border border-[#dcecf1] bg-white py-3.5 pl-11 pr-4 text-sm text-[#173042] outline-none transition focus:border-[#429ebd] focus:ring-4 focus:ring-[#9fe7f5]/20"
                        />
                      </div>
                    </div>

                    {/* Branch */}
                    <div>
                      <label
                        htmlFor="branch"
                        className="mb-2 block text-sm font-semibold text-[#173042]"
                      >
                        Branch
                      </label>

                      <div className="relative">
                        <GraduationCap
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#429ebd]"
                        />

                        <input
                          id="branch"
                          name="branch"
                          type="text"
                          required
                          placeholder="Example: CSE, ECE, AIML"
                          className="w-full rounded-xl border border-[#dcecf1] bg-white py-3.5 pl-11 pr-4 text-sm text-[#173042] outline-none transition focus:border-[#429ebd] focus:ring-4 focus:ring-[#9fe7f5]/20"
                        />
                      </div>
                    </div>

                    {/* Program */}
                    <div>
                      <label
                        htmlFor="program"
                        className="mb-2 block text-sm font-semibold text-[#173042]"
                      >
                        Interested to Learn
                      </label>

                      <div className="relative">
                        <Code2
                          size={18}
                          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#429ebd]"
                        />

                        <select
                          id="program"
                          name="program"
                          required
                          defaultValue=""
                          className="w-full appearance-none rounded-xl border border-[#dcecf1] bg-white py-3.5 pl-11 pr-4 text-sm text-[#173042] outline-none transition focus:border-[#429ebd] focus:ring-4 focus:ring-[#9fe7f5]/20"
                        >
                          <option value="" disabled>
                            Select a program
                          </option>
                          <option value="Python">Python</option>
                          <option value="Java">Java</option>
                        </select>
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#053f5c] px-6 py-4 text-sm font-bold !text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#429ebd] hover:shadow-lg"
                    >
                      Register for Classes
                      <Send size={17} />
                    </button>

                    <p className="text-center text-xs leading-5 text-[#647b88]">
                      By submitting this form, you are expressing your
                      interest in joining a Skillovant online skill program.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}