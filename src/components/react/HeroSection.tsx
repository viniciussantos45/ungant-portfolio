import { ArrowDownIcon } from "@phosphor-icons/react";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <div className="text-center mb-12 lg:mb-16">
      <h1 className="text-6xl md:text-8xl lg:text-6xl text-primary leading-none mb-8">
        Histórias visuais poderosas
      </h1>
      <Button>
        <ArrowDownIcon className="inline-block" />
        CONFIRA NOSSO TRAMPO
      </Button>
    </div>
  );
}
