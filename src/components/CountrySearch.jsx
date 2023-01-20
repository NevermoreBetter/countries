import { useState } from "react";
import { MdSearch } from "react-icons/md";

const CountrySearch = ({ onCountryFilter }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="relative flex items-center drop-shadow-md rounded-md  text-white duration-500 dark:duration-500 dark:text-black">
      <MdSearch className="absolute left-[17px] text-2xl" />
      <input
        type="search"
        className="pl-14 p-3 rounded-md w-full placeholder:text-white bg-gray-700 duration-500 dark:duration-500 dark:bg-white dark:placeholder:text-black  md:w-96 lg:w-[32rem]"
        value={inputValue}
        placeholder="Search for a country..."
        onChange={(e) => {
          setInputValue(e.target.value);
          onCountryFilter(e.target.value);
        }}
      />
    </div>
  );
};

export default CountrySearch;
