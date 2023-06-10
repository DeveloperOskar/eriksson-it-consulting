"use client";

import { useFadeInOutOnScroll } from "@/app/hooks/useFadeInOutOnScroll";
import { useRef } from "react";

export const BlogSection = () => {
  const blogSection = useRef<HTMLDivElement | null>(null);
  useFadeInOutOnScroll(blogSection);

  return (
    <section
      ref={blogSection}
      className="min-h-[calc(100vh-65px)] transition-opacity duration-500 "
    >
      <p className="text-md text-gray-500 xl:text-xl">Latest article</p>
      <h1 className="text-2xl font-bold uppercase tracking-wide lg:text-3xl xl:text-4xl">
        Blogg
      </h1>

      <p className="text-md mt-4 text-gray-500 xl:text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti
        asperiores mollitia natus voluptatibus voluptates? Quaerat deserunt
        placeat ratione esse ullam eligendi numquam ipsa nihil tenetur, id, fuga
        excepturi rerum. Quaerat deserunt placeat ratione esse ullam eligendi
        numquam ipsa nihil tenetur, id, fuga excepturi rerum. Lorem ipsum, dolor
        sit amet consectetur adipisicing elit.
      </p>

      <video height="auto" width="100%" controls className="mt-6">
        <source
          src="https://www.youtube.com/embed/g5V6koptSXs"
          type="video/mp4"
        />
      </video>

      <p className="text-md mt-2 text-gray-500 xl:text-lg">
        Hitta mer att läsa
        <span className="font-bold text-black underline">här</span>
      </p>
    </section>
  );
};
