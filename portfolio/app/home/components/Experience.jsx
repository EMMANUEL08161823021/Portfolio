"use client"
import { useState } from "react"

const JOBS = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Pivetra",
    initials: "P",
    logoBg: "bg-indigo-950",
    logoText: "text-indigo-300",
    accentColor: "#869eda",
    type: "Internship · Remote · Germany",
    period: "Nov 2025 - Mar 2026",
    desc: "Pivetra is a modern SaaS platform designed to streamline collaboration, documentation, and customer support for startups and growing teams.",
    achievements: [
      "Migrated the admin UI from Material UI to shadcn/ui, reducing bundle weight and improving responsiveness.",
      "Architected a scalable translation module to support multi-language localization (German, Hindi) with dynamic language switching.",
      "Rebuilt complex product flows using react-hook-form and Redux.",
    ],
    stack: ["Next.js", "JavaScript", "Tailwind CSS", "Redux"],
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    company: "Skyestudio",
    initials: "SK",
    logoBg: "bg-green-950",
    logoText: "text-green-400",
    accentColor: "#4790f9",
    type: "Contract · Remote",
    period: "2023 — 2024",
    desc: "An agency that help tech entrepreneurs & businesses increase their revenue with custom App design, development, social media management & creative content creation.",
    achievements: [
      "I developed a role-based-access control system for 4+ businesses.",
      "I built the user’s authentication system with secure JWT-based login and registration.",
      "I created a dedicated admin dashboard for managing products (add, update, delete), with route protection to ensure role-based access control.",
    ],
    stack: ["React.js", "MongoDB", "ExpressJs", "Tailwind CSS", "Node.js"],
  },
  {
    id: 3,
    title: "Frontend Engineer",
    company: "Rootshive Limited",
    initials: "RL",
    logoBg: "bg-stone-900",
    logoText: "text-stone-400",
    accentColor: "#f4f9ff",
    type: "Full-time · Remote · Lekki",
    period: "May 2024 - Jan 2025",
    desc: "Rootshive is a digital tool that helps people and businesses manage their money better.",
    achievements: [
      "Created visually appealing and responsive user interfaces for Rootshive's landing pages.",
      "Consistently met deadlines while delivering high-quality, functional, and visually appealing results.",
      "Utilized Bootstrap for layouts and responsive design, paired with CSS for deep custom styling in PHP environment.",
    ],
    stack: ["HTML", "Bootstrap", "PHP"],
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "LeakAlert",
    initials: "LA",
    logoBg: "bg-violet-950",
    logoText: "text-violet-300",
    accentColor: "#e6f4f1",
    type: "Freelance · Remote · Abuja",
    period: "2024",
    desc: "A software that monitors and detects leakages in pipelines in real-time and sends instant alerts.",
    achievements: [
      "Successfully developed a PWA to monitor pipeline systems in real-time using IoT sensors.",
      "Implemented real-time updates and anomaly detection with alerts sent via email for critical issues.",
      "Integrated React components with backend RESTful APIs for data retrieval and dynamic updates.",
    ],
    stack: ["React", "Framer Motion", "Bootstrap"],
  },
]

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
)

export default function Experience() {
  const [expanded, setExpanded] = useState(null)

  return (
    <section id="experience" className="dark:bg-[#000]">
      <br/>
      <br/>
      <br/>
      <div className="max-w-6xl px-4 mx-auto">

        {/* Header */}
        <div className="">
          <p className="text-[12px] font-extrabold tracking-[0.25em] text-[#869eda]   uppercase mb-3">
            Experience
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black  dark:text-white leading-tight mb-4">
            Where I've worked
          </h2>
          <p className="text-[15px] my-4 text-gray-500 dark:text-white leading-relaxed max-w-sm">
            A timeline of roles where I've shipped real products and grown as an engineer.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {JOBS.map((job) => {
            const isOpen = expanded === job.id
            return (
              <div
                key={job.id}
                className="group relative flex flex-col rounded-2xl border border-gray-100 dark:border-white bg-white dark:bg-black overflow-hidden transition-all duration-300 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-lg dark:hover:shadow-none"
              >
                {/* Top accent bar */}
                <div
                  className="h-0.5 w-full"
                  style={{ background: job.accentColor }}
                />

                <div className="flex flex-col flex-1 p-6">

                  {/* Card header */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      {/* Company logo */}
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center text-[11px] font-extrabold flex-shrink-0 ${job.logoBg} ${job.logoText}`}
                      >
                        {job.initials}
                      </div>
                      <div>
                        <p className="text-[13px] font-bold text-gray-900 dark:text-white leading-tight">
                          {job.company}
                        </p>
                        <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">
                          {job.type}
                        </p>
                      </div>
                    </div>

                    {/* Period + current badge */}
                    <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                      <span
                        className="text-[10px] font-medium px-2.5 py-1 rounded-full border border-gray-100 dark:border-gray-800 text-gray-500 dark:text-white whitespace-nowrap"
                      >
                        {job.period}
                      </span>
                    </div>
                  </div>

                  {/* Role title */}
                  <h3 className="text-[15px] font-bold text-gray-900 dark:text-white mb-2 leading-snug">
                    {job.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] text-gray-500 dark:text-white leading-relaxed mb-4">
                    {job.desc}
                  </p>

                  {/* Stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {job.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-medium tracking-wide px-2.5 py-1 rounded-full bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-500 dark:text-gray-400"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Expand toggle */}
                  <button
                    onClick={() => setExpanded(isOpen ? null : job.id)}
                    className="mt-auto self-start inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-black dark:text-white hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {isOpen ? "Show less" : "Key achievements"}
                    <svg
                      width="14" height="14" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"
                      className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>

                  {/* Achievements — expandable */}
                  {isOpen && (
                    <div
                      className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800"
                      style={{ animation: "slideDown 0.3s cubic-bezier(0.22,1,0.36,1) both" }}
                    >
                      <style>{`
                        @keyframes slideDown {
                          from { opacity: 0; transform: translateY(-8px); }
                          to   { opacity: 1; transform: translateY(0); }
                        }
                      `}</style>
                      <ul className="flex flex-col gap-3">
                        {job.achievements.map((a, i) => (
                          <li
                            key={i}
                            className="relative text-[12.5px] text-gray-500 dark:text-white leading-[1.8] pl-4
                              before:content-[''] before:absolute before:left-0 before:top-[8px]
                              before:w-1.5 before:h-1.5 before:rounded-full"
                            style={{ "--dot-color": job.accentColor }}
                          >
                            <span
                              className="absolute left-0 top-[8px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ background: job.accentColor }}
                            />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <br/>
      <br/>
      <br/>
    </section>
  )
}