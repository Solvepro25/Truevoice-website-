import React from 'react';

interface TruevoiceLogoProps {
  lightBackground?: boolean;
  className?: string;
  height?: number | string;
}

export default function TruevoiceLogo({ lightBackground = true, className = '', height = '100%' }: TruevoiceLogoProps) {
  // Brand colors from the uploaded logo:
  // - Dark blue circle/text fill for light background: #232B8E
  // - White for text on dark background
  // - Rich green/teal for "v" and "oice": #1CB279
  const textTrueColor = lightBackground ? '#232B8E' : '#FFFFFF';
  const brandGreen = '#1CB279';

  return (
    <svg 
      viewBox="0 0 370 110" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ height, width: 'auto' }}
    >
      {/* 1. BRAND ICON (CIRCLE WITH VOICE/BIOMETRICS) */}
      {/* Circle base */}
      <circle cx="55" cy="55" r="48" fill="#232B8E" />
      
      {/* Fingerprint / concentric waves (subtle transparency inside circle) */}
      <path d="M 19,55 A 36,36 0 0 1 91,55" stroke="rgba(255,255,255,0.07)" strokeWidth="3" fill="none" />
      <path d="M 27,55 A 28,28 0 0 0 83,55" stroke="rgba(255,255,255,0.07)" strokeWidth="3" fill="none" />
      <path d="M 35,55 A 20,20 0 0 1 75,55" stroke="rgba(255,255,255,0.07)" strokeWidth="3" fill="none" />
      
      {/* Three vertical capsules (white) */}
      {/* Left capsule */}
      <rect x="29" y="38" width="12" height="34" rx="6" fill="#FFFFFF" />
      {/* Center capsule (taller) */}
      <rect x="49" y="23" width="12" height="64" rx="6" fill="#FFFFFF" />
      {/* Right capsule */}
      <rect x="69" y="38" width="12" height="34" rx="6" fill="#FFFFFF" />

      {/* 2. WORDMARK TEXT */}
      {/* "True" */}
      <text 
        x="115" 
        y="75" 
        fill={textTrueColor} 
        fontSize="54" 
        fontWeight="800" 
        fontFamily='"Inter", system-ui, -apple-system, sans-serif'
        letterSpacing="-2px"
      >
        True
      </text>

      {/* Stylized greek/cursive "v" (Teal/Green) */}
      <path 
        d="M 228,80 C 230,60 242,38 248,38 C 254,38 252,48 245,62 C 237,78 230,103 230,103 C 229,105 234,105 240,97 C 248,86 260,40 260,40" 
        fill="none" 
        stroke={brandGreen} 
        strokeWidth="6.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* "oice" (Teal/Green) */}
      <text 
        x="265" 
        y="75" 
        fill={brandGreen} 
        fontSize="54" 
        fontWeight="700" 
        fontFamily='"Inter", system-ui, -apple-system, sans-serif'
        letterSpacing="-3px"
      >
        oice
      </text>
    </svg>
  );
}
