export default function HowItWorks() {
  return (
    <section className="py-[90px] px-[5%]" id="how">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-14 text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-[#2B2BB5] mb-3.5">
            Simple Integration
          </div>
          <h2 className="text-[27px] md:text-[38px] font-extrabold text-[#0F1240] leading-tight mb-4">
            From API call to verified user in 3 steps
          </h2>
          <p className="text-[#374168] text-[16.5px] max-w-[600px] mx-auto leading-relaxed">
            Truevoice plugs into your existing system. Your team calls our API — we handle the biometrics, the liveness detection, and the fraud prevention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Decorative divider line for desktop */}
          <div className="hidden md:block absolute top-[36px] left-[16.6%] right-[16.6%] h-0.5 bg-gradient-to-r from-[#2B2BB5] to-[#10C47A] -z-10" />

          {/* STEP 1 */}
          <div className="text-center relative z-10 px-4">
            <div className="w-[72px] h-[72px] rounded-full mx-auto mb-[22px] bg-gradient-to-br from-[#2B2BB5] to-[#3535C8] flex items-center justify-center font-heading text-xl font-extrabold text-white shadow-lg shadow-[#2B2BB5]/25">
              1
            </div>
            <h3 className="text-[17px] font-bold text-[#0F1240] mb-2.5">
              Enroll the User
            </h3>
            <p className="text-[#374168] text-sm leading-relaxed">
              Call <code className="bg-[#ECEEFF] text-[#2B2BB5] px-1.5 py-0.5 rounded text-[13px] font-mono">/enroll-voice</code> to capture and securely store the user's voiceprint. Works via app, phone call, or offline workflow.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="text-center relative z-10 px-4">
            <div className="w-[72px] h-[72px] rounded-full mx-auto mb-[22px] bg-gradient-to-br from-[#2B2BB5] to-[#3535C8] flex items-center justify-center font-heading text-xl font-extrabold text-white shadow-lg shadow-[#2B2BB5]/25">
              2
            </div>
            <h3 className="text-[17px] font-bold text-[#0F1240] mb-2.5">
              Issue a Challenge
            </h3>
            <p className="text-[#374168] text-sm leading-relaxed">
              Call <code className="bg-[#ECEEFF] text-[#2B2BB5] px-1.5 py-0.5 rounded text-[13px] font-mono">/challenge</code> to generate a unique, session-specific passphrase. Dynamic challenges prevent replay attacks.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="text-center relative z-10 px-4">
            <div className="w-[72px] h-[72px] rounded-full mx-auto mb-[22px] bg-gradient-to-br from-[#2B2BB5] to-[#3535C8] flex items-center justify-center font-heading text-xl font-extrabold text-white shadow-lg shadow-[#2B2BB5]/25">
              3
            </div>
            <h3 className="text-[17px] font-bold text-[#0F1240] mb-2.5">
              Verify the Voice
            </h3>
            <p className="text-[#374168] text-sm leading-relaxed">
              Call <code className="bg-[#ECEEFF] text-[#2B2BB5] px-1.5 py-0.5 rounded text-[13px] font-mono">/secure-verify-voice</code> — Truevoice returns a match score, liveness result, and fraud signal in under 2 seconds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
