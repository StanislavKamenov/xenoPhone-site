import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Apps', href: '#apps' },
    { name: 'Accessories', href: '#accessories' },
    { name: 'Trailer', href: '#trailer' },
    { name: 'Pricing', href: '#pricing', active: true },
  ]

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-xeno-dark/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-outfit z-50 flex items-center">
          <img src="/XenoLogoNoBG.png" alt="XenoShop" className="h-10 md:h-12 object-contain" onError={(e) => { e.target.style.display = 'none' }} />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href} 
              className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-white relative group ${link.active ? 'text-white' : 'text-gray-400'}`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 h-0.5 bg-xeno-primary transition-all duration-300 ${link.active ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="#pricing" className="px-5 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-xeno-primary to-xeno-secondary text-white shadow-[0_0_15px_rgba(255,92,0,0.3)] hover:shadow-[0_0_25px_rgba(255,92,0,0.5)] transition-all hover:-translate-y-0.5">
            Buy Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-xeno-dark flex flex-col items-center justify-center gap-8 md:hidden"
            >
              {navLinks.map((link, idx) => (
                <a key={idx} href={link.href} onClick={() => setIsOpen(false)} className="text-2xl font-semibold">
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-4 mt-8 w-64">
                <a href="#pricing" onClick={() => setIsOpen(false)} className="w-full text-center px-5 py-3 rounded-lg text-base font-semibold bg-gradient-to-r from-xeno-primary to-xeno-secondary text-white">
                  Buy Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
