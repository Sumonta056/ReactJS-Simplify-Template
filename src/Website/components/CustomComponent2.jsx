const CustomComponent2 = ({
  image,
  h2name,
  p1name,
  p2name,
  handleButtonClick,
}) => {
  return (
    <div className="w-full shadow-xl bg-[#86efac] flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
      <img className="w-20 mx-auto mt-[-3rem]" src={image} alt="/" />
      <h2 className="text-2xl font-bold text-center py-8">{h2name}</h2>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 mt-2">{p1name}</p>
        <p className="py-2 border-b mx-8">{p2name}</p>
      </div>
      <button
        className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
        onClick={handleButtonClick}
      >
        Live Demo
      </button>
    </div>
  );
};

export default CustomComponent2;
