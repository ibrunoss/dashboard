import MenuItem from "./MenuItem";
import { BellIcon, HomeIcon, LogoutIcon, SettingsIcon } from "./Icons";
import Logo from "./Logo";

const SideMenu: React.FC = () => {
  return (
    <nav className="flex flex-col bg-gray-200 text-gray-700 dark:bg-gray-900 ">
      <div className="flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-800 h-20 w-20">
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" label="Home" icon={HomeIcon} />
        <MenuItem url="/ajustes" label="Ajustes" icon={SettingsIcon} />
        <MenuItem url="/avisos" label="Avisos" icon={BellIcon} />
      </ul>
      <ul>
        <MenuItem
          onClick={() => console.log("logout")}
          label="Logout"
          icon={LogoutIcon}
          className="text-red-600 hover:bg-red-600 hover:text-red-100 dark:text-red-600 dark:hover:bg-red-800 dark:hover:text-red-100"
        />
      </ul>
    </nav>
  );
};

export default SideMenu;
