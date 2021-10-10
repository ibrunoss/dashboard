import MenuItem from "./MenuItem";
import { BellIcon, HomeIcon, SettingsIcon } from "./Icons";

const SideMenu: React.FC = () => {
  return (
    <nav>
      <ul>
        <MenuItem url="/" label="Home" icon={HomeIcon} />
        <MenuItem url="/ajustes" label="Ajustes" icon={SettingsIcon} />
        <MenuItem url="/avisos" label="Avisos" icon={BellIcon} />
      </ul>
    </nav>
  );
};

export default SideMenu;
