import React from "react";
import { Divider } from "@/app/components/Divider";
import { ProjectsSection } from "@/app/components/index/ProjectsSection";
import { AboutSection } from "@/app/components/index/AboutSection";
import { BlogSection } from "@/app/components/index/BlogSection";
import { Hero } from "@/app/components/index/Hero";
import ContactSection from "./components/index/ContactSection";
import { Database } from "./types/supabase";

export default async function Home() {
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
    <>
      <main className="container mx-auto snap-y snap-proximity px-4 ">
        <Hero />

        <Divider />

        <BlogSection latestBlog={data[0]} />

        <Divider />

        <ProjectsSection />

        <Divider id="about" />

        <AboutSection />

        <Divider id="contact" />

        <ContactSection />
      </main>
    </>
  );
}
