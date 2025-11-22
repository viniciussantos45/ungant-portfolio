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
      <nav className="hidden md:flex items-center justify-between fixed top-0 left-0 right-0 backdrop-blur-md bg-background/90 border-b border-border/50 z-40 shadow-sm">
        <img src={Logo.src} alt="Logo" className="h-4 px-5" />
        <div className="flex items-center gap-1 pr-2">
          <Button
            asChild
            size="lg"
            variant={
              currentPath === "/projetos" || currentPath === "/"
                ? "default"
                : "secondary"
            }
          >
            <a href="/projetos">PROJETOS</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant={currentPath === "/sobre-nos" ? "default" : "secondary"}
          >
            <a href="/sobre-nos">SOBRE NÓS</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant={currentPath === "/contato" ? "default" : "secondary"}
          >
            <a href="/contato">CONTATO</a>
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden flex items-center justify-between p-4 fixed top-0 left-0 right-0 backdrop-blur-md bg-background/90 border-b border-border/50 z-40 shadow-sm">
        <img src={Logo.src} alt="Logo" className="h-6" />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            setIsMobileMenuOpen(true);
          }}
          className="text-secondary hover:bg-primary/10"
        >
          <Menu className="h-6 w-6" weight="bold" />
        </Button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 flex flex-col justify-between p-6 bg-primary z-50 border-8 border-white animate-in fade-in duration-300">
          <div className="flex items-center justify-between">
            <img src={LogoBlack.src} alt="Logo" className="h-7" />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-secondary hover:bg-black/10"
            >
              <X className="h-7 w-7" weight="bold" />
            </Button>
          </div>

          <div className="flex justify-center flex-col gap-10 text-center">
            <a
              href="/projetos"
              className={`text-5xl font-bold transition-colors tracking-tight ${
                currentPath === "/projetos" || currentPath === "/"
                  ? "text-primary-foreground"
                  : "text-secondary hover:text-primary-foreground"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              PROJETOS
            </a>
            <a
              href="/sobre-nos"
              className={`text-5xl font-bold transition-colors tracking-tight ${
                currentPath === "/sobre-nos"
                  ? "text-primary-foreground"
                  : "text-secondary hover:text-primary-foreground"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SOBRE NÓS
            </a>
            <a
              href="/contato"
              className={`text-5xl font-bold transition-colors tracking-tight ${
                currentPath === "/contato"
                  ? "text-primary-foreground"
                  : "text-secondary hover:text-primary-foreground"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTATO
            </a>
          </div>

          <div className="flex justify-between gap-2">
            <a href="#" className="w-12 h-12 bg-blue-600 hover:bg-blue-700 flex items-center justify-center rounded-lg transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex items-center justify-center rounded-lg transition-all" aria-label="Instagram">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-black hover:bg-gray-800 flex items-center justify-center rounded-lg transition-colors" aria-label="TikTok">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-blue-500 hover:bg-blue-600 flex items-center justify-center rounded-lg transition-colors" aria-label="Behance">
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
