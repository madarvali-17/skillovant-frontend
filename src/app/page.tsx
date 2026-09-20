import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Code2,
  Diamond,
  GraduationCap,
  MoveUpRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <main>
      {/* =========================================================
          SECTION 1 — HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute left-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-[#9fe7f5]/25 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8 lg:pb-20 lg:pt-24">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            {/* Left Content */}
            <div>
              <span className="inline-flex rounded-full border border-[#429ebd]/30 bg-[#9fe7f5]/20 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.10em] text-[#053f5c] sm:px-5 sm:text-xs">
                Skill Development Platform
              </span>

              <h1 className="mt-7 max-w-2xl text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-[#053f5c] sm:mt-9 sm:text-6xl">
                Empowering
                <br />
                Skills.
                <span className="block text-[#429ebd]">
                  Building
                  <br />
                  Futures.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-6 text-[#36566a] sm:mt-9 sm:text-lg">
                Skillovant connects students and colleges through live
                training, assessments, real-world projects, coding practice,
                AI-powered learning, and certifications — all in one connected
                skill-development ecosystem.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#053f5c] px-7 py-4 text-sm font-bold !text-white shadow-md shadow-[#053f5c]/10 transition-all hover:-translate-y-0.5 hover:bg-[#429ebd]"
                >
                  Explore Skillovant
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#429ebd] bg-white px-7 py-4 text-sm font-bold !text-[#053f5c] transition-all hover:bg-[#9fe7f5]/20"
                >
                  Partner With Us
                </Link>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-4 sm:mt-12 sm:gap-x-10">
                {[
                  "Practical Learning",
                  "Real Projects",
                  "AI-Powered Support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm font-medium text-[#173f58]"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#9fe7f5] text-[#053f5c]">
                      <Check size={16} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="absolute inset-8 rounded-full bg-[#9fe7f5]/35 blur-3xl" />

              <div className="relative rounded-[2rem] border-[12px] border-[#9fe7f5]/45 bg-white shadow-[0_25px_70px_rgba(5,63,92,0.08)] sm:rounded-[2.5rem] sm:border-[18px]">
                <div className="rounded-[1.35rem] bg-gradient-to-br from-white via-white to-[#e8f9fc] px-5 pb-6 pt-6 sm:rounded-[1.6rem] sm:px-10 sm:pb-8 sm:pt-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#429ebd] sm:text-xs">
                        One Connected Ecosystem
                      </p>

                      <h2 className="mt-4 max-w-md text-xl font-bold leading-tight text-[#053f5c] sm:mt-5 sm:text-3xl">
                        Turn learning into
                        <span className="block">
                          real-world capability.
                        </span>
                      </h2>
                    </div>

                    <div className="relative h-12 w-12 shrink-0 sm:h-15 sm:w-15">
                      <Image
                        src="/skillovate-logo.jpeg"
                        alt="Skillovant"
                        fill
                        className="object-contain"
                        sizes="60px"
                      />
                    </div>
                  </div>

                  {/* =====================================================
                      MOBILE ECOSYSTEM
                      No absolute positioning.
                      Prevents overlap on phones.
                  ====================================================== */}
                  {/* =====================================================
    MOBILE ECOSYSTEM
    Clean mobile journey layout
====================================================== */}
<div className="mx-auto mt-8 grid max-w-[340px] grid-cols-3 grid-rows-[auto_auto_auto_auto] items-center gap-x-3 gap-y-4 sm:mt-10 sm:gap-x-4 sm:gap-y-5 lg:hidden">

  {/* Learn — Row 1, Center */}
  <div className="col-start-2 row-start-1 flex justify-center">
    <div className="w-full rounded-2xl border border-[#9fe7f5] bg-white px-3 py-3 shadow-md sm:px-5 sm:py-4">
      <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-[#053f5c] sm:text-sm">
        <GraduationCap
          size={16}
          className="shrink-0 text-[#429ebd]"
        />
        Learn
      </div>
    </div>
  </div>

  {/* Evaluate — Row 2, Left */}
  <div className="col-start-1 row-start-2 flex justify-center">
    <div className="w-full rounded-2xl border border-[#9fe7f5] bg-white px-2 py-3 shadow-md sm:px-5 sm:py-4">
      <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-[#053f5c] sm:text-sm">
        <Check
          size={16}
          className="shrink-0 text-[#429ebd]"
        />
        Evaluate
      </div>
    </div>
  </div>

  {/* Practice — Row 2, Right */}
  <div className="col-start-3 row-start-2 flex justify-center">
    <div className="w-full rounded-2xl border border-[#9fe7f5] bg-white px-2 py-3 shadow-md sm:px-5 sm:py-4">
      <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-[#053f5c] sm:text-sm">
        <Code2
          size={16}
          className="shrink-0 text-[#429ebd]"
        />
        Practice
      </div>
    </div>
  </div>

  {/* Skillovant — Row 3, Center */}
  <div className="col-start-2 row-start-3 flex justify-center py-1">
    <div className="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-[#053f5c] text-xs font-bold text-white shadow-xl sm:h-24 sm:w-24 sm:text-sm">
      Skillovant
    </div>
  </div>

  {/* Build — Row 4, Center */}
  <div className="col-start-2 row-start-4 flex justify-center">
    <div className="w-full rounded-2xl border border-[#9fe7f5] bg-white px-3 py-3 shadow-md sm:px-5 sm:py-4">
      <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-[#053f5c] sm:text-sm">
        <Diamond
          size={16}
          className="shrink-0 text-[#429ebd]"
        />
        Build
      </div>
    </div>
  </div>
</div>
                  {/* =====================================================
                      DESKTOP ECOSYSTEM
                      Existing desktop composition preserved.
                  ====================================================== */}
                  <div className="relative mx-auto mt-12 hidden h-[245px] max-w-[520px] lg:block">
                    <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#053f5c] text-sm font-bold text-white shadow-xl">
                      Skillovant
                    </div>

                    <div className="absolute left-1/2 top-0 -translate-x-1/2">
                      <div className="rounded-2xl border border-[#9fe7f5] bg-white px-6 py-4 shadow-md">
                        <div className="flex items-center gap-2 text-sm font-bold text-[#053f5c]">
                          <GraduationCap
                            size={17}
                            className="text-[#429ebd]"
                          />
                          Learn
                        </div>
                      </div>
                    </div>

                    <div className="absolute right-0 top-1/2 -translate-y-1/2">
                      <div className="rounded-2xl border border-[#9fe7f5] bg-white px-6 py-4 shadow-md">
                        <div className="flex items-center gap-2 text-sm font-bold text-[#053f5c]">
                          <Code2 size={17} className="text-[#429ebd]" />
                          Practice
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                      <div className="rounded-2xl border border-[#9fe7f5] bg-white px-6 py-4 shadow-md">
                        <div className="flex items-center gap-2 text-sm font-bold text-[#053f5c]">
                          <Diamond size={17} className="text-[#429ebd]" />
                          Build
                        </div>
                      </div>
                    </div>

                    <div className="absolute left-0 top-1/2 -translate-y-1/2">
                      <div className="rounded-2xl border border-[#9fe7f5] bg-white px-6 py-4 shadow-md">
                        <div className="flex items-center gap-2 text-sm font-bold text-[#053f5c]">
                          <Check size={17} className="text-[#429ebd]" />
                          Evaluate
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Journey Card */}
                  <div className="mt-7 rounded-2xl bg-[#053f5c] px-5 py-5 sm:mt-8 sm:px-6">
                    <p className="text-xs text-[#9fe7f5]">
                      The journey continues
                    </p>

                    <div className="mt-2 flex items-center justify-between gap-4">
                      <p className="text-sm font-bold text-white sm:text-base">
                        Learn. Practice. Build. Grow.
                      </p>

                      <MoveUpRight
                        size={20}
                        className="shrink-0 text-[#9fe7f5]"
                      />
                    </div>
                  </div>

                  {/* Future Card */}
                  <div className="mt-4 w-full rounded-2xl border border-[#dcecf1] bg-white px-5 py-4 shadow-lg sm:mt-[-1px] sm:ml-[-60px] sm:max-w-[275px] sm:px-6">
                    <p className="text-xs text-[#429ebd]">
                      Your future starts
                    </p>

                    <p className="mt-1 text-sm font-bold text-[#053f5c]">
                      with the skills you build today.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2 — COMPLETE SKILL JOURNEY
      ========================================================= */}
      <section className="bg-[#e9f8fb]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#429ebd]">
              What Skillovant Does
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#053f5c] sm:text-4xl">
              Your Complete Skill Journey
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#36566a] sm:text-lg">
              From your first learning experience to real-world application,
              Skillovant brings every important stage of skill development
              together.
            </p>
          </div>

          <div className="relative mt-12 sm:mt-16">
            <div className="absolute left-[8%] right-[8%] top-10 hidden h-px bg-[#8ed7e8] lg:block" />

            <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Learn",
                  icon: <GraduationCap size={20} />,
                  description:
                    "Access structured live training programs designed around practical and industry-relevant skills.",
                },
                {
                  number: "02",
                  title: "Build",
                  icon: <Diamond size={22} />,
                  description:
                    "Apply your skills by working on real-world projects and creating meaningful work.",
                },
                {
                  number: "03",
                  title: "Grow",
                  icon: <MoveUpRight size={22} />,
                  description:
                    "Track your progress, earn certifications, and move confidently toward your career goals.",
                },
              ].map((item) => (
                <div key={item.number} className="relative text-center">
                  <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border-[8px] border-white bg-[#9fe7f5] text-[#053f5c] shadow-sm">
                    {item.icon}
                  </div>

                  <p className="mt-6 text-xs font-bold tracking-[0.18em] text-[#429ebd]">
                    {item.number}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-[#053f5c]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#36566a]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3 — FOR STUDENTS
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="overflow-hidden rounded-[2rem] border border-[#cfeaf1] bg-gradient-to-br from-[#eaf9fb] via-white to-[#e7f8fb] sm:rounded-[2.5rem]">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
              <div className="p-7 sm:p-12 lg:p-16">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#9fe7f5] text-[#053f5c]">
                  <GraduationCap size={26} />
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#429ebd]">
                  For Students
                </p>

                <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#053f5c]">
                  Build skills that go beyond the classroom.
                </h2>

                <p className="mt-6 text-sm leading-6 text-[#36566a] sm:text-lg">
                  Skillovant gives students a structured path to learn,
                  practice, build, demonstrate, and continuously improve their
                  skills.
                </p>

                <div className="mt-9 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                  {[
                    "Live skill-development programs",
                    "Assessments and performance tracking",
                    "Real-world project experience",
                    "Coding and problem-solving practice",
                    "AI-powered learning support",
                    "Skill-based certifications",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-sm leading-6 text-[#36566a]"
                    >
                      <Check
                        size={18}
                        className="mt-0.5 shrink-0 text-[#429ebd]"
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/programs"
                  className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#053f5c] px-6 py-3.5 text-sm font-bold !text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#429ebd] sm:w-auto"
                >
                  Explore for Students
                  <ArrowRight size={17} />
                </Link>
              </div>

              <div className="flex items-center justify-center bg-[#d3f1f8] p-6 sm:p-12 lg:p-14">
                <div className="w-full max-w-md rounded-[1.7rem] bg-white p-6 shadow-[0_20px_50px_rgba(5,63,92,0.10)] sm:rounded-[2rem] sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#429ebd]">
                    Student Growth
                  </p>

                  <h3 className="mt-4 text-2xl font-bold text-[#053f5c]">
                    Learn with purpose.
                  </h3>

                  <div className="mt-7 space-y-3">
                    {["Live Training", "Real Projects", "AI Tutor"].map(
                      (item) => (
                        <div
                          key={item}
                          className="flex items-center justify-between rounded-2xl bg-[#f3fafc] px-5 py-4"
                        >
                          <span className="text-sm font-bold text-[#053f5c]">
                            {item}
                          </span>

                          <ArrowRight
                            size={17}
                            className="text-[#429ebd]"
                          />
                        </div>
                      )
                    )}
                  </div>

                  <div className="mt-6 rounded-2xl bg-[#053f5c] px-5 py-4">
                    <p className="text-sm font-bold text-white">
                      Your skills. Your journey. Your future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 4 — FOR COLLEGES
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
          <div className="overflow-hidden rounded-[2rem] border border-[#cfeaf1] bg-gradient-to-br from-[#eaf9fb] via-white to-[#f4fcfd] sm:rounded-[2.5rem]">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              <div className="flex items-center justify-center bg-[#d3f1f8] p-6 sm:p-12 lg:p-14">
                <div className="w-full max-w-md rounded-[1.7rem] bg-white p-6 shadow-[0_20px_50px_rgba(5,63,92,0.10)] sm:rounded-[2rem] sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#429ebd]">
                    College Ecosystem
                  </p>

                  <h3 className="mt-4 text-2xl font-bold leading-tight text-[#053f5c]">
                    Manage.
                    <br />
                    Monitor.
                    <br />
                    Empower.
                  </h3>

                  <div className="mt-7 grid grid-cols-2 gap-3">
                    {[
                      {
                        title: "Students",
                        text: "Manage & support",
                      },
                      {
                        title: "Programs",
                        text: "Create & conduct",
                      },
                      {
                        title: "Projects",
                        text: "Assign & evaluate",
                      },
                      {
                        title: "Analytics",
                        text: "Track outcomes",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl bg-[#f2fafb] p-4"
                      >
                        <p className="text-sm font-bold text-[#053f5c]">
                          {item.title}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-[#647b88]">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-7 sm:p-12 lg:p-16">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d7f4ea] text-[#053f5c]">
                  <GraduationCap size={26} />
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#429ebd]">
                  For Colleges
                </p>

                <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-[#053f5c]">
                  Turn student development into a measurable journey.
                </h2>

                <p className="mt-6 text-sm leading-6 text-[#36566a] sm:text-lg">
                  Give your institution a connected platform to manage
                  students, training programs, assessments, projects,
                  performance, and outcomes.
                </p>

                <div className="mt-9 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                  {[
                    "Manage students in one platform",
                    "Create and manage live programs",
                    "Conduct assessments",
                    "Assign and evaluate projects",
                    "Monitor student progress",
                    "Generate analytics and reports",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-sm leading-6 text-[#36566a]"
                    >
                      <Check
                        size={18}
                        className="mt-0.5 shrink-0 text-[#429ebd]"
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#053f5c] px-6 py-3.5 text-sm font-bold !text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#429ebd] sm:w-auto"
                >
                  Partner With Skillovant
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 5 — WHY SKILLOVANT
      ========================================================= */}
      <section className="bg-[#053f5c]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9fe7f5]">
                Why Skillovant
              </p>

              <h2 className="mt-6 max-w-xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Learning should not end when the class ends.
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-6 text-white/70 sm:text-lg">
                The real value of learning comes from applying knowledge,
                solving problems, building projects, receiving feedback, and
                continuously improving.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Connected Learning",
                  description:
                    "Bring training, practice, projects and evaluation into one continuous journey.",
                },
                {
                  number: "02",
                  title: "Practical Outcomes",
                  description:
                    "Focus on what students can actually demonstrate and build.",
                },
                {
                  number: "03",
                  title: "Measurable Progress",
                  description:
                    "Give students and colleges visibility into development and performance.",
                },
                {
                  number: "04",
                  title: "AI-Powered Support",
                  description:
                    "Provide intelligent learning assistance whenever students need guidance.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm sm:p-7"
                >
                  <p className="text-2xl font-bold text-[#9fe7f5]">
                    {item.number}
                  </p>

                  <h3 className="mt-7 text-lg font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-5 text-white/65">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6 — FINAL CTA
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#429ebd]">
            Start Today
          </p>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-[#053f5c] sm:text-4xl lg:text-5xl">
            Build the skills that build your future.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-6 text-[#36566a] sm:text-lg">
            Whether you are a student ready to grow or a college looking to
            empower your students, Skillovant is built to move learning
            forward.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#053f5c] px-7 py-4 text-sm font-bold !text-white shadow-md shadow-[#053f5c]/10 transition-all hover:-translate-y-0.5 hover:bg-[#429ebd]"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#429ebd] bg-white px-7 py-4 text-sm font-bold !text-[#053f5c] transition-all hover:bg-[#9fe7f5]/20"
            >
              Talk to Skillovant
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 7 — FOOTER
      ========================================================= */}
      <footer className="border-t border-[#dcecf1] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[1.5fr_0.5fr] md:gap-12">
            {/* Brand */}
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-3"
              >
                <div className="relative h-11 w-11 shrink-0">
                  <Image
                    src="/skillovate-logo.jpeg"
                    alt="Skillovant"
                    fill
                    className="object-contain"
                    sizes="44px"
                  />
                </div>

                <span className="text-xl font-bold text-[#053f5c]">
                  Skillovant
                </span>
              </Link>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#36566a]">
                Empowering students with practical skills, real-world
                projects, assessments, coding practice, and AI-powered
                learning.
              </p>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-bold text-[#053f5c]">
                Company
              </h3>

              <div className="mt-5 flex flex-col gap-4">
                <Link
                  href="/about"
                  className="text-sm text-[#36566a] transition-colors hover:text-[#429ebd]"
                >
                  About
                </Link>

                <Link
                  href="/programs"
                  className="text-sm text-[#36566a] transition-colors hover:text-[#429ebd]"
                >
                  Programs
                </Link>

                <Link
                  href="/contact"
                  className="text-sm text-[#36566a] transition-colors hover:text-[#429ebd]"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 flex flex-col gap-4 border-t border-[#dcecf1] pt-7 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[#647b88]">
              © {new Date().getFullYear()} Skillovant. All rights reserved.
            </p>

            <p className="text-sm text-[#647b88]">
              Empowering Skills. Building Futures.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}