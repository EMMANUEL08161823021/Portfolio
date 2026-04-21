"use client"
import React, { useEffect, useState } from 'react'

const ROLES = ["Software Engineer", "Frontend Dev", "UI Craftsman", "Full-Stack Builder"]

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
    <section className="relative min-h-screen overflow-hidden bg-white dark:bg-[#000] flex items-center">
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


      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative w-full max-w-6xl px-4 mx-auto py-24 grid md:grid-cols-2 gap-16 items-center">

        {/* ── LEFT ── */}
        <div className="space-y-7">
          {/* Heading */}
          <div className="hero-item">
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-[1.08] tracking-tight text-black dark:text-white">
              Hey,{" "}
              I'm Emmanuel 
              <br/>
              <span className="relative inline-block text-[#869eda]">
                Software Engineer
              </span>
            </h1>
          </div>

          {/* Bio */}
          <p className="hero-item text-base text-gray-900 dark:text-white leading-relaxed max-w-md font-normal">
            I help founders and teams ship faster, look better, and grow further — with software solutions.
          </p>

          {/* CTAs */}
          <div className="hero-item flex flex-wrap gap-3">
            <button
              onClick={() => {
                const isMobile = window.innerWidth < 768
                const id = isMobile ? "works-mobile" : "works-desktop"
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-[#869eda] hover:bg-indigo-700 text-white transition-all active:scale-[0.97]"
            >
              See my work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>

        {/* ── RIGHT ── */}
        <div className="hero-item flex flex-col items-center gap-6" style={{ animationDelay: "0.2s" }}>
          <div className="relative float-card">
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
                src="/images/me.png"
                alt="Profile"
                style={{ width: "100%", height: "100%", margin:"0 auto", objectFit: "cover" }}
              />
            </div>

            {/* Outer rings */}
            <div className="absolute rounded-full" style={{ inset: -20, border: "1px solid rgba(79,70,229,0.15)" }} />
            <div className="absolute rounded-full" style={{ inset: -36, border: "1px dashed rgba(79,70,229,0.1)" }} />

            {/* Avatar — inside float-card */}

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
                top: -10, right: 40,
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