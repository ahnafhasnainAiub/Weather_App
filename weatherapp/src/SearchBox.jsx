import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';


function SearchBox({ updateInfo }) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "528ae1c27901228aef9581e30717d923";
    

    let getWeatherInfo = async () => {
      try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        // console.log(jsonResponse);

        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
      } catch(err){
        throw err;
      }
    };
    
    let handleChange = (e) => {
        setCity(e.target.value);
    }
    let handleSubmit = async (ev) => {
      try{ 
      ev.preventDefault();
       console.log(city);
       setCity("");
       let newInfo = await getWeatherInfo();
       updateInfo(newInfo);
      } catch(err){
        setError(true);
      }

    };

  return (
    <div className="SearchBox">
    
    <h3>Search Weather</h3>
    <form onSubmit={handleSubmit}>
    <TextField id="city" label="City Name" variant="outlined" required
    value={city}
    onChange={handleChange}/>
    <br></br>
    <br></br>
    <Button variant="contained" type="submit">Search</Button>
    
     {error && <p>No such Place found in data!</p>}
    </form>
 
</div>
  )
}

export default SearchBox;