import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "@mui/material/Pagination";

import Countries from "../countries/Countries";
import CountriesInfo from "../countriesInfo/CountriesInfo";
import Skeleton from "../skeleton/Skeleton";

import "./App.css";
import CountriesRegion from "../countriesRegion/CountriesRegion";

// const URL_API = "https://restcountries.com/v3.1/all";

function App() {
  const [countries, setCountries] = useState([]);
  const [activeIdCountry, setActiveIdCountry] = useState(null);
  const [activeCountry, setActiveCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [countriesPerPage] = useState(8);

  const [searchCountry, setSearchCountry] = useState("");

  // const [regions, setRegions] = useState([
  //   "Asia",
  //   "Europe",
  //   "Africa",
  //   "Oceania",
  //   "Americas",
  //   "Antarctic",
  // ]);

  const [countryRegionsId, setCountryRegionsId] = useState("all");

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const getActiveCountry = (countries, id) => {
    const [activeCountry] = countries.filter(({ area }) => area === id);

    return activeCountry;
  };

  useEffect(() => {
    setLoading(true);
    const fetchCountries = async () => {
      const { data } = await axios.get(
        `https://restcountries.com/v3.1/${
          countryRegionsId === "all" ? "all" : `region/${countryRegionsId}`
        }`
      );
      console.log(countryRegionsId);
      setCountries(data);
      setActiveCountry(getActiveCountry(data, data[0].area));
      setActiveIdCountry(data[0].area);

      setLoading(false);
    };
    fetchCountries();
  }, [countryRegionsId]);

  const handleClick = (id) => {
    setActiveIdCountry(id);
    setActiveCountry(getActiveCountry(countries, id));
  };

  const searchCountryInput = (e) => {
    setSearchCountry(e.target.value);
  };

  const filteredCountry = countries.filter(({ name }) => {
    return name.common.toLowerCase().includes(searchCountry.toLowerCase());
  });
  const indexOfLastCountry = page * countriesPerPage;
  const indexOfFirstPost = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredCountry.slice(
    indexOfFirstPost,
    indexOfLastCountry
  );
  const totalPages = Math.ceil(filteredCountry.length / countriesPerPage);

  return (
    <div className="app">
      <h1>Countries</h1>
      <div className="app__container countries">
        <div className="countries__search">
          <input
            onChange={searchCountryInput}
            className="countries__search-input"
            type="text"
            placeholder="Search country..."
          />
          <CountriesRegion
            value={countryRegionsId}
            onClickCountryRegion={(i) => setCountryRegionsId(i)}
          />
        </div>
        <div className="countries__body">
          {loading ? (
            <Skeleton />
          ) : (
            <>
              <Countries
                countries={currentCountries}
                handleClick={handleClick}
                activeIdCountry={activeIdCountry}
              />
              <CountriesInfo activeCountry={activeCountry} />
            </>
          )}
        </div>
        <div className="countries__pagination">
          <Pagination
            className="countries__pagination-item"
            count={totalPages}
            page={page}
            onChange={handleChangePage}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
