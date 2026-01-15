import { useState } from "react";

interface NavProps {
  currentPath?: string;
}

export default function Nav({ currentPath = "/" }: NavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/projetos") {
      return currentPath === "/projetos" || currentPath === "/";
    }
    return currentPath === path;
  };

  return (
    <>
      {/* Desktop Navigation */}
      <header className="fixed top-0 w-full z-[100] px-8 py-6">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-4 group">
            <div className="w-8 h-8 bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-lg">
                videocam
              </span>
            </div>
            <span className="font-black text-2xl tracking-tighter uppercase font-display">
              UNGANT
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-12">
            <a
              href="/projetos"
              className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-colors ${
                isActive("/projetos") ? "text-primary" : "text-white hover:text-primary"
              }`}
            >
              Projetos
            </a>
            <a
              href="/sobre-nos"
              className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-colors ${
                isActive("/sobre-nos") ? "text-primary" : "text-white hover:text-primary"
              }`}
            >
              Nossa Essência
            </a>
            <a
              href="/contato"
              className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-colors ${
                isActive("/contato") ? "text-primary" : "text-white hover:text-primary"
              }`}
            >
              Contato
            </a>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            <span className="hidden lg:block text-[10px] font-bold tracking-[0.3em] text-white/40">
              SÃO PAULO / BR
            </span>
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 flex flex-col justify-between p-8 bg-charcoal z-[200] animate-fadeInUp">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-lg">
                  videocam
                </span>
              </div>
              <span className="font-black text-2xl tracking-tighter uppercase font-display">
                UNGANT
              </span>
            </div>
            <button
              className="text-white hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex flex-col gap-8 text-center">
            <a
              href="/projetos"
              className={`text-5xl font-display font-bold uppercase tracking-tight transition-colors ${
                isActive("/projetos") ? "text-primary" : "text-white hover:text-primary"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projetos
            </a>
            <a
              href="/sobre-nos"
              className={`text-5xl font-display font-bold uppercase tracking-tight transition-colors ${
                isActive("/sobre-nos") ? "text-primary" : "text-white hover:text-primary"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Nossa Essência
            </a>
            <a
              href="/contato"
              className={`text-5xl font-display font-bold uppercase tracking-tight transition-colors ${
                isActive("/contato") ? "text-primary" : "text-white hover:text-primary"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contato
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="w-12 h-12 glass-btn flex items-center justify-center hover:bg-primary transition-all duration-300"
              aria-label="Instagram"
            >
              <span className="material-symbols-outlined">photo_camera</span>
            </a>
            <a
              href="#"
              className="w-12 h-12 glass-btn flex items-center justify-center hover:bg-primary transition-all duration-300"
              aria-label="Vimeo"
            >
              <span className="material-symbols-outlined">play_circle</span>
            </a>
            <a
              href="#"
              className="w-12 h-12 glass-btn flex items-center justify-center hover:bg-primary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <span className="material-symbols-outlined">business</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
