"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import Image from "next/image";

const works = [

  {
    id: 6,
    projectName: "TravelBeta",
    category: "Affiliate System",
    projectDesc: "A full-stack affiliate platform for Nigeria's leading travel OTA, built on Next.js 14 with commission tracking, Paystack payouts, and a Starter-to-Platinum tier engine.",
    projectLink: "#",
    projectStacks: ["NextJs", "Framer Motion", "Typescript"],
    color: "#ff018",
    image: "/images/travelBeta.svg",
  },
    {
    id: 5,
    projectName: "TID",
    category: "Energy Conference",
    projectDesc: "The Industry Discourse is a student-led energy conference that brings young people across the African continent to gain knowledge about the energy ecosystem.  ",
    projectLink: "https://theindustrydiscourse.com",
    projectStacks: ["Next.js", "Tailwind CSS", "Supabase"],
    color: "#000",
    image: "/images/tid-white.png",
  },
  {
    id: 4,
    projectName: "PawChain",
    category: "Web3 Crypto",
    projectDesc: "PawChain is a hybrid decentralized pet marketplace built on Solana Devnet. Pay for pets using SOL.",
    projectLink: "https://pet-shop-umber-three.vercel.app/",
    projectStacks: ["Next.js", "Tailwind CSS", "Web.js", "Supabase"],
    color: "#c8bfb0",
    image: "/images/pawchain.jpg",
  },
  {
    id: 3,
    projectName: "SPACES",
    category: "Film & Web",
    projectDesc: "A visually ambitious feature film landing — a story about creators and an infinite canvas that changes their lives.",
    projectLink: "https://spaces-space.vercel.app",
    projectStacks: ["Next.js", "Tailwind CSS", "Framer Motion"],
    color: "#c8bfb0",
    image: "/images/spaces.jpeg",
  },
  {
    id: 2,
    projectName: "SaaSto",
    category: "Productivity",
    projectDesc: "A collaboration time-tracking platform designed for modern teams. Streamlines how distributed teams log and review work.",
    projectLink: "https://saasto-nine.vercel.app",
    projectStacks: ["Next.js", "Tailwind CSS", "Framer Motion"],
    color: "#b0bfc8",
    image: "/images/saasto.svg",
  },
  {
    id: 1,
    projectName: "NeuroWallet",
    category: "Accessibility · FinTech",
    projectDesc: "A secure, accessible, and inclusive digital wallet built for people with physical disabilities.",
    projectLink: "https://neuro-wallet.vercel.app",
    projectStacks: ["Next.js", "Tailwind CSS", "Express.js"],
    color: "#b8c8b0",
    image: null,
  },
  {
    id: 0,
    projectName: "LYNKK",
    category: "Crypto · Media",
    projectDesc: "A real-time crypto transaction dashboard with integrated editorial content and MongoDB-backed data management.",
    projectLink: "https://lynkk-app.vercel.app",
    projectStacks: ["Next.js", "Tailwind CSS", "MongoDB"],
    color: "#c8c0b0",
    image: "/images/lynkklogo.svg",
  },
];

const ExternalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

const FolderIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
  </svg>
);

