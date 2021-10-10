import Content from "./Content";
import Heading from "./Heading";
import SideMenu from "./SideMenu";

interface LayoutProps {
  title: string;
  caption: string;
  dark?: boolean;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { title, caption, dark, children } = props;

  const className: string[] = ["flex", "min-h-screen", "min-w-screen"];

  dark && className.push("dark");

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
