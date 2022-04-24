import axios from 'axios';
import './index.css'
import { useEffect, useState } from 'react';
import CountryComponent from './CountryComponent';

function App() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    const countriesRetrieve = async () => {
      const res = await axios.get("https://restcountries.com/v3.1/all")
      setCountries(res.data)
    }
    
  countriesRetrieve()
  }, [countries])

  return (
    <div>
        <h1 class="App">Welcome to our Country API</h1>
      {
        <div>
          <CountryComponent countries={countries} setCountries={setCountries}/>
        </div>
      }
    </div>
  );
}

export default App;
