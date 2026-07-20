import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("");

  return (
    <>
      <div style={{ backgroundColor: color }} className=" min-h-screen">
        <h1
          className="text-yellow-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl  xl:text-7xl  pt-10 font-bold font-mono text-center"
          style={{ color: color }}
        >
          TAP COLOR BUTTON TO CHNAGE THE COLOR
        </h1>

        <div className=" flex flex-col justify-between h-full mt-100">
          <div className="bg-black text-white rounded-2xl w-[95%] sm:w-[90%] md:w-3/4 lg:w-1/2 mx-auto mb-5 flex flex-wrap justify-center gap-3   ">
         
            <div
              onClick={() => setColor("red")}
              className="bg-red-500 m-3 p-3 border-2 rounded-3xl cursor-pointer w-24 text-center capitalize"
            >
              red
            </div>
            <div
              onClick={() => setColor("green")}
              className="bg-green-500 m-3 p-3 border-2 rounded-3xl cursor-pointer w-24 text-center capitalize"
            >
              green
            </div>
            <div
              onClick={() => setColor("yellow")}
              className="bg-yellow-500 m-3 p-3 border-2 rounded-3xl cursor-pointer w-24 text-center capitalize"
            >
              yellow
            </div>
            <div
              onClick={() => setColor("orange")}
              className="bg-orange-500 m-3 p-3 border-2 rounded-3xl cursor-pointer w-24 text-center capitalize"
            >
              orange
            </div>
            <div
              onClick={() => setColor("blue")}
              className="bg-blue-500 m-3 p-3 border-2 rounded-3xl cursor-pointer w-24 text-center capitalize"
            >
              blue
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
