import React from 'react'
import { motion } from 'framer-motion'
import { PlayCircle } from 'lucide-react'

export default function Trailer() {
  return (
    <section id="trailer" className="py-24 px-6 w-full relative z-10 bg-[#020203]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group cursor-pointer border border-white/10 aspect-video bg-black shadow-2xl"
        >
          {/* Background image placeholder for trailer */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-500 group-hover:scale-105" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-20 h-20 md:w-28 md:h-28 bg-xeno-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-xeno-primary/50 shadow-[0_0_50px_rgba(255,92,0,0.3)] group-hover:shadow-[0_0_80px_rgba(255,92,0,0.6)] transition-all duration-300"
            >
              <PlayCircle className="w-10 h-10 md:w-14 md:h-14 text-white ml-2" />
            </motion.div>
            <h3 className="mt-8 text-3xl md:text-5xl font-black italic tracking-widest text-white uppercase drop-shadow-2xl">
              Watch The Trailer
            </h3>
            <p className="mt-4 text-gray-300 font-medium tracking-wide">
              See the XenoPhone in action.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
