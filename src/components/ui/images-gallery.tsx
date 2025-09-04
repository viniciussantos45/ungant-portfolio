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
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className="App">
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom, lgVideo]}
      >
        {images.map((image) => (
          <a
            key={image.src}
            data-src={image.src}
            data-sub-html={`<h4>${image.title}</h4><p>${image.description}</p>`}
          >
            <img alt={image.alt} src={image.thumb} />
          </a>
        ))}
      </LightGallery>
    </div>
  );
}
