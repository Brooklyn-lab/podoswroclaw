import { useCallback, useState, useEffect, useLayoutEffect } from "react";

// @TODO these breakpoints used in the project src/theme/baseTheme.ts
const breakpoints = {
  xs: 932,
  sm: 933,
  md: 992,
  lg: 1440,
};

export const useIsomorphicEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

export function matchMediaFallback(query: string) {
  const mediaQueryList = window.matchMedia(query);

  return {
    matches: mediaQueryList.matches,
    media: mediaQueryList.media,
    addEventListener: (listener: (e: MediaQueryListEvent) => void) => {
      if (typeof mediaQueryList.addEventListener === "function") {
        mediaQueryList.addEventListener("change", listener);
      } else {
        mediaQueryList.addListener(listener);
      }
    },
    removeEventListener: (listener: (e: MediaQueryListEvent) => void) => {
      if (typeof mediaQueryList.removeEventListener === "function") {
        mediaQueryList.removeEventListener("change", listener);
      } else {
        mediaQueryList.removeListener(listener);
      }
    },
  };
}

export function useMediaQuery(query: "lg" | "md" | "sm" | "xs" | number) {
  const [match, setMatch] = useState(false);
  const breakpoint = typeof query === "number" ? query : breakpoints[query];

  const listener = useCallback((e: MediaQueryListEvent) => {
    setMatch(e.matches);
  }, []);

  useIsomorphicEffect(() => {
    if (typeof window !== "undefined") {
      const mql = matchMediaFallback(`(max-width: ${breakpoint}px)`);

      setMatch(mql.matches);

      mql.addEventListener(listener);

      return () => mql.removeEventListener(listener);
    }
  }, [breakpoint, listener, query]);

  return match;
}
