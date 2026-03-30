"use client";

// SWOT section that frames Afia's strengths, risks, and broader strategic landscape.
import { LineIcon } from "@/components/common/icons/LineIcons";
import { pageContainerClass } from "@/components/common/layout/PageContainer";
import { SectionHeading } from "@/components/common/ui/SectionHeading";
import { useInViewOnce } from "@/components/sections/opportunity/useInViewOnce";
import { ConvergenceGrid } from "@/components/sections/swot/ConvergenceGrid";

type SwotCard = {
  letter: string;
  title: string;
  accent: string;
  softBackground: string;
  borderColor: string;
  topLineColor: string;
  bullets: string[];
  visual: "strength" | "weakness" | "opportunity" | "threat";
};

const swotCards: SwotCard[] = [
  {
    letter: "S",
    title: "Strengths",
    accent: "#27AE60",
    softBackground: "rgba(39, 174, 96, 0.05)",
    borderColor: "rgba(39, 174, 96, 0.2)",
    topLineColor: "rgba(39, 174, 96, 0.5)",
    bullets: [
      "First-mover AI advantage",
      "20+ device integrations",
      "Multi-stream revenue model",
    ],
    visual: "strength",
  },
  {
    letter: "W",
    title: "Weaknesses",
    accent: "#F59E0B",
    softBackground: "rgba(245, 158, 11, 0.05)",
    borderColor: "rgba(245, 158, 11, 0.2)",
    topLineColor: "rgba(245, 158, 11, 0.5)",
    bullets: [
      "Pre-revenue stage",
      "Third-party API dependency",
      "New category â€” market education",
    ],
    visual: "weakness",
  },
  {
    letter: "O",
    title: "Opportunities",
    accent: "#2D9CDB",
    softBackground: "rgba(45, 156, 219, 0.05)",
    borderColor: "rgba(45, 156, 219, 0.2)",
    topLineColor: "rgba(45, 156, 219, 0.5)",
    bullets: [
      "$100B+ market Â· 14.9% CAGR",
      "MENA under-served by AI health",
      "Enterprise & insurance expansion",
    ],
    visual: "opportunity",
  },
  {
    letter: "T",
    title: "Threats",
    accent: "#EC4899",
    softBackground: "rgba(236, 72, 153, 0.05)",
    borderColor: "rgba(236, 72, 153, 0.2)",
    topLineColor: "rgba(236, 72, 153, 0.5)",
    bullets: [
      "Big Tech entering AI health",
      "Evolving data privacy laws",
      "Consumer AI adoption pace",
    ],
    visual: "threat",
  },
];

