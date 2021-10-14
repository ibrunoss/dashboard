import { createContext } from "react";

export const AppContext = createContext({ name: null });

export const AppProvider: React.FC = (props) => {
  const { children } = props;
  return (
    <AppContext.Provider
      value={{
        name: "Test App context",
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
