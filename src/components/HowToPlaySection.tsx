const steps = [
  {
    number: "01",
    title: "Crie sua Conta",
    description: "Cadastre-se gratuitamente em segundos. Sem cartão de crédito, sem complicação.",
    img: "https://play.ddtank36.com.br/Brasil36/images/home/section-05/items/17002.png?v=1732271077&theme=Brasil36",
  },
  {
    number: "02",
    title: "Entre no Jogo",
    description: "Faça login, escolha seu servidor e mergulhe no universo DDTank Brasil 3.6.",
    img: "https://play.ddtank36.com.br/Brasil36/images/home/section-05/items/13100.png?v=1732271077&theme=Brasil36",
  },
  {
    number: "03",
    title: "Monte seu Personagem",
    description: "Equipe armas, acessórios e itens raros para criar o guerreiro perfeito.",
    img: "https://play.ddtank36.com.br/Brasil36/images/home/section-05/items/70276.png?v=1732271077&theme=Brasil36",
  },
  {
    number: "04",
    title: "Domine o Servidor",
    description: "Suba no ranking, conquiste guildas e mostre que você é o melhor da arena.",
    img: "https://play.ddtank36.com.br/Brasil36/images/home/section-05/items/5527.png?v=1732271077&theme=Brasil36",
  },
];

const HowToPlaySection = () => {
  return (
    <section id="como-jogar" className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title mb-4">Como Começar</h2>
        <p className="text-center text-muted-foreground mb-14 font-body">
          Em apenas 4 passos você já estará na batalha
        </p>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line – visible on md+ */}
          <div className="hidden md:block absolute top-10 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={step.number} className="flex flex-col items-center text-center gap-3">
                {/* Icon bubble */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary/40 to-primary/30 border-4 border-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-12 h-12 object-contain"
                      loading="lazy"
                      onError={(e) => {
                        // fallback: show step number if image fails
                        const el = e.target as HTMLImageElement;
                        el.style.display = "none";
                        const span = document.createElement("span");
                        span.className = "font-display font-black text-2xl text-primary";
                        span.textContent = step.number;
                        el.parentElement?.appendChild(span);
                      }}
                    />
                  </div>
                  {/* Step badge */}
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-primary-foreground font-display font-black text-xs flex items-center justify-center shadow">
                    {idx + 1}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-foreground leading-tight">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14">
          <a
            href="#"
            className="hover-glow inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-display font-bold text-lg shadow-lg transition-all duration-300 hover:bg-primary/90"
          >
            Comece Agora — É Grátis!
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToPlaySection;
