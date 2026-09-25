import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Bell, Globe, CreditCard, Code, Sparkles, ScanFace, Lock, Bitcoin, Phone, Car, ArrowUpRight, ArrowDownLeft, ChevronLeft, Navigation, Video, Mail, Landmark, Receipt, Calendar, Calculator, Home, Building2, ShoppingBag, MessageCircle, Image as ImageIcon, Clock, StickyNote, Settings, Users, Camera, MessageSquare } from 'lucide-react'

const IOSSignal = () => (
  <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="8" width="3" height="4" rx="1.2" />
    <rect x="4.6" y="5.5" width="3" height="6.5" rx="1.2" />
    <rect x="9.2" y="3" width="3" height="9" rx="1.2" />
    <rect x="13.8" y="0" width="3" height="12" rx="1.2" />
  </svg>
);

const IOSWifi = () => (
  <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.5 11.5C9.32843 11.5 10 10.8284 10 10C10 9.17157 9.32843 8.5 8.5 8.5C7.67157 8.5 7 9.17157 7 10C7 10.8284 7.67157 11.5 8.5 11.5Z" fill="currentColor" />
    <path d="M4.3 6.6C6.6 4.7 10.4 4.7 12.7 6.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M1.3 3.6C5.3 0.4 11.7 0.4 15.7 3.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IOSBattery = () => (
  <div className="relative flex items-center justify-center ml-1">
    <svg width="27" height="13" viewBox="0 0 27 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
      <rect x="0.5" y="0.5" width="22" height="12" rx="3.5" stroke="currentColor" strokeWidth="1" strokeOpacity="0.8" />
      <rect x="2" y="2" width="18" height="9" rx="2" fill="currentColor" />
      <path d="M24.5 4.5C25.0523 4.5 25.5 4.94772 25.5 5.5V7.5C25.5 8.05228 25.0523 8.5 24.5 8.5" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.8" strokeLinecap="round" />
    </svg>
  </div>
);

const SUPPORTED_LANGUAGES = [
  'English', 'English (United States)', 'English (United Kingdom)', 'English (Australia)',
  'English (Canada)', 'English (India)', 'Български', 'العربية', 'Català', 'Hrvatski', 'Čeština',
  'Dansk', 'Nederlands', 'Suomi', 'Français', 'Français (Canada)', 'Deutsch', 'Ελληνικά',
  'עברית', 'हिन्दी', 'Magyar', 'Bahasa Indonesia', 'Italiano', '日本語', '한국어', 'Bahasa Melayu',
  'Norsk Bokmål', 'Polski', 'Português (Portugal)', 'Português (Brasil)', 'Română', 'Русский',
  'Slovenčina', 'Español (España)', 'Español (Latinoamérica)', 'Svenska', 'ไทย', 'Türkçe',
  'Українська', 'Tiếng Việt', '简体中文', '繁體中文'
];

