import { useState } from "react";
import Logo from "../../assets/logotipo-black.svg";
import { Button } from "../ui/button";

import { ListIcon as Menu, XIcon as X } from "@phosphor-icons/react";

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-between p-6 lg:p-8">
        <img src={Logo.src} alt="Logo" className="h-6" />
        <div className="flex items-center gap-8">
          <a
            href="#portfolio"
            className="text-secondary hover:text-gray-600 transition-colors"
          >
            PORTFOLIO
          </a>
          <a
            href="#about"
            className="rounded-md bg-foreground text-primary px-4 py-2 hover:bg-foreground/80 transition-colors"
          >
            ABOUT ME
          </a>
          <a
            href="#services"
            className="text-secondary hover:text-gray-600 transition-colors"
          >
            SERVICES
          </a>
          <a
            href="#contacts"
            className="text-secondary hover:text-gray-600 transition-colors"
          >
            CONTACTS
          </a>
          <a
            href="#faq"
            className="text-secondary hover:text-gray-600 transition-colors"
          >
            FAQ
          </a>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden flex items-center justify-between p-4">
        <img src={Logo.src} alt="Logo" className="h-6" />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            setIsMobileMenuOpen(true);
          }}
          className="text-secondary hover:bg-white/20"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-primary z-50 p-6 border-8 border-white">
          <div className="flex items-center justify-between mb-12">
            <img src={Logo.src} alt="Logo" className="h-6" />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-secondary hover:bg-black/10"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex flex-col gap-8 text-center">
            <a
              href="#portfolio"
              className="text-4xl font-bold text-secondary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              PORTFOLIO
            </a>
            <a
              href="#about"
              className="text-4xl font-bold text-secondary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT ME
            </a>
            <a
              href="#services"
              className="text-4xl font-bold text-secondary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SERVICES
            </a>
            <a
              href="#contacts"
              className="text-4xl font-bold text-secondary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACTS
            </a>
            <a
              href="#faq"
              className="text-4xl font-bold text-secondary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
          </div>

          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
            <Button className="bg-pink-400 hover:bg-pink-300 text-secondary px-8 py-3 text-lg font-medium">
              ↓ CATCH THE VIBE
            </Button>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
            <div className="w-12 h-12 bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold">f</span>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <span className="text-white font-bold">ig</span>
            </div>
            <div className="w-12 h-12 bg-black flex items-center justify-center">
              <span className="text-white font-bold">tt</span>
            </div>
            <div className="w-12 h-12 bg-blue-500 flex items-center justify-center">
              <span className="text-white font-bold">Be</span>
            </div>
            <div className="w-12 h-12 bg-red-600 flex items-center justify-center">
              <span className="text-white font-bold">P</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
