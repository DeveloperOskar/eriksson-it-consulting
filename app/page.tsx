import React from "react";
import { Navbar } from "@/app/components/Navbar";
import { Divider } from "@/app/components/Divider";
import { Footer } from "@/app/components/Footer";
import { ProjectsSection } from "@/app/components/index/ProjectsSection";
import { AboutSection } from "@/app/components/index/AboutSection";
import { BlogSection } from "@/app/components/index/BlogSection";
import { Hero } from "@/app/components/index/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="container mx-auto px-4">
        <Hero />

        <Divider />

        <BlogSection />

        <Divider />

        <ProjectsSection />

        <Divider />

        <AboutSection />
      </main>

      <Footer />
    </>
  );
}
