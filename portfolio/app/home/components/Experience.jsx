"use client"
import { useState } from "react"

const JOBS = [
  {
    id: 1,
    title: "Frontend Engineer",
    company: "SkyeStudio",
    initials: "SS",
    logoBg: "bg-indigo-950",
    logoText: "text-indigo-300",
    type: "Full-time · Remote",
    period: "2024 — Present",
    current: true,
    desc: "Leading frontend development for a digital agency serving tech startups and SMBs. Own the component system, performance budget, and client delivery pipeline.",
    achievements: [
      "Reduced page load time by 62% by migrating to Next.js App Router with streaming SSR.",
      "Built a reusable design system used across 8+ client projects, cutting UI build time in half.",
      "Mentored 2 junior developers through weekly code reviews and pair programming sessions.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Figma", "Vercel"],
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    company: "LYNKK",
    initials: "LK",
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
    title: "React Developer",
    company: "NeuroWallet",
    initials: "NW",
    logoBg: "bg-stone-900",
    logoText: "text-stone-400",
    type: "Freelance",
    period: "2022 — 2023",
    desc: "Developed an accessible digital wallet interface for users with physical disabilities. Focused on WCAG 2.1 compliance, keyboard navigation, and voice-first interaction design.",
    achievements: [
      "Achieved WCAG AA compliance across all user flows with full keyboard operability.",
      "Implemented voice-command navigation, expanding the accessible user base by an estimated 3×.",
      "Wrote 85% unit test coverage using Jest and React Testing Library.",
    ],
    stack: ["React", "Express.js", "WCAG 2.1", "Jest", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "Junior Frontend Developer",
    company: "SPACES Studio",
    initials: "SP",
    logoBg: "bg-violet-950",
    logoText: "text-violet-300",
    type: "Internship · On-site · Lagos",
    period: "2021 — 2022",
    desc: "First professional role — worked on the SPACES film landing page and internal tooling. Learned production-grade React patterns, Git workflow, and Agile collaboration.",
    achievements: [
      "Shipped the hero section and animations for the SPACES launch campaign.",
      "Contributed to an internal CMS dashboard, reducing content update time by 40%.",
      "Participated in daily standups and bi-weekly sprint reviews with a cross-functional team.",
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
    <section id="experience" className="bg-gray-950 max-w-6xl mx-auto px-4 min-h-screen">
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
               <div className="mb-14">
                    <p className="text-[11px] tracking-[0.22em] uppercase text-indigo-500 font-semibold mb-3">
                    Experience
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-50 leading-tight mb-4">
                    Where I've worked
                    </h2>
                    <p className="text-[15px] text-gray-500 leading-relaxed max-w-sm">
                    A timeline of roles where I've shipped real products and grown as an engineer.
                    </p>
               </div>

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
                              <p className="text-[15px] font-bold text-gray-50 leading-snug">
                              {job.title}
                              {job.current && (
                              <span className="ml-2 align-middle text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 tracking-wide">
                                   Current
                              </span>
                              )}
                              </p>
                              <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
                              <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-gray-900 border border-gray-800 text-gray-500 whitespace-nowrap">
                              {job.period}
                              </span>
                              <ChevronIcon open={isOpen} />
                              </div>
                         </div>

                         {/* Company */}
                         <div className="flex items-center gap-2">
                              <div
                              className={`w-5 h-5 rounded-[4px] flex items-center justify-center text-[9px] font-extrabold flex-shrink-0 ${job.logoBg} ${job.logoText}`}
                              >
                              {job.initials}
                              </div>
                              <span className="text-[13px] text-gray-500 font-medium">{job.company}</span>
                              <span className="text-[11px] text-gray-700">· {job.type}</span>
                         </div>
                         </button>

                         {/* Expandable card */}
                         {isOpen && (
                         <div className="exp-open mt-4">
                              <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-5">

                              <p className="text-[13px] text-gray-400 leading-[1.85] mb-4">
                              {job.desc}
                              </p>

                              <ul className="flex flex-col gap-2 mb-5 list-none p-0 m-0">
                              {job.achievements.map((a, i) => (
                                   <li
                                   key={i}
                                   className="relative text-[13px] text-gray-400 leading-[1.8] pl-4
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
                                   className="text-[10px] font-medium tracking-wide px-2.5 py-1 rounded-full bg-gray-800 border border-gray-700/60 text-gray-500"
                                   >
                                   {s}
                                   </span>
                              ))}
                              </div>
                              </div>
                         </div>
                         )}
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