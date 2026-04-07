"use client";

// SWOT section that frames Afia's strengths, risks, and broader strategic landscape.
import { motion, useReducedMotion } from "motion/react";

import { LineIcon } from "@/components/common/icons/LineIcons";
import { pageContainerClass } from "@/components/common/layout/PageContainer";
import { driftLoop, lineDraw, pulseLoopFast, revealUp } from "@/components/common/motion/motion";
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

const swotSummaryCardStyle = {
  background:
    "linear-gradient(135deg, rgba(39, 174, 96, 0.05), rgba(45, 156, 219, 0.05))",
  border: "1.5px solid rgba(39, 174, 96, 0.15)",
} as const;

const swotSummaryIconStyle = {
  background: "linear-gradient(135deg, rgb(39, 174, 96), rgb(45, 156, 219))",
} as const;

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
      "New category - market education",
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
      "$6-8B market - 12%-15% CAGR",
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

function StrengthVisual() {
  const reduceMotion = useReducedMotion();
  const dots = [
    { x: 28, y: 22, delay: 0 },
    { x: 92, y: 28, delay: 0.25 },
    { x: 18, y: 52, delay: 0.5 },
    { x: 102, y: 55, delay: 0.75 },
    { x: 40, y: 10, delay: 1 },
    { x: 82, y: 12, delay: 1.25 },
  ] as const;

  return (
    <svg viewBox="0 0 120 110" fill="none" className="h-full w-full">
      <motion.circle
        cx="60"
        cy="38"
        r="28"
        fill="#27AE6010"
        animate={reduceMotion ? undefined : { opacity: [0.45, 0.75, 0.45], scale: [0.96, 1.02, 0.96] }}
        transition={reduceMotion ? undefined : driftLoop(3.6)}
        style={{ transformOrigin: "60px 38px" }}
      />

      <motion.line
        x1="60"
        y1="82"
        x2="60"
        y2="22"
        stroke="#27AE60"
        strokeWidth="3.5"
        strokeLinecap="round"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={lineDraw(0.18, 0.72)}
      />
      <motion.path
        d="M46,34 L60,16 L74,34"
        stroke="#27AE60"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={lineDraw(0.48, 0.62)}
      />

      {dots.map((dot) => (
        <motion.circle
          key={`${dot.x}-${dot.y}`}
          cx={dot.x}
          cy={dot.y}
          r="2.5"
          fill="#27AE60"
          animate={reduceMotion ? undefined : { opacity: [0.2, 1, 0.2], r: [1.5, 2.7, 1.5] }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 2.8, delay: dot.delay, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }
          }
        />
      ))}

      <rect x="34" y="82" width="52" height="7" rx="3.5" fill="#27AE6018" />
    </svg>
  );
}

function WeaknessVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <svg viewBox="0 0 120 110" fill="none" className="h-full w-full">
      <motion.rect
        x="36"
        y="12"
        width="32"
        height="18"
        rx="5"
        fill="transparent"
        stroke="#F59E0B38"
        strokeWidth="1.5"
        strokeDasharray="5 3"
        animate={reduceMotion ? undefined : { y: [20, 12, 20] }}
        transition={reduceMotion ? undefined : driftLoop(3.8)}
      />
      <motion.line
        x1="52"
        y1="32"
        x2="52"
        y2="48"
        stroke="#F59E0B38"
        strokeWidth="1.5"
        strokeDasharray="3 3"
        strokeLinecap="round"
        animate={reduceMotion ? undefined : { opacity: [0.15, 0.5, 0.15] }}
        transition={reduceMotion ? undefined : { duration: 2.8, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      />
    </svg>
  );
}

