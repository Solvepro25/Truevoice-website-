import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle, Shield, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#0F1240] via-[#1E1E8A] to-[#2B2BB5] py-[90px] px-[5%] relative overflow-hidden">
      {/* GLOWING ORB */}
      <div className="absolute -top-[120px] -right-[120px] w-[600px] h-[600px] bg-radial from-[#10C47A]/15 to-transparent pointer-events-none select-none" />

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* LEFT COLUMN - HERO INTRO */}
        <div className="text-white relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#10C47A]/15 border border-[#10C47A]/30 px-3.5 py-1.5 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-[#10C47A] pulse-dot" />
            <span className="text-[#10C47A] text-[11px] md:text-xs font-bold uppercase tracking-widest leading-none">
              Active Pilots Underway · Africa & Asia
            </span>
          </div>

          <h1 className="text-[34px] md:text-[54px] font-extrabold leading-[1.12] mb-5 font-heading text-white">
            Authenticate Anyone, <span className="text-[#10C47A]">Anywhere</span>, With Just Their Voice
          </h1>
          
          <p className="text-white/75 text-[16px] md:text-[17.5px] leading-relaxed max-w-[500px] mb-9 font-sans">
            Truevoice delivers multilingual voice biometric authentication for banks, fintechs, telecoms, and governments — working across apps, IVR, ATMs, POS, USSD, and offline channels in emerging markets.
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 flex-wrap">
            <a 
              href="#demo" 
              className="px-8 py-3.5 text-center font-bold text-white bg-[#10C47A] hover:bg-[#0A9A5E] hover:-translate-y-0.5 rounded-lg shadow-sm hover:shadow-lg hover:shadow-[#10C47A]/25 transition-all duration-200 select-none font-heading"
            >
              Try Live Demo
            </a>
            <a 
              href="#contact" 
              className="px-[30px] py-3.5 text-center font-bold text-white hover:bg-white/10 border-[1.5px] border-white/35 hover:border-white/60 rounded-lg transition-all duration-200 select-none font-heading"
            >
              Get API Access
            </a>
          </div>

          {/* CHECKMARKS FOR TRUST */}
          <div className="flex flex-wrap gap-x-6 gap-y-3.5 mt-10">
            <div className="flex items-center gap-2 select-none">
              <CheckCircle className="w-4 h-4 text-[#10C47A] flex-shrink-0" />
              <span className="text-white/60 text-[13.5px]">No special hardware</span>
            </div>
            <div className="flex items-center gap-2 select-none">
              <CheckCircle className="w-4 h-4 text-[#10C47A] flex-shrink-0" />
              <span className="text-white/60 text-[13.5px]">Works offline</span>
            </div>
            <div className="flex items-center gap-2 select-none">
              <CheckCircle className="w-4 h-4 text-[#10C47A] flex-shrink-0" />
              <span className="text-white/60 text-[13.5px]">30+ languages</span>
            </div>
            <div className="flex items-center gap-2 select-none">
              <CheckCircle className="w-4 h-4 text-[#10C47A] flex-shrink-0" />
              <span className="text-white/60 text-[13.5px]">Anti-spoofing AI</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - AUTH CARD MOCKUP */}
        <div className="flex justify-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-[20px] p-8 w-full max-w-[380px] shadow-2xl"
          >
            <div className="flex items-center gap-2.5 mb-7">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              <span className="text-white/70 text-[11.5px] ml-auto select-none font-sans uppercase tracking-wider">
                Voice Authentication
              </span>
            </div>

            {/* BRANCH AUTHENTICATION DETAILS */}
            <div className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-xl p-3.5 mb-6">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#10C47A] to-[#0A9A5E] flex items-center justify-center font-heading font-extrabold text-sm text-white select-none">
                AK
              </div>
              <div>
                <div className="text-white font-bold text-[14px]">
                  Amara Kamara
                </div>
                <div className="text-white/50 text-[11.5px]">
                  Lagos Branch — Transfer ₦ 250,000
                </div>
              </div>
            </div>

            <label className="text-white/55 text-[11.5px] block mb-2 font-sans select-none">
              Say your 4-digit passphrase to verify
            </label>

            {/* LIVE WAVEFORM SIMULATION */}
            <div className="flex items-center gap-1 h-12 mb-5">
              {Array.from({ length: 12 }).map((_, barIdx) => (
                <div 
                  key={barIdx} 
                  style={{ animationDelay: `${barIdx * 0.1}s` }}
                  className="flex-1 bg-[#10C47A] rounded-full wave-bar" 
                />
              ))}
            </div>

            {/* VERIFICATION REPORT CARD */}
            <div className="bg-[#10C47A]/15 border border-[#10C47A]/30 rounded-lg p-3 flex items-center gap-2.5">
              <CheckCircle className="w-[18px] h-[18px] text-[#10C47A] flex-shrink-0" />
              <div>
                <div className="text-[#10C47A] font-bold text-[13px]">
                  Identity Verified
                </div>
                <div className="text-white/50 text-[11px]">
                  Voice match · 98.4% confidence · 1.3s
                </div>
              </div>
            </div>

            <div className="flex gap-2.5 mt-5 flex-wrap">
              <span className="bg-white/8 border border-white/10 rounded px-2 py-1 text-white/60 text-[10.5px] font-sans">
                Mobile App
              </span>
              <span className="bg-white/8 border border-white/10 rounded px-2 py-1 text-white/60 text-[10.5px] font-sans">
                IVR
              </span>
              <span className="bg-white/8 border border-white/10 rounded px-2 py-1 text-white/60 text-[10.5px] font-sans">
                ATM
              </span>
              <span className="bg-white/8 border border-white/10 rounded px-2 py-1 text-white/60 text-[10.5px] font-sans">
                USSD
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
