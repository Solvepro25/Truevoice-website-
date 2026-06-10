import { PRICING_PLANS } from '../assets-data';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section className="py-[90px] px-[5%]" id="pricing">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-14 text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-[#2B2BB5] mb-3.5">
            Pricing
          </div>
          <h2 className="text-[27px] md:text-[38px] font-extrabold text-[#0F1240] leading-tight mb-4 animate-fade-in">
            Start small. Scale with confidence.
          </h2>
          <p className="text-[#374168] text-[16.5px] max-w-[600px] mx-auto leading-relaxed">
            Usage-based pricing built for emerging markets. Pilot with no upfront commitment, then grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch max-w-[1100px] mx-auto">
          {PRICING_PLANS.map((plan, idx) => (
            <div 
              key={idx} 
              className={`rounded-[18px] p-9 border border-[#E2E4F0] flex flex-col transition-all duration-300 relative ${
                plan.featured 
                  ? 'bg-[#2B2BB5] text-white border-[#2B2BB5] shadow-lg xl:-translate-y-2' 
                  : 'bg-white text-[#0F1240] hover:-translate-y-1 hover:shadow-md'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#10C47A] text-white text-[11px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-sm">
                  Most Popular
                </div>
              )}

              <h3 className="text-lg font-extrabold mb-1.5 font-heading">
                {plan.title}
              </h3>
              <p className={`text-sm mb-7 ${plan.featured ? 'text-white/65' : 'text-[#374168]'}`}>
                {plan.desc}
              </p>

              <div className="mb-7 flex items-baseline select-none">
                <span className={`text-[36px] font-extrabold font-heading ${plan.featured ? 'text-white' : 'text-[#0F1240]'}`}>
                  {plan.price}
                </span>
                {plan.unit && (
                  <span className={`text-[13.5px] ml-1 ${plan.featured ? 'text-white/55' : 'text-[#8A90B4]'}`}>
                    {plan.unit}
                  </span>
                )}
              </div>

              {/* FEATURES LIST CHECK */}
              <ul className="flex-1 mb-8 space-y-4">
                {plan.features.map((feat, fIdx) => (
                  <li 
                    key={fIdx} 
                    className={`flex items-start gap-2.5 pb-3.5 text-[14px] border-b ${
                      plan.featured 
                        ? 'border-white/10 text-white/75' 
                        : 'border-[#E2E4F0] text-[#374168]'
                    }`}
                  >
                    <Check className="w-4 h-4 text-[#10C47A] flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className={`py-[13px] rounded-lg text-sm font-bold font-heading text-center block border transition-all duration-200 ${
                  plan.featured 
                    ? 'bg-white text-[#2B2BB5] border-white hover:bg-white/90' 
                    : 'text-[#2B2BB5] border-[#2B2BB5] hover:bg-[#ECEEFF]'
                }`}
              >
                {plan.featured ? 'Contact Sales' : 'Get Started'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
