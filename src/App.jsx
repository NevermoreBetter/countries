import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Navbar from "./components/Nabar";
import Preview from "./components/Preview";
import Details from "./components/Details";
import CountrySearch from "./components/CountrySearch";
import RegionFilter from "./components/RegionFilter";
import "./styles/index.css";
function App() {
  const [countries, setCountries] = useState([]);
  const [selected, setSelected] = useState(false);
  const [id, setId] = useState();
  const [countryName, setCountryName] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [data, setData] = useState();
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  async function getCountries() {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    let c = [];

    data.forEach((country) => {
      c.push({
        id: nanoid(),
        name: country.name.official,
        nativeName: country.name.nativeName,
        flag: country.flags.svg,
        population: country.population,
        region: country.region,
        subRegion: country.subregion,
        capital: country.capital,
        topLevelDomain: country.tld,
        currencies: country.currencies,
        languages: country.languages,
        borders: country.borders,
      });
    });
    setData(c);
    setCountries(c);
  }

  useEffect(() => {
    getCountries();
  }, []);

  function handleThemeSwitch() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  function choose(id) {
    setSelected(!selected);
    setId(id);
  }

  function back() {
    setSelected(!selected);
  }

  function getDetailed(id) {
    let detailed;
    for (let i = 0; i < countries.length; i++) {
      if (countries[i].id === id) {
        detailed = countries[i];
      }
    }
    return detailed;
  }

  const handleCountrySearch = (inputValue) => {
    setCountryName(!countryName);
    inputValue
      ? setCountries(
          countries.filter((country) =>
            country.name.toLowerCase().includes(inputValue.toLowerCase())
          )
        )
      : setCountries(data);
  };

  const handleRegionFilter = (region) => {
    if (region === "All") {
      setCountries(data);
    } else {
      setCountries(data.filter((country) => country.region === region));
    }
  };

  const countryItem = countries.map((country) => {
    return (
      <Preview
        key={nanoid()}
        country={country}
        id={nanoid()}
        handleClick={choose}
      />
    );
  });

  return (
    <div className="bg-gray-800 duration-500 dark:bg-slate-100 dark:duration-500">
      <Navbar handleClick={handleThemeSwitch} />
      {!selected ? (
        <div className="p-10 flex flex-col lg:w-11/12 lg:m-auto">
          <div className="md:flex justify-between mb-4">
            <CountrySearch onCountryFilter={handleCountrySearch} />
            <RegionFilter onRegionFilter={handleRegionFilter} />
          </div>
          <div className="flex gap-8  flex-wrap justify-center md:justify-between lg:justify-evenly gap-x-13">
            {countryItem}
          </div>
        </div>
      ) : (
        <Details id={id} country={getDetailed(id)} handleBack={back} />
      )}
    </div>
  );
}

export default App;
