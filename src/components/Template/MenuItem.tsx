import Link from "next/link";

interface MenuItemProps {
  url: string;
  label: string;
  icon: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { url, label, icon } = props;
  console.log();
  return (
    <li className="hover:bg-gray-100 cursor-pointer">
      <Link href={url}>
        <a className="flex flex-col justify-center items-center h-20 w-20">
          {icon}
          <span className="text-xs font-light text-gray-600">{label}</span>
        </a>
      </Link>
    </li>
  );
};

export default MenuItem;