function OpportunityVisual() {
  const reduceMotion = useReducedMotion();
  const dots = [
    { x: 22, y: 14, delay: 0 },
    { x: 96, y: 20, delay: 0.3 },
    { x: 14, y: 42, delay: 0.6 },
    { x: 108, y: 48, delay: 0.9 },
    { x: 30, y: 8, delay: 1.2 },
  ] as const;

  return (
    <svg viewBox="0 0 120 120" fill="none" className="h-full w-full">
      <motion.ellipse
        cx="60"
        cy="80"
        rx="44"
        ry="18"
        stroke="#2D9CDB18"
        strokeWidth="1"
        strokeDasharray="5 4"
        animate={reduceMotion ? undefined : { scaleX: [1, 1.04, 1], scaleY: [1, 1.08, 1] }}
        transition={reduceMotion ? undefined : driftLoop(3.6)}
        style={{ transformOrigin: "60px 80px" }}
      />

      <motion.path
        d="M55,96 Q51,106 46,116"
        stroke="#2D9CDB28"
        strokeWidth="4.5"
        strokeLinecap="round"
        animate={reduceMotion ? undefined : { opacity: [0.2, 0.72, 0.2] }}
        transition={reduceMotion ? undefined : { duration: 2.7, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.path
        d="M65,96 Q69,106 74,116"
        stroke="#2D9CDB18"
        strokeWidth="3"
        strokeLinecap="round"
        animate={reduceMotion ? undefined : { opacity: [0.12, 0.5, 0.12] }}
        transition={reduceMotion ? undefined : { duration: 2.7, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      />

      <motion.g
        animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
        transition={reduceMotion ? undefined : { duration: 3, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      >
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
      </motion.g>

      {dots.map((dot) => (
        <motion.circle
          key={`${dot.x}-${dot.y}`}
          cx={dot.x}
          cy={dot.y}
          r="2"
          fill="#2D9CDB"
          animate={reduceMotion ? undefined : { opacity: [0.15, 1, 0.15] }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 2.8, delay: dot.delay, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }
          }
        />
      ))}
    </svg>
  );
}

function ThreatVisual() {
  const reduceMotion = useReducedMotion();
  const rain = [
    { x1: 28, y1: 76, x2: 25, y2: 85, delay: 0 },
    { x1: 40, y1: 84, x2: 37, y2: 93, delay: 0.2 },
    { x1: 80, y1: 78, x2: 77, y2: 87, delay: 0.4 },
    { x1: 92, y1: 88, x2: 89, y2: 97, delay: 0.6 },
    { x1: 55, y1: 80, x2: 52, y2: 89, delay: 0.8 },
  ] as const;

  return (
    <svg viewBox="0 0 120 110" fill="none" className="h-full w-full">
      <motion.path
        d="M24,56 Q18,34 38,30 Q40,18 56,18 Q72,18 74,30 Q90,26 92,44 Q102,46 100,56 Q98,66 86,65 L36,65 Q20,64 24,56 Z"
        fill="#EC489910"
        stroke="#EC489932"
        strokeWidth="1.5"
        animate={reduceMotion ? undefined : { scale: [1, 1.02, 1] }}
        transition={reduceMotion ? undefined : driftLoop(3.4)}
        style={{ transformOrigin: "60px 45px" }}
      />

      <motion.path
        d="M65,65 L51,86 L62,86 L49,108"
        stroke="#EC489930"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        animate={reduceMotion ? undefined : { opacity: [0, 0.7, 0] }}
        transition={reduceMotion ? undefined : { duration: 2.1, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.path
        d="M65,65 L51,86 L62,86 L49,108"
        stroke="#EC4899"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        animate={reduceMotion ? undefined : { opacity: [0, 1, 1, 0], pathLength: [0, 1, 1, 0] }}
        transition={reduceMotion ? undefined : { duration: 2.1, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      />

      {rain.map((drop) => (
        <motion.line
          key={`${drop.x1}-${drop.y1}`}
          x1={drop.x1}
          y1={drop.y1}
          x2={drop.x2}
          y2={drop.y2}
          stroke="#EC489940"
          strokeWidth="1.5"
          strokeLinecap="round"
          animate={reduceMotion ? undefined : { opacity: [0.12, 0.7, 0.12], y: [0, 3, 0] }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 1.9, delay: drop.delay, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }
          }
        />
      ))}
    </svg>
  );
}

function SwotVisual({ visual }: { visual: SwotCard["visual"] }) {
  if (visual === "strength") {
    return <StrengthVisual />;
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
  const reduceMotion = useReducedMotion();

  return (
    <section id="swot" className="relative overflow-hidden bg-white pb-12 pt-5 md:pb-14 md:pt-6">
      <motion.div
        className="pointer-events-none absolute rounded-full blur-[60px]"
        style={{
          width: 320,
          height: 320,
          left: "80%",
          top: "5%",
          background: "#27AE60",
          opacity: 0.14,
        }}
        animate={reduceMotion ? undefined : { x: [0, 14, 0], y: [0, -10, 0], scale: [1, 1.08, 1] }}
        transition={reduceMotion ? undefined : driftLoop(16)}
      />
      <motion.div
        className="pointer-events-none absolute rounded-full blur-[60px]"
        style={{
          width: 260,
          height: 260,
          left: "-5%",
          top: "70%",
          background: "#2D9CDB",
          opacity: 0.12,
        }}
        animate={reduceMotion ? undefined : { x: [0, -18, 0], y: [0, 12, 0], scale: [1, 1.1, 1] }}
        transition={reduceMotion ? undefined : driftLoop(18)}
      />

      <div className={pageContainerClass}>
        <SectionHeading badge="Why Now" title="The AI Convergence Moment" />
        <ConvergenceGrid />

        <div className="mt-10">
          <SectionHeading badge="SWOT Analysis" title="A Transparent Business Landscape" />
        </div>

        <div ref={ref} className="mt-10 grid gap-5 md:grid-cols-2">
          {swotCards.map((card, index) => (
            <motion.article
              key={card.title}
              className="relative overflow-hidden rounded-[2rem] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
              initial="hidden"
              animate={hasEntered ? "visible" : "hidden"}
              variants={revealUp(index * 0.12, 26, 0.76)}
              style={{
                background: card.softBackground,
                border: `1.5px solid ${card.borderColor}`,
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
                  <SwotVisual visual={card.visual} />
                </div>

                <div className="mt-auto flex flex-col gap-2">
                  {card.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-2.5">
                      <motion.div
                        className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                        style={{ background: card.accent }}
                        animate={reduceMotion ? undefined : { opacity: [0.45, 1, 0.45], scale: [0.85, 1.15, 0.85] }}
                        transition={reduceMotion ? undefined : pulseLoopFast}
                      />
                      <span className="text-xs font-medium text-[#4B5563] md:text-[0.95rem]">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-10 flex items-center gap-4 rounded-2xl p-5"
          initial="hidden"
          animate={hasEntered ? "visible" : "hidden"}
          variants={revealUp(0.52, 26, 0.76)}
          style={swotSummaryCardStyle}
        >
          <div
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
            style={swotSummaryIconStyle}
          >
            <LineIcon name="sparkles" className="size-5 text-white" />
          </div>
          <p className="text-xs leading-relaxed text-[#6B7280] md:text-[0.95rem]">
            <span className="font-semibold text-[#27AE60]">Investor takeaway - </span>
            Strengths and opportunities significantly outweigh execution-stage risks.
            Threats are manageable with strategic capital deployment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
