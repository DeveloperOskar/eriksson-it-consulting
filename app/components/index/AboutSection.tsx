"use client";

import { useFadeInOutOnScroll } from "@/app/hooks/useFadeInOutOnScroll";
import { useRef } from "react";

export const AboutSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useFadeInOutOnScroll(ref);
  return (
    <section
      className="min-h-[calc(100vh-65px)] transition-opacity duration-500 "
      ref={ref}
    >
      <p className="text-md text-gray-500 xl:text-xl">Information</p>
      <h1 className="text-2xl font-bold uppercase tracking-wide lg:text-3xl xl:text-4xl">
        Om mig
      </h1>
    </section>
  );
};
