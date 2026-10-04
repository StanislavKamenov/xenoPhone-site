import React from 'react';
import { 
  Navigation, Video, Mail, Landmark, Receipt, Car, Calendar, 
  Calculator, Home, Building2, ShoppingBag, MessageCircle, 
  Image as ImageIcon, Clock, StickyNote, Settings, Phone, 
  MessageSquare, Users, Camera
} from 'lucide-react';

const IOS_COLORS = {
  maps: 'from-[#34c759] via-[#30d158] to-[#28cd41]',
  face2face: 'from-[#34c759] via-[#30d158] to-[#28cd41]',
  mail: 'from-[#007aff] to-[#5856d6]',
  wallet: 'from-[#1c1c1e] to-[#2c2c2e]',
  billing: 'from-[#ff3b30] to-[#ff2d55]',
  garage: 'from-[#ff9500] to-[#ffcc00]',
  calendar: 'from-[#ff3b30] to-[#ff2d55]',
  calc: 'from-[#ff9500] to-[#ffaa00]',
  properties: 'from-[#af52de] to-[#5856d6]',
  companies: 'from-[#007aff] to-[#34c759]',
  hub: 'from-[#007aff] to-[#5856d6]',
  bleeter: 'from-[#55bef0] to-[#007aff]',
  gallery: 'from-[#ff2d55] via-[#ff9500] to-[#af52de]',
  clock: 'from-[#1c1c1e] to-[#000000]',
  notes: 'from-[#ffcc00] to-[#ff9500]',
  settings: 'from-[#8e8e93] to-[#636366]',
  phone: 'from-[#34c759] to-[#28cd41]',
  messages: 'from-[#34c759] to-[#28cd41]',
  contacts: 'from-[#a2abb8] to-[#636e7b]',
  camera: 'from-[#d1d5db] via-[#9ca3af] to-[#4b5563]'
};

