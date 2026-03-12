import { useState } from "react";
import { Menu, X, Instagram, User } from "lucide-react";
import LoginModal from "@/components/LoginModal";
import ProfileModal from "@/components/ProfileModal";
import { useAuth } from "@/contexts/AuthContext";

const navLinks = [
  { label: "INÍCIO", href: "#" },
  { label: "JOGAR", href: "#"  },
  { label: "DOWNLOADS", href: "#" },
  { label: "ITENS RAROS", href: "#" },
  { label: "SUPORTE", href: "#" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user } = useAuth();

  return (
    <>
    <nav className="navbar-game sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <a href="#" className="flex items-center">
          <img
            src="/assets/logo.png"
            alt="DDTank 3.6"
            className="h-12 w-auto"
          />
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-display font-bold text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.instagram.com/ddtankbr3.6/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <Instagram size={20} />
          </a>
          {user ? (
            <button
              onClick={() => setProfileOpen(true)}
              className="flex items-center gap-2 bg-muted/30 hover:bg-muted/50 text-primary-foreground font-display font-bold px-3 py-1.5 rounded-full transition-all text-sm border border-primary-foreground/20"
            >
              <img
                src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(user.username)}`}
                alt="avatar"
                className="w-6 h-6 rounded-full border border-primary-foreground/40"
              />
              {user.username}
            </button>
          ) : (
            <button
              onClick={() => setLoginOpen(true)}
              className="flex items-center gap-2 bg-muted/30 hover:bg-muted/50 text-primary-foreground font-display font-bold px-5 py-2 rounded-full transition-all text-sm border border-primary-foreground/20"
            >
              <User size={16} />
              Entrar
            </button>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden navbar-game border-t border-primary-foreground/20 pb-4">
          <ul className="flex flex-col items-center gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display font-bold text-primary-foreground text-lg"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              {user ? (
                <button
                  onClick={() => { setOpen(false); setProfileOpen(true); }}
                  className="flex items-center gap-2 bg-primary-foreground/20 text-primary-foreground font-display font-bold px-6 py-2 rounded-full mt-2"
                >
                  <img
                    src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(user.username)}`}
                    alt="avatar"
                    className="w-6 h-6 rounded-full border border-primary-foreground/40"
                  />
                  {user.username}
                </button>
              ) : (
                <button
                  onClick={() => { setOpen(false); setLoginOpen(true); }}
                  className="flex items-center gap-2 bg-primary-foreground/20 text-primary-foreground font-display font-bold px-6 py-2 rounded-full mt-2"
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
