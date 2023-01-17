import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Navbar from "./components/Nabar";
import Preview from "./components/Preview";
import Details from "./components/Details";
import "./styles/index.css";
function App() {
  const [countries, setCountries] = useState([]);
  const [selected, setSelected] = useState(false);
  const [id, setId] = useState();
  const [countryName, setCountryName] = useState("");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  useEffect(() => {
    async function getCountries() {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      console.log(data);
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
      setCountries(c);
    }
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

  function handleInput(e) {
    setCountryName(e.target.value);
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

  const countryItem = countries.map((country) => {
    return (
      <Preview
        key={nanoid()}
        country={country}
        id={nanoid()}
        handleClick={choose}
        searchedCountry={countryName}
      />
    );
  });

  console.log(countryName);

  return (
    <div className="bg-gray-800 duration-500 dark:bg-slate-100 dark:duration-500">
      <Navbar handleClick={handleThemeSwitch} />
      {!selected ? (
        <div className="p-10 flex flex-col ">
          <form action="">
            <input
              type="text"
              placeholder="Search for a country"
              onChange={handleInput}
            />
          </form>
          {countryItem}
        </div>
      ) : (
        <Details id={id} country={getDetailed(id)} handleBack={back} />
      )}
    </div>
  );
}

export default App;
