import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function Compatibility() {
  const frameworks = [
    { name: "QBCore", desc: "Native support. Just drag and drop." },
    { name: "ESX", desc: "Full ESX Legacy support out of the box." },
    { name: "Qbox", desc: "Modern Qbox project compatibility." }
  ]

  return (
    <section className="py-24 px-6 w-full relative z-10 bg-[#050507]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Universal <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Compatibility</span>.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg mb-16"
        >
          XenoPhone integrates seamlessly with the most popular FiveM frameworks. No complex setup required.
        </motion.p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {frameworks.map((fw, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex-1 bg-[#0a0a0d] border border-white/10 p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity">
                <CheckCircle2 className="w-24 h-24 text-blue-500" />
              </div>
              <div className="relative z-10 text-left">
                <h3 className="text-2xl font-black text-white mb-2">{fw.name}</h3>
                <p className="text-gray-400 font-medium">{fw.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
