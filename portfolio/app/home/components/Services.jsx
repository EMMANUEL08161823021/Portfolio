"use client"

const SERVICE_DATA = [
  {
    id: "web-app",
    title: "UI/ UX Design",
    description:
      "Fast, accessible, and scalable web applications — from marketing sites to complex admin dashboards. Built with Next.js and optimised for performance from day one.",
    tags: ["Next.js", "React", "TypeScript"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    accent: "from-indigo-500/10 to-indigo-500/0",
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-400",
    borderHover: "hover:border-indigo-500/40",
    tagColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  },
  {
    id: "auth",
    title: "Front-end Development",
    description:
      "Robust authentication flows using JWT, OAuth 2.0, and session management. Role-based access control and security hardening so your users and data stay safe.",
    tags: ["JWT", "OAuth", "RBAC"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l6 4v4c0 5-3 9-6 11-3-2-6-6-6-11V6l6-4z" />
        <circle cx="12" cy="11" r="2" />
      </svg>
    ),
    accent: "from-emerald-500/10 to-emerald-500/0",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    borderHover: "hover:border-emerald-500/40",
    tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  {
    id: "payments",
    title: "Payments & E-commerce",
    description:
      "End-to-end payment integration with Stripe, Paystack, or Flutterwave. Smooth checkout flows, subscription billing, and webhook handling built to convert.",
    tags: ["Stripe", "Paystack", "Webhooks"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    accent: "from-violet-500/10 to-violet-500/0",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
    borderHover: "hover:border-violet-500/40",
    tagColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  },
  {
    id: "ui",
    title: "Fullstack Development",
    description:
      "Pixel-perfect, accessible interfaces translated directly from Figma. Micro-interactions, animation, and component systems that make your product feel premium.",
    tags: ["Figma", "Tailwind", "Framer Motion"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
    accent: "from-pink-500/10 to-pink-500/0",
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-400",
    borderHover: "hover:border-pink-500/40",
    tagColor: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  },
  {
    id: "api",
    title: "API & Backend Development",
    description:
      "RESTful and GraphQL APIs built with Node.js and Express. Database design with MongoDB or PostgreSQL, third-party integrations, and clean server-side architecture.",
    tags: ["Node.js", "REST", "MongoDB"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    accent: "from-amber-500/10 to-amber-500/0",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
    borderHover: "hover:border-amber-500/40",
    tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
  {
    id: "api",
    title: "API & Backend Development",
    description:
      "RESTful and GraphQL APIs built with Node.js and Express. Database design with MongoDB or PostgreSQL, third-party integrations, and clean server-side architecture.",
    tags: ["Node.js", "REST", "MongoDB"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    accent: "from-amber-500/10 to-amber-500/0",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
    borderHover: "hover:border-amber-500/40",
    tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
]

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
)

export default function Services() {
  return (
    <section id="services" className="text-black">
      <br/>
      <br/>
      <br/>
      <div className="max-w-6xl px-4 mx-auto">

        {/* Header */}
        <div className="mb-4 space-y-3">
          <p className="text-[12px] font-extrabold tracking-[0.25em] text-[#869eda] uppercase">
            Services
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            What I can build
            <span className="text-[#869eda]"> for you</span>
          </h2>
          <p className="text-[15px] text-gray-900 leading-relaxed max-w-lg">
            End-to-end engineering — from a single feature to a full product. Here's what I bring to the table.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICE_DATA.map((s) => (
            <article
              key={s.id}
              className={`group relative flex flex-col rounded-2xl border border-[#869eda] p-6 transition-all duration-300`}
            >
              {/* Top gradient wash on hover */}
              {/* <div className={`pointer-events-none absolute inset-x-0 top-0 h-32 rounded-t-2xl bg-gradient-to-b ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} /> */}

              {/* Icon */}
              <div className={`relative mb-5 w-11 h-11 rounded-xl flex items-center justify-center ${s.iconBg} ${s.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                {s.icon}
              </div>

              {/* Title */}
              <h3 className="relative text-[15px] font-bold text-black mb-2 leading-snug">
                {s.title}
              </h3>

              {/* Description */}
              <p className="relative text-[13px] text-gray-900 leading-[1.85] flex-1 mb-5">
                {s.description}
              </p>
            </article>
          ))}
        </div>

      </div>
      <br/>
      <br/>
      <br/>
    </section>
  )
}