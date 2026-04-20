"use client"
import { useEffect, useState } from "react"

export default function ScrollIndicator() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const size = 72
  const strokeWidth = 8
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
  const scrollDown = () => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })

  return (
    <div
      className="fixed bottom-8 right-8 z-50 cursor-pointer group"
      onClick={progress > 5 ? scrollToTop : scrollDown}
      aria-label={progress > 5 ? "Scroll to top" : "Scroll down"}
      role="button"
    >
      {/* SVG ring — size+10 = 82px total */}
      <svg
        width={size + 10}
        height={size + 10}
        viewBox={`0 0 ${size + 10} ${size + 10}`}
        className="absolute inset-0 -rotate-90"
      >
        {/* Track */}
        <circle
          cx={(size + 10) / 2}
          cy={(size + 10) / 2}
          r={radius}
          fill="none"
          stroke="#d1d5db"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        {/* Progress */}
        <circle
          cx={(size + 10) / 2}
          cy={(size + 10) / 2}
          r={radius}
          fill="none"
          stroke="#111827"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.2s ease" }}
        />
      </svg>

      {/* Inner circle — margin=(82-56)/2=13px to stay centered */}
      <div className="relative z-10 m-[13px] w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center transition-transform duration-200 group-hover:scale-95">
        {progress > 5 ? (
          <svg
            width="18" height="18" viewBox="0 0 24 24"
            fill="none" stroke="white" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
            className="transition-transform duration-200 group-hover:-translate-y-0.5"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        ) : (
          <svg
            width="18" height="18" viewBox="0 0 24 24"
            fill="none" stroke="white" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        )}
      </div>
    </div>
  )
}