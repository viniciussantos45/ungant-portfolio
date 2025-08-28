"use client";

import {
  ArrowDownIcon,
  ArrowUpRightIcon as ArrowUpRight,
} from "@phosphor-icons/react";
import { Button } from "../ui/button";
import Nav from "./nav";

export default function TestReactComponent() {
  const portfolioItems = [
    {
      title: "URBAN FAIRYTALE",
      description: "EVERYDAY SCENES TRANSFORMED INTO MYTHICAL STORIES",
      subtitle: "HINTS OF MAGIC AMONG THE VEGGIE STANDS",
      image: "/projects/first/two.jpg",
    },
    {
      title: "STREET SERENITY",
      description: "EVERYDAY MOMENTS BECOME CINEMATIC FRAMES",
      subtitle:
        "SHADOWS AND LIGHT WEAVING A MODERN MYTH SOFTER THAN SILK THE CITY SPEAKS",
      image: "/projects/first/one.jpg",
    },
    {
      title: "LOST IN THE CROWD",
      description: "SOLITUDE IN THE NOISE",
      subtitle: "A CALM MOMENT AMONG COUNTLESS FACES",
      image: "/projects/first/three.jpg",
    },
    {
      title: "CITY SOUL",
      description: "MODERN-DAY MUSE, NAVIGATING URBAN LEGENDS",
      subtitle: "BOLD STEPS THROUGH NEON MEMORIES THE CITY IS HER STAGE",
      image: "/projects/first/four.jpg",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/blurred-street-scene.png')",
          filter: "blur(2px) brightness(0.7)",
        }}
      />

      {/* Content Overlay */}
      <div className="relative z-10">
        <Nav />

        {/* Main Content */}
        <div className="px-4 lg:px-8 pb-8">
          {/* Hero Section */}
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-6xl md:text-8xl lg:text-6xl font-black text-primary leading-none mb-8">
              HISTÓRIAS VISUAIS PODEROSAS
            </h1>
            <Button className="bg-foreground hover:bg-foreground/80 text-primary px-8 py-3 text-lg font-medium">
              <ArrowDownIcon className="inline-block" />
              CONFIRA NOSSO TRAMPO
            </Button>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm">
                  <div className="aspect-[3/4] relative">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* Arrow Icon */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-primary rounded-sm flex items-center justify-center group-hover:bg-yellow-300 transition-colors">
                      <ArrowUpRight className="w-5 h-5 text-black" />
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm opacity-90 leading-relaxed">
                        {item.description}
                      </p>
                      <p className="text-xs opacity-75 mt-1">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