function StrengthVisual({ hasEntered }: { hasEntered: boolean }) {
  return (
    <svg viewBox="0 0 120 110" fill="none" className="h-full w-full">
      <circle cx="60" cy="38" r="28" fill="#27AE6010">
        <animateTransform
          attributeName="transform"
          type="scale"
          values="0.96 0.96;1.02 1.02;0.96 0.96"
          dur="3.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.45;0.75;0.45"
          dur="3.6s"
          repeatCount="indefinite"
        />
      </circle>

      <line
        x1="60"
        y1="82"
        x2="60"
        y2="22"
        stroke="#27AE60"
        strokeWidth="3.5"
        strokeLinecap="round"
        pathLength="1"
        style={{
          strokeDasharray: 1,
          strokeDashoffset: hasEntered ? 0 : 1,
          transition: "stroke-dashoffset 720ms cubic-bezier(0.22,1,0.36,1) 180ms",
        }}
      />
      <path
        d="M46,34 L60,16 L74,34"
        stroke="#27AE60"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        pathLength="1"
        style={{
          strokeDasharray: 1,
          strokeDashoffset: hasEntered ? 0 : 1,
          transition: "stroke-dashoffset 620ms cubic-bezier(0.22,1,0.36,1) 480ms",
        }}
      />

      {[
        { x: 28, y: 22, delay: "0s" },
        { x: 92, y: 28, delay: "0.25s" },
        { x: 18, y: 52, delay: "0.5s" },
        { x: 102, y: 55, delay: "0.75s" },
        { x: 40, y: 10, delay: "1s" },
        { x: 82, y: 12, delay: "1.25s" },
      ].map((dot) => (
        <circle key={`${dot.x}-${dot.y}`} cx={dot.x} cy={dot.y} r="2.5" fill="#27AE60">
          <animate
            attributeName="opacity"
            values="0.2;1;0.2"
            dur="2.8s"
            begin={dot.delay}
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values="1.5;2.7;1.5"
            dur="2.8s"
            begin={dot.delay}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      <rect x="34" y="82" width="52" height="7" rx="3.5" fill="#27AE6018" />
    </svg>
  );
}

function WeaknessVisual() {
  return (
    <svg viewBox="0 0 120 110" fill="none" className="h-full w-full">
      <rect
        x="36"
        y="12"
        width="32"
        height="18"
        rx="5"
        fill="transparent"
        stroke="#F59E0B38"
        strokeWidth="1.5"
        strokeDasharray="5 3"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 8;0 0;0 8"
          dur="3.8s"
          repeatCount="indefinite"
        />
      </rect>
      <line
        x1="52"
        y1="32"
        x2="52"
        y2="48"
        stroke="#F59E0B38"
        strokeWidth="1.5"
        strokeDasharray="3 3"
        strokeLinecap="round"
      >
        <animate
          attributeName="opacity"
          values="0.15;0.5;0.15"
          dur="2.8s"
          repeatCount="indefinite"
        />
      </line>
    </svg>
  );
}

function OpportunityVisual() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="h-full w-full">
      <ellipse cx="60" cy="80" rx="44" ry="18" stroke="#2D9CDB18" strokeWidth="1" strokeDasharray="5 4">
        <animateTransform
          attributeName="transform"
          type="scale"
          values="1 1;1.04 1.08;1 1"
          dur="3.6s"
          repeatCount="indefinite"
        />
      </ellipse>

      <path d="M55,96 Q51,106 46,116" stroke="#2D9CDB28" strokeWidth="4.5" strokeLinecap="round">
        <animate attributeName="opacity" values="0.2;0.72;0.2" dur="2.7s" repeatCount="indefinite" />
      </path>
      <path d="M65,96 Q69,106 74,116" stroke="#2D9CDB18" strokeWidth="3" strokeLinecap="round">
        <animate attributeName="opacity" values="0.12;0.5;0.12" dur="2.7s" repeatCount="indefinite" />
      </path>

      <g>
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0;0 -4;0 0"
          dur="3s"
          repeatCount="indefinite"
        />
        <path
          d="M60,18 Q70,28 70,60 L60,70 L50,60 Q50,28 60,18 Z"
          fill="#2D9CDB22"
          stroke="#2D9CDB55"
          strokeWidth="1.5"
        />
        <path d="M53,20 Q60,8 67,20" fill="#2D9CDB" />
        <circle cx="60" cy="42" r="7" fill="white" stroke="#2D9CDB45" strokeWidth="1.5" />
        <circle cx="60" cy="42" r="4" fill="#2D9CDB28" />
        <path d="M50,62 L42,72 L50,69 Z" fill="#2D9CDB28" />
        <path d="M70,62 L78,72 L70,69 Z" fill="#2D9CDB28" />
      </g>

      {[
        { x: 22, y: 14, delay: "0s" },
        { x: 96, y: 20, delay: "0.3s" },
        { x: 14, y: 42, delay: "0.6s" },
        { x: 108, y: 48, delay: "0.9s" },
        { x: 30, y: 8, delay: "1.2s" },
      ].map((dot) => (
        <circle key={`${dot.x}-${dot.y}`} cx={dot.x} cy={dot.y} r="2" fill="#2D9CDB">
          <animate
            attributeName="opacity"
            values="0.15;1;0.15"
            dur="2.8s"
            begin={dot.delay}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  );
}

function ThreatVisual() {
  return (
    <svg viewBox="0 0 120 110" fill="none" className="h-full w-full">
      <path
        d="M24,56 Q18,34 38,30 Q40,18 56,18 Q72,18 74,30 Q90,26 92,44 Q102,46 100,56 Q98,66 86,65 L36,65 Q20,64 24,56 Z"
        fill="#EC489910"
        stroke="#EC489932"
        strokeWidth="1.5"
      >
        <animateTransform
          attributeName="transform"
          type="scale"
          values="1 1;1.02 1.02;1 1"
          dur="3.4s"
          repeatCount="indefinite"
        />
      </path>

      <path
        d="M65,65 L51,86 L62,86 L49,108"
        stroke="#EC489930"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <animate attributeName="opacity" values="0;0.7;0" dur="2.1s" repeatCount="indefinite" />
      </path>
      <path
        d="M65,65 L51,86 L62,86 L49,108"
        stroke="#EC4899"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        pathLength="1"
        strokeDasharray="1"
      >
        <animate attributeName="stroke-dashoffset" values="1;0;0;1" dur="2.1s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;1;0" dur="2.1s" repeatCount="indefinite" />
      </path>

      {[
        { x1: 28, y1: 76, x2: 25, y2: 85, delay: "0s" },
        { x1: 40, y1: 84, x2: 37, y2: 93, delay: "0.2s" },
        { x1: 80, y1: 78, x2: 77, y2: 87, delay: "0.4s" },
        { x1: 92, y1: 88, x2: 89, y2: 97, delay: "0.6s" },
        { x1: 55, y1: 80, x2: 52, y2: 89, delay: "0.8s" },
      ].map((rain) => (
        <line
          key={`${rain.x1}-${rain.y1}`}
          x1={rain.x1}
          y1={rain.y1}
          x2={rain.x2}
          y2={rain.y2}
          stroke="#EC489940"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0;0 3;0 0"
            dur="1.9s"
            begin={rain.delay}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.12;0.7;0.12"
            dur="1.9s"
            begin={rain.delay}
            repeatCount="indefinite"
          />
        </line>
      ))}
    </svg>
  );
}

function SwotVisual({
  visual,
  hasEntered,
}: {
  visual: SwotCard["visual"];
  hasEntered: boolean;
}) {
  if (visual === "strength") {
    return <StrengthVisual hasEntered={hasEntered} />;
  }

  if (visual === "weakness") {
    return <WeaknessVisual />;
  }

  if (visual === "opportunity") {
    return <OpportunityVisual />;
  }

  return <ThreatVisual />;
}

export function SwotSection() {
  const { ref, hasEntered } = useInViewOnce<HTMLDivElement>();

  return (
    <section id="swot" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div
        className="pointer-events-none absolute rounded-full blur-[60px]"
        style={{
          width: 320,
          height: 320,
          left: "80%",
          top: "5%",
          background: "#27AE60",
          opacity: 0.14,
        }}
      />
      <div
        className="pointer-events-none absolute rounded-full blur-[60px]"
        style={{
          width: 260,
          height: 260,
          left: "-5%",
          top: "70%",
          background: "#2D9CDB",
          opacity: 0.12,
        }}
      />

      <div className={pageContainerClass}>
        <SectionHeading
          badge="Why Now"
          title="The AI Convergence Moment"
        />
        <ConvergenceGrid />

        <div className="mt-24">
        <SectionHeading
          badge="SWOT Analysis"
          title="A Transparent Business Landscape"
        />
        </div>

        <div ref={ref} className="mt-14 grid gap-6 md:grid-cols-2">
          {swotCards.map((card, index) => (
            <article
              key={card.title}
              className={`relative overflow-hidden rounded-[2rem] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] ${
                hasEntered
                  ? "animate-[convergence-card-enter_760ms_cubic-bezier(0.22,1,0.36,1)_both]"
                  : "opacity-0"
              }`}
              style={{
                background: card.softBackground,
                border: `1.5px solid ${card.borderColor}`,
                animationDelay: `${index * 120}ms`,
              }}
            >
              <div
                className="absolute left-8 right-8 top-0 h-[2px] rounded-b-full"
                style={{ background: card.topLineColor }}
              />

              <div className="flex h-full flex-col">
                <div className="mb-5 flex items-baseline gap-2">
                  <span
                    className="text-[2rem] font-black tracking-[-0.03em]"
                    style={{ color: card.accent }}
                  >
                    {card.letter}
                  </span>
                  <span className="text-[1.25rem] font-semibold leading-none text-[#2D2D2D]">
                    {card.title}
                  </span>
                </div>

                <div className="mb-6 h-36 w-full">
                  <SwotVisual visual={card.visual} hasEntered={hasEntered} />
                </div>

                <div className="mt-auto flex flex-col gap-2">
                  {card.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-2.5">
                      <div
                        className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                        style={{ background: card.accent }}
                      />
                      <span className="text-xs font-medium text-[#4B5563] md:text-[0.95rem]">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          className={`mt-10 flex items-center gap-4 rounded-2xl p-5 ${
            hasEntered
              ? "animate-[convergence-card-enter_760ms_cubic-bezier(0.22,1,0.36,1)_both]"
              : "opacity-0"
          }`}
          style={{
            background:
              "linear-gradient(135deg, rgba(39, 174, 96, 0.05), rgba(45, 156, 219, 0.05))",
            border: "1.5px solid rgba(39, 174, 96, 0.15)",
            animationDelay: "520ms",
          }}
        >
          <div
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
            style={{
              background: "linear-gradient(135deg, rgb(39, 174, 96), rgb(45, 156, 219))",
            }}
          >
            <LineIcon name="sparkles" className="size-5 text-white" />
          </div>
          <p className="text-xs leading-relaxed text-[#6B7280] md:text-[0.95rem]">
            <span className="font-semibold text-[#27AE60]">Investor takeaway â€” </span>
            Strengths and opportunities significantly outweigh execution-stage risks.
            Threats are manageable with strategic capital deployment.
          </p>
        </div>
      </div>
    </section>
  );
}
