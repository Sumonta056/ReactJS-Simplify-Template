import Typed from "react-typed";
const Hero = () => {
  function handleButton1() {
    window.location.href =
      "https://github.com/Sumonta056/ReactJS-Simplify-Template";
  }
  return (
    <div className="bodys">
      <div className="text-white">
        <div className="max-w-[900px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <h1 className="md:text-9xl mt-[30px] sm:text-6xl text-4xl font-bold md:py-6 text-[#00df9a]">
            React Simplify Hub
          </h1>
          {/* <p className="md:text-2xl text-xl font-bold text-gray-500">
        Welcome to React Simplify Hub, your go-to resource for simplifying React development
        </p> */}
          <div className="flex justify-center items-center">
            <p className="md:text-3xl sm:text-3xl text-xl font-bold py-2 text-[#c4c5c4]">
              Package and Libary Documentation :
            </p>
            <Typed
              className="md:text-3xl sm:text-3xl text-xl font-bold md:pl-4 pl-2 text-[#00df9a]"
              strings={[
                "@ant-design/icons",
                "@mui/icons-material",
                "@mui/material",
                "antd",
                "axios",
                "bootstrap",
                "jspdf",
                "keep-react",
                "moment",
                "react",
                "react-circular-progressbar",
                "react-datepicker",
                "react-dom",
                "react-icons",
                "react-router-dom",
                "react-scripts",
                "react-to-pdf",
                "react-to-print",
                "react-typed",
                "styled-components",
                "swiper",
              ]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>

          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black" onClick={handleButton1}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
