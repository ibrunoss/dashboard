import useAppData from "../../data/hooks/useAppData";
import Content from "./Content";
import Heading from "./Heading";
import SideMenu from "./SideMenu";

interface LayoutProps {
  title: string;
  caption: string;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { title, caption, children } = props;

  const { theme } = useAppData();

  const className: string[] = ["flex", "min-h-screen", "min-w-screen"];

  theme && className.push(theme);

  return (
    <div className={className.join(" ")}>
      <SideMenu />
      <div className="flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800">
        <Heading title={title} caption={caption} />
        <Content>{children}</Content>
      </div>
    </div>
  );
};

export default Layout;
