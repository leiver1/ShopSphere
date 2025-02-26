"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { getSession } from "next-auth/react"; // Importiere getSession, um die Sitzung zu holen

interface SessionProviderProps {
  children: ReactNode;
}

// Asynchrone Funktion, um die Sitzung abzurufen
const AuthSessionProvider: React.FC<SessionProviderProps> = ({ children }) => {
  const session = getSession(); // Holt die Sitzung (kann auch in einem useEffect oder useSession Hook verwendet werden)

  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default AuthSessionProvider;
