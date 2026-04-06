"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

const STATS = [
  { value: "3+", label: "Years exp." },
  { value: "20+", label: "Projects" },
  { value: "12+", label: "Clients" },
]

const STACK = ["React", "Next.js", "TypeScript", "Node.js", "Tailwind"]

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white dark:bg-gray-950 overflow-hidden flex items-center">

      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative w-full max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">

        {/* ── LEFT: Text ── */}
        <div className="space-y-8">

          {/* Status badge */}
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-wide px-3 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Open to work
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div {...fadeUp(0.08)} className="space-y-2">
            <p className="text-sm font-medium tracking-widest text-gray-400 uppercase">
              Software Engineer — Lagos, Nigeria
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight">
              Building things{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-indigo-600 dark:text-indigo-400">
                  for the web
                </span>
                <span
                  className="absolute bottom-1 left-0 right-0 h-3 bg-indigo-100 dark:bg-indigo-900/40 -z-0 rounded"
                  aria-hidden
                />
              </span>
              {" "}that people love.
            </h1>
          </motion.div>

          {/* Bio */}
          <motion.p
            {...fadeUp(0.16)}
            className="text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-md"
          >
            I craft fast, accessible, and elegant digital experiences — from pixel-perfect UIs to robust backend systems. I care deeply about the details that make software feel great.
          </motion.p>

          {/* Tech stack */}
          <motion.div {...fadeUp(0.22)} className="flex flex-wrap gap-2">
            {STACK.map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div {...fadeUp(0.28)} className="flex flex-wrap gap-3"
            
              href="#projects"
          //     className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-all hover:shadow-lg hover:shadow-indigo-200 dark:hover:shadow-indigo-900 active:scale-[0.98]"
            >
              Explore my work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            <a
            
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all active:scale-[0.98]"
            >
              Download CV
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div {...fadeUp(0.34)} className="flex items-center gap-1">
            {SOCIALS.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              >
                {icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Avatar + Stats ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-8"
        >
          {/* Avatar frame */}
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute -inset-3 rounded-full border-2 border-dashed border-indigo-200 dark:border-indigo-800 animate-[spin_20s_linear_infinite]" />
            <div className="absolute -inset-6 rounded-full border border-gray-100 dark:border-gray-800" />

            <Avatar className="w-48 h-48 ring-4 ring-white dark:ring-gray-950 shadow-xl">
              <AvatarImage src="https://github.com/shadcn.png" alt="Profile photo" />
              <AvatarFallback className="text-4xl font-bold bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300">
                EO
              </AvatarFallback>
            </Avatar>

            {/* Floating badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold px-3 py-1 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm text-gray-700 dark:text-gray-300">
              Lagos 🇳🇬
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 w-full max-w-xs">
            {STATS.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center gap-0.5 p-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
              >
                <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                  {value}
                </span>
                <span className="text-xs text-gray-400 dark:text-gray-500 text-center leading-tight">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero