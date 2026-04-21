"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"

const NAV_LINKS = [
  { label: "Home",     href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About",    href: "#about" },
  { label: "Experience",    href: "#experience" },
  { label: "Works",    href: "#projects" },
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

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
  </svg>
)

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
)

function NavLink({ href, label, active, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative text-[13px] font-medium tracking-wide py-1 transition-colors duration-150 group
        ${active === href
          ? "text-gray-900 dark:text-white"
          : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        }`}
    >
      {label}
      <span className={`absolute -bottom-0.5 left-0 h-[1.5px] rounded-full bg-[#869eda] transition-all duration-200
        ${active === href ? "w-full" : "w-0 group-hover:w-full"}`}
      />
    </a>
  )
}

function MobileLink({ href, label, active, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`block text-[15px] font-medium py-2.5 border-b border-gray-100 dark:border-gray-800 tracking-wide transition-all duration-150
        hover:pl-1.5
        ${active === href
          ? "text-gray-900 dark:text-white"
          : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        }`}
    >
      {label}
    </a>
  )
}

export default function Navbar() {
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active,   setActive]   = useState("#home")
  const [dark,     setDark]     = useState(false)

  // Init theme from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const isDark = stored ? stored === "dark" : prefersDark
    setDark(isDark)
    document.documentElement.classList.toggle("dark", isDark)
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

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
      `}</style>

      {/* ── Header ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300
          ${scrolled
            ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-[14px] border-b border-gray-100 dark:border-white/[0.06] shadow-sm dark:shadow-none"
            : "bg-white/70 dark:bg-transparent backdrop-blur-[8px] border-b border-transparent"
          }`}
      >
        <div className="max-w-6xl px-4 mx-auto h-[60px] flex items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 no-underline">
            <div className="w-8 h-8 rounded-lg bg-[#869eda] flex items-center justify-center text-[13px] font-extrabold text-white tracking-tight">
              EO
            </div>
            <span className="text-sm font-bold text-gray-900 dark:text-white tracking-tight whitespace-nowrap">
              Emmanuel Oguntolu
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(({ label, href }) => (
              <NavLink
                key={href}
                href={href}
                label={label}
                active={active}
                onClick={() => setActive(href)}
              />
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden md:flex items-center gap-1.5 text-[12px] font-semibold px-4 py-1.5 rounded-lg bg-[#869eda] hover:bg-[#6f86d6] text-white transition-all duration-150 active:scale-[0.97]"
            >
              Hire me
            </a>

            {/* Mobile hamburger */}
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(s => !s)}
              className="md:hidden flex items-center justify-center p-1.5 rounded-lg border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-150"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile overlay ── */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="md:hidden fixed inset-0 z-[110] bg-black/40 dark:bg-black/60 backdrop-blur-sm"
          style={{ animation: "fadeIn 0.2s ease forwards" }}
        />
      )}

      {/* ── Mobile sidebar ── */}
      {open && (
        <aside
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="md:hidden fixed top-0 right-0 bottom-0 z-[120] w-[72%] max-w-[320px] bg-white dark:bg-[#080c14] border-l border-gray-100 dark:border-gray-800 flex flex-col"
          style={{ animation: "slideIn 0.28s cubic-bezier(0.22,1,0.36,1) forwards" }}
        >
          {/* Sidebar header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-[7px] bg-[#869eda] flex items-center justify-center text-[11px] font-extrabold text-white">
                EO
              </div>
              <span className="text-[13px] font-bold text-gray-900 dark:text-gray-50">
                Emmanuel
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex items-center justify-center p-1.5 rounded-[7px] bg-gray-50 dark:bg-[#0f1117] border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 overflow-y-auto px-5 pt-2">
            {NAV_LINKS.map(({ label, href }) => (
              <MobileLink
                key={href}
                href={href}
                label={label}
                active={active}
                onClick={() => { setActive(href); setOpen(false) }}
              />
            ))}
          </nav>

          <div className="px-5 py-3 text-[11px] text-gray-400 dark:text-gray-700 text-center">
            © {new Date().getFullYear()} Emmanuel Oguntolu
          </div>
        </aside>
      )}
    </>
  )
}