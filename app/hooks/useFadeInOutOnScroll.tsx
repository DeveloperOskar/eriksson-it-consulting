"use client";

import { RefObject, useEffect } from "react";

export const useFadeInOutOnScroll = (ref: RefObject<HTMLElement>) => {
  const isInViewport = (offset: number) => {
    const rect = ref.current!.getBoundingClientRect();
    return (
      rect.top >= -offset &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) +
          offset &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const handleScroll = () => {
    if (!ref.current) return;

    const screenHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const twentyPercent = screenHeight * 0.45;
    if (isInViewport(twentyPercent)) {
      ref.current!.style.opacity = "1";
    } else {
      ref.current!.style.opacity = "0";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);
};
