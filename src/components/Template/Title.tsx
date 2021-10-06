interface TitleProps {
  title: string;
  caption: string;
}

const Title: React.FC<TitleProps> = (props) => {
  const { title, caption } = props;
  return (
    <div>
      <h1>{title}</h1>
      <h2>{caption}</h2>
    </div>
  );
};

export default Title;
