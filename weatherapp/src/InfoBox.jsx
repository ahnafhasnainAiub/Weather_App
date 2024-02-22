import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './InfoBox.css';

function InfoBox({info}) {
   
 let INIT_HOT = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
 let INIT_COLD = "https://media.istockphoto.com/id/1289449088/photo/branches-covered-with-ice-after-freezing-rain-sparkling-ice-covered-everything-after-ice.webp?b=1&s=170667a&w=0&k=20&c=KmUu3hmpzMt22rs0DgfbOtQNbCM0NvycsaOsXGIv8qk=";
 let INIT_RAIN = "https://media.istockphoto.com/id/683973882/photo/bluured-photo-of-indian-road-traffic-during-rain.webp?b=1&s=170667a&w=0&k=20&c=Od0FylpwmnD8NNIMsrzR_3xPmnJfY4HC537Mq58XLCA= ";
 
 return (
  <div className='InfoBox'>
    <div className='cardContainer'> 
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image={info.humidity > 80 && info.temp > 15 ? INIT_RAIN : info.temp > 15 ? INIT_HOT : INIT_COLD }
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {info.city} {info.humidity > 80 && info.temp > 15 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/>  : <AcUnitIcon/> }
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <p>Temperature = {info.temp}&deg;C</p>
        <p>Humidity = {info.humidity}</p>
        <p>Temp = {info.tempMin}&deg;C</p>
        <p>Temp = {info.tempMax}&deg;C</p>
        <p>The weather can be described as <i>{info.weather}</i> feels like {info.feelsLike}&deg;C</p>
      </Typography>
    </CardContent>
   
    </Card>
   </div> 
  </div>
  );
}

export default InfoBox