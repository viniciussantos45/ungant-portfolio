import ProjectCard from "./ProjectCard";
import { type ProjectItem } from "../../data/projects";

interface ProjectGridProps {
  items: ProjectItem[];
}

export default function ProjectGrid({ items }: ProjectGridProps) {
  return (
    <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto scroll-mt-24">
      {items.map((item, index) => (
        <ProjectCard key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}