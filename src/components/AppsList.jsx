import React from 'react'
import { motion } from 'framer-motion'
import { 
  Navigation, Video, Mail, Landmark, Receipt, Car, Calendar, 
  Calculator, Home, Building2, ShoppingBag, MessageCircle, 
  Image as ImageIcon, Clock, StickyNote, Settings, Spade, 
  Gamepad2, Box, MessageSquare, CloudSun, Music, TrendingUp, 
  Flame, Radio, Phone, Users, Camera
} from 'lucide-react'

export default function AppsList() {
  const apps = [
    { name: 'Phone', icon: <Phone className="w-6 h-6 text-white" />, color: 'from-[#11998e] to-[#38ef7d]' },
    { name: 'Messages', icon: <MessageSquare className="w-6 h-6 text-white" />, color: 'from-[#4facfe] to-[#00a1ff]' },
    { name: 'Contacts', icon: <Users className="w-6 h-6 text-white" />, color: 'from-[#ffa751] to-[#ffe259]' },
    { name: 'Camera', icon: <Camera className="w-6 h-6 text-white" />, color: 'from-[#f77062] to-[#fe5196]' },
    { name: 'Settings', icon: <Settings className="w-6 h-6 text-white" />, color: 'from-[#606c88] via-[#4e576f] to-[#3f4c6b]' },
    { name: 'Maps', icon: <Navigation className="w-6 h-6 text-white" />, color: 'from-[#10b981] via-[#059669] to-[#047857]' },
    { name: 'Face2Face', icon: <Video className="w-6 h-6 text-white" />, color: 'from-[#34c759] via-[#30d158] to-[#28cd41]' },
    { name: 'Mail', icon: <Mail className="w-6 h-6 text-white" />, color: 'from-[#43e5f7] via-[#2bcdf0] to-[#1cadde]' },
    { name: 'Bank', icon: <Landmark className="w-6 h-6 text-white" />, color: 'from-[#1a2a6c] via-[#b21f1f] to-[#fdbb2d]' },
    { name: 'Billing', icon: <Receipt className="w-6 h-6 text-white" />, color: 'from-[#0284c7] via-[#0369a1] to-[#075985]' },
    { name: 'Garage', icon: <Car className="w-6 h-6 text-white" />, color: 'from-[#11998e] via-[#2de09e] to-[#38ef7d]' },
    { name: 'Calendar', icon: <Calendar className="w-6 h-6 text-white" />, color: 'from-[#b224ef] via-[#de479e] to-[#f36b6b]' },
    { name: 'Calculator', icon: <Calculator className="w-6 h-6 text-white" />, color: 'from-[#2193b0] via-[#41b5d1] to-[#6dd5ed]' },
    { name: 'Properties', icon: <Home className="w-6 h-6 text-white" />, color: 'from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9]' },
    { name: 'Companies', icon: <Building2 className="w-6 h-6 text-white" />, color: 'from-[#2563eb] via-[#3b82f6] to-[#60a5fa]' },
    { name: 'App Store', icon: <ShoppingBag className="w-6 h-6 text-white" />, color: 'from-[#3b82f6] via-[#2563eb] to-[#1d4ed8]' },
    { name: 'Bleeter', icon: <MessageCircle className="w-6 h-6 text-white" />, color: 'from-[#38bdf8] via-[#0ea5e9] to-[#0284c7]' },
    { name: 'Gallery', icon: <ImageIcon className="w-6 h-6 text-white" />, color: 'from-[#ff0844] via-[#ffb199] to-[#ffcc80]' },
    { name: 'Clock', icon: <Clock className="w-6 h-6 text-white" />, color: 'from-[#f97316] via-[#ea580c] to-[#c2410c]' },
    { name: 'Notes', icon: <StickyNote className="w-6 h-6 text-white" />, color: 'from-[#f6d365] via-[#fda085] to-[#f6d365]' },
    { name: 'BlackJack', icon: <Spade className="w-6 h-6 text-white" />, color: 'from-[#000000] via-[#1a1a1a] to-[#333333]' },
    { name: 'Snake', icon: <Gamepad2 className="w-6 h-6 text-white" />, color: 'from-[#10b981] via-[#059669] to-[#047857]' },
    { name: 'Stacker', icon: <Box className="w-6 h-6 text-white" />, color: 'from-[#f59e0b] via-[#d97706] to-[#b45309]' },
    { name: 'Dark Chat', icon: <MessageSquare className="w-6 h-6 text-white" />, color: 'from-[#8b5cf6] via-[#7c3aed] to-[#5b21b6]' },
    { name: 'Weather', icon: <CloudSun className="w-6 h-6 text-white" />, color: 'from-[#38bdf8] via-[#0ea5e9] to-[#0284c7]' },
    { name: 'Music', icon: <Music className="w-6 h-6 text-white" />, color: 'from-[#ec4899] via-[#db2777] to-[#be185d]' },
    { name: 'Crypto', icon: <TrendingUp className="w-6 h-6 text-white" />, color: 'from-[#f59e0b] via-[#d97706] to-[#b45309]' },
    { name: 'Tinder', icon: <Flame className="w-6 h-6 text-white" />, color: 'from-[#fe3c72] via-[#ff655b] to-[#ff3b30]' },
    { name: 'Radio', icon: <Radio className="w-6 h-6 text-white" />, color: 'from-[#10b981] via-[#059669] to-[#047857]' }
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
            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-[1.25rem] md:rounded-[1.5rem] bg-gradient-to-br ${app.color} shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300 group-hover:shadow-[0_15px_30px_rgba(255,255,255,0.1)]`}>
              {app.icon}
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
