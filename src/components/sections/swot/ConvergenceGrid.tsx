"use client";

// Four-card convergence block that explains why the current market timing is compelling.
import { useInViewOnce } from "@/components/sections/opportunity/useInViewOnce";
import { convergenceItems } from "@/content/home/swot/SwotContent";

const convergenceCardStyleMap = {
  green: {
    background:
      "linear-gradient(135deg, rgba(39, 174, 96, 0.03), rgba(39, 174, 96, 0.016))",
    border: "1.5px solid rgba(39, 174, 96, 0.125)",
  },
  blue: {
    background:
      "linear-gradient(135deg, rgba(45, 156, 219, 0.03), rgba(45, 156, 219, 0.016))",
    border: "1.5px solid rgba(45, 156, 219, 0.125)",
  },
  pink: {
    background:
      "linear-gradient(135deg, rgba(236, 72, 153, 0.03), rgba(236, 72, 153, 0.016))",
    border: "1.5px solid rgba(236, 72, 153, 0.125)",
  },
  orange: {
    background:
      "linear-gradient(135deg, rgba(245, 158, 11, 0.03), rgba(245, 158, 11, 0.016))",
    border: "1.5px solid rgba(245, 158, 11, 0.125)",
  },
} as const;

function FirstCardVisual({ hasEntered }: { hasEntered: boolean }) {
  return (
    <svg viewBox="0 0 120 110" fill="none" className="h-full w-full">
      {[20, 45, 70, 95].map((y) => (
        <line
          key={y}
          x1="6"
          y1={y}
          x2="114"
          y2={y}
          stroke="#27AE6012"
          strokeWidth="1"
          strokeDasharray="3 4"
        />
      ))}

      <rect
        x="92"
        y="4"
        width="16"
        height="96"
        rx="4"
        fill="#27AE60"
        className="origin-bottom transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          transformBox: "fill-box",
          transformOrigin: "center bottom",
          transform: hasEntered ? "scaleY(1)" : "scaleY(0)",
          transitionDelay: "520ms",
        }}
      />

      <rect
        x="90.5"
        y="2"
        width="19"
        height="8"
        rx="4"
        fill="#27AE60"
        className="transition-opacity duration-300"
        style={{ opacity: hasEntered ? 1 : 0, transitionDelay: "980ms" }}
      />

      <polyline
        points="20,72 40,58 60,42 80,24 100,4"
        stroke="#27AE60"
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
        fill="#27AE60"
        className="transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          transformOrigin: "50% 50%",
          transformBox: "fill-box",
          transform: hasEntered ? "scale(1)" : "scale(0.25)",
          opacity: hasEntered ? 1 : 0,
          transitionDelay: "980ms",
        }}
      />

      <line x1="6" y1="100" x2="114" y2="100" stroke="#27AE6020" strokeWidth="1.5" />
    </svg>
  );
}

