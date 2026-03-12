import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { User, Lock, LogIn, Mail, UserPlus, CheckSquare } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const inputClass =
  "w-full pl-10 pr-4 py-2.5 rounded-lg border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-body text-sm";

const LoginModal = ({ open, onOpenChange }: LoginModalProps) => {
  const { login } = useAuth();
  const [isRegister, setIsRegister] = useState(false);

  // Login
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Registro
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const resetFields = () => {
    setUsername("");
    setPassword("");
    setName("");
    setEmail("");
    setRegPassword("");
    setConfirmPassword("");
    setAcceptTerms(false);
  };

  const toggleMode = () => {
    resetFields();
    setIsRegister((prev) => !prev);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = login(username, password);
    if (ok) {
      onOpenChange(false);
      resetFields();
      setIsRegister(false);
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: implementar lógica de registro
    console.log("Registro:", { name, email, regPassword, confirmPassword, acceptTerms });
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        if (!v) {
          resetFields();
          setIsRegister(false);
        }
        onOpenChange(v);
      }}
    >
      <DialogContent className="sm:max-w-md border-2 border-border bg-card p-0 overflow-hidden">
        {/* Header com gradiente igual à navbar */}
        <div className="navbar-game px-6 py-5">
          <DialogHeader>
            <DialogTitle className="text-primary-foreground font-display text-2xl text-center">
              {isRegister ? "Criar sua conta" : "Entrar na sua conta"}
            </DialogTitle>
          </DialogHeader>
        </div>

        {!isRegister ? (
          /* Formulário de Login */
          <form onSubmit={handleLogin} className="px-6 pb-6 pt-4 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-display font-bold text-foreground">
                Usuário
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Digite seu usuário"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-display font-bold text-foreground">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua senha"
                  className={inputClass}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 navbar-game text-primary-foreground font-display font-bold py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              <LogIn size={18} />
              Entrar
            </button>

            <div className="text-center space-y-2">
              <a href="#" className="text-sm text-primary hover:underline font-body block">
                Esqueceu sua senha?
              </a>
              <button
                type="button"
                onClick={toggleMode}
                className="text-sm text-primary hover:underline font-body"
              >
                Não tem conta? <span className="font-bold">Criar conta</span>
              </button>
            </div>
          </form>
        ) : (
          /* Formulário de Registro */
          <form onSubmit={handleRegister} className="px-6 pb-6 pt-4 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-display font-bold text-foreground">
                Nome
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Digite seu nome"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-display font-bold text-foreground">
                E-mail
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Digite seu e-mail"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-display font-bold text-foreground">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="password"
                  value={regPassword}
                  onChange={(e) => setRegPassword(e.target.value)}
                  placeholder="Digite sua senha"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-display font-bold text-foreground">
                Confirmar Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirme sua senha"
                  className={inputClass}
                />
              </div>
            </div>

            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-border text-primary accent-primary focus:ring-primary"
              />
              <span className="text-sm text-foreground font-body">
                Concordo com os{" "}
                <a href="#" className="text-primary hover:underline font-bold">
                  Termos de Privacidade
                </a>
              </span>
            </label>

            <button
              type="submit"
              disabled={!acceptTerms}
              className="w-full flex items-center justify-center gap-2 navbar-game text-primary-foreground font-display font-bold py-3 rounded-lg hover:opacity-90 transition-opacity text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <UserPlus size={18} />
              Criar Conta
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={toggleMode}
                className="text-sm text-primary hover:underline font-body"
              >
                Já tem conta? <span className="font-bold">Entrar</span>
              </button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
