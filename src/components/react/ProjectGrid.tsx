import ProjectCard from "./ProjectCard";
import { type ProjectItem } from "../../data/projects";

interface ProjectGridProps {
  items: ProjectItem[];
}

export default function ProjectGrid({ items }: ProjectGridProps) {
  // Assign variants to create visual interest in the masonry grid
  const getVariant = (index: number): "tall" | "wide" | "square" => {
    // Pattern: tall, wide, square, square, wide, square...
    const patterns = ["tall", "wide", "square", "square", "wide", "square"] as const;
    return patterns[index % patterns.length];
  };

  return (
    <div id="projects-grid" className="masonry-grid scroll-mt-24">
      {items.map((item, index) => (
        <ProjectCard
          key={item.id}
          item={item}
          index={index}
          variant={getVariant(index)}
        />
      ))}
    </div>
  );
}
