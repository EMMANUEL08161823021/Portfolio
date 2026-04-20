"use client"

const FRONTEND = [
  { name: "React",    x: -80, y: -60,  icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="#61dafb"><path d="M14.23 12a2.24 2.24 0 1 1-4.47 0 2.24 2.24 0 0 1 4.47 0zm2.65-10.69c-1.35 0-3.11.96-4.89 2.62C10.21 2.28 8.45 1.33 7.1 1.33c-.41 0-.78.09-1.11.28-1.37.79-1.68 3.26-.97 6.36C2.98 8.92 1 10.42 1 12c0 1.59 1.99 3.1 5.04 4.03-.7 3.11-.39 5.59.99 6.38.32.19.69.28 1.1.28 1.35 0 3.11-.96 4.89-2.62 1.78 1.65 3.54 2.62 4.89 2.62.41 0 .78-.09 1.1-.28 1.38-.79 1.68-3.26.97-6.37C22.02 15.1 24 13.59 24 12c0-1.59-1.99-3.1-5.04-4.03.7-3.11.39-5.59-.99-6.38a2.19 2.19 0 0 0-1.09-.28z"/></svg> },
  { name: "Vue",      x: -130, y: 10,  icon: <svg viewBox="0 0 24 24" width="20" height="20"><path d="M2 3h3.5L12 15l6.5-12H22L12 21 2 3z" fill="#42b883"/><path d="M6.5 3H10l2 3.5L14 3h3.5L12 12 6.5 3z" fill="#35495e"/></svg> },
  { name: "Angular",  x: -55,  y: -110, icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="#DD0031"><path d="M12 2.25L2.09 5.72l1.55 13.48L12 21.75l8.36-2.55 1.55-13.48L12 2.25zm0 2.08l6.9 2.1-1.27 11.04L12 19.49 6.37 17.47 5.1 6.43 12 4.33zm0 2.13L7.64 16.97h1.7l.9-2.25h3.52l.9 2.25h1.7L12 6.46zm0 2.56l1.32 3.3H10.68L12 9.02z"/></svg> },
  { name: "HTML5",    x: -140, y: -55, icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="#e34f26"><path d="M1.5 0h21l-1.91 21.56L11.98 24l-8.57-2.44L1.5 0zm7.03 9.75l-.23-2.72 10.06.003.23-2.62L5.41 4.41l.7 8.01h9.13l-.33 3.43-2.91.8-2.96-.81-.19-2.11H6.25l.33 4.17L12 19.35l5.38-1.44.74-8.16H8.53z"/></svg> },
  { name: "Tailwind", x: -118, y: 75,  icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="#06b6d4"><path d="M12 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.91.23 1.57.89 2.29 1.62C13.67 10.62 15.03 12 18 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.91-.23-1.57-.89-2.29-1.62C16.34 6.18 14.98 4.8 12 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.91.23 1.57.89 2.29 1.62C7.66 17.81 9.02 19.2 12 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.91-.23-1.57-.89-2.29-1.62C10.34 13.38 8.98 12 6 12z"/></svg> },
]

