"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Award,
  BrainCircuit,
  CheckCircle2,
  FolderGit2,
  GraduationCap,
  Lightbulb,
  Target,
  Users,
  Rocket,
} from "lucide-react";
import { useState } from "react";

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Skillovant ?",
      answer:
        "Skillovant is a skill development platform designed to help learners build practical, industry-relevant skills through learning, practice, projects, and assessments. We aim to connect learning with real-world opportunities and career growth.",
    },
    {
      question: "Who can join Skillovant ?",
      answer:
        "Skillovant is built primarily for students and learners who want to develop their technical and professional skills. We also work with colleges and institutions to support structured, career-focused skill development.",
    },
    {
      question: "What programs does Skillovant currently focus on ?",
      answer:
        "Skillovant focuses on areas such as coding and programming, artificial intelligence, data and emerging technologies, problem-solving, and professional skills. Our programs are designed around practical learning and industry-relevant skills.",
    },
    {
      question: "How does Skillovant help students ?",
      answer:
        "Skillovant helps students turn learning into practical skills through guided learning, hands-on practice, projects, and assessments. It is designed to help learners understand their progress, strengthen their skills, and prepare for future academic and career opportunities.",
    },
    {
      question: "How can colleges work with Skillovant ?",
      answer:
        "Colleges can collaborate with Skillovant to provide students with skill-development programs, technical training, assessments, projects, workshops, and other career-focused learning initiatives.",
    },
    {
      question: "Are Skillovant programs online or offline ?",
      answer:
        "Skillovant supports flexible learning formats, including online and offline programs. The format may vary depending on the program and the requirements of the participating institution.",
    },
  ];

  return (
    <main>
      {/* =========================================================
          SECTION 1 — ABOUT HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#f8fcfd]">
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#9fe7f5]/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-[#429ebd]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="inline-flex rounded-full border border-[#429ebd]/20 bg-[#9fe7f5]/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#053f5c]">
                About Skillovant
              </span>

              <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-[#053f5c] sm:text-5xl lg:text-6xl">
                We Are Building the Future of
                <span className="block text-[#429ebd]">
                  Skill Development.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#647b88] sm:text-lg">
                Skillovant is a technology-driven skill development ecosystem
                focused on helping students learn meaningful technical skills,
                apply them through practical experiences, and continue growing
                toward their future.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#053f5c] px-6 py-3.5 text-sm font-bold !text-white transition-all hover:-translate-y-0.5 hover:bg-[#429ebd]"
                >
                  Explore Our Programs
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#dcecf1] bg-white px-6 py-3.5 text-sm font-bold !text-[#053f5c] transition-all hover:border-[#9fe7f5] hover:bg-[#9fe7f5]/20"
                >
                  Talk to Skillovant
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-8 rounded-full bg-[#9fe7f5]/30 blur-3xl" />

              <div className="relative rounded-[2rem] border border-[#dcecf1] bg-white p-7 shadow-xl shadow-[#053f5c]/5 sm:p-9">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#9fe7f5]/35 text-[#053f5c]">
                  <Lightbulb size={26} />
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-[#429ebd]">
                  Our Purpose
                </p>

                <h2 className="mt-3 text-2xl font-bold leading-tight text-[#053f5c] sm:text-3xl">
                  Turning Learning Into
                  <span className="block text-[#429ebd]">
                    Real Capability.
                  </span>
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#647b88] sm:text-base">
                  We believe meaningful skill development happens when
                  learners can understand concepts, practice them, build
                  something with them, and demonstrate what they can do.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["Learn", "Build", "Prove", "Grow"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#dcecf1] bg-[#f8fcfd] px-4 py-2 text-xs font-bold text-[#053f5c]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2 — WHO WE ARE
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-[#429ebd]/20 bg-[#9fe7f5]/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#053f5c]">
              Who We Are
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-[#053f5c] sm:text-5xl">
              More Than Learning.
              <span className="block text-[#429ebd]">
                A Journey Toward Capability.
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#647b88] sm:text-lg">
              Skillovant is being built to connect learning with practical
              application. Our approach brings together students,
              educational institutions, structured technical learning,
              practical projects, assessments, and continuous growth.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <div className="rounded-[1.75rem] border border-[#dcecf1] bg-[#f8fcfd] p-7 transition-all hover:-translate-y-1 hover:shadow-lg sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#9fe7f5]/35 text-[#053f5c]">
                <GraduationCap size={24} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#053f5c]">
                For Students
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#647b88]">
                Help students develop technical foundations, practice
                problem solving, work on practical projects, and continuously
                improve their capabilities.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-[#dcecf1] bg-[#f8fcfd] p-7 transition-all hover:-translate-y-1 hover:shadow-lg sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#9fe7f5]/35 text-[#053f5c]">
                <Target size={24} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#053f5c]">
                For Colleges
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#647b88]">
                Support educational institutions with structured technical
                training, assessments, practical learning, and student skill
                development initiatives.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-[#dcecf1] bg-[#f8fcfd] p-7 transition-all hover:-translate-y-1 hover:shadow-lg sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#9fe7f5]/35 text-[#053f5c]">
                <BrainCircuit size={24} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#053f5c]">
                Our Purpose
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#647b88]">
                Create a learning journey where knowledge can move beyond
                theory into practical ability, demonstrable work, and
                continuous growth.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-[2rem] border border-[#dcecf1] bg-[#053f5c] px-7 py-9 sm:px-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9fe7f5]">
                  The Skillovant Approach
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  Learn with purpose. Build with practice.
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                  Learn
                </span>

                <ArrowRight size={16} className="text-[#9fe7f5]" />

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                  Build
                </span>

                <ArrowRight size={16} className="text-[#9fe7f5]" />

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                  Grow
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* =========================================================
          SECTION 3 — OUR VISION
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#f8fcfd]">
        <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#9fe7f5]/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#429ebd]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
            {/* Vision Content */}
            <div>
              <span className="inline-flex rounded-full border border-[#429ebd]/20 bg-[#9fe7f5]/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#053f5c]">
                Our Vision
              </span>

              <h2 className="mt-5 max-w-2xl text-4xl font-bold tracking-tight text-[#053f5c] sm:text-5xl">
                Building a future where skills create
                <span className="block text-[#429ebd]">
                  opportunities.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#647b88] sm:text-lg">
                Skillovant envisions a world where learning goes beyond
                classrooms and certificates. We aim to create a connected
                ecosystem where students develop practical skills, gain
                real-world experience, demonstrate their capabilities, and
                become ready for meaningful opportunities.
              </p>

              <div className="mt-8">
                <p className="text-lg font-bold text-[#053f5c]">
                  From learning to capability.
                </p>
                <p className="mt-1 text-lg font-bold text-[#429ebd]">
                  From capability to opportunity.
                </p>
              </div>
            </div>
          </div>
            
            {/* Vision Ecosystem */}
      <div className="relative">
  <div className="absolute inset-6 rounded-full bg-[#9fe7f5]/30 blur-3xl" />

  <div className="relative rounded-[2rem] border border-[#dcecf1] bg-white p-5 shadow-xl shadow-[#053f5c]/5 sm:p-7 lg:p-9">
    
    {/* =====================================================
        MOBILE / TABLET VISION ECOSYSTEM
        ===================================================== */}
    <div className="relative mx-auto grid max-w-[360px] grid-cols-3 grid-rows-[auto_auto_auto_auto] items-center gap-x-3 gap-y-5 py-4 lg:hidden">
      
      {/* Learn */}
      <div className="col-start-2 row-start-1 flex justify-center">
        <div className="rounded-2xl border border-[#dcecf1] bg-[#f8fcfd] px-4 py-3 text-center shadow-sm">
          <p className="text-sm font-bold text-[#053f5c]">
            Learn
          </p>
          <p className="mt-1 text-xs text-[#647b88]">
            Build foundations
          </p>
        </div>
      </div>

      {/* Prove */}
      <div className="col-start-1 row-start-2 flex justify-center">
        <div className="rounded-2xl border border-[#dcecf1] bg-[#f8fcfd] px-4 py-3 text-center shadow-sm">
          <p className="text-sm font-bold text-[#053f5c]">
            Prove
          </p>
          <p className="mt-1 text-xs text-[#647b88]">
            Demonstrate skills
          </p>
        </div>
      </div>

      {/* Grow */}
      <div className="col-start-3 row-start-2 flex justify-center">
        <div className="rounded-2xl border border-[#dcecf1] bg-[#f8fcfd] px-4 py-3 text-center shadow-sm">
          <p className="text-sm font-bold text-[#053f5c]">
            Grow
          </p>
          <p className="mt-1 text-xs text-[#647b88]">
            Create opportunities
          </p>
        </div>
      </div>

      {/* Skillovant */}
      <div className="col-start-2 row-start-3 flex justify-center py-1">
        <div className="flex h-28 w-28 items-center justify-center rounded-full border-8 border-[#9fe7f5]/40 bg-[#053f5c] text-center shadow-xl shadow-[#053f5c]/15">
          <div>
            <p className="text-base font-bold text-white">
              Skillovant
            </p>
            <p className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-[#9fe7f5]">
              Vision
            </p>
          </div>
        </div>
      </div>

      {/* Build */}
      <div className="col-start-2 row-start-4 flex justify-center">
        <div className="rounded-2xl border border-[#dcecf1] bg-[#f8fcfd] px-4 py-3 text-center shadow-sm">
          <p className="text-sm font-bold text-[#053f5c]">
            Build
          </p>
          <p className="mt-1 text-xs text-[#647b88]">
            Create real work
          </p>
        </div>
      </div>
    </div>

    {/* =====================================================
        DESKTOP VISION ECOSYSTEM
        ===================================================== */}
    <div className="relative hidden min-h-[380px] items-center justify-center lg:flex">
      
      {/* Connecting Lines */}
      <div className="absolute left-1/2 top-[22%] h-[56%] w-px -translate-x-1/2 bg-[#9fe7f5]" />
      <div className="absolute left-[22%] top-1/2 h-px w-[56%] -translate-y-1/2 bg-[#9fe7f5]" />

      {/* Center */}
      <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full border-8 border-[#9fe7f5]/40 bg-[#053f5c] text-center shadow-xl shadow-[#053f5c]/15">
        <div>
          <p className="text-lg font-bold text-white">
            Skillovant
          </p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-[#9fe7f5]">
            Vision
          </p>
        </div>
      </div>

      {/* Learn */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-2xl border border-[#dcecf1] bg-[#f8fcfd] px-5 py-3 text-center shadow-sm">
        <p className="text-sm font-bold text-[#053f5c]">
          Learn
        </p>
        <p className="mt-1 text-xs text-[#647b88]">
          Build foundations
        </p>
      </div>

      {/* Build */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-2xl border border-[#dcecf1] bg-[#f8fcfd] px-5 py-3 text-center shadow-sm">
        <p className="text-sm font-bold text-[#053f5c]">
          Build
        </p>
        <p className="mt-1 text-xs text-[#647b88]">
          Create real work
        </p>
      </div>

      {/* Prove */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 rounded-2xl border border-[#dcecf1] bg-[#f8fcfd] px-5 py-3 text-center shadow-sm">
        <p className="text-sm font-bold text-[#053f5c]">
          Prove
        </p>
        <p className="mt-1 text-xs text-[#647b88]">
          Demonstrate skills
        </p>
      </div>

      {/* Grow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 rounded-2xl border border-[#dcecf1] bg-[#f8fcfd] px-5 py-3 text-center shadow-sm">
        <p className="text-sm font-bold text-[#053f5c]">
          Grow
        </p>
        <p className="mt-1 text-xs text-[#647b88]">
          Create opportunities
        </p>
      </div>
    </div>
  </div>
</div>
          {/* Vision Pillars */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Learn with Purpose",
                description:
                  "Build strong foundations through structured and practical learning.",
              },
              {
                title: "Build Real Capability",
                description:
                  "Turn knowledge into skills through projects and problem solving.",
              },
              {
                title: "Measure Progress",
                description:
                  "Make skill development visible through meaningful outcomes.",
              },
              {
                title: "Create Opportunities",
                description:
                  "Help capable learners move toward meaningful opportunities.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#dcecf1] bg-white p-6"
              >
                <h3 className="text-lg font-bold text-[#053f5c]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#647b88]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
            {/* =========================================================
          SECTION 4 — FREQUENTLY ASKED QUESTIONS
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="inline-flex rounded-full border border-[#429ebd]/20 bg-[#9fe7f5]/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#053f5c]">
              Frequently Asked Questions
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#053f5c] sm:text-4xl">
              Questions? We&apos;ve got
              <span className="text-[#429ebd]"> answers.</span>
            </h2>

            <p className="mt-5 text-base leading-6 text-[#647b88] sm:text-lg">
              Find answers to common questions about Skillovant, our
              programs, learning approach, and how students and institutions
              can get started.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition-all ${
                    isOpen
                      ? "border-[#9fe7f5] bg-[#f8fcfd]"
                      : "border-[#dcecf1] bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-7"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-[#053f5c] sm:text-lg">
                      {faq.question}
                    </span>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#9fe7f5]/30 text-[#053f5c]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#dcecf1] px-6 pb-6 pt-5 sm:px-7">
                      <p className="text-sm leading-7 text-[#647b88] sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
            {/* =========================================================
          SECTION 5 — BUILD WITH SKILLOVANT
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#053f5c]">
        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#9fe7f5]/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-[#429ebd]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-[#9fe7f5]/30 bg-[#9fe7f5]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#9fe7f5]">
              Build With Skillovant
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Build Skills.
              <span className="block text-[#9fe7f5]">
                Build Solutions.
              </span>
              <span className="block">
                Build Your Future.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Skillovant brings learning, practical experience, technology,
              and opportunities together in one connected ecosystem. Whether
              you are a student or an institution, there is a place to build
              with us.
            </p>
          </div>

          {/* Focus Areas */}
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {/* Students */}
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.07] p-7 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/[0.1] sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#9fe7f5]/15 text-[#9fe7f5]">
                <GraduationCap size={24} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                For Students
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/65">
                Learn practical skills, work on real projects, solve
                problems, and build capabilities that prepare you for the
                future.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Learn", "Practice", "Build"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-[#9fe7f5]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Institutions */}
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.07] p-7 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/[0.1] sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#9fe7f5]/15 text-[#9fe7f5]">
                <Target size={24} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                For Institutions
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/65">
                Create meaningful skill-development experiences through
                structured programs, practical learning, assessments, and
                measurable progress.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Develop", "Monitor", "Empower"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-[#9fe7f5]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Builders & Innovators */}
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.07] p-7 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/[0.1] sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#9fe7f5]/15 text-[#9fe7f5]">
                <Rocket size={24} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                For Builders & Innovators
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/65">
                Turn ideas into meaningful solutions, experiment with
                technology, and build things that create real-world value.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Innovate", "Create", "Solve"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-[#9fe7f5]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="mt-14 text-center">
            <p className="text-xl font-bold text-white sm:text-2xl">
              Learn.
              <span className="mx-2 text-[#9fe7f5]">Build.</span>
              Prove.
              <span className="mx-2 text-[#9fe7f5]">Grow.</span>
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#9fe7f5] px-6 py-3.5 text-sm font-bold !text-[#053f5c] transition-all hover:-translate-y-0.5 hover:bg-white"
              >
                Explore Programs
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold !text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
              >
                Partner With Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}