import { useEffect, useState } from "react";

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Capturando momentos que inspiram e conectam";

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 50); // Adjust speed here (lower = faster)

    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects-grid");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="text-center mb-16 md:mb-20 lg:mb-24 pt-8 md:pt-12 relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>

      <div className="relative z-10">
        <h1
          className="text-5xl md:text-7xl lg:text-8xl xl:text-7xl text-primary leading-none mb-6 font-black tracking-tight animate-fadeInUp opacity-0"
          style={{ animationDelay: "0.2s" }}
        >
          Histórias visuais poderosas
        </h1>

        <div className="inline-flex items-center gap-2 mb-2">
          <span className="text-sm font-semibold text-secondary">
            {displayedText}
            <span className="absolute inline-block w-0.5 h-4 bg-primary ml-1 animate-pulse"></span>
          </span>
        </div>

        {/* <div
          className="animate-fadeInUp opacity-0"
          style={{ animationDelay: "0.4s" }}
        >
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <ArrowDownIcon
                className="inline-block mr-2 group-hover:translate-y-1 transition-transform duration-300"
                weight="bold"
              />
              CONFIRA NOSSO TRAMPO
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 group-hover:translate-x-full"></div>
          </Button>
        </div> */}
      </div>
    </div>
  );
}
