import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'

function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState(
    {
        city: "New York",
        feelsLike: 1.52,
        humidity: 59,
        temp: 3.97,
        tempMax: 5.28,
        tempMin: 2.48,
        weather: "overcast clouds",
    
    });
  
  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp