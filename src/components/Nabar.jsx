import React, { useState } from "react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";

function Navbar(props) {
  const [mode, setMode] = useState(true);

  const toggleMode = () => {
    setMode(!mode);
  };

  return (
    <div className="flex bg-gray-700 text-white py-9 px-6  justify-between drop-shadow-xl  duration-500 dark:bg-white dark:text-black dark:duration-500 dark:drop-shadow-md">
      <h2 className="font-bold md:text-xl">Where in the world?</h2>
      <div
        className="flex items-center justify-between gap-2"
        onClick={() => props.handleClick()}
      >
        {mode ? <BsSunFill /> : <BsFillMoonFill />}
        <button className="capitalize" onClick={() => toggleMode()}>
          Toggle mode
        </button>
      </div>
    </div>
  );
}

export default Navbar;
