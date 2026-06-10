import React from 'react';
import { FEATURES } from '../assets-data';
import { Mic, CheckCircle2, ShieldAlert, PhoneCall, Globe, WifiOff } from 'lucide-react';

const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Mic,
  CheckCircle2,
  ShieldAlert,
  PhoneCall,
  Globe,
  WifiOff,
};

export default function Features() {
  return (
    <section className="bg-[#F7F8FF] py-[90px] px-[5%]" id="features">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-14 text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-[#2B2BB5] mb-3.5">
            Platform Capabilities
          </div>
          <h2 className="text-[27px] md:text-[38px] font-extrabold text-[#0F1240] leading-tight mb-4">
            Everything you need to verify users by voice
          </h2>
          <p className="text-[#374168] text-[16.5px] max-w-[600px] mx-auto leading-relaxed">
            One platform. Every channel. Built for the infrastructure realities of Africa and Asia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feat, idx) => {
            const IconComp = IconMap[feat.icon];
            return (
              <div 
                key={idx} 
                className="bg-white rounded-[14px] p-[30px] border border-[#E2E4F0] relative overflow-hidden group hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                {/* Highlight accent on top */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2B2BB5] to-[#10C47A] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                
                <div className="w-[50px] h-[50px] rounded-xl bg-[#ECEEFF] flex items-center justify-center mb-[18px]">
                  {IconComp ? (
                    <IconComp className="w-6 h-6 text-[#2B2BB5] group-hover:scale-110 transition-transform duration-200" />
                  ) : null}
                </div>
                <h3 className="text-[17px] font-bold text-[#0F1240] mb-2.5">
                  {feat.title}
                </h3>
                <p className="text-[#374168] text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
