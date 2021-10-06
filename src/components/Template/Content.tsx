const Content: React.FC = (props) => {
  const { children } = props;
  return (
    <div
      className={`
      flex flex-col mt-7
    `}
    >
      {children}
    </div>
  );
};

export default Content;
