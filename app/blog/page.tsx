import React from "react";
import { Database } from "../types/supabase";

const Blog = async () => {
  const response = await fetch("http://localhost:3000/api/blog", {
    next: {
      revalidate: 3600, //1 hour
    },
  });
  const data =
    (await response.json()) as Database["public"]["Tables"]["blogs"]["Row"][];
  console.log(data);

  return (
    <div className="container mx-auto flex gap-6">
      <nav>
        {data.map((d) => (
          <p key={d.id}>{d.name}</p>
        ))}
      </nav>
      <main>content</main>
    </div>
  );
};

export default Blog;
