import { useEffect, useState } from 'react';
import axios from 'axios';

import Countries from '../countries/Countries';
import CountriesInfo from '../countriesInfo/CountriesInfo';

import './App.css';

const URL_API = 'https://restcountries.com/v3.1/all';

function App() {
	const [countries, setCountries] = useState([]);
	const [activeIdCountry, setActiveIdCountry] = useState(null);
	const [activeCountry, setActiveCountry] = useState(null);
	const [loading, setLoading] = useState(true);

	const getActiveCountry = (countries, id) => {
		const [activeCountry] = countries.filter(({ area }) => area === id);

		return activeCountry;
	};

	const fetchCountries = async () => {
		const { data } = await axios.get(URL_API);
		setCountries(data);
		setActiveCountry(getActiveCountry(data, data[0].area));
		setActiveIdCountry(data[0].area);
		setLoading(false);
	}

	useEffect(() => {
		fetchCountries();
	}, []);

	const handleClick = (id) => {
		setActiveIdCountry(id);
		setActiveCountry(getActiveCountry(countries, id));
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
							<CountriesInfo activeCountry={activeCountry}/>
						</>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
