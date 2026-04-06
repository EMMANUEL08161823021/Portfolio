"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"

const NAV_LINKS = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Works",    href: "#works" },
  { label: "Services", href: "#services" },
  { label: "Posts",    href: "#posts" },
  { label: "Contact",  href: "#contact" },
]

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState("#home")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .sidebar-panel  { animation: slideIn 0.28s cubic-bezier(0.22,1,0.36,1) forwards; }
        .sidebar-overlay { animation: fadeIn 0.2s ease forwards; }

        .nav-link {
          position: relative;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.03em;
          color: #9ca3af;
          text-decoration: none;
          padding: 4px 0;
          transition: color 0.15s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 1.5px;
          background: #4f46e5;
          transition: width 0.2s ease;
          border-radius: 2px;
        }
        .nav-link:hover          { color: #f9fafb; }
        .nav-link:hover::after   { width: 100%; }
        .nav-link.active         { color: #f9fafb; }
        .nav-link.active::after  { width: 100%; }

        .mobile-link {
          display: block;
          font-size: 15px;
          font-weight: 500;
          color: #9ca3af;
          text-decoration: none;
          padding: 10px 0;
          border-bottom: 0.5px solid #1f2937;
          transition: color 0.15s, padding-left 0.15s;
          letter-spacing: 0.02em;
        }
        .mobile-link:hover { color: #f9fafb; padding-left: 6px; }
        .mobile-link.active { color: #f9fafb; }
      `}</style>

      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          transition: "background 0.3s, border-color 0.3s, backdrop-filter 0.3s",
          background: scrolled ? "rgba(3,7,18,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? "0.5px solid rgba(255,255,255,0.06)" : "0.5px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: 1152,
            margin: "0 auto",
            padding: "0 24px",
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 8,
              flexShrink: 0,
            }}
          >
            {/* Monogram mark */}
            <div
              style={{
                width: 32, height: 32,
                borderRadius: 8,
                background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, fontWeight: 800, color: "#fff",
                letterSpacing: "-0.02em",
                flexShrink: 0,
              }}
            >
              EO
            </div>
            <span
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#f9fafb",
                letterSpacing: "-0.01em",
                whiteSpace: "nowrap",
              }}
            >
              Emmanuel Oguntolu
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex"
            style={{ alignItems: "center", gap: 28 }}
          >
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={`nav-link${active === href ? " active" : ""}`}
                onClick={() => setActive(href)}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: 10, flexShrink: 0 }}>
            <a
              href="/cv.pdf"
              download
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.04em",
                padding: "7px 14px",
                borderRadius: 8,
                border: "1px solid #1f2937",
                color: "#d1d5db",
                textDecoration: "none",
                transition: "background 0.15s, border-color 0.15s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#1f2937"
                e.currentTarget.style.borderColor = "#374151"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent"
                e.currentTarget.style.borderColor = "#1f2937"
              }}
            >
              Resume
            </a>
            <a
              href="#contact"
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.04em",
                padding: "7px 16px",
                borderRadius: 8,
                background: "#4f46e5",
                color: "#fff",
                textDecoration: "none",
                transition: "background 0.15s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#4338ca" }}
              onMouseLeave={e => { e.currentTarget.style.background = "#4f46e5" }}
            >
              Hire me
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(s => !s)}
            className="md:hidden"
            style={{
              background: "none",
              border: "1px solid #1f2937",
              borderRadius: 8,
              padding: "5px 7px",
              color: "#9ca3af",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "color 0.15s, border-color 0.15s",
              flexShrink: 0,
            }}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div
          className="sidebar-overlay md:hidden"
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 110,
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
        />
      )}

      {/* Mobile sidebar */}
      {open && (
        <aside
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="sidebar-panel md:hidden"
          style={{
            position: "fixed",
            top: 0, right: 0, bottom: 0,
            zIndex: 120,
            width: "72%",
            maxWidth: 320,
            background: "#080c14",
            borderLeft: "0.5px solid #1f2937",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Sidebar header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 20px",
              borderBottom: "0.5px solid #1f2937",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 28, height: 28,
                  borderRadius: 7,
                  background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 11, fontWeight: 800, color: "#fff",
                }}
              >
                EO
              </div>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#f9fafb" }}>
                Emmanuel
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              style={{
                background: "#0f1117",
                border: "1px solid #1f2937",
                borderRadius: 7,
                padding: "5px 7px",
                color: "#6b7280",
                cursor: "pointer",
                display: "flex",
              }}
            >
              <CloseIcon />
            </button>
          </div>

          {/* Nav links */}
          <nav style={{ padding: "8px 20px", flex: 1, overflowY: "auto" }}>
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={`mobile-link${active === href ? " active" : ""}`}
                onClick={() => { setActive(href); setOpen(false) }}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Sidebar CTAs */}
          <div style={{ padding: 20, borderTop: "0.5px solid #1f2937", display: "flex", flexDirection: "column", gap: 10 }}>
            <a
              href="/cv.pdf"
              download
              style={{
                display: "block",
                textAlign: "center",
                fontSize: 13,
                fontWeight: 600,
                padding: "10px 0",
                borderRadius: 9,
                border: "1px solid #1f2937",
                color: "#d1d5db",
                textDecoration: "none",
              }}
            >
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                textAlign: "center",
                fontSize: 13,
                fontWeight: 600,
                padding: "10px 0",
                borderRadius: 9,
                background: "#4f46e5",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Hire me
            </a>
          </div>

          <div style={{ padding: "12px 20px", fontSize: 11, color: "#374151", textAlign: "center" }}>
            © {new Date().getFullYear()} Emmanuel Oguntolu
          </div>
        </aside>
      )}
    </>
  )
}