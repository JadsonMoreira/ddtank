import { useEffect, useRef, useState } from "react";

const stats = [
  {
    img: "https://play.ddtank36.com.br/Brasil36/images/home/section-05/items/70242.png?v=1732271077&theme=Brasil36",
    label: "Jogadores Registrados",
    value: 128450,
    suffix: "+",
  },
  {
    img: "https://play.ddtank36.com.br/Brasil36/images/home/section-05/items/5527.png?v=1732271077&theme=Brasil36",
    label: "Partidas por Dia",
    value: 34200,
    suffix: "+",
  },
  {
    img: "https://play.ddtank36.com.br/Brasil36/images/home/section-05/items/11024.png?v=1732271077&theme=Brasil36",
    label: "Itens Exclusivos",
    value: 512,
    suffix: "",
  },
  {
    img: "https://play.ddtank36.com.br/Brasil36/images/home/section-05/items/9525.png?v=1732271077&theme=Brasil36",
    label: "Eventos Realizados",
    value: 97,
    suffix: "+",
  },
];

function useCountUp(target: number, duration = 1800, started: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, started]);

  return count;
}

function StatCard({ stat, started }: { stat: typeof stats[number]; started: boolean }) {
  const count = useCountUp(stat.value, 1800, started);

  return (
    <div className="item-card group">
      <div className="w-16 h-16 mb-3 rounded-xl bg-gradient-to-br from-secondary/30 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
        <img
          src={stat.img}
          alt={stat.label}
          className="w-12 h-12 object-contain"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <span className="font-display font-bold text-3xl text-primary tabular-nums">
        {count.toLocaleString("pt-BR")}{stat.suffix}
      </span>
      <span className="font-display text-xs font-bold text-foreground leading-tight mt-1 text-center">
        {stat.label}
      </span>
    </div>
  );
}

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="py-16 px-4 bg-card/50" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title mb-4">Números do Servidor</h2>
        <p className="text-center text-muted-foreground mb-12 font-body">
          Veja o que torna o DDTank Brasil 3.6 o maior servidor do Brasil
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
