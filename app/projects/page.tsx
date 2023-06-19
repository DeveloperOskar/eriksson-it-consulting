import React from "react";
import BackButton from "../components/BackButton";
import Link from "next/link";
import { Database } from "../types/supabase";

type Project = Omit<
  Database["public"]["Tables"]["projects"]["Row"],
  "image_name"
>;

interface Response extends Project {
  url: string;
}

const Projects = async () => {
  const response = await fetch(process.env.ORIGIN! + "/api/projects", {
    method: "GET",
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) return <div>404</div>;

  const data = (await response.json()) as Response[];

  if (!data) return <div>404</div>;

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-70px)] flex-col gap-6 p-4 lg:px-0">
      <BackButton href="/" />

      <main>
        <h1 className=" text-2xl font-bold uppercase tracking-wide lg:text-3xl xl:text-4xl">
          Projects
        </h1>

        <div className="my-5 grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:grid-cols-3">
          {data.map((p) => (
            <ProjectArticle
              name={p.name!}
              updatedAt={p.updated_at!}
              description={p.text!}
              url={p.url}
              id={p.id!}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;

const ProjectArticle: React.FC<{
  name: string;
  updatedAt: string;
  description: string;
  url: string;
  id: number;
}> = ({ name, description, updatedAt, url, id }) => {
  return (
    <article className="relative flex flex-col rounded border p-4 shadow">
      <h2 className="text-xl font-semibold">{name}</h2>
      <img src={url} alt="image" className=" my-4 h-72 object-cover" />

      <p className="py-4 text-sm text-gray-700">
        {description.substring(0, 500)}...
      </p>

      <p className="absolute bottom-4 left-4 text-xs tracking-wide">
        Updaterad: {new Date(updatedAt).toLocaleDateString()}
      </p>

      <Link
        href={"/projects/" + id}
        className="ml-auto text-sm text-blue-600 hover:text-blue-800 hover:underline"
      >
        Läs mer här
      </Link>
    </article>
  );
};
