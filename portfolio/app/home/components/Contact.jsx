"use client"
import { useState } from "react"

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

const INFO = [
  {
    label: "Email",
    value: "hello@emmanuel.dev",
    href: "mailto:hello@emmanuel.dev",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Lagos, Nigeria",
    href: null,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Availability",
    value: "Open to work",
    href: null,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    highlight: true,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [status, setStatus] = useState(null) // "sending" | "success" | "error"

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("sending")
    // Replace with your actual form handler (Resend, EmailJS, Formspree, etc.)
    await new Promise((r) => setTimeout(r, 1400))
    setStatus("success")
    setForm({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section id="contact" className="border border-black py-24 px-6">
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .contact-in { animation: slideUp 0.5s ease both; }
        .field {
          width: 100%;
          background: #080c14;
          border: 1px solid #1f2937;
          border-radius: 10px;
          padding: 11px 14px;
          font-size: 14px;
          color: #f9fafb;
          outline: none;
          transition: border-color 0.2s;
          font-family: inherit;
        }
        .field::placeholder { color: #4b5563; }
        .field:focus { border-color: #4f46e5; }
        textarea.field { resize: none; }
      `}</style>

      <div className="max-w-6xl border mx-auto">

        {/* Header */}
        <div className="mb-16 space-y-3">
          <p className="text-[11px] tracking-[0.22em] uppercase text-indigo-500 font-semibold">
            Contact
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-50 leading-tight">
            Let's build something
            <span className="text-indigo-400"> together</span>
          </h2>
          <p className="text-[15px] text-gray-500 leading-relaxed max-w-md">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">

          {/* ── LEFT: Info ── */}
          <div className="md:col-span-2 flex flex-col gap-6">

            {/* Info cards */}
            <div className="flex flex-col gap-3">
              {INFO.map(({ label, value, href, icon, highlight }) => {
                const inner = (
                  <div
                    key={label}
                    className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-800 bg-gray-900/50"
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${highlight ? "bg-emerald-500/10 text-emerald-400" : "bg-gray-800 text-gray-400"}`}>
                      {icon}
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-600 uppercase tracking-widest font-medium mb-0.5">
                        {label}
                      </p>
                      <p className={`text-[13px] font-semibold ${highlight ? "text-emerald-400" : "text-gray-200"}`}>
                        {highlight && (
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 mb-0.5 animate-pulse" />
                        )}
                        {value}
                      </p>
                    </div>
                  </div>
                )
                return href ? (
                  <a key={label} href={href} className="hover:opacity-80 transition-opacity">
                    {inner}
                  </a>
                ) : (
                  <div key={label}>{inner}</div>
                )
              })}
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-800" />

            {/* Socials */}
            <div>
              <p className="text-[11px] text-gray-600 uppercase tracking-widest font-medium mb-3">
                Find me on
              </p>
              <div className="flex items-center gap-2">
                {SOCIALS.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 border border-gray-800 bg-gray-900/50 hover:text-indigo-400 hover:border-indigo-700 transition-all"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Response time card */}
            <div className="mt-auto rounded-xl border border-gray-800 bg-gray-900/40 p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 flex-shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-gray-200 mb-0.5">Quick responder</p>
                  <p className="text-[12px] text-gray-500 leading-relaxed">
                    I typically reply within 24 hours. For urgent work, mention it in the subject.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-gray-800 bg-gray-900/40 p-7 flex flex-col gap-4"
            >

              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] text-gray-500 uppercase tracking-widest font-medium">
                    Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Emmanuel Oguntolu"
                    className="field"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] text-gray-500 uppercase tracking-widest font-medium">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="field"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] text-gray-500 uppercase tracking-widest font-medium">
                  Subject
                </label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project enquiry / Just saying hi"
                  className="field"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] text-gray-500 uppercase tracking-widest font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project, timeline, and budget..."
                  className="field"
                />
              </div>

              {/* Success message */}
              {status === "success" && (
                <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25 contact-in">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <p className="text-[13px] text-emerald-400 font-medium">
                    Message sent! I'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-1 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white transition-all active:scale-[0.98]"
              >
                {status === "sending" ? (
                  <>
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                    </svg>
                  </>
                )}
              </button>

            </form>
          </div>
        </div>       
      </div>
    </section>
  )
}