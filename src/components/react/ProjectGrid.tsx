import ProjectCard from "./ProjectCard";

interface MediaItem {
  src: string;
}

interface ProjectItem {
  title: string;
  description: string;
  subtitle: string;
  image: string;
  videos: MediaItem[];
  photos: MediaItem[];
}

interface ProjectGridProps {
  items: ProjectItem[];
}

export default function ProjectGrid({ items }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {items.map((item, index) => (
        <ProjectCard key={index} item={item} index={index} />
      ))}
    </div>
  );
}