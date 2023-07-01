// import { useState } from "react";

import "./countries.css";

const Countries = ({ countries, handleClick, activeIdCountry }) => {
  // const checkCountry = countries[""];

  // if (checkCountry) {
  //   ("Перейдите на 1 страницу");
  // }

  return (
    <>
      <ul className="countries__list">
        {/* {countries === countries[""] ? (
          <span>Перейдите на 1 страницу</span>
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
        )} */}
        {countries.map(({ area, flags: { png, alt }, name }, i) => {
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
        })}
      </ul>
    </>
  );
};

export default Countries;
