// Final call-to-action card that encourages contact and reinforces the Afia brand.
import { LineIcon } from "@/components/common/icons/LineIcons";
import {
  gradientCtaClass,
  gradientCtaFocusClass,
  secondaryCtaClass as sharedSecondaryCtaClass,
} from "@/components/common/styles/CtaStyles";
import { useHomeContent } from "@/content/home/useHomeContent";
import { useLocale } from "@/content/i18n/LocaleProvider";

const logoMaskStyle = {
  WebkitMaskImage: "url('/logo.svg')",
  maskImage: "url('/logo.svg')",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  maskPosition: "center",
  WebkitMaskSize: "contain",
  maskSize: "contain",
} as const;

const primaryCtaClass =
  `${gradientCtaClass} ${gradientCtaFocusClass} w-full sm:w-auto sm:min-w-[14.5rem] bg-[linear-gradient(135deg,var(--color-green),var(--color-blue))] px-7 py-3.5 text-[1.02rem] font-semibold shadow-[0_16px_40px_rgba(39,174,96,0.24)] duration-300`;

const secondaryCtaButtonClass =
  `${sharedSecondaryCtaClass} w-full sm:w-auto sm:min-w-[12.4rem] border border-[rgba(39,174,96,0.24)] px-7 py-3.5 text-[1.02rem] font-semibold shadow-[0_8px_24px_rgba(17,24,39,0.04)] duration-300`;

export function ContactCtaCard() {
  const { contact } = useHomeContent();
  const { direction } = useLocale();
  const isRtl = direction === "rtl";

  return (
    <div className="relative overflow-hidden rounded-[2.25rem] border border-[rgba(39,174,96,0.18)] bg-white px-8 py-12 text-center shadow-[0_28px_90px_rgba(39,174,96,0.12)] md:px-14 md:py-16">
      <div className="absolute left-8 right-8 top-0 h-[3px] rounded-b-full bg-[linear-gradient(90deg,var(--color-green),var(--color-blue))]" />

      <div className="mb-6 flex justify-center">
        <div className="flex size-[4.15rem] items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-green),var(--color-blue))] shadow-[0_18px_50px_rgba(39,174,96,0.22)]">
          <span
            aria-hidden="true"
            className="block h-8 w-8 bg-white"
            style={logoMaskStyle}
          />
        </div>
      </div>

      <h2
        className={`mx-auto font-[family:var(--font-display)] font-bold tracking-[-0.04em] text-[var(--color-ink)] ${
          isRtl
            ? "max-w-4xl text-[clamp(1.9rem,3.35vw,3rem)] leading-[1.16]"
            : "max-w-3xl text-[clamp(2.25rem,4vw,3.6rem)] leading-[1.08]"
        }`}
      >
        {contact.heading}
      </h2>
      <p className="mx-auto mt-6 max-w-[36rem] text-[1.02rem] leading-8 text-[#748094]">
        {contact.description}
      </p>

      <div className="mt-9 flex flex-col items-stretch justify-center gap-4 sm:items-center sm:flex-row">
        <a
          href={`mailto:${contact.email}`}
          className={primaryCtaClass}
        >
          <LineIcon name="mail" className="size-4.5 !text-white" />
          {contact.primaryCtaLabel}
        </a>
        <a
          href="#platform"
          className={secondaryCtaButtonClass}
        >
          <LineIcon name="externalLink" className="size-4.5 text-[var(--color-green)]" />
          {contact.secondaryCtaLabel}
        </a>
      </div>

      <p className="mt-9 text-xs font-medium text-[#B0B7C8]">
        {contact.footerNote}
      </p>
    </div>
  );
}
