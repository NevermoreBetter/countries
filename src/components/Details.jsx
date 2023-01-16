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
    borders = country.borders.join(", ");
  return (
    <div className="text-white">
      <button className="flex">
        <BiArrowBack />
        Back
      </button>
      <div>
        <img src={country.flag} alt="" />
        <h2>{country.name}</h2>
        <p>Native name: {nativeName.official}</p>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Sub Region: {country.subRegion}</p>
        <p>Capital: {country.capital}</p>
        <p>Top Level Domain: {country.topLevelDomain}</p>
        <p>Currencies: {currencies.name}</p>
        <p>Languages: {langList}</p>
        <p>Border Countries: </p>
        <p>{borders}</p>
      </div>
    </div>
  );
}

export default Details;
