import { createContext, useState } from "react";

type Theme = "dark" | "";
export interface AppContextInterface {
  theme?: Theme;
  toggleTheme?: () => void;
}

export const AppContext = createContext<AppContextInterface>({});

export const AppProvider: React.FC = (props) => {
  const { children } = props;
  const [theme, setTheme] = useState<Theme>("");
  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme: () => setTheme(theme === "dark" ? "" : "dark"),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
