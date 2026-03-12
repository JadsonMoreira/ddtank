import { useState, useEffect } from "react";
import { ChevronDown, Play } from "lucide-react";

const wallpapers = [
  "https://play.ddtank36.com.br/Brasil36/images/home/section-01/wallpapers/wallpaper01.png?v=1732271077&theme=Brasil36",
  "https://play.ddtank36.com.br/Brasil36/images/home/section-01/wallpapers/wallpaper02.png?v=1708047351&theme=Brasil36",
  "https://play.ddtank36.com.br/Brasil36/images/home/section-01/wallpapers/wallpaper03.png?v=1732271077&theme=Brasil36",
  "https://play.ddtank36.com.br/Brasil36/images/home/section-01/wallpapers/wallpaper04.png?v=1708047351&theme=Brasil36",
  "https://play.ddtank36.com.br/Brasil36/images/home/section-01/wallpapers/wallpaper05.png?v=1708047351&theme=Brasil36",
  "https://play.ddtank36.com.br/Brasil36/images/home/section-01/wallpapers/wallpaper06.png?v=1708715118&theme=Brasil36",
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % wallpapers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="wallpaper-section">
      {/* Slides */}
      {wallpapers.map((wp, i) => (
        <div
          key={i}
          className="wallpaper-slide"
          style={{ opacity: current === i ? 1 : 0 }}
        >
          <img src={wp} alt={`Wallpaper ${i + 1}`} loading={i === 0 ? "eager" : "lazy"} />
        </div>
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10 z-[1]" />

      {/* Hero content */}
      <div className="absolute inset-0 flex items-center z-10 px-6 md:px-16 lg:px-24">
        <div className="max-w-xl">
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 font-body text-xs font-semibold tracking-widest uppercase text-primary bg-primary/15 border border-primary/30 rounded-full px-3 py-1 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Servidor Oficial Brasil 3.6
          </span>

          {/* Title */}
          <h1 className="font-display font-black text-4xl md:text-6xl text-white leading-[1.1] mb-4 drop-shadow-xl">
            O melhor<br />
            <span className="text-primary">DDTank</span> do Brasil
          </h1>

          {/* Subtitle */}
          <p className="font-body text-white/75 text-sm md:text-base mb-8 leading-relaxed max-w-sm">
            Batalhas épicas, itens raros e uma comunidade incrível te esperam. Crie sua conta e comece agora!
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-display font-bold px-6 py-3 rounded-full shadow-xl shadow-primary/40 transition-all hover:scale-105 text-sm"
            >
              <Play size={15} fill="white" />
              Jogar Agora
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-display font-bold px-6 py-3 rounded-full border border-white/30 transition-all hover:border-white/50 text-sm"
            >
              Criar Conta
            </a>
          </div>
        </div>
      </div>

      {/* Slide pill indicators — bottom left */}
      <div className="absolute bottom-7 left-6 md:left-16 flex gap-2 z-10">
        {wallpapers.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              current === i ? "bg-primary w-8" : "bg-white/40 w-3 hover:bg-white/65"
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator — bottom right */}
      <div className="absolute bottom-6 right-6 md:right-16 z-10 flex flex-col items-center gap-1 animate-bounce opacity-60">
        <span className="font-body text-white text-[9px] tracking-[0.2em] uppercase">scroll</span>
        <ChevronDown size={14} className="text-white" />
      </div>
    </section>
  );
};

export default HeroSection;
