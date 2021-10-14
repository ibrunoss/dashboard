interface TitleProps {
  title: string;
  caption: string;
}

const Title: React.FC<TitleProps> = (props) => {
  const { title, caption } = props;
  return (
    <div>
      <h1 className="font-black text-3xl text-gray-900">{title}</h1>
      <h2 className="text-light text-sm text-gray-600">{caption}</h2>
    </div>
  );
};

export default Title;
