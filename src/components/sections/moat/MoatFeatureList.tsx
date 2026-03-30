"use client";

// Supporting moat bullet list that explains why the platform is difficult to replicate.
import { LineIcon } from "@/components/common/icons/LineIcons";
import { accentStyles } from "@/components/common/styles/AccentStyles";
import { useInViewOnce } from "@/components/sections/opportunity/useInViewOnce";
import { moatItems } from "@/content/home/moat/MoatContent";

export function MoatFeatureList() {
  const { ref, hasEntered } = useInViewOnce<HTMLDivElement>();

  return (
    <div ref={ref} className="space-y-5">
      {moatItems.map((item, index) => {
        const styles = accentStyles[item.accent];

        return (
          <div
            key={item.title}
            className={`flex gap-4 ${
              hasEntered
                ? "motion-safe:animate-[moat-card-enter_760ms_cubic-bezier(0.22,1,0.36,1)_both]"
                : "opacity-0"
            }`}
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <div
              className={`flex size-10 shrink-0 items-center justify-center rounded-[1.15rem] ${styles.soft} ${styles.text}`}
            >
              <LineIcon name={item.icon} className="size-5" />
            </div>
            <div>
              <h3 className="text-[1.02rem] font-semibold text-[var(--color-ink)]">
                {item.title}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
