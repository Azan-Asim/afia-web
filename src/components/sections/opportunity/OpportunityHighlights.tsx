// Highlight cards that quantify the market opportunity and unmet user need.
import { accentStyles } from "@/components/common/styles/AccentStyles";
import { SurfaceCard } from "@/components/common/ui/SurfaceCard";
import { opportunityCards } from "@/content/home/opportunity/OpportunityContent";

import { InterpretationGapCardVisual } from "./InterpretationGapCardVisual";
import { MarketGrowthCardVisual } from "./MarketGrowthCardVisual";
import { WearablesCardVisual } from "./WearablesCardVisual";

function OpportunityVisual({ title }: { title: string }) {
  if (title === "Wearables by 2028") {
    return <WearablesCardVisual />;
  }

  if (title.startsWith("Digital Health Market")) {
    return <MarketGrowthCardVisual />;
  }

  return <InterpretationGapCardVisual />;
}

export function OpportunityHighlights() {
  return (
    <div className="mt-10 grid gap-4 md:grid-cols-3">
      {opportunityCards.map((card) => {
        const styles = accentStyles[card.accent];

        return (
          <SurfaceCard
            key={card.title}
            className="group relative mx-auto w-full max-w-[22rem] overflow-hidden rounded-[1.5rem] border-[1.5px] px-5 pt-5 pb-3 shadow-[0_6px_24px_rgba(0,0,0,0.05)]"
          >
            <div
              aria-hidden="true"
              className={`absolute left-6 right-6 top-0 h-[2px] rounded-b-full opacity-90 ${styles.solid}`}
            />
            <div className="mb-3 flex h-20 items-center justify-center">
              <OpportunityVisual title={card.title} />
            </div>
            <div className="font-[family:var(--font-display)] text-[1.55rem] font-bold tracking-[-0.02em] text-[#2D2D2D]">
              {card.value}
            </div>
            <h3 className="mt-1 text-[0.95rem] font-semibold leading-snug text-[#2D2D2D]">
              {card.title}
            </h3>
          </SurfaceCard>
        );
      })}
    </div>
  );
}
