"use client";

import { useState } from "react";
import { projectItems } from "../../data/projects";
import ProjectGrid from "./ProjectGrid";

type FilterType = "all" | "fotos" | "videos" | "lives";

export default function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  // Handle filter change with URL update
  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
    // Update URL without navigation
    const url = new URL(window.location.href);
    if (filter === "all") {
      url.searchParams.delete("filter");
    } else {
      url.searchParams.set("filter", filter);
    }
    window.history.replaceState({}, "", url.toString());
  };

  // Filter projects based on content type
  const filteredItems = projectItems.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "fotos") return item.photos.length > 0;
    if (activeFilter === "videos") return item.videos.length > 0;
    if (activeFilter === "lives") return (item.lives?.length || 0) > 0;
    return true;
  });

  return (
    <section className="py-32 px-8 bg-black" id="projetos">
      <div className="max-w-[1800px] mx-auto">
        {/* Section Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter">
              Projetos <span className="text-primary italic">Selecionados</span>
            </h2>
            <p className="mt-4 text-white/50 max-w-md uppercase text-[10px] tracking-widest leading-loose">
              Explorando as fronteiras do cinema comercial e experimental
              através de lentes precisas.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => handleFilterChange("all")}
              className={`text-[10px] font-bold tracking-widest uppercase pb-2 transition-colors ${
                activeFilter === "all"
                  ? "border-b border-primary text-white"
                  : "text-white/40 hover:text-white"
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => handleFilterChange("fotos")}
              className={`text-[10px] font-bold tracking-widest uppercase pb-2 transition-colors ${
                activeFilter === "fotos"
                  ? "border-b border-primary text-white"
                  : "text-white/40 hover:text-white"
              }`}
            >
              Fotos
            </button>
            <button
              onClick={() => handleFilterChange("videos")}
              className={`text-[10px] font-bold tracking-widest uppercase pb-2 transition-colors ${
                activeFilter === "videos"
                  ? "border-b border-primary text-white"
                  : "text-white/40 hover:text-white"
              }`}
            >
              Videos
            </button>
            <button
              onClick={() => handleFilterChange("lives")}
              className={`text-[10px] font-bold tracking-widest uppercase pb-2 transition-colors ${
                activeFilter === "lives"
                  ? "border-b border-primary text-white"
                  : "text-white/40 hover:text-white"
              }`}
            >
              Lives
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <ProjectGrid items={filteredItems} />
      </div>
    </section>
  );
}
