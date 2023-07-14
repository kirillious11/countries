import "./countriesRegion.css";

const CountriesRegion = ({ regions, value, onClickCountryRegion }) => {
  return (
    <ul className="regions__list">
      {regions.map((region, i) => {
        return (
          <li
            key={i}
            onClick={() => onClickCountryRegion(region.name.toLowerCase())}
            className={`regions__item ${
              value === region.name.toLowerCase() ? "active" : ""
            }`}
          >
            {region.name}
          </li>
        );
      })}
    </ul>
  );
};

export default CountriesRegion;
