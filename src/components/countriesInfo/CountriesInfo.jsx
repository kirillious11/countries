import "./countriesInfo.css";

const InfoCountry = ({
  activeCountry: {
    flags,
    altSpellings,
    name,
    region,
    timezones,
    languages,
    capital,
  },
}) => {
  // if (!languages) {
  //   return <span>Нет языка</span>;
  // }
  return (
    <div className="info">
      <div className="info__container">
        <div className="info__flag">
          <img src={flags.png} alt={altSpellings[1]} />
        </div>
        <div className="info-up">
          <h2 className="info__name">Country : {name.common}</h2>
          <h3 className="info__capital">
            Capital :
            {!capital ? (
              <span style={{ color: "red" }}> Capital not specified</span>
            ) : (
              Object.values(capital)[0]
            )}
          </h3>
        </div>
        <div className="info-down">
          <span>region : {region}</span>
          <span>time : {timezones?.[0]}</span>
          <span>
            language :
            {!languages ? (
              <span style={{ color: "red" }}> Language not specified</span>
            ) : (
              Object.values(languages)[0]
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InfoCountry;
