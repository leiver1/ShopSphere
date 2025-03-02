import "./globals.css";
import { ReactNode, useEffect, useRef } from "react";
import { ThemeProvider } from "@/provider/ThemeProvider";
import SessionProviders from "../provider/AuthSessionProvider";
import SnackbarProvider from "@/provider/SnackbarProvider";
import LoadingProvider from "@/provider/LoadingProvider";
import UserPreferenceProvider from "@/context/UserPreferenceContext";
import { useSession } from "next-auth/react";
import Loading from "@/components/ui/animation/Loading";
import OrderProvider from "@/context/OrderContext";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <SessionProviders>
            <SnackbarProvider>
              <UserPreferenceProvider>
                <OrderProvider>
                  <ThemeProvider>
                    <LoadingProvider>{children}</LoadingProvider>
                  </ThemeProvider>
                </OrderProvider>
              </UserPreferenceProvider>
            </SnackbarProvider>
          </SessionProviders>
        </body>
      </html>
    </>
  );
}
