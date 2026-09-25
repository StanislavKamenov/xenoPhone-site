import React from 'react'
import { Disc, HelpCircle, Mail, Map } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#020203] pt-20 pb-10 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img src="/XenoLogoNoBG.png" alt="XenoPhone" className="h-16 object-contain" onError={(e) => { e.target.style.display = 'none' }} />
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              The most advanced, perfectly optimized, and feature-rich smartphone script for your FiveM roleplay server.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-xeno-primary/20 hover:text-xeno-primary transition-colors">
                <Disc className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-xeno-primary/20 hover:text-xeno-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#apps" className="text-gray-400 hover:text-white transition-colors">Included Apps</a></li>
              <li><a href="#accessories" className="text-gray-400 hover:text-white transition-colors">Props & Accessories</a></li>
              <li><a href="#trailer" className="text-gray-400 hover:text-white transition-colors">Trailer</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Legal & Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><HelpCircle className="w-4 h-4" /> Discord Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><Map className="w-4 h-4" /> Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Xeno. All rights reserved. Not affiliated with Rockstar Games.
          </p>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-green-500" title="Systems Operational" />
          </div>
        </div>
      </div>
    </footer>
  )
}
