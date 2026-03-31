// Main hero visual composition that combines the orbit, signal cards, and data story.
import { HeroOrbit } from "@/components/sections/hero/HeroOrbit";
import { HeroSignalCard } from "@/components/sections/hero/HeroSignalCard";
import { useHomeContent } from "@/content/home/useHomeContent";

type HeroVisualProps = {
  cycle: number;
};

export function HeroVisual({ cycle }: HeroVisualProps) {
  const { hero } = useHomeContent();

  return (
    <div className="relative flex items-center justify-center lg:justify-end">
      <div className="relative flex aspect-square w-full max-w-[23rem] items-center justify-center scale-[0.82] sm:max-w-lg sm:scale-100 lg:translate-x-2 xl:translate-x-6">
        <div className="absolute inset-[-4%] rounded-full bg-[radial-gradient(circle,rgba(39,174,96,0.11)_0%,rgba(39,174,96,0.06)_30%,rgba(45,156,219,0.045)_56%,transparent_74%)] sm:inset-[-5%] lg:inset-[-6%]" />
        <HeroOrbit />
        {hero.floatingSignals.map((signal) => (
          <HeroSignalCard key={`${signal.id}-${cycle}`} {...signal} />
        ))}
      </div>
    </div>
  );
}
