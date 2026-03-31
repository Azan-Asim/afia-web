// Orbiting hero illustration layer that visualizes connected signals around the core product.
import { heroOrbitNodes } from "@/components/sections/hero/HeroVisualData";
import { useHomeContent } from "@/content/home/useHomeContent";

const heroOrbitPairs = [
  [heroOrbitNodes[0], heroOrbitNodes[3]],
  [heroOrbitNodes[1], heroOrbitNodes[4]],
  [heroOrbitNodes[2], heroOrbitNodes[5]],
] as const;

function createPulseValues(nodeScale: number, reverse = false) {
  const baseRadius = 3.35 * nodeScale;
  const smallRadius = (baseRadius * 0.82).toFixed(2);
  const midRadius = baseRadius.toFixed(2);
  const largeRadius = (baseRadius * 1.22).toFixed(2);

  return reverse
    ? `${largeRadius};${midRadius};${smallRadius};${midRadius};${largeRadius}`
    : `${smallRadius};${midRadius};${largeRadius};${midRadius};${smallRadius}`;
}

function createOpacityValues(baseOpacity: number, reverse = false) {
  const lowOpacity = Math.max(0.18, baseOpacity * 0.68).toFixed(3);
  const midOpacity = Math.min(0.92, baseOpacity * 0.92).toFixed(3);
  const highOpacity = Math.min(1, baseOpacity + 0.18).toFixed(3);

  return reverse
    ? `${highOpacity};${midOpacity};${lowOpacity};${midOpacity};${highOpacity}`
    : `${lowOpacity};${midOpacity};${highOpacity};${midOpacity};${lowOpacity}`;
}

export function HeroOrbit() {
  const { hero } = useHomeContent();

  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center">
      <div
        className="relative h-36 w-36 motion-safe:animate-[hero-core-breathe_6.4s_ease-in-out_infinite]"
        style={{ transform: "rotate(3.90736deg)" }}
      >
        <svg viewBox="0 0 120 120" fill="none" className="h-full w-full">
          <circle
            cx="60"
            cy="60"
            r="55"
            stroke="url(#ringGrad)"
            strokeWidth="1"
            strokeDasharray="8 4"
            className="motion-safe:animate-[hero-orbit-spin_24s_linear_infinite]"
            style={{
              transformOrigin: "50% 50%",
              transform: "rotate(248.472deg)",
              transformBox: "fill-box",
            }}
          />
          <circle cx="60" cy="60" r="38" fill="url(#coreGrad)" opacity="0.15" />
          <circle cx="60" cy="60" r="28" fill="url(#coreGrad)" opacity="0.25" />
          <circle cx="60" cy="60" r="20" fill="url(#coreGrad)" />

          <g
            className="motion-safe:animate-[hero-node-drift_10.8s_ease-in-out_infinite_alternate]"
            style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}
          >
            {heroOrbitPairs.map(([forwardNode, reverseNode]) => (
              <g key={`${forwardNode.x}-${reverseNode.x}`}>
                <line
                  x1="60"
                  y1="60"
                  x2={forwardNode.x}
                  y2={forwardNode.y}
                  stroke="#27AE60"
                  strokeWidth="0.8"
                  opacity={forwardNode.lineOpacity}
                >
                  <animate
                    attributeName="opacity"
                    values={createOpacityValues(forwardNode.lineOpacity)}
                    dur="6.8s"
                    repeatCount="indefinite"
                  />
                </line>
                <circle
                  cx={forwardNode.x}
                  cy={forwardNode.y}
                  r={(3.35 * forwardNode.scale).toFixed(2)}
                  fill="#27AE60"
                  opacity={forwardNode.dotOpacity}
                >
                  <animate
                    attributeName="r"
                    values={createPulseValues(forwardNode.scale)}
                    dur="6.8s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values={createOpacityValues(forwardNode.dotOpacity)}
                    dur="6.8s"
                    repeatCount="indefinite"
                  />
                </circle>

                <line
                  x1="60"
                  y1="60"
                  x2={reverseNode.x}
                  y2={reverseNode.y}
                  stroke="#27AE60"
                  strokeWidth="0.8"
                  opacity={reverseNode.lineOpacity}
                >
                  <animate
                    attributeName="opacity"
                    values={createOpacityValues(reverseNode.lineOpacity, true)}
                    dur="6.8s"
                    repeatCount="indefinite"
                  />
                </line>
                <circle
                  cx={reverseNode.x}
                  cy={reverseNode.y}
                  r={(3.35 * reverseNode.scale).toFixed(2)}
                  fill="#27AE60"
                  opacity={reverseNode.dotOpacity}
                >
                  <animate
                    attributeName="r"
                    values={createPulseValues(reverseNode.scale, true)}
                    dur="6.8s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values={createOpacityValues(reverseNode.dotOpacity, true)}
                    dur="6.8s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            ))}
          </g>

          <defs>
            <linearGradient id="coreGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#27AE60" />
              <stop offset="100%" stopColor="#2D9CDB" />
            </linearGradient>
            <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#27AE60" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#2D9CDB" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-white">{hero.orbitLabel}</span>
        </div>
      </div>
    </div>
  );
}
