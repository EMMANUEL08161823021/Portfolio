"use client"
import React, { useEffect, useState } from 'react'

const ROLES = ["Software Engineer", "Frontend Dev", "UI Craftsman", "Full-Stack Builder"]

const STATS = [
  { value: "3+", label: "Yrs exp" },
  { value: "20+", label: "Projects" },
  { value: "12+", label: "Clients" },
]

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
  const [roleIdx, setRoleIdx] = useState(0)
  const [fadeRole, setFadeRole] = useState(true)

  useEffect(() => {
    const t = setInterval(() => {
      setFadeRole(false)
      setTimeout(() => {
        setRoleIdx(i => (i + 1) % ROLES.length)
        setFadeRole(true)
      }, 300)
    }, 2600)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center font-sans">
      <style>{`
        @keyframes heroIn {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50%       { transform: translateY(6px); opacity: 0.4; }
        }
        .hero-item { opacity: 0; animation: heroIn 0.7s ease forwards; }
        .hero-item:nth-child(1) { animation-delay: 0.05s; }
        .hero-item:nth-child(2) { animation-delay: 0.15s; }
        .hero-item:nth-child(3) { animation-delay: 0.25s; }
        .hero-item:nth-child(4) { animation-delay: 0.35s; }
        .hero-item:nth-child(5) { animation-delay: 0.45s; }
        .hero-item:nth-child(6) { animation-delay: 0.55s; }
        .hero-item:nth-child(7) { animation-delay: 0.65s; }
        .float-card { animation: floatY 4s ease-in-out infinite; }
        .scroll-hint { animation: scrollBounce 1.8s ease-in-out infinite; }
      `}</style>

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(79,70,229,0.12) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(16,185,129,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative w-full max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">

        {/* ── LEFT ── */}
        <div className="space-y-7">
          {/* Heading */}
          <div className="hero-item">
            <h1 className="text-3xl sm:text-6xl font-extrabold leading-[1.08] tracking-tight text-gray-50">
              Hey,{" "}
              I'm Emmanuel
              <span className="relative inline-block text-indigo-400">
                Software Engineer

              </span>
            </h1>
          </div>

          {/* Bio */}
          <p className="hero-item text-base text-gray-400 leading-relaxed max-w-md font-normal">
            I'm passionate about building and scaling up businesses using software.
          </p>

          {/* CTAs */}
          <div className="hero-item flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-all active:scale-[0.97]"
            >
              See my work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600 transition-all active:scale-[0.97]"
            >
              Download CV
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
          </div>

        </div>

        {/* ── RIGHT ── */}
        <div className="hero-item flex flex-col items-center gap-6" style={{ animationDelay: "0.2s" }}>
          <div className="relative float-card">
            <div className="absolute rounded-full" style={{ inset: -20, border: "1px solid rgba(79,70,229,0.15)" }} />
            <div className="absolute rounded-full" style={{ inset: -36, border: "1px dashed rgba(79,70,229,0.1)" }} />

            <div
              style={{
                width: 300, height: 300,
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid #1f2937",
                outline: "1px solid rgba(79,70,229,0.4)",
                outlineOffset: 4,
              }}
            >
              <img
                src="https://github.com/shadcn.png"
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Lagos badge */}
            <div
              className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-semibold px-3 py-1 rounded-full bg-gray-900 border border-gray-800 text-gray-300"
              style={{ bottom: -14 }}
            >
              Lagos, Nigeria 🇳🇬
            </div>

            {/* Full-Stack tag */}
            <div
              className="absolute text-[10px] font-bold px-2.5 py-1 rounded-md tracking-widest uppercase text-indigo-300"
              style={{
                top: -10, right: -50,
                background: "rgba(79,70,229,0.15)",
                border: "1px solid rgba(79,70,229,0.3)",
              }}
            >
              Full-Stack
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-hint flex flex-col items-center gap-1.5">
        <span className="text-[10px] tracking-[0.2em] uppercase text-gray-700">scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}

export default Hero