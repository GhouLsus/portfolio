"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { id: "hardik", label: "Hardik Garg" },
  { id: "about me", label: "About me" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact Me" },
];

const GREETINGS = ["नमस्ते", "Hello", "Hola", "Bonjour", "Ciao", "こんにちは", "안녕하세요"];

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
      2000 // matches fade-cycle duration
    );
    return () => clearInterval(id);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-6 z-30 flex justify-center">
        <nav className="glass-nav flex gap-4 rounded-full px-8 py-2 text-sm">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="rounded-full px-4 py-1 text-slate-300 hover:bg-slate-800/70 hover:text-white transition"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

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

          {/* swipe / scroll down indicator (hidden once user scrolls) */}
          {!showTopButton && (
            <div className="scroll-indicator">
              <span>Scroll</span>
              <div className="scroll-indicator-circle">
                <div className="scroll-indicator-dot" />
              </div>
            </div>
          )}
        </section>

        {/* ABOUT SECTION */}
        <section
          id="about me"
          className="flex min-h-screen flex-col justify-center gap-8 pb-16 pt-24"
        >
          <h2 className="text-lg font-semibold tracking-tight text-slate-50">
            About me
          </h2>

          <div className="grid gap-8 md:grid-cols-[1.4fr,1fr]">
            {/* personal */}
            <div className="universal-card rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-semibold text-slate-50">
                Hey, I&apos;m Hardik 👋
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                I&apos;m a final-year CSE (AI &amp; ML) student who enjoys building things
                that actually ship — apps people use, tools that make work easier, and
                systems that talk to the real world. I love working at the intersection of{" "}
                <span className="font-medium">
                  AI, app development, and autonomous systems
                </span>
                , with a special soft spot for aviation and drones.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                When I&apos;m not debugging or tuning models, you&apos;ll usually find me
                binging aviation documentaries, exploring new places, or planning the next
                bike ride with a good playlist on.
              </p>
            </div>

            {/* education + schools */}
            <div className="space-y-4">
              {/* college */}
              <div className="universal-card flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                {/* optional college photo */}
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-slate-800">
                  {/* replace /mit-logo.png with your actual college image */}
                  <img
                    src="/mit_logo.jpg"
                    alt="MIT Manipal"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-50">
                    B.Tech · Computer Science &amp; Engineering (AI &amp; ML)
                  </h3>
                  <p className="text-xs text-slate-400">MIT, Manipal · Final year</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Coursework across algorithms, data structures, ML, DL, computer vision,
                    networks and OS.
                  </p>
                </div>
              </div>

              {/* schools */}
              <div className="universal-card rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="text-sm font-semibold text-slate-50">
                  Schooling
                </h3>
                <ul className="mt-3 space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    {/* optional school photo */}
                    <div className="mt-[2px] flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-slate-800">
                      {/* replace /dps-logo.png with actual DPS logo/photo */}
                      <img
                        src="/dps_logo.png"
                        alt="Delhi Public School, Indirapuram"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Delhi Public School, Indirapuram</p>
                      <p className="text-xs text-slate-500">
                        Class 10 · CBSE Board Certification
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    {/* optional school photo */}
                    <div className="mt-[2px] flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-slate-800">
                      {/* replace /kothari-logo.png with actual Kothari logo/photo */}
                      <img
                        src="/kis_logo.png"
                        alt="Kothari International School"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Kothari International School</p>
                      <p className="text-xs text-slate-500">
                        Class 12 · CBSE Board Certification
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        {/* PROJECTS */}
        <section
          id="projects"
          className="flex min-h-screen flex-col justify-center gap-6 pb-16 pt-24"
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold tracking-tight text-slate-50">
              Some of my recent Projects!
            </h2>
            <div className="h-[2px] w-20 rounded-full bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-300" />
          </div>

          {/* 2-column on desktop, stacked on mobile */}
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
        <section
          id="experience"
          className="flex min-h-screen flex-col justify-center gap-6 pb-16 pt-24"
        >
          <h2 className="text-lg font-semibold tracking-tight text-slate-50">
            Experience
          </h2>
          <h2 className="text-lg font-semibold tracking-tight text-slate-50">
            Internships
          </h2>
          <div className="space-y-4">
            <ExperienceCard
              role="Software Research Intern"
              company="Raphe mPhibr"
              timeline="May 2025 - July 2025"
              description="Worked on UAV systems, simulation and automation, including SITL setups, GCS integrations and experiment pipelines for autonomous behaviour."
              points={[
                "Set up multi-vehicle environments.",
                "Experimented with drone landing behaviour and mission planning in 3D software.",
                "Worked on integrating an action camera with the drone.",
              ]}
              logoSrc="/raphe_mphibr_logo.jpeg"
              logoAlt="Raphe mPhibr logo"
            />
            <ExperienceCard
              role="Research Intern"
              company="Manipal Institue of Technology"
              timeline="June 2024 - July 2024"
              description="Developed an end to end travel booking app using Java and Android studio."
              points={[
                "Built an app using Java in which a customer can browse any flights from one place to another, book and directly get the tickets.",
                "Added a feature to display hotels of the destination location to the customer.",
                "Integrated razorpay for ease of payment."
              ]}
              logoSrc="/mit_logo.jpg"
              logoAlt="MIT logo"
            />
          </div>
          <h2 className="text-lg font-semibold tracking-tight text-slate-50">
            Volunteering
          </h2>
          <div className="space-y-5">
            <ExperienceCard
              role="AppDev Head"
              company="ACM Manipal Student Chapter"
              timeline="2025"
              description="Led the app development team, organised workshops and guided juniors through hands-on projects in mobile and web development."
              points={[
                "Conducted sessions on Flutter, Firebase and Android fundamentals.",
                "Mentored students building real-world club projects.",
                "Collaborated with other teams for events and hackathon apps.",
              ]}
              logoSrc="/acm.png"
              logoAlt="ACM logo"
            />
            <ExperienceCard
              role="CoreCommitte"
              company="TechTatva"
              timeline="2024"
              description="Organised and managed a tech event during TechTatva, leading backend operations and junior coordination."
              points={[
                "Guided juniors working on backend tasks and event workflows.",
                "Coordinated with sponsors and handled event requirements.",
                "Managed hackathon execution, logistics, and submissions.",
              ]}
              logoSrc="/techtatva_logo.jpeg"
              logoAlt="TechTatva logo"
            />
            <ExperienceCard
              role="Management Committe Member"
              company="ISTE"
              timeline="2024"
              description="Hosted a 2-day app development workshop under ISTE’s Aurora event.."
              points={[
                "Taught participants to build three beginner-friendly apps.",
                "Designed and delivered hands-on learning sessions.",
                "Helped attendees with coding, debugging, and core concepts.",
              ]}
              logoSrc="/iste.jpeg"
              logoAlt="ISTE logo"
            />
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="relative flex min-h-screen flex-col items-center justify-center pb-24 pt-24"
        >
          <div className="big-name-bg">HARDIK</div>

          {/* soft background glow */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.25),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(45,212,191,0.22),_transparent_60%)]" />

          {/* small pill */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/80 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Open to roles & collaborations
          </div>

          {/* heading + subtext */}
          <div className="text-center max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
              Let&apos;s build together.
            </h2>
            <p className="mt-3 text-sm text-slate-400 sm:text-base">
              Whether it&apos;s drones, AI, or an app idea you want to ship, I&apos;m always up
              for working on things that actually go live.
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm">
            <button
              type="button"
              onClick={() => {
                window.location.href = "mailto:hardikgarg717@gmail.com";
              }}
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

          {/* BIG quick snapshot card */}
          <div className="mt-10 w-full max-w-3xl rounded-3xl border border-slate-800 bg-slate-950/80 px-6 py-6 sm:px-8 sm:py-7 shadow-[0_26px_80px_rgba(15,23,42,0.95)] backdrop-blur-2xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Quick snapshot
                </p>
                <h3 className="mt-1 text-sm font-semibold text-slate-50">
                  Why you might want to reach out
                </h3>
              </div>
              <span className="text-[11px] text-slate-500">
                Final-year CSE (AI &amp; ML) · App dev, AI/ML &amp; drones
              </span>
            </div>

            <div className="mt-5 grid gap-4 text-[13px] text-slate-200 md:grid-cols-2">
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  <span>Based in Delhi NCR, Open to working on-site Pan India and remote.</span>
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
                  <span>Best way to reach me: email and LinkedIn. </span>
                </li>
              </ul>
            </div>
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
  );
}

/* COMPONENTS */

/* PROJECT CARD COMPONENT WITH IMAGES */

type ProjectCardProps = {
  title: string;
  timeline: string;
  description: string;
  stack: string[];
  image?: string; // <-- NEW: optional project image
};

function ProjectCard({ title, timeline, description, stack, image }: ProjectCardProps) {
  const initial = title.charAt(0).toUpperCase();

  return (
    <article className="universal-card group relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900/80 shadow-xl shadow-black/20 transition">

      {/* IMAGE (optional) */}
      {image && (
        <div className="relative h-44 w-full overflow-hidden rounded-t-2xl">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105 opacity-90"
          />

          {/* subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/70" />
        </div>
      )}

      {/* card content */}
      <div className="relative flex flex-col gap-3 p-4 md:p-5">

        {/* soft glow on hover */}
        <div className="pointer-events-none absolute inset-px rounded-2xl opacity-0 blur-xl transition duration-300 group-hover:opacity-100">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.25),_transparent_65%),radial-gradient(circle_at_bottom,_rgba(45,212,191,0.22),_transparent_60%)]" />
        </div>

        {/* header row */}
        <div className="relative flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            {/* small icon bubble */}
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 ring-1 ring-slate-700/70">
              <span className="text-xs font-semibold tracking-tight text-slate-200">
                {initial}
              </span>
            </div>

            <h3 className="text-sm font-semibold text-slate-50">
              {title}
            </h3>
          </div>

          {/* timeline pill */}
          <span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-slate-300 whitespace-nowrap">
            {timeline}
          </span>
        </div>

        {/* description */}
        <p className="relative text-sm leading-relaxed text-slate-300">
          {description}
        </p>

        {/* tech stack */}
        <div className="mt-1 flex flex-wrap gap-2 text-[11px] text-slate-200">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 transition group-hover:border-indigo-400/70 group-hover:text-slate-50 shadow-[0_0_0_1px_rgba(15,23,42,0.8)]"
            >
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

function ExperienceCard({
  role,
  company,
  timeline,
  description,
  points,
  logoSrc,
  logoAlt,
}: ExperienceCardProps) {
  return (
    <article className="universal-card rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          {logoSrc && (
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-slate-800">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoSrc}
                alt={logoAlt || company}
                className="h-full w-full object-contain"
              />
            </div>
          )}
          <div>
            <h3 className="text-sm font-semibold text-slate-50">{role}</h3>
            <p className="text-xs text-slate-400">{company}</p>
          </div>
        </div>
        <span className="text-xs text-slate-500">{timeline}</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        {description}
      </p>
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
