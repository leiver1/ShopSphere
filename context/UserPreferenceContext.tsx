"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface UserPreferece {
  location?: string | null;
  lang?: string | null;
  theme?: "dark" | "system" | "light";
  notifications?: boolean | null;
  connectedPlatform: string[];
}

interface UserPreferenceContextInterface {
  userPreference: UserPreferece;
  handleUserPreference: (input: any) => void;
}

export const UserPreferenceContext = createContext<
  UserPreferenceContextInterface | undefined
>(undefined);

interface UserPreferenceContextProps {
  children: ReactNode;
}
const UserPreferenceProvider: React.FC<UserPreferenceContextProps> = ({
  children,
}) => {
  const [userPreference, setUserPreference] = useState<UserPreferece>(() => {
    return {
      location: null,
      lang: null,
      theme: "system",
      notifications: null,
      connectedPlatform: [],
    };

    // const uesrLocal = localStorage.getItem("userPreference");
    // return uesrLocal
    //   ? JSON.parse(uesrLocal)
    //   : {
    //       location: null,
    //       lang: null,
    //       theme: "system",
    //       notifications: null,
    //       connectedPlatform: [],
    //     };
  });

  useEffect(() => {
    localStorage.setItem("userPreference", JSON.stringify(userPreference));
  }, [userPreference]);

  const handleUserPreference = (input: any) => {
    setUserPreference((prev) => {
      return {
        ...prev,
        ...input,
      };
    });
  };

  return (
    <UserPreferenceContext.Provider
      value={{ handleUserPreference, userPreference }}
    >
      {children}
    </UserPreferenceContext.Provider>
  );
};

export default UserPreferenceProvider;

export const useUserPreference = () => {
  const context = useContext(UserPreferenceContext);

  if (!context) {
    throw new Error("GRRTRRRRRRRRRRRRRRRRRRRRRRR no context set");
  }

  return context;
};
