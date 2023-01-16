import React from "react";

function Preview(props) {
  let country = props.country;
  function handleClick() {
    props.handleClick(country.id);
  }

  return (
    <div
      className="bg-gray-800 my-10 cursor-pointer rounded-md"
      onClick={() => handleClick()}
    >
      <img src={country.flag} alt="" className="w-full mb-5 rounded-t-md" />
      <div className="text-white pb-10 px-5">
        <h2 className="font-bold text-xl mb-5">{country.name}</h2>
        <h3 className="font-semibold">
          Population: <span className="font-normal">{country.population}</span>
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
