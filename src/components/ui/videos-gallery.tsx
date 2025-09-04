import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";

// import plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgVideo from "lightgallery/plugins/video";
import lgZoom from "lightgallery/plugins/zoom";

interface VideoGalleryProps {
  videos: {
    title: string;
    description: string;
    src: string;
    thumb: string;
    alt: string;
  }[];
}

export default function VideosGallery({ videos }: VideoGalleryProps) {
  if (videos.length === 0) {
    return null;
  }

  const onInit = () => {
    console.log("lightGallery video gallery has been initialized");
  };

  return (
    <div className="videos-gallery">
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom, lgVideo]}
        selector=".video-gallery-item"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <a
              key={`${video.src}-${index}`}
              className="video-gallery-item cursor-pointer block rounded-lg overflow-hidden aspect-video bg-gray-100 hover:shadow-lg transition-shadow duration-200 relative group"
              data-video={JSON.stringify({
                source: [{ src: video.src, type: "video/mp4" }],
                attributes: { preload: false, controls: true }
              })}
              data-sub-html={`<h4>${video.title}</h4><p>${video.description}</p>`}
            >
              <img
                alt={video.alt}
                src={video.thumb}
                className="w-full h-full object-cover"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-200">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-gray-800 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </LightGallery>
    </div>
  );
}
