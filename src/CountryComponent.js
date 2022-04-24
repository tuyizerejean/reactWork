const CountryComponent = (props) => {
  const {countries} = props;
  return ( 
      <div className="main-container">
          
              {
                  countries.map((country) => (
                      <div className="country-card" key={country.name}>
                          <div>
                              <img src={country.flags.png} alt="Country" />
                          </div>
                          <div>
                              <h5>{country.name.official}</h5>
                              <p><b>Population: </b>{country.population}</p>
                              <p><b>Region: </b>{country.region}</p>
                              <p><b>Capital: </b>{country.capital}</p>
                          </div>
                      </div>
                  ))
              }
          </div>
  );
}
export default CountryComponent