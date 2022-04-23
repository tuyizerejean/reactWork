import "./styles.css";
import axios from "axios";
import CountryComponent from "./CountryComponent";


export default function App() {
  
  //suppose this is a response from api call
  axios.get('https://restcountries.com/v3.1/all').then(resp => {
    const  countries=resp.data
  return (
    <div>
    { countries.map((country)=>(
      <CountryComponent
      countryName={country.name}
      details={countries}
      />
    ))}
    </div>
  )
})
   
}
