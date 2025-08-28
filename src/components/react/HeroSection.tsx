import { ArrowDownIcon } from "@phosphor-icons/react";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <div className="text-center mb-12 lg:mb-16">
      <h1 className="text-6xl md:text-8xl lg:text-6xl font-black text-primary leading-none mb-8">
        HISTÓRIAS VISUAIS PODEROSAS
      </h1>
      <Button className="bg-foreground hover:bg-foreground/80 text-primary px-8 py-3 text-lg font-medium">
        <ArrowDownIcon className="inline-block" />
        CONFIRA NOSSO TRAMPO
      </Button>
    </div>
  );
}