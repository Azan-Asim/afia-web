import Image from "next/image";

import { pageContainerClass } from "@/components/common/layout/PageContainer";

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white py-10">
      <div
        className={`${pageContainerClass} flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left`}
      >
        <div className="flex items-center gap-2">
          <div className="relative h-7 w-7">
            <Image
              src="/logo.svg"
              alt="Afia logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-sm font-semibold text-[#2D2D2D]">
            Afia
          </span>
          <span className="ml-1 text-xs text-[#9CA3AF]">
            — Investor Overview 2026
          </span>
        </div>
        <p className="text-center text-xs text-[#9CA3AF]">
          Confidential. For informational purposes only. Not an offer of securities.
        </p>
        <div className="text-xs text-[#9CA3AF]">
          © 2026 Afia Health
        </div>
      </div>
    </footer>
  );
}
