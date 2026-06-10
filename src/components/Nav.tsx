import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShieldAlert, Fingerprint } from 'lucide-react';
import TruevoiceLogo from './TruevoiceLogo';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/96 backdrop-blur-md border-b border-[#E2E4F0] px-[5%]">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[68px]">
        {/* LOGO */}
        <a href="#" className="flex items-center select-none">
          <TruevoiceLogo lightBackground={true} height={38} className="block" />
        </a>

        {/* DESKTOP NAV LINKS */}
        <ul className="hidden md:flex gap-9 text-[15px] font-medium text-[#374168]">
          <li>
            <a href="#features" className="hover:text-[#2B2BB5] transition-colors duration-200">
              Features
            </a>
          </li>
          <li>
            <a href="#demo" className="hover:text-[#2B2BB5] transition-colors duration-200">
              Live Demo
            </a>
          </li>
          <li>
            <a href="#how" className="hover:text-[#2B2BB5] transition-colors duration-200">
              How It Works
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-[#2B2BB5] transition-colors duration-200">
              Pricing
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#2B2BB5] transition-colors duration-200">
              Contact
            </a>
          </li>
        </ul>

        {/* ACTIONS */}
        <div className="hidden sm:flex gap-3 items-center">
          <a 
            href="#contact" 
            className="px-5 py-[9px] rounded-lg text-sm font-semibold text-[#2B2BB5] border-[1.5px] border-[#2B2BB5] hover:bg-[#ECEEFF] transition-all duration-200"
          >
            Sign In
          </a>
          <a 
            href="#demo" 
            className="px-[22px] py-[9px] rounded-lg text-sm font-semibold text-white bg-[#2B2BB5] hover:bg-[#1A1A7A] hover:-translate-y-[1px] shadow-sm hover:shadow-md transition-all duration-200"
          >
            Try Demo
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden flex p-2 text-[#0F1240] hover:text-[#2B2BB5] focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE NAV DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white border-t border-[#E2E4F0] overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              <a 
                href="#features" 
                onClick={() => setIsOpen(false)}
                className="text-[16px] font-medium text-[#374168] hover:text-[#2B2BB5] py-2 border-b border-gray-50 block"
              >
                Features
              </a>
              <a 
                href="#demo"
                onClick={() => setIsOpen(false)}
                className="text-[16px] font-medium text-[#374168] hover:text-[#2B2BB5] py-2 border-b border-gray-50 block"
              >
                Live Demo
              </a>
              <a 
                href="#how"
                onClick={() => setIsOpen(false)}
                className="text-[16px] font-medium text-[#374168] hover:text-[#2B2BB5] py-2 border-b border-gray-50 block"
              >
                How It Works
              </a>
              <a 
                href="#pricing"
                onClick={() => setIsOpen(false)}
                className="text-[16px] font-medium text-[#374168] hover:text-[#2B2BB5] py-2 border-b border-gray-50 block"
              >
                Pricing
              </a>
              <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-[16px] font-medium text-[#374168] hover:text-[#2B2BB5] py-2 block"
              >
                Contact
              </a>
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-[#E2E4F0]">
                {/* Sign In button */}
                <a 
                  href="#contact" 
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center px-5 py-[12px] rounded-lg text-sm font-semibold text-[#2B2BB5] border-[1.5px] border-[#2B2BB5] hover:bg-[#ECEEFF]"
                >
                  Sign In
                </a>
                {/* Try Demo button */}
                <a 
                  href="#demo" 
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center px-5 py-[12px] rounded-lg text-sm font-semibold text-white bg-[#2B2BB5] hover:bg-[#1A1A7A]"
                >
                  Try Demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
