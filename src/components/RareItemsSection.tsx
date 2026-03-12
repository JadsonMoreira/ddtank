const items = [
  { name: "Verdadeiro - Bumerangue do amor", icon: "70242" },
  { name: "Verdadeira - Lança da Antiguidade", icon: "70262" },
  { name: "Verdadeira - Cabeça de Boi", icon: "70276" },
  { name: "Verdadeiro - Chick Louco", icon: "70416" },
  { name: "Domador do Dragão Dourado", icon: "5527" },
  { name: "Verdadeiro - Proteção de Ares", icon: "14010" },
  { name: "Pedra de fortalecimento nível 5", icon: "11024" },
  { name: "Pulseira de Vênus +5", icon: "8514" },
  { name: "Anel da Fortuna +5", icon: "9525" },
  { name: "Super-Homem V", icon: "13100" },
  { name: "Verdadeiro - Dom de anjo", icon: "17002" },
  { name: "Escudo do Barão", icon: "17004" },
];

const RareItemsSection = () => {
  return (
    <section id="items" className="py-16 px-4 bg-card/50">
      <div className="container mx-auto">
        <h2 className="section-title mb-4">Itens Raros</h2>
        <p className="text-center text-muted-foreground mb-12 font-body">
          Conheça todos os itens raros disponíveis dentro do DDTank Brasil 3.6
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {items.map((item) => (
            <div key={item.icon} className="item-card group">
              <div className="w-16 h-16 mb-3 rounded-xl bg-gradient-to-br from-secondary/30 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <img
                  src={`https://play.ddtank36.com.br/Default/images/home/section-05/items/${item.icon}.png?v=1732271077&theme=Brasil36`}
                  alt={item.name}
                  className="w-12 h-12 object-contain"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <span className="font-display text-xs font-bold text-foreground leading-tight">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RareItemsSection;
