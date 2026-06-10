interface Stat {
  num: string;
  plus?: string;
  lbl: string;
}

const STATS: Stat[] = [
  { num: "99.8%", lbl: "Guaranteed Uptime" },
  { num: "30", plus: "+", lbl: "Supported Languages" },
  { num: "<2s", lbl: "Verification Time" },
  { num: "6", plus: "+", lbl: "Auth Channels" },
];

export default function StatsBar() {
  return (
    <div className="bg-[#1A1A7A] py-[28px] px-[5%]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
        <div className="text-center">
          <div className="font-heading text-[30px] md:text-[34px] font-extrabold text-white">
            99.8<span className="text-[#10C47A]">%</span>
          </div>
          <div className="text-white/55 text-[13px] mt-1.5 font-sans">
            Guaranteed Uptime
          </div>
        </div>
        
        <div className="text-center">
          <div className="font-heading text-[30px] md:text-[34px] font-extrabold text-white">
            30<span className="text-[#10C47A]">+</span>
          </div>
          <div className="text-white/55 text-[13px] mt-1.5 font-sans">
            Supported Languages
          </div>
        </div>

        <div className="text-center">
          <div className="font-heading text-[30px] md:text-[34px] font-extrabold text-white">
            &lt;2<span className="text-[#10C47A]">s</span>
          </div>
          <div className="text-white/55 text-[13px] mt-1.5 font-sans">
            Verification Time
          </div>
        </div>

        <div className="text-center">
          <div className="font-heading text-[30px] md:text-[34px] font-extrabold text-white">
            6<span className="text-[#10C47A]">+</span>
          </div>
          <div className="text-white/55 text-[13px] mt-1.5 font-sans">
            Auth Channels
          </div>
        </div>
      </div>
    </div>
  );
}
