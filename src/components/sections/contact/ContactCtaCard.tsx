// Final call-to-action card that encourages contact and reinforces the Afia brand.
import { LineIcon } from "@/components/common/icons/LineIcons";
import {
  gradientCtaClass,
  gradientCtaFocusClass,
  secondaryCtaClass as sharedSecondaryCtaClass,
} from "@/components/common/styles/CtaStyles";
import { contactEmail } from "@/content/home/contact/ContactContent";

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
  `${gradientCtaClass} ${gradientCtaFocusClass} min-w-[14.5rem] bg-[linear-gradient(135deg,var(--color-green),var(--color-blue))] px-7 py-3.5 text-[1.02rem] font-semibold shadow-[0_16px_40px_rgba(39,174,96,0.24)] duration-300`;

const secondaryCtaButtonClass =
  `${sharedSecondaryCtaClass} min-w-[12.4rem] border border-[rgba(39,174,96,0.24)] px-7 py-3.5 text-[1.02rem] font-semibold shadow-[0_8px_24px_rgba(17,24,39,0.04)] duration-300`;

export function ContactCtaCard() {
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

      <h2 className="mx-auto max-w-3xl font-[family:var(--font-display)] text-[clamp(2.25rem,4vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.04em] text-[var(--color-ink)]">
        Ready to Explore the AI Opportunity?
      </h2>
      <p className="mx-auto mt-6 max-w-[36rem] text-[1.02rem] leading-8 text-[#748094]">
        Strategic conversations open with aligned investors and partners.
      </p>

      <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href={`mailto:${contactEmail}`}
          className={primaryCtaClass}
        >
          <LineIcon name="mail" className="size-4.5 !text-white" />
          Contact Afia Team
        </a>
        <a
          href="#platform"
          className={secondaryCtaButtonClass}
        >
          <LineIcon name="externalLink" className="size-4.5 text-[var(--color-green)]" />
          View Platform
        </a>
      </div>

      <p className="mt-9 text-xs font-medium text-[#B0B7C8]">
        Confidential. Full deck available upon request.
      </p>
    </div>
  );
}
