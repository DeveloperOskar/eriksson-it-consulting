import React from "react";
import { Divider } from "@/app/components/Divider";
import { ProjectsSection } from "@/app/components/index/ProjectsSection";
import { AboutSection } from "@/app/components/index/AboutSection";
import { BlogSection } from "@/app/components/index/BlogSection";
import { Hero } from "@/app/components/index/Hero";
import ContactSection from "./components/index/ContactSection";
import { Database } from "./types/supabase";
import Testimonials from "./components/index/Testimonials";

interface IndexResponse {
  blog: Database["public"]["Tables"]["blogs"]["Row"][];
  project: Database["public"]["Tables"]["projects"]["Row"][];
  projectLatestImage: string;
}

export default async function Home() {
  const response = await fetch(process.env.ORIGIN + "/api/index", {
    method: "GET",
    next: {
      revalidate: 3600,
    },
  });

  const { blog, project, projectLatestImage } =
    (await response.json()) as IndexResponse;

  console.log("image url: ", projectLatestImage);

  return (
    <>
      <main className="container mx-auto snap-y snap-proximity px-4 ">
        <Hero />

        <Divider />

        <BlogSection latestBlog={blog[0]} />

        <Divider />

        <ProjectsSection
          project={project[0]}
          latestImageUrl={projectLatestImage}
        />

        <Divider id="about" />

        <AboutSection />

        <Divider id="contact" />

        <Testimonials />

        <Divider id="contact" />

        <ContactSection />
      </main>
    </>
  );
}
