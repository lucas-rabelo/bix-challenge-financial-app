"use client";
import { createContext, useEffect, useState } from "react";
import { getSession, login, logout } from "@/presentation/services/auth";

type Session = {
  user: {
    name: string;
    email: string;
  };
};

type AuthContextType = {
  session: Session | null;
  loading: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = getSession();
    setSession(data);
    setLoading(false);
  }, []);

  function handleLogin(email: string, password: string) {
    const session = login(email, password);
    setSession(session);
  }

  function handleLogout() {
    logout();
    setSession(null);
  }

  return (
    <AuthContext.Provider
      value={{
        session,
        loading,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
