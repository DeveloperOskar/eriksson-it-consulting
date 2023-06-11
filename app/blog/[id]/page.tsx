import BackButton from "@/app/components/BackButton";
import { Database } from "@/app/types/supabase";
import Link from "next/link";
import React from "react";

const Page = async ({ params }: { params: { id: string } }) => {
  const response = await fetch(process.env.ORIGIN + "/api/blog/" + params.id, {
    method: "GET",
    next: {
      revalidate: 3600,
    },
  });

  const blog =
    (await response.json()) as Database["public"]["Tables"]["blogs"]["Row"][];

  return (
    <main className="container mx-auto flex min-h-[calc(100vh-65px)] flex-col gap-6 px-4 py-4 lg:px-0">
      <BackButton href="/blog" />
      <h1 className=" text-2xl font-bold uppercase tracking-wide lg:text-3xl xl:text-4xl">
        {blog[0].name}
      </h1>

      <iframe
        className=" mx-auto aspect-video w-full max-w-[700px]"
        src="https://www.youtube.com/embed/rtgjFEJaFI8"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>

      <p>{blog[0].text}</p>
    </main>
  );
};

export default Page;
