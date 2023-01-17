import React from "react";
import { BiArrowBack } from "react-icons/bi";

function Details(props) {
  const country = props.country;
  let nativeName = country.nativeName[Object.keys(country.nativeName)[0]],
    currencies = country.currencies[Object.keys(country.currencies)[0]],
    languages = country.languages,
    langList = Object.values(languages)
      .map((l) => l)
      .join(", "),
    tld = country.topLevelDomain.join(", "),
    borders;

  if (country.borders !== undefined) {
    borders = country.borders.map((border) => {
      return (
        <li className="px-4 py-1 bg-gray-700 block rounded-sm drop-shadow-md grow-0 shrink-1 basis-[68px] text-center  duration-500 dark:duration-500 dark:bg-white">{`${border} `}</li>
      );
    });
  } else {
    borders = (
      <li className="px-4 py-1 bg-gray-700 block rounded-sm drop-shadow-md grow-0 shrink-1 basis-auto text-center  duration-500 dark:duration-500 dark:bg-white">
        No bordering countries
      </li>
    );
  }
  return (
    <div className="text-white duration-500 dark:text-black dark:duration-500 h-screen">
      <div className="flex flex-col items-center py-6 bg-gray-800 dark:bg-slate-100">
        <div className="w-3/4">
          <button
            className="flex items-center px-8 py-1 bg-gray-700 block rounded-sm shadow-md drop-shadow-md duration-500 dark:duration-500  dark:bg-slate-100 "
            onClick={() => props.handleBack()}
          >
            <BiArrowBack />
            Back
          </button>
          <div className="align-center mt-10 mb-8">
            <img className="h-70 w-full" src={country.flag} alt="" />
          </div>
          <div className=" w-3/4">
            <h2 className="font-bold text-xl mb-5">{country.name}</h2>
            <p className="p-style">
              Native name:
              <span className="font-normal"> {nativeName.official}</span>
            </p>
            <p className="p-style">
              Population:
              <span className="font-normal"> {country.population}</span>
            </p>
            <p className="p-style">
              Region: <span className="font-normal"> {country.region}</span>
            </p>
            <p className="p-style">
              Sub Region:{" "}
              <span className="font-normal"> {country.subRegion}</span>
            </p>
            <p className="font-semibold mb-9">
              Capital:<span className="font-normal"> {country.capital}</span>
            </p>
            <p className="p-style">
              Top Level Domain: <span className="font-normal">{tld}</span>
            </p>
            <p className="p-style">
              Currencies: <span className="font-normal">{currencies.name}</span>
            </p>
            <p className="font-semibold mb-9">
              Languages: <span className="font-normal">{langList}</span>
            </p>
            <p className="p-style">Border Countries: </p>
            <ul className="flex justify-start gap-3 flex-wrap">{borders}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
