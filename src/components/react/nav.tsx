import { useState } from "react";
import LogoBlack from "../../assets/logotipo-black.svg";
import Logo from "../../assets/logotipo-orange.svg";
import { Button } from "../ui/button";

import { ListIcon as Menu, XIcon as X } from "@phosphor-icons/react";

interface NavProps {
  currentPath?: string;
}

export default function Nav({ currentPath = "/" }: NavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-between fixed top-0 left-0 right-0 backdrop-blur-xl bg-background/95 border-b border-primary/10 z-40 shadow-lg px-6 lg:px-8 py-4">
        <a href="/" className="group flex items-center">
          <img src={Logo.src} alt="Logo" className="h-5 transition-transform duration-300 group-hover:scale-105" />
        </a>

        <div className="flex items-center gap-8">
          <a
            href="/projetos"
            className={`text-sm font-semibold transition-all duration-300 relative group ${
              currentPath === "/projetos" || currentPath === "/"
                ? "text-primary"
                : "text-secondary hover:text-primary"
            }`}
          >
            PROJETOS
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
              currentPath === "/projetos" || currentPath === "/" ? "w-full" : "w-0 group-hover:w-full"
            }`}></span>
          </a>
          <a
            href="/sobre-nos"
            className={`text-sm font-semibold transition-all duration-300 relative group ${
              currentPath === "/sobre-nos"
                ? "text-primary"
                : "text-secondary hover:text-primary"
            }`}
          >
            SOBRE NÓS
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
              currentPath === "/sobre-nos" ? "w-full" : "w-0 group-hover:w-full"
            }`}></span>
          </a>
          <a
            href="/contato"
            className={`text-sm font-semibold transition-all duration-300 relative group ${
              currentPath === "/contato"
                ? "text-primary"
                : "text-secondary hover:text-primary"
            }`}
          >
            CONTATO
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
              currentPath === "/contato" ? "w-full" : "w-0 group-hover:w-full"
            }`}></span>
          </a>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden flex items-center justify-between px-4 py-4 fixed top-0 left-0 right-0 backdrop-blur-xl bg-background/95 border-b border-primary/10 z-40 shadow-lg">
        <a href="/" className="flex items-center">
          <img src={Logo.src} alt="Logo" className="h-6" />
        </a>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            setIsMobileMenuOpen(true);
          }}
          className="text-primary hover:bg-primary/10 hover:scale-110 transition-transform"
        >
          <Menu className="h-6 w-6" weight="bold" />
        </Button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 flex flex-col justify-between p-8 bg-gradient-to-br from-primary via-primary to-primary/90 z-50 animate-in fade-in duration-300">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-10 w-64 h-64 bg-white/5 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-64 h-64 bg-black/5 rounded-full filter blur-3xl"></div>
          </div>

          <div className="flex items-center justify-between relative z-10">
            <img src={LogoBlack.src} alt="Logo" className="h-7" />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-black hover:bg-black/10 hover:rotate-90 transition-all duration-300"
            >
              <X className="h-7 w-7" weight="bold" />
            </Button>
          </div>

          <div className="flex justify-center flex-col gap-8 text-center relative z-10">
            <a
              href="/projetos"
              className={`text-5xl font-black transition-all duration-300 tracking-tight relative group ${
                currentPath === "/projetos" || currentPath === "/"
                  ? "text-black"
                  : "text-black/60 hover:text-black"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              PROJETOS
              {(currentPath === "/projetos" || currentPath === "/") && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-black rounded-full"></span>
              )}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-black rounded-full group-hover:w-12 transition-all duration-300"></span>
            </a>
            <a
              href="/sobre-nos"
              className={`text-5xl font-black transition-all duration-300 tracking-tight relative group ${
                currentPath === "/sobre-nos"
                  ? "text-black"
                  : "text-black/60 hover:text-black"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SOBRE NÓS
              {currentPath === "/sobre-nos" && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-black rounded-full"></span>
              )}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-black rounded-full group-hover:w-12 transition-all duration-300"></span>
            </a>
            <a
              href="/contato"
              className={`text-5xl font-black transition-all duration-300 tracking-tight relative group ${
                currentPath === "/contato"
                  ? "text-black"
                  : "text-black/60 hover:text-black"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTATO
              {currentPath === "/contato" && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-black rounded-full"></span>
              )}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-black rounded-full group-hover:w-12 transition-all duration-300"></span>
            </a>
          </div>

          <div className="flex justify-center gap-4 relative z-10">
            <a href="#" className="w-12 h-12 bg-black/80 hover:bg-black backdrop-blur-sm flex items-center justify-center rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg" aria-label="Facebook">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-black/80 hover:bg-black backdrop-blur-sm flex items-center justify-center rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg" aria-label="Instagram">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-black/80 hover:bg-black backdrop-blur-sm flex items-center justify-center rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg" aria-label="TikTok">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-black/80 hover:bg-black backdrop-blur-sm flex items-center justify-center rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg" aria-label="Behance">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
              </svg>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
