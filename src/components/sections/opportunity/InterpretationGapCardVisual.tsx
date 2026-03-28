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
            stroke="#8B5CF635"
            strokeWidth="1"
            strokeDasharray="4 3"
            opacity={index === 1 ? "0.28" : "0.34"}
          />
          <circle cx="18" cy={y} r="8" fill="#8B5CF618" stroke="#8B5CF650" strokeWidth="1.5">
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
        stroke="#8B5CF622"
        strokeWidth="1.5"
        strokeDasharray="6 4"
      >
        <animate attributeName="opacity" values="0.2;0.45;0.2" dur="4.8s" repeatCount="indefinite" />
        <animate attributeName="r" values="22;25.5;22" dur="4.8s" repeatCount="indefinite" />
      </circle>

      <text
        x="60"
        y="62"
        textAnchor="middle"
        fill="#8B5CF670"
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
            stroke="#8B5CF615"
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
