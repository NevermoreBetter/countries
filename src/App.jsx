import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function App() {
  const [country, setCountry] = useState([]);

  useEffect(() => {
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
        });
      });

      setCountry(c);
    }
    getCountries();
  }, []);
}

export default App;
