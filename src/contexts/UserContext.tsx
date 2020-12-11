import React from "react";

export type UserType = {
  name: string;
  id: string;
  age?: number;
} | null;

export type SetUserType = (user: UserType) => void;

type UserContextType = [UserType, SetUserType];

export const UserContext = React.createContext<UserContextType>([
  null,
  (u: UserType) => {},
]);

export function UserProvider({ children }: { children: React.ReactElement }) {
  const [user, setUser] = React.useState<UserType>(null);
  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
}
