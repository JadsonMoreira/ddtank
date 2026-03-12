import { useState } from "react";
import { User, Lock, LogOut, Save, Eye, EyeOff, Mail, Phone } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useAuth } from "@/contexts/AuthContext";

interface ProfileModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const inputClass =
  "w-full pl-10 pr-4 py-2.5 rounded-lg border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-body text-sm";

type Tab = "profile" | "password";

const ProfileModal = ({ open, onOpenChange }: ProfileModalProps) => {
  const { user, logout, updateProfile } = useAuth();
  const [tab, setTab] = useState<Tab>("profile");

  // Edit profile state
  const [username, setUsername] = useState(user?.username ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [phone, setPhone] = useState(user?.phone ?? "");
  const [profileSaved, setProfileSaved] = useState(false);

  // Change password state
  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [pwSaved, setPwSaved] = useState(false);
  const [pwError, setPwError] = useState("");

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;
    updateProfile({ username: username.trim(), email: email.trim(), phone: phone.trim() });
    setProfileSaved(true);
    setTimeout(() => setProfileSaved(false), 2500);
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    setPwError("");
    if (newPw.length < 6) { setPwError("A nova senha deve ter pelo menos 6 caracteres."); return; }
    if (newPw !== confirmPw) { setPwError("As senhas não coincidem."); return; }
    setPwSaved(true);
    setCurrentPw(""); setNewPw(""); setConfirmPw("");
    setTimeout(() => setPwSaved(false), 2500);
  };

  const handleLogout = () => {
    logout();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-2 border-border bg-card p-0 overflow-hidden">
        {/* Header */}
        <div className="navbar-game px-6 py-5">
          <DialogHeader>
            <DialogTitle className="text-primary-foreground font-display text-2xl text-center">
              Minha Conta
            </DialogTitle>
          </DialogHeader>
        </div>

        {/* Avatar + nome */}
        <div className="flex flex-col items-center gap-2 pt-5 pb-2 px-6">
          <div className="w-16 h-16 rounded-full border-4 border-primary overflow-hidden bg-gradient-to-br from-secondary/30 to-primary/20">
            <img
              src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(user?.username ?? "user")}`}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-display font-bold text-lg text-foreground">{user?.username}</span>
          <span className="font-body text-sm text-muted-foreground">{user?.email}</span>
        </div>

        {/* Tabs */}
        <div className="flex mx-6 mt-2 rounded-lg overflow-hidden border-2 border-border">
          <button
            onClick={() => setTab("profile")}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 font-display font-bold text-sm transition-colors ${
              tab === "profile" ? "navbar-game text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-border"
            }`}
          >
            <User size={15} /> Editar Perfil
          </button>
          <button
            onClick={() => setTab("password")}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 font-display font-bold text-sm transition-colors ${
              tab === "password" ? "navbar-game text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-border"
            }`}
          >
            <Lock size={15} /> Trocar Senha
          </button>
        </div>

        {/* Tab content */}
        <div className="px-6 py-4">
          {tab === "profile" ? (
            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-sm font-display font-bold text-foreground">Usuário</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Seu usuário"
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-display font-bold text-foreground">E-mail</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu e-mail"
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-display font-bold text-foreground">Telefone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(00) 00000-0000"
                    className={inputClass}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 navbar-game text-primary-foreground font-display font-bold py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
              >
                <Save size={16} />
                {profileSaved ? "Salvo!" : "Salvar Alterações"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleChangePassword} className="space-y-4">
              {[
                { label: "Senha Atual", value: currentPw, set: setCurrentPw, show: showCurrent, toggle: () => setShowCurrent((v) => !v) },
                { label: "Nova Senha", value: newPw, set: setNewPw, show: showNew, toggle: () => setShowNew((v) => !v) },
                { label: "Confirmar Nova Senha", value: confirmPw, set: setConfirmPw, show: showConfirm, toggle: () => setShowConfirm((v) => !v) },
              ].map(({ label, value, set, show, toggle }) => (
                <div key={label} className="space-y-1.5">
                  <label className="text-sm font-display font-bold text-foreground">{label}</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type={show ? "text" : "password"}
                      value={value}
                      onChange={(e) => set(e.target.value)}
                      placeholder="••••••••"
                      className={`${inputClass} pr-10`}
                    />
                    <button type="button" onClick={toggle} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                      {show ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
              ))}
              {pwError && <p className="text-sm text-destructive font-body">{pwError}</p>}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 navbar-game text-primary-foreground font-display font-bold py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
              >
                <Lock size={16} />
                {pwSaved ? "Senha Alterada!" : "Trocar Senha"}
              </button>
            </form>
          )}
        </div>

        {/* Logout */}
        <div className="px-6 pb-6">
          <div className="border-t-2 border-border pt-4">
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 bg-destructive/10 hover:bg-destructive/20 text-destructive font-display font-bold py-3 rounded-lg transition-colors text-sm border-2 border-destructive/30"
            >
              <LogOut size={16} />
              Sair da Conta
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;