export default function MockupIcon({ appId, osType, genericIcon: Icon, genericColor }) {
  const isIos = osType === 'iphone';
  const isAndroid = osType === 'android';
  const isXeno = osType === 'xeno';
  
  // Custom iOS Icons
  if (isIos) {
    if (appId === 'calendar') {
      const dayName = new Date().toLocaleDateString('en', { weekday: 'short' }).toUpperCase();
      const dayNum = new Date().getDate();
      return (
        <div className="w-[56px] h-[56px] rounded-[15px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.35)] flex flex-col items-center overflow-hidden border border-black/10">
          <div className="w-full bg-[#ff3b30] text-white text-[9.5px] font-extrabold tracking-wider text-center py-0.5 uppercase">
            {dayName}
          </div>
          <div className="flex-1 flex items-center justify-center text-black text-[23px] font-bold leading-none pb-0.5">
            {dayNum}
          </div>
        </div>
      );
    }

    if (appId === 'clock') {
      const now = new Date();
      const hrs = now.getHours() % 12;
      const mins = now.getMinutes();
      const hourDeg = (hrs * 30) + (mins * 0.5);
      const minDeg = mins * 6;
      return (
        <div className="w-[56px] h-[56px] rounded-[15px] bg-black shadow-[0_4px_12px_rgba(0,0,0,0.35)] flex items-center justify-center relative border border-white/20 overflow-hidden">
          <div className="w-11 h-11 rounded-full border border-white/30 relative flex items-center justify-center">
            <div
              className="absolute w-[2px] h-[10px] bg-white rounded-full origin-bottom bottom-1/2 left-1/2 -ml-[1px]"
              style={{ transform: `rotate(${hourDeg}deg)` }}
            />
            <div
              className="absolute w-[1.5px] h-[14px] bg-white rounded-full origin-bottom bottom-1/2 left-1/2 -ml-[0.75px]"
              style={{ transform: `rotate(${minDeg}deg)` }}
            />
            <div
              className="absolute w-[1px] h-[16px] bg-[#ff3b30] rounded-full origin-bottom bottom-1/2 left-1/2 -ml-[0.5px]"
              style={{ transform: `rotate(${(now.getSeconds() * 6)}deg)` }}
            />
            <div className="w-1.5 h-1.5 rounded-full bg-[#ff3b30] z-10" />
          </div>
        </div>
      );
    }

    if (appId === 'gallery') {
      return (
        <div className="w-[56px] h-[56px] rounded-[15px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.35)] flex items-center justify-center relative overflow-hidden border border-black/10">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute w-[11px] h-[17px] bg-[#FFCC00] rounded-full origin-bottom bottom-1/2 left-1/2 -ml-[5.5px] opacity-85 mix-blend-multiply" style={{ transform: 'rotate(0deg) translateY(4px)' }} />
            <div className="absolute w-[11px] h-[17px] bg-[#34C759] rounded-full origin-bottom bottom-1/2 left-1/2 -ml-[5.5px] opacity-85 mix-blend-multiply" style={{ transform: 'rotate(45deg) translateY(4px)' }} />
            <div className="absolute w-[11px] h-[17px] bg-[#5AC8FA] rounded-full origin-bottom bottom-1/2 left-1/2 -ml-[5.5px] opacity-85 mix-blend-multiply" style={{ transform: 'rotate(90deg) translateY(4px)' }} />
            <div className="absolute w-[11px] h-[17px] bg-[#007AFF] rounded-full origin-bottom bottom-1/2 left-1/2 -ml-[5.5px] opacity-85 mix-blend-multiply" style={{ transform: 'rotate(135deg) translateY(4px)' }} />
            <div className="absolute w-[11px] h-[17px] bg-[#5856D6] rounded-full origin-bottom bottom-1/2 left-1/2 -ml-[5.5px] opacity-85 mix-blend-multiply" style={{ transform: 'rotate(180deg) translateY(4px)' }} />
            <div className="absolute w-[11px] h-[17px] bg-[#FF2D55] rounded-full origin-bottom bottom-1/2 left-1/2 -ml-[5.5px] opacity-85 mix-blend-multiply" style={{ transform: 'rotate(225deg) translateY(4px)' }} />
            <div className="absolute w-[11px] h-[17px] bg-[#FF3B30] rounded-full origin-bottom bottom-1/2 left-1/2 -ml-[5.5px] opacity-85 mix-blend-multiply" style={{ transform: 'rotate(270deg) translateY(4px)' }} />
            <div className="absolute w-[11px] h-[17px] bg-[#FF9500] rounded-full origin-bottom bottom-1/2 left-1/2 -ml-[5.5px] opacity-85 mix-blend-multiply" style={{ transform: 'rotate(315deg) translateY(4px)' }} />
          </div>
        </div>
      );
    }

    if (appId === 'camera') {
      return (
        <div className="w-[56px] h-[56px] rounded-[15px] bg-gradient-to-b from-[#e5e5ea] via-[#c7c7cc] to-[#8e8e93] shadow-[0_4px_12px_rgba(0,0,0,0.35)] flex items-center justify-center relative overflow-hidden border border-white/40">
          <div className="w-9 h-9 rounded-full bg-[#1c1c1e] flex items-center justify-center border-2 border-[#8e8e93] shadow-inner">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#0a84ff] to-[#0040dd] border border-blue-300/40 relative flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white/40" />
            </div>
          </div>
          <div className="absolute top-1.5 right-2 w-1.5 h-1.5 rounded-full bg-[#ffcc00] shadow-[0_0_4px_#ffcc00]" />
        </div>
      );
    }

    if (appId === 'notes') {
      return (
        <div className="w-[56px] h-[56px] rounded-[15px] bg-[#ffffff] shadow-[0_4px_12px_rgba(0,0,0,0.35)] flex flex-col overflow-hidden border border-black/10 relative">
          <div className="w-full h-[14px] bg-[#FCDA35] border-b border-[#D8A613]" />
          <div className="absolute left-[12px] top-[14px] bottom-0 w-[1px] bg-[#FF3B30] opacity-40" />
          <div className="flex-1 flex flex-col justify-evenly py-0 px-1 pl-4">
            <div className="w-full h-[1px] bg-[#E5E5EA]" />
            <div className="w-full h-[1px] bg-[#E5E5EA]" />
            <div className="w-full h-[1px] bg-[#E5E5EA]" />
          </div>
        </div>
      );
    }

    if (appId === 'mail') {
      return (
        <div className="w-[56px] h-[56px] rounded-[15px] bg-gradient-to-b from-[#54a3ff] to-[#007aff] shadow-[0_4px_12px_rgba(0,0,0,0.35)] flex items-center justify-center border border-white/20">
          <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 drop-shadow-sm">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </div>
      );
    }

    if (appId === 'maps') {
      return (
        <div className="w-[56px] h-[56px] rounded-[15px] bg-[#f2f2f7] shadow-[0_4px_12px_rgba(0,0,0,0.35)] flex items-center justify-center relative overflow-hidden border border-black/10">
          <div className="absolute inset-0 bg-[#e5e5ea]">
            <div className="absolute top-0 right-0 w-8 h-8 bg-[#34c759]/40 rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-6 h-6 bg-[#ffcc00]/50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-2 bg-white -rotate-30 shadow-xs" />
              <div className="h-full w-2 bg-[#0a84ff] rotate-45 shadow-xs absolute" />
            </div>
            <div className="absolute top-3 left-3 w-3 h-3 bg-[#0a84ff] rounded-full border-2 border-white shadow-md" />
          </div>
        </div>
      );
    }

    if (appId === 'wallet' || appId === 'bank') {
      return (
        <div className="w-[56px] h-[56px] rounded-[15px] bg-gradient-to-b from-[#409cff] to-[#007aff] shadow-[0_4px_12px_rgba(0,0,0,0.35)] flex items-center justify-center border border-white/20">
          <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 drop-shadow-sm">
            <path d="M4 10h2v7H4zm5 0h2v7H9zm5 0h2v7h-2zm5 0h2v7h-2zM2 22h20v-3H2v3zm10-20L2 6v2h20V6L12 2z" />
          </svg>
        </div>
      );
    }

    if (appId === 'bleeter') {
      return (
        <div className="w-[56px] h-[56px] rounded-[15px] bg-[#1DA1F2] shadow-[0_4px_12px_rgba(0,0,0,0.35)] flex items-center justify-center border border-white/20">
          <svg viewBox="0 0 24 24" fill="white" className="w-[32px] h-[32px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </div>
      );
    }

    if (appId === 'settings') {
      return (
        <div className="w-[56px] h-[56px] rounded-[15px] bg-gradient-to-b from-[#8e8e93] to-[#636366] shadow-[0_4px_12px_rgba(0,0,0,0.35)] flex items-center justify-center border border-white/20">
          <svg viewBox="0 0 24 24" fill="#1c1c1e" className="w-9 h-9 drop-shadow-sm">
            <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6-3.6z" />
          </svg>
        </div>
      );
    }

    if (appId === 'hub') {
      return (
        <div className="w-[56px] h-[56px] rounded-[15px] bg-gradient-to-b from-[#34aadc] to-[#007aff] shadow-[0_4px_12px_rgba(0,0,0,0.35)] flex items-center justify-center border border-white/20">
          <svg viewBox="0 0 100 100" className="w-[36px] h-[36px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
            <g stroke="white" strokeWidth="10" strokeLinecap="round">
              <line x1="56" y1="20" x2="22" y2="78" />
              <line x1="44" y1="20" x2="78" y2="78" />
              <line x1="28" y1="58" x2="72" y2="58" />
            </g>
          </svg>
        </div>
      );
    }

    if (appId === 'calc' || appId === 'calculator') {
      return (
        <div className="w-[56px] h-[56px] rounded-[15px] bg-black shadow-[0_4px_12px_rgba(0,0,0,0.35)] p-2 flex flex-col justify-between border border-white/20">
          <div className="flex justify-between w-full">
            <div className="w-[8.5px] h-[8.5px] rounded-full bg-[#a5a5a5]" />
            <div className="w-[8.5px] h-[8.5px] rounded-full bg-[#a5a5a5]" />
            <div className="w-[8.5px] h-[8.5px] rounded-full bg-[#a5a5a5]" />
            <div className="w-[8.5px] h-[8.5px] rounded-full bg-[#ff9f0a]" />
          </div>
          <div className="flex justify-between w-full">
            <div className="w-[8.5px] h-[8.5px] rounded-full bg-[#333333]" />
            <div className="w-[8.5px] h-[8.5px] rounded-full bg-[#333333]" />
            <div className="w-[8.5px] h-[8.5px] rounded-full bg-[#333333]" />
            <div className="w-[8.5px] h-[8.5px] rounded-full bg-[#ff9f0a]" />
          </div>
          <div className="flex justify-between w-full">
            <div className="w-[8.5px] h-[8.5px] rounded-full bg-[#333333]" />
            <div className="w-[8.5px] h-[8.5px] rounded-full bg-[#333333]" />
            <div className="w-[8.5px] h-[8.5px] rounded-full bg-[#333333]" />
            <div className="w-[8.5px] h-[8.5px] rounded-full bg-[#ff9f0a]" />
          </div>
          <div className="flex justify-between w-full">
            <div className="w-[19px] h-[8.5px] rounded-full bg-[#333333]" />
            <div className="w-[8.5px] h-[8.5px] rounded-full bg-[#333333]" />
            <div className="w-[8.5px] h-[8.5px] rounded-full bg-[#ff9f0a]" />
          </div>
        </div>
      );
    }

    if (appId === 'billing') {
      return (
        <div className="w-[56px] h-[56px] rounded-[15px] bg-gradient-to-b from-[#5ac8fa] to-[#007aff] shadow-[0_4px_12px_rgba(0,0,0,0.35)] flex items-center justify-center border border-white/20">
          <svg viewBox="0 0 24 24" fill="white" className="w-[30px] h-[30px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
            <path d="M18 2H6c-1.1 0-2 .9-2 2v18c0 .5.4.9.9.9.3 0 .6-.2.8-.4l1.8-1.8 2.5 2.5c.2.2.5.3.8.3s.6-.1.8-.3l2.5-2.5 2.5 2.5c.2.2.5.3.8.3s.6-.1.8-.3l1.8-1.8c.2-.2.4-.5.4-.8V4c0-1.1-.9-2-2-2zM8 7h8v2H8V7zm8 4H8v2h8v-2zm-3 4H8v2h5v-2z"/>
          </svg>
        </div>
      );
    }

    if (appId === 'companies') {
      return (
        <div className="w-[56px] h-[56px] rounded-[15px] bg-gradient-to-b from-[#34aadc] to-[#2b59c3] shadow-[0_4px_12px_rgba(0,0,0,0.35)] flex items-center justify-center border border-white/20">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
            <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
          </svg>
        </div>
      );
    }

    if (appId === 'properties') {
      return (
        <div className="w-[56px] h-[56px] rounded-[15px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.35)] flex items-center justify-center border border-white/20">
          <svg viewBox="0 0 24 24" fill="url(#homeGradient)" className="w-[34px] h-[34px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
            <defs>
              <linearGradient id="homeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffcc00" />
                <stop offset="100%" stopColor="#ff9500" />
              </linearGradient>
            </defs>
            <path d="M12 3L2 11.5h3V20h5v-6h4v6h5v-8.5h3L12 3z"/>
          </svg>
        </div>
      );
    }

    if (appId === 'garage') {
      return (
        <div className="w-[56px] h-[56px] rounded-[15px] bg-gradient-to-b from-[#ff9500] to-[#ff3b30] shadow-[0_4px_12px_rgba(0,0,0,0.35)] flex items-center justify-center border border-white/20">
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
            <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.64 5H8.4a2 2 0 0 0-1.9 1.3L5 10 3 8"/>
            <path d="M7 14h.01"/>
            <path d="M17 14h.01"/>
            <rect width="18" height="8" x="3" y="10" rx="2"/>
            <path d="M5 18v2"/>
            <path d="M19 18v2"/>
          </svg>
        </div>
      );
    }

    if (appId === 'phone') {
      return (
        <div className="w-[56px] h-[56px] rounded-[15px] bg-gradient-to-b from-[#34c759] to-[#28cd41] shadow-[0_4px_12px_rgba(0,0,0,0.35)] flex items-center justify-center border border-white/20">
          <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 drop-shadow-sm">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </div>
      );
    }

    if (appId === 'messages') {
      return (
        <div className="w-[56px] h-[56px] rounded-[15px] bg-gradient-to-b from-[#34c759] to-[#28cd41] shadow-[0_4px_12px_rgba(0,0,0,0.35)] flex items-center justify-center border border-white/20">
          <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 drop-shadow-sm">
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        </div>
      );
    }

    if (appId === 'face2face') {
      return (
        <div className="w-[56px] h-[56px] rounded-[15px] bg-gradient-to-b from-[#34c759] to-[#28cd41] shadow-[0_4px_12px_rgba(0,0,0,0.35)] flex items-center justify-center border border-white/20">
          <svg viewBox="0 0 24 24" fill="white" className="w-[32px] h-[32px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">
            <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
          </svg>
        </div>
      );
    }
  }

  // Android / Samsung specific colors
  const SAMSUNG_ICON_COLORS = {
    phone: { bg: 'from-[#4caf50] to-[#2e7d32]' },
    messages: { bg: 'from-[#4a9fff] to-[#1472ff]' },
    contacts: { bg: 'from-[#ff9800] to-[#f57c00]' },
    camera: { bg: 'from-[#546e7a] to-[#37474f]' },
    gallery: { bg: 'from-[#e91e63] to-[#c2185b]' },
    settings: { bg: 'from-[#607d8b] to-[#455a64]' },
    maps: { bg: 'from-[#4caf50] to-[#388e3c]' },
    mail: { bg: 'from-[#1472ff] to-[#0d47a1]' },
    wallet: { bg: 'from-[#1472ff] to-[#0d47a1]' },
    billing: { bg: 'from-[#00bcd4] to-[#0097a7]' },
    garage: { bg: 'from-[#ff5722] to-[#d84315]' },
    calendar: { bg: 'from-[#f44336] to-[#c62828]' },
    calc: { bg: 'from-[#9c27b0] to-[#7b1fa2]' },
    properties: { bg: 'from-[#673ab7] to-[#512da8]' },
    companies: { bg: 'from-[#3f51b5] to-[#303f9f]' },
    hub: { bg: 'from-[#1472ff] to-[#0d47a1]' },
    bleeter: { bg: 'from-[#03a9f4] to-[#0288d1]' },
    clock: { bg: 'from-[#455a64] to-[#263238]' },
    notes: { bg: 'from-[#ffb300] to-[#ff8f00]' },
    blackjack: { bg: 'from-[#212121] to-[#000000]' },
    snake: { bg: 'from-[#66bb6a] to-[#43a047]' },
    stacker: { bg: 'from-[#ffa726] to-[#ef6c00]' },
    darkchat: { bg: 'from-[#7c4dff] to-[#651fff]' },
    weather: { bg: 'from-[#29b6f6] to-[#0288d1]' },
    music: { bg: 'from-[#e91e63] to-[#ad1457]' },
    crypto: { bg: 'from-[#ffc107] to-[#ff8f00]' },
    tinder: { bg: 'from-[#ff5252] to-[#d32f2f]' },
    radio: { bg: 'from-[#26a69a] to-[#00897b]' },
    face2face: { bg: 'from-[#66bb6a] to-[#388e3c]' },
    ads: { bg: 'from-[#fdd835] to-[#f9a825]' },
  };

  if (isAndroid) {
    if (appId === 'phone') {
      return (
        <div className="w-[54px] h-[54px] rounded-full bg-gradient-to-b from-[#4caf50] to-[#2e7d32] shadow-[0_3px_10px_rgba(76,175,80,0.35)] flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 drop-shadow-sm">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </div>
      );
    }
    if (appId === 'messages') {
      return (
        <div className="w-[54px] h-[54px] rounded-full bg-gradient-to-b from-[#4a9fff] to-[#1472ff] shadow-[0_3px_10px_rgba(20,114,255,0.35)] flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 drop-shadow-sm">
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
          </svg>
        </div>
      );
    }
    if (appId === 'camera') {
      return (
        <div className="w-[54px] h-[54px] rounded-full bg-gradient-to-b from-[#546e7a] to-[#37474f] shadow-[0_3px_10px_rgba(84,110,122,0.35)] flex items-center justify-center relative overflow-hidden border border-white/10">
          <div className="w-9 h-9 rounded-full bg-[#1a1a2e] flex items-center justify-center border-2 border-[#455a64]">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#8ab4f8] to-[#1472ff] border border-blue-300/30 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
            </div>
          </div>
          <div className="absolute top-1.5 right-2 w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-[0_0_4px_#ffc107]" />
        </div>
      );
    }
    if (appId === 'gallery') {
      return (
        <div className="w-[54px] h-[54px] rounded-full bg-gradient-to-br from-[#e91e63] via-[#f44336] to-[#ff9800] shadow-[0_3px_10px_rgba(233,30,99,0.35)] flex items-center justify-center overflow-hidden">
          <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 drop-shadow-sm">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
          </svg>
        </div>
      );
    }
    if (appId === 'settings') {
      return (
        <div className="w-[54px] h-[54px] rounded-full bg-gradient-to-b from-[#607d8b] to-[#455a64] shadow-[0_3px_10px_rgba(96,125,139,0.35)] flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 drop-shadow-sm">
            <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6-3.6z" />
          </svg>
        </div>
      );
    }
    if (appId === 'calendar') {
      const dayName = new Date().toLocaleDateString('en', { weekday: 'short' }).toUpperCase();
      const dayNum = new Date().getDate();
      return (
        <div className="w-[54px] h-[54px] rounded-full bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)] flex flex-col items-center overflow-hidden">
          <div className="w-full bg-[#f44336] text-white text-[9px] font-extrabold tracking-wider text-center py-[4px]">
            {dayName}
          </div>
          <div className="flex-1 flex items-center justify-center text-[#1a1a2e] text-[22px] font-bold leading-none pb-0.5">
            {dayNum}
          </div>
        </div>
      );
    }
    if (appId === 'clock') {
      const now = new Date();
      const hrs = now.getHours() % 12;
      const mins = now.getMinutes();
      const hourDeg = (hrs * 30) + (mins * 0.5);
      const minDeg = mins * 6;
      return (
        <div className="w-[54px] h-[54px] rounded-full bg-gradient-to-b from-[#455a64] to-[#263238] shadow-[0_3px_10px_rgba(69,90,100,0.35)] flex items-center justify-center">
          <div className="w-10 h-10 rounded-full border border-white/30 relative flex items-center justify-center">
            <div className="absolute w-[1.5px] h-[10px] bg-white rounded-full origin-bottom bottom-1/2 left-1/2 -ml-[0.75px]" style={{ transform: `rotate(${hourDeg}deg)` }} />
            <div className="absolute w-[1px] h-[13px] bg-white rounded-full origin-bottom bottom-1/2 left-1/2 -ml-[0.5px]" style={{ transform: `rotate(${minDeg}deg)` }} />
            <div className="w-1.5 h-1.5 rounded-full bg-[#8ab4f8] z-10" />
          </div>
        </div>
      );
    }
    if (appId === 'weather') {
      return (
        <div className="w-[54px] h-[54px] rounded-full bg-gradient-to-b from-[#29b6f6] to-[#0288d1] shadow-[0_3px_10px_rgba(41,182,246,0.35)] flex items-center justify-center relative overflow-hidden">
          <div className="absolute top-2.5 left-2.5 w-5 h-5 bg-[#ffb300] rounded-full shadow-[0_0_6px_#ffb300]" />
          <div className="absolute bottom-2.5 right-1.5 w-9 h-5 bg-white/90 rounded-full before:content-[''] before:absolute before:-top-2 before:left-1 before:w-5 before:h-5 before:bg-white/90 before:rounded-full" />
        </div>
      );
    }
    if (appId === 'darkchat') {
      return (
        <div className="w-[54px] h-[54px] rounded-full bg-gradient-to-b from-[#7c4dff] to-[#651fff] shadow-[0_3px_10px_rgba(124,77,255,0.35)] flex items-center justify-center">
          <div className="flex items-center gap-[2px]">
            <div className="w-[2px] h-4 bg-white rounded-full" />
            <div className="w-[2px] h-2.5 bg-white/70 rounded-full" />
            <div className="w-[2px] h-5 bg-white rounded-full" />
            <div className="w-[2px] h-1.5 bg-white/50 rounded-full" />
            <div className="w-[2px] h-3 bg-white/80 rounded-full" />
          </div>
        </div>
      );
    }
    if (appId === 'bleeter') {
      return (
        <div className="w-[54px] h-[54px] rounded-full bg-gradient-to-b from-[#03a9f4] to-[#0288d1] shadow-[0_3px_10px_rgba(3,169,244,0.35)] flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="white" className="w-[30px] h-[30px]">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </div>
      );
    }
    if (appId === 'hub') {
      return (
        <div className="w-[54px] h-[54px] rounded-[18px] bg-white shadow-lg flex items-center justify-center border border-black/5">
          <svg viewBox="0 0 48 48" width={32} height={32} xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm ml-1 mt-0.5">
            <path fill="#4caf50" d="M6.6,5.3l23.5,23.5l6.5-6.5L6.6,5.3z" />
            <path fill="#2196f3" d="M5.4,6.7C5.1,7.4,5,8.2,5,9.2v29.6c0,1,0.1,1.8,0.4,2.5l24.7-24.7L5.4,6.7z" />
            <path fill="#f44336" d="M6.6,42.7l30-17.1l-6.5-6.5L6.6,42.7z" />
            <path fill="#ffeb3b" d="M36.6,25.6l6.2-3.6c1.6-0.9,1.6-2.4,0-3.3l-6.2-3.6l-6.5,6.5L36.6,25.6z" />
          </svg>
        </div>
      );
    }
  }

  // Fallback to default rendering (XenoOS or uncustomized Android/iOS apps)
  let finalGradient = genericColor;
  if (isIos && IOS_COLORS[appId]) {
    finalGradient = IOS_COLORS[appId];
  } else if (isAndroid && SAMSUNG_ICON_COLORS[appId]) {
    finalGradient = SAMSUNG_ICON_COLORS[appId].bg;
  }
  
  return (
    <div className={`${isAndroid ? 'w-[54px] h-[54px] rounded-full' : isXeno ? 'w-[54px] h-[54px] rounded-[16px]' : 'w-[56px] h-[56px] rounded-[15px]'} flex items-center justify-center shadow-lg bg-gradient-to-br ${finalGradient} border border-white/10`}>
      <Icon className={`text-white ${isIos ? 'drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] w-7 h-7' : 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] w-[27px] h-[27px]'}`} strokeWidth={isIos ? 1.8 : 1.5} />
    </div>
  );
}
