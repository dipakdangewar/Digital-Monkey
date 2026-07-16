import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

/**
 * High-fidelity vector SVG representation of the custom Digital Monkey logo.
 * Features:
 * - Playful charcoal monkey head with black-rimmed glasses and white snout
 * - Blue tech crest/hair on top with floating blue and orange digital pixel blocks
 * - Orange business growth chart arrow cutting up-right through the crest
 * - Clean SVG geometry that scales perfectly across headers, footers, and cards
 */
export function DigitalMonkeyIcon({ className = '', size = 32 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
    >
      {/* BACKGROUND / SHADOW GLOW */}
      <circle cx="100" cy="115" r="54" fill="currentColor" className="text-blue-500/5 dark:text-blue-400/5" />

      {/* LEFT STYLIZED BLUE EAR LOOP */}
      <path
        d="M 58 100 A 18 18 0 0 0 58 132"
        stroke="#2563eb"
        strokeWidth="11"
        strokeLinecap="round"
        fill="none"
      />

      {/* RIGHT STYLIZED CHARCOAL EAR LOOP */}
      <path
        d="M 142 100 A 18 18 0 0 1 142 132"
        stroke="#1e293b"
        strokeWidth="11"
        strokeLinecap="round"
        fill="none"
      />

      {/* CORE MONKEY HEAD (Charcoal grey / Slate-800) */}
      <circle cx="100" cy="115" r="46" fill="#1e293b" />

      {/* SNOUT / FACE MASK (White) */}
      <ellipse cx="100" cy="126" rx="26" ry="17" fill="#ffffff" />

      {/* CURVED SMILE (Inside snout) */}
      <path
        d="M 88 123 Q 100 135 112 123"
        stroke="#1e293b"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* GLASSES FRAMES (Thick Black-rimmed glasses) */}
      {/* Left Lens */}
      <rect
        x="66"
        y="93"
        width="28"
        height="22"
        rx="7"
        fill="#ffffff"
        stroke="#1e293b"
        strokeWidth="6.5"
        strokeLinejoin="round"
      />
      {/* Right Lens */}
      <rect
        x="106"
        y="93"
        width="28"
        height="22"
        rx="7"
        fill="#ffffff"
        stroke="#1e293b"
        strokeWidth="6.5"
        strokeLinejoin="round"
      />
      {/* Glasses Bridge */}
      <path
        d="M 94 103 L 106 103"
        stroke="#1e293b"
        strokeWidth="7"
        strokeLinecap="round"
      />
      {/* Temple Connectors (to ears) */}
      <path
        d="M 66 103 L 56 103"
        stroke="#1e293b"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M 134 103 L 144 103"
        stroke="#1e293b"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* PUPIL EYES (Black vertical pills inside white lenses) */}
      <rect x="78" y="100" width="4.5" height="8.5" rx="2" fill="#1e293b" />
      <rect x="117" y="100" width="4.5" height="8.5" rx="2" fill="#1e293b" />

      {/* BLUE DIGITAL HAIR CREST / SWOOSH */}
      <path
        d="M 64 85 C 62 60 88 40 132 38 C 114 55 116 75 96 85 C 81 92 70 90 64 85 Z"
        fill="#2563eb"
      />

      {/* ORANGE BUSINESS GROWTH CHART ARROW */}
      <path
        d="M 80 85 L 105 68 L 115 74 L 132 54"
        stroke="#f97316"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Sharp Arrowhead pointing up-right */}
      <polygon
        points="137,44 121,50 131,60"
        fill="#f97316"
      />

      {/* FLOATING DIGITAL PIXELS (Clusters on left) */}
      {/* Blue blocks */}
      <rect x="62" y="58" width="8" height="8" rx="1.5" fill="#2563eb" />
      <rect x="52" y="72" width="8" height="8" rx="1.5" fill="#2563eb" />
      <rect x="62" y="46" width="8" height="8" rx="1.5" fill="#2563eb" />
      {/* Orange blocks */}
      <rect x="38" y="72" width="8" height="8" rx="1.5" fill="#f97316" />
      <rect x="46" y="60" width="8" height="8" rx="1.5" fill="#f97316" />
    </svg>
  );
}

export function DigitalMonkeyLogoFull({ className = '', size = 44, isFooter = false }: { className?: string; size?: number; isFooter?: boolean }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div className="relative flex items-center justify-center shrink-0 p-1.5 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-750 shadow-sm">
        <DigitalMonkeyIcon size={size} />
        {/* Subtle accent light indicator */}
        <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-slate-900" />
      </div>
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center gap-1.5">
          <span className="text-lg sm:text-xl font-black tracking-tight text-blue-600 dark:text-blue-400 font-display">
            Digital
          </span>
          <span className="text-lg sm:text-xl font-black tracking-tight text-orange-500 dark:text-orange-400 font-display">
            Monkey
          </span>
        </div>
        {!isFooter ? (
          <span className="text-[9px] sm:text-[10.5px] font-black text-slate-500 dark:text-slate-300 uppercase tracking-widest font-mono mt-1">
            AI Marketing School
          </span>
        ) : (
          <span className="text-[9px] sm:text-[10.5px] font-bold text-slate-400 dark:text-slate-400 uppercase tracking-widest font-mono mt-1">
            Practical AI Training
          </span>
        )}
      </div>
    </div>
  );
}
