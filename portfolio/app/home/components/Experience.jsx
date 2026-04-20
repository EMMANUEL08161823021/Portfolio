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
    type: "Internship · Remote . Germany",
    period: "March 2026",
    current: true,
    desc: "Pivetra is a customer support platform",
    achievements: [
      "I migrated the admin UI from Material UI to shadcn/ui, optimizing Next.js rendering and lifecycle methods to significantly reduce bundle weight and improve responsiveness",
      "I architected a scalable translation module to support multi-language localization (e.g., German, Hindi). Implemented dynamic language switching and context-aware string mapping to ensure a seamless experience for global users.",
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
    type: "Contract · Remote",
    period: "2023 — 2024",
    desc: "Built and maintained a real-time crypto transaction platform with editorial content integration. Sole developer responsible for both frontend and backend systems.",
    achievements: [
      "Architected real-time data pipeline handling 10k+ daily transactions using WebSockets.",
      "Integrated MongoDB with Next.js API routes, achieving sub-100ms average query response.",
      "Delivered full product from wireframe to production in 6 weeks.",
    ],
    stack: ["Next.js", "MongoDB", "WebSockets", "Tailwind CSS", "Node.js"],
  },
  {
    id: 3,
    title: "Frontend Engineer",
    company: "Rootshive Limited",
    initials: "RL",
    logoBg: "bg-stone-900",
    logoText: "text-stone-400",
    type: "Remote",
    period: "Jan 2025",
    desc: "Rootshive is a digital tool that helps people and businesses manage their money better. It's like a personal financial assistant that tracks income, expenses, and spending patterns.",
    achievements: [
      "Created visually appealing and responsive user interfaces for Rootshive's landing pages",
      "Consistently met deadlines while delivering high-quality,  functional, and visually appealing results.",
      "Utilized Bootstrap for layouts and responsive design, paired with CSS for deep custom styling in PHP environment.",
    ],
    stack: ["HTML", "Booststrap", "PHP"],
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "LeakAlert",
    initials: "LA",
    logoBg: "bg-violet-950",
    logoText: "text-violet-300",
    type: "Freelance · Remote · Abuja",
    period: "2024",
    desc: "A Software That Monitors and Detect Leakages in Pipelines in Realtime and Sends Instant Alerts",
    achievements: [
      "Successfully developed a PWA to monitor pipeline systems in real-time using IoT sensors.",
      "Implemented real-time updates and anomaly detection with alerts sent via email for critical issues like leaks.",
      "Integrated React components with backend RESTful APIs for data retrieval and dynamic updates.",
    ],
    stack: ["React", "Framer Motion", "SCSS", "Git"],
  },
]

const ChevronIcon = ({ open }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`transition-transform duration-300 ${
      open ? "rotate-180 text-indigo-500" : "rotate-0 text-gray-600"
    }`}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
)

export default function Experience() {
  const [active, setActive] = useState(1)

  return (
    <section id="experience" className="border border-black mx-auto px-8 min-h-screen">
          <br/>
          <br/>
          <br/>
          <style>{`
          @keyframes slideDown {
               from { opacity: 0; transform: translateY(-10px); }
               to   { opacity: 1; transform: translateY(0); }
          }
          .exp-open { animation: slideDown 0.3s cubic-bezier(0.22,1,0.36,1) both; }
          `}</style>

          <div className="w-full mx-auto">
            {/* Header */}
            <div>
                <p className="text-[11px] tracking-[0.22em] uppercase text-indigo-500 font-semibold mb-3">
                Experience
                </p>
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight mb-4">
                Where I've worked
                </h2>
                <p className="text-[15px] text-black leading-relaxed max-w-sm">
                A timeline of roles where I've shipped real products and grown as an engineer.
                </p>
            </div>

            <br/>
            <br/>
            <br/>

            <div className="relative">

                <div className="absolute left-5 top-2 bottom-0 w-px bg-gradient-to-b from-indigo-600 via-gray-800 to-transparent" />

                {JOBS.map((job) => {
                const isOpen = active === job.id

                return (
                <div key={job.id} className="relative pl-14 pb-9 last:pb-0">

                      {/* Dot */}
                      <div
                      className={`absolute left-3 top-1.5 z-10 w-4 h-4 rounded-full border-2 flex items-center justify-center bg-gray-950 transition-colors duration-200 ${
                          isOpen ? "border-indigo-500" : "border-gray-700"
                      }`}
                      >
                      <div
                          className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                          isOpen ? "bg-indigo-500" : "bg-gray-700"
                          }`}
                      />
                      </div>

                      {/* Header button */}
                      <button
                      onClick={() => setActive(isOpen ? -1 : job.id)}
                      className="w-full text-left bg-transparent border-0 p-0 cursor-pointer group"
                      >
                      {/* Title + period */}
                      <div className="flex items-start justify-between gap-3 mb-2">
                          <p className="text-[15px] font-bold text-black leading-snug">
                          {job.title}
                          {job.current && (
                          <span className="ml-2 align-middle text-[10px] font-semibold px-2 py-0.5 rounded-full border border-emerald-500/25 text-emerald-400 tracking-wide">
                                Current
                          </span>
                          )}
                          </p>
                          <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
                          <span className="text-[11px] font-medium px-2.5 py-1 rounded-full border border-gray-800 text-black whitespace-nowrap">
                          {job.period}
                          </span>
                          {/* <ChevronIcon open={isOpen} /> */}
                          </div>
                      </div>

                      {/* Company */}
                      <div className="flex items-center gap-2">
                          <div
                          className={`w-5 h-5 rounded-[4px] flex items-center justify-center text-[9px] font-extrabold flex-shrink-0 ${job.logoBg} ${job.logoText}`}
                          >
                          {job.initials}
                          </div>
                          <span className="text-[13px] text-black font-medium">{job.company}</span>
                          <span className="text-[11px] text-gray-700">· {job.type}</span>
                      </div>
                      </button>

                      {/* Expandable card */}
                      {/* {isOpen && (
                      <div className="exp-open mt-4">
                          <div className="border border-gray-800 rounded-xl p-5">

                          <p className="text-[13px] text-black leading-[1.85] mb-4">
                          {job.desc}
                          </p>

                          <ul className="flex flex-col gap-2 mb-5 list-none p-0 m-0">
                          {job.achievements.map((a, i) => (
                                <li
                                key={i}
                                className="relative text-[13px] text-black leading-[1.8] pl-4
                                    before:content-[''] before:absolute before:left-0 before:top-[9px]
                                    before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-500"
                                >
                                {a}
                                </li>
                          ))}
                          </ul>

                          <div className="flex flex-wrap gap-1.5">
                          {job.stack.map((s) => (
                                <span
                                key={s}
                                className="text-[10px] font-medium tracking-wide px-2.5 py-1 rounded-full bg-gray-800 border border-gray-700/60 text-black"
                                >
                                {s}
                                </span>
                          ))}
                          </div>
                          </div>
                      </div>
                      )} */}
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