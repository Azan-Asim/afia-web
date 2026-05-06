// Central icon registry that keeps line-style SVG icons consistent across the UI.
import type { ReactElement, ReactNode, SVGProps } from "react";

import type { IconName } from "@/types/home/Home";

type IconProps = SVGProps<SVGSVGElement>;

function createIcon(children: ReactNode) {
  // Keep the icon set visually consistent by wrapping each glyph in the same SVG shell
  return function Icon(props: IconProps) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        {children}
      </svg>
    );
  };
}

const ActivityIcon = createIcon(
  <>
    <path d="M22 12h-3l-2.5 7-5-14-3.5 9H2" />
  </>,
);

const ArrowRightIcon = createIcon(
  <>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </>,
);

const BrainIcon = createIcon(
  <>
    <path d="M9.5 4a3.5 3.5 0 0 0-3.5 3.5V8a4 4 0 0 0-2.5 6.9A4 4 0 0 0 7 21h2" />
    <path d="M14.5 4A3.5 3.5 0 0 1 18 7.5V8a4 4 0 0 1 2.5 6.9A4 4 0 0 1 17 21h-2" />
    <path d="M12 6v12" />
    <path d="M9 12c1 .5 2 1.5 3 3 1-1.5 2-2.5 3-3" />
  </>,
);

const ChartIcon = createIcon(
  <>
    <path d="M3 3v18h18" />
    <path d="M7 14v4" />
    <path d="M12 9v9" />
    <path d="M17 5v13" />
  </>,
);

const ChartLineIcon = createIcon(
  <>
    <path d="M4 5v14" />
    <path d="M4 19h16" />
    <path d="m8 14 3-3 3 2 3-5" />
  </>,
);

const ChevronRightIcon = createIcon(
  <>
    <path d="m9 18 6-6-6-6" />
  </>,
);

const ChipIcon = createIcon(
  <>
    <rect x="7" y="7" width="10" height="10" rx="2" />
    <rect x="10" y="10" width="4" height="4" rx="1" />
    <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
  </>,
);

const CpuIcon = createIcon(
  <>
    <rect x="7" y="7" width="10" height="10" rx="2" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M5 19l2-2" />
  </>,
);

const DatabaseIcon = createIcon(
  <>
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
    <path d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" />
  </>,
);

const DollarIcon = createIcon(
  <>
    <path d="M12 2v20" />
    <path d="M17 6h-6.5a3.5 3.5 0 0 0 0 7h3a3.5 3.5 0 0 1 0 7H6" />
  </>,
);

const ExternalLinkIcon = createIcon(
  <>
    <path d="M14 4h6v6" />
    <path d="M10 14 20 4" />
    <path d="M20 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4" />
  </>,
);

const GlobeIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a15 15 0 0 1 0 18" />
    <path d="M12 3a15 15 0 0 0 0 18" />
  </>,
);

const HeartIcon = createIcon(
  <>
    <path d="M12 20s-7-4.6-9-9a5.5 5.5 0 0 1 9-5.2A5.5 5.5 0 0 1 21 11c-2 4.4-9 9-9 9Z" />
  </>,
);

const LayersIcon = createIcon(
  <>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 12 9 5 9-5" />
    <path d="m3 16 9 5 9-5" />
  </>,
);

const MailIcon = createIcon(
  <>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </>,
);

const MenuIcon = createIcon(
  <>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </>,
);

const MoonIcon = createIcon(
  <>
    <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />
  </>,
);

const NetworkIcon = createIcon(
  <>
    <rect x="3" y="15" width="6" height="6" rx="1.5" />
    <rect x="15" y="15" width="6" height="6" rx="1.5" />
    <rect x="9" y="3" width="6" height="6" rx="1.5" />
    <path d="M12 9v3M6 15v-1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1" />
  </>,
);

const ShieldIcon = createIcon(
  <>
    <path d="M12 3c2.5 2 5 3 8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6c3 0 5.5-1 8-3Z" />
  </>,
);

const SparklesIcon = createIcon(
  <>
    <path d="M12 4.2c.6 2.6 1 4 1.8 4.8s2.2 1.2 4.8 1.8c-2.6.6-4 1-4.8 1.8S12.6 14.8 12 17.4c-.6-2.6-1-4-1.8-4.8s-2.2-1.2-4.8-1.8c2.6-.6 4-1 4.8-1.8S11.4 6.8 12 4.2Z" />
    <path d="M18.4 5.6v4.2" />
    <path d="M20.5 7.7h-4.2" />
    <path d="M5.4 15.7v2.2" />
    <path d="M6.5 16.8H4.3" />
  </>,
);

const StarIcon = createIcon(
  <>
    <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.2 6.4 20l1.1-6.2L3 9.6l6.2-.9L12 3Z" />
  </>,
);

const TrendingUpIcon = createIcon(
  <>
    <path d="M3 17 9 11l4 4 8-8" />
    <path d="M14 7h7v7" />
  </>,
);

const UsersIcon = createIcon(
  <>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </>,
);

const WatchIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="5" />
    <path d="M12 10v2l1.5 1.5" />
    <path d="m15.5 6 .8-2.7A2 2 0 0 0 14.4 1h-4.8a2 2 0 0 0-1.9 2.3L8.5 6" />
    <path d="m8.5 18-.8 2.7A2 2 0 0 0 9.6 23h4.8a2 2 0 0 0 1.9-2.3l-.8-2.7" />
  </>,
);

const XIcon = createIcon(
  <>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </>,
);

const ZapIcon = createIcon(
  <>
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
  </>,
);

const iconMap = {
  activity: ActivityIcon,
  arrowRight: ArrowRightIcon,
  brain: BrainIcon,
  chart: ChartIcon,
  chartLine: ChartLineIcon,
  chevronRight: ChevronRightIcon,
  chip: ChipIcon,
  cpu: CpuIcon,
  database: DatabaseIcon,
  dollar: DollarIcon,
  externalLink: ExternalLinkIcon,
  globe: GlobeIcon,
  heart: HeartIcon,
  layers: LayersIcon,
  mail: MailIcon,
  menu: MenuIcon,
  moon: MoonIcon,
  network: NetworkIcon,
  shield: ShieldIcon,
  sparkles: SparklesIcon,
  star: StarIcon,
  trendingUp: TrendingUpIcon,
  users: UsersIcon,
  watch: WatchIcon,
  x: XIcon,
  zap: ZapIcon,
} satisfies Record<IconName, (props: IconProps) => ReactElement>;

export function LineIcon({
  name,
  ...props
}: { name: IconName } & IconProps) {
  const Icon = iconMap[name];

  return <Icon {...props} />;
}
