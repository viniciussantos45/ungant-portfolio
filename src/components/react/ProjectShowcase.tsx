"use client";

import HeroSection from "./HeroSection";
import ProjectGrid from "./ProjectGrid";
import { projectItems } from "../../data/projects";

export default function ProjectShowcase() {

  return (
    <>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        // style={{
        //   backgroundImage: "url('/blurred-street-scene.png')",
        //   filter: "blur(2px) brightness(0.7)",
        // }}
      />

      {/* Main Content */}
      <div className="px-4 lg:px-8 pb-8 relative z-10">
        <HeroSection />
        <ProjectGrid items={projectItems} />
      </div>
    </>
  );
}
