import { LANGUAGES } from '../assets-data';

export default function LanguagesMarquee() {
  return (
    <div className="bg-[#ECEEFF] py-3.5 overflow-hidden border-t border-b border-[#E2E4F0] select-none">
      <div className="marquee-track">
        {/* Render twice for a seamless infinite loop */}
        {[...LANGUAGES, ...LANGUAGES].map((lang, index) => (
          <div key={index} className="flex items-center gap-1.5 text-[#2B2BB5] font-semibold text-[13.5px] whitespace-nowrap">
            <span className="text-[18px]">{lang.flag}</span>
            <span>{lang.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
