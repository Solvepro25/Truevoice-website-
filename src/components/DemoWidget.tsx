import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mic, Volume2, ShieldCheck, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function DemoWidget() {
  const [demoState, setDemoState] = useState<'idle' | 'listening' | 'success'>('idle');
  const [currentDigits, setCurrentDigits] = useState<string[]>(['--', '--', '--', '--']);
  const [highlightIdx, setHighlightIdx] = useState<number>(-1);
  const [confidence, setConfidence] = useState<string>('');
  const [authTime, setAuthTime] = useState<string>('');

  // Generate 4 randomized 2-digit strings
  const generateDigits = () => {
    return Array.from({ length: 4 }, () => 
      String(Math.floor(Math.random() * 90) + 10)
    );
  };

  // Seed initial digits on component mounting
  useEffect(() => {
    setCurrentDigits(generateDigits());
  }, []);

  const triggerVerification = () => {
    if (demoState === 'listening') return;

    // Reset previous states
    setDemoState('listening');
    setHighlightIdx(-1);

    const nextDigits = generateDigits();
    setCurrentDigits(nextDigits);

    // sequential highlighting of each of the 4 digits
    let runner = 0;
    const highlightTimer = setInterval(() => {
      setHighlightIdx(runner);
      runner++;
      if (runner > 4) {
        clearInterval(highlightTimer);
      }
    }, 600);

    // After 3.2 seconds, simulate API response validation match
    setTimeout(() => {
      clearInterval(highlightTimer);
      setHighlightIdx(-1);
      
      const score = (95.4 + Math.random() * 3.8).toFixed(1);
      const latencySecs = (0.8 + Math.random() * 0.9).toFixed(1);
      
      setConfidence(score);
      setAuthTime(latencySecs);
      setDemoState('success');
    }, 3200);
  };

  return (
    <div className="bg-white rounded-[20px] overflow-hidden shadow-xl border border-[#E2E4F0]">
      {/* HEADER BAR */}
      <div className="bg-[#2B2BB5] px-7 py-5 flex items-center gap-[12px]">
        <div className="w-[42px] h-[42px] rounded-full bg-white/15 flex items-center justify-center font-bold text-white shadow-inner select-none animate-pulse">
          <Mic className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-white text-[15px] font-extrabold font-heading">
            Truevoice Authentic System
          </h3>
          <p className="text-white/65 text-[12px] font-sans">
            Simulated biometric check · No microphone required
          </p>
        </div>
      </div>

      {/* DASHBOARD BODY */}
      <div className="p-8">
        <label className="text-[13px] font-semibold text-[#8A90B4] select-none block mb-2.5">
          Your passphrase — tap the button and speak these digits:
        </label>

        {/* DIGITS INDICATOR */}
        <div className="grid grid-cols-4 gap-2.5 mb-7">
          {currentDigits.map((digit, i) => (
            <div 
              key={i} 
              className={`rounded-xl py-3 border-[1.5px] font-heading font-extrabold text-[24px] text-center select-none transition-all duration-300 ${
                highlightIdx === i 
                  ? 'bg-[#2B2BB5] text-white border-[#2B2BB5] scale-[1.06] shadow-md shadow-[#2B2BB5]/25' 
                  : 'bg-[#F7F8FF] text-[#2B2BB5] border-[#2B2BB5]/35'
              }`}
            >
              {digit}
            </div>
          ))}
        </div>

        {/* VOICE BIOMETRIC GRAPHICAL WAVEFORM */}
        <div className="h-16 flex items-center gap-[3px] px-2 mb-[20px] bg-[#F7F8FF] rounded-lg overflow-hidden relative">
          {Array.from({ length: 16 }).map((_, waveIdx) => {
            const delayValue = (waveIdx * 0.08).toFixed(2);
            return (
              <div 
                key={waveIdx} 
                style={{ animationDelay: `${delayValue}s` }}
                className={`flex-1 bg-[#2B2BB5] rounded-full h-1 select-none transition-all duration-150 ${
                  demoState === 'listening' ? 'demo-wave-bar active' : 'opacity-35 h-1 bg-[#2B2BB5]'
                }`}
              />
            );
          })}
        </div>

        {/* CURRENT STATUS TAG */}
        <div className="flex items-center gap-2.5 text-sm font-medium text-[#374168] mb-[24px] min-h-[28px]">
          <div className={`w-[10px] h-[10px] rounded-full flex-shrink-0 transition-colors duration-300 ${
            demoState === 'idle' 
              ? 'bg-[#8A90B4]' 
              : demoState === 'listening' 
                ? 'bg-[#F59E0B] pulse-dot' 
                : 'bg-[#10C47A]'
          }`} />
          <span className="font-sans text-[13.5px]">
            {demoState === 'idle' && 'Tap "Start Verification" to begin'}
            {demoState === 'listening' && 'Listening… please speak your passphrase'}
            {demoState === 'success' && 'Verification complete — identity confirmed'}
          </span>
        </div>

        {/* REAL SUCCESSFUL ACCREDITAL REPORT (ANIMATED) */}
        <AnimatePresence>
          {demoState === 'success' && (
            <motion.div 
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="bg-[#E6FBF2] border-[1.5px] border-[#10C47A]/35 rounded-[12px] p-4.5 flex items-center gap-3.5 mb-5"
            >
              <div className="w-[46px] h-[46px] rounded-full bg-[#10C47A] flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5.5 h-5.5 text-white" />
              </div>
              <div>
                <div className="text-[15px] font-extrabold text-[#0A9A5E] font-heading">
                  ✓ Identity Verified
                </div>
                <div className="text-[#374168] text-[12.5px]">
                  Voice match confirmed · {confidence}% confidence · {authTime}s
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* EXECUTION TRIGGER BUTTON */}
        <button 
          onClick={triggerVerification}
          disabled={demoState === 'listening'}
          className={`w-full py-4 rounded-xl text-base font-bold text-white transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 font-heading select-none ${
            demoState === 'listening' 
              ? 'bg-[#2B2BB5]/70 cursor-not-allowed transform-none' 
              : 'bg-[#2B2BB5] hover:bg-[#1A1A7A] active:scale-[0.98] shadow-md hover:shadow-lg'
          }`}
        >
          {demoState === 'listening' ? (
            <>
              <RefreshCw className="w-4.5 h-4.5 animate-spin" />
              <span>Analyzing Biometrics…</span>
            </>
          ) : (
            <>
              <Mic className="w-4.5 h-4.5" />
              <span>{demoState === 'success' ? 'Verify Again' : 'Start Verification'}</span>
            </>
          )}
        </button>

        <p className="text-[11.5px] text-[#8A90B4] text-center mt-3 font-sans">
          No microphone data is captured. This is a simulated local demonstration.
        </p>
      </div>
    </div>
  );
}
