// src/components/Loading.tsx

"use client";
import { Loader2 } from "lucide-react"; // Importiere das ShadCN UI Spinner Icon
import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex items-center space-x-2">
        {/* ShadCN UI Loader (Spinner) */}
        <Loader2 className="animate-spin text-blue-500 w-12 h-12" />
      </div>
    </div>
  );
};

export default Loading;
