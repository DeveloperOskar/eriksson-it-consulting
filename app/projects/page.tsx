import React from "react";
import BackButton from "../components/BackButton";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-70px)] flex-col gap-6 p-4 lg:px-0">
      <BackButton href="/" />

      <main>
        <h1 className=" text-2xl font-bold uppercase tracking-wide lg:text-3xl xl:text-4xl">
          Projects
        </h1>

        <div className="my-5 grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:grid-cols-3">
          <article className="relative flex flex-col rounded border p-4 shadow">
            <h2 className="text-xl font-semibold">{" sdfsd sdfsdfsd "}</h2>

            <p className="py-4 text-sm text-gray-700">{" dfsg dfggd df"}</p>

            <p className="absolute bottom-4 left-4 text-xs tracking-wide">
              Updaterad: {"xxxx-xx-xx"}
            </p>

            <Link
              href={"/blog/" + 1}
              className="ml-auto text-sm text-blue-600 hover:text-blue-800 hover:underline"
            >
              Läs mer här
            </Link>
          </article>
        </div>
      </main>
    </div>
  );
};

export default Projects;
