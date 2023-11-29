import Single from "../assets/password.png";
import Double from "../assets/Menu.png";
import Triple from "../assets/random.png";
import Triple1 from "../assets/NavBar.png";
import Triple2 from "../assets/search.png";

import { useNavigate } from "react-router-dom";

const Cards = () => {
  const navigate = useNavigate();

  function handleButton1() {
    navigate("/password");
  }
  function handleButton2() {
    navigate("/Custom");
  }
  function handleButton3() {
    navigate("/button");
  }

  function handleButton4() {
    navigate("/Menu");
  }

  function handleButton5() {
    navigate("/searchfilter");
  }
  return (
    <div className="w-full py-[7rem] px-4 bg-[#e2e8f0]">
      <div
        className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-10"
        style={{ rowGap: "90px" }}
      >
        <div className="w-full shadow-xl  bg-[#86efac] flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem]" src={Single} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">
            Password Generator Website
          </h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-2">Both Number & Character</p>
            <p className="py-2 border-b mx-8">Length Up to 50</p>
          </div>
          <button
            className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
            onClick={handleButton1}
          >
            Live Demo
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Custom Menu Navbar
          </h2>

          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-2">Light & Simple</p>
            <p className="py-2 border-b mx-8">Responsive Design</p>
          </div>
          <button
            className="bg-[#00df9a] text-[#000000] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
            onClick={handleButton2}
          >
            Live Demo
          </button>
        </div>
        <div className="w-full shadow-xl  bg-[#86efac] flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem]" src={Triple} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Accordion</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-2">Keep-React Libary</p>
            <p className="py-2 border-b mx-8">Button Style</p>
          </div>
          <button
            className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
            onClick={handleButton3}
          >
            Live Demo
          </button>
        </div>
        <div className="w-full shadow-xl  bg-[#86efac] flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem]" src={Triple1} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Menu Bar</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-2">Antd Library</p>
            <p className="py-2 border-b mx-8">Responsive Design</p>
          </div>
          <button
            className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
            onClick={handleButton4}
          >
            Live Demo
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Triple2}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Search Filter System
          </h2>

          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-2">Real-Time Searching</p>
            <p className="py-2 border-b mx-8">Validation of Searching Item</p>
          </div>
          <button
            className="bg-[#00df9a] text-[#000000] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
            onClick={handleButton5}
          >
            Live Demo
          </button>
        </div>
        
        {/* <div className="w-full shadow-xl  bg-[#86efac] flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Accordion</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-2">Keep-React Libary</p>
            <p className="py-2 border-b mx-8">Button Style</p>
          </div>
          <button
            className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
            onClick={handleButton3}
          >
            Live Demo
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Cards;
