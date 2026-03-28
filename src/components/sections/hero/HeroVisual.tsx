import { HeroOrbit } from "@/components/sections/hero/HeroOrbit";
import { HeroSignalCard } from "@/components/sections/hero/HeroSignalCard";
import { floatingSignals } from "@/content/home/hero/HeroContent";

export function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center lg:justify-end">
      <div className="relative flex aspect-square w-full max-w-[23rem] items-center justify-center scale-[0.82] sm:max-w-lg sm:scale-100 lg:translate-x-10 xl:translate-x-14">
        <div className="absolute inset-[-8%] rounded-full bg-[radial-gradient(circle,rgba(39,174,96,0.14)_0%,rgba(39,174,96,0.08)_28%,transparent_72%)]" />
        <HeroOrbit />
        {floatingSignals.map((signal) => (
          <HeroSignalCard key={signal.label} {...signal} />
        ))}
      </div>
    </div>
  );
}
