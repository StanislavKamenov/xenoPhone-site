import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function Accessories() {
  const accessories = [
    {
      title: "POWER BANK",
      desc: "Essential portable charger for immersive charging mechanics, convenience stores, and realistic mobile roleplay systems.",
      image: "/powerbank.png",
      tags: ["CHARGING FLOW", "INVENTORY ITEM", "CONVENIENCE STORE"],
      glow: "from-orange-500/30 to-xeno-secondary/30"
    },
    {
      title: "SIM CARDS",
      desc: "Create realistic phone activations, number replacements, and identity-based mobile systems fully integrated into your server economy.",
      image: "/simcard.png",
      tags: ["PHONE NUMBER", "IDENTITY FLOW", "SERVER ECONOMY"],
      glow: "from-yellow-400/30 to-orange-400/30"
    }
  ]

  return (
    <section id="accessories" className="py-32 px-6 w-full relative z-10 bg-[#020203]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
          >
            More Than <span className="gradient-text">Just Apps.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Physical in-game items that bridge the gap between reality and roleplay. Complete with custom high-quality props.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {accessories.map((acc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group relative rounded-[2.5rem] bg-[#0a0a0d] border border-white/5 p-10 overflow-hidden hover:border-xeno-primary/50 transition-colors duration-500"
            >
              {/* Massive Glow Background */}
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-64 bg-gradient-to-b ${acc.glow} blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-center mb-10">
                  <div className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold text-gray-300 tracking-wider flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-xeno-primary" /> FIVEM READY
                  </div>
                </div>

                <motion.div 
                  className="flex justify-center items-center flex-grow mb-12"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: i }}
                >
                  <img 
                    src={acc.image} 
                    alt={acc.title} 
                    className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-700"
                  />
                </motion.div>

                <div className="mt-auto">
                  <h3 className="text-3xl font-black text-white mb-4 tracking-tight">{acc.title}</h3>
                  <p className="text-gray-400 text-base leading-relaxed mb-8">
                    {acc.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {acc.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium bg-white/5 border border-white/5 text-gray-300 px-3 py-1.5 rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
