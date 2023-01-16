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
  const [detailed, setDetailed] = useState();

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

  function choose(id) {
    setSelected(!selected);

    setId(id);
  }

  function getDetailed(id) {
    let detailed;
    for (let i = 0; i < countries.length; i++) {
      if (countries[i].id === id) {
        detailed = countries[i];
      }
    }
    return detailed;
    console.log("detailed", detailed);
  }

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
    <div>
      <Navbar />
      {!selected ? (
        <div className="p-10 flex flex-col ">{countryItem}</div>
      ) : (
        <Details id={id} country={getDetailed(id)} />
      )}
    </div>
  );
}

export default App;
