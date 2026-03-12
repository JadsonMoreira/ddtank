import { useState } from "react";

type Period = /*"mensal" | "semanal" | */"geral";

const rankingData: Record<Period, { name: string; score: number; guild: string; avatar: string }[]> = {
//   mensal: [
//     { name: "Jadson123Loko", score: 48320, guild: "Lendários", avatar: "1" },
//     { name: "TankMaster99", score: 41750, guild: "Elite Force", avatar: "2" },
//     { name: "FuriaBR", score: 37900, guild: "Guerreiros", avatar: "3" },
//     { name: "SombraNoturna", score: 29400, guild: "Sombras", avatar: "4" },
//     { name: "BalaDeOuro", score: 25830, guild: "Lendários", avatar: "5" },
//     { name: "ReizinhoDDT", score: 22100, guild: "Elite Force", avatar: "6" },
//     { name: "NinjaVerde", score: 19750, guild: "Ninjas BR", avatar: "7" },
//     { name: "EstrelaCadente", score: 14300, guild: "Guerreiros", avatar: "8" },
//     { name: "TrovoAdamante", score: 11200, guild: "Trovões", avatar: "9" },
//     { name: "ZeusPoderoso", score: 8500, guild: "Olimpo", avatar: "10" },
//   ],
//   semanal: [
//     { name: "TankMaster99", score: 12400, guild: "Elite Force", avatar: "2" },
//     { name: "BalaDeOuro", score: 10980, guild: "Lendários", avatar: "5" },
//     { name: "Jadson123Loko", score: 9870, guild: "Lendários", avatar: "1" },
//     { name: "NinjaVerde", score: 8200, guild: "Ninjas BR", avatar: "7" },
//     { name: "FuriaBR", score: 7600, guild: "Guerreiros", avatar: "3" },
//     { name: "TrovoAdamante", score: 6300, guild: "Trovões", avatar: "9" },
//     { name: "SombraNoturna", score: 5700, guild: "Sombras", avatar: "4" },
//     { name: "ReizinhoDDT", score: 4400, guild: "Elite Force", avatar: "6" },
//     { name: "ZeusPoderoso", score: 3900, guild: "Olimpo", avatar: "10" },
//     { name: "EstrelaCadente", score: 2800, guild: "Guerreiros", avatar: "8" },
//   ],
  geral: [
    { name: "Jadson123Loko", score: 384500, guild: "Lendários", avatar: "1" },
    { name: "FuriaBR", score: 312700, guild: "Guerreiros", avatar: "3" },
    { name: "Ta7lor", score: 278300, guild: "Elite Force", avatar: "2" },
    { name: "SombraNoturna", score: 201400, guild: "Sombras", avatar: "4" },
    { name: "ReizinhoDDT", score: 189600, guild: "Elite Force", avatar: "6" },
    { name: "BalaDeOuro", score: 176000, guild: "Lendários", avatar: "5" },
    { name: "NinjaVerde", score: 143500, guild: "Ninjas BR", avatar: "7" },
    { name: "TrovoAdamante", score: 121800, guild: "Trovões", avatar: "9" },
    { name: "EstrelaCadente", score: 98400, guild: "Guerreiros", avatar: "8" },
    { name: "ZeusPoderoso", score: 76200, guild: "Olimpo", avatar: "10" },
  ],
};

const medalColors = [
  { bg: "from-yellow-400 to-yellow-600", border: "border-yellow-400", text: "text-yellow-700", label: "🥇" },
  { bg: "from-slate-300 to-slate-500", border: "border-slate-400", text: "text-slate-600", label: "🥈" },
  { bg: "from-amber-500 to-amber-700", border: "border-amber-500", text: "text-amber-700", label: "🥉" },
];

const getAvatarUrl = (id: string) =>
  `https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(id)}&backgroundColor=ffad08,ffd166,ef476f,06d6a0,118ab2`;

const formatScore = (n: number) => n.toLocaleString("pt-BR");

