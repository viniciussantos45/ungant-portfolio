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
    <div className="text-center mb-16 md:mb-20 lg:mb-24 pt-8 md:pt-12">
      <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-primary leading-none mb-10 md:mb-12 font-black tracking-tight">
        Histórias visuais poderosas
      </h1>
      <Button size="lg" onClick={scrollToProjects} className="group">
        <ArrowDownIcon className="inline-block mr-2 group-hover:translate-y-1 transition-transform" weight="bold" />
        CONFIRA NOSSO TRAMPO
      </Button>
    </div>
  );
}
