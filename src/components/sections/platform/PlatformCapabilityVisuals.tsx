// Custom SVG visuals that give each platform capability card a distinct illustration.
function DeviceAgnosticVisual() {
  const nodes = [
    { x: 60, y: 14, delay: "0s" },
    { x: 100, y: 38, delay: "0.45s" },
    { x: 100, y: 72, delay: "0.9s" },
    { x: 60, y: 96, delay: "1.35s" },
    { x: 20, y: 72, delay: "1.8s" },
    { x: 20, y: 38, delay: "2.25s" },
  ] as const;

  return (
    <svg viewBox="0 0 120 110" fill="none" className="h-full w-full">
      {nodes.map((node) => (
        <g key={`${node.x}-${node.y}`}>
          <line
            x1="60"
            y1="55"
            x2={node.x}
            y2={node.y}
            stroke="#27AE6030"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          >
            <animate
              attributeName="opacity"
              values="0.24;0.56;0.24"
              dur="3.4s"
              begin={node.delay}
              repeatCount="indefinite"
            />
          </line>
          <circle cx={node.x} cy={node.y} r="9" fill="#27AE6010" stroke="#27AE6040" strokeWidth="1.5">
            <animate attributeName="r" values="9;10.2;9" dur="3.4s" begin={node.delay} repeatCount="indefinite" />
            <animate
              attributeName="opacity"
              values="0.65;1;0.65"
              dur="3.4s"
              begin={node.delay}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}

      <circle cx="60" cy="55" r="16" fill="#27AE6012" stroke="#27AE6040" strokeWidth="1.5" />
      <circle cx="60" cy="55" r="16" stroke="#27AE60" strokeWidth="1.5" fill="none">
        <animate
          attributeName="opacity"
          values="0;0.35;0"
          dur="2.8s"
          repeatCount="indefinite"
        />
        <animate attributeName="r" values="16;20;21.5" dur="2.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function AiInterpretationVisual() {
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
          stroke="#2D9CDB28"
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
          fill="#2D9CDB14"
          stroke="#2D9CDB55"
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

      <circle cx="60" cy="55" r="7" fill="#2D9CDB">
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

function FamilyIntelligenceVisual() {
  return (
    <svg viewBox="0 0 120 110" fill="none" className="h-full w-full">
      <circle cx="60" cy="55" r="20" fill="#8B5CF608" stroke="#8B5CF612" strokeWidth="1">
        <animate attributeName="opacity" values="0.45;0.75;0.45" dur="4.6s" repeatCount="indefinite" />
      </circle>

      <g>
        <line x1="28" y1="38" x2="92" y2="38" stroke="#8B5CF635" strokeWidth="1.5" strokeDasharray="4 3">
          <animate
            attributeName="opacity"
            values="0.34;0.78;0.34"
            dur="4s"
            repeatCount="indefinite"
          />
        </line>
        <line x1="28" y1="38" x2="60" y2="82" stroke="#8B5CF635" strokeWidth="1.5" strokeDasharray="4 3">
          <animate
            attributeName="opacity"
            values="0.34;0.78;0.34"
            dur="4s"
            begin="0.3s"
            repeatCount="indefinite"
          />
        </line>
        <line x1="92" y1="38" x2="60" y2="82" stroke="#8B5CF635" strokeWidth="1.5" strokeDasharray="4 3">
          <animate
            attributeName="opacity"
            values="0.34;0.78;0.34"
            dur="4s"
            begin="0.6s"
            repeatCount="indefinite"
          />
        </line>

        {[
          { x: 28, y: 38, r: 16, eye: 5.12, mouth: "M19.2,42.48 Q28,49.52 36.8,42.48", delay: "0s" },
          { x: 92, y: 38, r: 16, eye: 5.12, mouth: "M83.2,42.48 Q92,49.52 100.8,42.48", delay: "0.6s" },
          { x: 60, y: 82, r: 12, eye: 3.84, mouth: "M53.4,85.36 Q60,90.64 66.6,85.36", delay: "1.2s" },
          ].map((face) => (
            <g key={`${face.x}-${face.y}`}>
              <animateTransform
                attributeName="transform"
                type="scale"
                values="0.96 0.96;1.06 1.06;0.96 0.96"
                dur="4s"
                begin={face.delay}
                repeatCount="indefinite"
                additive="sum"
                origin={`${face.x} ${face.y}`}
              />
              <circle cx={face.x} cy={face.y} r={face.r} fill="#8B5CF612" stroke="#8B5CF645" strokeWidth="1.5">
                <animate
                  attributeName="opacity"
                values="0.62;1;0.62"
                dur="4s"
                begin={face.delay}
                repeatCount="indefinite"
              />
            </circle>
            <circle cx={face.x} cy={face.y - face.r * 0.3} r={face.eye} fill="#8B5CF640">
              <animate attributeName="opacity" values="0.55;1;0.55" dur="4s" begin={face.delay} repeatCount="indefinite" />
            </circle>
            <path
              d={face.mouth}
              stroke="#8B5CF655"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            >
              <animate attributeName="opacity" values="0.52;0.92;0.52" dur="4s" begin={face.delay} repeatCount="indefinite" />
            </path>
          </g>
        ))}
      </g>
    </svg>
  );
}

function PrivacyFirstVisual() {
  return (
    <svg viewBox="0 0 120 110" fill="none" className="h-full w-full">
      {[20, 40, 60].map((radius, index) => (
        <circle
          key={radius}
          cx="60"
          cy="58"
          r={radius}
          stroke={index === 0 ? "#F59E0B40" : index === 1 ? "#F59E0B22" : "#F59E0B10"}
          strokeWidth="1"
          fill="none"
          strokeDasharray="5 4"
        >
          <animate attributeName="r" values={`${radius * 0.97};${radius * 1.04};${radius * 0.97}`} dur={`${3.2 + index * 0.4}s`} repeatCount="indefinite" />
          <animate
            attributeName="opacity"
            values={`${0.52 + index * 0.1};0.96;${0.52 + index * 0.1}`}
            dur={`${3.2 + index * 0.4}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      <path
        d="M60,10 L90,24 L90,56 Q90,80 60,92 Q30,80 30,56 L30,24 Z"
        fill="#F59E0B10"
        stroke="#F59E0B45"
        strokeWidth="1.5"
      >
        <animate attributeName="opacity" values="0.72;1;0.72" dur="3.4s" repeatCount="indefinite" />
      </path>
      <rect x="50" y="52" width="20" height="15" rx="4" fill="#F59E0B28" stroke="#F59E0B65" strokeWidth="1.5" />
      <path d="M53,52 L53,46 Q53,40 60,40 Q67,40 67,46 L67,52" stroke="#F59E0B65" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="60" cy="59.5" r="2.5" fill="#F59E0B90">
        <animate
          attributeName="opacity"
          values="0.45;1;0.45"
          dur="2.6s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

export function PlatformCapabilityVisual({ title }: { title: string }) {
  if (title === "Device Agnostic") {
    return <DeviceAgnosticVisual />;
  }

  if (title === "AI Interpretation") {
    return <AiInterpretationVisual />;
  }

  if (title === "Family Intelligence") {
    return <FamilyIntelligenceVisual />;
  }

  return <PrivacyFirstVisual />;
}
