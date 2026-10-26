import { createContext } from "react";

const userData = {
  name: "Nadeen",
  role: "Admin",
  email: "nadeensamy@gmail.com",
  age: 28,
};

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
}