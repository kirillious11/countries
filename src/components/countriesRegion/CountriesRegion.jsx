import { useState } from "react";
import "./countriesRegion.css";

const CountriesRegion = ({ value, onClickCountryRegion }) => {
  // console.log(value);
  const [regions] = useState([
    "All",
    "Asia",
    "Europe",
    "Africa",
    "Oceania",
    "Americas",
    "Antarctic",
  ]);

  return (
    <ul className="regions__list">
      {regions.map((region, i) => {
        return (
          <li
            key={i}
            onClick={() => onClickCountryRegion(region.toLowerCase())}
            className="regions__item"
          >
            {region}
          </li>
        );
      })}
    </ul>
  );
};

export default CountriesRegion;
