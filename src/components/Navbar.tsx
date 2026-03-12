import { useState } from "react";
import { Menu, X, Instagram, User, Gamepad2 } from "lucide-react";
import LoginModal from "@/components/LoginModal";
import ProfileModal from "@/components/ProfileModal";
import { useAuth } from "@/contexts/AuthContext";

const navLinks = [
  { label: "Início", href: "#" },
  { label: "Jogar", href: "#" },
  { label: "Downloads", href: "#" },
  { label: "Itens Raros", href: "#" },
  { label: "Suporte", href: "#" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user } = useAuth();

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-transparent shadow-lg shadow-black/20">
        {/* top accent line */}
        <div className="h-[3px] bg-gradient-to-r from-orange-700 via-primary to-yellow-400" />

        <div className="container mx-auto px-4 py-2.5 md:px-5">
          <div className="flex items-center justify-between rounded-2xl border border-white/15 bg-black/20 px-4 py-2">

          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img src="/assets/logo.png" alt="DDTank 3.6" className="h-10 w-auto hover:opacity-90 transition-opacity" />
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center rounded-xl border border-white/15 bg-black/10 px-1.5">
            {navLinks.map((link, i) => (
              <li key={link.label} className="flex items-center">
                <a
                  href={link.href}
                  className="relative group rounded-lg font-display text-[20px] font-semibold tracking-wide px-4 py-2 text-white transition-colors duration-150 hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-[2px] origin-center scale-x-0 rounded-full bg-gradient-to-r from-primary to-yellow-400 transition-transform duration-200 group-hover:scale-x-100" />
                </a>
                {i < navLinks.length - 1 && (
                  <span className="text-white/15 text-xs select-none px-0.5">·</span>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop right actions */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://www.instagram.com/ddtankbr3.6/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-white transition-all hover:bg-white/10 hover:text-white"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>

            <div className="w-px h-5 bg-white/15 mx-0.5" />

            {user ? (
              <button
                onClick={() => setProfileOpen(true)}
                className="flex items-center gap-2 h-9 bg-white/8 hover:bg-white/15 border border-white/12 hover:border-primary/40 text-white font-display font-semibold text-sm px-3 rounded-full transition-all duration-200"
              >
                <img
                  src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(user.username)}`}
                  alt="avatar"
                  className="w-5 h-5 rounded-full ring-1 ring-primary/50"
                />
                <span className="max-w-[100px] truncate">{user.username}</span>
              </button>
            ) : (
              <button
                onClick={() => setLoginOpen(true)}
                className="flex items-center gap-1.5 h-9 bg-white/8 hover:bg-white/15 border border-white/12 hover:border-white/25 text-white hover:text-white font-display font-semibold text-sm px-4 rounded-full transition-all duration-200"
              >
                <User size={14} />
                Entrar
              </button>
            )}

            <a
              href="#"
              className="flex items-center gap-1.5 h-9 rounded-full bg-gradient-to-r from-primary to-orange-500 px-5 font-display text-sm font-bold text-white shadow-lg shadow-primary/35 transition-all duration-200 hover:scale-105 hover:from-orange-500 hover:to-primary hover:shadow-primary/55"
            >
              <Gamepad2 size={14} />
              Jogar
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg bg-white/8 text-white transition-colors hover:bg-white/15"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-white/15 bg-black/55 backdrop-blur-md pb-5">
            <ul className="flex flex-col pt-2 px-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-lg border-b border-white/5 py-3 font-display text-sm font-semibold text-white/65 transition-colors hover:border-primary/25 hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                    <span className="text-white/20 text-xs">›</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="px-4 pt-4 flex flex-col gap-2">
              <a
                href="#"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-orange-500 text-white font-display font-bold py-3 rounded-xl shadow-lg shadow-primary/30"
              >
                <Gamepad2 size={16} />
                Jogar Agora
              </a>
              {user ? (
                <button
                  onClick={() => { setOpen(false); setProfileOpen(true); }}
                  className="flex items-center justify-center gap-2 bg-white/8 border border-white/12 text-white font-display font-semibold py-3 rounded-xl"
                >
                  <img
                    src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(user.username)}`}
                    alt="avatar"
                    className="w-5 h-5 rounded-full ring-1 ring-primary/50"
                  />
                  {user.username}
                </button>
              ) : (
                <button
                  onClick={() => { setOpen(false); setLoginOpen(true); }}
                  className="flex items-center justify-center gap-2 bg-white/5 border border-white/8 text-white/65 font-display font-semibold py-3 rounded-xl"
                >
                  <User size={15} />
                  Entrar
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      <LoginModal open={loginOpen} onOpenChange={setLoginOpen} />
      <ProfileModal open={profileOpen} onOpenChange={setProfileOpen} />
    </>
  );
};

export default Navbar;
