import FormUI from "./form";
import background from "./background.jpg";

export default function App() {
  return (
    <div className="w-full h-screen mx-auto flex flex-row py-24 bg-teal-50 px-20">
      <div
        className="w-2/4 h-full"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className=""></div>
      <div className="w-3/4 mx-auto bg-white h-auto rounded-l-lg px-10 py-10">
        <FormUI className="" />
      </div>
    </div>
  );
}
