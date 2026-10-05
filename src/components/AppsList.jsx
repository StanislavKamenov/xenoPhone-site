import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Navigation, Video, Mail, Landmark, Receipt, Car, Calendar, 
  Calculator, Home, Building2, ShoppingBag, MessageCircle, 
  Image as ImageIcon, Clock, StickyNote, Settings, Spade, 
  Gamepad2, Box, MessageSquare, CloudSun, Music, TrendingUp, 
  Flame, Radio, Phone, Users, Camera
} from 'lucide-react'
import MockupIcon from './MockupIcon'

export default function AppsList() {
  const [osStyle, setOsStyle] = useState('ios');

  const apps = [
    { id: 'phone', name: 'Phone', iconComp: Phone, color: 'from-[#11998e] to-[#38ef7d]' },
    { id: 'messages', name: 'Messages', iconComp: MessageSquare, color: 'from-[#4facfe] to-[#00a1ff]' },
    { id: 'contacts', name: 'Contacts', iconComp: Users, color: 'from-[#ffa751] to-[#ffe259]' },
    { id: 'camera', name: 'Camera', iconComp: Camera, color: 'from-[#f77062] to-[#fe5196]' },
    { id: 'settings', name: 'Settings', iconComp: Settings, color: 'from-[#606c88] via-[#4e576f] to-[#3f4c6b]' },
    { id: 'maps', name: 'Maps', iconComp: Navigation, color: 'from-[#10b981] via-[#059669] to-[#047857]' },
    { id: 'face2face', name: 'Face2Face', iconComp: Video, color: 'from-[#34c759] via-[#30d158] to-[#28cd41]' },
    { id: 'mail', name: 'Mail', iconComp: Mail, color: 'from-[#43e5f7] via-[#2bcdf0] to-[#1cadde]' },
    { id: 'wallet', name: 'Bank', iconComp: Landmark, color: 'from-[#1a2a6c] via-[#b21f1f] to-[#fdbb2d]' },
    { id: 'billing', name: 'Billing', iconComp: Receipt, color: 'from-[#0284c7] via-[#0369a1] to-[#075985]' },
    { id: 'garage', name: 'Garage', iconComp: Car, color: 'from-[#11998e] via-[#2de09e] to-[#38ef7d]' },
    { id: 'calendar', name: 'Calendar', iconComp: Calendar, color: 'from-[#b224ef] via-[#de479e] to-[#f36b6b]' },
    { id: 'calc', name: 'Calculator', iconComp: Calculator, color: 'from-[#2193b0] via-[#41b5d1] to-[#6dd5ed]' },
    { id: 'properties', name: 'Properties', iconComp: Home, color: 'from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9]' },
    { id: 'companies', name: 'Companies', iconComp: Building2, color: 'from-[#2563eb] via-[#3b82f6] to-[#60a5fa]' },
    { id: 'hub', name: 'App Hub', iconComp: ShoppingBag, color: 'from-[#3b82f6] via-[#2563eb] to-[#1d4ed8]' },
    { id: 'bleeter', name: 'Bleeter', iconComp: MessageCircle, color: 'from-[#38bdf8] via-[#0ea5e9] to-[#0284c7]' },
    { id: 'gallery', name: 'Gallery', iconComp: ImageIcon, color: 'from-[#ff0844] via-[#ffb199] to-[#ffcc80]' },
    { id: 'clock', name: 'Clock', iconComp: Clock, color: 'from-[#f97316] via-[#ea580c] to-[#c2410c]' },
    { id: 'notes', name: 'Notes', iconComp: StickyNote, color: 'from-[#f6d365] via-[#fda085] to-[#f6d365]' },
    { id: 'blackjack', name: 'BlackJack', iconComp: Spade, color: 'from-[#000000] via-[#1a1a1a] to-[#333333]' },
    { id: 'snake', name: 'Snake', iconComp: Gamepad2, color: 'from-[#10b981] via-[#059669] to-[#047857]' },
    { id: 'stacker', name: 'Stacker', iconComp: Box, color: 'from-[#f59e0b] via-[#d97706] to-[#b45309]' },
    { id: 'darkchat', name: 'Dark Chat', iconComp: MessageSquare, color: 'from-[#8b5cf6] via-[#7c3aed] to-[#5b21b6]' },
    { id: 'weather', name: 'Weather', iconComp: CloudSun, color: 'from-[#38bdf8] via-[#0ea5e9] to-[#0284c7]' },
    { id: 'music', name: 'Music', iconComp: Music, color: 'from-[#ec4899] via-[#db2777] to-[#be185d]' },
    { id: 'crypto', name: 'Crypto', iconComp: TrendingUp, color: 'from-[#f59e0b] via-[#d97706] to-[#b45309]' },
    { id: 'tinder', name: 'Match', iconComp: Flame, color: 'from-[#fe3c72] via-[#ff655b] to-[#ff3b30]' },
    { id: 'radio', name: 'Radio', iconComp: Radio, color: 'from-[#10b981] via-[#059669] to-[#047857]' }
  ]

  return (
    <section id="apps" className="py-32 px-6 w-full relative z-10 bg-[#020203] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,92,0,0.08)_0%,transparent_80%)] pointer-events-none" />
      
      <div className="text-center mb-20 max-w-3xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
        >
          25+ <span className="gradient-text">Built-in Apps</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg"
        >
          Everything your players need to survive and thrive in Los Santos. From banking and crypto to social media and dating, all presented in a stunning UI.
        </motion.p>
      </div>

      <div className="flex justify-center mb-12 relative z-10">
        <div className="bg-white/5 p-1 rounded-full border border-white/10 flex items-center gap-1">
          {['ios', 'android', 'xenoos'].map(os => (
            <button
              key={os}
              onClick={() => setOsStyle(os)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                osStyle === os 
                  ? 'bg-gradient-to-r from-xeno-primary to-xeno-secondary text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {os === 'ios' ? 'iOS Icons' : os === 'android' ? 'Android Icons' : 'XenoOS Icons'}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-wrap justify-center gap-6 md:gap-10">
        {apps.map((app, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: (idx % 5) * 0.1, type: "spring", stiffness: 100 }}
            className="flex flex-col items-center gap-3 w-20 md:w-28 group"
          >
            <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 group-hover:-translate-y-2 transition-transform duration-300">
              <div className="scale-[1.1] md:scale-[1.35] origin-center group-hover:scale-[1.2] md:group-hover:scale-[1.45] transition-transform duration-300">
                <MockupIcon 
                  appId={app.id} 
                  osType={osStyle === 'ios' ? 'iphone' : osStyle === 'xenoos' ? 'xeno' : 'android'} 
                  genericIcon={app.iconComp} 
                  genericColor={app.color} 
                />
              </div>
            </div>
            <span className="text-gray-300 font-medium text-xs md:text-sm tracking-wide group-hover:text-white transition-colors text-center">
              {app.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
