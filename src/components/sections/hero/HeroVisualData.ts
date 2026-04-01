// Static hero visual configuration for orbit nodes, floating signals, and layout timing.
import type { Accent } from "@/types/home/Home";

export const heroOrbitNodes = [
  { x: 108, y: 60, lineOpacity: 0.22404657533625144, dotOpacity: 0.6240465753362514, scale: 1.01803 },
  { x: 84, y: 101.56921938165306, lineOpacity: 0.32450662608025593, dotOpacity: 0.724506626080256, scale: 1.09338 },
  { x: 36.000000000000014, y: 101.56921938165306, lineOpacity: 0.47439792352961374, dotOpacity: 0.8743979235296138, scale: 1.2058 },
  { x: 12, y: 60.00000000000001, lineOpacity: 0.5936766343307681, dotOpacity: 0.9936766343307681, scale: 1.29526 },
  { x: 35.99999999999998, y: 18.430780618346958, lineOpacity: 0.5155369524494744, dotOpacity: 0.9155369524494745, scale: 1.23665 },
  { x: 84, y: 18.430780618346944, lineOpacity: 0.380253251909744, dotOpacity: 0.780253251909744, scale: 1.13519 },
] as const;

export const heroSignalConfigs = {
  "Heart Rate": {
    positionX: "42px",
    positionY: "-164px",
    floatOffset: "-2.247px",
    entryDelay: "0.12s",
    animationClass:
      "motion-safe:animate-[hero-card-float_9.2s_ease-in-out_infinite]",
  },
  Sleep: {
    positionX: "162px",
    positionY: "-28px",
    floatOffset: "-2.21788px",
    entryDelay: "0.6s",
    animationClass:
      "motion-safe:animate-[hero-card-float-alt_10.1s_ease-in-out_infinite]",
  },
  Activity: {
    positionX: "34px",
    positionY: "144px",
    floatOffset: "-2.19455px",
    entryDelay: "0.84s",
    animationClass:
      "motion-safe:animate-[hero-card-float_9.6s_ease-in-out_infinite]",
  },
  Decision: {
    positionX: "-214px",
    positionY: "34px",
    floatOffset: "-0.475549px",
    entryDelay: "0s",
    animationClass:
      "motion-safe:animate-[hero-card-float-alt_10.4s_ease-in-out_infinite]",
  },
  HRV: {
    positionX: "-162px",
    positionY: "-108px",
    floatOffset: "-0.555132px",
    entryDelay: "0.32s",
    animationClass:
      "motion-safe:animate-[hero-card-float_9.8s_ease-in-out_infinite]",
  },
} as const;

export const heroSignalStyles: Record<
  Accent,
  { border: string; iconSurface: string; iconText: string }
> = {
  green: {
    border: "border-[rgba(39,174,96,0.26)]",
    iconSurface: "bg-[rgba(39,174,96,0.16)]",
    iconText: "text-[rgb(39,174,96)]",
  },
  blue: {
    border: "border-[rgba(45,156,219,0.26)]",
    iconSurface: "bg-[rgba(45,156,219,0.16)]",
    iconText: "text-[rgb(45,156,219)]",
  },
  purple: {
    border: "border-[rgba(139,92,246,0.26)]",
    iconSurface: "bg-[rgba(139,92,246,0.16)]",
    iconText: "text-[rgb(139,92,246)]",
  },
  orange: {
    border: "border-[rgba(245,158,11,0.26)]",
    iconSurface: "bg-[rgba(245,158,11,0.16)]",
    iconText: "text-[rgb(245,158,11)]",
  },
  pink: {
    border: "border-[rgba(236,72,153,0.26)]",
    iconSurface: "bg-[rgba(236,72,153,0.16)]",
    iconText: "text-[rgb(236,72,153)]",
  },
  red: {
    border: "border-[rgba(239,68,68,0.26)]",
    iconSurface: "bg-[rgba(239,68,68,0.16)]",
    iconText: "text-[rgb(239,68,68)]",
  },
};
