import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Bell, Globe, CreditCard, Code, Sparkles, ScanFace, Lock, Bitcoin, Phone, Car, ArrowUpRight, ArrowDownLeft, ChevronLeft, Navigation, Video, Mail, Landmark, Receipt, Calendar, Calculator, Home, Building2, ShoppingBag, MessageCircle, Image as ImageIcon, Clock, StickyNote, Settings, Users, Camera, MessageSquare, Smartphone, CloudSun } from 'lucide-react'
import MockupIcon from './MockupIcon'

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

const PhoneMockup = ({ title, osType = 'iphone' }) => {
  const isMultiOS = title.includes("Multi-OS");
  const isSecurity = title.includes("Security");
  const isGlobal = title.includes("Global");
  const isFinancial = title.includes("Financial");

  const isAndroid = osType === 'android';
  const isXeno = osType === 'xeno';
  
  const [showCrypto, setShowCrypto] = useState(false);

  useEffect(() => {
    if (!isFinancial) return;
    const interval = setInterval(() => {
      setShowCrypto(prev => !prev);
    }, 4500);
    return () => clearInterval(interval);
  }, [isFinancial]);

  // Base styling depending on OS
  const phoneRadius = isAndroid ? 'rounded-[1.2rem]' : isXeno ? 'rounded-[2rem]' : 'rounded-[3.5rem]';
  const screenRadius = isAndroid ? 'rounded-[0.9rem]' : isXeno ? 'rounded-[1.7rem]' : 'rounded-[3rem]';

  // Frame and Shadow styling depending on OS
  const frameColor = isAndroid ? 'border-[#4a4a4d]' : isXeno ? 'border-[#ef4444]' : (showCrypto ? 'border-[#f7931a]' : 'border-[#ff5c00]');
  const shadowColor = isAndroid ? 'shadow-[0_0_50px_rgba(255,255,255,0.1)]' : isXeno ? 'shadow-[0_0_50px_rgba(239,68,68,0.15)]' : (showCrypto ? 'shadow-[0_0_50px_rgba(247,147,26,0.15)]' : 'shadow-[0_0_50px_rgba(255,92,0,0.15)]');
  const buttonColor = isAndroid ? 'bg-[#4a4a4d]' : isXeno ? 'bg-[#ef4444]' : 'bg-[#ff5c00]';

  return (
    <div className={`relative w-[320px] h-[660px] ${phoneRadius} border-[6px] ${frameColor} bg-[#09090b] ${shadowColor} flex flex-col items-center bg-black`}>
      {/* Hardware Buttons */}
      <div className={`absolute -left-[9px] top-[100px] w-1 h-6 ${buttonColor} rounded-l-sm`} />
      <div className={`absolute -left-[9px] top-[140px] w-1.5 h-14 ${buttonColor} rounded-l-md`} />
      <div className={`absolute -left-[9px] top-[210px] w-1.5 h-14 ${buttonColor} rounded-l-md`} />
      <div className={`absolute -right-[9px] top-[170px] w-1.5 h-20 ${buttonColor} rounded-r-md`} />

      {/* Screen Container */}
      <div className={`relative w-full h-full ${screenRadius} overflow-hidden bg-black`}>
        
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

        {/* Camera Cutout depending on OS */}
        {osType === 'iphone' && (
          <div className="absolute top-0 inset-x-0 z-[70] flex justify-center pt-3 pointer-events-none">
            <motion.div 
              initial={isMultiOS || isSecurity ? { width: 105, height: 34, borderRadius: 9999, y: 0 } : false}
              animate={{ width: 105, height: 34, borderRadius: 9999, y: 0 }}
              className="bg-black shadow-[0_4px_10px_rgba(0,0,0,0.5)] border-[0.5px] border-white/20 relative overflow-hidden pointer-events-auto"
            >
                {/* Static sensors */}
                <motion.div
                  animate={(isMultiOS || isSecurity) ? { opacity: [1, 0, 0, 1] } : { opacity: 1 }}
                  transition={
                    isSecurity 
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

                {/* Removed Incoming Call Content to keep it static */}
            </motion.div>
          </div>
        )}

        {isAndroid && (
          <div className="absolute top-[18px] inset-x-0 z-[70] flex justify-center pointer-events-none">
            <div className="w-[14px] h-[14px] rounded-full bg-[#0a0a0a] shadow-inner border-[0.5px] border-white/10 flex items-center justify-center">
               <div className="w-[4px] h-[4px] rounded-full bg-[#111122]/60" />
            </div>
          </div>
        )}

        {isXeno && (
          <div className="absolute top-[16px] inset-x-0 z-[70] flex justify-center pointer-events-none">
            <div className="w-[48px] h-[18px] rounded-full bg-[#0a0a0a] shadow-inner border-[0.5px] border-white/10 flex items-center justify-end px-2">
               <div className="w-[6px] h-[6px] rounded-full bg-cyan-400 shadow-[0_0_4px_rgba(34,211,238,0.5)]" />
            </div>
          </div>
        )}

        {/* Universal Home Bar (Only iPhone) */}
        {osType === 'iphone' && (
          <div className="absolute bottom-[8px] inset-x-0 flex justify-center z-[80] pointer-events-none">
            <div className="relative w-[60px] h-[5px] flex items-center justify-center">
              <div className="absolute inset-0 backdrop-blur-md rounded-full shadow-inner transition-colors bg-white/30" />
              <div className="absolute h-[3px] w-[20px] rounded-full transition-colors bg-white/90" />
            </div>
          </div>
        )}

        {/* Wallpaper Background for lock screen/home */}
        {(isMultiOS || isSecurity) && (
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-90" 
            style={{
              backgroundImage: `url('${
                isAndroid ? '/preview/wallpapers/smb1.png' : 
                isXeno ? '/preview/wallpapers/b2.webp' : 
                '/preview/wallpapers/b1.webp'
              }')`
            }}
          />
        )}
        
        {/* Screen Content Wrapper */}
        <div className="relative w-full h-full z-10 flex flex-col items-center justify-center">
          
          {isMultiOS && (
            <div className={`absolute inset-0 pb-5 px-3 flex flex-col pointer-events-none z-10 ${isAndroid ? 'pt-7' : 'pt-9'}`}>
              {/* TOP SECTION */}
              {osType === 'iphone' && (
                <div className="mt-8 mb-4 flex w-full gap-[12px] px-1 h-[130px]">
                  {/* Weather Widget */}
                  <div className="flex-1 rounded-[1.2rem] bg-gradient-to-b from-[#409cff] to-[#3070ff] text-white p-3 flex flex-col justify-between shadow-[0_4px_12px_rgba(0,0,0,0.3)] border border-white/20">
                     <div className="text-[12px] font-bold flex items-center justify-between opacity-90 tracking-tight leading-none">Los Santos <Navigation size={10} fill="currentColor" className="ml-1" /></div>
                     <div className="text-[44px] font-medium leading-none tracking-tighter mt-1 drop-shadow-sm">16&deg;</div>
                     <div className="text-[12px] flex items-center gap-1 font-medium mt-auto leading-none opacity-90">
                       <CloudSun size={14} fill="white" className="drop-shadow-sm" /> Fog
                     </div>
                  </div>
                  {/* Calendar Widget */}
                  <div className="flex-1 rounded-[1.2rem] bg-[#1c1c1e] text-white p-3 px-[10px] flex flex-col shadow-[0_4px_12px_rgba(0,0,0,0.3)] border border-white/10">
                    <div className="text-[#ff3b30] text-[10px] font-bold uppercase tracking-widest mb-1 leading-none">MAY</div>
                    <div className="grid grid-cols-7 gap-x-[2px] text-[8px] font-bold text-center mb-[4px] text-[#ebebf5]/50 leading-none">
                      <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
                    </div>
                    <div className="grid grid-cols-7 gap-x-[2px] gap-y-[4px] text-[9.5px] font-bold text-center leading-none">
                      <div className="text-white/50">1</div><div className="text-white/50">2</div><div className="text-white/50">3</div><div className="text-white/50">4</div><div className="text-white/50">5</div><div className="text-white/50">6</div><div className="text-white/50">7</div>
                      <div className="text-white/50">8</div><div className="text-white/50">9</div><div className="text-white/50">10</div><div className="text-white/50">11</div><div className="text-white/50">12</div><div className="text-white/50">13</div>
                      <div className="w-[14px] h-[14px] rounded-full bg-[#ff3b30] text-white flex items-center justify-center mx-auto shadow-sm">14</div>
                      <div>15</div><div>16</div><div>17</div><div>18</div><div>19</div><div>20</div><div>21</div>
                      <div>22</div><div>23</div><div>24</div><div>25</div><div>26</div><div>27</div><div>28</div>
                    </div>
                  </div>
                </div>
              )}
              
              {osType === 'android' && (
                <div className="mt-4 mb-4 flex flex-col w-full gap-[8px] px-1">
                  <div className="w-full rounded-[1.2rem] bg-black/60 backdrop-blur-md text-white p-3 shadow-lg border border-white/5 h-[110px] flex flex-col justify-center">
                     <div className="w-8 h-8 rounded-full bg-[#34c759] mb-2 shadow-sm border border-white/10" />
                     <div className="text-[18px] font-bold leading-none tracking-tight">Have a good day</div>
                     <div className="text-[10px] font-medium leading-snug mt-1.5 opacity-90 text-gray-200">Hope your day is going as planned. Windy, mix of rain and snow early. Low -8C.</div>
                  </div>
                  <div className="flex w-full gap-[8px] h-[55px]">
                    <div className="flex-1 rounded-[1.2rem] bg-[#314a8f] text-white px-3 py-1 flex items-center justify-between shadow-lg">
                      <CloudSun size={24} fill="white" />
                      <div className="flex flex-col items-end">
                        <span className="text-[14px] font-bold leading-none">6&deg;</span>
                        <span className="text-[10px] opacity-80 leading-none mt-1 flex items-center gap-1"><Navigation size={8} fill="currentColor"/> East...</span>
                      </div>
                    </div>
                    <div className="flex-1 rounded-[1.2rem] bg-[#221f1e] text-white px-3 py-2 flex items-center shadow-lg border border-white/5">
                       <div className="flex flex-col items-center border-r border-white/20 pr-2 mr-2">
                         <span className="text-[#ff3b30] text-[8px] font-bold leading-none">OCT</span>
                         <span className="text-[16px] font-bold leading-none mt-[2px]">4</span>
                       </div>
                       <div className="flex flex-col">
                         <span className="text-[12px] font-bold leading-none">Sunday</span>
                         <span className="text-[10px] opacity-60 leading-none mt-1">No events</span>
                       </div>
                    </div>
                  </div>
                </div>
              )}

              {osType === 'xeno' && (
                <div className="mt-1 flex flex-col items-center w-full mb-[16px] pt-6">
                  <div className="text-white font-bold text-[14px] mt-0 drop-shadow-md">10/04/2026</div>
                  <div className="text-[68px] font-bold text-white leading-none tracking-tight drop-shadow-md mt-[-6px]">13:46</div>
                </div>
              )}
              
              {/* APPS GRID */}
              <div className={`grid ${isAndroid ? 'grid-cols-5 gap-x-1' : 'grid-cols-4 gap-x-1.5'} gap-y-3 w-full px-[6px]`}>
                {[
                  { id: 'maps', icon: Navigation, color: "from-[#10b981] via-[#059669] to-[#047857]", label: "Maps", showIn: ['iphone', 'android', 'xeno'] },
                  { id: 'face2face', icon: Video, color: "from-[#34c759] via-[#30d158] to-[#28cd41]", label: "Face2Face", showIn: ['iphone', 'android', 'xeno'] },
                  { id: 'mail', icon: Mail, color: "from-[#43e5f7] via-[#2bcdf0] to-[#1cadde]", label: "Mail", showIn: ['iphone', 'android', 'xeno'] },
                  { id: 'wallet', icon: Landmark, color: "from-[#1a2a6c] via-[#b21f1f] to-[#fdbb2d]", label: "Bank", showIn: ['iphone', 'android', 'xeno'] },
                  { id: 'billing', icon: Receipt, color: "from-[#0284c7] via-[#0369a1] to-[#075985]", label: "Billing", showIn: ['iphone', 'android', 'xeno'] },
                  { id: 'garage', icon: Car, color: "from-[#f97316] via-[#ea580c] to-[#c2410c]", label: "Garage", showIn: ['iphone', 'android', 'xeno'] },
                  { id: 'calendar', icon: Calendar, color: "from-[#b224ef] via-[#de479e] to-[#f36b6b]", label: "Calendar", showIn: ['iphone', 'android', 'xeno'] },
                  { id: 'calc', icon: Calculator, color: "from-[#2193b0] via-[#41b5d1] to-[#6dd5ed]", label: "Calculator", showIn: ['iphone', 'android', 'xeno'] },
                  { id: 'properties', icon: Home, color: "from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9]", label: "Properties", showIn: ['iphone', 'android', 'xeno'] },
                  { id: 'companies', icon: Building2, color: "from-[#2563eb] via-[#3b82f6] to-[#60a5fa]", label: "Companies", showIn: ['iphone', 'android', 'xeno'] },
                  { id: 'hub', icon: ShoppingBag, color: "from-[#3b82f6] via-[#2563eb] to-[#1d4ed8]", label: "App Hub", showIn: ['iphone', 'android', 'xeno'] },
                  { id: 'bleeter', icon: MessageCircle, color: "from-[#38bdf8] via-[#0ea5e9] to-[#0284c7]", label: "Bleeter", showIn: ['iphone', 'android', 'xeno'] },
                  { id: 'clock', icon: Clock, color: "from-[#4b5563] via-[#374151] to-[#1f2937]", label: "Clock", showIn: ['android', 'xeno'] },
                  { id: 'notes', icon: StickyNote, color: "from-[#f59e0b] via-[#d97706] to-[#b45309]", label: "Notes", showIn: ['android', 'xeno'] },
                  { id: 'contacts', icon: Users, color: "from-[#f97316] via-[#ea580c] to-[#c2410c]", label: "Contacts", showIn: ['android', 'xeno'] },
                  { id: 'gallery', icon: ImageIcon, color: "from-[#ff0844] via-[#ffb199] to-[#ffcc80]", label: "Gallery", showIn: ['iphone', 'xeno'] },
                  { id: 'clock', icon: Clock, color: "from-[#f97316] via-[#ea580c] to-[#c2410c]", label: "Clock", showIn: ['iphone'] },
                  { id: 'notes', icon: StickyNote, color: "from-[#f6d365] via-[#fda085] to-[#f6d365]", label: "Notes", showIn: ['iphone'] },
                  { id: 'settings', icon: Settings, color: "from-[#606c88] via-[#4e576f] to-[#3f4c6b]", label: "Settings", showIn: ['iphone'] }
                ].filter(app => app.showIn.includes(osType)).map((app, i) => (
                  <div key={i} className="flex flex-col items-center gap-[3px]">
                    <MockupIcon appId={app.id} osType={osType} genericIcon={app.icon} genericColor={app.color} />
                    <span className={osType === 'iphone' ? "text-white text-[11px] font-medium tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] truncate w-full text-center leading-tight mt-[1px]" : "text-white text-[9.5px] font-bold tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] whitespace-nowrap truncate w-full text-center leading-tight mt-[1px]"}>
                      {app.label}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Pagination Dots */}
              <div className={`mt-auto ${isAndroid ? 'mb-1' : 'mb-[2px]'} flex justify-center gap-[6px] w-full`}>
                <div className="w-[6px] h-[6px] rounded-full bg-white/40"></div>
                <div className="w-[6px] h-[6px] rounded-full bg-white"></div>
                <div className="w-[6px] h-[6px] rounded-full bg-white/40"></div>
              </div>

              {/* DOCK */}
              <div className={`mx-1 ${isAndroid ? 'h-[64px] bg-transparent px-2 mb-4' : isXeno ? 'h-[76px] bg-transparent px-3 mb-2' : 'h-[76px] bg-white/10 backdrop-blur-[24px] rounded-[1.8rem] px-2 mb-1 shadow-lg border border-white/10'} flex items-center justify-around`}>
                {(isAndroid ? [
                  { id: 'phone', icon: Phone, color: "from-[#34c759] to-[#28cd41]" },
                  { id: 'messages', icon: MessageSquare, color: "from-[#34c759] to-[#28cd41]" },
                  { id: 'camera', icon: Camera, color: "from-[#d1d5db] via-[#9ca3af] to-[#4b5563]" },
                  { id: 'gallery', icon: ImageIcon, color: "from-[#ff0844] via-[#ffb199] to-[#ffcc80]" },
                  { id: 'settings', icon: Settings, color: "from-[#606c88] via-[#4e576f] to-[#3f4c6b]" }
                ] : [
                  { id: 'phone', icon: Phone, color: "from-[#34c759] to-[#28cd41]" },
                  { id: 'messages', icon: MessageSquare, color: "from-[#4facfe] to-[#00a1ff]" },
                  { id: 'contacts', icon: Users, color: "from-[#ffa751] to-[#ffe259]" },
                  { id: 'camera', icon: Camera, color: "from-[#ff0844] via-[#ffb199] to-[#ffcc80]" }
                ]).map((app, i) => (
                  <div key={i}>
                    <MockupIcon appId={app.id} osType={osType} genericIcon={app.icon} genericColor={app.color} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {isSecurity && (
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

          {isGlobal && (
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

          {isFinancial && (
            <div className="absolute inset-0 bg-[#09090b] flex w-full h-full overflow-hidden">
              <AnimatePresence mode="wait">
                {!showCrypto ? (
                  <motion.div 
                    key="wallet"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex flex-col w-full h-full"
                  >
                    <div className="pt-16 pb-2 px-5 flex justify-between items-center">
                      <div className="text-white text-[28px] font-bold tracking-wide">Wallet</div>
                      <div className="w-8 h-8 rounded-full bg-[#1c1c1e] flex items-center justify-center">
                        <ChevronLeft className="text-white w-5 h-5 pr-0.5" />
                      </div>
                    </div>
                    <div className="px-5 mt-4 flex flex-col gap-5">
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
                  </motion.div>
                ) : (
                  <motion.div 
                    key="crypto"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex flex-col w-full h-full"
                  >
                    <div className="pt-16 pb-2 px-5 flex justify-between items-center">
                      <div className="text-white text-[28px] font-bold tracking-wide">Crypto</div>
                      <div className="w-8 h-8 rounded-full bg-[#1c1c1e] flex items-center justify-center">
                        <Bitcoin className="text-[#f7931a] w-5 h-5" />
                      </div>
                    </div>
                    
                    <div className="px-5 mt-4 flex flex-col gap-4">
                      {/* Portfolio Balance */}
                      <div className="w-full rounded-[1.25rem] bg-[#1c1c1e] p-5 flex flex-col relative shadow-lg border border-white/5">
                        <div className="text-white/60 font-semibold text-[11px] tracking-widest mb-1">YOUR PORTFOLIO</div>
                        <div className="text-white text-[38px] font-bold tracking-tight leading-none">$42,069</div>
                        <div className="text-[#34c759] font-semibold text-[13px] mt-2 flex items-center gap-1">
                          <ArrowUpRight className="w-4 h-4" /> +$1,240 (3.2%)
                        </div>
                      </div>

                      <div className="text-white font-bold text-[17px] mt-2">Live Markets</div>

                      {/* Coins List */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between bg-[#141415] p-3 rounded-2xl border border-white/5">
                           <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded-full bg-[#f7931a]/20 flex items-center justify-center">
                               <Bitcoin className="text-[#f7931a] w-6 h-6" />
                             </div>
                             <div>
                               <div className="text-white font-bold text-[15px]">Bitcoin</div>
                               <div className="text-white/50 text-[12px] font-medium">BTC</div>
                             </div>
                           </div>
                           <div className="text-right">
                             <div className="text-white font-bold text-[15px]">$64,230</div>
                             <div className="text-[#34c759] text-[12px] font-medium">+2.4%</div>
                           </div>
                        </div>

                        <div className="flex items-center justify-between bg-[#141415] p-3 rounded-2xl border border-white/5">
                           <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded-full bg-[#627eea]/20 flex items-center justify-center">
                               <span className="text-[#627eea] font-bold text-[18px]">Ξ</span>
                             </div>
                             <div>
                               <div className="text-white font-bold text-[15px]">Ethereum</div>
                               <div className="text-white/50 text-[12px] font-medium">ETH</div>
                             </div>
                           </div>
                           <div className="text-right">
                             <div className="text-white font-bold text-[15px]">$3,450</div>
                             <div className="text-[#ff3b30] text-[12px] font-medium">-1.2%</div>
                           </div>
                        </div>
                        
                        <div className="flex items-center justify-between bg-[#141415] p-3 rounded-2xl border border-white/5">
                           <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded-full bg-[#00a8ff]/20 flex items-center justify-center">
                               <span className="text-[#00a8ff] font-bold text-[18px]">X</span>
                             </div>
                             <div>
                               <div className="text-white font-bold text-[15px]">XenoCoin</div>
                               <div className="text-white/50 text-[12px] font-medium">XNO</div>
                             </div>
                           </div>
                           <div className="text-right">
                             <div className="text-white font-bold text-[15px]">$12.45</div>
                             <div className="text-[#34c759] text-[12px] font-medium">+14.2%</div>
                           </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default function Features() {
  const sections = [
    {
      title: "Multi-OS Experience",
      subtitle: "iOS, Android & Custom",
      desc: "Give your players the ultimate choice. Seamlessly switch between a fluid iOS-like interface with a functional Dynamic Island, a sleek Android experience, or a completely Custom OS with native-feeling interactions.",
      icon: <Smartphone className="w-8 h-8 text-xeno-secondary" />,
      features: ["Native iOS, Android & Custom designs", "Interactive expanding alerts", "Fluid framer-motion animations"],
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
                {sec.title.includes("Multi-OS") ? (
                  <div className="relative w-full max-w-[320px] sm:max-w-none mx-auto h-[660px] flex items-center justify-center lg:-mr-16">
                     <div className="absolute left-[-50px] sm:left-[-10px] md:left-[20px] lg:left-[0px] z-0 scale-[0.55] sm:scale-[0.65] opacity-50 -translate-y-4 -rotate-12 blur-[1px]">
                        <PhoneMockup title={sec.title} osType="android" />
                     </div>
                     <div className="absolute right-[-50px] sm:right-[-10px] md:right-[20px] lg:right-[0px] z-0 scale-[0.55] sm:scale-[0.65] opacity-50 -translate-y-4 rotate-12 blur-[1px]">
                        <PhoneMockup title={sec.title} osType="xeno" />
                     </div>
                     <div className="relative z-10 scale-[0.8] sm:scale-[0.9]">
                        <PhoneMockup title={sec.title} osType="iphone" />
                     </div>
                  </div>
                ) : (
                  <PhoneMockup title={sec.title} />
                )}
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
