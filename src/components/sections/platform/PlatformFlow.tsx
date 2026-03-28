import { LineIcon } from "@/components/common/icons/LineIcons";
import { accentStyles } from "@/components/common/styles/AccentStyles";
import { platformSteps } from "@/content/home/platform/PlatformContent";

export function PlatformFlow() {
  return (
    <div className="mt-16">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        {platformSteps.map((step, index) => {
          const styles = accentStyles[step.accent];

          return (
            <div
              key={step.title}
              className="flex w-full flex-col items-center gap-4 md:flex-1 md:flex-row"
            >
              <div
                className={`relative w-full min-w-0 flex-1 rounded-[1.75rem] p-6 text-center shadow-[0_4px_16px_rgba(0,0,0,0.04)] motion-safe:animate-[platform-flow-enter_760ms_cubic-bezier(0.22,1,0.36,1)_both] ${
                  step.featured
                    ? "border-[1.5px] border-[rgba(139,92,246,0.22)] bg-[linear-gradient(135deg,rgba(139,92,246,0.07),rgba(139,92,246,0.024))] shadow-[0_8px_32px_rgba(139,92,246,0.09)]"
                    : "border-[1.5px] border-black/6 bg-white"
                }`}
                style={{ animationDelay: `${index * 0.34}s` }}
              >
                {step.featured ? (
                  <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-[1.75rem] bg-[linear-gradient(90deg,transparent,rgba(139,92,246,1),transparent)]" />
                ) : null}

                <div
                  className={`mx-auto mb-3 flex size-12 items-center justify-center rounded-xl ${styles.soft} ${styles.text}`}
                >
                  <LineIcon name={step.icon} className="size-6" />
                </div>
                <h3 className="text-xs font-semibold text-[#2D2D2D]">
                  {step.title}
                </h3>
                <p className="mt-1 text-[10px] text-[#9CA3AF]">
                  {step.subtitle}
                </p>

                {step.featured ? (
                  <div className="mt-2 inline-flex rounded-full bg-[rgba(139,92,246,0.082)] px-2 py-0.5 text-[9px] font-bold text-[var(--color-purple)] motion-safe:animate-[platform-feature-chip_3s_ease-in-out_infinite]">
                    Afia Layer
                  </div>
                ) : null}
              </div>

              {index < platformSteps.length - 1 ? (
                <div className="hidden items-center md:flex">
                  <LineIcon
                    name="chevronRight"
                    className="size-5 text-[#9CA3AF] motion-safe:animate-[platform-arrow-travel_2.2s_ease-in-out_infinite]"
                    style={{ animationDelay: `${index * 0.24}s` }}
                  />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
