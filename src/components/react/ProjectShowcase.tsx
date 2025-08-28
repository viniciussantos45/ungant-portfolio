"use client";

import HeroSection from "./HeroSection";
import ProjectGrid from "./ProjectGrid";

export default function ProjectShowcase() {
  const projectItems = [
    {
      title: "URBAN FAIRYTALE",
      description: "EVERYDAY SCENES TRANSFORMED INTO MYTHICAL STORIES",
      subtitle: "HINTS OF MAGIC AMONG THE VEGGIE STANDS",
      image: "/projects/first/two.jpg",
      videos: [],
      photos: [
        { src: "/projects/first/two.jpg" },
        { src: "/projects/first/two-alt1.jpg" },
        { src: "/projects/first/two-alt2.jpg" }
      ],
    },
    {
      title: "STREET SERENITY", 
      description: "EVERYDAY MOMENTS BECOME CINEMATIC FRAMES",
      subtitle:
        "SHADOWS AND LIGHT WEAVING A MODERN MYTH SOFTER THAN SILK THE CITY SPEAKS",
      image: "/projects/first/one.jpg",
      videos: [
        { src: "/projects/first/street-serenity.mp4" },
        { src: "/projects/first/street-serenity-alt.mp4" }
      ],
      photos: [
        { src: "/projects/first/one.jpg" }
      ],
    },
    {
      title: "LOST IN THE CROWD",
      description: "SOLITUDE IN THE NOISE", 
      subtitle: "A CALM MOMENT AMONG COUNTLESS FACES",
      image: "/projects/first/three.jpg",
      videos: [],
      photos: [
        { src: "/projects/first/three.jpg" },
        { src: "/projects/first/three-alt1.jpg" },
        { src: "/projects/first/three-alt2.jpg" },
        { src: "/projects/first/three-alt3.jpg" }
      ],
    },
    {
      title: "CITY SOUL",
      description: "MODERN-DAY MUSE, NAVIGATING URBAN LEGENDS",
      subtitle: "BOLD STEPS THROUGH NEON MEMORIES THE CITY IS HER STAGE",
      image: "/projects/first/four.jpg",
      videos: [
        { src: "/projects/first/city-soul-main.mp4" },
        { src: "/projects/first/city-soul-behind-scenes.mp4" }
      ],
      photos: [
        { src: "/projects/first/four.jpg" },
        { src: "/projects/first/four-bts1.jpg" }
      ],
    },
  ];

  return (
    <>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/blurred-street-scene.png')",
          filter: "blur(2px) brightness(0.7)",
        }}
      />

      {/* Main Content */}
      <div className="px-4 lg:px-8 pb-8 relative z-10">
        <HeroSection />
        <ProjectGrid items={projectItems} />
      </div>
    </>
  );
}
