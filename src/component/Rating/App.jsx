import Rate from "./Rate_Ant";
import StarRating from "./StarRating";

function App() {
  function handleClick() {
    window.location.href = "https://github.com/sangammukherjee/25-reactjs-interview-projects/blob/master/src/App.js"
  }
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-indigo-900">
      <Rate />

      <div className="w-full flex flex-col justify-center items-center p-32">
        <StarRating noOfStars={10} />

        <div
          className="mt-24 border border-lime-500 shadow-2xl cursor-pointer"
          onClick={handleClick}
        >
          <h1 className="text-lime-400 p-8">
            Move Your Cursor and Click on Rating{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
