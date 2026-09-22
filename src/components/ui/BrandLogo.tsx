import React from "react";

interface BrandLogoProps {
  className?: string;
  size?: number;
}

/**
 * Mashaal Group Corporate SVG Brandmark
 * Represents the eternal guiding torch ("Mashaal" / مشعل) integrated with
 * architectural holding pillars forming the luxury 'M' monogram.
 */
export default function BrandLogo({ className = "w-10 h-10", size = 40 }: BrandLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-300 group-hover:scale-105 ${className}`}
      aria-label="Mashaal Group Emblem"
    >
      <defs>
        {/* Luxury Gold Gradients */}
        <linearGradient id="mashaalGoldLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2D6" />
          <stop offset="45%" stopColor="#DEBF7D" />
          <stop offset="100%" stopColor="#B38938" />
        </linearGradient>

        <linearGradient id="mashaalGoldDeep" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8C6622" />
          <stop offset="60%" stopColor="#C5A059" />
          <stop offset="100%" stopColor="#F5DC9E" />
        </linearGradient>

        {/* Rich Holding Burgundy Base */}
        <linearGradient id="mashaalOxblood" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#370C15" />
          <stop offset="50%" stopColor="#24060C" />
          <stop offset="100%" stopColor="#140206" />
        </linearGradient>

        {/* Ambient Glow */}
        <radialGradient id="mashaalGlow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#DEBF7D" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#C5A059" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Rounded Outer Container Badge */}
      <rect
        x="2"
        y="2"
        width="60"
        height="60"
        rx="14"
        fill="url(#mashaalOxblood)"
        stroke="url(#mashaalGoldDeep)"
        strokeWidth="1.5"
      />

      {/* Subtle Inner Accent Border */}
      <rect
        x="6"
        y="6"
        width="52"
        height="52"
        rx="10"
        fill="none"
        stroke="#FFFFFF"
        strokeOpacity="0.08"
        strokeWidth="1"
      />

      {/* Ambient Torch Glow */}
      <circle cx="32" cy="24" r="16" fill="url(#mashaalGlow)" />

      {/* Left Monogram Pillar (M - Wing Left) */}
      <path
        d="M16 46V22L24 33V46H16Z"
        fill="url(#mashaalGoldDeep)"
      />

      {/* Right Monogram Pillar (M - Wing Right) */}
      <path
        d="M48 46V22L40 33V46H48Z"
        fill="url(#mashaalGoldDeep)"
      />

      {/* Central Diamond Chevron (M - Apex Bridge) */}
      <path
        d="M24 33L32 44L40 33L32 22L24 33Z"
        fill="url(#mashaalGoldLight)"
      />

      {/* Torch Flame Summit Beacon ("Mashaal" Symbol of Guiding Light) */}
      <path
        d="M32 10C32 10 37 15 37 19.5C37 22.5 34.8 24.5 32 24.5C29.2 24.5 27 22.5 27 19.5C27 15 32 10 32 10Z"
        fill="url(#mashaalGoldLight)"
      />

      {/* Inner Flame Core Accent */}
      <path
        d="M32 15C32 15 34.5 18 34.5 20.2C34.5 21.8 33.4 22.8 32 22.8C30.6 22.8 29.5 21.8 29.5 20.2C29.5 18 32 15 32 15Z"
        fill="#FFFFFF"
        fillOpacity="0.85"
      />

      {/* Architectural Base Pedestal Line */}
      <rect
        x="18"
        y="49"
        width="28"
        height="2"
        rx="1"
        fill="url(#mashaalGoldLight)"
      />
    </svg>
  );
}
