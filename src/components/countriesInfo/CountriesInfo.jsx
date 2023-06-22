import "./countriesInfo.css";

const InfoCountry = ({
  activeCountry: { flags, altSpellings, name, region, timezones, languages },
}) => {
  return (
    <div className="info">
      <div className="info__container">
        <div className="info__flag">
          <img src={flags.png} alt={altSpellings[1]} />
        </div>
        <div className="info-up">
          <h2 className="info__name">{name.common}</h2>
          <h3 className="info__capital">{name.official}</h3>
        </div>
        <div className="info-down">
          <span>{region}</span>
          <span>{timezones?.[0]}</span>
          <span>{languages?.[0]}</span>
        </div>
      </div>
    </div>
  );
};

export default InfoCountry;
