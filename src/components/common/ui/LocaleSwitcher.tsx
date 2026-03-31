import type { SupportedLocale } from "@/content/i18n/Config";

type LocaleOption = {
  value: SupportedLocale;
  label: string;
};

type LocaleSwitcherProps = {
  locale: SupportedLocale;
  label: string;
  options: LocaleOption[];
  onChange: (locale: SupportedLocale) => void;
  fullWidth?: boolean;
};

export function LocaleSwitcher({
  locale,
  label,
  options,
  onChange,
  fullWidth = false,
}: LocaleSwitcherProps) {
  return (
    <div
      className={`h-[42px] rounded-full border border-black/6 bg-white/80 p-0.5 shadow-[0_12px_30px_rgba(17,24,39,0.06)] backdrop-blur-xl ${
        fullWidth ? "w-full" : "inline-flex"
      }`}
      role="group"
      aria-label={label}
    >
      <div className={`grid h-full gap-0.5 ${fullWidth ? "w-full grid-cols-2" : "grid-cols-2"}`}>
        {options.map((option) => {
          const isActive = option.value === locale;

          return (
            <button
              key={option.value}
              type="button"
              className={`inline-flex h-full min-w-[4.25rem] items-center justify-center rounded-full px-3 py-1.5 text-[0.85rem] font-medium leading-[1] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-green)] ${
                isActive
                  ? "bg-[linear-gradient(135deg,var(--color-green),var(--color-blue))] text-white shadow-[0_10px_24px_rgba(39,174,96,0.24)]"
                  : "text-[var(--color-muted)] hover:bg-[var(--color-green-soft)] hover:text-[var(--color-green)]"
              }`}
              aria-pressed={isActive}
              onClick={() => {
                if (!isActive) {
                  onChange(option.value);
                }
              }}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
