"use client"

const SKILLS = [
  { name: "HTML",        icon: "🟧" },
  { name: "CSS / SCSS",  icon: "🟦" },
  { name: "JavaScript",  icon: "🟨" },
  { name: "TypeScript",  icon: "🔷" },
  { name: "React",       icon: "⚛️" },
  { name: "Next.js",     icon: "▲" },
  { name: "Node.js",     icon: "🟩" },
  { name: "MongoDB",     icon: "🍃" },
  { name: "Firebase",    icon: "🔥" },
  { name: "Tailwind CSS",icon: "🌊" },
  { name: "Bootstrap",   icon: "🅱️" },
  { name: "Framer Motion",icon: "🎞️" },
  { name: "Git",         icon: "🔀" },
  { name: "Figma",       icon: "🎨" },
]

const FACTS = [
  { value: "3+",  label: "Years building" },
  { value: "20+", label: "Projects shipped" },
  { value: "12+", label: "Happy clients" },
]

export default function About() {
  return (
    <section id="about" className="bg-gray-950 py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* ── Two-column layout ── */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT — Bio */}
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-[11px] tracking-[0.22em] uppercase text-indigo-500 font-semibold">
                About me
              </p>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-50 leading-tight">
                Who I am &amp;{" "}
                <span className="text-indigo-400">what I do</span>
              </h2>
            </div>

            <p className="text-[15px] text-gray-400 leading-[1.9]">
              I'm a{" "}
              <span className="text-gray-200 font-semibold">Software Engineer</span>{" "}
              based in Lagos, Nigeria — passionate about turning complex problems
              into clean, user-friendly digital products. I bridge the gap between
              design and engineering, crafting experiences that feel as good as
              they work.
            </p>

            <p className="text-[15px] text-gray-500 leading-[1.9]">
              When I'm not shipping code, I'm exploring new tools, contributing to
              open source, or mentoring up-and-coming developers in the Lagos tech
              community.
            </p>

            {/* Fact strip */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {FACTS.map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1 py-4 px-2 rounded-xl bg-gray-900 border border-gray-800"
                >
                  <span className="text-2xl font-extrabold text-gray-50 tracking-tight">
                    {value}
                  </span>
                  <span className="text-[11px] text-gray-500 text-center leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Tech stack */}
          <div className="space-y-6">

            {/* Avatar placeholder */}
            <div className="relative w-full aspect-square max-w-xs mx-auto md:mx-0 rounded-2xl overflow-hidden border border-gray-800 bg-gray-900 flex items-center justify-center">
              <span className="text-7xl font-black text-gray-800 tracking-tight select-none">
                EO
              </span>
              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-emerald-400" />
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>

            {/* Stack label */}
            <div>
              <p className="text-[11px] tracking-[0.18em] uppercase text-gray-600 font-semibold mb-3">
                Tech stack
              </p>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map(({ name }) => (
                  <span
                    key={name}
                    className="text-[12px] font-medium px-3 py-1.5 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:border-indigo-700 hover:text-indigo-300 transition-colors cursor-default"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>

            {/* Currently section */}
            <div className="rounded-xl bg-gray-900/60 border border-gray-800 p-4 space-y-2">
              <p className="text-[11px] tracking-[0.16em] uppercase text-gray-600 font-semibold">
                Currently
              </p>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                <p className="text-[13px] text-gray-400 leading-relaxed">
                  Building at{" "}
                  <span className="text-gray-200 font-semibold">SkyeStudio</span>{" "}
                  and taking on freelance projects — open to full-time roles.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                <p className="text-[13px] text-gray-400 leading-relaxed">
                  Exploring{" "}
                  <span className="text-gray-200 font-semibold">Web3</span> and{" "}
                  <span className="text-gray-200 font-semibold">AI-powered UIs</span>{" "}
                  on the side.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}