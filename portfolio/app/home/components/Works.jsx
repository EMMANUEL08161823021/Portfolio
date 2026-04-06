"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const works = [
  {
    id: 1,
    projectName: "SPACES",
    category: "Film & Web",
    projectDesc: "A visually ambitious feature film landing — a story about creators and an infinite canvas that changes their lives.",
    projectLink: "https://spaces-space.vercel.app",
    projectStacks: ["Next.js", "Tailwind CSS", "Framer Motion"],
    color: "#c8bfb0",
  },
  {
    id: 2,
    projectName: "SaaSto",
    category: "Productivity",
    projectDesc: "A collaboration time-tracking platform designed for modern teams. Streamlines how distributed teams log and review work.",
    projectLink: "https://saasto-nine.vercel.app",
    projectStacks: ["Next.js", "Tailwind CSS", "Framer Motion"],
    color: "#b0bfc8",
  },
  {
    id: 3,
    projectName: "NeuroWallet",
    category: "Accessibility · FinTech",
    projectDesc: "A secure, accessible, and inclusive digital wallet built for people with physical disabilities.",
    projectLink: "https://neurowallet.vercel.app",
    projectStacks: ["Next.js", "Tailwind CSS", "Express.js"],
    color: "#b8c8b0",
  },
  {
    id: 4,
    projectName: "LYNKK",
    category: "Crypto · Media",
    projectDesc: "A real-time crypto transaction dashboard with integrated editorial content and MongoDB-backed data management.",
    projectLink: "https://lynkk-app.vercel.app",
    projectStacks: ["Next.js", "Tailwind CSS", "MongoDB"],
    color: "#c8c0b0",
  },
  {
    id: 5,
    projectName: "ENERGYM",
    category: "Health & Fitness",
    projectDesc: "A fitness solution offering workout plans, class scheduling, progress tracking, and trainer connections.",
    projectLink: "https://energymfitnessio.netlify.app",
    projectStacks: ["React", "Tailwind CSS"],
    color: "#c0b0c8",
  },
  {
    id: 6,
    projectName: "Vault",
    category: "Web3 · Protocol",
    projectDesc: "A decentralized protocol for resolving wallet-syncing issues, enabling remote resolutions for noncustodial wallets.",
    projectLink: "https://vault-airdrop.netlify.app",
    projectStacks: ["React", "Framer Motion"],
    color: "#b0c4c8",
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


const Works = () => {
     const [selectedIndex, setSelectedIndex] = useState(works.length ? 0 : -1);
     const [active, setActive] = useState(0);
     const selected = works[active];
     return (
          <section className='border'>
               <br/>
               <br/>
               <br/>
               <div className='w-full md:max-w-5xl mx-auto'>
                    <div>
                         <div>
                              <h6>WORKS</h6>
                              <h1>My Recent Projects</h1>
                         </div>
                    </div>
                    <div>
                         <div>
                              <div>
                                   <div>
                                        <span >NextJS</span>
                                        <span >Tailwind</span>
                                        <span >Framer-Motion</span>
                                   </div>

                                   <div>
                                        <h4>SPACES</h4>
                                        <a href="https://spaces-space.vercel.app" >
                                             Link
                                        </a>
                                   </div>

                                   <p>
                                   SPACES is a feature film — a visually ambitious story about creators and an infinite canvas that changes their lives. It blends spectacle with intimate character moments for a cinematic experience.
                                   </p>
                                   <br/>

                                   <div >
                                   <img alt="Lynkk Preview"/>
                                   </div>
                              </div>
                         </div>
                         <div >
                         <div >
                              <div >
                              <span >NextJS</span>
                              <span >Tailwind</span>
                              <span >Frontend</span>
                              </div>

                              <div >
                              <h4 >SaaSto</h4>
                              <a href="https://saasto-nine.vercel.app">             
                              Link                       
                              </a>
                              </div>

                              <p >
                              SaaSto – A collaboration time tracking that you need
                              </p>
                              <br/>

                              <div>
                              <img alt="Lynkk Preview"/>
                              </div>
                         </div>
                         </div>
                         <div >
                         <div >
                              <div >
                              <span >ReactJS</span>
                              <span >Tailwind</span>
                              <span >ExpressJS</span>
                              </div>

                              <div >
                              <h4 >NeuroWallet</h4>
                              <a href="https://neuro-wallet.vercel.app">
                                    Link
                              </a>
                              </div>

                              <p >
                              NeuroWallet – A project that allows secure, accessible, and inclusive digital wallet for physical disabilities.
                              </p>
                              <br/>

                              <div >
                              <img alt="Lynkk Prev"/>
                              </div>
                         </div>
                         </div>
                         <div >
                         <div>
                              <div>
                              <span >NextJs</span>
                              <span >Tailwind</span>
                              </div>

                              <div >
                              <h4 >LYNKK</h4>
                              <a href="https://lynkk-app.vercel.app"  >
                                    Link
                              </a>
                              </div>

                              <p >
                              I built LYNKK, a website focused on real-time crypto transactions and containing articles about cryptocurrency.
                              </p>
                              <br/>

                              <div>
                              <img alt="Lynkk Preview"/>
                              </div>
                         </div>
                         </div>
                         <div >
                         <div>
                              <img alt="Lynkk"/>
                              <div>
                                   <h5>LYNKK</h5>
                                   <p >I built LYNKK, a website focused on real-time crypto transactions and containing articles about cryptocurrency. 
                                        It leverages <span>Next.js</span> for seamless performance, <span>Tailwindcss</span> for responsive design, and <span>MongoDB</span> for robust database management, providing a secure and fast user experience.
                                   </p>                                
                                   <a href="https://lynkk-app.vercel.app/">View</a>

                              </div>
                         </div>
                         </div> 
                         <div >
                              <div>
                                   <div>
                                   <span >Tailwind</span>
                                   <span >ReactJS</span>
                                   </div>

                                   <div >
                                   <h4 >ENERGYM</h4>
                                   <a href="https://energymfitnessio.netlify.app/" >
                                      Link  
                                   </a>
                                   </div>

                                   <p >
                                   A fitness solution built that offers workout plans, class scheduling, progress tracking, 
                                   and trainer connections. This user-friendly app enhances your fitness journey, helping you achieve your goals effortlessly and efficiently.
                                   </p>
                                   <br/>

                                   <div >
                                   <img alt="Phone Shopping Cart Preview"/>
                                   </div>
                              </div>
                         </div>               
                         
                         <div>
                              <div>
                                   <div>
                                   <span >MongoDB</span>
                                   <span >ReactJS</span>
                                   <span >Bootstrap</span>
                                   </div>

                                   <div>
                                   <h4>SkyeStudio</h4>
                                   <a href="https://skyestudio.pro/" >
                                        Link
                                   </a>
                                   </div>

                                   <p>
                                        We help tech entrepreneurs & businesses increase their revenue with custom app design, 
                                        development, social media management & creative content creation.
                                   </p>
                                   <br/>

                                   <div>
                                   <img alt="Phone Shopping Cart Preview"/>
                                   </div>
                              </div>
                         </div>
                         <div>
                              <div>
                                   <div>
                                   <span >ReactJS</span>
                                   <span >SCSS</span>
                                   </div>

                                   <div >
                                        <h4>Crypto Rumble</h4>
                                        <a href="https://crypto-rumble.netlify.app/" >
                                             
                                        </a>
                                   </div>

                                   <p>
                                        Crypto Rumble operates in the cryptocurrency industry, encompassing exchanges, blockchain developers, 
                                        crypto wallets, DeFi platforms, token issuers, and investment funds.
                                   </p>
                                   <br/>

                                   <div>
                                   <img alt="Phone Shopping Cart Preview"/>
                                   </div>
                              </div>
                         </div>
                         <div>
                         <div>
                              <div>
                              <span >ReactJS</span>
                              <span >Framer Motion</span>
                              </div>

                              <div>
                              <h4>Vault</h4>
                              <a href="https://vault-airdrop.netlify.app" >
                                   Link
                              </a>
                              </div>

                              <p>I developed a decentralized protocol for resolving wallet-syncing issues on secure servers. It’s not an app but a protocol enabling remote resolutions for noncustodial wallets.
                              <br/></p>

                              <div>
                              <img alt="Phone Shopping Cart Preview"/>
                              </div>
                         </div>
                         </div>

                         <div>
                         <div>
                              <div>
                                   <img alt="todolist image" />
                              </div>
                              <div>
                                   <h2>TradeNext</h2>
                                   <p >TradeNext is a digital currency exchange website that is able to provide maker rebates across a number of approved via the injective DAO. It includes cheaper and faster money transfers and decentralized systems that do not collapse at a single point of failure.</p>
                                   <a href="tradenext.netlify.app">View</a>
                              </div>
                         </div>
                         </div>

                    
                    </div>
               </div>
               <div className="w-full max-w-6xl mx-auto px-6">

                    {/* Section label */}
               <p className="text-[10px] tracking-[0.25em] text-gray-400 uppercase mb-10">
                    My Projects
               </p>

               {/* Main split panel */}
               <div className="flex rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800" style={{ minHeight: 520 }}>

                    {/* ── LEFT PANEL ── */}
                    <div
                    className="relative flex flex-col justify-between"
                    style={{ width: "38%", background: "#f0ede8", flexShrink: 0 }}
                    >
                    {/* Project name list */}
                    <div className="flex flex-col justify-center flex-1 px-10 py-12 gap-1">
                    {works.map((project, i) => (
                         <button
                         key={project.id}
                         onClick={() => setActive(i)}
                         className="text-left transition-all duration-200 leading-tight py-1"
                         style={{
                              fontFamily: "Georgia, serif",
                              fontSize: active === i ? "2rem" : "1.85rem",
                              fontWeight: active === i ? "600" : "300",
                              color: active === i ? "#1a1a18" : "#b5b2ab",
                              letterSpacing: "-0.01em",
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              padding: "4px 0",
                         }}
                         >
                         {project.projectName}
                         </button>
                    ))}
                    </div>

                    {/* Bottom tab nav */}
                    <div
                    className="flex items-center gap-4 px-10 py-5 flex-wrap"
                    style={{ borderTop: "0.5px solid rgba(26,26,24,0.12)" }}
                    >
                    {works.map((project, i) => (
                         <button
                         key={project.id}
                         onClick={() => setActive(i)}
                         className="transition-all duration-150"
                         style={{
                              fontFamily: "inherit",
                              fontSize: "9px",
                              letterSpacing: "0.16em",
                              textTransform: "uppercase",
                              fontWeight: active === i ? "700" : "400",
                              color: active === i ? "#1a1a18" : "#b5b2ab",
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              padding: 0,
                         }}
                         >
                         {project.projectName}
                         </button>
                    ))}
                    </div>
                    </div>

                    {/* ── RIGHT PANEL ── */}
                    <div className="relative flex-1 overflow-hidden">

                    {/* Background — placeholder colored canvas (swap for <img> when ready) */}
                    <div
                    className="absolute inset-0 transition-colors duration-500"
                    style={{ backgroundColor: selected.color }}
                    >
                    {/* Decorative initials watermark */}
                    <div
                         className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
                         style={{
                         fontFamily: "Georgia, serif",
                         fontSize: "clamp(6rem, 18vw, 14rem)",
                         fontWeight: "700",
                         color: "rgba(255,255,255,0.18)",
                         letterSpacing: "-0.04em",
                         }}
                    >
                         {selected.projectName.slice(0, 2)}
                    </div>
                    </div>

                    {/* Floating info card — bottom right (matches reference) */}
                    <div
                    className="absolute bottom-6 right-6"
                    style={{
                         background: "rgba(30,30,28,0.72)",
                         backdropFilter: "blur(12px)",
                         WebkitBackdropFilter: "blur(12px)",
                         borderRadius: 12,
                         padding: "20px 22px",
                         maxWidth: 280,
                         animation: "cardIn 0.25s ease",
                    }}
                    >
                    <style>{`
                         @keyframes cardIn {
                         from { opacity: 0; transform: translateY(8px); }
                         to   { opacity: 1; transform: translateY(0); }
                         }
                    `}</style>

                    <div style={{ marginBottom: 12, color: "rgba(255,255,255,0.6)" }}>
                         <FolderIcon />
                    </div>

                    <p
                         style={{
                         fontSize: 13,
                         lineHeight: 1.6,
                         color: "rgba(255,255,255,0.9)",
                         margin: "0 0 14px",
                         fontWeight: 500,
                         }}
                    >
                         {selected.projectDesc}
                    </p>

                    {/* Stack pills */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
                         {selected.projectStacks.map((s) => (
                         <span
                              key={s}
                              style={{
                              fontSize: 10,
                              letterSpacing: "0.08em",
                              padding: "3px 8px",
                              borderRadius: 4,
                              background: "rgba(255,255,255,0.12)",
                              color: "rgba(255,255,255,0.7)",
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
                         display: "inline-flex",
                         alignItems: "center",
                         gap: 6,
                         fontSize: 11,
                         letterSpacing: "0.12em",
                         textTransform: "uppercase",
                         color: "rgba(255,255,255,0.5)",
                         textDecoration: "none",
                         fontWeight: 500,
                         transition: "color 0.15s",
                         }}
                         onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                         onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                    >
                         Visit site <ExternalIcon />
                    </a>
                    </div>

                    {/* Category label — top left */}
                    <div
                    className="absolute top-5 left-6"
                    style={{
                         fontSize: 10,
                         letterSpacing: "0.18em",
                         textTransform: "uppercase",
                         color: "rgba(255,255,255,0.55)",
                         fontWeight: 500,
                    }}
                    >
                    {selected.category}
                    </div>
                    </div>
               </div>
               </div>
               <br/>
               <br/>
               <br/>
          </section>
     )
}

export default Works