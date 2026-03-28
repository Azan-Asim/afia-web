import { LineIcon } from "@/components/common/icons/LineIcons";
import { contactEmail } from "@/content/home/contact/ContactContent";

export function ContactCtaCard() {
  return (
    <div className="relative overflow-hidden rounded-[2.25rem] border border-[rgba(39,174,96,0.18)] bg-white px-8 py-12 text-center shadow-[0_28px_90px_rgba(39,174,96,0.12)] md:px-14 md:py-16">
      <div className="absolute left-8 right-8 top-0 h-[3px] rounded-b-full bg-[linear-gradient(90deg,var(--color-green),var(--color-blue))]" />

      <div className="mb-6 flex justify-center">
        <div className="flex size-[4.15rem] items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-green),var(--color-blue))] shadow-[0_18px_50px_rgba(39,174,96,0.22)]">
          <span
            aria-hidden="true"
            className="block h-8 w-8 bg-white"
            style={{
              WebkitMaskImage: "url('/Logo.svg')",
              maskImage: "url('/Logo.svg')",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              WebkitMaskSize: "contain",
              maskSize: "contain",
            }}
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
          className="inline-flex min-w-[14.5rem] items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--color-green),var(--color-blue))] px-7 py-3.5 text-[1.02rem] font-semibold text-white shadow-[0_16px_40px_rgba(39,174,96,0.24)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-blue)] focus-visible:ring-offset-2"
        >
          <LineIcon name="mail" className="size-4.5" />
          Contact Afia Team
        </a>
        <a
          href="#platform"
          className="inline-flex min-w-[12.4rem] items-center justify-center gap-2 rounded-full border border-[rgba(39,174,96,0.24)] bg-white px-7 py-3.5 text-[1.02rem] font-semibold text-[var(--color-ink)] shadow-[0_8px_24px_rgba(17,24,39,0.04)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-green)] focus-visible:ring-offset-2"
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
