"use client";

// Illustration for the market-growth card in the opportunity highlights section.
import { useInViewOnce } from "./useInViewOnce";

const mainBar = {
  x: 92,
  y: 4,
  height: 96,
  opacity: "#2D9CDB",
  delay: "480ms",
} as const;

export function MarketGrowthCardVisual() {
  const { ref, hasEntered } = useInViewOnce<HTMLDivElement>();

  return (
    <div ref={ref} className="h-full w-full">
      <svg viewBox="0 0 120 110" fill="none" className="h-full w-full">
        {[20, 45, 70, 95].map((y) => (
          <line
            key={y}
            x1="6"
            y1={y}
            x2="114"
            y2={y}
            stroke="#2D9CDB30"
            strokeWidth="1.25"
            strokeDasharray="3 4"
          />
        ))}

        <rect
          x={mainBar.x}
          y={mainBar.y}
          width="16"
          height={mainBar.height}
          rx="4"
          fill={mainBar.opacity}
          className="origin-bottom transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            transformBox: "fill-box",
            transformOrigin: "center bottom",
            transform: hasEntered ? "scaleY(1)" : "scaleY(0)",
            transitionDelay: mainBar.delay,
          }}
        />

        <polyline
          points="20,72 40,58 60,42 80,24 100,4"
          stroke="#2D9CDB"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          pathLength="1"
          className="transition-[stroke-dashoffset,opacity] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            strokeDasharray: 1,
            strokeDashoffset: hasEntered ? 0 : 1,
            opacity: hasEntered ? 1 : 0.25,
            transitionDelay: "620ms",
          }}
        />

        <circle
          cx="100"
          cy="4"
          r="4"
          fill="#2D9CDB"
          className="transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            transformOrigin: "50% 50%",
            transformBox: "fill-box",
            transform: hasEntered ? "scale(1)" : "scale(0.25)",
            opacity: hasEntered ? 1 : 0,
            transitionDelay: "980ms",
          }}
        />

        <line x1="6" y1="100" x2="114" y2="100" stroke="#2D9CDB42" strokeWidth="1.7" />
      </svg>
    </div>
  );
}
