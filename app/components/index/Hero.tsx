"use client";
import { useFadeInOutOnScroll } from "@/app/hooks/useFadeInOutOnScroll";
import { useRef } from "react";

export const Hero = () => {
  const hero = useRef<HTMLDivElement | null>(null);
  useFadeInOutOnScroll(hero);

  return (
    <section
      className="min-h-[calc(100vh-65px)] transition-opacity duration-500 lg:flex lg:flex-row-reverse lg:items-center"
      ref={hero}
    >
      <img
        sizes="(max-width: 1024px) 100vw, 50vw"
        id="hero-img"
        srcSet="hero_sm.webp 380w, 
        hero_md.webp 600w, 
        hero_lg.webp 1000w"
        className="mx-auto min-h-[300px] w-auto min-w-[300px] grow animate-fade-in md:max-h-[50vh] lg:max-h-none 2xl:pr-20"
        src={"hero_xl.webp"}
        alt="a photo of Oskar Eriksson"
        width={300}
        height={300}
      />

      <div className="mt-4 flex shrink animate-fade-in flex-col lg:max-w-[500px] xl:max-w-[650px]">
        <p className="text-md text-gray-500 xl:text-xl">Oskar Eriksson</p>
        <h1 className="text-2xl font-bold uppercase tracking-wide lg:text-4xl xl:text-5xl">
          Eriksson solutions
        </h1>
        <p className="text-md mt-4 text-gray-500 xl:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          deleniti asperiores mollitia natus voluptatibus voluptates? Quaerat
          deserunt placeat ratione esse ullam eligendi numquam ipsa nihil
          tenetur, id, fuga excepturi rerum. Quaerat deserunt placeat ratione
          esse ullam eligendi numquam ipsa nihil tenetur, id, fuga excepturi
          rerum. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>

        <p className="text-md mt-2 text-gray-500 xl:text-lg">
          Kontakta mig{" "}
          <span className="font-bold text-black underline">här</span> eller läs
          mer <span className="font-bold text-black underline">här</span>
        </p>
      </div>
    </section>
  );
};
