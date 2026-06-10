import Nav from './components/Nav';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import LanguagesMarquee from './components/LanguagesMarquee';
import Features from './components/Features';
import DemoWidget from './components/DemoWidget';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-white min-h-screen flex flex-col font-sans select-text Antialiased text-[#0F1240]">
      {/* 1. STICKY HEADER MATRIX */}
      <Nav />

      {/* 2. HERO HIGHLIGHT ZONE */}
      <Hero />

      {/* 3. HARD STATISTICS ACCREDITATION BAR */}
      <StatsBar />

      {/* 4. SEAMLESS RECURRING REGIONAL LANGUAGES TAPE */}
      <LanguagesMarquee />

      {/* 5. SYSTEM MODULE UTILITIES */}
      <Features />

      {/* 6. IMMERSIVE DEMO BENCHMARK */}
      <section className="bg-gradient-to-br from-[#0F1240] to-[#1E1E8A] py-[90px] px-[5%]" id="demo">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          {/* Left info segment */}
          <div className="text-white">
            <div className="text-xs font-bold uppercase tracking-wider text-[#10C47A] mb-3.5">
              Live Demo
            </div>
            <h2 className="text-[27px] md:text-[38px] font-extrabold leading-tight mb-4 font-heading">
              See voice authentication in action
            </h2>
            <p className="text-white/70 text-[16px] leading-relaxed mb-10 max-w-[480px]">
              This interactive simulator illustrates exactly how Truevoice works. A randomized passphrase digits set is prepared, mock speaker readouts are matched, and validation resolves safely in seconds.
            </p>

            {/* Simulated milestones flow */}
            <div className="flex flex-col gap-6 max-w-[440px]">
              {/* Step 1 */}
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-[#10C47A]/20 border border-[#10C47A]/40 flex items-center justify-center text-[#10C47A] font-extrabold text-sm leading-none flex-shrink-0 font-heading">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-[15px] text-white">
                    Generate Challenge
                  </h4>
                  <p className="text-white/50 text-xs mt-0.5 leading-relaxed">
                    System issues a session-specific 4-digit numeric code to speaking users.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-[#10C47A]/20 border border-[#10C47A]/40 flex items-center justify-center text-[#10C47A] font-extrabold text-sm leading-none flex-shrink-0 font-heading">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-[15px] text-white">
                    User Speaks
                  </h4>
                  <p className="text-white/50 text-xs mt-0.5 leading-relaxed">
                    The customer reads the digits aloud in their language.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-[#10C47A]/20 border border-[#10C47A]/40 flex items-center justify-center text-[#10C47A] font-extrabold text-sm leading-none flex-shrink-0 font-heading">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-[15px] text-white">
                    Voice Verified
                  </h4>
                  <p className="text-white/50 text-xs mt-0.5 leading-relaxed">
                    Truevoice compares stored vocal prints and filters synthetic speech elements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Widget segment */}
          <div className="w-full max-w-[440px] mx-auto lg:mr-0">
            <DemoWidget />
          </div>
        </div>
      </section>

      {/* 7. THREE-STEP DEPLOYMENT FLOW */}
      <HowItWorks />

      {/* 8. CHANNEL MATRIX CAROUSEL */}
      <div className="border-t border-b border-[#E2E4F0] bg-white py-12 px-[5%]">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center md:justify-between gap-6">
          <span className="font-heading font-extrabold text-[#374168] text-base whitespace-nowrap text-center md:text-left select-none">
            Works across every channel
          </span>
          <div className="flex flex-wrap gap-2.5 justify-center md:justify-end">
            {['Mobile App', 'IVR / Phone Call', 'USSD', 'ATM', 'POS Terminal', 'Web Portal', 'Offline'].map((chan, idx) => (
              <div 
                key={idx} 
                className="bg-[#F7F8FF] border-[1.5px] border-[#E2E4F0] rounded-full px-4 py-2 text-[13px] font-semibold text-[#374168] flex items-center gap-2 select-none"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#10C47A]" />
                <span>{chan}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 9. SERVICED SECTOR GRID */}
      <UseCases />

      {/* 10. PRICING GRID LAYOUTS */}
      <Pricing />

      {/* 11. END-OF-PAGE CALL TO ACTION PROMO */}
      <div className="bg-gradient-to-r from-[#0A9A5E] to-[#10C47A] py-20 px-[5%] text-center text-white relative">
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />
        <div className="max-w-[700px] mx-auto relative z-10">
          <h2 className="text-[27px] md:text-[38px] font-extrabold leading-tight mb-4 font-heading text-white">
            Ready to bring voice authentication to your users?
          </h2>
          <p className="text-white/80 text-[15.5px] leading-relaxed mb-9">
            Join our active pilot programme and be among the first institutions deploying Truevoice across Africa and Asia.
          </p>
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
            <a 
              href="#contact" 
              className="px-8 py-3.5 text-center font-bold text-[#0A9A5E] bg-white hover:bg-white/95 rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 select-none font-heading"
            >
              Request API Access
            </a>
            <a 
              href="#demo" 
              className="px-8 py-3.5 text-center font-bold text-white hover:bg-white/10 border-2 border-white/50 hover:border-white rounded-lg transition-all duration-200 select-none font-heading"
            >
              See the Demo First
            </a>
          </div>
        </div>
      </div>

      {/* 12. COMPREHENSIVE REGULATORY FOOTER */}
      <Footer />
    </div>
  );
}
