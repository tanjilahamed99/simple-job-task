import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [btn1, setBtn1] = useState(true);
  const [btn2, setBtn2] = useState(true);
  const handleBtn1 = () => {
    setBtn1(false);
    setBtn2(true);
  };
  const handleBtn2 = () => {
    setBtn1(true);
    setBtn2(false);
  };

  return (
    <>
      <div>
        <button
          onClick={handleBtn1}
          className={`p-4 border-2 mr-3 bg-black text-white ${
            btn1 ? "inline" : "hidden"
          }`}
        >
          Button 1
        </button>
        <button
          onClick={handleBtn2}
          className={` p-4 border-2 bg-black text-white ${
            btn2 ? "inline" : "hidden"
          }`}
        >
          Button 2
        </button>
      </div>
    </>
  );
}

export default App;
