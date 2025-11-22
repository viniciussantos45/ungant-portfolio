import { ArrowUpRightIcon as ArrowUpRight } from "@phosphor-icons/react";
import { type ProjectItem } from "../../data/projects";

interface ProjectCardProps {
  item: ProjectItem;
  index: number;
}

export default function ProjectCard({ item, index }: ProjectCardProps) {
  const handleClick = () => {
    window.location.href = `/gallery/${item.id}`;
  };

  return (
    <div key={index} className="group cursor-pointer" onClick={handleClick}>
      <div className="relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02]">
        <div className="aspect-[3/4] relative">
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 transition-colors duration-300" />

          {/* Arrow Icon */}
          <div className="absolute top-4 right-4 w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:bg-yellow-300 transition-all duration-300 group-hover:scale-110 shadow-md">
            <ArrowUpRight className="w-6 h-6 text-black" weight="bold" />
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white transform transition-transform duration-300 group-hover:translate-y-0">
            <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">{item.title}</h3>
            <p className="text-sm md:text-base opacity-90 leading-relaxed mb-2">
              {item.description}
            </p>
            <p className="text-xs md:text-sm opacity-75 leading-relaxed">{item.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}