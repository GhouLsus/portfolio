"use client";

import React, { useEffect, useState } from "react";

/* ---------- NAV LINKS (sanitized ids) ---------- */
const NAV_LINKS = [
  { id: "hardik", label: "Hardik Garg" },
  { id: "about-me", label: "About me" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact Me" },
];

const GREETINGS = ["नमस्ते", "Hello", "Hola", "Bonjour", "Ciao", "こんにちは", "안녕하세요"];

/* ========== Header (desktop glass + mobile drawer) ========== */
function HeaderInline({ navLinks }: { navLinks: { id: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // prevent body scroll when drawer open
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Desktop glass bar */}
      <header
        className={`hidden md:flex fixed inset-x-0 z-40 justify-center transition-all duration-300 ${
          scrolled ? "top-2" : "top-6"
        }`}
      >
        <div className="w-full max-w-5xl px-4">
          <nav className="glass-nav flex items-center justify-center gap-4 rounded-full px-6 py-2 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="rounded-full px-4 py-1 text-slate-300 hover:bg-slate-800/70 hover:text-white transition text-[13px]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile header */}
      <header className="md:hidden fixed inset-x-0 top-4 z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <a href="#hardik" className="flex items-center gap-2">
            <div className="h-9 w-9 overflow-hidden rounded-full ring-1 ring-slate-800/60 bg-slate-900">
              <img src="/hardik.png" alt="Hardik" className="h-full w-full object-cover" />
            </div>
            <span className="text-xs font-medium text-slate-200">Hardik</span>
          </a>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/70 ring-1 ring-slate-800/60 text-slate-200 transition hover:scale-105"
        >
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="18" height="2" rx="1" fill="currentColor" />
            <rect x="0" y="5" width="18" height="2" rx="1" fill="currentColor" />
            <rect x="0" y="10" width="18" height="2" rx="1" fill="currentColor" />
          </svg>
        </button>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transition-transform duration-300 ${
          open ? "visible translate-y-0 opacity-100" : "invisible translate-y-6 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-black/55 backdrop-blur-sm"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-6 w-[calc(100%-48px)] max-w-md rounded-2xl border border-slate-800 bg-slate-950/90 p-6 shadow-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-900 ring-1 ring-slate-700/60">
                <img src="/hardik.png" alt="Hardik" className="h-full w-full object-cover" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-50">Hardik Garg</p>
                <p className="text-xs text-slate-400">App dev · AI/ML · Drones</p>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/60 ring-1 ring-slate-800/60 text-slate-200"
              aria-label="Close menu"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="mt-6 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-100 hover:bg-slate-900/60 transition"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href="/HardikGarg_Resume.pdf"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white"
            >
              View résumé
            </a>
            <button
              onClick={() => {
                window.location.href = "mailto:hardikgarg717@gmail.com";
              }}
              className="inline-flex items-center justify-center rounded-full border border-slate-700/60 px-4 py-2 text-sm font-medium text-slate-200"
            >
              Email
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

/* ========== MAIN PAGE ========== */
export default function Home() {
  const [showTopButton, setShowTopButton] = useState(false);
  const [greetingIndex, setGreetingIndex] = useState(0);

  // show / hide back-to-top button
  useEffect(() => {
    const onScroll = () => {
      setShowTopButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // cycle greetings
  useEffect(() => {
    const id = setInterval(
      () => setGreetingIndex((prev) => (prev + 1) % GREETINGS.length),
      2000
    );
    return () => clearInterval(id);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <HeaderInline navLinks={NAV_LINKS} />

      <main className="min-h-screen bg-slate-950 text-slate-50">
        <div className="mx-auto max-w-5xl px-6">
          {/* HERO */}
          <section
            id="hardik"
            className="relative flex min-h-screen flex-col items-center justify-center pb-16 pt-32 text-center"
          >
            {/* background glow */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.3),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(45,212,191,0.18),_transparent_55%)]" />

            {/* avatar */}
            <div className="relative mb-6">
              <div className="absolute inset-0 animate-pulse-slow rounded-full bg-gradient-to-tr from-blue-500/40 via-indigo-500/30 to-emerald-400/30 blur-xl" />
              <div className="avatar-ring relative h-40 w-40 overflow-hidden rounded-full bg-slate-800 shadow-xl shadow-blue-900/60 ring-2 ring-slate-900 ring-offset-4 ring-offset-slate-950">
                <img src="/hardik.png" alt="Hardik" className="h-full w-full object-cover" />
              </div>
            </div>

            {/* greeting */}
            <p
              key={greetingIndex}
              className="mt-2 text-base font-medium tracking-[0.25em] text-slate-400 animate-fade-cycle"
            >
              {GREETINGS[greetingIndex]}
            </p>

            {/* gradient name */}
            <h1 className="mt-4 text-3xl font-light leading-tight text-slate-300 sm:text-4xl md:text-5xl animate-fade-up">
              I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-300 bg-clip-text font-semibold text-transparent">
                Hardik
              </span>
            </h1>

            {/* one-liner */}
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base animate-fade-up delay-1">
              I&apos;m a final-year CSE (AI &amp; ML) student, AI/ML practitioner
              and an app developer with a love for aviation, aspiring to grow as an
              Computer Science Engineer building reliable, intelligent products.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm animate-fade-up delay-2">
              <a
                href="/HardikGarg_Resume.pdf"
                className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-2 font-medium text-white shadow-md shadow-blue-900/60 hover:shadow-lg hover:brightness-110 transition"
              >
                View résumé
              </a>

              <CopyEmailButton email="hardikgarg717@gmail.com" />

              <a
                href="https://github.com/GhouLsus"
                target="_blank"
                className="rounded-full border border-slate-700 bg-slate-900 px-5 py-2 text-slate-300 hover:border-slate-500 hover:text-white transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/hardikgarg-999-x/"
                target="_blank"
                className="rounded-full border border-slate-700 bg-slate-900 px-5 py-2 text-slate-300 hover:border-slate-500 hover:text-white transition"
              >
                LinkedIn
              </a>
            </div>

            {/* swipe / scroll down indicator */}
            <div className="scroll-indicator" aria-hidden>
              <span className="text-xs text-slate-400 tracking-[0.25em]">Scroll</span>
              <div className="mt-2 scroll-indicator-circle">
                <div className="scroll-indicator-dot" />
              </div>
            </div>
          </section>

          {/* ABOUT SECTION */}
          <section
            id="about-me"
            className="flex min-h-screen flex-col justify-center gap-8 pb-16 pt-24"
          >
            <h2 className="text-lg font-semibold tracking-tight text-slate-50">About me</h2>

            <div className="grid gap-8 md:grid-cols-[1.4fr,1fr]">
              {/* personal */}
              <div className="universal-card rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="text-sm font-semibold text-slate-50">Hey, I&apos;m Hardik 👋</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  I&apos;m a final-year CSE (AI &amp; ML) student who enjoys building things that actually ship — apps people use,
                  tools that make work easier, and systems that talk to the real world. I love working at the intersection of{" "}
                  <span className="font-medium">AI, app development, and autonomous systems</span>, with a soft spot for aviation and drones.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  When I&apos;m not debugging or tuning models, you&apos;ll usually find me binging aviation documentaries, exploring new places, or planning the next bike ride.
                </p>

                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-200">
                  <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1">App Development</span>
                  <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1">AI / ML</span>
                  <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1">Aviation &amp; Drones</span>
                </div>
              </div>

              {/* education + schools */}
              <div className="space-y-4">
                {/* college */}
                <div className="universal-card flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                  <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-slate-800">
                    <img src="/mit_logo.jpg" alt="MIT Manipal" className="h-full w-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-50">
                      B.Tech · Computer Science &amp; Engineering (AI &amp; ML)
                    </h3>
                    <p className="text-xs text-slate-400">MIT, Manipal · Final year</p>
                    <p className="mt-1 text-xs text-slate-500">
                      Coursework across algorithms, data structures, ML, DL, computer vision, networks and OS.
                    </p>
                  </div>
                </div>

                {/* schools */}
                <div className="universal-card rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold text-slate-50">Schooling</h3>
                  <ul className="mt-3 space-y-3 text-sm text-slate-300">
                    <li className="flex items-start gap-3">
                      <div className="mt-[2px] flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-slate-800">
                        <img src="/dps_logo.png" alt="DPS Indirapuram" className="h-full w-full object-contain" />
                      </div>
                      <div>
                        <p className="font-medium">Delhi Public School, Indirapuram</p>
                        <p className="text-xs text-slate-500">Class 10 · CBSE Certification</p>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <div className="mt-[2px] flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-slate-800">
                        <img src="/kis_logo.png" alt="Kothari International School" className="h-full w-full object-contain" />
                      </div>
                      <div>
                        <p className="font-medium">Kothari International School</p>
                        <p className="text-xs text-slate-500">Class 12 · CBSE Certification</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="flex min-h-screen flex-col justify-center gap-6 pb-16 pt-24">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold tracking-tight text-slate-50">Some of my recent Projects!</h2>
              <div className="h-[2px] w-20 rounded-full bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-300" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <ProjectCard
                title="Autonomous Drone Landing on Moving Ship (Simulation)"
                timeline="2025 · Internship"
                description="Developed an autonomous drone landing system capable of landing on moving targets such as ships, used
softwares to coordinate multi-vehicle simulations."
                stack={[
                  "Simulation Software",
                  "3D animation Software",
                  "GroundControlStation Software",
                  "Python",
                ]}
                image="/proj1.jpg"
              />
              <ProjectCard
                title="FeelAI"
                timeline="2025 · Academic "
                description="Mobile app that combines NLP with voice output and dynamic character animations to create a more human, emotionally-aware chat experience."
                stack={["Flutter", "Firebase", "NLP", "TTS", "LLM API"]}
                image="/proj2_2.jpg"
              />
              <ProjectCard
                title="Vehicle Tracking & Speed Estimation"
                timeline="2024 · Academic"
                description="Real-time tracking of vehicles in aerial videos using optical flow, Shi-Tomasi & Harris corner detectors and DBSCAN clustering, optimised for speed without losing accuracy."
                stack={["Python", "OpenCV", "SciPy", "NumPy"]}
                image="/proj3.jpg"
              />
              <ProjectCard
                title="Customer Churn Prediction"
                timeline="2024 · Academic"
                description="Hybrid churn model for telecom data combining XGBoost with a shallow neural network via meta-learning, using heavy feature engineering and evaluation."
                stack={[
                  "Python",
                  "XGBoost",
                  "TensorFlow",
                  "scikit-learn",
                  "Pandas",
                ]}
                image="/proj4.png"
              />
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="experience" className="flex min-h-screen flex-col justify-center gap-6 pb-16 pt-24">
            <h2 className="text-lg font-semibold tracking-tight text-slate-50">Experience</h2>
            <div className="space-y-4">
              <ExperienceCard
                role="Software Research Intern"
                company="Raphe mPhibr"
                timeline="2025"
                description="Working on UAV systems, simulation and automation, including ArduPilot SITL setups, QGroundControl integrations and experiment pipelines for autonomous behaviour."
                points={[
                  "Set up multi-vehicle ArduPilot SITL environments with MAVProxy and QGC.",
                  "Experimented with drone landing behaviour and mission planning in Gazebo.",
                  "Built scripts and tools to streamline testing and telemetry analysis.",
                ]}
                logoSrc="/raphe_mphibr_logo.jpeg"
                logoAlt="Raphe mPhibr logo"
              />
              <ExperienceCard
                role="AppDev Head"
                company="ACM Student Chapter"
                timeline="2024"
                description="Led the app development team, organised workshops and guided juniors through hands-on projects in mobile and web development."
                points={[
                  "Conducted sessions on Flutter, Firebase and Android fundamentals.",
                  "Mentored students building real-world club projects.",
                  "Collaborated with other teams for event and hackathon apps.",
                ]}
                logoSrc="/acm.png"
                logoAlt="ACM logo"
              />
              <ExperienceCard
                role="Event Organizer & Backend Lead"
                company="TechTatva"
                timeline="2024"
                description="Organised and managed a hackathon event during TechTatva, leading backend operations and junior coordination."
                points={[
                  "Guided juniors working on backend tasks and event workflows.",
                  "Coordinated with sponsors and handled event requirements.",
                  "Managed hackathon execution, logistics, and submissions.",
                ]}
                logoSrc="/techtatva_logo.jpeg"
                logoAlt="TechTatva logo"
              />
              <ExperienceCard
                role="Workshop Instructor"
                company="ISTE Aurora"
                timeline="2024"
                description="Hosted a 2-day workshop teaching students to build three simple apps, covering UI, state and basic deployment."
                points={[
                  "Taught participants to build three beginner-friendly apps.",
                  "Designed workshop content and hands-on exercises.",
                  "Helped attendees debug and understand core concepts.",
                ]}
                logoSrc="/iste.jpeg"
                logoAlt="ISTE Aurora"
              />
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="relative flex min-h-screen flex-col items-center justify-center pb-24 pt-24 text-center">
            <div className="big-name-bg">HARDIK</div>

            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.25),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(45,212,191,0.22),_transparent_60%)]" />

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/80 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Open to roles & collaborations
            </div>

            <div className="text-center max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
                Let&apos;s build together.
              </h2>
              <p className="mt-3 text-sm text-slate-400 sm:text-base">
                Whether it&apos;s drones, AI, or an app idea you want to ship, I&apos;m always up for working on things that actually go live.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm">
              <button
                type="button"
                onClick={() => (window.location.href = "mailto:hardikgarg717@gmail.com")}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-900/60 hover:shadow-xl hover:brightness-110 transition"
              >
                Email me
                <span className="ml-2 text-xs">↗</span>
              </button>

              <a
                href="https://www.linkedin.com/in/hardikgarg-999-x/"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-medium text-slate-200 hover:border-slate-400 hover:text-white transition"
              >
                Connect on LinkedIn
                <span className="ml-2 text-xs">↗</span>
              </a>

              <CopyEmailButton email="hardikgarg717@gmail.com" />
            </div>

            <div className="mt-10 w-full max-w-3xl rounded-3xl border border-slate-800 bg-slate-950/80 px-6 py-6 sm:px-8 sm:py-7 shadow-[0_26px_80px_rgba(15,23,42,0.95)] backdrop-blur-2xl">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Quick snapshot</p>
                  <h3 className="mt-1 text-sm font-semibold text-slate-50">Why you might want to reach out</h3>
                </div>
                <span className="text-[11px] text-slate-500">Final-year CSE (AI &amp; ML) · App dev, AI/ML &amp; drones</span>
              </div>

              <div className="mt-5 grid gap-4 text-[13px] text-slate-200 md:grid-cols-2">
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
                    <span>Based in Manipal / Delhi, open to remote &amp; on-site roles.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>Love working on real-world systems: apps, AI models, autonomous drones.</span>
                  </li>
                </ul>

                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span>Comfortable owning things end-to-end: from prototype to deployment.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                    <span>Best way to reach me: email first, LinkedIn DM works too.</span>
                  </li>
                </ul>
              </div>

              <p className="mt-5 text-[11px] text-slate-500">
                If you have a role, internship, or a wild idea that needs to be built, send me a message — I usually reply within a day.
              </p>
            </div>
          </section>
        </div>

        {showTopButton && (
          <button
            type="button"
            onClick={scrollToTop}
            className="fixed bottom-5 left-1/2 z-40 -translate-x-1/2 rounded-full bg-slate-50 px-4 py-2 text-xs font-medium text-slate-900 shadow-lg shadow-slate-950/60 hover:bg-slate-200 transition"
          >
            Back to top
          </button>
        )}
      </main>
    </>
  );
}

/* ---------- COMPONENTS (ProjectCard, ExperienceCard, CopyEmailButton) ---------- */

type ProjectCardProps = {
  title: string;
  timeline: string;
  description: string;
  stack: string[];
  image?: string;
};

function ProjectCard({ title, timeline, description, stack, image }: ProjectCardProps) {
  const initial = title.charAt(0).toUpperCase();
  return (
    <article className="universal-card group relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900/80 shadow-xl shadow-black/20 transition">
      {image && (
        <div className="relative h-44 w-full overflow-hidden rounded-t-2xl">
          <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105 opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/70" />
        </div>
      )}

      <div className="relative flex flex-col gap-3 p-4 md:p-5">
        <div className="pointer-events-none absolute inset-px rounded-2xl opacity-0 blur-xl transition duration-300 group-hover:opacity-100">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.25),_transparent_65%),radial-gradient(circle_at_bottom,_rgba(45,212,191,0.22),_transparent_60%)]" />
        </div>

        <div className="relative flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 ring-1 ring-slate-700/70">
              <span className="text-xs font-semibold tracking-tight text-slate-200">{initial}</span>
            </div>

            <h3 className="text-sm font-semibold text-slate-50">{title}</h3>
          </div>

          <span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-slate-300 whitespace-nowrap">
            {timeline}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-slate-300">{description}</p>

        <div className="mt-1 flex flex-wrap gap-2 text-[11px] text-slate-200">
          {stack.map((tech) => (
            <span key={tech} className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 transition group-hover:border-indigo-400/70 group-hover:text-slate-50 shadow-[0_0_0_1px_rgba(15,23,42,0.8)]">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

type ExperienceCardProps = {
  role: string;
  company: string;
  timeline: string;
  description: string;
  points: string[];
  logoSrc?: string;
  logoAlt?: string;
};

function ExperienceCard({ role, company, timeline, description, points, logoSrc, logoAlt }: ExperienceCardProps) {
  return (
    <article className="universal-card rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          {logoSrc && (
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-slate-800">
              <img src={logoSrc} alt={logoAlt || company} className="h-full w-full object-contain" />
            </div>
          )}
          <div>
            <h3 className="text-sm font-semibold text-slate-50">{role}</h3>
            <p className="text-xs text-slate-400">{company}</p>
          </div>
        </div>
        <span className="text-xs text-slate-500">{timeline}</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{description}</p>
      <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="mt-[7px] h-[3px] w-[3px] rounded-full bg-slate-500" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error("Failed to copy email", e);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="rounded-full border border-slate-700 bg-slate-900 px-5 py-2 text-slate-300 hover:border-slate-500 hover:text-white transition"
    >
      {copied ? "Copied!" : "Copy email"}
    </button>
  );
}
