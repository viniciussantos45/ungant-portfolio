import { ArrowUpRightIcon as ArrowUpRight } from "@phosphor-icons/react";

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

interface ProjectCardProps {
  item: ProjectItem;
  index: number;
}

export default function ProjectCard({ item, index }: ProjectCardProps) {
  return (
    <div key={index} className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm">
        <div className="aspect-[3/4] relative">
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          {/* Arrow Icon */}
          <div className="absolute top-4 right-4 w-8 h-8 bg-primary rounded-sm flex items-center justify-center group-hover:bg-yellow-300 transition-colors">
            <ArrowUpRight className="w-5 h-5 text-black" />
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              {item.description}
            </p>
            <p className="text-xs opacity-75 mt-1">{item.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}