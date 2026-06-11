import TruevoiceLogo from './TruevoiceLogo';
import { MapPin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0F1240] py-[64px] px-[5%]" id="contact">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 pb-12 border-b border-white/10 mb-8">
        
        {/* BRAND COLUMN */}
        <div>
          <div className="mb-4">
            {/* <TruevoiceLogo lightBackground={false} height={40} className="block mb-3" /> */}
            <img src="../assets/images/WhiteLogo.png" alt="Truevoice" width={145} />
          </div>
          <p className="text-white/45 text-[13.5px] leading-relaxed mb-5 max-w-[280px]">
            The voice authentication infrastructure for emerging markets — making secure digital identity accessible to everyone, everywhere.
          </p>
          <div className="text-[12.5px] text-white/45 leading-relaxed space-y-2.5 font-sans">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#10C47A] flex-shrink-0 mt-0.5" />
              <span>35, Opebi Road, Ikeja, Lagos, Nigeria</span>
            </div>
            <div className="flex items-start gap-2">
              <Mail className="w-4 h-4 text-[#10C47A] flex-shrink-0 mt-0.5" />
              <a href="mailto:hello@truevoice.dev" className="hover:text-white transition-colors duration-200">
                hello@truevoice.dev
              </a>
            </div>
          </div>
        </div>

        {/* COL 2: PRODUCT */}
        <div>
          <h4 className="text-white text-[14px] font-bold uppercase tracking-wider mb-4 font-heading">
            Product
          </h4>
          <ul className="space-y-3.5">
            <li>
              <a href="#features" className="text-white/50 hover:text-[#10C47A] text-[13.5px] transition-colors duration-250">
                Features
              </a>
            </li>
            <li>
              <a href="#demo" className="text-white/50 hover:text-[#10C47A] text-[13.5px] transition-colors duration-250">
                Live Demo
              </a>
            </li>
            <li>
              <a href="#how" className="text-white/50 hover:text-[#10C47A] text-[13.5px] transition-colors duration-250">
                How It Works
              </a>
            </li>
            <li>
              <a href="#" className="text-white/50 hover:text-[#10C47A] text-[13.5px] transition-colors duration-250">
                API Documentation
              </a>
            </li>
            <li>
              <a href="#" className="text-white/50 hover:text-[#10C47A] text-[13.5px] transition-colors duration-250">
                Developer Sandbox
              </a>
            </li>
          </ul>
        </div>

        {/* COL 3: SOLUTIONS */}
        <div>
          <h4 className="text-white text-[14px] font-bold uppercase tracking-wider mb-4 font-heading">
            Solutions
          </h4>
          <ul className="space-y-3.5">
            <li>
              <span className="text-white/50 text-[13.5px]">Banking</span>
            </li>
            <li>
              <span className="text-white/50 text-[13.5px]">Fintech</span>
            </li>
            <li>
              <span className="text-white/50 text-[13.5px]">Telecoms</span>
            </li>
            <li>
              <span className="text-white/50 text-[13.5px]">Government</span>
            </li>
            <li>
              <span className="text-white/50 text-[13.5px]">Microfinance</span>
            </li>
          </ul>
        </div>

        {/* COL 4: COMPANY */}
        <div>
          <h4 className="text-white text-[14px] font-bold uppercase tracking-wider mb-4 font-heading">
            Company
          </h4>
          <ul className="space-y-3.5">
            <li>
              <span className="text-white/50 text-[13.5px]">About Us</span>
            </li>
            <li>
              <span className="text-white/50 text-[13.5px]">Markets</span>
            </li>
            <li>
              <span className="text-white/50 text-[13.5px]">Pilot Programme</span>
            </li>
            <li>
              <a href="#pricing" className="text-white/50 hover:text-[#10C47A] text-[13.5px] transition-colors duration-250">
                Pricing
              </a>
            </li>
            <li>
              <span className="text-white/50 text-[13.5px]">Lagos Hub</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-white/30 text-[11.5px] text-center sm:text-left leading-normal font-sans">
          © 2025 Rovasoft Tech Solutions Ltd. All rights reserved. Trading as Truevoice.
        </p>
        <div className="flex gap-6 text-[12px] text-white/30">
          <span className="hover:text-white/60">Privacy Policy</span>
          <span className="hover:text-white/60">Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
}
