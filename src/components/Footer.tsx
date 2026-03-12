import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="navbar-game py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src="/assets/logo.png"
            alt="DDTank 3.6"
            className="h-10 w-auto"
          />
          <span className="font-display font-bold text-primary-foreground text-sm">
            DDTank Brasil 3.6
          </span>
        </div>

        <p className="text-primary-foreground/70 font-body text-sm text-center">
          © 2026 DDTank Brasil 3.6. Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/ddtankbr3.6/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
