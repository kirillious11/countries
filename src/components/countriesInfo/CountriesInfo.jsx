import './countriesInfo.css';

const InfoCountry = ({ activeCountry: { flags, altSpellings, name, region, timezones, languages} }) => {

const InfoCountry = ({ countryInfo }) => {
  // console.log(countryInfo);
  return (
    <>
      {/* <div>Текущая страна: {countryInfo.name?.common}</div> */}
      {/* <div className="info">
        <div className="info__container">
          <span className="info__flag">{countryInfo.flags?.png}</span>
          <div className="info-up">
            <h2 className="info__name">{countryInfo.name?.common}</h2>
            <h3 className="info__capital">{countryInfo.capital?.[0]}</h3>
          </div>
          <div className="info-down">
            <span>{countryInfo.region}</span>
            <span>{countryInfo.timezones?.[0]}</span>
            <span>{countryInfo.languages?.[0]}</span>
          </div>
        </div>
      </div> */}
      <div className="countries__info">
        <div className="countries__info-container">
          <span className="countries__info-flag"></span>
          <div className="countries__info-up">
            <h2 className="countries__info__name">asd</h2>
            <h3 className="countries__info__capital">asdasdas</h3>
          </div>
          <div className="countries__info-down">
            <span>asdasd</span>
            <span>asdasdas</span>
            <span>asdasdaa</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCountry;
