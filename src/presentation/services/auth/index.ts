import type { Session } from "./types";

const AUTH_COOKIE = "auth_session";

export function login(email: string, password: string) {
  if (!email || !password) {
    throw new Error("Invalid credentials");
  }

  const session: Session = {
    user: {
      name: "Nicolas Souza",
      email,
    },
  };

  document.cookie = `${AUTH_COOKIE}=${encodeURIComponent(
    JSON.stringify(session)
  )}; path=/`;

  localStorage.setItem(AUTH_COOKIE, JSON.stringify(session));

  return session;
}

export function logout() {
  document.cookie = `${AUTH_COOKIE}=; path=/; max-age=0`;
  localStorage.removeItem(AUTH_COOKIE);
}

export function getSession(): Session | null {
  if (typeof document === "undefined") return null;

  const cookie = document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${AUTH_COOKIE}=`));

  if (!cookie) return null;

  try {
    const value = cookie.split("=")[1];
    return JSON.parse(decodeURIComponent(value));
  } catch {
    return null;
  }
}