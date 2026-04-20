"use client"

import FullStackVenn from "./FullstackVenn"


const FACTS = [
  { value: "4+",  label: "Years building" },
  { value: "10+", label: "Projects shipped" },
  { value: "5+", label: "Happy clients" },
]

export default function About() {
  return (
    <section id="about" className="border border-black px-8">
      <br/>
      <br/>
      <br/>
      <div className="border mx-auto">

        {/* ── Two-column layout ── */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT — Bio */}
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-[11px] tracking-[0.22em] uppercase text-indigo-500 font-semibold">
                About me
              </p>
            </div>

            <p className="text-[15px] text-black leading-[1.9]">
              I'm a{" "}
              <span className="text-black font-semibold">Software Engineer</span>{" "}
              based in Lagos, Nigeria — passionate about turning complex problems
              into clean, user-friendly digital products. I bridge the gap between
              design and engineering, crafting experiences that feel as good as
              they work.
            </p>

            <p className="text-[15px] text-black leading-[1.9]">
              When I'm not shipping code, I'm exploring new tools, contributing to
              open source, or mentoring up-and-coming developers in the Lagos tech
              community.
            </p>

            {/* Fact strip */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {FACTS.map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1 py-4 px-2 rounded-xl border border-gray-800"
                >
                  <span className="text-2xl font-extrabold text-black tracking-tight">
                    {value}
                  </span>
                  <span className="text-[11px] text-black text-center leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stack label */}
          <div className="space-y-4">
            <p className="text-[11px] tracking-[0.22em] uppercase text-gray-600 font-semibold">
              Tech stack
            </p>
            <FullStackVenn/>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
    </section>
  )
}