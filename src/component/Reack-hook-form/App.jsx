import FormUI from "./form";
import background from "./background.jpg";
import FormUI2 from "./FormDisabledDemo";
import Login from "./LoginAnt";
import { Button } from "keep-react";
import { Gear, SquaresFour, Cube } from "phosphor-react";
import { useState } from "react";

export default function App() {
  const [initalValue, setInitalValue] = useState(["off"]);

  const handleSubmit1 = () => {
    setInitalValue("one");
  };
  const handleSubmit2 = () => {
    setInitalValue("two");
  };
  const handleSubmit3 = () => {
    setInitalValue("three");
  };
  return (
    <>
      <div className="w-full h-screen mx-auto flex flex-row py-24 bg-teal-50 px-20">
        <div
          className="w-2/4 h-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="w-3/4 bg-white h-auto overflow-scroll rounded-l-lg px-10 py-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          <div className="flex justify-center gap-4 pb-10">
            <Button type="primary" size="md" onClick={handleSubmit1}>
              Ant Login Form
              <span className="pl-2">
                <SquaresFour size={24} />
              </span>
            </Button>
            <Button type="primary" size="md" onClick={handleSubmit2}>
              Ant Sample Forms
              <span className="pl-2">
                <Cube size={24} />
              </span>
            </Button>
            <Button type="primary" size="md" onClick={handleSubmit3}>
              Semantic Form
              <span className="pl-2">
                <Gear size={24} />
              </span>
            </Button>
          </div>

          {initalValue.includes("one") && <Login />}
          {initalValue.includes("two") && <FormUI2 />}
          {initalValue.includes("three") && <FormUI/>}

        </div>
      </div>
    </>
  );
}
