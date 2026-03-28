import { ContactCtaCard } from "./ContactCtaCard";
import { ScrollActiveZoom } from "@/components/common/motion/ScrollActiveZoom";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[8%] size-[34rem] -translate-x-1/2 rounded-full bg-[rgba(39,174,96,0.16)] blur-[90px]"
      />
      <div
        aria-hidden="true"
        className="absolute left-[18%] top-[22%] size-[18rem] rounded-full bg-[rgba(45,156,219,0.08)] blur-[80px]"
      />
      <div
        aria-hidden="true"
        className="absolute right-[16%] top-[68%] size-[16rem] rounded-full bg-[rgba(245,158,11,0.07)] blur-[80px]"
      />
      <ScrollActiveZoom variant="cta" className="mx-auto max-w-5xl px-6 lg:px-10">
        <ContactCtaCard />
      </ScrollActiveZoom>
    </section>
  );
}
