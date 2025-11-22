import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";

// // If you want you can use SCSS instead of css
// import "lightgallery/scss/lg-zoom.scss";
// import "lightgallery/scss/lightgallery.scss";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgVideo from "lightgallery/plugins/video";
import lgZoom from "lightgallery/plugins/zoom";

import Carousel from "./carousel";

interface ImagesGalleryProps {
  images: {
    title: string;
    description: string;
    src: string;
    thumb: string;
    alt: string;
  }[];
}

export default function ImagesGallery({ images }: ImagesGalleryProps) {
  // const [emblaRef] = useEmblaCarousel();

  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className="images-gallery">
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom, lgVideo]}
        selector=".gallery-item"
      >
        <Carousel
          options={{
            slidesToScroll: 5,
          }}
          slides={images.map((image, index) => (
            <a
              key={`${image.src}-${index}`} // Added index to key to ensure library gallery works
              className="gallery-item cursor-pointer rounded-lg overflow-hidden aspect-square bg-gray-100 hover:shadow-lg transition-shadow duration-200"
              data-src={image.src}
              data-sub-html={`<h4>${image.title}</h4><p>${image.description}</p>`}
            >
              <img
                alt={image.alt}
                src={image.thumb}
                className="rounded-lg object-cover"
              />
            </a>
          ))}
        />

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <a
              key={`${image.src}-${index}`}
              className="gallery-item cursor-pointer block rounded-lg overflow-hidden aspect-square bg-gray-100 hover:shadow-lg transition-shadow duration-200"
              data-src={image.src}
              data-sub-html={`<h4>${image.title}</h4><p>${image.description}</p>`}
            >
              <img
                alt={image.alt}
                src={image.thumb}
                className="w-full h-full object-cover"
              />
            </a>
          ))}
        </div> */}
      </LightGallery>
    </div>
  );
}
