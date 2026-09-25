import React from 'react'
import { motion } from 'framer-motion'
import { Zap, ShieldCheck, Cpu, Globe2, Code2, Paintbrush } from 'lucide-react'

export default function TechSpecs() {
  const specs = [
    {
      title: "0.00ms",
      subtitle: "Idle Performance",
      desc: "Perfectly optimized. Zero impact on server performance when idle, peaking at 0.04ms during heavy use.",
      icon: <Zap className="w-5 h-5 text-yellow-500" />,
      colSpan: "md:col-span-2",
      bg: "bg-gradient-to-br from-yellow-500/10 to-transparent border-yellow-500/20"
    },
    {
      title: "React",
      subtitle: "Built with Vite & React",
      desc: "Blazing fast UI rendering and instant HMR for developers.",
      icon: <Code2 className="w-5 h-5 text-blue-500" />,
      colSpan: "md:col-span-1",
      bg: "bg-gradient-to-br from-blue-500/10 to-transparent border-blue-500/20"
    },
    {
      title: "42",
      subtitle: "Languages Supported",
      desc: "Fully localized with 42 out-of-the-box languages. Ready for global communities.",
      icon: <Globe2 className="w-5 h-5 text-green-500" />,
      colSpan: "md:col-span-1",
      bg: "bg-gradient-to-br from-green-500/10 to-transparent border-green-500/20"
    },
    {
      title: "SQL",
      subtitle: "OxMySQL Optimized",
      desc: "Heavy queries are cached and batched to ensure your database never bottlenecks.",
      icon: <Cpu className="w-5 h-5 text-purple-500" />,
      colSpan: "md:col-span-1",
      bg: "bg-gradient-to-br from-purple-500/10 to-transparent border-purple-500/20"
    },
    {
      title: "100%",
      subtitle: "Customizable",
      desc: "Change colors, wallpapers, and cases. Open source HTML/CSS for complete freedom.",
      icon: <Paintbrush className="w-5 h-5 text-pink-500" />,
      colSpan: "md:col-span-1",
      bg: "bg-gradient-to-br from-pink-500/10 to-transparent border-pink-500/20"
    }
  ]

  return (
    <section className="py-24 px-6 w-full relative z-10 bg-[#020203]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-xeno-primary to-xeno-secondary">Performance</span>.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            We didn't just build a phone. We built an entire operating system for FiveM. Every line of code is optimized for maximum frames and zero lag.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specs.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-3xl p-8 border ${spec.bg} ${spec.colSpan} flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className="mb-8 flex items-center justify-between">
                {spec.icon}
              </div>
              <div>
                <h3 className="text-5xl font-black text-white mb-2 tracking-tighter group-hover:scale-105 origin-left transition-transform duration-300">{spec.title}</h3>
                <h4 className="text-xl font-bold text-white/90 mb-2">{spec.subtitle}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{spec.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
