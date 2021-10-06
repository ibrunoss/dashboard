import Title from "./Title";

interface HeadingProps {
  title: string;
  caption: string;
}

const Heading: React.FC<HeadingProps> = (props) => {
  const { title, caption } = props;
  return (
    <div>
      <Title title={title} caption={caption} />
    </div>
  );
};

export default Heading;
