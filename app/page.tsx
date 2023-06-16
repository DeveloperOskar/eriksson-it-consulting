import React from "react";
import { Divider } from "@/app/components/Divider";
import { ProjectsSection } from "@/app/components/index/ProjectsSection";
import { AboutSection } from "@/app/components/index/AboutSection";
import { BlogSection } from "@/app/components/index/BlogSection";
import { Hero } from "@/app/components/index/Hero";
import ContactSection from "./components/index/ContactSection";
import { Database } from "./types/supabase";

interface IndexResponse {
  blog: Database["public"]["Tables"]["blogs"]["Row"][];
  project: Database["public"]["Tables"]["projects"]["Row"][];
}

export default async function Home() {
  const response = await fetch(process.env.ORIGIN + "/api/index", {
    method: "GET",
    next: {
      revalidate: 3600,
    },
  });

  const { blog, project } = (await response.json()) as IndexResponse;

  console.log("blog!!! ", blog);
  console.log("projects!!! ", project);

  return (
    <>
      <main className="container mx-auto snap-y snap-proximity px-4 ">
        <Hero />

        <Divider />

        <BlogSection latestBlog={blog[0]} />

        <Divider />

        <ProjectsSection project={project[0]} />

        <Divider id="about" />

        <AboutSection />

        <Divider id="contact" />

        <ContactSection />
      </main>
    </>
  );
}
