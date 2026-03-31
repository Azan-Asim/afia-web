"use client";

// Shared viewport observer hook used to trigger section animations when content enters view.
import { useEffect, useRef, useState } from "react";

export function useInViewOnce<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  // Components use `cycle` to replay entrance animations whenever they re-enter view.
  const [cycle, setCycle] = useState(0);
  const wasActiveRef = useRef(false);
  const hasEnteredRef = useRef(false);
  const replayFrameRef = useRef<number | null>(null);

  useEffect(() => {
    hasEnteredRef.current = hasEntered;
  }, [hasEntered]);

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

          if (hasEnteredRef.current) {
            // Briefly reset the flag so CSS entrance animations can replay on re-entry
            // without keeping the section hidden after it leaves the viewport.
            setHasEntered(false);
            if (replayFrameRef.current !== null) {
              window.cancelAnimationFrame(replayFrameRef.current);
            }
            replayFrameRef.current = window.requestAnimationFrame(() => {
              setHasEntered(true);
              replayFrameRef.current = null;
            });
          } else {
            setHasEntered(true);
          }
        }

        // Keep `hasEntered` sticky after the first reveal and expose live viewport activity separately.
        wasActiveRef.current = isActive;
        setIsActive(isActive);
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -5% 0px",
      },
    );

    observer.observe(ref.current);

    return () => {
      if (replayFrameRef.current !== null) {
        window.cancelAnimationFrame(replayFrameRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return { ref, hasEntered, isActive, cycle };
}
