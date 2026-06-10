import React from 'react';
import { USE_CASES } from '../assets-data';
import { Landmark, Smartphone, PhoneCall, Building2 } from 'lucide-react';

const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Landmark,
  Smartphone,
  PhoneCall,
  Building2,
};

export default function UseCases() {
  return (
    <section className="bg-[#F7F8FF] py-[90px] px-[5%]">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-14 text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-[#2B2BB5] mb-3.5">
            Who We Serve
          </div>
          <h2 className="text-[27px] md:text-[38px] font-extrabold text-[#0F1240] leading-tight max-w-[700px] mx-auto">
            Built for every institution serving the next billion
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {USE_CASES.map((uc, index) => {
            const IconComp = IconMap[uc.icon];
            return (
              <div 
                key={index} 
                className="bg-white rounded-[14px] p-7 text-center border border-[#E2E4F0] hover:-translate-y-1 hover:border-[#2B2BB5] hover:shadow-md transition-all duration-300 flex flex-col items-center"
              >
                <div className="text-center mb-4 select-none">
                  {IconComp ? (
                    <IconComp className="w-9 h-9 text-[#10C47A]" />
                  ) : null}
                </div>
                <h3 className="text-[16px] font-bold text-[#0F1240] mb-2 font-heading">
                  {uc.title}
                </h3>
                <p className="text-[#374168] text-[13.5px] leading-relaxed">
                  {uc.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
