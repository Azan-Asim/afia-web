"use client";

// Shared viewport observer hook used to trigger section animations when content enters view.
import { useEffect, useRef, useState } from "react";

export function useInViewOnce<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [hasEntered, setHasEntered] = useState(false);
  // Components use `cycle` to replay entrance animations whenever they re-enter view.
  const [cycle, setCycle] = useState(0);
  const wasActiveRef = useRef(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isActive = Boolean(entry?.isIntersecting);

        // Bump the cycle only when the section re-enters the active viewport zone.
        if (isActive && !wasActiveRef.current) {
          setCycle((current) => current + 1);
        }

        // `hasEntered` acts as the current active state for replayable animations.
        wasActiveRef.current = isActive;
        setHasEntered(isActive);
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { ref, hasEntered, isActive: hasEntered, cycle };
}
