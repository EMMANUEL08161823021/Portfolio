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
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

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
    <section
      className="relative min-h-screen bg-black overflow-hidden flex items-center"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

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

        .cta-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 24px; border-radius: 10px;
          font-size: 14px; font-weight: 600;
          background: #4f46e5; color: #fff;
          border: none; cursor: pointer; text-decoration: none;
          transition: background 0.2s, transform 0.15s;
        }
        .cta-primary:hover { background: #4338ca; transform: translateY(-1px); }
        .cta-primary:active { transform: scale(0.97); }

        .cta-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 24px; border-radius: 10px;
          font-size: 14px; font-weight: 600;
          background: transparent; color: #d1d5db;
          border: 1px solid #374151; cursor: pointer; text-decoration: none;
          transition: background 0.2s, border-color 0.2s, transform 0.15s;
        }
        .cta-secondary:hover { background: #111827; border-color: #6b7280; transform: translateY(-1px); }
        .cta-secondary:active { transform: scale(0.97); }

        .social-btn {
          padding: 8px; border-radius: 8px; color: #6b7280;
          transition: color 0.15s, background 0.15s;
          display: flex;
        }
        .social-btn:hover { color: #e5e7eb; background: #1f2937; }

        .stack-pill {
          font-size: 11px; font-weight: 500; letter-spacing: 0.04em;
          padding: 4px 12px; border-radius: 999px;
          background: #111827; border: 1px solid #1f2937;
          color: #9ca3af; transition: border-color 0.15s, color 0.15s;
        }
        .stack-pill:hover { border-color: #4f46e5; color: #a5b4fc; }

        .stat-card {
          display: flex; flex-direction: column; align-items: center;
          gap: 2px; padding: 12px 16px; border-radius: 12px;
          background: #0f1117; border: 1px solid #1f2937;
        }

        .scroll-hint {
          animation: scrollBounce 1.8s ease-in-out infinite;
        }
      `}</style>

      {/* Radial glow background */}
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

          {/* Status badge */}
          <div className="hero-item">
            <span
              className="inline-flex items-center gap-2.5 text-xs font-medium px-3.5 py-1.5 rounded-full"
              style={{
                background: "rgba(16,185,129,0.08)",
                border: "1px solid rgba(16,185,129,0.25)",
                color: "#34d399",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full rounded-full bg-emerald-400"
                  style={{ animation: "pulse-ring 1.4s ease-out infinite" }}
                />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Available for new projects
            </span>
          </div>

          {/* Role cycler */}
          <div className="hero-item">
            <p
              style={{
                fontSize: 12,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#4f46e5",
                fontWeight: 600,
                opacity: fadeRole ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}
            >
              {ROLES[roleIdx]} — Lagos, Nigeria
            </p>
          </div>

          {/* Heading */}
          <div className="hero-item space-y-2">
            <h1
              style={{
                fontSize: "clamp(2.6rem, 5.5vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "#f9fafb",
              }}
            >
              I build digital{" "}
              <span
                style={{
                  position: "relative",
                  display: "inline-block",
                  color: "#818cf8",
                }}
              >
                experiences
                <svg
                  style={{ position: "absolute", bottom: -4, left: 0, width: "100%" }}
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 6 C50 2, 150 2, 198 6"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
              {" "}that ship.
            </h1>
          </div>

          {/* Bio */}
          <p
            className="hero-item"
            style={{
              fontSize: 16,
              color: "#9ca3af",
              lineHeight: 1.8,
              maxWidth: 440,
              fontWeight: 400,
            }}
          >
            Softwares are engineered end to end according to your taste.
          </p>

          {/* CTAs */}
          <div className="hero-item flex flex-wrap gap-3">
            <a href="#projects" className="cta-primary">
              See my work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="/cv.pdf" download className="cta-secondary">
              Download CV
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
          </div>

          {/* Socials + stats */}
          <div className="hero-item flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1">
              {SOCIALS.map(({ label, href, icon }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer" className="social-btn">
                  {icon}
                </a>
              ))}
            </div>
            <div style={{ width: 1, height: 24, background: "#1f2937" }} />
            <div className="flex items-center gap-3">
              {STATS.map(({ value, label }) => (
                <div key={label} className="stat-card">
                  <span style={{ fontSize: 18, fontWeight: 800, color: "#f9fafb", lineHeight: 1 }}>{value}</span>
                  <span style={{ fontSize: 10, color: "#6b7280", letterSpacing: "0.06em" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div
          className="hero-item flex flex-col items-center gap-6"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Avatar */}
          <div className="relative float-card">
            {/* Outer rings */}
            <div
              className="absolute rounded-full"
              style={{
                inset: -20,
                border: "1px solid rgba(79,70,229,0.15)",
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                inset: -36,
                border: "1px dashed rgba(79,70,229,0.1)",
              }}
            />

            {/* Avatar */}
            <div
              style={{
                width: 300,
                height: 300,
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
                onError={(e) => {
                  const t = e.currentTarget
                  t.style.display = "none"
                  const parent = t.parentElement
                  if (parent) {
                    parent.style.display = "flex"
                    parent.style.alignItems = "center"
                    parent.style.justifyContent = "center"
                    parent.style.background = "#1e1b4b"
                    parent.style.fontSize = "3rem"
                    parent.style.fontWeight = "800"
                    parent.style.color = "#818cf8"
                    parent.textContent = "EO"
                  }
                }}
              />
            </div>

            {/* Floating badge — bottom */}
            <div
              className="absolute"
              style={{
                bottom: -14,
                left: "50%",
                transform: "translateX(-50%)",
                whiteSpace: "nowrap",
                fontSize: 11,
                fontWeight: 600,
                padding: "4px 12px",
                borderRadius: 999,
                background: "#0f1117",
                border: "1px solid #1f2937",
                color: "#d1d5db",
              }}
            >
              Lagos, Nigeria 🇳🇬
            </div>

            {/* Floating tag — top right */}
            <div
              className="absolute"
              style={{
                top: -10,
                right: -50,
                fontSize: 10,
                fontWeight: 700,
                padding: "4px 10px",
                borderRadius: 6,
                background: "rgba(79,70,229,0.15)",
                border: "1px solid rgba(79,70,229,0.3)",
                color: "#a5b4fc",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Full-Stack
            </div>
          </div>

        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 scroll-hint"
        style={{ transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}
      >
        <span style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#374151" }}>
          scroll
        </span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}

export default Hero