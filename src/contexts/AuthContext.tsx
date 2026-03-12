/* @refresh reset */
import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  username: string;
  email: string;
  avatar: string;
  phone: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, _password: string): boolean => {
    // Mock: any non-empty username/password is accepted
    if (!username.trim()) return false;
    setUser({
      username,
      email: `${username.toLowerCase()}@ddtank.com`,
      avatar: `https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(username)}`,
      phone: "",
    });
    return true;
  };

  const logout = () => setUser(null);

  const updateProfile = (data: Partial<User>) => {
    setUser((prev) => (prev ? { ...prev, ...data } : prev));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
