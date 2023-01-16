import React from "react";
import { BsFillMoonFill } from "react-icons/bs";

function Navbar() {
  return (
    <div className="flex bg-gray-800 text-white py-9 px-6  justify-between">
      <h2 className="font-bold">Where in the world?</h2>
      <div className="flex items-center justify-between gap-2">
        <BsFillMoonFill />
        <button className=" capitalize">Dark mode</button>
      </div>
    </div>
  );
}

export default Navbar;
