// Illustration for the wearable adoption card in the opportunity highlights section.
export function WearablesCardVisual() {
  return (
    <svg viewBox="0 0 120 130" fill="none" className="h-full w-full">
      <rect
        x="44"
        y="4"
        width="32"
        height="16"
        rx="5"
        fill="#27AE6018"
        stroke="#27AE6035"
        strokeWidth="1.5"
      />
      <rect
        x="44"
        y="110"
        width="32"
        height="16"
        rx="5"
        fill="#27AE6018"
        stroke="#27AE6035"
        strokeWidth="1.5"
      />
      <rect
        x="22"
        y="19"
        width="76"
        height="72"
        rx="22"
        fill="white"
        stroke="#27AE6025"
        strokeWidth="1.5"
      />
      <rect x="22" y="19" width="76" height="72" rx="22" fill="#27AE6005" />
      <rect x="30" y="27" width="60" height="56" rx="16" fill="#27AE6008" />

      <polyline
        points="32,55 40,55 45,38 52,72 59,48 65,55 73,55 79,42 86,55 92,55"
        stroke="#27AE60"
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

      <circle cx="92" cy="55" r="3.5" fill="#27AE60" opacity="0">
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
        stroke="#27AE60"
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

      <circle cx="60" cy="55" r="36" stroke="#27AE60" strokeWidth="1" fill="none" opacity="0">
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
