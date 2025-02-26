"use client";

import Loading from "@/components/ui/animation/Loading";
import { useSession } from "next-auth/react";
import { ReactNode } from "react";

interface LoadingProviderProps {
  children: ReactNode;
}
const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const { data: status } = useSession();
  return <div>{status === "loading" ? <Loading /> : children}</div>;
};

export default LoadingProvider;