const BACKEND = [
  { name: "Python",  x: 55,   y: -110, icon: <svg viewBox="0 0 24 24" width="20" height="20"><path d="M11.91 0C5.72 0 6.1 2.66 6.1 2.66v2.76h5.91v.83H3.83S0 5.83 0 12.09s3.28 6.04 3.28 6.04h1.96v-2.9s-.11-3.28 3.22-3.28h5.56s3.12.05 3.12-3.02V3.06S17.6 0 11.91 0zm-3.27 1.76a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="#3776ab"/><path d="M12.09 24c6.19 0 5.81-2.66 5.81-2.66v-2.76h-5.91v-.83h8.18S24 18.17 24 11.91s-3.28-6.04-3.28-6.04h-1.96v2.9s.11 3.28-3.22 3.28H9.98s-3.12-.05-3.12 3.02v5.87S6.4 24 12.09 24zm3.27-1.76a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" fill="#ffd43b"/></svg> },
  { name: "Node.js", x: 80,   y: -50,  icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="#339933"><path d="M12 1.85L2.09 7.42v9.15L12 22.15l9.91-5.58V7.42L12 1.85zm0 2.31l7.45 4.19v8.3L12 20.84l-7.45-4.19v-8.3L12 4.16z"/></svg> },
  { name: "Java",    x: 120,  y: 15,   icon: <svg viewBox="0 0 24 24" width="20" height="20"><path d="M8.85 17.6s-.96.56.68.75c2 .22 3 .19 5.19-.21 0 0 .58.36 1.38.67-4.9 2.1-11.09-.12-7.25-1.21zm-.58-2.67s-1.07.8.57.97c2.12.22 3.8.24 6.7-.32 0 0 .4.41 1.03.63-5.93 1.74-12.53.14-8.3-1.28zm9.73-1.28c.02 0 2.23 1.11.39 3.2-1.68 1.88-3.48.66-3.48.66s5.5-4.67 3.09-3.86zm2.87 9.15s.7.58-.78.77c-2.82.34-11.74.44-14.22.01-.89-.14 1.61-.87 2.55-.78.97.1 1.23.12 1.23.12C7.19 21.96.34 22.78.06 17.6c-.27-4.87 7.35-7.47 7.35-7.47s-4.87 10.1 14.46 13.67zM14.6.04s2.95 2.95-2.79 7.49C7.27 11.1 10.93 12.8 11.79 14.68c-2.22-2-3.85-3.76-2.76-5.4C10.7 6.83 15.92 5.69 14.6.04z" fill="#e76f00"/></svg> },
  { name: "PHP",     x: 118,  y: 80,   icon: <svg viewBox="0 0 50 20" width="40" height="16"><ellipse cx="25" cy="10" rx="25" ry="10" fill="#8892bf"/><text x="25" y="14" textAnchor="middle" fontSize="10" fontWeight="700" fill="white" fontFamily="system-ui">php</text></svg> },
  { name: "Ruby",    x: 60,   y: 110,  icon: <svg viewBox="0 0 24 24" width="20" height="20"><path d="M20.16 2L3.06 9.37 2 21.57l10.47.43L22 13.66 20.16 2zm-1.42 2.39 1.15 7.57-6.08 5.34-7.83-.32L7.9 10.7l10.84-6.31zM5.56 18.04l7.46.31 5.81-5.1-1.09-7.22-10.3 6 .12 5.99-2.12.02z" fill="#CC342D"/></svg> },
]

const DATABASE = [
  { name: "MongoDB",    x: -70,  y: 95,  icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="#47a248"><path d="M17.19 9.56c-1.26-5.58-4.25-7.41-4.57-8.11-.28-.4-.53-.96-.74-1.45-.04.5-.05.69-.52 1.18-.72.57-4.44 3.68-4.74 10.02-.28 5.91 4.27 9.44 4.89 9.88l.07.05A73 73 0 0 1 11.91 24h.48c.11-1.03.28-2.06.51-3.07.42-.3.6-.46.85-.69a11.34 11.34 0 0 0 3.64-8.46c.01-.81-.05-1.63-.2-2.22zm-5.34 8.19s0-8.29.28-8.29c.21 0 .49 10.7.49 10.7-.38-.05-.77-1.76-.77-2.41z"/></svg> },
  { name: "PostgreSQL", x: 0,    y: 130, icon: <svg viewBox="0 0 24 24" width="20" height="20"><path d="M17.13 2.29c-.63-.14-1.28-.2-1.93-.18a7.2 7.2 0 0 0-1.9.34 6.87 6.87 0 0 0-2.01-1.18C10.37.82 9.35.7 8.36.88c-.99.19-1.88.62-2.6 1.25A5.83 5.83 0 0 0 4.1 4.45C3.24 6.37 3.2 8.57 3.9 10.6c.7 2.02 2 3.79 3.67 5.02.46.34.97.6 1.5.78-.07.66-.12 1.33-.12 2 0 .38.01.77.04 1.15-.1.66-.3 1.27-.6 1.78-.27.48-.65.9-1.1 1.17.28.4.65.72 1.08.93.43.2.9.28 1.37.24.46-.04.9-.2 1.28-.46.37-.26.67-.62.87-1.02a3.74 3.74 0 0 0 .38-1.57 13.4 13.4 0 0 0-.04-1.18c0-.65-.07-1.3-.13-1.95.5-.18.98-.45 1.4-.81a6.7 6.7 0 0 0 3.46 1.9c1.27.27 2.58.16 3.78-.33 1.2-.49 2.24-1.33 2.99-2.41.75-1.08 1.18-2.38 1.22-3.7.05-1.32-.29-2.64-.97-3.77A7.07 7.07 0 0 0 17.13 2.3z" fill="#336791"/></svg> },
  { name: "MySQL",      x: 70,   y: 95,  icon: <svg viewBox="0 0 60 20" width="48" height="16"><text x="0" y="16" fontSize="16" fontWeight="800" fill="#00758f" fontFamily="system-ui">My</text><text x="30" y="16" fontSize="16" fontWeight="800" fill="#f29111" fontFamily="system-ui">SQL</text></svg> },
  { name: "Redis",      x: -35,  y: 55,  icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="#DC382D"><path d="M2.28 15.01 12 19.74l9.72-4.73L12 10.3l-9.72 4.71zm11.2-5.29L24 15.01v2.28l-12 5.84L0 17.29v-2.28l10.52-5.29-3.4-1.65L0 11.35V9.07l12-5.84 12 5.84v2.28l-7.12 3.28-3.4-1.63z"/></svg> },
]

const OVERLAPS = [
  {
    name: "JavaScript", x: 0, y: -75,
    icon: (
      <div style={{ background: "#f7df1e", borderRadius: 6, width: 36, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: 11, fontWeight: 900, color: "#1a1a1a" }}>JS</span>
      </div>
    ),
  },
  {
    name: "Git", x: -75, y: 55,
    icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="#f05032"><path d="M23.55 10.93L13.07.45a1.55 1.55 0 0 0-2.19 0L8.71 2.63l2.76 2.76a1.84 1.84 0 0 1 2.33 2.34l2.66 2.66a1.84 1.84 0 1 1-1.1 1.7 1.84 1.84 0 0 1 .44-1.2L13.29 8.9v6.52a1.84 1.84 0 1 1-1.51-.06V8.84a1.84 1.84 0 0 1-1-2.42L7.64 3.7.45 10.88a1.55 1.55 0 0 0 0 2.19l10.48 10.48a1.55 1.55 0 0 0 2.19 0l10.43-10.43a1.55 1.55 0 0 0 0-2.19z"/></svg>,
  },
  {
    name: "Firebase", x: 75, y: 55,
    icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="#ffca28"><path d="M3.89 15.67L6.26.46A.54.54 0 0 1 7.27.29l2.54 4.77zm16.79 3.69-2.25-14a.54.54 0 0 0-.92-.3L3.32 19.37l7.86 4.43a1.62 1.62 0 0 0 1.59 0zm-9.38-11.2-1.82-3.48a.54.54 0 0 0-.96 0L3.53 17.98z"/></svg>,
  },
]

function LogoNode({ icon, name, x, y, cx, cy, ringColor, bgColor }) {
  return (
    <div
      className="absolute flex flex-col items-center gap-1 group cursor-default"
      style={{ left: cx + x - 20, top: cy + y - 20 }}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
        style={{ background: bgColor, border: `1px solid ${ringColor}` }}
      >
        {icon}
      </div>
      <span className="text-[9px] font-medium text-gray-500 whitespace-nowrap leading-tight">
        {name}
      </span>
    </div>
  )
}

export default function FullStackVenn() {
  const R = 148
  const cx = { fe: 195, be: 325, db: 260 }
  const cy = { fe: 168, be: 168, db: 285 }

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Venn container */}
        <div className="relative mx-auto" style={{ width: 520, height: 460 }}>

          {/* SVG circles */}
          <svg
            width="520"
            height="460"
            className="absolute inset-0"
            style={{ overflow: "visible" }}
          >
            {/* Frontend circle */}
            <circle
              cx={cx.fe} cy={cy.fe} r={R}
              fill="rgba(99,102,241,0.07)"
              stroke="rgba(99,102,241,0.5)"
              strokeWidth="1.5"
            />
            {/* Backend circle */}
            <circle
              cx={cx.be} cy={cy.be} r={R}
              fill="rgba(34,197,94,0.05)"
              stroke="rgba(34,197,94,0.45)"
              strokeWidth="1.5"
            />
            {/* Database circle */}
            <circle
              cx={cx.db} cy={cy.db} r={R}
              fill="rgba(251,191,36,0.06)"
              stroke="rgba(251,191,36,0.45)"
              strokeWidth="1.5"
            />
          </svg>

          {/* Section labels */}
          <div className="absolute" style={{ left: cx.fe - 60, top: cy.fe - R - 28 }}>
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-indigo-400">Frontend</span>
          </div>
          <div className="absolute" style={{ left: cx.be - 28, top: cy.be - R - 28 }}>
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-green-400">Backend</span>
          </div>
          <div className="absolute text-center" style={{ left: cx.db - 38, top: cy.db + R + 8 }}>
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-amber-400">Database</span>
          </div>

          {/* Full Stack center label */}
          <div
            className="absolute flex flex-col items-center"
            style={{ left: 260 - 24, top: 218 }}
          >
            <span className="text-[9px] font-black tracking-[0.12em] uppercase text-black leading-tight">Full</span>
            <span className="text-[9px] font-black tracking-[0.12em] uppercase text-black leading-tight">Stack</span>
          </div>

          {/* Frontend logos */}
          {FRONTEND.map((item) => (
            <LogoNode
              key={item.name}
              {...item}
              cx={cx.fe} cy={cy.fe}
              ringColor="rgba(99,102,241,0.35)"
              bgColor="rgba(99,102,241,0.12)"
            />
          ))}

          {/* Backend logos */}
          {BACKEND.map((item) => (
            <LogoNode
              key={item.name}
              {...item}
              cx={cx.be} cy={cy.be}
              ringColor="rgba(34,197,94,0.35)"
              bgColor="rgba(34,197,94,0.12)"
            />
          ))}

          {/* Database logos */}
          {DATABASE.map((item) => (
            <LogoNode
              key={item.name}
              {...item}
              cx={cx.db} cy={cy.db}
              ringColor="rgba(251,191,36,0.35)"
              bgColor="rgba(251,191,36,0.12)"
            />
          ))}

          {/* Overlap logos — centered between circles */}
          {/* JS: FE + BE midpoint */}
          <div
            className="absolute flex flex-col items-center gap-1 cursor-default group"
            style={{ left: (cx.fe + cx.be) / 2 - 20, top: cy.fe - 95 }}
          >
            <div className="transition-transform duration-200 group-hover:scale-110">
              <div
                style={{
                  background: "#f7df1e",
                  borderRadius: 6,
                  width: 38, height: 30,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <span style={{ fontSize: 12, fontWeight: 900, color: "#1a1a1a" }}>JS</span>
              </div>
            </div>
            <span className="text-[9px] font-medium text-gray-500 whitespace-nowrap">JavaScript</span>
          </div>

          {/* Git: FE + DB midpoint */}
          <div
            className="absolute flex flex-col items-center gap-1 cursor-default group"
            style={{ left: (cx.fe + cx.db) / 2 - 22, top: (cy.fe + cy.db) / 2 + 30 }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
              style={{ background: "rgba(240,80,50,0.15)", border: "1px solid rgba(240,80,50,0.4)" }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="#f05032">
                <path d="M23.55 10.93L13.07.45a1.55 1.55 0 0 0-2.19 0L8.71 2.63l2.76 2.76a1.84 1.84 0 0 1 2.33 2.34l2.66 2.66a1.84 1.84 0 1 1-1.1 1.7 1.84 1.84 0 0 1 .44-1.2L13.29 8.9v6.52a1.84 1.84 0 1 1-1.51-.06V8.84a1.84 1.84 0 0 1-1-2.42L7.64 3.7.45 10.88a1.55 1.55 0 0 0 0 2.19l10.48 10.48a1.55 1.55 0 0 0 2.19 0l10.43-10.43a1.55 1.55 0 0 0 0-2.19z"/>
              </svg>
            </div>
            <span className="text-[9px] font-medium text-gray-500 whitespace-nowrap">Git</span>
          </div>

          {/* Firebase: BE + DB midpoint */}
          <div
            className="absolute flex flex-col items-center gap-1 cursor-default group"
            style={{ left: (cx.be + cx.db) / 2 - 18, top: (cy.be + cy.db) / 2 + 30 }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
              style={{ background: "rgba(255,202,40,0.15)", border: "1px solid rgba(255,202,40,0.4)" }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="#ffca28">
                <path d="M3.89 15.67L6.26.46A.54.54 0 0 1 7.27.29l2.54 4.77zm16.79 3.69-2.25-14a.54.54 0 0 0-.92-.3L3.32 19.37l7.86 4.43a1.62 1.62 0 0 0 1.59 0zm-9.38-11.2-1.82-3.48a.54.54 0 0 0-.96 0L3.53 17.98z"/>
              </svg>
            </div>
            <span className="text-[9px] font-medium text-gray-500 whitespace-nowrap">Firebase</span>
          </div>

        </div>

        {/* Legend pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {[
            { label: "Frontend", bg: "rgba(99,102,241,0.12)",  border: "rgba(99,102,241,0.4)",  color: "#a5b4fc" },
            { label: "Backend",  bg: "rgba(34,197,94,0.10)",   border: "rgba(34,197,94,0.4)",   color: "#86efac" },
            { label: "Database", bg: "rgba(251,191,36,0.10)",  border: "rgba(251,191,36,0.4)",  color: "#fde68a" },
            { label: "Full Stack",bg: "rgba(255,255,255,0.06)", border: "rgba(255,255,255,0.2)", color: "#e5e7eb" },
          ].map(({ label, bg, border, color }) => (
            <span
              key={label}
              className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-wide uppercase"
              style={{ background: bg, border: `1px solid ${border}`, color }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}