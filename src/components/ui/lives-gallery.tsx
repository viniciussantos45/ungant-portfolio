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
import Carousel from "./carousel";

interface LiveGalleryProps {
  lives: {
    title: string;
    description: string;
    src: string;
    thumb: string;
    alt: string;
  }[];
}

export default function LivesGallery({ lives }: LiveGalleryProps) {
  if (lives.length === 0) {
    return null;
  }

  const onInit = () => {
    console.log("lightGallery lives/podcasts gallery has been initialized");
  };

  return (
    <div className="lives-gallery">
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom, lgVideo]}
        selector=".live-gallery-item"
      >
        <Carousel
          options={{
            slidesToScroll: 3,
          }}
          slides={lives.map((live, index) => (
            <a
              key={`${live.src}-${index}`}
              className="live-gallery-item cursor-pointer block rounded-lg overflow-hidden aspect-video bg-gray-100 hover:shadow-lg transition-shadow duration-200 relative group"
              data-src={live.src}
              data-sub-html={`<h4 class="text-lg font-bold">${live.title}</h4><p class="text-sm mt-2">${live.description}</p>`}
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                src={live.thumb}
                alt={live.alt}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white bg-opacity-90 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-200">
                  <svg
                    className="w-8 h-8 text-gray-900 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                LIVE
              </div>
            </a>
          ))}
        />
      </LightGallery>
    </div>
  );
}
