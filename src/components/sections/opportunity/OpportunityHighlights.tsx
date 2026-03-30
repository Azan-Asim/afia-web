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

  if (title === "Digital Health Market") {
    return <MarketGrowthCardVisual />;
  }

  return <InterpretationGapCardVisual />;
}

export function OpportunityHighlights() {
  return (
    <div className="mt-16 grid gap-6 md:grid-cols-3">
      {opportunityCards.map((card) => {
        const styles = accentStyles[card.accent];

        return (
          <SurfaceCard
            key={card.title}
            className="group relative overflow-hidden rounded-[2rem] border-[1.5px] p-8 shadow-[0_4px_32px_rgba(0,0,0,0.04)]"
          >
            <div
              aria-hidden="true"
              className={`absolute left-8 right-8 top-0 h-[2px] rounded-b-full opacity-60 ${styles.solid}`}
            />
            <div className="mb-6 flex h-32 items-center justify-center">
              <OpportunityVisual title={card.title} />
            </div>
            <div className="font-[family:var(--font-display)] text-[2rem] font-bold tracking-[-0.02em] text-[#2D2D2D]">
              {card.value}
            </div>
            <h3 className="mt-1 text-sm font-semibold leading-snug text-[#2D2D2D]">
              {card.title}
            </h3>
          </SurfaceCard>
        );
      })}
    </div>
  );
}
