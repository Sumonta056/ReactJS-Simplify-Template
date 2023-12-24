function App() {
  return (
    //min-h-screen =  minimum screen height 100vh
    // Centering a Div  :  flex flex-col justify-center items-center
    <div className="text-6xl bg-slate-900 min-h-screen flex flex-col justify-center items-center">
      {/* Grouping below elements to show same effect on both */}
      {/* Opacity : opacity-40 */}
      {/* Hover - Opacity : hover:opacity-100 */}
      {/* Hover - Scaling : hover:scale-125 */}
      {/* Smooth Animation : duration-300 */}
      {/* If Centering Issue : Remove items-center */}
      {/* Box Shadowing : shadow-lg shadow-indigo-500/50 */}
      {/* Padding : p-6 */}
      {/* Bouncing Animation : animate-bounce */}
      <button className="bg-indigo-500 shadow-lg animate-bounce shadow-indigo-500/50 text-slate-900 group p-6 opacity-40 hover:opacity-100 hover:scale-125 duration-300 flex justify-center gap-4">
        {/* Text Coloring : text-slate-100 */}
        <h1 className="text-slate-100">Come Here</h1>
        {/* Width - 10 Height - 10 */}
        {/* Hover - Rotating :  hover:rotate-90 */}
        <span className="h-10 w-10 bg-cyan-500 shadow-lg shadow-cyan-500/50 group-hover:rotate-90 duration-300"></span>
      </button>
    </div>
  );
}

export default App;
