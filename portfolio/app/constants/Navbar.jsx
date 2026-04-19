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

function NavLink({ href, label, active, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative text-[13px] font-medium tracking-wide py-1 transition-colors duration-150 group
        ${active === href ? "text-white" : "text-gray-400 hover:text-gray-50"}`}
    >
      {label}
      <span className={`absolute -bottom-0.5 left-0 h-[1.5px] rounded-full bg-indigo-500 transition-all duration-200
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
      className={`block text-[15px] font-medium py-2.5 border-b border-gray-800 tracking-wide transition-all duration-150
        hover:text-gray-50 hover:pl-1.5
        ${active === href ? "text-gray-50" : "text-gray-400"}`}
    >
      {label}
    </a>
  )
}

export default function Navbar() {
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active,   setActive]   = useState("#home")

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
      {/* ── Header ── */}
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-[#03070f]/85 backdrop-blur-[14px] border-b border-white/[0.06]"
          : "bg-transparent border-b border-transparent"
      }`}>
        <div className="max-w-6xl mx-auto px-6 h-[60px] flex items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 no-underline">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-700 flex items-center justify-center text-[13px] font-extrabold text-white tracking-tight flex-shrink-0">
              EO
            </div>
            <span className="text-sm font-bold text-gray-50 tracking-tight whitespace-nowrap">
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

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2.5 flex-shrink-0">
            <a
              href="/cv.pdf"
              download
              className="text-xs font-semibold tracking-wide px-3.5 py-1.5 rounded-lg border border-gray-800 text-gray-300 hover:bg-gray-800 hover:border-gray-700 transition-all duration-150 whitespace-nowrap"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="text-xs font-semibold tracking-wide px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-150 whitespace-nowrap"
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
            className="md:hidden flex items-center justify-center p-1.5 rounded-lg border border-gray-800 text-gray-400 hover:text-gray-200 hover:border-gray-700 transition-all duration-150 flex-shrink-0"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {/* ── Mobile overlay ── */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="md:hidden fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease_forwards]"
        />
      )}

      {/* ── Mobile sidebar ── */}
      {open && (
        <aside
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="md:hidden fixed top-0 right-0 bottom-0 z-[120] w-[72%] max-w-[320px] bg-[#080c14] border-l border-gray-800 flex flex-col animate-[slideIn_0.28s_cubic-bezier(0.22,1,0.36,1)_forwards]"
        >
          {/* Sidebar header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-[7px] bg-gradient-to-br from-indigo-600 to-violet-700 flex items-center justify-center text-[11px] font-extrabold text-white">
                EO
              </div>
              <span className="text-[13px] font-bold text-gray-50">Emmanuel</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex items-center justify-center p-1.5 rounded-[7px] bg-[#0f1117] border border-gray-800 text-black hover:text-gray-300 transition-colors"
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

          {/* Sidebar CTAs */}
          <div className="px-5 py-5 border-t border-gray-800 flex flex-col gap-2.5">
            <a
              href="/cv.pdf"
              download
              className="block text-center text-[13px] font-semibold py-2.5 rounded-[9px] border border-gray-800 text-gray-300 hover:bg-gray-800 transition-colors"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-center text-[13px] font-semibold py-2.5 rounded-[9px] bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
            >
              Hire me
            </a>
          </div>

          <div className="px-5 py-3 text-[11px] text-gray-700 text-center">
            © {new Date().getFullYear()} Emmanuel Oguntolu
          </div>
        </aside>
      )}

      {/* Keyframes for animations */}
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
    </>
  )
}