export default function Features() {
  const sections = [
    {
      title: "Unprecedented Realism",
      subtitle: "Dynamic Island & Notifications",
      desc: "Experience a seamless iOS-like interface. Incoming calls, messages, and alerts smoothly expand from the top of the screen just like the real thing. It doesn't just look good—it feels alive.",
      icon: <Bell className="w-8 h-8 text-xeno-secondary" />,
      features: ["Interactive expanding alerts", "Non-intrusive background calls", "Fluid framer-motion animations"],
      reverse: false,
    },
    {
      title: "Ironclad Security",
      subtitle: "Face ID & Lock Screen",
      desc: "Your data is yours. Protect your phone with a realistic lock screen requiring a PIN code or biometric Face ID unlock. Players can set custom wallpapers and see live notifications without unlocking.",
      icon: <ScanFace className="w-8 h-8 text-xeno-primary" />,
      features: ["Custom 4-digit PIN setup", "Biometric Face Scan animation", "Quick-access camera from lockscreen"],
      reverse: true,
    },
    {
      title: "Global Reach",
      subtitle: "42 Built-in Languages",
      desc: "No more messy config files. XenoPhone comes fully translated into 42 languages right out of the box. Your players can switch their language directly from the phone settings dynamically.",
      icon: <Globe className="w-8 h-8 text-xeno-secondary" />,
      features: ["Zero-downtime language switching", "RTL support for Arabic/Hebrew", "Extremely easy to add custom words"],
      reverse: false,
    },
    {
      title: "Financial Empire",
      subtitle: "Banking & Crypto Markets",
      desc: "Control your wealth from the palm of your hand. Transfer money instantly via the Wallet, or dive into the dark web to trade live Bitcoin and Ethereum on our fully functioning Crypto app.",
      icon: <Bitcoin className="w-8 h-8 text-[#f7931a]" />,
      features: ["QBCore & ESX Bank integration", "Live crypto market charts", "Anonymous transfer support"],
      reverse: true,
    }
  ]

  return (
    <section id="features" className="py-24 overflow-hidden relative z-10 bg-[#050507]">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,92,0,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,92,0,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-32 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-mono tracking-widest text-gray-300 uppercase mb-6"
          >
            <Sparkles className="w-4 h-4 text-xeno-primary" />
            Redefining Roleplay
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
          >
            A Masterpiece of <br/>
            <span className="gradient-text">Design & Function</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-xl"
          >
            Every pixel, every animation, and every feature is meticulously crafted to give your server the premium feel it deserves.
          </motion.p>
        </div>

        <div className="flex flex-col gap-32">
          {sections.map((sec, idx) => (
            <div key={idx} className={`flex flex-col ${sec.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}>
              
              <motion.div 
                initial={{ opacity: 0, x: sec.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex-1 w-full"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-xeno-primary/10 to-xeno-secondary/10 border border-xeno-primary/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,92,0,0.1)]">
                  {sec.icon}
                </div>
                <h4 className="text-xeno-primary font-bold tracking-wider uppercase text-sm mb-2">{sec.subtitle}</h4>
                <h3 className="text-4xl font-bold text-white mb-6 leading-tight">{sec.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  {sec.desc}
                </p>
                <ul className="space-y-4">
                  {sec.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-xeno-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 w-full relative flex justify-center lg:justify-end"
              >
                {/* 1:1 Hardware Phone Mockup */}
                <div className="relative w-[320px] h-[660px] rounded-[3.5rem] border-[6px] border-xeno-primary bg-[#09090b] shadow-[0_0_50px_rgba(255,92,0,0.15)] flex flex-col items-center">
                  
                  {/* Hardware Buttons */}
                  {/* Mute Switch */}
                  <div className="absolute -left-[9px] top-[100px] w-1 h-6 bg-xeno-primary rounded-l-sm" />
                  {/* Volume Up */}
                  <div className="absolute -left-[9px] top-[140px] w-1.5 h-14 bg-xeno-primary rounded-l-md" />
                  {/* Volume Down */}
                  <div className="absolute -left-[9px] top-[210px] w-1.5 h-14 bg-xeno-primary rounded-l-md" />
                  {/* Power Button */}
                  <div className="absolute -right-[9px] top-[170px] w-1.5 h-20 bg-xeno-primary rounded-r-md" />

                  {/* Screen Container */}
                  <div className="relative w-full h-full rounded-[3rem] overflow-hidden bg-black">
                    

                    {/* Universal Status Bar */}
                    <div className="absolute top-[12px] left-0 right-0 h-[34px] px-6 flex justify-between items-center z-[70] pointer-events-none text-white">
                      <div className="text-[13px] font-bold tracking-wider drop-shadow-md flex items-center gap-[5px]">
                        <span>ID: 339</span>
                        <span className="text-[10px] font-black bg-white/25 px-[4px] py-[1px] rounded-[4px] tracking-normal mt-[1px]">5G</span>
                      </div>
                      <div className="flex items-center gap-[5px] drop-shadow-md pb-[1px]">
                        <IOSSignal />
                        <IOSWifi />
                        <IOSBattery />
                      </div>
                    </div>

                    {/* Exact Dynamic Island */}
                    <div className="absolute top-0 inset-x-0 z-[70] flex justify-center pt-3 pointer-events-none">
                      <motion.div 
                        initial={sec.title.includes("Realism") || sec.title.includes("Security") ? { width: 105, height: 34, borderRadius: 9999, y: 0 } : false}
                        animate={
                          sec.title.includes("Realism") ? { 
                            width: [105, 280, 280, 105], 
                            height: [34, 60, 60, 34], 
                            borderRadius: [9999, 28, 28, 9999],
                            y: [0, 8, 8, 0]
                          } : { width: 105, height: 34, borderRadius: 9999, y: 0 }
                        }
                        transition={sec.title.includes("Realism") ? { duration: 5, repeat: Infinity, ease: "easeInOut" } : {}}
                        className="bg-black shadow-[0_4px_10px_rgba(0,0,0,0.5)] border-[0.5px] border-white/20 relative overflow-hidden pointer-events-auto"
                      >
                         {/* Static sensors that disappear when expanded */}
                         <motion.div
                           animate={(sec.title.includes("Realism") || sec.title.includes("Security")) ? { opacity: [1, 0, 0, 1] } : { opacity: 1 }}
                           transition={
                             sec.title.includes("Security") 
                               ? { duration: 8, repeat: Infinity, ease: "easeInOut", times: [0, 0.1, 0.9, 1] } 
                               : { duration: 5, repeat: Infinity, ease: "easeInOut" }
                           }
                           className="absolute inset-0 px-3 flex items-center justify-between pointer-events-none"
                         >
                           <div className="w-[8px] h-[8px] rounded-full bg-black/60 flex items-center justify-center shadow-inner">
                             <div className="w-[3px] h-[3px] rounded-full bg-cyan-400 shadow-[0_0_3px_rgba(34,211,238,0.8)]" />
                           </div>
                           <div className="w-[12px] h-[12px] rounded-full bg-gradient-to-br from-[#1a1a3e] to-[#0e0e20] ring-[1px] ring-[#252535]/80 flex items-center justify-center">
                             <div className="w-[5px] h-[5px] rounded-full bg-[#2244aa]/60" />
                           </div>
                         </motion.div>

                         {/* Incoming Call Content that appears when expanded */}
                         {sec.title.includes("Realism") && (
                           <motion.div
                             animate={{ opacity: [0, 1, 1, 0] }}
                             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                             className="absolute inset-0 px-2 flex items-center justify-between pointer-events-none"
                           >
                             <div className="flex items-center gap-2">
                               <div className="w-[36px] h-[36px] rounded-full bg-[#34c759] flex items-center justify-center shrink-0">
                                  <Shield className="w-5 h-5 text-white" />
                               </div>
                               <div className="flex flex-col justify-center">
                                 <span className="text-white/50 text-[10px] font-medium leading-none mb-1">Incoming Call</span>
                                 <span className="text-white font-semibold text-[13px] leading-none">Alex Smith</span>
                               </div>
                             </div>
                             <div className="flex gap-2 shrink-0">
                               <div className="w-[36px] h-[36px] rounded-full bg-[#ff3b30] flex items-center justify-center shadow-md">
                                 <Phone size={18} fill="currentColor" className="text-white rotate-[135deg]" />
                               </div>
                               <div className="w-[36px] h-[36px] rounded-full bg-[#34c759] flex items-center justify-center shadow-md animate-pulse">
                                 <Phone size={18} fill="currentColor" className="text-white" />
                               </div>
                             </div>
                           </motion.div>
                         )}

                         {/* Face ID Content that appears when expanded */}
                         {sec.title.includes("Security") && (
                           <motion.div
                             animate={{ opacity: [0, 1, 1, 0] }}
                             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", times: [0, 0.1, 0.9, 1] }}
                             className="absolute inset-0 flex items-center justify-center gap-1.5 pointer-events-none"
                           >
                             <motion.div
                               animate={{ 
                                 color: ['#60a5fa', '#60a5fa', '#4ade80', '#4ade80'] 
                               }}
                               transition={{ duration: 8, repeat: Infinity, ease: "linear", times: [0, 0.45, 0.55, 1] }}
                             >
                               <ScanFace className="w-3.5 h-3.5" strokeWidth={2} />
                             </motion.div>
                             <div className="relative h-[14px] w-[50px] flex items-center">
                               <motion.span
                                 className="absolute font-medium text-[9px] tracking-wide text-white"
                                 animate={{ opacity: [1, 1, 0, 0, 0] }}
                                 transition={{ duration: 8, repeat: Infinity, ease: "linear", times: [0, 0.4, 0.45, 0.5, 1] }}
                               >
                                 Verifying
                               </motion.span>
                               <motion.span
                                 className="absolute font-medium text-[9px] tracking-wide text-[#4ade80]"
                                 animate={{ opacity: [0, 0, 0, 1, 1] }}
                                 transition={{ duration: 8, repeat: Infinity, ease: "linear", times: [0, 0.45, 0.5, 0.6, 1] }}
                               >
                                 Unlocked
                               </motion.span>
                             </div>
                           </motion.div>
                         )}
                      </motion.div>
                    </div>

                    {/* Universal Home Bar */}
                    <div className="absolute bottom-[8px] inset-x-0 flex justify-center z-[80] pointer-events-none">
                      <div className="relative w-[60px] h-[5px] flex items-center justify-center">
                        <div className="absolute inset-0 backdrop-blur-md rounded-full shadow-inner transition-colors bg-white/30" />
                        <div className="absolute h-[3px] w-[20px] rounded-full transition-colors bg-white/90" />
                      </div>
                    </div>

                    {/* Wallpaper Background for lock screen/home */}
                    {(sec.title.includes("Realism") || sec.title.includes("Security")) && (
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-70" />
                    )}
                    
                    {/* Screen Content Wrapper */}
                    <div className="relative w-full h-full z-10 flex flex-col items-center justify-center">
                      
                      {/* Dynamic Content based on feature */}
                      {sec.title.includes("Realism") && (
                        <div className="absolute inset-0 pt-9 pb-5 px-3 flex flex-col pointer-events-none z-10">
                          {/* Clock at the top */}
                          <div className="mt-1 flex flex-col items-center w-full mb-[12px]">
                             <div className="text-[58px] font-bold text-white leading-none tracking-tight drop-shadow-md">21:30</div>
                             <div className="text-white font-semibold text-[13px] mt-0 drop-shadow-md">09/25/2026</div>
                          </div>
                          
                          <div className="grid grid-cols-4 gap-y-4 gap-x-2 w-full px-[6px]">
                            {[
                              { icon: Navigation, color: "from-[#10b981] via-[#059669] to-[#047857]" },
                              { icon: Video, color: "from-[#34c759] via-[#30d158] to-[#28cd41]" },
                              { icon: Mail, color: "from-[#43e5f7] via-[#2bcdf0] to-[#1cadde]" },
                              { icon: Landmark, color: "from-[#1a2a6c] via-[#b21f1f] to-[#fdbb2d]" },
                              { icon: Receipt, color: "from-[#0284c7] via-[#0369a1] to-[#075985]" },
                              { icon: Car, color: "from-[#11998e] via-[#2de09e] to-[#38ef7d]" },
                              { icon: Calendar, color: "from-[#b224ef] via-[#de479e] to-[#f36b6b]" },
                              { icon: Calculator, color: "from-[#2193b0] via-[#41b5d1] to-[#6dd5ed]" },
                              { icon: Home, color: "from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9]" },
                              { icon: Building2, color: "from-[#2563eb] via-[#3b82f6] to-[#60a5fa]" },
                              { icon: ShoppingBag, color: "from-[#3b82f6] via-[#2563eb] to-[#1d4ed8]" },
                              { icon: MessageCircle, color: "from-[#38bdf8] via-[#0ea5e9] to-[#0284c7]" },
                              { icon: ImageIcon, color: "from-[#ff0844] via-[#ffb199] to-[#ffcc80]" },
                              { icon: Clock, color: "from-[#f97316] via-[#ea580c] to-[#c2410c]" },
                              { icon: StickyNote, color: "from-[#f6d365] via-[#fda085] to-[#f6d365]" },
                              { icon: Settings, color: "from-[#606c88] via-[#4e576f] to-[#3f4c6b]" }
                            ].map((app, i) => (
                              <div key={i} className="flex flex-col items-center gap-1">
                                <div className={`w-[54px] h-[54px] rounded-[16px] flex items-center justify-center shadow-lg bg-gradient-to-br ${app.color}`}>
                                  <app.icon className="w-6 h-6 text-white drop-shadow-sm" strokeWidth={1.5} />
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          <div className="mt-auto mb-2 flex justify-center gap-[6px] w-full">
                            <div className="w-[6px] h-[6px] rounded-full bg-white/40"></div>
                            <div className="w-[6px] h-[6px] rounded-full bg-white"></div>
                            <div className="w-[6px] h-[6px] rounded-full bg-white/40"></div>
                          </div>

                          <div className="mx-1 h-[76px] bg-white/10 backdrop-blur-[24px] rounded-[1.8rem] flex items-center justify-around px-2 mb-1 shadow-lg border border-white/5">
                            {[
                              { icon: Phone, color: "from-[#11998e] to-[#38ef7d]" },
                              { icon: MessageSquare, color: "from-[#4facfe] to-[#00a1ff]" },
                              { icon: Users, color: "from-[#ffa751] to-[#ffe259]" },
                              { icon: Camera, color: "from-[#f77062] to-[#fe5196]" }
                            ].map((app, i) => (
                              <div key={i} className={`w-[54px] h-[54px] rounded-[16px] flex items-center justify-center shadow-lg bg-gradient-to-br ${app.color}`}>
                                <app.icon className="w-6 h-6 text-white drop-shadow-sm" strokeWidth={1.5} />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {sec.title.includes("Security") && (
                        <div className="absolute inset-0 flex flex-col items-center w-full h-full bg-black/20">
                           <div className="mt-16 flex flex-col items-center w-full">
                             <div className="relative w-6 h-6 flex items-center justify-center mb-1">
                               <motion.div
                                 animate={{ opacity: [1, 1, 0, 0, 0] }}
                                 transition={{ duration: 8, repeat: Infinity, ease: "linear", times: [0, 0.4, 0.45, 0.5, 1] }}
                                 className="absolute"
                               >
                                 <ScanFace className="w-6 h-6 text-[#60a5fa] drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" strokeWidth={1.5} />
                               </motion.div>
                               <motion.div
                                 animate={{ opacity: [0, 0, 0, 1, 1] }}
                                 transition={{ duration: 8, repeat: Infinity, ease: "linear", times: [0, 0.45, 0.5, 0.6, 1] }}
                                 className="absolute"
                               >
                                 <Lock className="w-5 h-5 text-white" strokeWidth={2} />
                               </motion.div>
                             </div>
                             
                             <div className="text-[64px] font-bold text-white leading-none tracking-tight">21:19</div>
                             <div className="text-white/90 font-medium text-lg mt-1">09/25/2026</div>
                           </div>
                           <div className="absolute bottom-6 flex flex-col items-center justify-center w-full">
                             <motion.div 
                               animate={{ opacity: [1, 1, 0, 0, 0] }}
                               transition={{ duration: 8, repeat: Infinity, ease: "linear", times: [0, 0.4, 0.45, 0.5, 1] }}
                               className="absolute bottom-0 text-white/90 font-medium text-[13px] tracking-wide mb-1"
                             >
                               Slide to unlock
                             </motion.div>
                             <motion.div 
                               animate={{ opacity: [0, 0, 0, 1, 1] }}
                               transition={{ duration: 8, repeat: Infinity, ease: "linear", times: [0, 0.45, 0.5, 0.6, 1] }}
                               className="absolute bottom-0 text-white/90 font-medium text-[13px] tracking-wide mb-1"
                             >
                               Swipe up to open
                             </motion.div>
                           </div>
                        </div>
                      )}

                      {sec.title.includes("Global") && (
                        <div className="absolute inset-0 bg-[#000000] flex flex-col w-full h-full">
                           <div className="pt-16 pb-2 px-5 flex items-center gap-3">
                             <div className="flex items-center text-[#0a84ff] font-medium">
                               <ChevronLeft className="w-6 h-6 -ml-2" />
                               <span>Settings</span>
                             </div>
                           </div>
                           <div className="px-5 pb-4">
                             <div className="text-white text-3xl font-bold mt-1">Language</div>
                           </div>
                           <div className="px-5 flex-1 overflow-hidden pb-8">
                             <div className="bg-[#1c1c1e] rounded-xl overflow-hidden h-full flex flex-col">
                               <div className="overflow-y-auto scrollbar-hide h-full">
                                 {SUPPORTED_LANGUAGES.map((lang, i) => (
                                   <div key={lang} className={`flex items-center justify-between p-3.5 ${i !== SUPPORTED_LANGUAGES.length - 1 ? 'border-b border-[#38383a]' : ''}`}>
                                     <span className="text-white text-[17px] font-normal">{lang}</span>
                                     {lang === 'Български' && <div className="text-[#0a84ff]"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>}
                                   </div>
                                 ))}
                               </div>
                             </div>
                           </div>
                        </div>
                      )}

                      {sec.title.includes("Financial") && (
                        <div className="absolute inset-0 bg-[#09090b] flex flex-col w-full h-full">
                          <div className="pt-16 pb-2 px-5 flex justify-between items-center">
                            <div className="text-white text-[28px] font-bold tracking-wide">Wallet</div>
                            <div className="w-8 h-8 rounded-full bg-[#1c1c1e] flex items-center justify-center">
                              <ChevronLeft className="text-white w-5 h-5 pr-0.5" />
                            </div>
                          </div>
                          <div className="px-5 mt-4 flex flex-col gap-5">
                            {/* Fleeca Bank Card */}
                            <div className="w-full h-[190px] rounded-[1.25rem] bg-gradient-to-br from-[#2a4d53] to-[#1e3a41] p-5 flex flex-col justify-between relative shadow-lg">
                              <div className="flex justify-between items-start z-10">
                                <span className="text-white font-bold tracking-widest text-[13px]">FLEECA BANK</span>
                                <div className="w-10 h-7 bg-[#d4af37] rounded-md opacity-90 shadow-inner flex flex-col justify-around py-1 px-1">
                                  <div className="w-full h-[1px] bg-black/20" />
                                  <div className="w-full h-[1px] bg-black/20" />
                                </div>
                              </div>
                              <div className="z-10 mt-2">
                                <div className="text-white/70 font-semibold text-[10px] tracking-widest mb-0.5">TOTAL BALANCE</div>
                                <div className="text-white text-[42px] font-bold tracking-tight leading-none">$0</div>
                              </div>
                              <div className="z-10 flex justify-between items-end mt-4">
                                <div>
                                  <div className="text-white/60 font-mono text-[11px] tracking-widest mb-1">**** **** ****</div>
                                  <div className="text-white font-mono text-[15px] tracking-[0.2em]">3391</div>
                                </div>
                                <div className="text-right">
                                  <div className="text-white/60 font-bold text-[9px] tracking-widest mb-0.5">EXP</div>
                                  <div className="text-white font-mono text-[13px] tracking-wider">12/28</div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Action Buttons */}
                            <div className="flex gap-4">
                              <div className="flex-1 bg-[#1c1c1e] hover:bg-[#2c2c2e] rounded-2xl py-4 flex items-center justify-center gap-2 transition-colors">
                                <ArrowUpRight className="text-white w-5 h-5" />
                                <span className="text-white font-semibold text-[15px]">Send</span>
                              </div>
                              <div className="flex-1 bg-[#1c1c1e] hover:bg-[#2c2c2e] rounded-2xl py-4 flex items-center justify-center gap-2 transition-colors">
                                <ArrowDownLeft className="text-white w-5 h-5" />
                                <span className="text-white font-semibold text-[15px]">Request</span>
                              </div>
                            </div>

                            {/* Recent Activity */}
                            <div className="mt-2">
                              <div className="flex justify-between items-center mb-6">
                                <div className="text-white font-bold text-[19px]">Recent Activity</div>
                                <div className="text-gray-400 font-semibold text-[11px] tracking-wider flex items-center gap-1">SEE ALL &rarr;</div>
                              </div>
                              <div className="flex justify-center items-center py-6">
                                <p className="text-gray-500 font-medium text-[15px]">No activity yet</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

