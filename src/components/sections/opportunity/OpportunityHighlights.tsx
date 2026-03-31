// Highlight cards that quantify the market opportunity and unmet user need.
import { accentStyles } from "@/components/common/styles/AccentStyles";
import { SurfaceCard } from "@/components/common/ui/SurfaceCard";
import { useHomeContent } from "@/content/home/useHomeContent";
import { useLocale } from "@/content/i18n/LocaleProvider";
import type { OpportunityCardId } from "@/content/home/opportunity/OpportunityTypes";

import { InterpretationGapCardVisual } from "./InterpretationGapCardVisual";
import { MarketGrowthCardVisual } from "./MarketGrowthCardVisual";
import { WearablesCardVisual } from "./WearablesCardVisual";

function OpportunityVisual({ cardId }: { cardId: OpportunityCardId }) {
  if (cardId === "wearablesBy2028") {
    return <WearablesCardVisual />;
  }

  if (cardId === "digitalHealthMarket") {
    return <MarketGrowthCardVisual />;
  }

  return <InterpretationGapCardVisual />;
}

export function OpportunityHighlights() {
  const { opportunity } = useHomeContent();
  const { direction } = useLocale();
  const isRtl = direction === "rtl";

  return (
    <div className="mt-16 grid gap-6 md:grid-cols-3">
      {opportunity.cards.map((card) => {
        const styles = accentStyles[card.accent];

        return (
          <SurfaceCard
            key={card.id}
            className="group relative overflow-hidden rounded-[2rem] border-[1.5px] p-8 shadow-[0_4px_32px_rgba(0,0,0,0.04)]"
          >
            <div
              aria-hidden="true"
              className={`absolute left-8 right-8 top-0 h-[2px] rounded-b-full opacity-60 ${styles.solid}`}
            />
            <div className="mb-6 flex h-32 items-center justify-center">
              <OpportunityVisual cardId={card.id} />
            </div>
            <div className="font-[family:var(--font-display)] text-[2rem] font-bold tracking-[-0.02em] text-[#2D2D2D]">
              {card.value}
            </div>
            <h3
              className={`mt-1 font-semibold text-[#2D2D2D] ${
                isRtl
                  ? "text-[0.88rem] leading-6 tracking-[-0.02em]"
                  : "text-sm leading-snug"
              }`}
            >
              {card.title}
            </h3>
            <p
              className={`mt-2 text-[#6B7280] ${
                isRtl
                  ? "text-[0.92rem] leading-7 tracking-[-0.01em]"
                  : "text-sm leading-6"
              }`}
            >
              {card.description}
            </p>
          </SurfaceCard>
        );
      })}
    </div>
  );
}
