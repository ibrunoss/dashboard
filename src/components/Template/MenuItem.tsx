interface MenuItemProps {
  url: string;
  label: string;
  icon: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { url, label, icon } = props;
  console.log();
  return <li>{icon}</li>;
};

export default MenuItem;
