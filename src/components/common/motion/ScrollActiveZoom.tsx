"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type ScrollActiveZoomProps = {
  children: ReactNode;
  className?: string;
  variant?: "hero" | "story" | "data" | "split" | "cta";
};

export function ScrollActiveZoom({
  children,
  className = "",
  variant = "story",
}: ScrollActiveZoomProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting && entry.intersectionRatio >= 0.26);
      },
      {
        threshold: [0.12, 0.26, 0.4, 0.56, 0.72],
        rootMargin: "-10% 0px -10% 0px",
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      data-scroll-active={isActive ? "true" : "false"}
      data-scroll-variant={variant}
      className={`section-scroll-zoom ${className}`}
    >
      {children}
    </div>
  );
}
