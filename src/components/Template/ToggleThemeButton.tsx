import useAppData from "../../data/hooks/useAppData";
import { DarkThemeIcon, LightThemeIcon } from "./Icons";

const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useAppData();

  return theme === "dark" ? (
    <button
      className="hidden sm:flex items-center justify-end w-14 lg:w-24 h-8 bg-gradient-to-r from-gray-500 to-gray-900 p-1 rounded-full cursor-pointer"
      onClick={toggleTheme}
    >
      <span className="hidden lg:flex items-center text-gray-300 mr-2 text-sm">
        Escuro
      </span>
      <span className="flex justify-center items-center w-6 h-6 rounded-full bg-black text-yellow-300">
        {DarkThemeIcon(4)}
      </span>
    </button>
  ) : (
    <button
      className="hidden sm:flex items-center justify-start w-14 lg:w-24 h-8 bg-gradient-to-r from-yellow-300 to-yellow-600 p-1 rounded-full cursor-pointer"
      onClick={toggleTheme}
    >
      <span className="flex justify-center items-center w-6 h-6 rounded-full bg-white text-yellow-600">
        {LightThemeIcon(4)}
      </span>
      <span className="hidden lg:flex items-center ml-4 text-white text-sm">
        Claro
      </span>
    </button>
  );
};

export default ToggleThemeButton;
