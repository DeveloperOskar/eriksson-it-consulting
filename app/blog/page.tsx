import React from "react";
import Link from "next/link";

export default async function Blog() {
  const response = await fetch("http://localhost:3000/api/blog", {
    method: "GET",
  });
  const data = (await response.json()) as any[];

  return (
    <div className="container mx-auto flex flex-col gap-6 ">
      <main className="p-4 lg:px-0">
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
}
