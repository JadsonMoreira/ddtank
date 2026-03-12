import { useState, useEffect } from "react";
import { Menu, X, Instagram, User } from "lucide-react";
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
  const [scrolled, setScrolled] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-background/85 shadow-lg border-b border-border"
            : "bg-gradient-to-b from-[hsl(30,100%,48%)] to-[hsl(25,100%,42%)]"
        }`}
      >
        {/* accent line */}
        <div className="h-[2px] bg-gradient-to-r from-orange-600 via-primary to-yellow-400" />

        <div className="container mx-auto flex items-center justify-between px-4 py-2.5">
          <a href="#" className="flex items-center">
            <img src="/assets/logo.png" alt="DDTank 3.6" className="h-11 w-auto" />
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`relative group font-display font-semibold text-sm px-3 py-2 rounded-lg transition-all ${
                    scrolled
                      ? "text-foreground hover:text-primary hover:bg-primary/8"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                  <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.instagram.com/ddtankbr3.6/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                scrolled ? "text-muted-foreground hover:text-primary" : "text-white/80 hover:text-white"
              }`}
            >
              <Instagram size={20} />
            </a>

            {user ? (
              <button
                onClick={() => setProfileOpen(true)}
                className={`flex items-center gap-2 font-display font-semibold text-sm px-3 py-1.5 rounded-full border transition-all ${
                  scrolled
                    ? "bg-muted hover:bg-primary/10 text-foreground border-border hover:border-primary/40"
                    : "bg-white/15 hover:bg-white/25 text-white border-white/25"
                }`}
              >
                <img
                  src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(user.username)}`}
                  alt="avatar"
                  className="w-6 h-6 rounded-full border border-white/40"
                />
                {user.username}
              </button>
            ) : (
              <button
                onClick={() => setLoginOpen(true)}
                className={`flex items-center gap-2 font-display font-semibold text-sm px-5 py-2 rounded-full transition-all shadow-md ${
                  scrolled
                    ? "bg-primary text-white hover:bg-primary/90 shadow-primary/30"
                    : "bg-white text-primary hover:bg-white/90"
                }`}
              >
                <User size={15} />
                Entrar
              </button>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            className={`md:hidden border-t pb-4 ${
              scrolled ? "bg-background/95 backdrop-blur-xl border-border" : "bg-[hsl(24,100%,44%)] border-white/20"
            }`}
          >
            <ul className="flex flex-col items-center gap-1 pt-3 px-4">
              {navLinks.map((link) => (
                <li key={link.label} className="w-full">
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block text-center font-display font-semibold text-base py-2.5 rounded-xl transition-colors ${
                      scrolled
                        ? "text-foreground hover:bg-primary/10 hover:text-primary"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="w-full pt-2">
                {user ? (
                  <button
                    onClick={() => { setOpen(false); setProfileOpen(true); }}
                    className="w-full flex items-center justify-center gap-2 bg-primary text-white font-display font-bold py-2.5 rounded-xl"
                  >
                    <img
                      src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(user.username)}`}
                      alt="avatar"
                      className="w-6 h-6 rounded-full border border-white/60"
                    />
                    {user.username}
                  </button>
                ) : (
                  <button
                    onClick={() => { setOpen(false); setLoginOpen(true); }}
                    className="w-full flex items-center justify-center gap-2 bg-primary text-white font-display font-bold py-2.5 rounded-xl"
                  >
                    <User size={16} />
                    Entrar
                  </button>
                )}
              </li>
            </ul>
          </div>
        )}
      </nav>

      <LoginModal open={loginOpen} onOpenChange={setLoginOpen} />
      <ProfileModal open={profileOpen} onOpenChange={setProfileOpen} />
    </>
  );
};

export default Navbar;
