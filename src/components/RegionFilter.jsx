import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const RegionFilter = ({ onRegionFilter }) => {
  const [region, setRegion] = useState("All");

  return (
    <div className="flex justify-start items-start flex-col gap-2 text-white duration-500 mt-4 md:mt-0 dark:duration-500 dark:text-black">
      <label htmlFor="regions">Filter by Region:</label>
      <div className="relative flex items-center shadow-lg rounded-md ">
        <select
          name="regions"
          id="regions"
          value={region}
          onChange={(e) => {
            setRegion(e.target.value);
            onRegionFilter(e.target.value);
          }}
          className="py-3 px-4 w-28 appearance-none rounded-md bg-gray-700  cursor-pointer duration-500 dark:duration-500 dark:bg-white "
        >
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
        <RiArrowDropDownLine className="absolute right-2 text-2xl" />
      </div>
    </div>
  );
};

export default RegionFilter;
