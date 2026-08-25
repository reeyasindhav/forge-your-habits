import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type User = { name: string; email: string };

const KEY = "habitforge.user";

type AuthValue = {
  user: User | null;
  ready: boolean;
  signIn: (email: string, name?: string) => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthValue>({
  user: null,
  ready: false,
  signIn: () => {},
  signOut: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setUser(JSON.parse(raw) as User);
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  const value = useMemo<AuthValue>(
    () => ({
      user,
      ready,
      signIn: (email, name) => {
        const handle = (email.split("@")[0] ?? "").replace(/\W/g, " ").trim();
        const next = { email, name: name || handle || "Alex Morgan" };
        localStorage.setItem(KEY, JSON.stringify(next));
        setUser(next);
      },
      signOut: () => {
        localStorage.removeItem(KEY);
        setUser(null);
      },
    }),
    [user, ready],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);

export function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}
