import React, { useEffect, useState } from "react";

import axios from "axios";

import Countries from "../countries/Countries";
import CountriesInfo from "../countriesInfo/CountriesInfo";

import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [activeIdCountry, setActiveIdCountry] = useState(464);
  const [countryInfo, setCountryInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  function fetchCountries() {
    const URL_API = "https://restcountries.com/v3.1/all";
    axios.get(URL_API).then(({ data }) => {
      setCountries(data);
      setLoading(false);
    });
  }

  useEffect(() => {
    fetchCountries();
  }, [activeIdCountry]);

  const handleClick = (id) => {
    setCountryInfo(id);
    setActiveIdCountry(id);
    const currentCountry = countries.filter(
      ({ area }) => area === activeIdCountry
    );
    console.log(currentCountry[0]);
    setCountryInfo(currentCountry);
  };

  return (
    <div className="app">
      <h1>Countries</h1>
      <div className="app__container countries">
        <div className="countries__body">
          {/* {countries.length && (
            <>
              <Countries
                countries={countries}
                handleClick={handleClick}
                activeIdCountry={activeIdCountry}
              />
              <CountriesInfo countryInfo={countryInfo} />
            </>
          )} */}
          {loading ? (
            <span>Loading...</span>
          ) : (
            <>
              <Countries
                countries={countries}
                handleClick={handleClick}
                activeIdCountry={activeIdCountry}
              />
              <CountriesInfo countryInfo={countryInfo} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
