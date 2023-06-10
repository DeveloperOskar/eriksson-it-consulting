"use client";
import { useFadeInOutOnScroll } from "@/app/hooks/useFadeInOutOnScroll";
import React, { useRef } from "react";

const ContactSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useFadeInOutOnScroll(ref);

  return (
    <section
      ref={ref}
      className="min-h-[calc(100vh-65px)] opacity-0 transition-opacity duration-500 "
    >
      <p className="text-md text-gray-500 xl:text-xl">Nå mig</p>
      <h1 className="text-2xl font-bold uppercase tracking-wide lg:text-3xl xl:text-4xl">
        Kontakt
      </h1>
    </section>
  );
};

export default ContactSection;
