import { useState } from "react";

const newsItems = [
  { title: "Ranking Free!", desc: "Retorno do nosso Ranking...", slug: "rankinkg-free", date: "há 1 semana", type: "Evento" },
  { title: "Carnaval no DDT", desc: "🎉🎭 Carnaval no DDT 🎭🎉 A...", slug: "carnaval-no-ddt", date: "há 3 semanas", type: "Notícia" },
  { title: "Zootopia", desc: "EVENTO ZOOTOPIA🐾 A diversão...", slug: "zootopia", date: "há 1 mês", type: "Evento" },
  { title: "Ano Novo!", desc: "Ano Novo chegou! Prepare-se...", slug: "ano-novo", date: "há 2 meses", type: "Evento" },
  { title: "Ranking Free do Formigueiro!", desc: "Ranking Free do Formigueiro! O...", slug: "ranking-free-do-formigueiro", date: "há 3 meses", type: "Evento" },
  { title: "Evento: O Lado da Força!", desc: "Evento: O Lado da Força! 📰🌟 Atenção,...", slug: "evento-o-lado-da-forca", date: "há 3 meses", type: "Notícia" },
  { title: "Coleção Meme!", desc: "Coleção Meme! Prepare...", slug: "colecao-meme", date: "há 3 meses", type: "Evento" },
  { title: "Dia da Bandeira", desc: "🇧🇷 Evento Especial do...", slug: "dia-da-bandeira", date: "há 3 meses", type: "Evento" },
  { title: "Baú Misterioso", desc: "✨🔮 Evento Especial: Baú...", slug: "bau-misterioso", date: "há 6 meses", type: "Evento" },
  { title: "Evento de Inverno", desc: "❄️🔥 CHEGOU O EVENTO DE...", slug: "evento-de-inverno", date: "há 6 meses", type: "Evento" },
  { title: "Código Secreto", desc: "🎉 Novo Evento: CÓDIGO...", slug: "codigo-secreto", date: "há 7 meses", type: "Evento" },
  { title: "Super Pokémon", desc: "🎮✨ Evento: Super Pokémon...", slug: "super-pokemon", date: "há 8 meses", type: "Evento" },
  { title: "Guerra de Sociedades", desc: "🎉⚔ Guerra de Sociedades...", slug: "guerra-de-sociedades", date: "há 8 meses", type: "Evento" },
  { title: "Super Trocas + Fugura Antiga!", desc: "🏴‍☠️🔥 Evento Especial:...", slug: "super-trocas-fugura-antiga", date: "há 7 meses", type: "Evento" },
];

const ITEMS_PER_PAGE = 3;

const NewsSection = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(newsItems.length / ITEMS_PER_PAGE);
  const visibleItems = newsItems.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  return (
    <section id="news" className="py-16 px-4" style={{ backgroundImage: "url('data:image/svg+xml,...')" }}>
      <div className="container mx-auto">
        <h2 className="section-title mb-12">Notícias</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {visibleItems.map((item) => (
            <a
              key={item.slug}
              // href={`https://ddtank36.com.br/${item.slug}`}
              // target="_blank"
              rel="noopener noreferrer"
              className="notice-card block"
            >
              <img
                src={`https://play.ddtank36.com.br/Brasil36/images/home/image-error.png?v=1732271342&theme=Brasil36`}
                alt={item.title}
                loading="lazy"
              />
              <div className="notice-card-textgroup">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-display font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                    {item.type}
                  </span>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>
                <span className="notice-card-title">{item.title}</span>
                <p className="notice-card-description">{item.desc}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`notice-pagination-btn ${page === i ? "active" : ""}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
