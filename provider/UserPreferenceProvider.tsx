import { ReactNode } from "react";

interface UserPreferenceProviderProps {
  children: ReactNode;
}
const UserPreferenceProvider: React.FC<UserPreferenceProviderProps> = ({
  children,
}) => {
  return <UserPreferenceProvider>{children}</UserPreferenceProvider>;
};

export default UserPreferenceProvider;
