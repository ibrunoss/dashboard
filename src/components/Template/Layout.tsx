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
    <div>
      <SideMenu />
      <Heading title={title} caption={caption} />
      <Content>{children}</Content>
    </div>
  );
};

export default Layout;
