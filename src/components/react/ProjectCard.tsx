import { ArrowUpRightIcon as ArrowUpRight } from "@phosphor-icons/react";
import { type ProjectItem } from "../../data/projects";
import { useState } from "react";

interface ProjectCardProps {
  item: ProjectItem;
  index: number;
}

export default function ProjectCard({ item, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.location.href = `/gallery/${item.id}`;
  };

  return (
    <div
      key={index}
      className="group cursor-pointer animate-fadeInUp opacity-0"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.03] group-hover:-translate-y-2">
        <div className="aspect-[3/4] relative">
          {/* Image with Ken Burns Effect */}
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
          />

          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 group-hover:via-black/50 transition-all duration-500" />

          {/* Shimmer Effect on Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
          </div>

          {/* Arrow Icon with Rotation */}
          <div className="absolute top-4 right-4 w-10 h-10 bg-primary rounded-lg flex items-center justify-center transition-all duration-500 group-hover:bg-yellow-300 group-hover:scale-110 group-hover:rotate-45 shadow-md">
            <ArrowUpRight className="w-6 h-6 text-black transition-transform duration-500 group-hover:-rotate-45" weight="bold" />
          </div>

          {/* Decorative Corner Element */}
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-primary/20 rounded-tl-full transform translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />

          {/* Content with Staggered Animation */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight transform transition-all duration-500 group-hover:translate-x-1">
              {item.title}
            </h3>
            <div className="transform transition-all duration-500 delay-75 group-hover:translate-x-2">
              <p className="text-sm md:text-base opacity-90 leading-relaxed mb-2">
                {item.description}
              </p>
              <p className="text-xs md:text-sm opacity-75 leading-relaxed transform transition-all duration-500 delay-100 group-hover:translate-x-3">
                {item.subtitle}
              </p>
            </div>
          </div>

          {/* Photo Count Badge (if multiple photos) */}
          {item.photos.length > 1 && (
            <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs font-semibold flex items-center gap-1.5 transform transition-all duration-300 group-hover:bg-black/80 group-hover:scale-105">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{item.photos.length}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}