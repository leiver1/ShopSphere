"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { SnackbarProvider as SnProvider } from "notistack";
import { ReactNode } from "react";

interface SnackbarProviderProps {
  children: ReactNode;
}
const SnackbarProvider: React.FC<SnackbarProviderProps> = ({ children }) => {
  return (
    <div>
      <SnProvider
        iconVariant={{
          success: (
            <Icon
              icon="lucide:check-check"
              className="h-7 w-7"
              style={{ marginRight: "10px" }} // Abstand zum Text erhöhen
            />
          ),
          error: (
            <Icon
              icon="lucide:x"
              className="h-7 w-7"
              style={{ marginRight: "10px" }}
            />
          ),
          warning: (
            <Icon
              icon="lucide:message-circle-warning"
              className="h-7 w-7"
              style={{ marginRight: "10px" }}
            />
          ),
          info: (
            <Icon
              icon="lucide:info"
              className="h-7 w-7"
              style={{ marginRight: "10px" }}
            />
          ),
        }}
      >
        {children}
      </SnProvider>
    </div>
  );
};

export default SnackbarProvider;
