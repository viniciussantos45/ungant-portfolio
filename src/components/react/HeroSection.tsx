import { ArrowDownIcon } from "@phosphor-icons/react";
import { Button } from "../ui/button";

export default function HeroSection() {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects-grid');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="text-center mb-16 md:mb-20 lg:mb-24 pt-8 md:pt-12 relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>

      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-primary leading-none mb-10 md:mb-12 font-black tracking-tight animate-fadeInUp opacity-0" style={{ animationDelay: '0.2s' }}>
          Histórias visuais poderosas
        </h1>

        <div className="animate-fadeInUp opacity-0" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" onClick={scrollToProjects} className="group relative overflow-hidden">
            <span className="relative z-10 flex items-center">
              <ArrowDownIcon className="inline-block mr-2 group-hover:translate-y-1 transition-transform duration-300" weight="bold" />
              CONFIRA NOSSO TRAMPO
            </span>
            {/* Button Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 group-hover:translate-x-full"></div>
          </Button>
        </div>
      </div>
    </div>
  );
}