function SecondCardVisual() {
  return (
    <svg viewBox="0 0 120 130" fill="none" className="h-full w-full">
      <rect
        x="44"
        y="4"
        width="32"
        height="16"
        rx="5"
        fill="#2D9CDB18"
        stroke="#2D9CDB35"
        strokeWidth="1.5"
      />
      <rect
        x="44"
        y="110"
        width="32"
        height="16"
        rx="5"
        fill="#2D9CDB18"
        stroke="#2D9CDB35"
        strokeWidth="1.5"
      />
      <rect
        x="22"
        y="19"
        width="76"
        height="72"
        rx="22"
        fill="white"
        stroke="#2D9CDB25"
        strokeWidth="1.5"
      />
      <rect x="22" y="19" width="76" height="72" rx="22" fill="#2D9CDB05" />
      <rect x="30" y="27" width="60" height="56" rx="16" fill="#2D9CDB08" />

      <polyline
        points="32,55 40,55 45,38 52,72 59,48 65,55 73,55 79,42 86,55 92,55"
        stroke="#2D9CDB"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
        opacity="0.95"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="1;0;0;0;1"
          dur="5.8s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;1;1;0;0"
          dur="5.8s"
          repeatCount="indefinite"
        />
      </polyline>

      <circle cx="92" cy="55" r="3.5" fill="#2D9CDB" opacity="0">
        <animate
          attributeName="r"
          values="0;0;4.2;5.2;2.2;0"
          keyTimes="0;0.56;0.68;0.8;0.92;1"
          dur="5.8s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;0;0.95;0.55;0;0"
          keyTimes="0;0.56;0.68;0.8;0.92;1"
          dur="5.8s"
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="60"
        cy="55"
        r="18"
        stroke="#2D9CDB"
        strokeWidth="1"
        fill="none"
        opacity="0.18"
      >
        <animateTransform
          attributeName="transform"
          type="scale"
          values="0.94 0.94;1.06 1.06;1.18 1.18"
          keyTimes="0;0.62;1"
          dur="5.8s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.16;0.08;0"
          dur="5.8s"
          repeatCount="indefinite"
        />
      </circle>

      <circle cx="60" cy="55" r="36" stroke="#2D9CDB" strokeWidth="1" fill="none" opacity="0">
        <animateTransform
          attributeName="transform"
          type="scale"
          values="0.82 0.82;1.1 1.1;1.22 1.22"
          keyTimes="0;0.55;1"
          dur="5.8s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;0.07;0"
          dur="5.8s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

function ThirdCardVisual() {
  const nodes = [
    { x: 16, y: 24, delay: "0s" },
    { x: 16, y: 55, delay: "0.24s" },
    { x: 16, y: 86, delay: "0.48s" },
    { x: 60, y: 14, delay: "0.72s" },
    { x: 60, y: 55, delay: "0.96s" },
    { x: 60, y: 96, delay: "1.2s" },
    { x: 104, y: 36, delay: "1.44s" },
    { x: 104, y: 74, delay: "1.68s" },
  ] as const;

  const lines = [
    [16, 24, 60, 14],
    [16, 24, 60, 55],
    [16, 24, 60, 96],
    [16, 55, 60, 14],
    [16, 55, 60, 55],
    [16, 55, 60, 96],
    [16, 86, 60, 14],
    [16, 86, 60, 55],
    [16, 86, 60, 96],
    [60, 14, 104, 36],
    [60, 14, 104, 74],
    [60, 55, 104, 36],
    [60, 55, 104, 74],
    [60, 96, 104, 36],
    [60, 96, 104, 74],
  ] as const;

  return (
    <svg viewBox="0 0 120 110" fill="none" className="h-full w-full">
      {lines.map(([x1, y1, x2, y2], index) => (
        <line
          key={`${x1}-${y1}-${x2}-${y2}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#EC489928"
          strokeWidth="1"
        >
          <animate
            attributeName="opacity"
            values="0.18;0.55;0.18"
            dur="2.8s"
            begin={`${index * 0.08}s`}
            repeatCount="indefinite"
          />
        </line>
      ))}

      {nodes.map((node) => (
        <circle
          key={`${node.x}-${node.y}`}
          cx={node.x}
          cy={node.y}
          r="7"
          fill="#EC489914"
          stroke="#EC489955"
          strokeWidth="1.5"
        >
          <animate attributeName="r" values="7;8.2;7" dur="3.1s" begin={node.delay} repeatCount="indefinite" />
          <animate
            attributeName="opacity"
            values="0.64;1;0.64"
            dur="3.1s"
            begin={node.delay}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      <circle cx="60" cy="55" r="7" fill="#EC4899">
        <animate
          attributeName="opacity"
          values="0.35;0.95;0.35"
          dur="2.5s"
          repeatCount="indefinite"
        />
        <animate attributeName="r" values="7;9.2;7" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function FourthCardVisual() {
  return (
    <svg viewBox="0 0 120 110" fill="none" className="h-full w-full">
      {[24, 55, 86].map((y, index) => (
        <g key={`left-${y}`}>
          <line
            x1="26"
            y1={y}
            x2="50"
            y2="55"
            stroke="#F59E0B35"
            strokeWidth="1"
            strokeDasharray="4 3"
            opacity={index === 1 ? "0.28" : "0.34"}
          />
          <circle cx="18" cy={y} r="8" fill="#F59E0B18" stroke="#F59E0B50" strokeWidth="1.5">
            <animate
              attributeName="opacity"
              values="0.45;0.95;0.45"
              dur={`${4.2 + index * 0.45}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values="7.4;8.8;7.4"
              dur={`${4.2 + index * 0.45}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}

      <circle
        cx="60"
        cy="55"
        r="24"
        fill="rgba(0,0,0,0.03)"
        stroke="#F59E0B99"
        strokeWidth="1.9"
        strokeDasharray="6 4"
      >
        <animate attributeName="opacity" values="0.68;0.98;0.68" dur="4.8s" repeatCount="indefinite" />
        <animate attributeName="r" values="22;25.5;22" dur="4.8s" repeatCount="indefinite" />
      </circle>

      <text
        x="60"
        y="62"
        textAnchor="middle"
        fill="#F59E0B70"
        style={{ fontSize: 22, fontWeight: 800, fontFamily: "Inter, sans-serif" }}
      >
        ?
        <animate attributeName="opacity" values="0.38;0.72;0.38" dur="4.8s" repeatCount="indefinite" />
      </text>

      {[24, 55, 86].map((y, index) => (
        <g key={`right-${y}`}>
          <line
            x1="70"
            y1="55"
            x2="94"
            y2={y}
            stroke="#F59E0B15"
            strokeWidth="1"
            strokeDasharray="4 3"
            opacity={index === 1 ? "0.3" : "0.24"}
          />
          <circle
            cx="102"
            cy={y}
            r="8"
            fill="rgba(0,0,0,0.03)"
            stroke="rgba(0,0,0,0.1)"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          >
            <animate
              attributeName="opacity"
              values={`${0.12 + index * 0.03};${0.28 + index * 0.06};${0.12 + index * 0.03}`}
              dur={`${4.6 + index * 0.35}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values="6.8;8.8;6.8"
              dur={`${4.6 + index * 0.35}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}
    </svg>
  );
}

function ConvergenceVisual({
  index,
  hasEntered,
}: {
  index: number;
  hasEntered: boolean;
}) {
  if (index === 0) {
    return <FirstCardVisual hasEntered={hasEntered} />;
  }

  if (index === 1) {
    return <SecondCardVisual />;
  }

  if (index === 2) {
    return <ThirdCardVisual />;
  }

  return <FourthCardVisual />;
}

export function ConvergenceGrid() {
  const { ref, hasEntered } = useInViewOnce<HTMLDivElement>();

  return (
    <div ref={ref} className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
      {convergenceItems.map((item, index) => {
        const cardStyle =
          convergenceCardStyleMap[item.accent as keyof typeof convergenceCardStyleMap] ?? {
            background: "white",
            border: "1.5px solid rgba(0, 0, 0, 0.06)",
          };

        return (
          <div
            key={item.label}
            className={`flex min-h-[16.25rem] flex-col items-center rounded-[2rem] p-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] ${
              hasEntered
                ? "animate-[convergence-card-enter_760ms_cubic-bezier(0.22,1,0.36,1)_both]"
                : "opacity-0"
            }`}
            style={{
              animationDelay: `${index * 120}ms`,
              ...cardStyle,
            }}
          >
            <div className="mb-4 flex h-20 w-full justify-center">
              <ConvergenceVisual index={index} hasEntered={hasEntered} />
            </div>
            <div className="mb-1 text-[1.8rem] font-bold text-[#2D2D2D]">
              {item.value}
            </div>
            <div className="text-xs font-medium text-[#9CA3AF]">
              {item.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
