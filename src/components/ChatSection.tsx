import { useState, useRef, useEffect } from "react";
import { Send, MessageCircle, Users } from "lucide-react";

interface Message {
  id: number;
  user: string;
  avatar: string;
  text: string;
  time: string;
  isSelf: boolean;
}

const mockMessages: Message[] = [
  { id: 1, user: "DragonSlayer", avatar: "🐉", text: "Alguém quer fazer dungeon comigo?", time: "18:30", isSelf: false },
  { id: 2, user: "StarFighter", avatar: "⭐", text: "Bora! Qual servidor?", time: "18:31", isSelf: false },
  { id: 3, user: "Você", avatar: "🎮", text: "Servidor 3, sala 5!", time: "18:32", isSelf: true },
  { id: 4, user: "NinjaKiller", avatar: "🥷", text: "Acabei de pegar o Bumerangue do Amor!", time: "18:33", isSelf: false },
  { id: 5, user: "MagicQueen", avatar: "👑", text: "Parabéns!! Esse é muito raro 🔥", time: "18:34", isSelf: false },
  { id: 6, user: "Você", avatar: "🎮", text: "Sortudo demais! Eu tô tentando há semanas 😭", time: "18:35", isSelf: true },
  { id: 7, user: "DragonSlayer", avatar: "🐉", text: "Novo evento de Super Trocas tá insano, já viram?", time: "18:36", isSelf: false },
  { id: 8, user: "PixelWarrior", avatar: "⚔️", text: "Sim! Consegui 3 itens raros no drop", time: "18:37", isSelf: false },
];

const onlineUsers = [
  { name: "DragonSlayer", avatar: "🐉" },
  { name: "StarFighter", avatar: "⭐" },
  { name: "NinjaKiller", avatar: "🥷" },
  { name: "MagicQueen", avatar: "👑" },
  { name: "PixelWarrior", avatar: "⚔️" },
  { name: "FireMage", avatar: "🔥" },
  { name: "IcePhoenix", avatar: "❄️" },
];

const ChatSection = () => {
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMsg: Message = {
      id: Date.now(),
      user: "Você",
      avatar: "🎮",
      text: input.trim(),
      time: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
      isSelf: true,
    };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");
  };

  return (
    <section id="chat" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="section-title mb-12">
          <MessageCircle className="inline-block mr-3 text-accent" size={40} />
          Chat da Comunidade
        </h2>

        <div className="max-w-5xl mx-auto flex gap-4 h-[500px]">
          {/* Chat main */}
          <div className="flex-1 chat-container flex flex-col">
            {/* Header */}
            <div className="px-4 py-3 border-b-2 border-border bg-muted/50 flex items-center gap-2">
              <MessageCircle size={18} className="text-primary" />
              <span className="font-display font-bold text-foreground"># chat-geral</span>
              <span className="ml-auto text-xs text-muted-foreground font-body">
                {onlineUsers.length} online
              </span>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 animate-slide-in ${msg.isSelf ? "flex-row-reverse" : ""}`}
                >
                  <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-lg flex-shrink-0">
                    {msg.avatar}
                  </div>
                  <div className={`max-w-[70%] ${msg.isSelf ? "text-right" : ""}`}>
                    <div className="flex items-center gap-2 mb-0.5">
                      {!msg.isSelf && (
                        <span className="font-display text-sm font-bold text-primary">{msg.user}</span>
                      )}
                      <span className="text-xs text-muted-foreground">{msg.time}</span>
                    </div>
                    <div
                      className={`inline-block px-3 py-2 rounded-2xl text-sm font-body ${
                        msg.isSelf
                          ? "bg-primary text-primary-foreground rounded-br-md"
                          : "bg-muted text-foreground rounded-bl-md"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t-2 border-border">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
                className="flex gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 px-4 py-2.5 rounded-full bg-muted border-2 border-border focus:border-primary outline-none font-body text-sm text-foreground placeholder:text-muted-foreground transition-colors"
                />
                <button
                  type="submit"
                  className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-105 transition-transform"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>

          {/* Users sidebar */}
          <div className="hidden lg:flex chat-container w-56 flex-col">
            <div className="px-4 py-3 border-b-2 border-border bg-muted/50 flex items-center gap-2">
              <Users size={18} className="text-accent" />
              <span className="font-display font-bold text-foreground text-sm">Online</span>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {onlineUsers.map((user) => (
                <div key={user.name} className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-muted/50 transition-colors">
                  <span className="text-lg">{user.avatar}</span>
                  <span className="font-body text-sm text-foreground font-medium">{user.name}</span>
                  <span className="ml-auto w-2 h-2 rounded-full bg-green-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;
