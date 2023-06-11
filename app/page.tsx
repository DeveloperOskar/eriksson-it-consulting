import React from "react";
import { Navbar } from "@/app/components/Navbar";
import { Divider } from "@/app/components/Divider";
import { Footer } from "@/app/components/Footer";
import { ProjectsSection } from "@/app/components/index/ProjectsSection";
import { AboutSection } from "@/app/components/index/AboutSection";
import { BlogSection } from "@/app/components/index/BlogSection";
import { Hero } from "@/app/components/index/Hero";
import ContactSection from "./components/index/ContactSection";

export default function Home() {
  return (
    <>
      <main className="container mx-auto snap-y snap-proximity px-4">
        <Hero />

        <Divider />

        <BlogSection />

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
