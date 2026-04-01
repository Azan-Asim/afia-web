// Illustration for the interpretation-gap card in the opportunity highlights section.
export function InterpretationGapCardVisual() {
  return (
    <svg viewBox="0 0 120 110" fill="none" className="h-full w-full">
      {[24, 55, 86].map((y, index) => (
        <g key={`left-${y}`}>
          <line
            x1="26"
            y1={y}
            x2="50"
            y2="55"
            stroke="#8B5CF66E"
            strokeWidth="1.25"
            strokeDasharray="4 3"
            opacity={index === 1 ? "0.52" : "0.6"}
          />
          <circle cx="18" cy={y} r="8" fill="#8B5CF62A" stroke="#8B5CF688" strokeWidth="1.7">
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
        fill="rgba(139,92,246,0.08)"
        stroke="#8B5CF688"
        strokeWidth="1.8"
        strokeDasharray="6 4"
      >
        <animate attributeName="opacity" values="0.5;0.9;0.5" dur="4.8s" repeatCount="indefinite" />
        <animate attributeName="r" values="22;25.5;22" dur="4.8s" repeatCount="indefinite" />
      </circle>

      <text
        x="60"
        y="62"
        textAnchor="middle"
        fill="#8B5CF6D0"
        style={{ fontSize: 22, fontWeight: 800, fontFamily: "Inter, sans-serif" }}
      >
        ?
        <animate attributeName="opacity" values="0.65;1;0.65" dur="4.8s" repeatCount="indefinite" />
      </text>

      {[24, 55, 86].map((y, index) => (
        <g key={`right-${y}`}>
          <line
            x1="70"
            y1="55"
            x2="94"
            y2={y}
            stroke="#8B5CF652"
            strokeWidth="1.25"
            strokeDasharray="4 3"
            opacity={index === 1 ? "0.48" : "0.42"}
          />
          <circle
            cx="102"
            cy={y}
            r="8"
            fill="rgba(139,92,246,0.06)"
            stroke="rgba(139,92,246,0.34)"
            strokeWidth="1.7"
            strokeDasharray="4 3"
          >
            <animate
              attributeName="opacity"
              values={`${0.28 + index * 0.04};${0.52 + index * 0.08};${0.28 + index * 0.04}`}
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
