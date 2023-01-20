import React from "react";

function Preview(props) {
  let country = props.country;
  function handleClick() {
    props.handleClick(country.id);
  }

  return (
    <div
      id="country"
      className="bg-gray-700 my-10 text-white cursor-pointer rounded-md drop-shadow-xl w-11/12 md:w-[45%] lg:w-[22%] duration-500 min-h-[450px] dark:bg-white dark:text-black dark:duration-500 hover:scale-110"
      onClick={() => handleClick()}
    >
      <div className="h-1/2 mb-4 ">
        <img
          src={country.flag}
          alt=""
          className="w-full object-cover mb-5 rounded-t-md h-full"
        />
      </div>
      <div className=" px-5 md:pb-2">
        <h2 className="font-bold text-xl mb-5">{country.name}</h2>
        <h3 className="font-semibold">
          Population:{" "}
          <span className="font-normal">
            {country.population.toLocaleString("en-US")}
          </span>
        </h3>
        <h3 className="font-semibold ">
          Region: <span className="font-normal">{country.region}</span>
        </h3>
        <h3 className="font-semibold">
          Capital: <span className="font-normal">{country.capital}</span>
        </h3>
      </div>
    </div>
  );
}
export default Preview;
