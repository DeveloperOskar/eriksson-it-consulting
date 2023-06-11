import { Database } from "@/app/types/supabase";
import Link from "next/link";
import React from "react";

type Blog = Database["public"]["Tables"]["blogs"]["Row"][];

const Blog = async ({ params }: { params: { id: string } }) => {
  let blog: Blog = [];
  try {
    const response = await fetch(
      "http://localhost:3000/api/blog/" + params.id,
      {
        method: "GET",
      }
    );
    const blog = (await response.json()) as Blog[];
  } catch (err) {
    console.log(err);
  }

  if (blog.length === 0) return <div>Blog not found</div>;

  return (
    <main className="container mx-auto flex min-h-[calc(100vh-65px)] flex-col gap-6 px-4 py-4 lg:px-0">
      <Link
        href="/blog"
        className="flex items-center gap-1 hover:text-gray-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
          />
        </svg>
        Tillbaka
      </Link>
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

export default Blog;
