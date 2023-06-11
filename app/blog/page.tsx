import React from "react";
import { Database } from "@/app/types/supabase";
import Link from "next/link";
import BackButton from "../components/BackButton";

const Page = async () => {
  const response = await fetch(process.env.ORIGIN + "/api/blog", {
    method: "GET",
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) return <div>404</div>;

  const data =
    (await response.json()) as Database["public"]["Tables"]["blogs"]["Row"][];

  return (
    <div className="container mx-auto flex flex-col gap-6 p-4 lg:px-0">
      <BackButton href="/" />

      <main>
        <h1 className=" text-2xl font-bold uppercase tracking-wide lg:text-3xl xl:text-4xl">
          Blog
        </h1>

        <div className="my-5 grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:grid-cols-3">
          {data.map((blog) => (
            <article className="relative flex flex-col rounded border p-4 shadow">
              <h2 className="text-xl font-semibold">{blog.name}</h2>

              <p className="py-4 text-sm text-gray-700">{blog.text}</p>

              <p className="absolute bottom-4 left-4 text-xs tracking-wide">
                Updaterad: {new Date(blog.updated_at!).toLocaleString()}
              </p>

              <Link
                href={"/blog/" + blog.id}
                className="ml-auto text-sm text-blue-600 hover:text-blue-800 hover:underline"
              >
                Läs mer här
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Page;
