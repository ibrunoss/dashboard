interface TitleProps {
  title: string;
  caption: string;
}

const Title: React.FC<TitleProps> = (props) => {
  const { title, caption } = props;
  return (
    <div>
      <h1 className="font-black text-3xl text-gray-900 dark:text-gray-100">
        {title}
      </h1>
      <h2 className="text-light text-sm text-gray-600 dark:text-gray-400">
        {caption}
      </h2>
    </div>
  );
};

export default Title;
