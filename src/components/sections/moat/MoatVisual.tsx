"use client";

// Radial moat diagram that visualizes Afia's defensibility pillars around a central core.
import { LineIcon } from "@/components/common/icons/LineIcons";
import { useInViewOnce } from "@/components/sections/opportunity/useInViewOnce";

type MoatSector = {
  label: string[];
  fill: string;
  stroke: string;
  labelColor: string;
  labelX: number;
  labelY: number;
  startAngle: number;
  endAngle: number;
};

const moatSectors: MoatSector[] = [
  // These wedges map directly to the five moat pillars shown around the shield core.
  {
    label: ["AI", "Architecture"],
    fill: "rgba(39, 174, 96, 0.10)",
    stroke: "rgba(39, 174, 96, 0.4)",
    labelColor: "#27AE60",
    labelX: 200,
    labelY: 43,
    startAngle: -90,
    endAngle: -18,
  },
  {
    label: ["Device", "Network"],
    fill: "rgba(45, 156, 219, 0.10)",
    stroke: "rgba(45, 156, 219, 0.4)",
    labelColor: "#2D9CDB",
    labelX: 282,
    labelY: 160,
    startAngle: -18,
    endAngle: 54,
  },
  {
    label: ["Revenue", "Layers"],
    fill: "rgba(139, 92, 246, 0.10)",
    stroke: "rgba(139, 92, 246, 0.38)",
    labelColor: "#8B5CF6",
    labelX: 200,
    labelY: 268,
    startAngle: 54,
    endAngle: 126,
  },
  {
    label: ["Data", "Intelligence"],
    fill: "rgba(245, 158, 11, 0.10)",
    stroke: "rgba(245, 158, 11, 0.4)",
    labelColor: "#F59E0B",
    labelX: 60,
    labelY: 230,
    startAngle: 126,
    endAngle: 198,
  },
  {
    label: ["Privacy"],
    fill: "rgba(236, 72, 153, 0.10)",
    stroke: "rgba(236, 72, 153, 0.4)",
    labelColor: "#EC4899",
    labelX: 60,
    labelY: 96,
    startAngle: 198,
    endAngle: 270,
  },
];

function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number,
) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeSector(
  centerX: number,
  centerY: number,
  radius: number,
  startAngle: number,
  endAngle: number,
) {
  const start = polarToCartesian(centerX, centerY, radius, endAngle);
  const end = polarToCartesian(centerX, centerY, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    `M ${centerX} ${centerY}`,
    `L ${start.x} ${start.y}`,
    `A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`,
    "Z",
  ].join(" ");
}

export function MoatVisual() {
  const { ref, hasEntered } = useInViewOnce<HTMLDivElement>();

  return (
    <div ref={ref} className="flex justify-center">
      <div className="relative size-80">
        <svg viewBox="0 0 320 320" className="h-full w-full">
          {moatSectors.map((sector, index) => (
            <path
              key={sector.label.join("-")}
              d={describeSector(160, 160, 122, sector.startAngle, sector.endAngle)}
              fill={sector.fill}
              stroke={sector.stroke}
              strokeWidth="1.5"
              className={
                hasEntered
                  ? "origin-center motion-safe:animate-[moat-orbit-enter_880ms_cubic-bezier(0.22,1,0.36,1)_both]"
                  : "origin-center opacity-0"
              }
              style={{ animationDelay: `${index * 90}ms` }}
            />
          ))}

          {[46, 82, 122].map((radius, index) => (
            <circle
              key={radius}
              cx="160"
              cy="160"
              r={radius}
              fill="none"
              // The dashed guide rings help the center core feel anchored without competing with the sector strokes.
              stroke="rgba(45,45,45,0.08)"
              strokeDasharray="6 6"
              className={
                hasEntered
                  ? "origin-center motion-safe:animate-[moat-orbit-enter_880ms_cubic-bezier(0.22,1,0.36,1)_both]"
                  : "origin-center opacity-0"
              }
              style={{ animationDelay: `${120 + index * 90}ms` }}
            />
          ))}

          {[-90, -18, 54, 126, 198].map((angle, index) => {
            const point = polarToCartesian(160, 160, 122, angle);

            return (
              <line
                key={angle}
                x1="160"
                y1="160"
                x2={point.x}
                y2={point.y}
                stroke="rgba(45,45,45,0.12)"
                className={
                  hasEntered
                    ? "origin-center motion-safe:animate-[moat-orbit-enter_880ms_cubic-bezier(0.22,1,0.36,1)_both]"
                    : "origin-center opacity-0"
                }
                style={{ animationDelay: `${180 + index * 80}ms` }}
              />
            );
          })}

          {moatSectors.map((sector, index) => (
            <text
              key={`${sector.label.join("-")}-text`}
              x={sector.labelX}
              y={sector.labelY}
              textAnchor="middle"
              fill={sector.labelColor}
              className={
                hasEntered
                  ? "motion-safe:animate-[moat-orbit-label-enter_680ms_cubic-bezier(0.22,1,0.36,1)_both]"
                  : "opacity-0"
              }
              style={{ animationDelay: `${340 + index * 90}ms` }}
            >
              {sector.label.map((line, lineIndex) => (
                <tspan
                  key={line}
                  x={sector.labelX}
                  dy={lineIndex === 0 ? 0 : 14}
                  fontSize="12"
                  fontWeight="600"
                >
                  {line}
                </tspan>
              ))}
            </text>
          ))}
        </svg>

        <div
          className={`absolute inset-[6.75rem] flex items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-green),var(--color-blue))] shadow-[0_18px_44px_rgba(39,174,96,0.2)] ${
            hasEntered
              ? "motion-safe:animate-[moat-orbit-core-enter_820ms_cubic-bezier(0.22,1,0.36,1)_both]"
              : "opacity-0"
          }`}
          style={{ animationDelay: "220ms" }}
        >
          <LineIcon name="shield" className="size-9 text-white" />
        </div>
      </div>
    </div>
  );
}
