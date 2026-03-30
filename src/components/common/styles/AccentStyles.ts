// Accent style tokens that map semantic colors to reusable Tailwind utility fragments.
import type { Accent } from "@/types/home/Home";

export const accentStyles: Record<
  Accent,
  {
    text: string;
    soft: string;
    border: string;
    solid: string;
    softSolid: string;
  }
> = {
  green: {
    text: "text-[var(--color-green)]",
    soft: "bg-[var(--color-green-soft)]",
    border: "border-[color:var(--color-green-soft-border)]",
    solid: "bg-[var(--color-green)]",
    softSolid: "bg-[rgba(39,174,96,0.14)]",
  },
  blue: {
    text: "text-[var(--color-blue)]",
    soft: "bg-[var(--color-blue-soft)]",
    border: "border-[color:var(--color-blue-soft-border)]",
    solid: "bg-[var(--color-blue)]",
    softSolid: "bg-[rgba(45,156,219,0.14)]",
  },
  purple: {
    text: "text-[var(--color-purple)]",
    soft: "bg-[var(--color-purple-soft)]",
    border: "border-[color:var(--color-purple-soft-border)]",
    solid: "bg-[var(--color-purple)]",
    softSolid: "bg-[rgba(139,92,246,0.14)]",
  },
  orange: {
    text: "text-[var(--color-orange)]",
    soft: "bg-[var(--color-orange-soft)]",
    border: "border-[color:var(--color-orange-soft-border)]",
    solid: "bg-[var(--color-orange)]",
    softSolid: "bg-[rgba(245,158,11,0.14)]",
  },
  pink: {
    text: "text-[var(--color-pink)]",
    soft: "bg-[var(--color-pink-soft)]",
    border: "border-[color:var(--color-pink-soft-border)]",
    solid: "bg-[var(--color-pink)]",
    softSolid: "bg-[rgba(236,72,153,0.14)]",
  },
  red: {
    text: "text-[var(--color-red)]",
    soft: "bg-[var(--color-red-soft)]",
    border: "border-[color:var(--color-red-soft-border)]",
    solid: "bg-[var(--color-red)]",
    softSolid: "bg-[rgba(239,68,68,0.14)]",
  },
};
