const Logo: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-12 w-12 rounded-full bg-white">
      <div className="flex justify-center items-center text-white text-xs h-4 w-4 rounded-full bg-green-600" />
      <div className="flex mt-0.5 ">
        <div className="flex justify-center items-center text-white text-xs h-4 w-4 rounded-full mr-0.5 bg-yellow-600" />
        <div className="flex justify-center items-center text-white text-xs h-4 w-4 rounded-full ml-0.5 bg-red-800" />
      </div>
    </div>
  );
};

export default Logo;
