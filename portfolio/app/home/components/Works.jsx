import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const works = [
     {
          id: 1,
          projectName: "SPACES",
          projectDesc: " SPACES is a feature film — a visually ambitious story about creators and an infinite canvas that changes their lives. It blends spectacle with intimate character moments for a cinematic experience.",
          projectLink: "https://spaces-space.vercel.app",
          projectStacks: ["NextJs", "TailwindCss", "Framer-Motion"]
     },
     {
          id: 2,
          projectName: "SaaSto",
          projectDesc: "SaaSto – A collaboration time tracking that you need",
          projectLink: "https://saasto-nine.vercel.app",
          projectStacks: ["NextJs", "TailwindCss", "Framer-Motion"]
     },
     {
          id: 3,
          projectName: "NeuroWallet",
          projectDesc: "NeuroWallet – A project that allows secure, accessible, and inclusive digital wallet for physical disabilities.",
          projectLink: "https://neurowallet.vercel.app",
          projectStacks: ["NextJs", "TailwindCss", "Framer-Motion"]
     },
]

const Works = () => {
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
                              <img alt="Lynkk Preview"/>
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
               <div>
                    <div className='Tab'>
                    {
                         works.map((project)=> (
                              <div>
                                   <p>{project.projectName}</p>
                              </div>
                         ))
                    }
                    </div>
               </div>
               <br/>
               <br/>
               <br/>
          </section>
     )
}

export default Works