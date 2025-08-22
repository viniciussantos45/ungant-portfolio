"use client";

import {
  ArrowUpRightIcon as ArrowUpRight,
  ListIcon as Menu,
  XIcon as X,
} from "@phosphor-icons/react";

import Logo from "../../assets/logotipo-black.svg";

import { useState } from "react";
import { Button } from "../ui/button";

export default function TestReactComponent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-between p-6 lg:p-8">
          <img src={Logo.src} alt="Logo" className="h-6" />
          <div className="flex items-center gap-8">
            <a
              href="#portfolio"
              className="text-black hover:text-gray-600 transition-colors"
            >
              PORTFOLIO
            </a>
            <a
              href="#about"
              className="bg-foreground text-primary px-4 py-2 rounded-full hover:bg-foreground/80 transition-colors"
            >
              ABOUT ME
            </a>
            <a
              href="#services"
              className="text-black hover:text-gray-600 transition-colors"
            >
              SERVICES
            </a>
            <a
              href="#contacts"
              className="text-black hover:text-gray-600 transition-colors"
            >
              CONTACTS
            </a>
            <a
              href="#faq"
              className="text-black hover:text-gray-600 transition-colors"
            >
              FAQ
            </a>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex items-center justify-between p-4">
          <div className="text-xl font-bold text-black">STRAY</div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-black hover:bg-white/20"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-yellow-400 z-50 p-6">
            <div className="flex items-center justify-between mb-12">
              <div className="text-xl font-bold text-black">STRAY</div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-black hover:bg-black/10"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="flex flex-col gap-8 text-center">
              <a
                href="#portfolio"
                className="text-4xl font-bold text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PORTFOLIO
              </a>
              <a
                href="#about"
                className="text-4xl font-bold text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ABOUT ME
              </a>
              <a
                href="#services"
                className="text-4xl font-bold text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                SERVICES
              </a>
              <a
                href="#contacts"
                className="text-4xl font-bold text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACTS
              </a>
              <a
                href="#faq"
                className="text-4xl font-bold text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
            </div>

            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
              <Button className="bg-pink-400 hover:bg-pink-300 text-black px-8 py-3 rounded-full text-lg font-medium">
                ↓ CATCH THE VIBE
              </Button>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">f</span>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">ig</span>
              </div>
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold">tt</span>
              </div>
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">Be</span>
              </div>
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="px-4 lg:px-8 pb-8">
          {/* Hero Section */}
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-black leading-none mb-8">
              STRAY MOMENTS
            </h1>
            <Button className="bg-foreground hover:bg-foreground/80 text-primary px-8 py-3 rounded-full text-lg font-medium">
              ↓ CATCH THE VIBE
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
