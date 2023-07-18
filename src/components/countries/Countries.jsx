import "./countries.css";

const Countries = ({ countries, handleClick, activeIdCountry }) => {
  console.log(countries);
  return (
    <>
      <ul className="countries__list">
        {countries.length < 1 ? (
          <span>Countries not found</span>
        ) : (
          countries.map(({ area, flags: { png, alt }, name }, i) => {
            const key = `${area}_${i}`;

            return (
              <li
                onClick={() => handleClick(area)}
                className={`country__item ${
                  activeIdCountry === area ? "active" : ""
                }`}
                key={key}
              >
                <img src={png} alt={alt} style={{ width: 50 }} />
                <span>
                  {name.common} {area}
                </span>
              </li>
            );
          })
        )}
      </ul>
    </>
  );
};

export default Countries;
