import { type ProjectItem } from "../../data/projects";

interface ProjectCardProps {
  item: ProjectItem;
  index: number;
  variant?: "tall" | "wide" | "square";
}

export default function ProjectCard({
  item,
  index,
  variant = "square",
}: ProjectCardProps) {
  const handleClick = () => {
    // Preserve filter parameter from current URL
    const currentParams = new URLSearchParams(window.location.search);
    const filter = currentParams.get("filter");

    const url = `/gallery/${item.id}`;
    if (filter) {
      window.location.href = `${url}?filter=${filter}`;
    } else {
      window.location.href = url;
    }
  };

  // Determine aspect ratio based on variant
  const aspectClass = {
    tall: "aspect-[3/4]",
    wide: "aspect-[16/9]",
    square: "aspect-square",
  }[variant];

  // Determine grid span based on variant
  const gridClass = {
    tall: "col-span-12 md:col-span-6 lg:col-span-4 row-span-2",
    wide: "col-span-12 md:col-span-6 lg:col-span-8",
    square: "col-span-12 md:col-span-6 lg:col-span-4",
  }[variant];

  // Get category from first video or default
  const category = item.title.includes("AFTERMOVIE")
    ? "Aftermovie"
    : item.title.includes("CORPORATIVO")
    ? "Corporate"
    : item.title.includes("FASHION")
    ? "Fashion Film"
    : item.title.includes("HEINZ")
    ? "Commercial"
    : item.title.includes("CHEVROLET")
    ? "Campaign"
    : "Storytelling";

  return (
    <div
      className={`${gridClass} project-card group relative ${aspectClass} overflow-hidden bg-charcoal cursor-pointer animate-fadeInUp opacity-0`}
      style={{
        animationDelay: `${index * 0.1}s`,
        animationFillMode: "forwards",
      }}
      onClick={handleClick}
    >
      {/* Image with Grayscale Effect */}
      <img
        src={item.image || "/placeholder.svg"}
        alt={item.title}
        className="project-image absolute inset-0 w-full h-full object-cover transition-transform duration-1000 grayscale group-hover:grayscale-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />

      {/* Arrow Icon */}
      <div className="absolute top-6 right-6 md:top-8 md:right-8 project-arrow transition-transform duration-500">
        <span className="material-symbols-outlined text-3xl md:text-4xl text-primary font-light">
          north_east
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 space-y-2">
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary block">
          {category}
        </span>
        <h3
          className={`font-display font-bold uppercase tracking-tighter leading-tight ${
            variant === "square"
              ? "text-2xl md:text-3xl"
              : "text-3xl md:text-4xl"
          }`}
        >
          {item.title}
        </h3>
      </div>

      {/* Media Count Badge */}
      {(item.videos.length > 0 || item.photos.length > 0) && (
        <div className="absolute top-6 left-6 md:top-8 md:left-8 flex gap-3">
          {item.videos.length > 0 && (
            <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-white/60">
              <span className="material-symbols-outlined text-sm">
                videocam
              </span>
              <span>{item.videos.length}</span>
            </div>
          )}
          {item.photos.length > 0 && (
            <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-white/60">
              <span className="material-symbols-outlined text-sm">
                photo_camera
              </span>
              <span>{item.photos.length}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
