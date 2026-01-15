"use client";

import { useState } from "react";
import ProjectGrid from "./ProjectGrid";
import { projectItems } from "../../data/projects";

type FilterType = "all" | "comercial" | "evento";

export default function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  // Filter projects based on category (you can customize the filtering logic)
  const filteredItems = projectItems.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "comercial") {
      return item.title.includes("HEINZ") ||
             item.title.includes("CHEVROLET") ||
             item.title.includes("CORPORATIVO");
    }
    if (activeFilter === "evento") {
      return item.title.includes("AFTERMOVIE");
    }
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
              onClick={() => setActiveFilter("all")}
              className={`text-[10px] font-bold tracking-widest uppercase pb-2 transition-colors ${
                activeFilter === "all"
                  ? "border-b border-primary text-white"
                  : "text-white/40 hover:text-white"
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setActiveFilter("comercial")}
              className={`text-[10px] font-bold tracking-widest uppercase pb-2 transition-colors ${
                activeFilter === "comercial"
                  ? "border-b border-primary text-white"
                  : "text-white/40 hover:text-white"
              }`}
            >
              Comercial
            </button>
            <button
              onClick={() => setActiveFilter("evento")}
              className={`text-[10px] font-bold tracking-widest uppercase pb-2 transition-colors ${
                activeFilter === "evento"
                  ? "border-b border-primary text-white"
                  : "text-white/40 hover:text-white"
              }`}
            >
              Evento
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <ProjectGrid items={filteredItems} />
      </div>
    </section>
  );
}
