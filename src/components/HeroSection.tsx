import { useState, useEffect } from "react";

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
      {wallpapers.map((wp, i) => (
        <div
          key={i}
          className="wallpaper-slide"
          style={{ opacity: current === i ? 1 : 0 }}
        >
          <img src={wp} alt={`Wallpaper ${i + 1}`} loading={i === 0 ? "eager" : "lazy"} />
        </div>
      ))}

      {/* Play button centered at bottom */}
      <div className="absolute inset-0 flex items-end justify-center pb-16 z-10">
        <a href="#" className="hover-glow">
          <img
            src="/assets/showcase-button.png"
            alt="Jogue Agora"
            className="h-16 md:h-20 w-auto"
          />
        </a>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {wallpapers.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === i ? "bg-primary scale-125" : "bg-primary-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
