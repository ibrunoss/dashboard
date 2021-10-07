import Content from "./Content";
import Heading from "./Heading";
import SideMenu from "./SideMenu";

interface LayoutProps {
  title: string;
  caption: string;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { title, caption, children } = props;
  return (
    <div className={`flex min-h-screen min-w-screen`}>
      <SideMenu />
      <div className="flex flex-col w-full p-7 bg-gray-300">
        <Heading title={title} caption={caption} />
        <Content>{children}</Content>
      </div>
    </div>
  );
};

export default Layout;