const ChevronIcon = ({ dir }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={dir === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
  </svg>
);

// ─────────────────────────────────────────
// MOBILE CAROUSEL
// ─────────────────────────────────────────
function MobileCarousel() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1); // 1 = forward, -1 = backward
  const touchStart = useRef(null);

  const paginate = (newDir) => {
    setDir(newDir);
    setCurrent((prev) =>
      newDir === 1
        ? Math.min(prev + 1, works.length - 1)
        : Math.max(prev - 1, 0)
    );
  };

  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) paginate(diff > 0 ? 1 : -1);
    touchStart.current = null;
  };

  const project = works[current];

  const variants = {
    enter: (d) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <div id="works-mobile" className="md:hidden flex flex-col bg-white min-h-screen">

      {/* Header */}
      <div className="px-5 pt-10 pb-4">
        <p className="text-[12px] font-extrabold tracking-[0.25em] text-[#869eda] uppercase">
          WORK OF ARTS
        </p>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
            Selected work
          </h2>
          <span className="text-xs text-gray-400 font-medium tracking-widest">
            {String(current + 1).padStart(2, "0")} / {String(works.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Card */}
      <div
        className="flex-1 relative overflow-hidden mx-4 mb-4 rounded-2xl"
        style={{ minHeight: "72vh" }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence custom={dir} mode="wait">
          <motion.div
            key={project.id}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 rounded-2xl overflow-hidden"
            style={{ backgroundColor: project.color }}
          >
            {/* Background image or watermark */}
            {project.image ? (
              <img
                src={project.image}
                alt={project.projectName}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div
                className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
                style={{
                  fontSize: "clamp(5rem, 28vw, 10rem)",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.2)",
                  letterSpacing: "-0.04em",
                }}
              >
                {project.projectName.slice(0, 2)}
              </div>
            )}

            {/* Dark overlay so text is readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Category — top */}
            <div className="absolute top-4 left-4">
              <span
                className="text-[10px] font-medium tracking-[0.18em] uppercase px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                  color: "rgba(255,255,255,0.85)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                {project.category}
              </span>
            </div>

            {/* Project name + desc — bottom overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3
                className="text-white font-bold mb-2 leading-tight"
                style={{ fontSize: "clamp(1.6rem, 7vw, 2.2rem)", letterSpacing: "-0.02em" }}
              >
                {project.projectName}
              </h3>
              <p className="text-white text-[13px] leading-relaxed mb-4">
                {project.projectDesc}
              </p>

              {/* Stack pills */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.projectStacks.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] font-medium px-2 py-0.5 rounded"
                    style={{
                      background: "rgba(255,255,255,0.12)",
                      color: "rgba(255,255,255,0.7)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              <a
               href={project.projectLink}
               target="_blank"
               rel="noreferrer"
               className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase text-gray-400 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition-colors"
               >
               Visit site <ExternalIcon />
               </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between px-6 pb-10">

        {/* Prev / Next */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => paginate(-1)}
            disabled={current === 0}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 disabled:opacity-30 transition-opacity active:scale-95"
          >
            <ChevronIcon dir="left" />
          </button>
          <button
            onClick={() => paginate(1)}
            disabled={current === works.length - 1}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 disabled:opacity-30 transition-opacity active:scale-95"
          >
            <ChevronIcon dir="right" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center gap-1.5">
          {works.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i); }}
              className="rounded-full transition-all duration-300"
              style={{
                width: current === i ? 20 : 6,
                height: 6,
                background: current === i ? "#1a1a18" : "#d1d5db",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// DESKTOP SCROLL
// ─────────────────────────────────────────
function DesktopScroll() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      const idx = Math.min(works.length - 1, Math.floor(v * works.length));
      setActive(idx);
    });
    return unsub;
  }, [scrollYProgress]);

  const selected = works[active];

  return (
    <div
      ref={containerRef}
      style={{ height: `${works.length * 100}vh` }}
      className="relative hidden md:block"
    >
      <div id="works-desktop" className="sticky max-w-6xl px-4 mx-auto top-0 h-screen flex flex-col justify-center overflow-hidden">

        <div className="mb-6">
          <p className="text-[12px] font-extrabold tracking-[0.25em] text-[#869eda] uppercase">
            WORK OF ARTS
          </p>
        </div>

        <div
          className="flex rounded-2xl overflow-hidden border border-gray-200"
          style={{ height: "78vh" }}
        >
          {/* LEFT */}
          <div
            className="relative flex flex-col justify-between flex-shrink-0"
            style={{ width: "40%", background: "#f4f9ff" }}
          >
            <div className="flex flex-col items-start justify-center flex-1 px-10 py-12 gap-0.5">
              {works.map((project, i) => (
                <button
                  key={project.id}
                  onClick={() => setActive(i)}
                  className="transition-all duration-300 leading-tight py-1 bg-transparent border-0 cursor-pointer text-center w-full"
                  style={{
                    fontSize: active === i ? "2.1rem" : "1.85rem",
                    fontWeight: active === i ? 600 : 300,
                    color: active === i ? "#1a1a18" : "#b5b2ab",
                    letterSpacing: "-0.01em",
                    padding: "4px 0",
                  }}
                >
                  <span className="relative inline-block">
                    {project.projectName}
                    {active === i && (
                      <motion.span
                        layoutId="underline"
                        className="absolute left-0 bottom-0 h-px bg-gray-900"
                        style={{ width: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </span>
                </button>
              ))}
            </div>

            <div
              className="flex items-center gap-4 px-10 py-5 flex-wrap"
              style={{ borderTop: "0.5px solid rgba(26,26,24,0.12)" }}
            >
              {works.map((project, i) => (
                <button
                  key={project.id}
                  onClick={() => setActive(i)}
                  className="transition-all duration-150 bg-transparent border-0 cursor-pointer p-0"
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    fontWeight: active === i ? 700 : 400,
                    color: active === i ? "#1a1a18" : "#b5b2ab",
                  }}
                >
                  {project.projectName}
                </button>
              ))}
            </div>

            <motion.div
              className="absolute left-0 top-0 bottom-0 w-0.5"
              style={{ background: "#1a1a18", scaleY: scrollYProgress, transformOrigin: "top" }}
            />
          </div>

          {/* RIGHT */}
          <div className="relative flex-1 overflow-hidden">

            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id + "-bg"}
                className="absolute inset-0"
                style={{ backgroundColor: selected.color }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </AnimatePresence>

            {/* Image or watermark */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id + "-img"}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {selected.image ? (
                  <img
                    src={selected.image}
                    alt={selected.projectName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span
                    className="select-none pointer-events-none"
                    style={{
                      fontSize: "clamp(6rem, 18vw, 14rem)",
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.18)",
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {selected.projectName.slice(0, 2)}
                  </span>
                )}
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id + "-cat"}
                className="absolute top-5 left-6"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                style={{
                  fontSize: 10,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.6)",
                  fontWeight: 500,
                }}
              >
                {selected.category}
              </motion.div>
            </AnimatePresence>

            <div
              className="absolute top-5 right-6"
              style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: "0.12em", fontWeight: 500 }}
            >
              {String(active + 1).padStart(2, "0")} / {String(works.length).padStart(2, "0")}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id + "-card"}
                className="absolute bottom-6 right-6"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  background: "rgba(20,20,18,0.75)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  borderRadius: 14,
                  padding: "22px 24px",
                  maxWidth: 320,
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div style={{ marginBottom: 12, color: "rgba(255,255,255,0.5)" }}>
                  <FolderIcon />
                </div>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.88)", margin: "0 0 14px", fontWeight: 400 }}>
                  {selected.projectDesc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                  {selected.projectStacks.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontSize: 10, letterSpacing: "0.08em", padding: "3px 8px",
                        borderRadius: 4, background: "rgba(255,255,255,0.1)",
                        color: "rgba(255,255,255,0.65)", border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <a
                  href={selected.projectLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase",
                    color: "rgba(255,255,255,0.45)", textDecoration: "none",
                    fontWeight: 500, transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                >
                  Visit site <ExternalIcon />
                </a>
              </motion.div>
            </AnimatePresence>

            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
              {works.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="w-1.5 rounded-full transition-all duration-300 cursor-pointer border-0 p-0"
                  style={{
                    height: active === i ? 24 : 6,
                    background: active === i ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.25)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// ROOT EXPORT
// ─────────────────────────────────────────
export default function Works() {
  return (
    <section id="works">
      <MobileCarousel />
      <DesktopScroll />
    </section>
  );
}