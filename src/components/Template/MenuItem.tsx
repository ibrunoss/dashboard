import Link from "next/link";

interface MenuItemProps {
  label: string;
  icon: React.ReactNode;
  url?: string;
  onClick?: (ev: React.MouseEvent) => void;
  className?: string;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { url, label, icon, onClick, className } = props;
  console.log();
  const classNameList: string[] = [
    "hover:bg-gray-100",
    "cursor-pointer dark:hover:bg-gray-800",
  ];

  if (className) {
    classNameList.push(className);
  }

  const renderItem = () => (
    <a
      className={`flex flex-col justify-center items-center h-20 w-20 text-gray-600 dark:text-gray-200 ${className}`}
    >
      {icon}
      <span className="text-xs font-light">{label}</span>
    </a>
  );

  return (
    <li onClick={onClick} className={classNameList.join(" ")}>
      {url ? <Link href={url}>{renderItem()}</Link> : renderItem()}
    </li>
  );
};

export default MenuItem;