const PlayerRankingSection = () => {
  const [period, setPeriod] = useState<Period>("geral");
  const players = rankingData[period];
  const podium = players.slice(0, 3);
  const rest = players.slice(3);

  return (
    <section id="ranking" className="py-16 px-4 bg-card/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title mb-3">🏆 Hall da Fama</h2>
        <p className="text-center text-muted-foreground mb-8 font-body">
          Os melhores guerreiros da arena DDTank Brasil 3.6
        </p>

        {/* Period tabs */}
        {/* <div className="flex justify-center gap-2 mb-10">
          {(["mensal", "semanal", "geral"] as Period[]).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-5 py-2 rounded-full font-display font-bold text-sm transition-all capitalize ${
                period === p
                  ? "bg-primary text-primary-foreground shadow-md scale-105"
                  : "bg-muted text-muted-foreground hover:bg-primary/20"
              }`}
            >
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div> */}

        {/* Podium – top 3 */}
        <div className="flex justify-center items-end gap-4 mb-10">
          {/* 2nd place */}
          <div className="flex flex-col items-center gap-2 mb-0">
            <div className={`relative w-16 h-16 rounded-full border-4 ${medalColors[1].border} overflow-hidden bg-gradient-to-br ${medalColors[1].bg}`}>
              <img src={getAvatarUrl(podium[1].avatar)} alt={podium[1].name} className="w-full h-full object-cover" />
            </div>
            <span className="text-2xl font-display font-bold text-slate-500">#2</span>
            <div className={`w-24 rounded-t-xl bg-gradient-to-b ${medalColors[1].bg} py-4 px-2 flex flex-col items-center shadow-md`} style={{ height: "90px" }}>
              <span className="font-display font-bold text-xs text-white text-center leading-tight truncate w-full">{podium[1].name}</span>
              <span className="font-body text-xs text-white/80 mt-1">{formatScore(podium[1].score)}</span>
            </div>
          </div>

          {/* 1st place */}
          <div className="flex flex-col items-center gap-2">
            <div className="text-3xl animate-bounce">👑</div>
            <div className={`relative w-20 h-20 rounded-full border-4 ${medalColors[0].border} overflow-hidden bg-gradient-to-br ${medalColors[0].bg}`}>
              <img src={getAvatarUrl(podium[0].avatar)} alt={podium[0].name} className="w-full h-full object-cover" />
            </div>
            <span className="text-2xl font-display font-bold text-yellow-500">#1</span>
            <div className={`w-28 rounded-t-xl bg-gradient-to-b ${medalColors[0].bg} py-4 px-2 flex flex-col items-center shadow-lg`} style={{ height: "120px" }}>
              <span className="font-display font-bold text-sm text-white text-center leading-tight truncate w-full">{podium[0].name}</span>
              <span className="font-body text-xs text-white/80 mt-1">{formatScore(podium[0].score)}</span>
              <span className="mt-1 text-xs bg-white/20 rounded-full px-2 py-0.5 text-white font-body">{podium[0].guild}</span>
            </div>
          </div>

          {/* 3rd place */}
          <div className="flex flex-col items-center gap-2 mb-0">
            <div className={`relative w-16 h-16 rounded-full border-4 ${medalColors[2].border} overflow-hidden bg-gradient-to-br ${medalColors[2].bg}`}>
              <img src={getAvatarUrl(podium[2].avatar)} alt={podium[2].name} className="w-full h-full object-cover" />
            </div>
            <span className="text-2xl font-display font-bold text-amber-600">#3</span>
            <div className={`w-24 rounded-t-xl bg-gradient-to-b ${medalColors[2].bg} py-4 px-2 flex flex-col items-center shadow-md`} style={{ height: "75px" }}>
              <span className="font-display font-bold text-xs text-white text-center leading-tight truncate w-full">{podium[2].name}</span>
              <span className="font-body text-xs text-white/80 mt-1">{formatScore(podium[2].score)}</span>
            </div>
          </div>
        </div>

        {/* Positions 4–10 */}
        <div className="rounded-2xl border-2 border-border overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
          {rest.map((player, idx) => {
            const pos = idx + 4;
            return (
              <div
                key={player.name}
                className={`flex items-center gap-4 px-5 py-3 transition-colors hover:bg-primary/5 ${idx % 2 === 0 ? "bg-card" : "bg-muted/40"}`}
              >
                <span className="w-7 text-center font-display font-bold text-muted-foreground text-sm">
                  #{pos}
                </span>
                <div className="w-9 h-9 rounded-full border-2 border-border overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex-shrink-0">
                  <img src={getAvatarUrl(player.avatar)} alt={player.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-display font-bold text-sm text-foreground block truncate">{player.name}</span>
                  <span className="font-body text-xs text-muted-foreground">{player.guild}</span>
                </div>
                <span className="font-display font-bold text-sm text-primary whitespace-nowrap">
                  {formatScore(player.score)} Poder
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlayerRankingSection;
