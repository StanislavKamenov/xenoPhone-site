import React from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Zap } from 'lucide-react'

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 w-full relative z-10 bg-[#020203]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
          >
            Choose Your <span className="gradient-text">License</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Join thousands of servers using the most advanced phone system in FiveM. Instant delivery upon purchase.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Subscription Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0a0a0d] border border-white/10 rounded-3xl p-8 relative flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-white">Monthly Sub</h3>
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-black text-white">$15.99</span>
                <span className="text-gray-500 font-medium"> / month</span>
              </div>
              <p className="text-gray-400 mb-8">
                Perfect for starting communities. Cancel anytime. Always stay updated with the latest features.
              </p>
              
              <ul className="space-y-4 mb-8">
                {['Full access to XenoPhone', 'All 25+ Built-in Apps', 'Free minor and major updates', 'Premium Support', 'Cancel anytime'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-xeno-primary mr-3 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a 
              href="https://xenoshop.net" 
              target="_blank" rel="noopener noreferrer"
              className="w-full block text-center py-4 rounded-xl font-bold bg-white/5 text-white hover:bg-white/10 transition-colors border border-white/10"
            >
              Subscribe Now
            </a>
          </motion.div>

          {/* Lifetime Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-[#1a1a24] to-[#0a0a0d] border border-xeno-primary/50 shadow-[0_0_50px_rgba(255,92,0,0.1)] rounded-3xl p-8 relative flex flex-col justify-between transform md:-translate-y-4"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-xeno-primary to-xeno-secondary text-white font-bold px-4 py-1 rounded-full text-sm flex items-center gap-1 shadow-lg">
              <Star className="w-4 h-4" fill="currentColor" /> BEST VALUE
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-white">Lifetime License</h3>
                <div className="p-2 bg-xeno-primary/10 rounded-lg">
                  <Star className="w-6 h-6 text-xeno-primary" />
                </div>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-black text-white">$49.99</span>
                <span className="text-gray-500 font-medium"> / one-time</span>
              </div>
              <p className="text-gray-400 mb-8">
                Pay once, own it forever. The ultimate choice for established servers seeking the best technology.
              </p>
              
              <ul className="space-y-4 mb-8">
                {['Full access to XenoPhone', 'All 25+ Built-in Apps', 'Lifetime free updates', 'Priority Premium Support', 'No recurring fees'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-xeno-primary mr-3 shrink-0" />
                    <span className={i === 4 ? "font-bold text-white" : ""}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a 
              href="https://xenoshop.net" 
              target="_blank" rel="noopener noreferrer"
              className="w-full block text-center py-4 rounded-xl font-bold text-white bg-gradient-to-r from-xeno-primary to-xeno-secondary hover:shadow-[0_0_20px_rgba(255,92,0,0.4)] transition-all hover:-translate-y-1"
            >
              Purchase Lifetime
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
