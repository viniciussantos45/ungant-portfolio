interface HeroSectionProps {
  backgroundImage?: string;
}

export default function HeroSection({ backgroundImage }: HeroSectionProps) {
  const bgImage =
    backgroundImage ||
    "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000&auto=format&fit=crop";

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          alt="Cinematic Still"
          className="w-full h-full object-cover opacity-60 scale-105"
          src={bgImage}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      </div>

      {/* Large UNGANT Watermark */}
      <div className="absolute right-[-2vw] md:right-0 top-1/2 -translate-y-1/2 z-10 opacity-20 pointer-events-none select-none">
        <div className="font-display font-black text-[25vw] md:text-[20vw] leading-[0.75] flex flex-col items-end tracking-tighter text-white">
          <span>UN</span>
          <span>GA</span>
          <span>NT</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-8 w-full  md:pt-20">
        <div className="space-y-6 max-w-3xl">
          {/* Tagline */}
          <div
            className="flex items-center gap-4 text-primary font-bold tracking-[0.4em] uppercase text-xs mb-8 animate-fadeInUp"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="w-12 h-px bg-primary" />
            <span>High-End Audiovisual</span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-6xl md:text-9xl font-display font-bold text-white leading-[0.9] tracking-tight uppercase animate-fadeInUp opacity-0"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Histórias
            <br />
            visuais
            <br />
            <span className="text-primary">poderosas</span>
          </h1>

          {/* CTA Buttons */}
          <div
            className="pt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fadeInUp opacity-0"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <a
              href="/projetos"
              className="bg-primary text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 text-center"
            >
              Ver Portfólio
            </a>
            <button className="glass-btn text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-all duration-300">
              Showreel 2024
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-8 z-20 hidden md:block">
        <div className="flex flex-col gap-4">
          <span className="material-symbols-outlined animate-bounce text-white/30">
            south
          </span>
        </div>
      </div>
    </section>
  );
}
