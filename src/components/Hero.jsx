import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Book, Zap, Globe, Smartphone } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-20 flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,92,0,0.15)_0%,transparent_60%)] blur-[80px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <motion.div
          className="flex-1 text-center lg:text-left z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-xeno-primary/10 border border-xeno-primary/20 text-xeno-primary text-sm font-semibold mb-6 tracking-wide uppercase">
            New Release
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
            Xeno <span className="gradient-text">Smartphone</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0">
            The most advanced FiveM phone system on the market. 25+ realistic apps, Dynamic Island, Face ID, and full support for QBCore, ESX, and Qbox.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
            <a
              href="#pricing"
              onClick={(e) => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-xeno-primary to-xeno-secondary text-white shadow-[0_4px_20px_rgba(255,92,0,0.3)] hover:shadow-[0_6px_30px_rgba(255,92,0,0.5)] transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Purchase Now
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="https://xeno-shop.gitbook.io/xeno-docs" className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold border border-xeno-primary text-white hover:bg-xeno-primary/5 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 shadow-[inset_0_0_0_rgba(255,92,0,0)] hover:shadow-[inset_0_0_15px_rgba(255,92,0,0.2)]">
              <Book className="w-5 h-5" />
              Documentation
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-8 border-t border-white/10">
            <div className="flex items-center gap-2 text-gray-400 font-medium">
              <Zap className="text-xeno-primary w-5 h-5" />
              0.00ms Idle
            </div>
            <div className="flex items-center gap-2 text-gray-400 font-medium">
              <Globe className="text-xeno-primary w-5 h-5" />
              42 Languages
            </div>
            <div className="flex items-center gap-2 text-gray-400 font-medium">
              <Smartphone className="text-xeno-primary w-5 h-5" />
              Custom Design
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 relative w-full max-w-lg lg:max-w-none flex justify-center items-center z-10 perspective-[1200px] lg:-mt-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,42,0,0.2)_0%,transparent_60%)] blur-[60px] -z-10 pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-[450px] h-[850px] flex items-center justify-center -translate-y-10"
          >
            {/* Overlay to block dragging if needed, but we want interaction. 
                Instead, we just make the iframe big enough to fit the phone natively. */}
            <iframe
              src="/preview/index.html"
              title="XenoPhone Live"
              className="absolute inset-0 w-full h-full border-none z-10"
              sandbox="allow-scripts allow-same-origin allow-forms"
              onLoad={(e) => {
                try {
                  const win = e.target.contentWindow;
                  win.localStorage.removeItem('xeno_phone_position');
                  win.localStorage.removeItem('phone_position');
                  // Try to inject style to prevent drag
                  const style = win.document.createElement('style');
                  style.innerHTML = '.drag-handle, [data-drag], .phone-header { pointer-events: none !important; touch-action: none !important; }';
                  win.document.head.appendChild(style);
                } catch (err) { }
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
