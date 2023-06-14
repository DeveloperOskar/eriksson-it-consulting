"use client";

import { useFadeInOutOnScroll } from "@/app/hooks/useFadeInOutOnScroll";
import React, { useRef } from "react";

const IndexSection: React.FC<{
  children: React.ReactNode;
  subTitle: string;
  title: string;
}> = ({ children, title, subTitle }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useFadeInOutOnScroll(ref);

  return (
    <section
      className="min-h-[calc(100vh-65px)] opacity-0 transition-opacity duration-500"
      ref={ref}
    >
      <p className="text-md text-gray-500 lg:max-w-[80%] xl:text-xl">
        {subTitle}
      </p>
      <h1 className="text-2xl font-bold uppercase tracking-wide lg:max-w-[80%] lg:text-3xl xl:text-4xl">
        {title}
      </h1>

      {children}
    </section>
  );
};

export default IndexSection;
