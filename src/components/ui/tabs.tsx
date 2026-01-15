import { useState } from "react";
import ImagesGallery from "./images-gallery";
import LivesGallery from "./lives-gallery";
import VideosGallery from "./videos-gallery";

interface TabItem {
  id: string;
  label: string;
  count: number;
}

interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export function Tabs({ tabs, activeTab, onTabChange }: TabsProps) {
  return (
    <div className="border-b border-secondary/20 mb-8 md:mb-12">
      <div className="flex flex-wrap gap-2 md:gap-4 -mb-px">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              px-6 py-3 md:px-8 md:py-4 font-semibold text-sm md:text-base
              border-b-2 transition-all duration-200
              ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-secondary/60 hover:text-secondary hover:border-secondary/30"
              }
            `}
          >
            {tab.label}
            {tab.count > 0 && (
              <span
                className={`ml-2 text-xs ${
                  activeTab === tab.id ? "text-primary/70" : "text-secondary/50"
                }`}
              >
                ({tab.count})
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

interface GalleryTabsProps {
  videos: any[];
  images: any[];
  lives?: any[];
}

export function GalleryTabs({ videos, images, lives = [] }: GalleryTabsProps) {
  const [activeTab, setActiveTab] = useState(() => {
    // Set default tab to the first one with content
    if (videos.length > 0) return "videos";
    if (images.length > 0) return "photos";
    if (lives.length > 0) return "lives";
    return "videos";
  });

  const tabs: TabItem[] = [
    { id: "videos", label: "Vídeos", count: videos.length },
    { id: "photos", label: "Fotos", count: images.length },
    { id: "lives", label: "Lives/Podcasts", count: lives.length },
  ];

  return (
    <div
      className="animate-fadeInUp opacity-0"
      style={{ animationDelay: "0.5s" }}
    >
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="min-h-[400px]">
        {activeTab === "videos" && (
          <div className="animate-fadeIn">
            {videos.length > 0 ? (
              <VideosGallery videos={videos} />
            ) : (
              <div className="text-center py-20">
                <p className="text-lg text-secondary/60">
                  Nenhum vídeo disponível para este projeto.
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === "photos" && (
          <div className="animate-fadeIn">
            {images.length > 0 ? (
              <ImagesGallery images={images} />
            ) : (
              <div className="text-center py-20">
                <p className="text-lg text-secondary/60">
                  Nenhuma foto disponível para este projeto.
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === "lives" && (
          <div className="animate-fadeIn">
            {lives.length > 0 ? (
              <LivesGallery lives={lives} />
            ) : (
              <div className="text-center py-20">
                <p className="text-lg text-secondary/60">
                  Nenhuma live/podcast disponível para este projeto.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
