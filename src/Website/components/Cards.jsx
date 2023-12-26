import Single from "../assets/password.png";
import Double from "../assets/Menu.png";
import Triple from "../assets/random.png";
import Triple1 from "../assets/NavBar.png";
import Triple2 from "../assets/search.png";
import Triple3 from "../assets/cart.png";
import Triple7 from "../assets/dark2.png";
import NotificationIcon from "../assets/notification.png";
import Form from "../assets/form.png";
import tailwindcss from "../assets/taliwind.png";

import { useNavigate } from "react-router-dom";
import CustomComponent from "./CustomComponent";
import CustomComponent2 from "./CustomComponent2";

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
  function handleButton6() {
    navigate("/shopping");
  }
  function handleButton7() {
    navigate("/darkmode");
  }

  function handleButtonToast() {
    navigate("/toastify");
  }

  function handleFormUI() {
    navigate("/reactformhook");
  }

  function handleTailwindCSS() {
    navigate("/taliwindcss");
  }

  function handleSemantic() {
    navigate("/grid");
  }
  return (
    <div className="w-full py-[7rem] px-4 bg-[#e2e8f0]">
      <div
        className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-10"
        style={{ rowGap: "90px" }}
      >
        {/* row11 */}

        <CustomComponent2
          image={Triple7}
          h2name="Dark-Light Mode"
          p1name="Adaptive Dark Theme"
          p2name="Toggle Button : Complete Theme"
          handleButtonClick={handleButton7}
        />

        <CustomComponent
          image={Triple2}
          h2name="Search Filter System"
          p1name="Real-Time Searching"
          p2name="Validation of Searching Item"
          handleButtonClick={handleButton5}
        />

        <CustomComponent2
          image={Triple3}
          h2name="Shopping Cart System"
          p1name="Book Library Website"
          p2name="Tracking Cart Management"
          handleButtonClick={handleButton6}
        />

        {/* row2 */}

        <CustomComponent2
          image={Form}
          h2name="Form UI & Dynamicse"
          p1name="Built in UI Library"
          p2name="Template Login Form"
          handleButtonClick={handleFormUI}
        />

        <CustomComponent
          image={NotificationIcon}
          h2name="React Toastify"
          p1name="React notification made easy !"
          p2name="Tons of Feature"
          handleButtonClick={handleButtonToast}
        />

        <CustomComponent2
          image={Single}
          h2name="Password Generator Website"
          p1name="Both Number & Character"
          p2name="Length Up to 50"
          handleButtonClick={handleButton1}
        />

        {/* row3 */}

        <CustomComponent2
          image={tailwindcss}
          h2name="Tailwind CSS"
          p1name="Trying out different things"
          p2name="Check the code for better understanding"
          handleButtonClick={handleTailwindCSS}
        />

        <CustomComponent
          image={Triple1}
          h2name="Semantic UI"
          p1name="Built UI Components"
          p2name="Grid View, Table Component, Segments"
          handleButtonClick={handleSemantic}
        />

        <CustomComponent2
          image={Triple}
          h2name="Keep-React Libary"
          p1name="Accordion Options"
          p2name="Button Style and More Components"
          handleButtonClick={handleButton3}
        />

        {/* row4*/}

        <CustomComponent2
          image={Triple1}
          h2name="Antd Library"
          p1name="Menu Bar"
          p2name="Responsive Design"
          handleButtonClick={handleButton4}
        />
        <CustomComponent
          image={Double}
          h2name="Custom Menu Navbar"
          p1name="Light & Simple"
          p2name="Responsive Design"
          handleButtonClick={handleButton2}
        />

        {/* <CustomComponent2
          image={Triple1}
          h2name="Menu Bar"
          p1name="Antd Library"
          p2name="Responsive Design"
          handleButtonClick={handleButton4}
        /> */}
      </div>
    </div>
  );
};

export default Cards;
